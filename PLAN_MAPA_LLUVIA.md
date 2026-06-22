# Plan — Mapa de lluvia en tiempo real (radar animado)

> Handoff para ejecutar en la terminal. Seguí `CLAUDE.md` (CSS plano por componente, Server
> Components para SEO, i18n, footer con cracksdigitales.com). No agregues librerías nuevas: ya hay
> **Leaflet** en el proyecto (ver `src/components/WeatherMap.tsx`). Reusá ese patrón
> (`dynamic(..., { ssr:false })`).

## Objetivo y decisiones tomadas

- **Feature:** un mapa de **radar de lluvia en tiempo real y animado** (ver la lluvia moviéndose).
  Caso de uso: motociclistas y peatones que monitorean si va a llover, sobre todo en ciudades
  lluviosas (Bogotá, Medellín). Visita recurrente → bueno para AdSense.
- **Fuente de datos: RainViewer** (gratis, sin API key, radar real con animación). NO usar
  OpenWeatherMap para esto.
- **Ubicación: (a)** página dedicada `/lluvia` + **(b)** integración en cada página de ciudad.

## API de RainViewer (datos técnicos — usar estos)

- **Índice de frames:** `GET https://api.rainviewer.com/public/weather-maps.json`
  Respuesta (resumen):
  ```jsonc
  {
    "host": "https://tilecache.rainviewer.com",
    "radar": {
      "past":    [ { "time": 1718900000, "path": "/v2/radar/1718900000" }, ... ],   // ~últimas 2h
      "nowcast": [ { "time": 1718900600, "path": "/v2/radar/nowcast_xxx" }, ... ]    // predicción +30min
    }
  }
  ```
- **URL de tile (Leaflet TileLayer):**
  `{host}{path}/{size}/{z}/{x}/{y}/{color}/{options}.png`
  - `size`: `256`
  - `color`: esquema de color; usar **`4`** (Universal Blue, buena lectura de intensidad).
  - `options`: `{smooth}_{snow}` → usar **`1_1`** (suavizado + nieve).
  - Ejemplo final: `https://tilecache.rainviewer.com/v2/radar/1718900000/256/{z}/{x}/{y}/4/1_1.png`
- **Atribución obligatoria:** mostrar "Radar © RainViewer" con enlace a `https://www.rainviewer.com/`.
- **Refresco:** volver a pedir el JSON cada ~5 min (no más seguido). Respetar el servicio.

---

## TAREA 1 — Componente del mapa de radar (client)

Crear `src/components/RainRadarMap.tsx` + `RainRadarMap.css` y `RainRadarMapWrapper.tsx`
(idéntico patrón a `WeatherMap` + `WeatherMapWrapper`: el wrapper hace
`dynamic(() => import('./RainRadarMap'), { ssr:false, loading: <placeholder/> })`).

Props: `{ lat: number; lon: number; zoom?: number; cityName?: string; showSearch?: boolean }`.

Render:
- Mapa Leaflet con base CartoDB (misma que `WeatherMap`).
- Botón de **geolocalización** ("mi ubicación") que centra el mapa en `navigator.geolocation`.
- Marcador opcional si viene `cityName`.
- Si `showSearch` (solo en la página dedicada): input de búsqueda de ciudad que geocodifica vía
  la API interna existente `/api/weather?type=geocode` o `?city=` y recenter el mapa.

## TAREA 2 — Animación del radar (lógica RainViewer)

Dentro de `RainRadarMap`:
- Al montar, `fetch` del `weather-maps.json`. Construir `frames = [...radar.past, ...radar.nowcast]`.
- Para cada frame, crear un `L.tileLayer(tileUrl(frame), { opacity: 0, zIndex, tileSize:256 })`
  y agregarlo al mapa (precargar todos; ~13 frames está bien).
- **Animación:** un timer (~500 ms) que muestra un frame a la vez (opacity ~0.7 al actual, 0 al
  resto) y avanza cíclicamente. Al pasar de `past` a `nowcast`, hacer una pausa breve al final.
- **Controles (touch-friendly, el caso de uso es móvil):**
  - Botón **play/pausa**.
  - **Slider/timeline** para arrastrar entre frames.
  - **Etiqueta de hora** del frame actual (ej. `14:30`); marcar los `nowcast` como "Previsión"
    (ej. `+10 min`) y el último `past` como "Ahora".
- **Leyenda** de intensidad (escala de color → de llovizna a lluvia fuerte).
- Re-fetch del JSON cada ~5 min para incorporar frames nuevos. Limpiar timers en el `useEffect`
  cleanup y al desmontar.

## TAREA 3 — Página dedicada `/lluvia` (Server Component + mapa client)

Crear `src/app/lluvia/page.tsx` como **Server Component** (patrón de otras páginas con SEO):
- `generateMetadata`: title `Mapa de lluvia en tiempo real — Radar de lluvia | Clima Hoy`,
  description con keywords ("radar de lluvia", "mapa de lluvia en vivo", "¿va a llover?"),
  `canonical https://www.clima-hoy.com/lluvia` (CON www).
- **Contenido SEO renderizado en server** (lección de la Fase 5: NO meterlo detrás de un `loading`
  del cliente): `<h1>Mapa de lluvia en tiempo real</h1>`, un párrafo intro original explicando qué
  es el radar, para quién (motociclistas, peatones, ciclistas), cada cuánto se actualiza, y una
  mini-FAQ (2-3 preguntas) con `JSON-LD FAQPage`.
- Debajo del texto, renderizar `<RainRadarMapWrapper showSearch />` (client).
- La página lee query params opcionales para centrarse: `?ciudad={slug}` (geocodifica) o
  `?lat=&lon=`. Si no hay, intenta geolocalización del navegador y, como fallback, centra en una
  ciudad por defecto (ej. Bogotá) con zoom regional.

## TAREA 4 — Integración en cada página de ciudad

En `src/app/clima/[slug]/page.tsx` (server) agregar una **sección SEO server-rendered**:
- `<h2>¿Está lloviendo en {city}? Radar en vivo</h2>` + un párrafo original (esto rankea para
  "está lloviendo en {city}", "radar de lluvia {city}").
- Un **botón/enlace** `Ver radar de lluvia en {city} →` que apunte a `/lluvia?ciudad={slug}`.
- **Opcional (recomendado para ciudades clave):** embeber un `RainRadarMapWrapper` compacto centrado
  en la ciudad. Como `page.tsx` no tiene las coordenadas server-side, la forma más limpia es montar
  el mini-mapa dentro de `CityPageClient.tsx`, que ya obtiene `weather.coord.lat/lon` tras el fetch
  (el mapa es interactivo, no contenido SEO, así que puede vivir en el cliente sin problema).

## TAREA 5 — Navegación, sitemap e i18n

- **Nav (`TopMenu.tsx`):** agregar enlace **"Mapa de lluvia"** (o "Radar") a la barra desktop y al
  panel móvil. Usar un ícono de nube (`CloudIcon` de heroicons).
- **Footer:** agregar enlace a `/lluvia`.
- **i18n:** clave `app.nav.rain_map` (o similar) en los 6 idiomas.
- **Sitemap (`sitemap.ts`):** agregar `/lluvia` (changeFrequency `daily`, priority alta ~0.8).

## TAREA 6 — Atribución y divulgación de terceros

- Mostrar la atribución "Radar © RainViewer" en el mapa (requisito de RainViewer) + la de CartoDB
  que ya existe.
- En `src/app/cookies/page.tsx`, agregar una línea (como la que ya existe para el mapa de
  OpenWeatherMap): al ver el radar, la IP del usuario queda expuesta a RainViewer; enlazar su
  política de privacidad.

## TAREA 7 — Verificar y desplegar

- `npm run build` debe pasar.
- Probar en `npm run dev`: animación fluida, play/pausa, slider, geolocalización, búsqueda, y que el
  texto SEO de `/lluvia` y de la sección de ciudad esté en el **HTML server** (verificar con
  `curl -A "Googlebot" https://www.clima-hoy.com/lluvia | grep -c "Mapa de lluvia"`).
- Commit + push a `main`. **No** commitear los borrados de `.agents/`.
- Actualizar `memory.md`: nueva feature de radar de lluvia (RainViewer), página `/lluvia` + sección
  por ciudad.

---

## Notas

- **Rendimiento:** el mapa es pesado → siempre vía `dynamic({ ssr:false })`, solo se carga en las
  páginas con mapa. No bloquear el render del contenido SEO con el mapa.
- **Móvil primero:** el caso de uso es teléfono en la calle. Controles grandes, mapa a buena altura,
  que no haga falta zoom para entender la animación.
- **Futuro (no ahora):** capa de nubes/viento, alertas push "está por llover en tu zona" (conecta
  con el objetivo de captura de usuarios / WhatsApp).
