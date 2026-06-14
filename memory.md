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

- `/acerca` — Server Component con contenido original sobre Clima Hoy (es + en)
- `/contacto` — Server Component con email `contacto@clima-hoy.com` (mailto:)
- `/guias` — índice de 8 artículos + `/guias/[slug]` con JSON-LD Article
- Footer actualizado con links a las 3 páginas nuevas en los 6 idiomas
- `cityDescriptions.ts` — tips agregados para London, Paris, Berlin, Rome, Amsterdam, Dubai, Sydney, Brasilia, São Paulo, Río de Janeiro, Riohacha
- `WeatherClient.tsx` — AdUnits placeholder eliminados (slots 1111111111 y 2222222222)
- Sitemap actualizado con todas las rutas nuevas
- **Diego debe:** configurar reenvío `contacto@clima-hoy.com → diego2392martinez@gmail.com` (Cloudflare Email Routing o ImprovMX) y solicitar nueva revisión en el panel de AdSense una vez que el deploy esté live.

## Pendientes

- **AdSense:** Cuando llegue la aprobación, reponer los `<AdUnit>` en `src/components/WeatherClient.tsx` con los slot IDs reales.
- **AdSense:** Diego debe solicitar la nueva revisión en el panel de AdSense (Sites → solicitar revisión).
- **Email:** Diego debe configurar reenvío `contacto@clima-hoy.com` en Cloudflare Email Routing o ImprovMX.
- **SEO:** Considerar agregar más ciudades hispanohablantes al listado de `topCities` en `page.tsx`.
