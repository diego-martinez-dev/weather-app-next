# Memoria del proyecto — clima-hoy.com

Snapshot del estado actual. Actualizar cuando cambie algo importante. Última limpieza: jul-2026.

---

## Usuario
- **Diego Martínez** — diego2392martinez@gmail.com. Desarrollador del proyecto; no experto en todo el stack. Prefiere explicaciones claras y directas.

## Proyecto
- **Producción:** https://www.clima-hoy.com (el sitio **sirve www**; no-www redirige a www).
- **Repo:** https://github.com/diego-martinez-dev/weather-app-next · **Deploy:** Vercel (push a `main` = deploy automático).
- Sitio del clima en 6 idiomas. Objetivo: monetizar (AdSense) + captar datos de usuarios.

---

## Stack y datos operativos
- **Next.js 16 App Router + React 19 + TS.** CSS plano por componente (`.tsx`+`.css`). **Tailwind NO se usa.**
- **Clima:** OpenWeatherMap vía proxy interno `src/app/api/weather/route.ts`. La API key vive **solo en env** (`OPENWEATHER_API_KEY` en `.env.local` local + Vercel), **nunca en memoria/repo/texto plano**. Los tiles del mapa de temperatura se sirven por otro proxy server-side `src/app/api/tile/route.ts` (así la key tampoco se expone en el cliente). Tipos de `/api/weather`: `weather`|`forecast`|`air`|`geocode`. Pasar siempre `&lang=${language}`.
- **Auth:** Google OAuth con NextAuth v5 beta, sesiones JWT. `AUTH_URL=https://clima-hoy.com` en Vercel (callback OAuth va **sin www**). `NEXTAUTH_URL` eliminado (deprecado en v5).
- **BD:** Supabase (PostgreSQL) + Prisma **v5** (no v7 — incompatible con `@auth/prisma-adapter`). Project ref `rhoqbvppawkkitjvlppu`. Pooler host `aws-1-us-east-1.pooler.supabase.com`; `DATABASE_URL` con `?pgbouncer=true`. Build = `prisma generate && next build`.
- **MCP** Supabase y Vercel configurados en `~/.mcp.json`.

## Reglas de oro (no romper)
1. **Canonical siempre `https://www.clima-hoy.com` (CON www).** Nunca reintroducir URLs sin www en canonical/OG/JSON-LD/sitemap.
2. **Contenido SEO server-rendered.** Todo texto SEO que dependa solo de datos estáticos va en el Server Component (`page.tsx`), NUNCA detrás de un `if (loading)` del cliente. (Fue la causa raíz de las "Discovered - not indexed"; resuelto.)
3. **Contenido de ciudad/país en español solamente** (mercado objetivo). Solo las etiquetas de UI del menú/footer van en los 6 idiomas.
4. **i18n:** al crear texto de UI visible, agregar la clave a los 6 locales (`src/locales/{es,en,pt,fr,de,it}.json`).
5. **Sitemap `lastmod`:** usa la constante `LAST_CONTENT_UPDATE` en `src/app/sitemap.ts`. **Bumpearla a mano** al cambiar contenido (no usar `new Date()`).
6. **Exactitud > volumen** en contenido climático: no inventar cifras; rangos reales aproximados + descripción cualitativa.
7. **No** crear páginas por-ciudad finitas a escala (riesgo "low value"): el dato en vivo va como sección en la página de ciudad existente; lo educativo, en un hub.
8. Footer: última línea siempre "Website creado por [cracksdigitales.com]". Commits terminan con `Co-Authored-By: Claude Opus 4.8`.

---

## Estado actual del sitio (~347 páginas SSG — jul-2026)

**Páginas de ciudad `/clima/[slug]`** (95 ciudades, patrón Server+Client):
- `page.tsx` (Server, SEO): h1, intro, tip climático + turístico, bloque **"¿Qué temperatura hace en {ciudad} hoy?"** (featured snippet, si hay `avgTempRange`), recuadro clima típico/mejor época/lluvias, **tabla "Clima mes a mes"** (15 ciudades), FAQ `<details>`, guías relacionadas, bloque "otras ciudades del país", **sección ❄️ Nieve (solo snow cities, con mapa Windy snowAccu)**, mapa Windy lluvia. Titles cubren variantes "el tiempo en / temperatura en / por horas".
- `CityPageClient.tsx` (Client): tarjeta en vivo, pronóstico, **calidad del aire**, **Sol y Luna**, **pronóstico de nieve `SnowForecast.tsx`** (solo snow cities, usa `snow['3h']` del endpoint forecast ya disponible), mapa.
- Sub-rutas: `/manana` (95 SSG) y `/por-hora` (95 SSG), ambas Server(SEO)+Client(datos).

**14 ciudades nuevas (jul-2026) — todas con descripción + tip + cityClimate completo:**
- **Argentina:** `bariloche` (Cerro Catedral), `ushuaia` (Cerro Castor), `san-martin-de-los-andes` (Chapelco), `villa-la-angostura` (Cerro Bayo), `esquel` (La Hoya), `el-bolson`, `el-calafate`
- **Chile:** `farellones` (El Colorado/La Parva/Valle Nevado), `coyhaique`, `punta-arenas`
- **EE.UU.:** `denver`, `boston`, `minneapolis`, `buffalo`
- **Nota:** `malargue` **excluida** (geocode problemático en OWM)

**Feature de nieve (jul-2026):**
- `src/data/snowCities.ts`: `Set<string>` con 16 snow cities + `isSnowCity(slug)` + `snowDestinations` agrupado por región (para el hub).
- `WindyMap.tsx`: acepta prop `overlay?: string` (default `'rain'`). Para nieve usar `overlay="snowAccu"`, zoom 8 (regional).
- Sección `id="nieve"` en `page.tsx` (Server, solo snow cities): párrafo intro server-rendered + mapa Windy snowAccu + link al hub.
- `components/SnowForecast.{tsx,css}` (Client): usa el `forecast` existente (`snow['3h']` + condición "Snow"); muestra días nevosos y acumulación; se monta en `CityPageClient.tsx` condicionado a `showSnow`.
- **Menú condicional:** `TopMenu.tsx` usa `usePathname()` para detectar `/clima/{slug}` y mostrar "❄️ Nieve" solo si `isSnowCity(slug)`. Clave i18n `app.nav.snow` en los 6 idiomas (es/en/pt/fr/de/it).
- Hub `/nieve` (Server, SSG): H1, intro doble temporada, mapa Windy snowAccu centrado en Bariloche (zoom 5), grilla de destinos por región, 4 FAQ + JSON-LD FAQPage + BreadcrumbList, enlazado desde footer.
- **Sin dependencia de One Call API.** Esta feature es independiente del UV.

**Páginas-país `/clima-pais/[pais]`** (19 países hispanos + EEUU/Canadá, SSG): guía extensa server-rendered — intro (3 párr.), clima por regiones, cuándo viajar, qué llevar, grilla de ciudades, FAQ, otros países. Enlazado interno bidireccional ciudad↔país. Agrupados por continente en el menú.

**Contenido / confianza:** `/clima` (índice ciudades + 19 países), `/guias` + 24 guías (`/guias/[slug]`), `/glosario` (27 términos), `/faq` (14), `/calidad-del-aire` (hub educativo), `/lluvia` (mapa Windy), `/nieve` (hub nieve/esquí), `/acerca`, `/contacto`, legales (`/privacy`, `/cookies`, `/terms`, `/data-sources`), `HomeFaq` en el home.

**Navegación (`TopMenu`):** Guías (submenú), Clima por país (submenú por continentes), Glosario (link), FAQ (link), Radar de lluvia (link), ❄️ Nieve (condicional, solo páginas snow city). Móvil: secciones expandibles.

**Features vivas y sus archivos clave:**
- **Consejo del clima data-driven** (`WeatherClient.tsx`): `src/lib/weatherSignals.ts` + `weatherAdvice.ts` (la prob. de lluvia real manda sobre la condición) + `localLexicon.ts` (léxico por país es: sombrilla/paraguas, abrigo/chaqueta/chamarra/campera, voseo AR) + plantillas `app.advice.*`. Temps convertidas con `convertTemp` antes de interpolar.
- **Calidad del aire:** `src/lib/airQuality.ts` (`getAqiInfo`, `getPollutantLevel` umbrales OMS/EPA) + `components/AirQuality.{tsx,css}` (AQI + PM2.5/PM10/O₃/NO₂ + consejo salud) + hub `/calidad-del-aire`.
- **Sol y Luna:** `src/lib/moon.ts` (`getMoonPhase`, cálculo astronómico sin API) + `components/SunMoon.{tsx,css}` (amanecer/atardecer/duración día/fase lunar).
- **Mapa de lluvia/nieve:** `components/WindyMap.tsx` (iframe embed de Windy). Props: `lat`, `lon`, `zoom` (default 9), `height` (default 470), `overlay` (default `'rain'`; para nieve usar `'snowAccu'`). RainViewer fue **descartado** (no soporta zoom de barrio). Divulgación de cookies apunta a Windy.

**Data files de contenido (español):** `cityDescriptions.ts` (description + touristTip por ciudad), `cityClimate.ts` (bestTimeToVisit/rainySeasons/avgTempRange/faq, ~95 ciudades), `cityMonthlyClimate.ts` (15 ciudades top), `countries.ts` (19 países + nuevas ciudades de nieve en Argentina, Chile y EE.UU.), `guides.ts` (24 guías), `snowCities.ts` (lista curada 16 snow cities).

**Email:** `contacto@` y `privacidad@clima-hoy.com` reenvían a Gmail vía **ImprovMX** (gratis, DNS en AWS Route 53). Solo recibe/reenvía, no envía.

---

## AdSense
- **Publisher ID:** `ca-pub-1859146451941420`. `ads.txt` en `public/`, meta de verificación en `layout.tsx`. Disclosure legal de AdSense (cookies DoubleClick + opt-out) en `/privacy` y `/cookies`.
- **Estado: 2º RECHAZO (jun-2026) "Low value content".** Diagnóstico: el cuello de botella es **estructural + de indexación/tráfico**, no falta de páginas (dato de clima no es original; muchas SSG por plantilla; poco tráfico). **Decisión: NO reenviar** hasta tener base sólida (más indexación + clics reales). Reenvíos rápidos con cambios marginales perjudican.
- **Slots de anuncio:** 2 placeholder en `WeatherClient.tsx` (`1111111111`, `2222222222`). Al aprobar → reemplazar por IDs reales.
- **Escalera futura de monetización:** AdSense → Ezoic (umbral bajo, apila con AdSense) → Mediavine/Raptive (50k–100k sesiones). Afiliados contextuales: protector solar (UV), purificador (aire), hoteles/vuelos (clima mes a mes).

## Search Console
- Propiedad tipo Dominio `clima-hoy.com`. Sitemaps viejos de Blogger ya eliminados. Redirect no-www→www (confirmar en Vercel que sea **308** permanente).
- **Baseline (8-jul-2026):** 9 clics / 3.435 impresiones / **~72 páginas indexadas** / pos. media ~25 (vs. 0 clics, 412 impr, pos 56 tres meses antes). Progreso fuerte: la indexación se destrabó con el enlazado interno; ahora el cuello es **posición** (casi todo en página 3-4). Estrella: `/clima/caracas` (pos 17, 8 clics).
- **Regla:** el sitemap NO cambia la decisión de indexar (las URLs ya están "descubiertas"). Lo que mueve la aguja: indexación manual + enlazado interno + autoridad/tiempo.
- **Indexación manual (Diego, en curso):** pedir ~10/día en URL Inspection, priorizando páginas con impresiones + las nuevas (`/calidad-del-aire`, `/por-hora`, páginas-país). Reenviar sitemap tras cada deploy con contenido nuevo.

---

## Pendientes

### ⭐ Retomar MAÑANA — Índice UV (Fase 4 de `PLAN_CONTENIDO_VALOR.md`)
- Diego se suscribió a **One Call by Call** (límite 1.000/día para no pagar), pero `data/3.0/onecall` **sigue en HTTP 401** (la key da 200 en los endpoints 2.5 → key válida, falta que el plan One Call quede activo).
- **Al reanudar:** re-correr el curl; solo si da **200 con `uvi`**, ejecutar la Fase 4 (ya escrita en el plan: `type=onecall` en el route, `src/lib/uv.ts`, `components/UvIndex.{tsx,css}`, i18n `app.uv.*`).
  ```
  # usar la key real desde el route/env; NO pegarla en memoria
  curl -s -o /dev/null -w "%{http_code}\n" "https://api.openweathermap.org/data/3.0/onecall?lat=10.48&lon=-66.87&units=metric&exclude=minutely&appid=$OWM_KEY"
  ```
- Si sigue 401 tras horas: revisar en el panel de OpenWeather que la suscripción figure **Active** (no *Pending*) y en la **misma cuenta** dueña de la key.

### Diego (manual)
- **GSC:** seguir la indexación manual (arriba) y confirmar redirect 308 en Vercel.
- **Revisar GSC (~2 semanas post 8-jul):** ¿subieron las guías que estaban en pos 6-10? ¿clics en `/por-hora`? ¿indexó `/calidad-del-aire` y las páginas-país? Con eso se decide reforzar ciudades / reenviar a AdSense.

### 🔒 Seguridad — API key de OpenWeather ✓ RESUELTO (jul-2026)
- Diego **rotó la key** y la puso en `.env.local` + Vercel como `OPENWEATHER_API_KEY`. En el código: `route.ts` la lee de `process.env`; se **eliminó `src/config.ts`** (dead code con la key vieja); los tiles de `WeatherMap.tsx` ahora pasan por el proxy server-side `/api/tile` (antes tenían la key hardcodeada en el cliente). `CLAUDE.md` y `memory.md` actualizados; 0 ocurrencias de la key vieja en el repo. Divulgación de cookies del mapa actualizada (la IP ya no se comparte directo con OWM). **Nota:** la key vieja quedó en el historial de git, pero al estar rotada ya no sirve.

### Próximas mejoras (cuando corresponda)
- Ampliar `cityMonthlyClimate.ts` con más ciudades si la tabla mes a mes rankea.
- Sub-ruta `/fin-de-semana` si `/por-hora` rinde. Primeros backlinks para autoridad.
- **Al aprobar AdSense:** reponer `<AdUnit>` con slot IDs reales; evaluar un 3er anuncio.

## Objetivos a largo plazo
- Construir una base de datos de usuarios para **campañas de email marketing**.
- Enviar **alertas personalizadas por WhatsApp** a usuarios registrados.
- El login con Google es el primer paso hacia ese sistema.
- **Monetizar la página con publicidad (Google AdSense)** — en proceso de aprobación.
