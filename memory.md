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
- **Auth:** Google OAuth con NextAuth v5 beta. Sin formularios de contraseña.
- **Sesiones:** JWT (no database sessions), aunque hay PrismaAdapter configurado.
- **BD:** Supabase + Prisma — pendiente de configurar las URLs de conexión (`DATABASE_URL`, `DIRECT_URL`).
- **API del clima:** OpenWeatherMap vía proxy interno (`/api/weather`). La API key está hardcodeada en el route, no en env vars.
- **Idioma en API:** Siempre pasar `&lang=${language}` para que las descripciones del clima sean localizadas.
- **Fondo según clima:** Usar `weather.weather[0].main` (siempre en inglés) para detectar la condición, no `.description` (localizado).

---

## Objetivos a largo plazo

- Construir una base de datos de usuarios para **campañas de email marketing**.
- Enviar **alertas personalizadas por WhatsApp** a usuarios registrados.
- El login con Google es el primer paso hacia ese sistema.
- **Monetizar con Google AdSense.**

---

## Pendientes

- Completar configuración de Supabase: obtener `DATABASE_URL` y `DIRECT_URL` y agregarlas a `.env.local` y Vercel.
- Correr `npx prisma migrate dev` una vez que estén las URLs de BD configuradas.
- Agregar `DATABASE_URL` y `DIRECT_URL` como variables de entorno en Vercel.
