# Memoria del proyecto

Archivo de memoria persistente. Actualizar cuando el usuario indique algo importante a recordar.

---

## Usuario

- **Nombre:** Diego Martínez
- **Email:** diego2392martinez@gmail.com
- **Perfil:** Desarrollador del proyecto, no necesariamente experto en todas las tecnologías — prefiere explicaciones claras y directas.

---

## Proyecto

- **URL de producción:** https://clima-hoy.com (también responde en https://www.clima-hoy.com)
- **Repositorio:** https://github.com/diego-martinez-dev/weather-app-next
- **Deploy:** Vercel — los pushes a `main` hacen deploy automático
- **Dominio con y sin www:** La URI de callback de Google OAuth está configurada sin `www` (`https://clima-hoy.com/api/auth/callback/google`)

---

## Decisiones técnicas tomadas

- **Estilos:** CSS plano por componente. Tailwind está instalado pero NO se usa.
- **Auth:** Google OAuth con NextAuth v5 beta. Sin formularios de contraseña. Funcionando en producción.
- **Sesiones:** JWT (no database sessions), aunque hay PrismaAdapter configurado.
- **BD:** Supabase + Prisma v5. URLs configuradas en `.env.local`, `.env` y Vercel. Project ref: `rhoqbvppawkkitjvlppu`. **Migración completada** — tablas User, Account, Session y VerificationToken creadas en Supabase.
- **MCP Supabase:** Configurado en `~/.mcp.json`. Token activo regenerado tras recrear el proyecto.
- **MCP Vercel:** Configurado en `~/.mcp.json` con `@vercel/mcp-adapter`. Token activo.
- **Supabase — pooler:** El hostname del Transaction pooler es `aws-1-us-east-1.pooler.supabase.com` (no `aws-0`). `DATABASE_URL` debe incluir `?pgbouncer=true`. Siempre copiar el connection string exacto desde el dashboard.
- **Auth:** `AUTH_URL=https://clima-hoy.com` configurado en Vercel. `NEXTAUTH_URL` eliminado (deprecado en NextAuth v5).
- **API del clima:** OpenWeatherMap vía proxy interno (`/api/weather`). La API key está hardcodeada en el route, no en env vars.
- **Idioma en API:** Siempre pasar `&lang=${language}` para que las descripciones del clima sean localizadas.
- **Fondo según clima:** Usar `weather.weather[0].main` (siempre en inglés) para detectar la condición, no `.description` (localizado).
- **Prisma:** Usar v5 (no v7) — v7 es incompatible con `@auth/prisma-adapter`. El build requiere `prisma generate && next build`.
- **Páginas de ciudad:** Separadas en `page.tsx` (Server Component con SEO) y `CityPageClient.tsx` (Client Component con UI). No mezclar.
- **Tips en homepage:** La homepage muestra tips de `cityDescriptions.ts` una vez detectada la ciudad — el slug se deriva normalizando `weather.name` (lowercase, sin acentos, espacios → guiones).

---

## AdSense

- **Publisher ID:** `ca-pub-1859146451941420`
- **ads.txt:** creado en `public/ads.txt`
- **Meta tag de verificación:** agregado en `layout.tsx`
- **Estado:** pendiente de aprobación por Google
- **Unidades de anuncio:** 2 slots en `WeatherClient.tsx` con IDs placeholder (`1111111111`, `2222222222`) — reemplazar por IDs reales cuando AdSense apruebe.

---

## SEO implementado

- `generateMetadata` y `generateStaticParams` en páginas de ciudad — 59 ciudades pre-generadas (SSG)
- JSON-LD con `WebPage` + `BreadcrumbList` por ciudad
- URL canónica por ciudad
- Sitemap sincronizado con la lista de ciudades
- **Contenido estático por ciudad** (`src/data/cityDescriptions.ts`):
  - **Tip climático** (fondo gris, ícono bombilla): descripción del clima típico — 46 ciudades hispanohablantes
  - **Tip para turistas** (fondo amarillo, ícono personas): consejo climático para visitantes — mismas 46 ciudades
  - Ambos tips aparecen debajo del H1 en la página de ciudad

---

## Objetivos a largo plazo

- Construir una base de datos de usuarios para **campañas de email marketing**.
- Enviar **alertas personalizadas por WhatsApp** a usuarios registrados.
- El login con Google es el primer paso hacia ese sistema.
- **Monetizar con Google AdSense** — en proceso de aprobación.

---

## Páginas de confianza para AdSense (implementadas jun-2026)

### Fase 1 (commit 08678aa)
- `/acerca` — Server Component con contenido original sobre Clima Hoy (es + en)
- `/contacto` — Server Component con email `contacto@clima-hoy.com` (mailto:)
- `/guias` — índice de 8 artículos + `/guias/[slug]` con JSON-LD Article
- Footer actualizado con links a Acerca, Contacto, Guías en los 6 idiomas
- `cityDescriptions.ts` — tips agregados para London, Paris, Berlin, Rome, Amsterdam, Dubai, Sydney, Brasilia, São Paulo, Río de Janeiro, Riohacha
- `WeatherClient.tsx` — AdUnits placeholder eliminados (slots 1111111111 y 2222222222)
- Sitemap actualizado con todas las rutas nuevas

### Fase 2 (commit f547e74)
- `/glosario` — 27 términos meteorológicos con JSON-LD DefinedTermSet, ordenados alfabéticamente
- `/faq` — 14 preguntas frecuentes con JSON-LD FAQPage (rich snippets para Google)
- 8 guías adicionales en `src/data/guides.ts` → total 16 guías pre-generadas (SSG)
- `TopMenu.tsx` — Glosario agregado al nav desktop y panel móvil
- Footer + TopMenu + Sitemap integrados con `/glosario` y `/faq`
- Claves i18n `app.footer.glossary` y `app.footer.faq` en los 6 idiomas

- **Diego debe:** configurar reenvío `contacto@clima-hoy.com → diego2392martinez@gmail.com` (Cloudflare Email Routing o ImprovMX) y solicitar nueva revisión en el panel de AdSense una vez que el deploy esté live.

### Nav bar (commit 5776728)
- Eliminados del nav: Inicio (el logo ya navega a inicio), Acerca, Contacto
- Guías: submenú click con los 16 artículos + "Ver todas las guías"
- Glosario: submenú click con 10 términos top (alfabético) + "Ver glosario completo"
- FAQ: link directo
- Móvil: Guías y Glosario son secciones expandibles; FAQ link directo
- `topGlossaryTerms`: computed a nivel de módulo (sort alfabético, primeros 10)
- Títulos de guías y términos son language-aware (es/en)

### Fase 3 SEO + UX (commit 61d616a, jun-2026)
- **Fix parpadeo header:** `TopMenu.tsx` ya NO tiene early return con placeholder mínimo. Logo + búsqueda + barra de nav (Guías/Glosario/FAQ) siempre se renderizan. Solo el bloque `menu-right` (settings/auth, depende de localStorage/session) se difiere con `visibility: hidden` → sin layout shift.
- **HomeFaq:** nuevo componente `src/components/HomeFaq.{tsx,css}` — primeras 6 FAQs como `<details>/<summary>` accordion nativo + JSON-LD FAQPage. Insertado en homepage antes del Footer.
- **Guías relacionadas:** cada página de guía muestra 3 guías al final. Si el campo `related[]` no está definido, usa fallback cíclico `(index + offset) % guides.length`.
- **Canonical no-www:** `layout.tsx` tiene `metadataBase: new URL('https://clima-hoy.com')`. Todas las URLs canónicas, OG, sitemap y robots.txt apuntan a `https://clima-hoy.com` (sin www).
- **SEO guías:** keywords, authors, publishedTime, BreadcrumbList JSON-LD (Article + BreadcrumbList por guía).
- **i18n:** clave `app.home.faq_title` en los 6 idiomas (es/en/pt/fr/de/it).

### Fase 4 SEO — Tráfico y rentabilidad (jun-2026)

**Tarea 0:** Eliminado duplicado `'bogota'` en `topCities` (estaba en Colombia y LatAm a la vez).

**Tier 1 — Profundidad de ciudad:**
- `src/data/cityClimate.ts` (nuevo): interfaz `CityClimate` con `bestTimeToVisit`, `rainySeasons`, `avgTempRange`, `faq[]`. Cubre 81 ciudades con contenido original.
- `clima/[slug]/page.tsx`: FAQPage JSON-LD, `relatedGuides` calculados por categoría (alta altitud/tropical/Colombia/Europa/LatAm/default). Pasa `climate` y `relatedGuides` a `CityPageClient`.
- `clima/[slug]/CityPageClient.tsx`: tarjeta de info climática + FAQ `<details>/<summary>` + sección "Guías relacionadas" + links a glosario y FAQ.
- Titles/descriptions actualizados a intención de búsqueda.

**Tier 2b — 8 guías nuevas** en `src/data/guides.ts` (total: 24 guías):
lluvia por ciudades, altitud y clima, El Niño/La Niña, sensación térmica y ropa, playas en LatAm, frío en montaña, tormentas eléctricas, humedad y calor.

**Tier 2a — Sub-rutas /manana:**
- `clima/[slug]/manana/page.tsx` (Server): SEO propio, BreadcrumbList JSON-LD, 81 rutas SSG.
- `clima/[slug]/manana/MananaCityClient.tsx` (Client): muestra pronóstico de mañana filtrado del forecast (min/max, condición, lluvia%, hora a hora).

**Tier 3:** Sitemap con las 81 rutas `/manana` (priority 0.8). Verificado: sin URLs no-www. Build: 201 páginas SSG.

**Host canónico desde Fase 4:** `https://www.clima-hoy.com` (CON www). El servidor redirige no-www → www. Toda canonical/OG/JSON-LD/sitemap usa www.

## Pendientes

- **AdSense:** Cuando llegue la aprobación, reponer los `<AdUnit>` en `src/components/WeatherClient.tsx` con los slot IDs reales.
- **AdSense:** Diego debe solicitar la nueva revisión en el panel de AdSense (Sites → solicitar revisión).
- **Email:** Diego debe configurar reenvío `contacto@clima-hoy.com` en Cloudflare Email Routing o ImprovMX.
- **Vercel:** Confirmar que el redirect no-www → www sea permanente (308), no 307 temporal.
- **Search Console:** Eliminar sitemaps viejos del Blogger anterior; dejar solo `www.clima-hoy.com/sitemap.xml`.
