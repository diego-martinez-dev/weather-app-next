import { NextRequest, NextResponse } from 'next/server';

// Proxy de teselas (tiles) de OpenWeatherMap. Sirve para que la API key viva
// solo en el servidor: el navegador pide /api/tile y este route trae la imagen
// desde OpenWeatherMap usando OPENWEATHER_API_KEY, sin exponerla al cliente.
const ALLOWED_LAYERS = new Set([
  'temp_new',
  'clouds_new',
  'precipitation_new',
  'wind_new',
  'pressure_new',
]);

export async function GET(request: NextRequest) {
  const sp = request.nextUrl.searchParams;
  const layer = sp.get('layer') || 'temp_new';
  const z = sp.get('z');
  const x = sp.get('x');
  const y = sp.get('y');

  if (!ALLOWED_LAYERS.has(layer) || !z || !x || !y) {
    return NextResponse.json({ error: 'Parámetros de tesela inválidos' }, { status: 400 });
  }

  const url = `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${process.env.OPENWEATHER_API_KEY}`;

  try {
    const upstream = await fetch(url);
    if (!upstream.ok) {
      return new NextResponse(null, { status: upstream.status });
    }
    const buffer = await upstream.arrayBuffer();
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Error al obtener la tesela' }, { status: 500 });
  }
}
