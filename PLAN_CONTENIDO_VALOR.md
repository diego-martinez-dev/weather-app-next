# Plan — Contenido de valor: Calidad del aire, Sol y Luna, Clima mes a mes, Índice UV

> Handoff para la terminal. Seguí `CLAUDE.md`: Next 16 App Router, CSS plano (los `style={{}}` inline
> que ya usa el proyecto están OK), i18n en los 6 idiomas para textos de UI visibles, contenido de
> ciudad **solo en español**, alias `@/`. Ejecutar **por fases y en orden**. Al final de cada fase:
> `npm run build`, validar los 6 locales, commit. Al terminar todo: push a `main` (NO commitear borrados
> de `.agents/`), bumpear `LAST_CONTENT_UPDATE` en `sitemap.ts`, actualizar `memory.md`.

## Contexto y principio rector

Objetivo doble: (1) más valor para el usuario → mejor perfil para AdSense; (2) más superficie de
anuncios cuando AdSense apruebe. **Guardarraíl anti-"low value":** NO crear páginas por-ciudad finitas
(UV/aire con 2 líneas). El contenido de dato-en-vivo va como **sección enriquecida dentro de la página
de ciudad que ya existe** (que ya tiene contenido sustancial); el contenido educativo evergreen va en
**un hub rico**. Nada de 80 páginas plantilla nuevas y delgadas.

**Estado actual verificado:**
- Calidad del aire: se trae vía `/api/weather?type=air&lat=&lon=` → `airQuality.list[0].main.aqi` (escala
  1-5) y `airQuality.list[0].components` (co, no, no2, o3, so2, pm2_5, pm10, nh3, en µg/m³). Hoy en
  `WeatherCard.tsx` solo se muestra una etiqueta de color con el AQI 1-5; **los componentes NO se muestran**.
- Amanecer/atardecer: `weather.sys.sunrise` / `weather.sys.sunset` (epoch). Ya se muestran como hora
  suelta en `WeatherCard.tsx`. **No hay** duración del día ni fase lunar.
- UV: **no disponible** en los endpoints actuales (`weather`/`forecast`/`air_pollution`).

---

## FASE 1 — Calidad del aire enriquecida (esfuerzo bajo, dato ya disponible)

### 1.1 Helper de interpretación
Crear `src/lib/airQuality.ts`:
- `interface AirComponents { co:number; no:number; no2:number; o3:number; so2:number; pm2_5:number; pm10:number; nh3:number }`
- `getAqiInfo(aqi:number): { level:1..5; labelKey:string; color:string; adviceKey:string }` — reutilizá los
  colores/labels que ya están en `WeatherCard.tsx` (aqi_excellent…aqi_very_bad) para no divergir.
- `getPollutantLevel(name, value): 'bueno'|'moderado'|'alto'` — umbrales estándar por contaminante
  (PM2.5, PM10, O3, NO2 son los relevantes; usar los breakpoints OMS/EPA habituales).
- Consejo de salud por nivel AQI (quién debe cuidarse: niños, mayores, asma/EPOC; si conviene ejercicio
  al aire libre; si usar tapabocas) → claves i18n `app.air.advice_1..5`.

### 1.2 Sección "Calidad del aire" en la página de ciudad
El dato de aire es en vivo (depende de coords del fetch), así que va en el **Client Component**
(`CityPageClient.tsx` / `WeatherClient.tsx`), no en el Server. Agregá una sección debajo de la tarjeta
del clima que muestre, cuando `airQuality` esté disponible:
- El AQI 1-5 con su etiqueta y color (ya existe, reusar).
- **Desglose de contaminantes** (PM2.5, PM10, O₃, NO₂) con su valor y nivel (bueno/moderado/alto).
- El **consejo de salud** según el AQI (de 1.1).
Componente nuevo `src/components/AirQuality.{tsx,css}` (con su CSS par, patrón del proyecto). i18n de
todas las etiquetas visibles en los 6 idiomas.

### 1.3 Hub educativo `/calidad-del-aire` (Server Component, contenido original evergreen)
Una **sola** página rica (no per-ciudad). `src/app/calidad-del-aire/page.tsx`:
- H1, intro, y contenido original en español: qué es el ICA/AQI, la escala 1-5, qué es cada contaminante
  (PM2.5, PM10, O₃, NO₂, SO₂, CO) y sus efectos en salud, quién está en riesgo, qué hacer en días de mala
  calidad. FAQ `<details>` + JSON-LD FAQPage + BreadcrumbList. Canonical www.
- Enlazar: desde la sección de aire de la página de ciudad ("¿Qué significan estos valores? →
  /calidad-del-aire"), desde el Footer, y agregar al `sitemap.ts` (priority 0.6).

---

## FASE 2 — Sol y Luna (esfuerzo bajo, sin API nueva)

### 2.1 Helper de fase lunar
Crear `src/lib/moon.ts`: `getMoonPhase(date:Date): { phaseKey:string; illumination:number; emoji:string }`
mediante el cálculo astronómico estándar (edad lunar a partir de una luna nueva de referencia; 8 fases).
Sin API. Claves i18n `app.moon.new`, `app.moon.waxing_crescent`, … `app.moon.waning_crescent`.

### 2.2 Sección "Sol y Luna" en la página de ciudad
Componente `src/components/SunMoon.{tsx,css}` en el Client (usa `weather.sys.sunrise/sunset` y la fecha):
- Amanecer y atardecer (ya disponibles).
- **Duración del día** (sunset − sunrise, formateado "12 h 34 min").
- **Fase lunar** actual (emoji + nombre + % iluminación).
Todo con i18n. Es liviano y muy buscado ("hora del atardecer en {ciudad}").

---

## FASE 3 — Clima mes a mes (contenido original; CUIDAR EXACTITUD)

> ⚠️ **Regla de exactitud (crítica para AdSense y credibilidad):** NO inventar estadísticas precisas
> (mm de lluvia, nº de días de lluvia). Usar **rangos de temperatura aproximados basados en climatología
> real conocida** de cada ciudad y una **clasificación cualitativa** de lluvia (seco / moderado / lluvioso).
> Debe ser coherente con lo que ya dicen `cityClimate.ts` y `cityDescriptions.ts` de esa ciudad. Ante la
> duda, describir cualitativamente en vez de dar un número dudoso.

### 3.1 Data file
`src/data/cityMonthlyClimate.ts`:
```ts
export interface MonthClimate { tempRange: string; rain: 'seco'|'moderado'|'lluvioso'; note?: string }
export interface CityMonthly { intro: string; months: MonthClimate[] } // months.length === 12, ene→dic
export const cityMonthly: Record<string, CityMonthly> = { ... }
export function getCityMonthly(slug: string): CityMonthly | undefined
```
**Empezar por un set curado de ciudades de alto tráfico** (del reporte GSC), NO las 80:
`caracas, montevideo, medellin, bogota, madrid, barcelona, puebla, guayaquil, guadalajara, santo-domingo,
murcia, buenos-aires, lima, santiago, quito`. (Se amplía en sesiones futuras.)

### 3.2 Render (Server Component — es contenido estático, va server-side)
En `src/app/clima/[slug]/page.tsx`, si `getCityMonthly(slug)` existe, agregá una sección
**"Clima en {ciudad} mes a mes"**: `intro` + una **tabla/lista de 12 filas** (mes · rango de temp ·
etiqueta de lluvia con color · nota). Server-rendered (crawleable). Encabezado `<h2>`. Este es el mayor
motor SEO (captura "clima en {ciudad} en {mes}") y de monetización (intención de viaje).

> NO crear rutas `/clima/[ciudad]/[mes]` en este plan (riesgo de páginas finas a escala). Queda para una
> fase futura solo si esta sección rinde.

---

## FASE 4 — Índice UV  ⛔ PRECONDICIÓN: Diego debe habilitar la One Call API 3.0

> **NO ejecutar esta fase hasta que Diego confirme que la API key tiene acceso a la One Call API 3.0**
> (`https://api.openweathermap.org/data/3.0/onecall`). El UV no viene en los endpoints actuales. Diego
> debe suscribirse a "One Call by Call" en OpenWeather (tiene tier gratis de 1.000 llamadas/día pero
> requiere alta y tarjeta) y avisar. Si el endpoint responde 401/403, dejar la UI en "no disponible" y
> NO romper el build.

### 4.1 API route
En `src/app/api/weather/route.ts`, agregar `type=onecall` (o `type=uv`) que llame a
`data/3.0/onecall?lat=&lon=&units=metric&exclude=minutely&appid=` y devuelva el JSON. Mantener el patrón
de manejo de errores existente.

### 4.2 Helper + sección UV
- `src/lib/uv.ts`: `getUvInfo(uvi:number): { level, labelKey, color, adviceKey }` con la escala OMS
  (0-2 bajo, 3-5 moderado, 6-7 alto, 8-10 muy alto, 11+ extremo) y consejo de protección (protector solar
  SPF, sombra en horas pico, ropa/gafas). Claves i18n `app.uv.*`.
- Componente `src/components/UvIndex.{tsx,css}` en el Client: UV actual + UV **por hora** del día (de
  `hourly[].uvi`) + consejo. i18n completo.

---

## FASE 5 — Verificar, desplegar y memoria

1. `npm run build` OK. Locales: `for l in es en pt fr de it; do python3 -c "import json;json.load(open('src/locales/$l.json'))" && echo "$l OK"; done`
2. Verificar server-rendered (Googlebot) del contenido estático nuevo:
   - Hub aire: `f=$(find .next -path "*calidad-del-aire.html"|head -1); grep -o "PM2.5\|Preguntas frecuentes" "$f"`
   - Mes a mes: `f=$(find .next -path "*clima/caracas.html"|head -1); grep -o "mes a mes\|Clima en Caracas mes" "$f"`
   (Aire en vivo, Sol/Luna y UV son client-side; se verifican en el navegador, no en HTML crudo.)
3. Bumpear `LAST_CONTENT_UPDATE` a la fecha de hoy. Sitemap: agregar `/calidad-del-aire`.
4. Commit por fase + push final a `main`. **No** commitear borrados de `.agents/`.
5. **Actualizar `memory.md`** (sección SEO): qué se agregó por fase, que la calidad del aire ahora muestra
   componentes + consejo de salud + hub `/calidad-del-aire`, la sección Sol y Luna (fase lunar calculada
   sin API), el clima mes a mes (data file curado, server-rendered, exactitud cualitativa) y — si se hizo —
   el índice UV con One Call 3.0. Anotar que UV requiere la One Call API 3.0 activa.

---

## Notas de monetización (para cuando AdSense apruebe — NO implementar ahora)

- Las secciones largas (hub de aire, clima mes a mes) son las mejores para unidades in-content.
- Afiliados contextuales a considerar: protector solar en la sección UV, purificador de aire en la de
  calidad del aire, hoteles/vuelos en clima mes a mes. (Requiere altas de afiliados; futuro.)
- No tocar los slots de AdSense todavía (siguen como placeholder hasta aprobación).

## Criterio general
- **Reutilizar, no reinventar:** colores/labels de AQI ya existen en `WeatherCard.tsx`; los componentes
  nuevos siguen el patrón `.tsx`+`.css`; datos nuevos en data files, no lógica dispersa.
- **Exactitud > volumen.** Mejor 15 ciudades mes-a-mes correctas que 80 con datos inventados.
- **i18n en los 6 idiomas** para toda etiqueta de UI; contenido de ciudad/hub en español.
- **No tocar** el host canónico (siempre www).
```
