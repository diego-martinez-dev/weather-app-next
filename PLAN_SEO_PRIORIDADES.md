# Plan SEO — Prioridades 1, 2 y 3 (basado en el reporte GSC del 8-jul-2026)

> Handoff para ejecutar en la terminal en una sola pasada. Seguí `CLAUDE.md`: Next 16 App Router,
> CSS plano (los recuadros usan `style={{}}` inline como ya hace el proyecto — está bien), alias `@/`,
> contenido de ciudad/país **solo en español**. Al terminar: `npm run build`, validar los 6 locales,
> `curl` Googlebot de verificación, commit + push a `main` (NO commitear borrados de `.agents/`),
> bumpear `LAST_CONTENT_UPDATE` en `sitemap.ts`, y actualizar `memory.md`.

## Contexto (por qué estas tareas)

El reporte de Search Console (3 meses) muestra un despegue: **9 clics / 3.435 impresiones / ~72 páginas
indexadas**, posición media reciente ~25 (venía de 0 clics, 412 impr, pos 56). El cuello de botella ya
NO es indexación — es que **casi todo rankea en página 3-4 (pos 25-45)** salvo Caracas (pos 17, 8 clics).
Estas tareas cosechan lo que ya está cerca de página 1 y refuerzan los de alta demanda. Datos concretos
del reporte citados en cada tarea.

**Ya verificado (no re-descubrir):**
- Las 6 ciudades de alta demanda **NO tienen** entrada en `src/data/cityDescriptions.ts`:
  `murcia`, `puebla`, `guayaquil`, `guadalajara`, `montevideo`, `santo-domingo`.
- En `src/data/cityClimate.ts` **falta solo `santo-domingo`** (las otras 5 ya la tienen).
- Las guías objetivo ya existen en `src/data/guides.ts` (`title.es`/`description.es`/`body`).
- `/manana` ya existe: `src/app/clima/[slug]/manana/page.tsx` (Server, SEO+breadcrumb) +
  `MananaCityClient.tsx` (Client, fetch del forecast). Es la **plantilla exacta** para `/por-hora`.

---

## TAREA 1 — Prioridad 1A: CTR de las guías que ya están en página 1

Estas guías rankean en **posición 6-10 con impresiones y 0 clics** (a un paso de recibir clics). El `title`
ya matchea la query; la palanca es una **`description.es` más atractiva** (gancho + beneficio concreto,
que invite al clic sin ser clickbait). En `src/data/guides.ts`, reescribí `description.es` (y podés
afinar `title.es`) de estas guías:

| slug | impr | pos | foco de la nueva description |
|------|------|-----|------------------------------|
| `estaciones-del-ano-en-argentina` | 207 | 8,7 | mes a mes / qué esperar en cada estación; mencionar que las estaciones están invertidas |
| `como-se-mide-la-lluvia-y-probabilidades` | 86 | 9,5 | qué significa "70% de lluvia" y los mm; respuesta útil concreta |
| `ciudades-mas-lluviosas-de-colombia` | 22 | 9 | ranking + el porqué (Chocó, etc.) |
| `mejores-meses-para-viajar-a-la-playa-en-latinoamerica` | 10 | 7,9 | mes a mes por destino |
| `como-vestirse-segun-la-sensacion-termica` | 4 | 6,5 | qué ponerte según °C reales vs sensación |
| `que-es-la-humedad-y-por-que-el-calor-humedo-agobia-mas` | 5 | 8,6 | por qué el calor húmedo agobia más |

- Mantené la longitud de `description.es` en ~150-160 caracteres (que no se corte en el SERP).
- No toques el `body` (ya rankea). Solo `title`/`description`. `title.en`/`description.en` opcional.
- **No inventes datos**: coherencia con lo que dice el `body` de cada guía.

## TAREA 2 — Prioridad 1B: bloque de respuesta directa "¿Qué temperatura hace en {ciudad}?"

La query **"qué temperatura hace en {ciudad}"** aparece en posición ~10 (Caracas 46 impr, Santo Domingo
11 impr). Un bloque de respuesta concisa y **visible** (no dentro de `<details>`) apunta al *featured
snippet* (posición 0).

En `src/app/clima/[slug]/page.tsx` (Server Component), agregá — **solo si `climate?.avgTempRange` existe** —
un bloque corto justo **después del párrafo intro** y antes del recuadro de tips, con este patrón visual
(mismo estilo de recuadro que el resto: `var(--color-surface)`, `var(--radius-md)`, borde, sombra):

```tsx
{climate?.avgTempRange && (
  <div style={{ maxWidth: 900, margin: '8px auto 16px', padding: '14px 20px', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', boxShadow: 'var(--color-shadow-sm)' }}>
    <h2 style={{ margin: '0 0 6px', fontSize: '1rem' }}>¿Qué temperatura hace en {city}?</h2>
    <p style={{ margin: 0, fontSize: '0.92rem', lineHeight: 1.6 }}>
      En {city} la temperatura suele ubicarse en el rango de {climate.avgTempRange}. {climate.bestTimeToVisit ? 'Para el detalle por temporada, mirá la información climática más abajo.' : ''} Consulta arriba la temperatura exacta de ahora mismo y el pronóstico por horas.
    </p>
  </div>
)}
```
- Redacción concisa y directa (Google premia respuestas cortas para snippets). Una sola respuesta por
  página. No dupliques el H1.
- **Verificá que Caracas tenga `cityClimate`** (es el nº1 en tráfico). Si le falta `avgTempRange`,
  completá su entrada en `cityClimate.ts` para que el bloque aparezca.

## TAREA 3 — Prioridad 2: contenido de las 6 ciudades de alta demanda

Estas 6 páginas tienen **muchas impresiones pero están en página 3-4** (Murcia 409 impr pos 26, Puebla
285 pos 29, Guayaquil 188 pos 26, Guadalajara 129 pos 28, Montevideo 108 pos 48, Santo Domingo 107 pos
31). Más contenido único server-rendered ayuda a subir.

1. **`src/data/cityDescriptions.ts`** — agregá `description` (tip climático, ~2-3 frases) y `touristTip`
   (consejo para turistas) **para las 6**: `murcia`, `puebla`, `guayaquil`, `guadalajara`, `montevideo`,
   `santo-domingo`. Seguí el estilo/estructura de las entradas existentes. Contenido original y preciso.
2. **`src/data/cityClimate.ts`** — agregá la entrada faltante de **`santo-domingo`** con `avgTempRange`,
   `bestTimeToVisit`, `rainySeasons` y **4 FAQ** (mismo formato que las demás). Clima tropical del Caribe:
   cálido todo el año (~24-31°C), temporada seca dic-abr, lluvias may-nov, huracanes ago-oct.
3. Estas mejoras se renderizan solas (la página de ciudad ya mapea description/touristTip/climate/FAQ en
   servidor). No hay que tocar el render.

## TAREA 4 — Prioridad 3A: reforzar `/manana` con contenido server-side

`/manana` ya rankea (sao-paulo/manana pos 14,7; "tiempo mañana" pos 11) pero su contenido es
client-rendered (detrás del fetch en `MananaCityClient`). Agregá en `src/app/clima/[slug]/manana/page.tsx`
(Server Component) un **párrafo intro server-rendered** debajo del componente cliente (o el Server puede
renderizar `TopMenu`/texto y pasar el widget), con 2-3 frases estáticas del tipo: *"¿Qué tiempo hará
mañana en {city}? Consulta el pronóstico para mañana: temperatura mínima y máxima, probabilidad de lluvia
hora a hora y condición del cielo…"*. Objetivo: que el HTML crudo tenga texto crawleable más allá del
`<title>`. Mantené el widget cliente como está.

> Nota: no rehagas el widget. Solo asegurá que haya prosa server-rendered en la ruta (patrón Fase 5).

## TAREA 5 — Prioridad 3B: nueva ruta `/clima/[slug]/por-hora`

Query objetivo: **"clima {ciudad} por hora"**, **"{ciudad} por horas"** (ej. "clima monterrey por hora"
15 impr). Replicá **exactamente el patrón de `/manana`**:

1. `src/app/clima/[slug]/por-hora/page.tsx` (Server Component), calcado de `manana/page.tsx`:
   - `generateStaticParams` desde `topCities` (import `from '../page'`).
   - `generateMetadata`: `title: \`Clima por hora en ${city} — Pronóstico hora a hora | Clima Hoy\``,
     `description` orientada a "clima {ciudad} por hora / por horas / hora a hora hoy", canonical
     `https://www.clima-hoy.com/clima/${slug}/por-hora`, OG.
   - `BreadcrumbList` JSON-LD (Inicio → Clima → {city} → "Por hora").
   - **Párrafo intro server-rendered** (2-3 frases, crawleable) explicando el pronóstico hora a hora.
   - Renderiza `<PorHoraCityClient slug={slug} cityName={city} />`.
2. `src/app/clima/[slug]/por-hora/PorHoraCityClient.tsx` (Client), calcado de `MananaCityClient.tsx`:
   - `SettingsProvider` + `useSettings`, fetch `type=forecast` vía `/api/weather`.
   - Muestra las **próximas ~24-48h hora a hora** (usar TODOS los items del forecast del día de hoy y
     mañana, no solo mañana): hora, ícono, temp, prob. de lluvia (`pop`), viento. Reutilizá
     `getWeatherIcon` y `convertTemp`/`getTempSymbol`. Incluí `TopMenu`/`Footer` y `SkeletonLoader` igual
     que Manana.
3. **Sitemap** (`src/app/sitemap.ts`): agregá `cityPorHoraRoutes` (igual que `cityMananaRoutes`, priority
   0.8) y sumalas al return.
4. **Enlace interno**: en `src/app/clima/[slug]/page.tsx`, cerca del enlace a `/manana` o del radar,
   agregá un link a `/clima/${slug}/por-hora` ("Ver el clima hora a hora en {city} →").

## TAREA 6 — Verificar, desplegar y memoria

1. `npm run build` (deben sumarse ~80 rutas nuevas `/por-hora`; total ~300 páginas SSG).
2. Locales válidos: `for l in es en pt fr de it; do python3 -c "import json;json.load(open('src/locales/$l.json'))" && echo "$l OK"; done`
   (esta vez quizá no toques locales; validá igual).
3. Verificación Googlebot en HTML estático (contenido server-rendered, no detrás de JS):
   ```bash
   # Bloque de respuesta directa + climate de santo-domingo
   f=$(find .next -path "*clima/santo-domingo.html" | head -1); grep -o "¿Qué temperatura hace en Santo Domingo?\|Temperatura típica\|Mejor época" "$f"
   # /por-hora tiene intro server-rendered
   f=$(find .next -path "*clima/monterrey/por-hora.html" | head -1); grep -o "hora a hora\|por hora" "$f" | head -1
   # Caracas tiene el bloque de respuesta
   f=$(find .next -path "*clima/caracas.html" | head -1); grep -o "¿Qué temperatura hace en Caracas?" "$f"
   ```
   Todos deben devolver coincidencias.
4. Bumpear `LAST_CONTENT_UPDATE` en `src/app/sitemap.ts` a la fecha de hoy.
5. Commit + push a `main`. **No** commitear borrados de `.agents/`.
6. **Actualizar `memory.md`** (sección SEO): (a) descriptions de 6 guías optimizadas para CTR; (b) bloque
   "¿Qué temperatura hace en {ciudad}?" server-side para featured snippet; (c) contenido nuevo de 6
   ciudades (descriptions + climate de santo-domingo); (d) `/manana` con intro server-side; (e) nueva ruta
   `/por-hora` (~80 SSG) + sitemap + enlace interno. Anotar el estado del reporte GSC (9 clics / 3.435
   impr / ~72 páginas / pos ~25) como línea base para comparar la próxima sesión.

---

## Fuera de este plan (manual de Diego, NO código)

- **Search Console:** pedir indexación de las nuevas `/por-hora` y de las páginas-país que aún no aparecen.
- **AdSense:** **seguir sin reenviar** — la indexación mejoró mucho, pero los clics (9) aún son pocos;
  esperar a que la curva de tráfico siga subyendo unas semanas más.

## Criterio general

- **Reutilizar, no reinventar:** `/por-hora` = calco de `/manana`; recuadros = estilos ya usados;
  contenido = ampliar `cityDescriptions`/`cityClimate`/`guides`, sin archivos nuevos salvo la ruta.
- **Contenido original, preciso y en español** (mercado objetivo). Nada de relleno.
- **No tocar** el host canónico (siempre `www`) ni reintroducir URLs sin www.
```
