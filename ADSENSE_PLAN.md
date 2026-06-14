# Plan de implementación — Aprobación de Google AdSense

> Handoff para ejecutar en la terminal. Seguí las convenciones de `CLAUDE.md` (CSS plano por
> componente, Server Component para páginas estáticas con SEO, i18n, footer con línea de
> cracksdigitales.com). No introduzcas Tailwind ni librerías nuevas.

## Contexto

Google AdSense rechazó el sitio (`clima-hoy.com`) por **"contenido de poco valor"**: hoy es
esencialmente un widget que muestra datos de OpenWeather, sin contenido editorial propio ni
páginas de confianza (Acerca / Contacto). Lo que YA está bien y **no** hay que tocar: páginas
legales (`/terms`, `/privacy`, `/cookies`, `/data-sources`), `ads.txt`, el `<Script>` de AdSense
y el meta tag en `layout.tsx`, banner de cookies, sitemap, robots, y las páginas de ciudad con
tips SEO.

## Decisiones ya tomadas (no volver a preguntar)

- **Idiomas del contenido nuevo:** español + inglés. Las claves de **navegación/footer** se
  agregan a los 6 idiomas (`es,en,pt,fr,de,it`); el **cuerpo** de las páginas/artículos va en
  `es` y `en` (los otros 3 idiomas usan `en` como fallback).
- **Email de contacto:** mostrar visualmente `contacto@clima-hoy.com` (texto + `mailto:`). El
  reenvío real a `diego2392martinez@gmail.com` lo configura Diego por DNS (Cloudflare Email
  Routing / ImprovMX) — **fuera de código**, no es tarea de esta implementación.
- **Artículos de la sección Guías:** crear los **8** listados en la Tarea 7.

---

## TAREA 1 — Página `/acerca` (Acerca de)

- Crear `src/app/acerca/page.tsx` como **Server Component**, siguiendo el patrón de
  `src/app/terms/page.tsx`.
- `generateMetadata`: title, description, `alternates.canonical = https://clima-hoy.com/acerca`.
- Contenido original (250+ palabras) vía i18n: qué es Clima Hoy, qué datos ofrece, fuente
  (OpenWeather), público objetivo, misión. Texto genuino, sin relleno.
- Incluir `<TopMenu/>` y `<Footer/>` (el footer ya trae la línea de cracksdigitales.com).

## TAREA 2 — Página `/contacto`

- Crear `src/app/contacto/page.tsx`, mismo patrón Server Component + `generateMetadata`.
- Mostrar `contacto@clima-hoy.com` como texto visible y como enlace `mailto:`.
- Texto breve (es + en) invitando a escribir. **Sin formulario.**

## TAREA 3 — Navegación hacia las páginas nuevas

- En `src/components/Footer.tsx` agregar enlaces a `/acerca` y `/contacto` junto a los legales
  (también en el bloque de fallback no-montado).
- Agregar claves i18n a los **6 idiomas** (`src/locales/{es,en,pt,fr,de,it}.json`):
  `app.footer.about`, `app.footer.contact`.

## TAREA 4 — Enriquecer contenido existente

- `src/app/clima/page.tsx`: agregar un bloque de texto introductorio original antes de los
  listados de ciudades (qué encontrás aquí, cómo se actualizan los datos, etc.).
- `src/data/cityDescriptions.ts`: completar los tips faltantes de las ciudades que aún no los
  tengan (las internacionales/en inglés del listado pre-generado).

## TAREA 5 — Limpiar anuncios rotos

- En `src/components/WeatherClient.tsx` quitar los `<AdUnit slot="1111111111"/>` y
  `<AdUnit slot="2222222222"/>` (slots placeholder que renderizan huecos rotos durante la
  revisión).
- **NO** tocar el `<Script>` de AdSense ni el meta tag `google-adsense-account` en `layout.tsx`
  (Google los necesita para revisar).
- Nota: cuando AdSense apruebe, reponer los `AdUnit` con los slot IDs reales.

## TAREA 6 — Sección de contenido propio `/guias` (8 artículos)

Patrón espejo de `clima/[slug]`:

- `src/data/guides.ts` → datos de cada artículo: `slug`, `title`, `description`, `body`
  (es + en), `date`.
- `src/app/guias/page.tsx` → **Server Component**: índice de artículos con `generateMetadata`,
  texto introductorio original y listado enlazado.
- `src/app/guias/[slug]/page.tsx` → **Server Component** con `generateStaticParams`,
  `generateMetadata` (canonical por artículo) y **JSON-LD tipo `Article`**. Render del cuerpo +
  `<TopMenu/>` y `<Footer/>`.
- Cada artículo: **600+ palabras de contenido ORIGINAL** (no copiar de Wikipedia ni de otras
  fuentes).

**Los 8 artículos:**

1. Cómo leer e interpretar un pronóstico del tiempo
2. Qué es la sensación térmica y por qué difiere de la temperatura real
3. Índice UV: qué significa cada nivel y cómo protegerte
4. Humedad relativa: cómo afecta tu comodidad y tu salud
5. Tipos de nubes y qué clima anuncian
6. Diferencia entre clima y tiempo (conceptos que se confunden)
7. Cómo se mide la lluvia (mm) y qué significan los porcentajes de probabilidad
8. Qué hacer ante una alerta de tormenta o calor extremo

**Integración:**

- `src/app/sitemap.ts`: importar los slugs desde `guides.ts` y agregarlos al sitemap (igual que
  se hace con `topCities`).
- `src/components/Footer.tsx` + nav: enlace a "Guías"; clave i18n `app.footer.guides` en los 6
  idiomas.
- Enlazado interno: enlazar 1–2 guías relevantes desde la home y/o las páginas de ciudad.

## TAREA 7 — Verificar y desplegar

- `npm run lint` y `npm run build` (incluye `prisma generate`) deben pasar sin errores.
- Commit + push a `main` → deploy automático en Vercel.
- **Después** de que el deploy esté live: en AdSense → "Sites" → solicitar nueva revisión.

---

## Fuera de código (lo hace Diego)

- Configurar reenvío de `contacto@clima-hoy.com` → `diego2392martinez@gmail.com`
  (Cloudflare Email Routing o ImprovMX).
- Solicitar la nueva revisión en el panel de AdSense una vez desplegado.
