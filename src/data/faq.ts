export interface FaqItem {
  question: { es: string; en: string };
  answer: { es: string; en: string };
}

export const faqItems: FaqItem[] = [
  {
    question: {
      es: '¿Por qué la sensación térmica difiere de la temperatura real?',
      en: 'Why does the apparent temperature differ from the actual temperature?',
    },
    answer: {
      es: 'La temperatura del aire se mide en la sombra a dos metros del suelo. Tu cuerpo, en cambio, está expuesto al sol, al viento y a la humedad, que aceleran o ralentizan la pérdida de calor. Con viento fuerte, el cuerpo pierde calor más rápido (en invierno, la sensación baja varios grados). Con humedad alta, el sudor no se evapora bien y el calor se acumula (en verano, la sensación sube significativamente). La sensación térmica es el número más útil para tomar decisiones sobre ropa y actividades al aire libre.',
      en: 'Air temperature is measured in the shade at two meters above the ground. Your body, however, is exposed to sun, wind, and humidity, which speed up or slow down heat loss. Strong wind causes the body to lose heat faster (in winter, the apparent temperature drops several degrees). High humidity prevents sweat evaporation and heat accumulates (in summer, the apparent temperature rises significantly). The apparent temperature is the most useful number for deciding what to wear and whether outdoor activities are safe.',
    },
  },
  {
    question: {
      es: '¿Qué tan confiable es un pronóstico a 7 días?',
      en: 'How reliable is a 7-day forecast?',
    },
    answer: {
      es: 'Los pronósticos son muy confiables a 24–48 horas, razonablemente buenos a 72 horas y orientativos a 5–7 días. Más allá de 7 días, la precisión cae drásticamente porque la atmósfera es un sistema caótico: pequeñas diferencias en las condiciones actuales producen grandes diferencias en el resultado a largo plazo. Usa el pronóstico de una semana para tener una idea de la tendencia general (¿caluroso? ¿lluvioso?) pero no para planificar eventos con horario exacto.',
      en: 'Forecasts are very reliable at 24–48 hours, reasonably good at 72 hours, and indicative at 5–7 days. Beyond 7 days, accuracy drops dramatically because the atmosphere is a chaotic system: small differences in current conditions produce large differences in the outcome over time. Use the week-long forecast to get a general sense of the trend (hot? rainy?) but not to plan events with exact timing.',
    },
  },
  {
    question: {
      es: '¿De dónde vienen los datos del clima en Clima Hoy?',
      en: 'Where does the weather data in Clima Hoy come from?',
    },
    answer: {
      es: 'Todos los datos meteorológicos provienen de OpenWeatherMap, uno de los servicios de información climática más reconocidos del mundo. OpenWeatherMap integra datos de miles de estaciones meteorológicas oficiales, satélites, radares y modelos de predicción numérica en tiempo real. Clima Hoy accede a esa información a través de su API y la presenta de forma clara y organizada, sin modificar los datos.',
      en: 'All weather data comes from OpenWeatherMap, one of the world\'s most recognized weather information services. OpenWeatherMap integrates data from thousands of official weather stations, satellites, radars, and numerical prediction models in real time. Clima Hoy accesses this information through their API and presents it clearly and organized, without modifying the data.',
    },
  },
  {
    question: {
      es: '¿Qué significa el porcentaje de probabilidad de lluvia?',
      en: 'What does the rain probability percentage mean?',
    },
    answer: {
      es: 'El porcentaje de probabilidad de lluvia (PoP) indica la posibilidad de que caiga al menos una cantidad apreciable de agua en tu zona durante el período indicado. Un 70% no significa que lloverá el 70% del tiempo ni sobre el 70% del área: significa que en 7 de cada 10 situaciones atmosféricas similares ocurrió lluvia. En la práctica: por debajo del 30% podés salir sin paraguas; entre 40–60%, tenelo a mano; por encima del 70%, planificá como si fuera a llover.',
      en: 'The probability of precipitation (PoP) indicates the chance that an appreciable amount of rain will fall in your area during the stated period. 70% doesn\'t mean it will rain 70% of the time or over 70% of the area: it means that in 7 out of 10 similar atmospheric situations, rain occurred. In practice: below 30% you can go out without an umbrella; between 40–60%, have one handy; above 70%, plan as if it will rain.',
    },
  },
  {
    question: {
      es: '¿Por qué a veces el pronóstico falla?',
      en: 'Why do forecasts sometimes fail?',
    },
    answer: {
      es: 'Los pronósticos se basan en modelos matemáticos que simulan la atmósfera, pero ningún modelo puede capturar perfectamente el estado inicial de la atmósfera porque los datos siempre tienen alguna imprecisión. La atmósfera es un sistema caótico (efecto mariposa): pequeños errores iniciales se amplifican con el tiempo. Los fenómenos locales —como tormentas convectivas de tarde— son especialmente difíciles de predecir en cuanto a ubicación y horario exacto.',
      en: 'Forecasts are based on mathematical models that simulate the atmosphere, but no model can perfectly capture the atmosphere\'s initial state because data always carries some imprecision. The atmosphere is a chaotic system (butterfly effect): small initial errors amplify over time. Local phenomena — such as afternoon convective storms — are especially hard to predict in terms of exact location and timing.',
    },
  },
  {
    question: {
      es: '¿Con qué frecuencia se actualizan los datos del clima?',
      en: 'How often is the weather data updated?',
    },
    answer: {
      es: 'OpenWeatherMap actualiza los datos de la mayoría de las ciudades cada 10 a 30 minutos, dependiendo de la densidad de estaciones meteorológicas en la zona. Las ciudades grandes y capitales tienen actualizaciones más frecuentes. El pronóstico extendido (5 días) se actualiza varias veces al día conforme los modelos numéricos corren nuevas simulaciones.',
      en: 'OpenWeatherMap updates data for most cities every 10 to 30 minutes, depending on the density of weather stations in the area. Large cities and capitals have more frequent updates. The extended forecast (5 days) is updated several times a day as numerical models run new simulations.',
    },
  },
  {
    question: {
      es: '¿Es gratis usar Clima Hoy?',
      en: 'Is Clima Hoy free to use?',
    },
    answer: {
      es: 'Sí, Clima Hoy es completamente gratuito. No necesitás crear una cuenta para consultar el clima actual o el pronóstico. Si querés guardar ciudades favoritas para acceder rápidamente, podés iniciar sesión con tu cuenta de Google. No almacenamos información de pago ni cobramos por ninguna funcionalidad.',
      en: 'Yes, Clima Hoy is completely free. You don\'t need to create an account to check the current weather or forecast. If you want to save favorite cities for quick access, you can sign in with your Google account. We do not store payment information or charge for any feature.',
    },
  },
  {
    question: {
      es: '¿Qué es el índice de calidad del aire (AQI) y cómo se interpreta?',
      en: 'What is the air quality index (AQI) and how is it interpreted?',
    },
    answer: {
      es: 'El AQI (Air Quality Index) mide la concentración de contaminantes en el aire como material particulado, ozono, dióxido de nitrógeno y monóxido de carbono. La escala va de 1 (excelente) a 5 (muy mala). Nivel 1–2: el aire es seguro para todos. Nivel 3: las personas sensibles (asmáticos, ancianos, niños pequeños) podrían notar molestias. Nivel 4–5: el ejercicio intenso al aire libre es desaconsejable para cualquier persona.',
      en: 'The AQI (Air Quality Index) measures the concentration of air pollutants such as particulate matter, ozone, nitrogen dioxide, and carbon monoxide. The scale goes from 1 (excellent) to 5 (very poor). Level 1–2: air is safe for everyone. Level 3: sensitive people (asthmatics, elderly, young children) may notice discomfort. Level 4–5: intense outdoor exercise is inadvisable for anyone.',
    },
  },
  {
    question: {
      es: '¿Cómo cambio entre grados Celsius y Fahrenheit?',
      en: 'How do I switch between Celsius and Fahrenheit?',
    },
    answer: {
      es: 'En el menú superior de la aplicación encontrarás el selector de temperatura (°C / °F). En escritorio aparece como un menú desplegable junto al idioma; en móvil, dentro del menú lateral. El cambio se aplica inmediatamente a todos los valores de temperatura mostrados en la app y se guarda en tu dispositivo para futuras visitas.',
      en: 'In the app\'s top menu you\'ll find the temperature selector (°C / °F). On desktop it appears as a dropdown next to the language selector; on mobile, inside the side menu. The change applies immediately to all temperature values shown in the app and is saved on your device for future visits.',
    },
  },
  {
    question: {
      es: '¿Puedo guardar ciudades favoritas?',
      en: 'Can I save favorite cities?',
    },
    answer: {
      es: 'Sí. Cuando buscás una ciudad y aparecen sus datos del clima, podés agregarla a favoritos tocando el ícono de estrella. Las ciudades favoritas quedan guardadas en tu navegador y aparecen en el panel de favoritos para acceder rápidamente. Si iniciás sesión con Google, tus favoritos se sincronizan entre dispositivos.',
      en: 'Yes. When you search for a city and its weather data appears, you can add it to favorites by tapping the star icon. Favorite cities are saved in your browser and appear in the favorites panel for quick access. If you sign in with Google, your favorites are synced across devices.',
    },
  },
  {
    question: {
      es: '¿Qué diferencia hay entre "clima" y "tiempo meteorológico"?',
      en: 'What is the difference between "climate" and "weather"?',
    },
    answer: {
      es: 'El tiempo meteorológico describe el estado de la atmósfera en un lugar y momento específico —temperatura, lluvia, viento— y es lo que cambia día a día. El clima es el patrón estadístico del tiempo a lo largo de 30 años: el promedio de lo que ha ocurrido en una región y en qué épocas. La frase que lo resume mejor: "el clima es lo que esperás; el tiempo es lo que obtenés".',
      en: 'Weather describes the state of the atmosphere at a specific place and moment — temperature, rain, wind — and is what changes day to day. Climate is the statistical pattern of weather over 30 years: the average of what has occurred in a region and when. The phrase that best sums it up: "climate is what you expect; weather is what you get."',
    },
  },
  {
    question: {
      es: '¿Cómo funciona la detección automática de ubicación?',
      en: 'How does automatic location detection work?',
    },
    answer: {
      es: 'Cuando abrís Clima Hoy, el sitio solicita permiso a tu navegador para acceder a tu ubicación GPS. Si aceptás, usa las coordenadas de latitud y longitud para consultar el clima de tu posición exacta. Si rechazás el permiso, podés buscar cualquier ciudad manualmente. La ubicación no se almacena en nuestros servidores; se usa solo en el momento de la consulta para obtener los datos del clima.',
      en: 'When you open Clima Hoy, the site requests permission from your browser to access your GPS location. If you accept, it uses your latitude and longitude coordinates to fetch the weather for your exact position. If you deny permission, you can search any city manually. Your location is not stored on our servers; it is only used at the moment of the query to retrieve weather data.',
    },
  },
  {
    question: {
      es: '¿Por qué los pronósticos de distintas apps difieren entre sí?',
      en: 'Why do forecasts from different apps differ from each other?',
    },
    answer: {
      es: 'Distintas apps de clima usan distintos modelos meteorológicos como fuente: el modelo europeo ECMWF, el americano GFS, el alemán ICON u otros. Cada modelo usa diferentes ecuaciones, resoluciones espaciales y datos de entrada, por lo que producen resultados distintos, especialmente a partir del tercer día. Para decisiones importantes, comparar dos o tres fuentes y fijarte en los puntos en que coinciden te da más confianza en el pronóstico.',
      en: 'Different weather apps use different meteorological models as their source: the European ECMWF, the American GFS, the German ICON, or others. Each model uses different equations, spatial resolutions, and input data, producing different results especially beyond day three. For important decisions, comparing two or three sources and noting where they agree gives you more confidence in the forecast.',
    },
  },
  {
    question: {
      es: '¿Qué significa "mm de lluvia" en el pronóstico?',
      en: 'What does "mm of rain" mean in a forecast?',
    },
    answer: {
      es: 'Los milímetros de lluvia miden la cantidad de agua que cae sobre una superficie, donde 1 mm equivale a 1 litro de agua por metro cuadrado. 1–2 mm es una llovizna leve; 10–20 mm es lluvia moderada con charcos; 30–50 mm en pocas horas puede generar pequeñas inundaciones. El total diario y la tasa horaria importan: 50 mm en 24 horas distribuidos es manejable; 50 mm en 2 horas puede colapsar el drenaje de cualquier ciudad.',
      en: 'Millimeters of rain measure the amount of water falling on a surface, where 1 mm equals 1 liter of water per square meter. 1–2 mm is light drizzle; 10–20 mm is moderate rain with puddles; 30–50 mm in a few hours can cause minor flooding. Both the daily total and the hourly rate matter: 50 mm spread over 24 hours is manageable; 50 mm in 2 hours can overwhelm any city\'s drainage system.',
    },
  },
];
