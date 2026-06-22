# Plan de implementación — SEO Fase 4 (tráfico y rentabilidad)

> Handoff para ejecutar en la terminal. Objetivo: aumentar tráfico orgánico real para que el sitio
> sea rentable con AdSense. Seguí las convenciones de `CLAUDE.md` (CSS plano, Server Components con
> SEO, i18n, footer con cracksdigitales.com). No introduzcas Tailwind ni librerías nuevas. Reusá
> los patrones existentes (`guias/[slug]`, `clima/[slug]`, JSON-LD, `legal.css`).

## Contexto / estado actual

- 82 ciudades en `topCities` (`src/app/clima/[slug]/page.tsx`), 18 guías, 28 términos de glosario.
- Las páginas de ciudad usan patrón Server (`page.tsx`) + Client (`CityPageClient.tsx`).
- El contenido SEO por ciudad vive en `src/data/cityDescriptions.ts` (hoy: `Record<slug, string>`
  con una descripción + un tip turístico).

## ⚠️ Decisión de host y bug (Tarea 0)

**Host canónico = `https://www.clima-hoy.com` (CON www).** El servidor de producción sirve `www`
(no-www hace 307→www) y Google ya indexó la versión www. Todo el código ya fue corregido a www
(layout, sitemap, robots, guías, glosario, faq, acerca, contacto; las páginas de ciudad ya estaban
en www). **No reintroducir URLs sin www en ningún canonical, openGraph ni JSON-LD.**

Pendiente de código para Sonnet:
1. **Slug duplicado:** `'bogota'` aparece dos veces en `topCities` (en el bloque Colombia y en el
   de Latinoamérica). Eliminar el duplicado para no generar URL/sitemap repetidos.

Pendiente manual de Diego (fuera de código):
- En **Vercel**: confirmar que el redirect no-www → www sea **permanente (308)**, no 307 temporal,
  para que transfiera autoridad SEO.
- En **Search Console**: eliminar los sitemaps viejos del Blogger anterior
  (`…/feeds/posts/default` y `sitemap-pages.xml`); dejar solo `www.clima-hoy.com/sitemap.xml`.

---

## TIER 1 — Profundizar las páginas de ciudad (mayor impacto)

### Tarea 1a — Modelo de datos enriquecido por ciudad
- Crear `src/data/cityClimate.ts` con una estructura por slug (es + en donde aplique):
  ```ts
  export interface CityClimate {
    bestTimeToVisit: string;   // mejor época para visitar (2-3 frases, original)
    rainySeasons: string;      // temporada de lluvias
    avgTempRange: string;      // rango de temperatura típico
    faq: { question: string; answer: string }[]; // 3-5 preguntas propias por ciudad
  }
  export const cityClimate: Record<string, CityClimate> = { ... }
  ```
- Poblar con **contenido ORIGINAL** (no plantillas calcadas). Priorizar las ciudades hispanohablantes
  de LatAm/España que ya tienen descripción en `cityDescriptions.ts` (son nuestro mercado real y la
  competencia las cubre mal). Objetivo: cubrir las 82, empezando por las hispanohablantes.
- Las preguntas de la FAQ deben apuntar a búsquedas reales de cola larga, por ejemplo:
  *"¿Qué temperatura hace en {ciudad}?"*, *"¿Cuándo es la temporada de lluvias en {ciudad}?"*,
  *"¿Cuál es la mejor época para visitar {ciudad}?"*, *"¿Hace frío/calor en {ciudad}?"*.

### Tarea 1b — Renderizar el contenido nuevo en la página de ciudad
- En `CityPageClient.tsx` (o en una sección server si es estático), añadir, debajo del bloque
  actual de tips: secciones con `<h2>` para "Mejor época para visitar", "Temporada de lluvias",
  y una sección **"Preguntas frecuentes sobre el clima en {ciudad}"** con la FAQ.
- En `src/app/clima/[slug]/page.tsx` agregar un segundo JSON-LD **`FAQPage`** con las preguntas de
  esa ciudad (además del WebPage/BreadcrumbList existente). Esto puede ganar rich snippets.

### Tarea 1c — Optimizar titles y descriptions a la intención de búsqueda
- Title: `Clima en {Ciudad} hoy — Pronóstico por hora y 7 días | Clima Hoy`
- Description: incluir términos que la gente busca (temperatura, lluvia, pronóstico, fin de semana).
- Mantener únicos por ciudad (ya lo son por interpolación).

---

## TIER 2 — Capturar más tipos de búsqueda (cola larga)

### Tarea 2a — Sub-rutas de pronóstico por ciudad
- Crear rutas SSG: `src/app/clima/[slug]/manana/page.tsx` y
  `src/app/clima/[slug]/fin-de-semana/page.tsx` (Server Component con SEO propio +
  `generateStaticParams` reusando `topCities`; la UI de datos puede delegar al cliente).
- Cada una con **title/description/H1 únicos** orientados a la query:
  - "Clima mañana en {Ciudad} — Pronóstico del tiempo | Clima Hoy"
  - "¿Va a llover este fin de semana en {Ciudad}? Pronóstico | Clima Hoy"
- Texto introductorio original + enlace a la página principal de la ciudad. Agregar al sitemap.
- > Si el esfuerzo es alto, implementar primero solo `/manana` (mayor volumen) y dejar
  > `/fin-de-semana` para una segunda iteración.

### Tarea 2b — Más guías informativas (contenido que rankea fácil y alimenta AdSense)
- Agregar **8-10 guías nuevas** a `src/data/guides.ts` (mismo patrón, 600+ palabras, es+en),
  con temas de intención informacional y keywords de cola larga. Ejemplos:
  - "¿Por qué llueve más en unas ciudades que en otras?"
  - "Cómo afecta la altitud al clima de una ciudad"
  - "Qué es el fenómeno de El Niño y La Niña y cómo afecta a Latinoamérica"
  - "Cómo vestirse según la sensación térmica"
  - "Mejores meses para viajar a la playa en Latinoamérica"
  - "Por qué hace más frío en la montaña"
  - "Cómo se forman las tormentas eléctricas"
  - "Qué es la humedad y por qué hace que el calor sea más agobiante"

---

## TIER 3 — Técnico y enlazado

### Tarea 3a — Enlazado interno (clave para SEO)
- Desde cada **página de ciudad**, enlazar 2-3 **guías** relevantes y al **glosario**.
- Desde cada **guía**, enlazar a ciudades de ejemplo cuando se mencionen.
- Desde el **glosario**, enlazar a las guías que amplían cada término (ya existe `relatedGuide`).
- En `/clima` (hub), asegurar enlaces a todas las ciudades por país.

### Tarea 3b — Datos estructurados consistentes
- Confirmar que cada página de ciudad tenga `BreadcrumbList` JSON-LD (Inicio › Clima › {Ciudad}).
- Verificar que NO queden URLs con www en ningún JSON-LD ni metadata.

### Tarea 3c — Core Web Vitals de la home
- La home (`src/app/page.tsx`) es client-side con geolocalización; auditar el LCP.
- Asegurar que el mapa (Leaflet) y componentes pesados se carguen con `next/dynamic` y `lazy`
  (diferidos), y que el contenido principal (clima + texto) no espere a la geolocalización para
  pintar algo útil.

### Tarea 3d — Sitemap
- Verificar que `sitemap.ts` incluya: las nuevas sub-rutas de ciudad (`/manana`, `/fin-de-semana`),
  y que `topCities` ya no tenga el duplicado. Todo con dominio sin www.

---

## TAREA FINAL — Verificar y desplegar

- `npm run build` (incluye `prisma generate`) debe pasar y listar las rutas nuevas.
- Revisar en `npm run dev`: páginas de ciudad con secciones nuevas + FAQ, JSON-LD válido
  (probar en el Rich Results Test de Google), home con buen rendimiento.
- Commit + push a `main`. **No** commitear los borrados pendientes en `.agents/`.
- Actualizar `memory.md` con lo agregado en esta fase.

## Orden sugerido de ejecución
1. Tarea 0 (bugs: www → sin www en ciudad, quitar `bogota` duplicado). Rápido y de alto impacto.
2. Tier 1 completo (profundidad de ciudad + FAQ). El mayor multiplicador.
3. Tier 2b (más guías).
4. Tier 3 (enlazado interno + técnico).
5. Tier 2a (sub-rutas) al final, por ser la de mayor esfuerzo.
