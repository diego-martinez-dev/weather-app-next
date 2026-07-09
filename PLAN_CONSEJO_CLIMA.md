# Plan — Consejo del clima más largo, basado en pronóstico y con léxico por país

> Handoff para ejecutar en la terminal. Seguí `CLAUDE.md` (CSS plano, i18n en los 6 idiomas,
> sin Tailwind). El consejo ya existe (commit c8119a9: `src/lib/weatherAdvice.ts`,
> `app.advice.*` en los locales, render en `src/components/WeatherClient.tsx`). Este plan lo
> **reescribe** para que sea más largo, use datos reales del pronóstico y adapte el vocabulario al
> país del usuario.

## Problemas a resolver

1. **El consejo contradice el pronóstico.** Hoy el consejo solo mira la condición actual
   (`weather.weather[0].main`) + temperatura. Resultado real visto por el usuario: el consejo decía
   *"Cielo nublado. Podría cambiar; lleva un abrigo ligero por si acaso"* mientras los recuadros de
   abajo marcaban **100% de probabilidad de lluvia**. El consejo DEBE leer el pronóstico (la
   probabilidad de lluvia del día) y ser coherente con él.
2. **El consejo es corto.** Debe ser ~**3x más largo**, mencionando el dato concreto. Ejemplo
   pedido por el usuario: *"El pronóstico indica una probabilidad de lluvia del 100% para hoy, así
   que te aconsejamos llevar sombrilla o un abrigo para las posibles lluvias del día…"*.
3. **El léxico no cambia por país.** "Sombrilla/paraguas", "manejar/conducir", "campera/chamarra/
   chaqueta/abrigo", "carro/auto/coche" varían entre Colombia, Argentina, México, España. El texto
   debe adaptarse al **país** (`country` de `useSettings()`), no solo al idioma.

## Datos disponibles (verificados)

- `forecast.list[]` (OpenWeather 5d/3h): cada entrada tiene `pop` (0-1, prob. de precipitación),
  `main.temp`, `main.temp_max`, `main.temp_min`, `dt`, `dt_txt`, `weather[0].main`.
- `weather` (actual): `weather[0].main` (inglés), `main.temp`, `main.humidity`, `wind.speed`.
- `useSettings()` expone `country` (código 2 letras: `ES`, `CO`, `MX`, `AR`, `US`, `UK`) y
  `language` (`es,en,pt,fr,de,it`). **OJO:** país e idioma son independientes (alguien puede ver en
  español con país AR).
- react-i18next soporta interpolación `{{var}}` de forma nativa.

---

## TAREA 1 — Extraer señales del pronóstico

Crear helper `src/lib/weatherSignals.ts` que reciba `weather` y `forecast` y devuelva:
```ts
interface WeatherSignals {
  conditionMain: string;   // weather[0].main (inglés)
  tempC: number;           // temp actual en °C
  rainProbToday: number;   // 0-100, máximo pop de las entradas de HOY
  tempMaxToday: number;    // °C
  tempMinToday: number;    // °C
  windKmh: number;         // wind.speed (m/s) * 3.6
}
```
- "Hoy" = entradas de `forecast.list` cuyo `dt_txt` cae en la fecha local actual (si no hay
  ninguna futura hoy, usar las próximas ~8 entradas / 24h como fallback).
- `rainProbToday = round(max(pop de hoy) * 100)`.

## TAREA 2 — Escenarios data-driven (reescribir `weatherAdvice.ts`)

Reemplazar `getWeatherAdviceKey` por `getAdvice(signals): { scenario: string; params: Record<string,number> }`.
Prioridad (de mayor a menor), con la probabilidad de lluvia como protagonista:

1. `conditionMain === 'Thunderstorm'` **o** `rainProbToday >= 70 && Thunderstorm en forecast` → **`storm`**
2. `rainProbToday >= 70` (o lloviendo ahora: Rain/Drizzle) → **`rainVeryLikely`**
3. `rainProbToday >= 35` → **`rainPossible`**
4. condición de baja visibilidad (Mist/Fog/Haze/Smoke/Dust/Sand/Ash/Squall) → **`lowVisibility`**
5. `tempMaxToday >= 33` → **`extremeHeat`**
6. `tempMinToday <= 6` → **`cold`**
7. `Clear && tempMaxToday >= 28` → **`hotSunny`**
8. `Clear` → **`clearNice`**
9. `Clouds` → **`cloudyDry`** (nublado pero con baja prob. de lluvia)
10. default → **`general`**

`params` debe incluir lo que la plantilla use: `rainProbToday`, `tempMaxToday`, `tempMinToday`, `windKmh`.

## TAREA 3 — Plantillas largas (3x) con interpolación, en los 6 idiomas

En cada `src/locales/<lang>.json`, bajo `app.advice`, una plantilla por escenario (~2-3 frases),
usando placeholders de datos `{{rainProbToday}}`, `{{tempMaxToday}}`… y de **vocabulario**
`{{umbrella}}`, `{{jacket}}`, `{{drive}}`, `{{car}}`, `{{sunscreen}}` (ver Tarea 4).

**Ejemplo objetivo (es, escenario `rainVeryLikely`):**
```
"rainVeryLikely": "El pronóstico indica una probabilidad de lluvia del {{rainProbToday}}% para hoy, con máximas de {{tempMaxToday}}°. Te aconsejamos salir con {{umbrella}} y, si podés, un {{jacket}} impermeable. Si vas a {{drive}} en moto o bici, extremá la precaución: el pavimento mojado alarga las frenadas y reduce el agarre."
```
- Mantener `app.advice.title` (Consejo/Tip/…).
- Que cada plantilla sea genuinamente útil y coherente con el dato (nunca decir "podría cambiar"
  cuando la probabilidad es alta).
- 6 idiomas. El vocabulario por país (Tarea 4) aplica sobre todo al **español**; para
  `en/pt/fr/de/it` usar el vocabulario por defecto del idioma (no hace falta variación por país).

## TAREA 4 — Léxico por país

Crear `src/lib/localLexicon.ts`:
```ts
// Devuelve el vocabulario a interpolar según país+idioma.
export function getLexicon(language: string, country: string): Record<string,string> { ... }
```
Para **español**, variar por `country`. Ejemplos concretos (ajustar/ampliar con criterio nativo):

| término    | ES (España) | CO (Colombia) | MX (México) | AR (Argentina) | LatAm default |
|------------|-------------|---------------|-------------|----------------|---------------|
| `umbrella` | paraguas    | sombrilla     | paraguas    | paraguas       | paraguas      |
| `jacket`   | abrigo      | chaqueta      | chamarra    | campera        | abrigo        |
| `drive`    | conducir    | manejar       | manejar     | manejar        | manejar       |
| `car`      | coche       | carro         | carro       | auto           | auto          |
| `sunscreen`| crema solar | bloqueador    | bloqueador  | protector solar| protector solar|

- Para `en`: umbrella=umbrella, jacket=jacket, drive=drive, car=car, sunscreen=sunscreen.
  Para `pt/fr/de/it`: términos por defecto del idioma (guarda-chuva/parapluie/Regenschirm/ombrello, etc.).
- **Voseo (Argentina), opcional pero recomendado:** si `country === 'AR'` y `language === 'es'`,
  usar formas voseo en las plantillas ("te aconsejamos salir… llevá… extremá…"). La forma más
  limpia es tener una variante `app.adviceAR.*` para los escenarios cuando país=AR+es, o incluir
  los verbos imperativos en el léxico (`take`, `be careful`) y referenciarlos en la plantilla.
  Implementar al menos los 2-3 escenarios más frecuentes (rain*, heat) con voseo.

## TAREA 5 — Render en `WeatherClient.tsx`

- Importar `getWeatherSignals`, `getAdvice`, `getLexicon`.
- `const signals = getWeatherSignals(weather, forecast);`
- `const { scenario, params } = getAdvice(signals);`
- `const lexicon = getLexicon(language, country);`  // language y country de useSettings()
- `const advice = t(\`app.advice.\${scenario}\`, { ...params, ...lexicon });`
- Renderizar en el mismo recuadro actual (ícono + `app.advice.title` + texto). Como el texto ahora
  es más largo, revisar que el recuadro respire bien en móvil.
- Si `forecast` aún no cargó, mostrar un consejo base solo con la condición actual (fallback), o no
  renderizar el recuadro hasta tener señales — elegir lo que evite parpadeo.

## TAREA 6 — Verificar y desplegar

- `npm run build` debe pasar; validar que los 6 JSON de locales sigan siendo válidos
  (`python3 -c "import json;json.load(open('src/locales/es.json'))"` para cada uno).
- Probar manualmente cambiando país en el menú: con país **CO** y lluvia → "sombrilla";
  **AR** → "paraguas"/"campera" (y voseo si se implementó); **MX** → "chamarra"/"bloqueador";
  **ES** → "paraguas"/"conducir". Y un caso de alta probabilidad de lluvia para confirmar que el
  consejo cita el `%` real y NO contradice el pronóstico.
- Commit + push a `main`. **No** commitear los borrados de `.agents/`.
- Actualizar `memory.md`: el consejo ahora es data-driven (usa `pop` del forecast), más largo, y
  adapta el léxico por país (`localLexicon.ts`).

---

## Notas

- **Coherencia ante todo:** el consejo nunca debe contradecir los recuadros de pronóstico. La
  probabilidad de lluvia del día manda sobre la condición actual.
- **Precisión = AdSense:** textos correctos y útiles, sin relleno ni datos inventados.
- **Escala:** el vocabulario cubre los 4 países hispanos del selector (ES/CO/MX/AR) + un default
  LatAm para el resto; no hace falta cubrir todos los países del mundo.
