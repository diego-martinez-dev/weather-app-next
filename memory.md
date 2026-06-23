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
- **Estado:** **SEGUNDO RECHAZO (jun-2026) — "Low value content"** (mismo motivo que el primero). Tras agregar todas las páginas de confianza/guías/glosario/FAQ/contenido de ciudad, Google sigue diciendo que el sitio no cumple los criterios mínimos.
  - **Diagnóstico (importante, no repetir el error de "agregar más páginas y reenviar"):** el cuello de botella NO es falta de páginas, es **estructural + de indexación/tráfico**: (1) el contenido central (clima en vivo) es dato de OpenWeather, no original; (2) 200+ páginas SSG generadas por plantilla pueden contar como "contenido escalado/doorway"; (3) solo **14 indexadas / 72 "Discovered – not indexed"** → Google mismo no valora esas páginas (indexación y AdSense van de la mano); (4) casi cero tráfico (0 clics, pos. 56) = perfil "made for AdSense".
  - **Decisión de Diego (jun-2026):** **NO reenviar a AdSense por ahora.** Enfocar 3-4 semanas en **indexación + tráfico + enlazado interno** (páginas-país) y reenviar recién con base más sólida (~50 indexadas y algunos clics reales). Reenvíos rápidos con cambios marginales pueden perjudicar.
- **Unidades de anuncio:** 2 slots en `WeatherClient.tsx` con IDs placeholder (`1111111111`, `2222222222`) — reemplazar por IDs reales cuando AdSense apruebe.
- **Disclosure legal (requisito de AdSense, commit 02cefce):** `/privacy` tiene sección "Publicidad (Google AdSense)" con cookies de DoubleClick + opt-out (Configuración de anuncios de Google / aboutads.info). `/cookies` tiene subsección equivalente. Se corrigió la imprecisión "no almacenamos datos en servidores externos" para reflejar el login con Google (nombre/email/foto en Supabase).

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
- **Canonical (CORREGIDO después en jun-2026):** en Fase 3 se puso todo en no-www, pero se detectó que el servidor en producción redirige no-www → www (307) y Google ya tenía indexada la versión www. Se revirtió todo a **`https://www.clima-hoy.com` (CON www)** — ver sección "Fix host canónico www" más abajo. Ignorar la mención a "sin www" de esta línea.
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

### Fase 5 SEO — Contenido de ciudad renderizado en servidor (jun-2026)

**Causa raíz resuelta:** las 72 páginas de ciudad estaban "Discovered - currently not indexed" en Search Console porque el contenido SEO (descripción, tips, bloque de clima, FAQ visible, guías relacionadas) vivía dentro de `CityPageClient.tsx` (Client Component) detrás de `if (loading) return <SkeletonLoader/>`. El HTML servido a Googlebot solo tenía el esqueleto vacío hasta que el JS del cliente terminaba el fetch.

**Fix — separación server/client:**
- `clima/[slug]/page.tsx` (Server Component) ahora renderiza directamente en el HTML: `<h1>` único ("Clima en {city} hoy"), bloque descripción/tip turístico, bloque de clima (temp típica/mejor época/lluvias), FAQ visible (`<details>/<summary>`, mismo markup que antes) y guías relacionadas + links a glosario/FAQ. También renderiza `TopMenu` y `Footer` directamente (son Client Components pero un Server Component puede importarlos y renderizarlos sin problema).
- `clima/[slug]/CityPageClient.tsx` quedó reducido a solo el widget interactivo: `Favorites`, un `<h2>` con ícono+nombre de la ciudad (ya NO hay un segundo `<h1>`), y `WeatherClient` (tarjeta en vivo, pronóstico, mapa). Recibe solo `slug` y `cityName` como props (ya no recibe `description`, `touristTip`, `climate` ni `relatedGuides` — eso vive en el server). Su `if (loading) return <SkeletonLoader/>` ahora solo gatea ese widget, no el contenido SEO.
- Verificado con `curl -A "Googlebot"` sobre `/clima/montevideo`, `/clima/bogota`, `/clima/madrid`, `/clima/santo-domingo`: "Mejor época para visitar" y la pregunta FAQ real aparecen en el HTML crudo (antes devolvía 0). Un solo `<h1>` por página.
- **Patrón a seguir en futuras páginas dinámicas:** todo contenido SEO/textual que dependa solo de datos estáticos (no de la llamada al clima en vivo) debe vivir en el Server Component, nunca detrás de un `if (loading)` del cliente.

### Fix host canónico www (commit b6a70ca, jun-2026)
- El servidor de producción **sirve `www`** (no-www hace 307 → www) y Google ya indexó la versión www.
- Se revirtió todo el código de no-www a **`https://www.clima-hoy.com`** (layout, sitemap, robots, guías, glosario, faq, acerca, contacto; las páginas de ciudad ya estaban en www). **Regla: nunca reintroducir URLs sin www en canonical/OG/JSON-LD.**

### Glosario como enlace simple (commit 3b8eb3c, jun-2026)
- El submenú de Glosario en `TopMenu.tsx` se reemplazó por un **enlace directo** a `/glosario` (desktop + móvil), porque todas las opciones llevaban a la misma página. Guías mantiene su submenú (cada opción es un artículo distinto). Se eliminaron estado/refs/imports sin uso.

### Email de contacto — CONFIGURADO Y FUNCIONANDO (jun-2026)
- **DNS en AWS Route 53** (nameservers `awsdns-*`). El dominio apunta a Vercel para hosting (A `216.198.79.1`).
- Reenvío con **ImprovMX (gratis)**: registros MX (`mx1`/`mx2.improvmx.com`, prio 10/20) + TXT SPF (`v=spf1 include:spf.improvmx.com ~all`) agregados en Route 53. Verificado con `dig` y probado: `contacto@clima-hoy.com` y `privacidad@clima-hoy.com` reenvían a `diego2392martinez@gmail.com`. (ImprovMX free solo recibe/reenvía, no envía.)

### Search Console — estado al momento del reenvío a AdSense (jun-2026)
- **Propiedad:** `clima-hoy.com` (tipo Dominio). Diego ya **eliminó los sitemaps viejos del Blogger** anterior (el dominio tuvo vida previa como blog Blogger: feeds `…/feeds/posts/default` de 2019, `sitemap-pages.xml` de 2023).
- **Indexación:** 14 indexadas / ~76 no indexadas. Razón dominante: **72 "Discovered - currently not indexed"** + 1 "Crawled - not indexed" + 3 "Page with redirect" (el non-www, ya corregido). 0 errores 5xx, 0 404. → Causa raíz = contenido fino + client-rendering, resuelto en Fase 5.
- **Rendimiento (3 meses):** 0 clics, 412 impresiones, posición media **56,7**. Aparece para las keywords correctas (mercado LatAm), pero en página 5-6.
- **Top queries (validan la estrategia):** clima montevideo, clima santo domingo, clima hoy bogota, temperatura actual en montevideo, clima en medellin hoy, temperatura en bogotá, clima bogota, pronóstico del tiempo para hoy, clima montevideo hoy.

### Lista priorizada para pedir indexación en Search Console (URL Inspection → Solicitar indexación)
> Cupo ~10/día. Empezar por las que ya tienen impresiones. Prefijo: `https://www.clima-hoy.com`
- **Día 1 ✓ HECHO (jun-2026):** `/clima/montevideo`, `/clima/bogota`, `/clima/medellin`, `/clima/santo-domingo`, `/` (home), `/clima/lima`, `/clima/santiago`, `/clima/quito`, `/clima/guayaquil`, `/clima/caracas`
- **Día 2 (LatAm Spanish alto volumen) ✓ HECHO (jun-2026):** `/clima/buenos-aires`, `/clima/cordoba`, `/clima/rosario`, `/clima/mendoza`, `/clima/la-paz`, `/clima/asuncion`, `/clima/mexico-city`, `/clima/guadalajara`, `/clima/monterrey`, `/clima/puebla`
- **Día 3:** `/clima/panama-city`, `/clima/san-jose`, `/clima/managua`, `/clima/havana`, `/clima/arequipa`, `/clima/cusco`, `/clima/trujillo`, `/clima/cuenca`, `/clima/manta`, `/clima/valparaiso`
- **Día 4 (Colombia):** `/clima/cali`, `/clima/barranquilla`, `/clima/cartagena`, `/clima/bucaramanga`, `/clima/pereira`, `/clima/manizales`, `/clima/cucuta`, `/clima/ibague`, `/clima/santa-marta`, `/clima/villavicencio`
- **Día 5 (Colombia + España):** `/clima/armenia`, `/clima/pasto`, `/clima/monteria`, `/clima/sincelejo`, `/clima/valledupar`, `/clima/madrid`, `/clima/barcelona`, `/clima/valencia`, `/clima/sevilla`, `/clima/bilbao`
- **Día 6 (resto + páginas clave):** `/clima/malaga`, `/clima/zaragoza`, `/clima/alicante`, `/clima/granada`, `/clima/murcia`, `/guias`, `/glosario`, `/faq`, `/clima`, `/clima/neiva`
- **Día 7+ (mundo/inglés, menor prioridad para mercado ES):** new-york, london, paris, tokyo, berlin, rome, etc., y las sub-rutas `/clima/{ciudad}/manana` de las ciudades top.

### Feature: Mapa de lluvia — ESTADO FINAL = Windy embed (commit ac8a0bd + c8119a9, jun-2026)
- **RainViewer fue PROBADO Y DESCARTADO.** Motivo: su radar solo existe hasta zoom ~7 (regional); al acercar a nivel barrio devolvía tiles placeholder **"Zoom Level Not Supported"**. No sirve para el caso de uso (motociclista que quiere ver su barrio). Se eliminaron `RainRadarMap.tsx`, `RainRadarMap.css`, `RainRadarMapWrapper.tsx`.
- **Reemplazado por embed de Windy** (`src/components/WindyMap.tsx`): un `<iframe>` de `embed.windy.com/embed2.html` con `overlay=rain`, zoomable hasta nivel calle, animado, con búsqueda/controles propios de Windy. Componente plano (sin Leaflet ni 'use client'), liviano. Props: `lat, lon, zoom, height`.
- **Zoom por defecto 11** (máximo práctico del embed) en `/lluvia` y en las páginas de ciudad. El embed de Windy topa ahí el zoom; más allá no se puede (y el dato de lluvia es de modelo ~9 km, no nivel calle — ningún mapa gratis da lluvia "por cuadra").
- `/lluvia` (Server Component): h1, intro, FAQ (4) + JSON-LD FAQPage/BreadcrumbList — **textos reescritos para describir Windy** (sin "nowcast 30 min" ni RainViewer). Default Bogotá (4.711, -74.0721).
- Integración ciudad: sección server-side en `page.tsx` + `<WindyMap>` en `CityPageClient.tsx` con `weather.coord` (zoom 11).
- Nav/Footer/Sitemap/i18n (`app.nav.rain_map` en 6 idiomas) sin cambios. **Cookies:** divulgación actualizada a **Windy** (`account.windy.com/privacy`), ya no RainViewer.
- **Para "¿llueve exactamente donde estoy ahora?"** → eso NO es el mapa, es el dato puntual de la tarjeta del clima. El mapa cubre "¿viene lluvia hacia mi zona?".
- **Futuro:** alertas push "está por llover en tu zona" (conecta con WhatsApp/email).

### Consejo del clima data-driven (jun-2026)
- El recuadro de "Consejo/Tip" en `WeatherClient.tsx` ahora es **data-driven y coherente con los recuadros de pronóstico**. Antes solo miraba `weather.weather[0].main` + temp y podía contradecir el forecast (decía "podría cambiar" con 100% de prob. de lluvia).
- `src/lib/weatherSignals.ts` (nuevo): `getWeatherSignals(weather, forecast)` → `{ conditionMain, tempC, rainProbToday, tempMaxToday, tempMinToday, windKmh, hasThunderstormToday }`. `rainProbToday` = `round(max(pop) * 100)` de las entradas de HOY del `forecast.list` (fallback: próximas 8 entradas).
- `src/lib/weatherAdvice.ts` (reescrito): `getAdvice(signals)` → `{ scenario, params }`. La **probabilidad de lluvia manda** sobre la condición actual. Escenarios por prioridad: storm, rainVeryLikely (≥70% o lloviendo), rainPossible (≥35%), lowVisibility, extremeHeat (≥33°), cold (≤6°), hotSunny, clearNice, cloudyDry, general. (Se eliminó `getWeatherAdviceKey`.)
- `src/lib/localLexicon.ts` (nuevo): `getLexicon(language, country)` → vocabulario a interpolar. **Varía por país en español** (umbrella: sombrilla CO / paraguas ES·MX·AR; jacket: abrigo ES / chaqueta CO / chamarra MX / campera AR; drive: conducir ES / manejar resto; sunscreen: crema solar ES / bloqueador CO·MX / protector solar AR). El jacket trae el artículo embebido (`un abrigo`/`una chaqueta`) para resolver el género. **Voseo AR**: verbos imperativos (`take`/`use`/`hydrate`/`beCareful`/`bundleUp`/`avoid`) en forma voseo cuando `country==='AR'` (llevá, usá, hidratate, extremá…). Resto de idiomas: vocabulario por defecto, sin variación por país.
- Plantillas largas (~3 frases) en `app.advice.<scenario>` de los 6 locales, con interpolación `{{rainProbToday}}`, `{{tempMaxToday}}`, `{{umbrella}}`, `{{jacket}}`, `{{drive}}`, etc. Citan el % real de lluvia. **Las temps se convierten con `convertTemp` antes de interpolar** para coincidir con la unidad (°C/°F) de los recuadros.
- Render: `WeatherClient.tsx` arma `signals` → `getAdvice` → `getLexicon(language, country)` → `t(\`app.advice.\${scenario}\`, {...params, ...lexicon, tempMaxToday: convertTemp(...), tempMinToday: convertTemp(...)})`.
- Verificado: build OK, los 6 JSON válidos, y simulación de cambio de país (CO=sombrilla/chaqueta, AR=campera/voseo, MX=chamarra/bloqueador, ES=abrigo/conducir). cloudyDry dice explícitamente "prob. baja" → no contradice.

### Páginas-país /clima-pais/[pais] (commit b7ce933, jun-2026)
- **Qué es:** respuesta al 2º rechazo de AdSense ("Low value content"). En vez de "más páginas", se ataca la causa raíz (indexación + enlazado interno) con **clusters temáticos por país**.
- `src/data/countries.ts` (nuevo): 19 países (todos los hispanos del array `topCities` + EEUU + Canadá) con **contenido climático original** (no derivado de la API): `intro[]` (2 párrafos), `bestSeason`, `rainySeason`, `cities[]` (slug+nombre con acentos), `faq[]`. Helpers `getCountryBySlug`, `getCountryForCity(citySlug)`, `countrySlugs`. **No** se crearon páginas-país para ciudades sueltas no hispanas (London/Paris/Tokyo/Berlin/Rome/Amsterdam/Dubai/Sydney): un país de 1 ciudad sin cluster sería "low value".
- `src/app/clima-pais/[pais]/page.tsx` (nuevo, Server Component): SEO + canonical www + JSON-LD (WebPage + BreadcrumbList + FAQPage). Renderiza intro, recuadro mejor-época/lluvias, grilla de ciudades del país, FAQ `<details>` y grilla "clima en otros países". 19 rutas SSG. Verificado en HTML estático: "pisos térmicos" y 20 enlaces a ciudad en `/clima-pais/colombia`.
- **Enlazado interno bidireccional:** cada `/clima/[slug]` ahora muestra (si el país tiene >1 ciudad) un bloque "Clima en otras ciudades de {país}" con enlace a la guía-país + hasta 11 ciudades hermanas; `/clima` lista los 19 países; sitemap incluye las 19 rutas-país (priority 0.8).
- **Bonus:** se corrigió el texto del radar en la página de ciudad (decía "próximos 30 minutos" — lenguaje viejo de RainViewer; ahora describe Windy correctamente).
- **Patrón:** el contenido de país vive solo en español (mercado objetivo), igual que `cityDescriptions`/`cityClimate`. No se tradujo a los 6 idiomas.

### SEO titles de ciudad (commit 694b5d7, jun-2026)
- GSC mostró que la gente busca variantes: **"el tiempo en {ciudad}"**, **"temperatura en {ciudad}"**, **"{ciudad} por horas"**, **"está lloviendo en {ciudad}"** (no solo "clima"). Se actualizaron title/description/OG + párrafo intro server-side de las páginas de ciudad para cubrirlas. Posición media subió de 56,7 → 43,2 y llegó el **primer clic** ("el tiempo en caracas").

## Pendientes

### Hechos en sesiones anteriores (jun-2026) ✓
- ✓ Páginas de confianza, glosario, FAQ, guías (Fases 1-2).
- ✓ Disclosure de AdSense en privacy/cookies (Fase legal).
- ✓ Host canónico unificado a www.
- ✓ Profundidad de ciudad + FAQ + /manana (Fase 4).
- ✓ Contenido de ciudad renderizado en servidor (Fase 5) — verificado en HTML crudo.
- ✓ Email `contacto@`/`privacidad@` reenviando a Gmail (ImprovMX).
- ✓ Nueva revisión de AdSense solicitada.
- ✓ Sitemaps viejos del Blogger eliminados en Search Console.

### Sesión 22-23 jun-2026 — 2º rechazo AdSense + páginas-país + sitemap ✓
- ✓ **2º rechazo de AdSense ("Low value content").** Diagnóstico estructural y **decisión de NO reenviar aún** (enfocar indexación+tráfico 3-4 semanas). Detalle en sección "AdSense" arriba.
- ✓ **Páginas-país `/clima-pais/[pais]`** (19 países, contenido original, enlazado interno bidireccional, 19 SSG). Commit b7ce933. Detalle en sección "Páginas-país" arriba.
- ✓ **Sitemap `lastmod` estable** (commit 8d5eaa9): se reemplazó `new Date()` (que marcaba todo como "modificado hoy" en cada deploy y hacía que Google ignorara el lastmod) por la constante `LAST_CONTENT_UPDATE` en `src/app/sitemap.ts`. **Bumpear esa fecha a mano al cambiar contenido.**
- **Aclaración clave (no repetir el mito):** "mejorar el sitemap → Google indexa en días" aplica a sitios nuevos sin descubrir. Las 72 páginas en "Discovered – not indexed" YA fueron descubiertas por el sitemap; el sitemap NO cambia la decisión de indexar. Lo que mueve eso: pedir indexación manual + enlazado interno + autoridad/tiempo.
- **Diego (23 jun-2026):** se va a hacer la **indexación manual** en GSC (incl. las nuevas páginas-país) y **reenviar el sitemap** en Search Console tras el deploy. Vuelve en unos días a revisar resultados.

### Sesión jun-2026 — Mapa de lluvia + consejo dinámico ✓
- ✓ **Mapa de lluvia:** RainViewer probado y **descartado** (no soporta zoom de barrio) → reemplazado por **embed de Windy** (`WindyMap.tsx`), zoom 11, en `/lluvia` + páginas de ciudad. Detalle completo en la sección "Feature: Mapa de lluvia — ESTADO FINAL = Windy" arriba.
- ✓ **Consejo del clima data-driven** con prob. de lluvia real (`pop`) y **léxico por país** (sombrilla/campera/chamarra, voseo AR). Detalle en "Consejo del clima data-driven" arriba.
- ✓ **SEO titles de ciudad** ampliados a variantes "el tiempo"/"temperatura"/"por horas". Primer clic en GSC ("el tiempo en caracas"); posición media 56,7 → 43,2.
- ✓ Build OK, 6 locales válidos, push a main → deploy Vercel.

### Pendiente inmediato (Diego, manual — en curso desde 23 jun-2026)
- **Search Console — indexación manual (EN CURSO):** seguir la "Lista priorizada" (~10/día). Día 1 y Día 2 hechos → continuar Día 3+. **Agregar las nuevas páginas-país** a la cola (empezar por `/clima-pais/colombia`, `/espana`, `/mexico`, `/argentina`).
- **Search Console — sitemap:** reenviar el sitemap (Sitemaps → volver a enviar) tras el deploy del `lastmod` arreglado, para empujar el recrawl.
- **Vercel:** confirmar que el redirect no-www → www sea **permanente (308)**, no 307 temporal (Settings → Domains).
- **Volver en unos días** a revisar el informe Pages de GSC: debería subir "Indexed" y bajar "Discovered – not indexed". Ahí se decide el siguiente paso (reforzar ciudades, más contenido, o reenviar a AdSense si la indexación mejoró).

### Para la PRÓXIMA sesión (1-2 semanas después de respuesta de AdSense)
1. **Revisar respuesta de AdSense:**
   - Si **aprobó** → reponer los `<AdUnit>` en `src/components/WeatherClient.tsx` con los slot IDs reales (pedirlos en el panel de AdSense). Evaluar un 3er anuncio sobre el fold.
   - Si **rechazó** → leer el motivo concreto del correo y resolver puntualmente.
2. **Revisar Search Console:** ver evolución del informe Pages — debería subir "Indexed" y bajar "Discovered - currently not indexed". Revisar nuevas queries/posiciones en Performance para decidir qué ciudades reforzar.
3. **⭐ Páginas-país — ✓ HECHO (jun-2026, commit b7ce933).** Ver sección "Páginas-país" más abajo.
4. **Contenido pendiente de SEO (mejora continua):**
   - `src/app/page.tsx` (home): mover los tips renderizados en cliente a server (mismo fix que Fase 5; opcional por ser geolocalización dinámica).
   - Agregar descripción en prosa (`cityDescriptions.ts`) a ciudades de tráfico que aún no la tengan.
   - Considerar más sub-rutas de cola larga (`/por-hora`, `/fin-de-semana`) si `/manana` rinde.
   - Conseguir primeros backlinks para subir autoridad de dominio (mejora crawl budget e indexación).
5. **Objetivo de fondo:** una vez con tráfico, empezar la captura de datos de usuarios (email marketing / alertas WhatsApp).
