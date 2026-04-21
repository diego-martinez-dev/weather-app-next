import { NextRequest, NextResponse } from 'next/server';

const API_KEY = '91ca0e29e5a576e51887bc6e349bbd9d';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const type = searchParams.get('type') || 'weather';
  const city = searchParams.get('city');
  const lat = searchParams.get('lat');
  const lon = searchParams.get('lon');
  const lang = searchParams.get('lang') || 'es';

  let url = '';

  // Determinar qué tipo de datos solicitar
  if (type === 'geocode') {
    if (!lat || !lon) {
      return NextResponse.json({ error: 'Se requieren lat y lon para geocoding' }, { status: 400 });
    }
    url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}`;
  }
  else if (type === 'air') {
    if (!lat || !lon) {
      return NextResponse.json({ error: 'Se requieren lat y lon para calidad del aire' }, { status: 400 });
    }
    url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  } 
  else if (type === 'forecast') {
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`;
    } else if (lat && lon) {
      url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=${lang}`;
    } else {
      return NextResponse.json({ error: 'Se requieren city o lat/lon para pronóstico' }, { status: 400 });
    }
  }
  else {
    // Clima actual (default)
    if (city) {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=${lang}`;
    } else if (lat && lon) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=${lang}`;
    } else {
      return NextResponse.json({ error: 'Se requieren city o lat/lon' }, { status: 400 });
    }
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener datos' }, { status: 500 });
  }
}
