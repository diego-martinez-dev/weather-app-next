# Plan de implementación — AdSense Fase 2 (más contenido propio)

> Handoff para ejecutar en la terminal. Continúa el trabajo de `ADSENSE_PLAN.md` (ya completado).
> Objetivo: agregar más páginas con **contenido original y útil** para asegurar la aprobación de
> Google AdSense. Seguí las convenciones de `CLAUDE.md` (CSS plano, Server Components para páginas
> estáticas con SEO, i18n, footer con la línea de cracksdigitales.com). No introduzcas Tailwind ni
> librerías nuevas.

## Estado actual (no rehacer)

- Ya existen: `/acerca`, `/contacto`, `/guias` (8 artículos en `/guias/[slug]`), páginas legales,
  menú de navegación en el header (Inicio · Guías · Acerca · Contacto) y en el footer.
- Patrón de artículos a **reutilizar**: `src/data/guides.ts` (interface `Guide` con
  `slug`, `title{es,en}`, `description{es,en}`, `date`, `body{es,en}`) +
  `src/app/guias/[slug]/page.tsx` (renderiza `body.es`, JSON-LD `Article`, reusa `legal.css`).
- El render del `body` soporta este subset de markdown: `## Título` (h2), líneas `- item`
  (lista), y párrafos separados por línea en blanco. **Usá el mismo formato** en todo el contenido
  nuevo.

## Decisiones ya tomadas (no volver a preguntar)

- **Idiomas:** contenido en `es` + `en` en los datos (se renderiza `es`, igual que las guías
  actuales). Claves de **navegación/footer** en los 6 idiomas (`es,en,pt,fr,de,it`).
- **Cada artículo/sección de texto: 600+ palabras de contenido ORIGINAL** (no copiar de Wikipedia
  ni de otras fuentes). Calidad y profundidad reales.

---

## TAREA 1 — Glosario meteorológico (`/glosario`)

- `src/data/glossary.ts` → array de términos: `{ term: {es,en}, definition: {es,en} }`.
  **Mínimo 25 términos** con definiciones propias de 2–4 frases c/u. Ejemplos: presión
  atmosférica, punto de rocío, frente frío/cálido, humedad relativa, sensación térmica, isobaras,
  índice UV, precipitación, ráfaga, borrasca, anticiclón, humedad absoluta, visibilidad, niebla,
  granizo, escarcha, corriente en chorro, masa de aire, inversión térmica, milímetros de lluvia,
  presión a nivel del mar, nubosidad, ozono, smog, ola de calor.
- `src/app/glosario/page.tsx` → **Server Component** con `generateMetadata`
  (canonical `https://clima-hoy.com/glosario`), texto introductorio original, y la lista de
  términos (`<dl>`/`<dt>`/`<dd>` o el patrón de `legal.css`). Incluir `<TopMenu/>` y `<Footer/>`.
- JSON-LD opcional `DefinedTermSet`. Enlazar términos relevantes desde las guías existentes.

## TAREA 2 — Preguntas frecuentes (`/faq`)

- `src/data/faq.ts` → array `{ question: {es,en}, answer: {es,en} }`. **12–15 preguntas reales**
  con respuestas propias de 2–4 frases. Ejemplos: ¿Por qué la sensación térmica difiere de la
  temperatura real?, ¿Qué tan confiable es un pronóstico a 7 días?, ¿De dónde vienen los datos del
  clima?, ¿Qué significa el porcentaje de probabilidad de lluvia?, ¿Por qué a veces el pronóstico
  falla?, ¿Con qué frecuencia se actualizan los datos?, ¿Es gratis usar Clima Hoy?, ¿Qué es el
  índice UV y cómo me protejo?, ¿Cómo cambio entre °C y °F?, etc.
- `src/app/faq/page.tsx` → **Server Component** con `generateMetadata`
  (canonical `https://clima-hoy.com/faq`) + **JSON-LD `FAQPage`** (mejora los rich snippets).
  Texto introductorio breve, listado de Q&A, `<TopMenu/>` y `<Footer/>`.

## TAREA 3 — 8 artículos nuevos en `/guias` (agregar a `guides.ts`)

Agregar 8 entradas nuevas al array `guides` (slug, title, description, date, body es+en, 600+
palabras c/u). Sugeridos:

**Prácticos / "qué hacer":**
1. Cómo protegerte durante una ola de calor
2. Qué ropa llevar según el clima y la estación
3. Cómo preparar tu casa para la temporada de lluvias
4. Cómo elegir la mejor época del año para viajar según el clima

**Rankings / comparativas:**
5. Las ciudades más lluviosas de Colombia (y por qué llueve tanto)
6. Ciudades con el mejor clima de Latinoamérica

**Clima por país/región:**
7. Clima de Colombia: regiones naturales y temporadas de lluvia
8. Las estaciones del año en Argentina: qué esperar en cada una

> Los slugs se generan solos vía `guideSlugs`; aparecen automáticamente en el índice `/guias` y se
> pre-renderizan por `generateStaticParams`. No hay que tocar el routing.

## TAREA 4 — Integración (navegación, sitemap, enlazado interno)

- `src/app/sitemap.ts`: agregar `/glosario` y `/faq` (las guías nuevas ya entran solas vía
  `guideSlugs`). Verificar que estén incluidas.
- `src/components/Footer.tsx`: agregar enlaces a **Glosario** y **FAQ** (también en el bloque de
  fallback no-montado). Claves i18n `app.footer.glossary` y `app.footer.faq` en los **6 idiomas**.
- `src/components/TopMenu.tsx`: agregar **Glosario** a la barra de navegación (desktop + panel
  móvil), reutilizando la nueva clave i18n. Mantener la nav legible (FAQ puede quedar solo en el
  footer).
- **Enlazado interno:** desde 2–3 guías existentes, enlazar al Glosario y a las guías nuevas
  relacionadas; desde el Glosario, enlazar a guías que amplíen cada término.

## TAREA 5 — Verificar y desplegar

- `npm run build` (incluye `prisma generate`) debe pasar sin errores y listar las rutas nuevas
  (`/glosario`, `/faq`, y los 8 slugs nuevos bajo `/guias/[slug]`).
- Commit + push a `main` → deploy automático en Vercel.
- **No** commitear los borrados pendientes en `.agents/` (son ajenos a esta tarea).
- Actualizar `memory.md` con un resumen de las páginas agregadas en esta fase.

---

## Recordatorio fuera de código (Diego)

- Configurar reenvío `contacto@clima-hoy.com → diego2392martinez@gmail.com` (Cloudflare Email
  Routing o ImprovMX) si aún no está hecho.
- Una vez desplegado, solicitar la nueva revisión en AdSense → "Sites".
