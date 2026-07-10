# Plan — Radar/pronóstico de nieve (enfoque esquí/montaña LatAm)

> Handoff para la terminal. Seguí `CLAUDE.md`: Next 16 App Router, CSS plano (`.tsx`+`.css`),
> contenido de ciudad **en español**, i18n de UI en los 6 idiomas, canonical **www**, alias `@/`.
> Al terminar: `npm run build`, validar 6 locales, verificación Googlebot, bumpear
> `LAST_CONTENT_UPDATE` en `sitemap.ts`, commit + push (NO commitear borrados de `.agents/`),
> actualizar `memory.md`.

## Contexto y decisiones ya tomadas

Feature: **nieve** (mapa + pronóstico), como el radar de lluvia, pero **solo para ciudades donde nieva**.
Enfoque: **esquí/montaña del Cono Sur y los Andes** (público hispano, viaje estacional jun–sep) **+
ciudades de EE.UU. que nievan** (EE.UU. es el **2º país de usuarios activos** según Analytics; gran
parte es diáspora hispana buscando el clima en español). NO nieve genérica del resto del mundo.

> ⚠️ **Dos temporadas opuestas** (¡importante para la exactitud del contenido!): la nieve andina/patagónica
> es en **invierno austral (jun–sep)**; la de EE.UU. es en **invierno boreal (dic–mar)**. Cada texto debe
> usar la temporada correcta según el hemisferio.

- **Sin dependencia de One Call API.** El mapa usa **Windy** (sin API); el pronóstico de nieve usa el
  campo `snow` del endpoint `forecast` que YA usamos (`/api/weather?type=forecast`). Esta feature NO
  espera al UV.
- **"Solo donde nieva" = lista curada estática**, no autodetección (hoy-no-nieva ≠ nunca-nieva).
- **Anti-"low value":** las ciudades nuevas deben tener contenido propio (descripción + clima), no ser
  páginas plantilla vacías.

**Ciudades a agregar (geocodificación ya verificada en OpenWeather, cod=200):**
- **Cono Sur / Andes (nuevas):** Argentina: `bariloche` (Cerro Catedral), `ushuaia` (Cerro Castor),
  `san-martin-de-los-andes` (Chapelco), `villa-la-angostura` (Cerro Bayo), `esquel` (La Hoya),
  `el-bolson`, `el-calafate`. Chile: `farellones` (El Colorado/La Parva/Valle Nevado), `coyhaique`,
  `punta-arenas`. (`Malargüe` excluido: no geocodifica limpio; opcional reintentar `q=Malargue,AR`.)
- **EE.UU. (nuevas):** `denver` (puerta a las Rocosas/esquí), `boston`, `minneapolis`, `buffalo`
  (nieve por efecto lago). (Opcional-esquí: `salt-lake-city`.)
- **EE.UU. (ya en `topCities`, solo marcar como snow city):** `new-york`, `chicago`.

---

## TAREA 1 — Agregar las ciudades de montaña/esquí

1. **`src/app/clima/[slug]/page.tsx`** → `topCities`: agregar las **14 slugs nuevas** (10 del Cono Sur +
   `denver`, `boston`, `minneapolis`, `buffalo`) en bloques comentados (`// Montaña/Esquí (Cono Sur)` y
   `// EE.UU. (nieve)`). Esto las hace páginas de ciudad completas + genera `/manana` y `/por-hora` +
   sitemap automáticamente. `new-york` y `chicago` ya están. **Verificar** que `slugToCity(slug)`
   geocodifique (todas las probadas dan 200).
2. **`src/data/countries.ts`** → agregar cada ciudad (slug + nombre con acentos) al array `cities` de su
   país: Argentina (las 7), Chile (las 3), **Estados Unidos** (`denver`→"Denver", `boston`→"Boston",
   `minneapolis`→"Minneapolis", `buffalo`→"Buffalo"). Nombres LatAm: "Bariloche", "Ushuaia",
   "San Martín de los Andes", "Villa La Angostura", "Esquel", "El Bolsón", "El Calafate", "Farellones",
   "Coyhaique", "Punta Arenas".
3. **`src/data/cityDescriptions.ts`** → `description` + `touristTip` para las 14 nuevas (contenido
   original). **Verificar** que `new-york` y `chicago` ya tengan; si no, agregarlas.
4. **`src/data/cityClimate.ts`** → entrada para las 14 nuevas: `avgTempRange`, `bestTimeToVisit`,
   `rainySeasons`/nieve y **4 FAQ**. **Usar la temporada correcta por hemisferio:** Cono Sur = esquí
   jun–sep; EE.UU. = nieve dic–mar. FAQs tipo: ¿cuándo nieva?, ¿temporada de esquí/centro cercano?,
   ¿qué ropa llevar? **Exactitud > volumen:** rangos reales, sin cifras inventadas. Verificar que
   `new-york`/`chicago` ya tengan entrada.

## TAREA 2 — Lista curada de ciudades con nieve

Crear `src/data/snowCities.ts`:
```ts
export const snowCities = new Set<string>([
  // Cono Sur / Andes
  'bariloche','ushuaia','san-martin-de-los-andes','villa-la-angostura','esquel',
  'el-bolson','el-calafate','farellones','coyhaique','punta-arenas',
  // EE.UU.
  'new-york','chicago','denver','boston','minneapolis','buffalo',
]);
export function isSnowCity(slug: string): boolean { return snowCities.has(slug); }
// Para grillas/hub: agrupadas por región, con nombre visible.
export const snowDestinations = [
  { region: 'Argentina y Chile', cities: [ { slug: 'bariloche', name: 'Bariloche' }, /* …las 10 */ ] },
  { region: 'Estados Unidos', cities: [ { slug: 'new-york', name: 'Nueva York' }, /* …las 6 */ ] },
];
```
> Las ciudades tropicales existentes (bogota, caracas, miami, etc.) NO van acá.

## TAREA 3 — `WindyMap` con overlay configurable

`src/components/WindyMap.tsx` hoy fuerza `overlay=rain`. Agregar prop `overlay?: string` (default
`'rain'`) y usarla en los `URLSearchParams`. Para nieve pasar `overlay="snowAccu"` (acumulación de
nieve). **Verificar** que Windy renderice `snowAccu`; si no, probar `snow`/`snowcover` y dejar el que
funcione. Para nieve, un zoom regional (~7–8) muestra mejor la montaña que el 11 de lluvia.

## TAREA 4 — Sección de nieve en la página de ciudad (solo snow cities)

En `src/app/clima/[slug]/page.tsx` (Server), si `isSnowCity(slug)`, renderizar una sección con
`id="nieve"`:
- `<h2>❄️ Nieve en {city}</h2>` + **párrafo intro server-rendered** (SEO: temporada de esquí, cuándo
  nieva, centro de esquí cercano). Texto crawleable.
- `<WindyMap lat lon overlay="snowAccu" zoom={8} />` (mapa de nieve).
- **Pronóstico de nieve (client):** componente nuevo `src/components/SnowForecast.{tsx,css}` que use el
  `forecast` (campo `snow['3h']` + condición "Snow") para responder "¿va a nevar? ¿cuánto?" en los
  próximos días. Se integra en `CityPageClient.tsx` condicionado a un prop `showSnow` que el server pasa
  = `isSnowCity(slug)`. (Sin One Call; usa el fetch de forecast que ya hace el cliente.)
- JSON-LD: opcionalmente sumar la sección al FAQ existente si agregás preguntas de nieve.

## TAREA 5 — Ítem de menú "Nieve" solo en páginas de ciudad con nieve

En `src/components/TopMenu.tsx` (client): con `usePathname()` detectar `/clima/{slug}` y, si
`isSnowCity(slug)`, mostrar un link **"❄️ {t('app.nav.snow')}"** que apunte a `#nieve` (la sección de
esa página) o a `/nieve`. En cualquier otra página, el ítem NO aparece. Así se cumple lo pedido: el menú
de nieve solo sale donde nieva. i18n `app.nav.snow` en los 6 idiomas (es "Nieve", en "Snow", pt "Neve",
fr "Neige", de "Schnee", it "Neve"). Mismo patrón de link simple que "Radar de lluvia".

## TAREA 6 — Hub `/nieve` (Server Component, evergreen)

`src/app/nieve/page.tsx`, calcado de `/lluvia`:
- H1 (ej. "Nieve y esquí en América: Andes, Patagonia y Estados Unidos"), intro original que cubra
  **ambas temporadas**: esquí andino/patagónico jun–sep y nieve en EE.UU. dic–mar; principales destinos.
- **Grilla de destinos agrupada por región** (`snowDestinations` → subtítulo por región + links a
  `/clima/{slug}`).
- `<WindyMap>` de nieve. Como hay dos zonas lejanas, un zoom bajo no muestra bien ambas; opción simple:
  centrar en los Andes/Bariloche (lat −41.13, lon −71.31, zoom ~5–6) y que el usuario paneé (Windy es
  interactivo). No hace falta un segundo mapa.
- FAQ (4, cubriendo las dos temporadas) + JSON-LD FAQPage + BreadcrumbList, canonical www.
- Enlazar desde el **footer** (clave i18n) y desde las secciones de nieve de ciudad. Agregar `/nieve` al
  **sitemap** (priority 0.7).

## TAREA 7 — Verificar, desplegar y memoria

1. `npm run build` OK (se suman ~10 ciudades × base+/manana+/por-hora + `/nieve`).
2. Locales: `for l in es en pt fr de it; do python3 -c "import json;json.load(open('src/locales/$l.json'))" && echo "$l OK"; done`
3. Verificación HTML crudo (server-rendered):
   ```bash
   f=$(find .next -path "*clima/bariloche.html"|head -1); grep -o "Nieve en Bariloche\|temporada de esquí\|Cerro Catedral" "$f" | head
   f=$(find .next -path "*clima/denver.html"|head -1); grep -o "Nieve en Denver\|nieve" "$f" | head
   f=$(find .next -path "*nieve.html"|head -1); grep -o "esquí\|Patagonia\|Estados Unidos\|Denver" "$f" | head
   ```
   Y confirmar que una ciudad tropical (p. ej. `caracas.html`) y `miami.html` **NO** tengan la sección de
   nieve.
4. Bumpear `LAST_CONTENT_UPDATE`. Commit + push. **No** commitear borrados de `.agents/`.
5. **`memory.md`:** agregar la feature de nieve (enfoque esquí/montaña LatAm, sin dependencia de One
   Call), las 10 ciudades nuevas, `snowCities.ts`, `WindyMap` con prop `overlay`, sección de nieve en
   ciudad + menú condicional con `usePathname`, hub `/nieve`. Anotar que Malargüe quedó fuera (geocode).

---

## Criterio general
- **Reutilizar:** `WindyMap` (con overlay), el fetch de `forecast` existente, el patrón de `/lluvia` para
  el hub, el patrón de sección server + widget client de las páginas de ciudad.
- **Contenido original y preciso** para las 10 ciudades nuevas (evita "low value"). Rangos reales.
- **Sin One Call:** esta feature es independiente del UV; puede salir ya.
- **No tocar** el host canónico (siempre www).
```
