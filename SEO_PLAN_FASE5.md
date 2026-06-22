# Plan — Fase 5: renderizar el contenido SEO de ciudad en el servidor (SSR)

> Handoff para ejecutar en la terminal. Seguí `CLAUDE.md`. Objetivo: que el contenido SEO único de
> cada página de ciudad esté en el **HTML renderizado por el servidor**, no solo tras ejecutar JS en
> el cliente. Esto ataca directamente las **72 páginas "Discovered - currently not indexed"** de
> Search Console: hoy Googlebot ve el HTML crudo vacío (solo un esqueleto) y por eso no las indexa.

## Diagnóstico (causa raíz confirmada)

- `src/app/clima/[slug]/page.tsx` es un **Server Component** que tiene todos los datos estáticos
  (`getCityDescription`, `getCityTouristTip`, `getCityClimate`, guías relacionadas) y genera el
  JSON-LD correctamente en el servidor. ✅
- Pero el **contenido visible** se renderiza dentro de `src/app/clima/[slug]/CityPageClient.tsx`
  (Client Component), y ese componente hace:
  ```tsx
  if (loading) return <SkeletonLoader />;   // ≈ línea 122
  ```
  `loading` arranca en `true` y solo cambia tras el `fetch` del clima en el cliente. Por lo tanto el
  **HTML server-side contiene únicamente el esqueleto**: el H1, la descripción, los tips, el bloque
  de clima (temperatura típica / mejor época / temporada de lluvias), la FAQ visible y las guías
  relacionadas **no aparecen en el HTML crudo**. (Verificado con `curl` Googlebot sobre
  `/clima/montevideo`: "Mejor época para visitar" NO está en el HTML.)

## Objetivo

Separar **contenido estático SEO** (server) del **widget interactivo del clima** (client):
- El **Server Component** (`page.tsx`) renderiza directamente en el HTML: H1, descripción/tips,
  bloque de clima, FAQ visible y guías relacionadas (todo sale de datos ya disponibles en server).
- El **Client Component** queda solo con la parte interactiva (tarjeta de clima en vivo, pronóstico,
  mapa, favoritos), y su `if (loading)` solo afecta a ESE bloque, no al contenido estático.

---

## TAREA 1 — Mover el contenido estático a `page.tsx` (server)

En `src/app/clima/[slug]/page.tsx`, dentro del `return`, renderizar como HTML de servidor
(además del JSON-LD que ya existe):

1. **`<h1>`** único y canónico: `Clima en {city} hoy` (el `city` ya se calcula con `slugToCity`).
   Este pasa a ser el ÚNICO H1 de la página (ver Tarea 2: quitar el H1 del client).
2. **Bloque de descripción + tip turístico** (`getCityDescription(slug)` / `getCityTouristTip`).
3. **Bloque de clima** (`climate.avgTempRange`, `climate.bestTimeToVisit`, `climate.rainySeasons`).
4. **Sección FAQ visible** (`climate.faq`): cada `question` en `<h3>`/`<dt>` y `answer` en `<p>`/`<dd>`.
   El JSON-LD `FAQPage` ya existe; esto agrega el texto visible que hoy falta en el HTML.
5. **Guías relacionadas** (`relatedGuides`): lista de `<Link href="/guias/{slug}">` con el título.
   (Sirve además como enlazado interno para el rastreo.)

Detalles:
- Podés reutilizar el mismo markup/estilos que hoy tiene `CityContent` (mover ese JSX tal cual).
  Si usás estilos, preferí clases en un `.css` del componente sobre estilos inline largos (según
  convención), pero **reutilizar los inline existentes es aceptable** para minimizar riesgo.
- El orden recomendado en la página: `TopMenu` → widget de clima en vivo (client) → contenido
  estático SEO (server). Lo que importa para SEO es que el contenido estático esté en el HTML; su
  posición visual es secundaria. Mantené una UX coherente.

## TAREA 2 — Adelgazar `CityPageClient.tsx`

- **Eliminar** del `CityContent` el contenido que se movió a server: bloque de descripción/tips,
  bloque de clima, FAQ visible y guías relacionadas.
- **Quitar el `<h1>` del client** (línea ≈129) para no duplicar el H1 (el server ya lo renderiza).
  Si el widget necesita mostrar el nombre/ícono del clima, usar un encabezado menor (`<h2>`/`<div>`),
  no un segundo `<h1>`.
- El `if (loading) return <SkeletonLoader />` ahora solo debe afectar al **widget interactivo**
  (tarjeta de clima, pronóstico, mapa), no al contenido estático.
- Simplificar las **props** que `page.tsx` pasa a `CityPageClient`: si `description`, `touristTip`,
  `climate` y `relatedGuides` ya se renderizan en server, dejá de pasarlos al client (o pasá solo lo
  que el widget realmente use). Ajustar tipos/interfaces en consecuencia.
- Mantener intacta toda la lógica de fetch del clima, idioma, favoritos y mapa.

## TAREA 3 — Verificar que el contenido esté en el HTML crudo

- `npm run build` debe pasar.
- Levantar (`npm run dev` o sobre el deploy) y comprobar con un fetch tipo Googlebot que el HTML
  YA contiene el contenido estático. Ejemplo:
  ```bash
  curl -s -A "Googlebot" https://www.clima-hoy.com/clima/montevideo | grep -c "Mejor época para visitar"
  ```
  Debe devolver ≥ 1 (hoy devuelve 0). Repetir con una pregunta de la FAQ y con la descripción.

## TAREA 4 (opcional, secundaria) — Home

- `src/app/page.tsx` tiene el mismo patrón (tips renderizados en cliente). Es 1 sola página y es
  inherentemente dinámica (geolocalización), así que es menos prioritaria que las 70+ páginas de
  ciudad. Dejarla para una iteración posterior salvo que sea trivial.

## TAREA 5 — Desplegar

- Commit + push a `main`. **No** commitear los borrados pendientes en `.agents/`.
- Actualizar `memory.md`: las páginas de ciudad ahora renderizan el contenido SEO en server (SSR);
  el cliente solo maneja el widget interactivo.

---

## Después del deploy (manual de Diego, NO es código)

Una vez en producción y verificado el HTML:
1. **Search Console → URL Inspection** → pedir indexación de las ciudades con tracción:
   `montevideo`, `bogota`, `medellin`, `santo-domingo` (no todas de golpe; hay cupo diario).
2. Reenviar el sitemap.
3. Monitorear el informe **Pages** las próximas 1-4 semanas: debería subir el número de "Indexed"
   y bajar "Discovered - currently not indexed".
