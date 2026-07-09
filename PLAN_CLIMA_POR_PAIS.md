# Plan — Menú "Clima por país" (continentes → países) + guía de país extensa

> Handoff para ejecutar en la terminal. Seguí `CLAUDE.md`: CSS plano por componente (NO Tailwind,
> NO CSS-in-JS salvo los `style={{}}` inline que YA usa el proyecto), App Router Next 16, alias `@/`.
> Al terminar: `npm run build`, validar los 6 locales, commit + push a `main` (NO commitear borrados
> de `.agents/`), y actualizar `memory.md`.

## ⚠️ Contexto crítico — esto NO se construye de cero

**Las páginas-país YA EXISTEN** (commit `b7ce933`). No las recrees: **extiéndelas**.

- `src/data/countries.ts` — 19 países (hispanos + EEUU + Canadá) con `interface Country`
  (`slug`, `name`, `cities[]`, `intro[]`, `bestSeason`, `rainySeason`, `faq[]`) + helpers
  `getCountryBySlug`, `getCountryForCity`, `countrySlugs`. Contenido **original, en español**.
- `src/app/clima-pais/[pais]/page.tsx` — Server Component con SEO, canonical www, JSON-LD
  (WebPage + BreadcrumbList + FAQPage), intro, recuadro mejor-época/lluvias, grilla de ciudades
  (`cities-grid` / `city-card`), FAQ `<details>`, y grilla "clima en otros países". 19 rutas SSG.
- `src/app/clima/page.tsx` — ya tiene una sección "Clima por país" que lista los 19 países.
- `src/components/TopMenu.tsx` — nav con submenú de **Guías** (patrón a copiar), Glosario, FAQ,
  Radar de lluvia. Móvil con secciones expandibles.

Este plan hace **2 cosas**: (1) agrega el ítem de menú "Clima por país" con desplegable
continentes → países; (2) **amplía** el contenido de cada página de país para que sea una guía extensa.

---

## TAREA 1 — Agrupar países por continente (datos)

En `src/data/countries.ts`:

1. Agregar el tipo y el campo `continent` a la interfaz:
   ```ts
   export type Continent = 'Sudamérica' | 'Centroamérica y Caribe' | 'Norteamérica' | 'Europa';
   ```
   Añadir `continent: Continent;` a `interface Country` y completarlo en los 19 países:
   - **Sudamérica:** colombia, venezuela, ecuador, peru, bolivia, paraguay, uruguay, argentina, chile, brasil
   - **Centroamérica y Caribe:** costa-rica, panama, nicaragua, cuba, republica-dominicana
   - **Norteamérica:** mexico, estados-unidos, canada
   - **Europa:** espana

2. Agregar el orden de continentes y un helper de agrupación (mantener el orden de `countries`
   dentro de cada grupo):
   ```ts
   export const continentOrder: Continent[] = ['Sudamérica', 'Centroamérica y Caribe', 'Norteamérica', 'Europa'];

   export function getCountriesByContinent(): { continent: Continent; countries: Country[] }[] {
     return continentOrder
       .map(continent => ({ continent, countries: countries.filter(c => c.continent === continent) }))
       .filter(group => group.countries.length > 0);
   }
   ```

---

## TAREA 2 — Ítem de menú "Clima por país" en `TopMenu.tsx`

Copiá el patrón del submenú de **Guías** (ya presente en el archivo), agregando un nivel de
**continente** como subtítulo dentro del desplegable.

### Estado y refs (junto a los de Guías)
```ts
const [showCountriesMenu, setShowCountriesMenu] = useState(false);
const [showMobileCountries, setShowMobileCountries] = useState(false);
const countriesMenuRef = useRef<HTMLDivElement>(null);
```
- Importar: `import { getCountriesByContinent } from '@/data/countries';` y computarlo a nivel de
  módulo (fuera del componente, como una constante) o dentro: `const countryGroups = getCountriesByContinent();`.
- Agregar `countriesMenuRef` al `handleClickOutside` existente (el que cierra unit/language/guides)
  para que también cierre `showCountriesMenu`.

### Desktop (dentro de `<nav className="top-nav-bar desktop-only">`, después del submenú de Guías)
```tsx
<div className="nav-item" ref={countriesMenuRef}>
  <button
    className={`nav-item-trigger ${showCountriesMenu ? 'open' : ''}`}
    onClick={() => setShowCountriesMenu(!showCountriesMenu)}
    suppressHydrationWarning
  >
    {t('app.nav.weather_by_country')}
    <ChevronDownIcon className="nav-chevron" />
  </button>
  {showCountriesMenu && (
    <div className="nav-submenu nav-submenu--countries">
      {countryGroups.map(group => (
        <div key={group.continent} className="nav-submenu-group">
          <span className="nav-submenu-group-label">{group.continent}</span>
          {group.countries.map(c => (
            <Link key={c.slug} href={`/clima-pais/${c.slug}`} className="nav-submenu-item" onClick={() => setShowCountriesMenu(false)}>
              {c.name}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )}
</div>
```

### Móvil (dentro de `<nav className="mobile-nav">`, después de la sección expandible de Guías)
```tsx
<button
  className="mobile-nav-expand"
  onClick={() => setShowMobileCountries(!showMobileCountries)}
>
  {t('app.nav.weather_by_country')}
  <ChevronDownIcon style={{ width: '1em', height: '1em', flexShrink: 0, transition: 'transform 0.2s', transform: showMobileCountries ? 'rotate(180deg)' : 'none' }} />
</button>
{showMobileCountries && (
  <div className="mobile-nav-subitems">
    {countryGroups.map(group => (
      <div key={group.continent}>
        <span className="mobile-nav-group-label">{group.continent}</span>
        {group.countries.map(c => (
          <Link key={c.slug} href={`/clima-pais/${c.slug}`} className="mobile-nav-subitem" onClick={() => setMobileMenuOpen(false)}>
            {c.name}
          </Link>
        ))}
      </div>
    ))}
  </div>
)}
```

### CSS en `src/components/TopMenu.css`
Agregá (reusando las variables/estilo existentes de `.nav-submenu` y `.mobile-nav-subitem`):
```css
.nav-submenu--countries { max-height: 70vh; overflow-y: auto; }
.nav-submenu-group { padding: 4px 0; }
.nav-submenu-group + .nav-submenu-group { border-top: 1px solid var(--color-border); }
.nav-submenu-group-label,
.mobile-nav-group-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #888;
  padding: 6px 12px 2px;
}
```
Ajustá los selectores reales según lo que ya exista en `TopMenu.css` (no rompas el estilo de Guías).

### i18n — `app.nav.weather_by_country` en los 6 locales
Agregá la clave bajo `app.nav` (donde ya vive `rain_map`):
- es: `"Clima por país"`
- en: `"Weather by country"`
- pt: `"Clima por país"`
- fr: `"Météo par pays"`
- de: `"Wetter nach Land"`
- it: `"Meteo per paese"`

> Los **nombres de países** quedan en español (el contenido de país es solo español, igual que
> `cityDescriptions`/`cityClimate`). Solo se traduce la **etiqueta del menú**.

---

## TAREA 3 — Guía de país EXTENSA (ampliar contenido + render)

El usuario quiere "una guía extensa del clima del país". Hoy es corta (2 párrafos + 2 recuadros + FAQ).
Ampliá la interfaz y el contenido, manteniéndolo **original, preciso y útil** (es lo que AdSense valora;
nada de relleno).

### 3.1 Ampliar `interface Country` en `countries.ts`
```ts
export interface ClimateRegion {
  name: string;        // p. ej. "Región Andina", "Costa Caribe"
  description: string; // 2-4 frases sobre el clima de esa región
}
```
Agregar a `Country`:
- `intro: string[]` → **ampliar a 3 párrafos** (hoy son 2) en cada país.
- `climateRegions: ClimateRegion[]` → **NUEVO**. Para países grandes/diversos, 3-5 regiones
  (Colombia: Andina, Caribe, Pacífica, Orinoquía/Llanos, Amazonía; España: Mediterránea, Atlántica/Norte,
  Interior/Continental, Sureste árido; etc.). Para países pequeños o de 1 ciudad, 1-2 regiones o
  un array vacío `[]` si no aplica (el render debe ocultar la sección si está vacío).
- `whenToGo: string` → **NUEVO**. Párrafo detallado de cuándo viajar y por qué (más extenso que el
  resumen `bestSeason`).
- `whatToPack: string` → **NUEVO**. Párrafo sobre qué ropa/elementos llevar según el clima del país.
- Mantener `bestSeason` y `rainySeason` (resúmenes cortos para el recuadro y para los snippets).
- `faq` → **ampliar a 3-4 preguntas** por país (hoy varios tienen solo 1-2). Preguntas reales tipo
  "¿cuál es la mejor época?", "¿cuándo llueve?", "¿hace frío en {capital}?", "¿necesito paraguas en…?".

> **Calidad ante todo:** contenido factual y verificable. No inventar datos numéricos dudosos; si no
> estás seguro de una cifra exacta, describí el patrón en términos cualitativos. Mantené coherencia con
> lo que ya dicen `cityClimate.ts`/`cityDescriptions.ts` para las ciudades de ese país.

### 3.2 Render en `src/app/clima-pais/[pais]/page.tsx`
Insertá las nuevas secciones (mismo estilo visual de recuadros que el resto: `var(--color-surface)`,
`var(--radius-md)`, `var(--color-border)`, `boxShadow: 'var(--color-shadow-sm)'`). Orden sugerido:

1. `<h1>` (ya existe) + `intro` (ya se mapea; ahora 3 párrafos).
2. **NUEVO — "Clima por regiones de {país}"**: solo si `climateRegions.length > 0`. Un `<h2>` y, por
   región, un sub-bloque con `<h3>`(o `<strong>`) `region.name` + `<p>` `region.description`.
3. Recuadro mejor-época / temporada de lluvias (ya existe).
4. **NUEVO — "¿Cuándo viajar a {país}?"**: `<h2>` + `<p>` con `whenToGo`.
5. **NUEVO — "Qué llevar"**: `<h2>` + `<p>` con `whatToPack`.
6. Grilla de ciudades (ya existe).
7. FAQ `<details>` (ya existe; ahora 3-4) — el JSON-LD FAQPage ya mapea `country.faq`, así que se
   actualiza solo.
8. Grilla "clima en otros países" (ya existe).

- Actualizar el JSON-LD si hace falta (el FAQPage ya toma `country.faq`; no requiere cambios extra).
- Mantener canonical/OG/título en www y en español (no tocar el host).

### 3.3 Título/descripcion (opcional, mejora SEO)
En `generateMetadata`, podés enriquecer la `description` para reflejar que es una guía extensa
("Guía completa del clima de {país}: regiones, estaciones, cuándo viajar, qué llevar y el tiempo de
sus ciudades."). Mantener el `title` con la keyword "Clima en {país}".

---

## TAREA 4 — Verificar y desplegar

1. `npm run build` debe pasar (deberían seguir siendo 19 rutas SSG de `/clima-pais/[pais]` + el resto).
2. Validar los 6 locales:
   `for l in es en pt fr de it; do python3 -c "import json;json.load(open('src/locales/$l.json'))" && echo "$l OK"; done`
3. Verificar el HTML estático servido a Googlebot (contenido server-rendered, no detrás de JS):
   ```bash
   f=$(find .next -path "*clima-pais/colombia.html" | head -1)
   grep -o "Clima por regiones\|¿Cuándo viajar\|Región Andina" "$f"
   ```
   Debe encontrar las nuevas secciones. Repetir con `espana` y `argentina`.
4. Probar el menú: en desktop, "Clima por país" abre el desplegable con los 4 continentes y sus países;
   cada país navega a `/clima-pais/{slug}`. En móvil, la sección expandible funciona igual. Cierre por
   click-outside OK (igual que Guías).
5. Commit + push a `main`. **No** commitear borrados de `.agents/`.
6. **Actualizar `memory.md`**: en la sección "Páginas-país" agregar que ahora hay (a) menú "Clima por
   país" con desplegable continentes → países en `TopMenu` (desktop + móvil) + clave i18n
   `app.nav.weather_by_country`, y (b) guía de país **extensa** (campos nuevos `continent`,
   `climateRegions[]`, `whenToGo`, `whatToPack`; intro a 3 párrafos; FAQ a 3-4). Bumpear
   `LAST_CONTENT_UPDATE` en `src/app/sitemap.ts` a la fecha del cambio (contenido nuevo).

---

## Notas de criterio

- **Reutilizar, no reinventar:** patrón de submenú = el de Guías; estilos = clases/variables ya
  existentes; datos = `countries.ts` ampliado, no un archivo nuevo.
- **Contenido original = el objetivo AdSense/SEO.** Las guías extensas por país son la mejor defensa
  contra "low value content": texto propio, útil y único, con buen enlazado interno hacia las ciudades.
- **Español solamente** para el contenido de país (mercado objetivo). Solo la etiqueta del menú va en
  los 6 idiomas.
- **No tocar** el host canónico (siempre www) ni reintroducir URLs sin www.
```
