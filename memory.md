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
- **Clima:** OpenWeatherMap vía proxy interno `src/app/api/weather/route.ts`. La API key debe vivir **solo en variable de entorno** (`.env.local` local + Vercel), **nunca en memoria ni en texto plano**. ⚠️ Hoy sigue hardcodeada en el route — pendiente moverla a env y **rotar la key** (ver Pendientes: quedó en el historial de git). Tipos: `weather`|`forecast`|`air`|`geocode`. Pasar siempre `&lang=${language}`.
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

## Estado actual del sitio (~303 páginas SSG)

**Páginas de ciudad `/clima/[slug]`** (81 ciudades, patrón Server+Client):
- `page.tsx` (Server, SEO): h1, intro, tip climático + turístico, bloque **"¿Qué temperatura hace en {ciudad} hoy?"** (featured snippet, si hay `avgTempRange`), recuadro clima típico/mejor época/lluvias, **tabla "Clima mes a mes"** (15 ciudades), FAQ `<details>`, guías relacionadas, bloque "otras ciudades del país", mapa Windy. Titles cubren variantes "el tiempo en / temperatura en / por horas".
- `CityPageClient.tsx` (Client): tarjeta en vivo, pronóstico, **calidad del aire**, **Sol y Luna**, mapa.
- Sub-rutas: `/manana` (81 SSG) y `/por-hora` (81 SSG), ambas Server(SEO)+Client(datos).

**Páginas-país `/clima-pais/[pais]`** (19 países hispanos + EEUU/Canadá, SSG): guía extensa server-rendered — intro (3 párr.), clima por regiones, cuándo viajar, qué llevar, grilla de ciudades, FAQ, otros países. Enlazado interno bidireccional ciudad↔país. Agrupados por continente en el menú.

**Contenido / confianza:** `/clima` (índice ciudades + 19 países), `/guias` + 24 guías (`/guias/[slug]`), `/glosario` (27 términos), `/faq` (14), `/calidad-del-aire` (hub educativo), `/lluvia` (mapa Windy), `/acerca`, `/contacto`, legales (`/privacy`, `/cookies`, `/terms`, `/data-sources`), `HomeFaq` en el home.

**Navegación (`TopMenu`):** Guías (submenú), Clima por país (submenú por continentes), Glosario (link), FAQ (link), Radar de lluvia (link). Móvil: secciones expandibles.

**Features vivas y sus archivos clave:**
- **Consejo del clima data-driven** (`WeatherClient.tsx`): `src/lib/weatherSignals.ts` + `weatherAdvice.ts` (la prob. de lluvia real manda sobre la condición) + `localLexicon.ts` (léxico por país es: sombrilla/paraguas, abrigo/chaqueta/chamarra/campera, voseo AR) + plantillas `app.advice.*`. Temps convertidas con `convertTemp` antes de interpolar.
- **Calidad del aire:** `src/lib/airQuality.ts` (`getAqiInfo`, `getPollutantLevel` umbrales OMS/EPA) + `components/AirQuality.{tsx,css}` (AQI + PM2.5/PM10/O₃/NO₂ + consejo salud) + hub `/calidad-del-aire`.
- **Sol y Luna:** `src/lib/moon.ts` (`getMoonPhase`, cálculo astronómico sin API) + `components/SunMoon.{tsx,css}` (amanecer/atardecer/duración día/fase lunar).
- **Mapa de lluvia:** `components/WindyMap.tsx` (iframe embed de Windy, zoom 11). RainViewer fue **descartado** (no soporta zoom de barrio). Divulgación de cookies apunta a Windy.

**Data files de contenido (español):** `cityDescriptions.ts` (description + touristTip por ciudad), `cityClimate.ts` (bestTimeToVisit/rainySeasons/avgTempRange/faq, ~81 ciudades), `cityMonthlyClimate.ts` (15 ciudades top), `countries.ts` (19 países), `guides.ts` (24 guías).

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

### 🔒 Seguridad — mover la API key de OpenWeather a env (pendiente)
- Hoy la key está **hardcodeada** en `src/app/api/weather/route.ts` (committeada → está en el historial de git). Pasos para asegurarla: (1) **rotar la key** en el panel de OpenWeather (la actual queda comprometida); (2) leerla en el route desde `process.env.OPENWEATHER_API_KEY`; (3) agregarla a `.env.local` (gitignored) y a **Vercel** (Settings → Environment Variables); (4) actualizar `CLAUDE.md`, que hoy dice "hardcodeada, no env var". Requiere coordinar con Diego (rotación + env en Vercel para no romper prod).

### Próximas mejoras (cuando corresponda)
- Ampliar `cityMonthlyClimate.ts` con más ciudades si la tabla mes a mes rankea.
- Sub-ruta `/fin-de-semana` si `/por-hora` rinde. Primeros backlinks para autoridad.
- **Al aprobar AdSense:** reponer `<AdUnit>` con slot IDs reales; evaluar un 3er anuncio.

## Objetivos a largo plazo
- Construir una base de datos de usuarios para **campañas de email marketing**.
- Enviar **alertas personalizadas por WhatsApp** a usuarios registrados.
- El login con Google es el primer paso hacia ese sistema.
- **Monetizar la página con publicidad (Google AdSense)** — en proceso de aprobación.
