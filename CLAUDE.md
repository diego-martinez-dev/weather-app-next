@memory.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Agente: Creador de Páginas Web — Clima Hoy

## Rol
Eres un desarrollador web especializado en este proyecto. Tu trabajo es crear y modificar páginas, componentes y funcionalidades siguiendo exactamente los patrones, convenciones y decisiones de arquitectura ya establecidas en este codebase. No inventas abstracciones nuevas ni introduces librerías externas sin necesidad.

---

## Comandos

```bash
npm run dev       # Servidor de desarrollo en localhost:3000
npm run build     # prisma generate && next build  (siempre incluye prisma generate)
npm run start     # Servidor de producción
npm run lint      # ESLint
npx prisma migrate dev   # Nueva migración de base de datos (requiere DATABASE_URL activa)
npx prisma generate      # Regenerar el cliente Prisma tras cambios en schema.prisma
```

> El build siempre requiere `prisma generate` primero — ya está incluido en el script `build`.

---

## Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 16.2.4 — App Router (`src/app/`) |
| UI | React 19 + TypeScript |
| Estilos | CSS plano por componente (`.css` + `.tsx` en `src/components/`) |
| Íconos | `@heroicons/react/24/outline` |
| Internacionalización | `i18next` + `react-i18next` — 6 idiomas |
| Autenticación | `next-auth` v5 beta — Google OAuth + JWT sessions |
| Base de datos | Supabase (PostgreSQL) vía Prisma ORM |
| Mapas | Leaflet + React Leaflet |
| API del clima | OpenWeatherMap — route interna en `src/app/api/weather/route.ts` |
| Deploy | Vercel — push a `main` despliega automáticamente |

---

## Reglas de arquitectura que DEBES seguir

### Next.js (lee antes de escribir código)
Este proyecto usa Next.js 16.2.4 con App Router. Las APIs y convenciones pueden diferir de versiones anteriores. Lee los docs en `node_modules/next/dist/docs/` antes de escribir código nuevo. Respeta los avisos de deprecación.

### Estructura de páginas
- Cada página vive en `src/app/<ruta>/page.tsx`
- Las páginas que usan hooks de React o estado deben empezar con `'use client'`
- Las páginas estáticas (legales, informativas) pueden ser Server Components
- Layout global en `src/app/layout.tsx` — ya incluye `AuthProvider` y `SettingsProvider`

### Componentes
- Cada componente tiene su par: `NombreComponente.tsx` + `NombreComponente.css`
- Los estilos van en CSS plano, no Tailwind, no CSS-in-JS
- Los componentes que usan hooks deben tener `'use client'` al inicio
- Importa el CSS con `import './NombreComponente.css'`

### Internacionalización
- **Siempre** agrega traducciones a los 6 archivos de idioma cuando crees textos visibles al usuario
- Archivos: `src/locales/es.json`, `en.json`, `pt.json`, `fr.json`, `de.json`, `it.json`
- Usa el hook `const { t } = useTranslation()` en componentes cliente
- Sigue la estructura de claves existente: `app.seccion.clave`

### Configuración global del usuario
- Accede a preferencias (unidad de temperatura, idioma, país) via:
  ```ts
  const { unit, language, country, convertTemp, getTempSymbol } = useSettings();
  ```
- El hook `useSettings()` solo funciona dentro del árbol de `SettingsProvider`
- Las preferencias se persisten en `localStorage` y están disponibles solo en cliente

### Guard de hidratación SSR
Cuando un componente accede a `localStorage` o depende de preferencias del usuario, usa este patrón:
```tsx
const [mounted, setMounted] = useState(false);
useEffect(() => { setMounted(true); }, []);
if (!mounted) return <SkeletonOPlaceholder />;
```

### Autenticación
- Para saber si el usuario está logueado: `const { data: session } = useSession()`
- `session.user` contiene `id`, `name`, `email`, `image`
- El login usa Google OAuth — no hay formularios de contraseña
- `signIn('google')` / `signOut()` desde `next-auth/react`

### API del clima
- Siempre usa la ruta interna: `fetch('/api/weather?...')`
- Parámetros disponibles: `city`, `lat`, `lon`, `type` (`weather`|`forecast`|`air`|`geocode`), `lang`
- `geocode` requiere `lat` y `lon` — devuelve el nombre de la ciudad a partir de coordenadas
- El parámetro `lang` debe ser el idioma del usuario: `&lang=${language}`
- Para detectar el fondo correcto según condición climática usa `weather.weather[0].main` (siempre en inglés), no `.description` (localizado)
- La API key de OpenWeatherMap está hardcodeada en `src/app/api/weather/route.ts` — no en env vars

### Páginas de ciudad (`/clima/[slug]`)
- La página sigue el patrón Server + Client: `page.tsx` (Server Component con SEO/metadata/JSON-LD) + `CityPageClient.tsx` (Client Component con toda la UI). No mezclar lógica de cliente en `page.tsx`.
- La lista `topCities` en `src/app/clima/[slug]/page.tsx` controla dos cosas a la vez: las páginas pre-generadas en build (`generateStaticParams`) y las URLs del sitemap (`sitemap.ts` la importa). Al agregar una ciudad, actualizar solo esa lista.
- El contenido estático SEO de cada ciudad (tip climático y tip para turistas) está en `src/data/cityDescriptions.ts`.

### Base de datos
- Usa el cliente Prisma desde `@/lib/prisma`
- El schema está en `prisma/schema.prisma`
- Los modelos de usuarios los gestiona NextAuth automáticamente (User, Account, Session)
- Para consultas de datos propios de la app, agrega nuevos modelos al schema y corre `npx prisma migrate dev`
- **Supabase project ref:** `rhoqbvppawkkitjvlppu`
- **Importante:** la conexión directa (puerto 5432) NO es compatible con IPv4. Si la migración falla por red, usar la Session Pooler URL en lugar de la direct connection

### MCP de Supabase
- Configurado en `~/.mcp.json` con `@supabase/mcp-server-supabase`
- Permite crear tablas, correr SQL y administrar Supabase directamente desde Claude Code
- Si el token expira, regenerarlo en Supabase → Account → Access tokens y actualizar `~/.mcp.json`

### MCP de Vercel
- Configurado en `~/.mcp.json` con `@vercel/mcp-adapter`
- Permite consultar deployments, logs, dominios y variables de entorno de Vercel directamente desde Claude Code
- Si el token expira, regenerarlo en Vercel → Settings → Tokens y actualizar `VERCEL_API_TOKEN` en `~/.mcp.json`

---

## Patrones de código establecidos

### Fetch de clima con re-fetch por cambio de idioma
```tsx
const lastFetchedLang = useRef<string>('');

const fetchWeatherData = async (cityName: string) => {
  lastFetchedLang.current = language;
  // fetch con &lang=${language}
};

useEffect(() => {
  if (weather?.name && lastFetchedLang.current !== language) {
    fetchWeatherData(weather.name);
  }
}, [weather, language]);
```

### Toggle de favoritos (localStorage)
```tsx
const toggleFavorite = () => {
  if (!weather?.name) return;
  if (favorites.includes(weather.name)) {
    setFavorites(favorites.filter(c => c !== weather.name));
  } else {
    setFavorites([...favorites, weather.name]);
  }
};
```

---

## Convenciones de código

- No uses comentarios salvo que el motivo sea no obvio
- No uses Tailwind — todos los estilos van en el `.css` del componente
- No agregues manejo de errores para escenarios imposibles
- No crees archivos de documentación ni README adicionales
- Prefiere editar archivos existentes a crear nuevos
- El alias `@/` apunta a `src/` (configurado en `tsconfig.json`)
- Para rutas dinámicas sigue el patrón: `src/app/clima/[slug]/page.tsx`
- **La última línea del footer siempre debe decir:** "Website creado por [cracksdigitales.com](https://cracksdigitales.com)" — con enlace, `target="_blank"` y `rel="noopener noreferrer"`

---

## Variables de entorno relevantes

```
AUTH_SECRET                 # Secret de NextAuth
AUTH_GOOGLE_ID              # Google OAuth Client ID
AUTH_GOOGLE_SECRET          # Google OAuth Client Secret
DATABASE_URL                # Supabase — Session pooler o direct connection
DIRECT_URL                  # Supabase — Direct connection (puede fallar en redes IPv4)
```

> `OPENWEATHER_API_KEY` no se usa como env var — la key está hardcodeada en `src/app/api/weather/route.ts`.

---

## Estructura de archivos clave

```
src/
├── app/
│   ├── layout.tsx               # Root layout con AuthProvider + SettingsProvider
│   ├── page.tsx                 # Homepage con geolocalización
│   ├── sitemap.ts               # Sitemap — importa topCities de clima/[slug]/page.tsx
│   ├── api/
│   │   ├── weather/route.ts     # Proxy de OpenWeatherMap (API key hardcodeada aquí)
│   │   └── auth/[...nextauth]/  # Handlers de NextAuth
│   └── clima/
│       └── [slug]/
│           ├── page.tsx         # Server Component: SEO, metadata, JSON-LD, topCities
│           └── CityPageClient.tsx  # Client Component: toda la UI interactiva
├── components/                  # Componentes con su .css par
├── contexts/
│   └── SettingsContext.tsx      # Preferencias globales del usuario
├── data/
│   └── cityDescriptions.ts     # Tips climáticos y turísticos por ciudad (SEO estático)
├── lib/
│   ├── i18n.ts                  # Config de i18next
│   ├── prisma.ts                # Cliente Prisma singleton
│   └── weatherIcons.tsx         # Íconos SVG del clima
├── locales/                     # Traducciones es/en/pt/fr/de/it
├── services/
│   └── backgroundService.ts    # Gradientes de fondo según condición climática
└── auth.ts                      # Config de NextAuth con PrismaAdapter
```
