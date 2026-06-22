# Plan de implementación — Fase 3 (relacionadas, SEO, fix header, FAQ en home)

> Handoff para ejecutar en la terminal. Continúa `ADSENSE_PLAN.md` y `ADSENSE_PLAN_FASE2.md`.
> Seguí las convenciones de `CLAUDE.md` (CSS plano por componente, Server Components para páginas
> con SEO, i18n, footer con la línea de cracksdigitales.com). No introduzcas Tailwind ni librerías
> nuevas. Reusá los patrones existentes.

---

## TAREA 1 — Sección "Guías relacionadas" al final de cada guía

Archivo: `src/app/guias/[slug]/page.tsx` y `src/data/guides.ts`.

- En `src/data/guides.ts`: agregar a la interface `Guide` un campo opcional
  `related?: string[]` (lista de slugs). **No es obligatorio** llenarlo en todas; donde no exista,
  usar fallback.
- En `guias/[slug]/page.tsx`, antes del `<Footer/>` (después del bloque "¿Te resultó útil esta
  guía?"), agregar una `<section>` "Guías relacionadas":
  - Si el artículo tiene `related`, mostrar esas guías (vía `getGuideBySlug`).
  - Si no, **fallback**: las 3 guías siguientes del array `guides` (cíclico), excluyendo la
    actual.
  - Cada item: `<h3>` con `<Link href="/guias/{slug}">` al título (`.es`) + la `description.es`
    en un `<p>`.
- Texto del encabezado en español (consistente con el resto de la página, que renderiza `.es`):
  "Guías relacionadas".
- Esto refuerza el **enlazado interno**, que ayuda al SEO y a que AdSense vea un sitio cohesionado.

> Opcional pero recomendado: replicar la misma sección "Términos relacionados" enlazando a
> `/glosario` desde cada guía cuando aplique.

---

## TAREA 2 — Mejoras de SEO

### 2a. Unificar el dominio canónico (bug actual)
Hoy hay inconsistencia de host: `layout.tsx` usa `https://www.clima-hoy.com` (openGraph +
canonical) mientras que las guías, `/acerca`, etc. usan `https://clima-hoy.com` (sin www), y el
callback de OAuth está configurado **sin www**. Esto divide señales de SEO.
- **Estandarizar todo a `https://clima-hoy.com` (sin www).**
- Corregir en `src/app/layout.tsx`: `alternates.canonical`, `openGraph.url`, el `<link rel="canonical">`
  del `<head>`, y en `src/app/sitemap.ts` / `public/robots.txt` (cambiar `www.clima-hoy.com` →
  `clima-hoy.com`).

### 2b. metadataBase global
- En `src/app/layout.tsx` agregar a `metadata`:
  `metadataBase: new URL('https://clima-hoy.com')`. Así las URLs relativas de OG/canonical se
  resuelven bien en todas las páginas.

### 2c. SEO de las páginas de guía
En `guias/[slug]/page.tsx` (`generateMetadata`):
- Agregar `keywords` derivadas del título del artículo.
- Agregar `openGraph.type = 'article'` (ya está) + `openGraph.publishedTime = guide.date` y
  `authors`.
- Agregar un segundo JSON-LD **`BreadcrumbList`** (Inicio › Guías › artículo) junto al `Article`
  existente.
- En el JSON-LD `Article`, agregar `author` (Organization "Clima Hoy") e `image` (usar una imagen
  del sitio; si no hay OG image, usar `/favicon.svg` o crear `public/og-default.png`).

### 2d. SEO de index y páginas nuevas
- Verificar que `/guias`, `/glosario`, `/faq`, `/acerca`, `/contacto` tengan `description` única y
  `alternates.canonical` correctos (sin www).
- Confirmar que **todas** estén en `src/app/sitemap.ts`.

---

## TAREA 3 — Arreglar el parpadeo del header (menú "real" vs "anterior")

Archivo: `src/components/TopMenu.tsx`.

**Causa raíz:** el bloque `if (!mounted) return (...)` (≈líneas 114-127) renderiza un header
**estructuralmente distinto** (solo logo + buscador + botón hamburguesa, **sin** la barra de
navegación de Guías/Glosario/FAQ ni el menú de configuración). Durante SSR y el primer render
`mounted` es `false`, así que se pinta ese placeholder; al hidratarse pasa a `true` y salta al
header completo. Ese salto es lo que el usuario ve como "a veces el menú anterior".

**Fix:** que el placeholder y el header real tengan la **misma estructura**; diferir tras `mounted`
**solo** los valores que dependen de `localStorage`/sesión, no la estructura completa.

- Eliminar el `return` temprano del placeholder minimalista.
- Renderizar **siempre**: el logo, el formulario de búsqueda y la **barra de navegación**
  (Guías / Glosario / FAQ) — esas partes no dependen de estado de cliente (sus submenús arrancan
  cerrados en ambos lados, así que no hay mismatch).
- Envolver con `mounted ? (...) : (placeholder del mismo tamaño)` **solo** el bloque
  `menu-right` (país, unidad °C/°F, idioma, login/avatar), que sí depende de `useSettings()` y
  `useSession()`. Mientras `!mounted`, mostrar un hueco del mismo ancho/alto (o los valores por
  defecto) para evitar salto de layout.
- Verificar que no aparezcan warnings de hidratación; si algún span de valor dinámico los genera,
  usar `suppressHydrationWarning` en ese span puntual.
- Probar en `npm run dev` recargando varias veces (y con throttling de red) que el header ya no
  cambia de forma.

---

## TAREA 4 — Agregar FAQ al home

Archivos: nuevo `src/components/HomeFaq.tsx` + `HomeFaq.css`, y `src/app/page.tsx`.

- Crear `src/components/HomeFaq.tsx` (client component, `'use client'`) que importe `faqItems` de
  `src/data/faq.ts` y renderice una sección de preguntas frecuentes:
  - Mostrar las **primeras 6** preguntas (acordeón expandible o `<details>/<summary>` nativo, que
    es simple y accesible).
  - Encabezado `<h2>` "Preguntas frecuentes" (clave i18n `app.home.faq_title` en los 6 idiomas).
  - Usar `language` de `useSettings()` para elegir `.es`/`.en` (resto → `.es`).
  - Link final "Ver todas las preguntas" → `/faq`.
- `HomeFaq.css`: estilos propios, coherentes con el resto (no Tailwind).
- En `src/app/page.tsx`, dentro de `HomeContent`, insertar `<HomeFaq />` **antes** del `<Footer/>`
  (≈línea 251).
- Agregar JSON-LD **`FAQPage`** en el home: un `<script type="application/ld+json">` con las
  preguntas/respuestas (renderizable desde el client con `dangerouslySetInnerHTML`). Reusar las
  mismas 6 preguntas para no inflar.
- Guardar el guard de hidratación SSR del proyecto si el componente lee preferencias
  (`mounted` → placeholder) según el patrón de `CLAUDE.md`.

---

## TAREA 5 — Verificar y desplegar

- `npm run build` (incluye `prisma generate`) debe pasar y listar todas las rutas.
- Revisar manualmente en `npm run dev`: header estable, sección relacionadas en guías, FAQ en el
  home, y los JSON-LD válidos (probar en el Rich Results Test de Google si es posible).
- Commit + push a `main` → deploy en Vercel. **No** commitear los borrados pendientes en `.agents/`.
- Actualizar `memory.md` con lo agregado en esta fase.

---

## Recordatorio fuera de código (Diego)

- Reenvío `contacto@clima-hoy.com → diego2392martinez@gmail.com` (si aún no está).
- Tras el deploy, solicitar la nueva revisión en AdSense → "Sites".
