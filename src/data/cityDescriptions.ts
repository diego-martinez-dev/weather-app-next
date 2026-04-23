const descriptions: Record<string, string> = {
  // Colombia
  'bogota': 'Bogotá, la capital de Colombia, tiene un clima frío y húmedo debido a su altitud de 2.600 metros sobre el nivel del mar. La temperatura promedio oscila entre 7°C y 19°C durante todo el año, con lluvias frecuentes especialmente en abril-mayo y octubre-noviembre.',
  'medellin': 'Medellín es conocida como la "Ciudad de la Eterna Primavera" por su clima templado y agradable durante todo el año. Con una temperatura promedio de 22°C, disfruta de cielos soleados y brisa fresca gracias a su altitud de 1.495 metros.',
  'cali': 'Cali tiene un clima cálido y tropical, con temperaturas que rondan los 25°C a lo largo del año. La ciudad experimenta dos temporadas de lluvia (abril-mayo y octubre-noviembre) y dos de verano, siendo ideal para quienes disfrutan del calor.',
  'barranquilla': 'Barranquilla es una ciudad costera con clima cálido y seco, donde las temperaturas superan fácilmente los 30°C. Su temporada de lluvias va de mayo a noviembre, mientras que de diciembre a abril prevalecen los vientos alisios que refrescan el ambiente.',
  'cartagena': 'Cartagena de Indias tiene un clima tropical cálido y húmedo durante todo el año, con temperaturas que oscilan entre 25°C y 33°C. La ciudad disfruta de brisa marina constante y sus meses más secos son enero y febrero.',
  'bucaramanga': 'Bucaramanga, conocida como "La Ciudad Bonita", goza de un clima cálido y seco con temperaturas promedio de 23°C. Su ubicación en la cordillera Oriental le otorga noches frescas y tardes soleadas durante la mayor parte del año.',
  'pereira': 'Pereira tiene un clima templado y húmedo, con temperaturas promedio de 21°C gracias a su altitud de 1.411 metros. La ciudad del Eje Cafetero experimenta lluvias durante casi todo el año, lo que mantiene su vegetación exuberante.',
  'manizales': 'Manizales es una ciudad andina con clima frío y nublado, ubicada a 2.153 metros de altitud en la Cordillera Central. Las temperaturas oscilan entre 12°C y 22°C, con lluvias frecuentes especialmente en abril, mayo, octubre y noviembre.',
  'cucuta': 'Cúcuta tiene uno de los climas más calurosos de Colombia, con temperaturas que pueden superar los 35°C. Su ubicación en el Valle del río Zulia, cerca de la frontera con Venezuela, le da un clima seco y sofocante gran parte del año.',
  'ibague': 'Ibagué, la "Ciudad Musical de Colombia", disfruta de un clima cálido y húmedo con temperaturas promedio de 24°C. Su cercanía al nevado del Tolima genera contrastes climáticos interesantes entre el día y la noche.',
  'santa-marta': 'Santa Marta es la ciudad costera más antigua de Colombia y tiene un clima cálido tropical con temperaturas promedio de 27°C. Gracias a la influencia de la Sierra Nevada, la ciudad experimenta vientos frescos en las tardes que alivian el calor del Caribe.',
  'villavicencio': 'Villavicencio, puerta de entrada a los Llanos Orientales, tiene un clima cálido y muy húmedo con temperaturas promedio de 27°C. Las lluvias son abundantes de abril a noviembre, siendo una de las regiones más lluviosas del país.',
  'armenia': 'Armenia, capital del Quindío, tiene un clima templado y húmedo típico del Eje Cafetero, con temperaturas promedio de 20°C. La ciudad se caracteriza por sus frecuentes lloviznas y su paisaje verde, ideal para el cultivo del café.',
  'pasto': 'Pasto, capital de Nariño, tiene un clima frío y lluvioso debido a su altitud de 2.527 metros sobre el nivel del mar. Las temperaturas varían entre 8°C y 16°C, y las precipitaciones son frecuentes durante la mayor parte del año.',
  'monteria': 'Montería tiene un clima cálido tropical con temperaturas que rondan los 32°C. Situada a orillas del río Sinú, la ciudad experimenta una temporada seca de diciembre a abril y lluvias intensas el resto del año.',
  'sincelejo': 'Sincelejo tiene un clima cálido y seco con temperaturas que oscilan entre 24°C y 34°C. La ciudad de los Montes de María goza de pocas lluvias comparada con otras ciudades del Caribe colombiano.',
  'valledupar': 'Valledupar tiene un clima cálido y seco, con temperaturas que superan frecuentemente los 35°C. La cuna del vallenato es una de las ciudades más calientes de Colombia, especialmente entre enero y abril.',
  'neiva': 'Neiva tiene un clima cálido y seco con temperaturas promedio de 28°C, siendo una de las ciudades más calientes del interior de Colombia. Localizada en el Valle del Magdalena, experimenta pocas lluvias y mucho sol durante la mayor parte del año.',
  'popayan': 'Popayán, la "Ciudad Blanca", tiene un clima frío y lluvioso gracias a su altitud de 1.702 metros. Las temperaturas oscilan entre 14°C y 22°C, con lluvias frecuentes que mantienen su arquitectura colonial siempre reluciente.',
  'tunja': 'Tunja es una de las ciudades más frías de Colombia, con temperaturas que oscilan entre 5°C y 15°C debido a su altitud de 2.820 metros. Las noches son especialmente gélidas y la lluvia es frecuente durante casi todo el año.',

  // España
  'madrid': 'Madrid tiene un clima continental mediterráneo, con veranos muy calurosos que superan los 35°C e inviernos fríos con temperaturas cercanas a 0°C. La primavera y el otoño son las estaciones más agradables, con días soleados y temperaturas entre 15°C y 25°C.',
  'barcelona': 'Barcelona disfruta de un clima mediterráneo suave, con veranos cálidos y húmedos e inviernos templados. Las temperaturas rara vez bajan de 5°C en invierno y alcanzan los 28°C en verano, con escasas precipitaciones.',
  'valencia': 'Valencia tiene uno de los climas más agradables de España, con más de 300 días de sol al año. Sus inviernos son suaves (10-17°C) y sus veranos cálidos (25-30°C), con el Mar Mediterráneo moderando las temperaturas extremas.',
  'sevilla': 'Sevilla es conocida por ser una de las ciudades más calurosas de Europa, con veranos que superan regularmente los 40°C. Sus inviernos son suaves y templados, con temperaturas alrededor de 15°C y escasas lluvias.',
  'bilbao': 'Bilbao tiene un clima oceánico húmedo y templado, con lluvias frecuentes durante todo el año. Las temperaturas son suaves en todas las estaciones: entre 8°C y 12°C en invierno y 18°C a 25°C en verano.',
  'malaga': 'Málaga tiene el invierno más cálido de Europa continental, con temperaturas que raramente bajan de 10°C. Sus veranos son calurosos y secos (hasta 35°C), siendo uno de los destinos más soleados del Mediterráneo.',
  'zaragoza': 'Zaragoza tiene un clima continental semiárido con inviernos fríos y veranos muy calurosos. La ciudad es famosa por el cierzo, un viento frío y seco que baja drásticamente la temperatura sensible especialmente en invierno y primavera.',
  'alicante': 'Alicante disfruta de uno de los climas más secos y soleados de España, con más de 320 días de sol al año. Sus veranos son calurosos (28-35°C) y sus inviernos muy suaves (10-18°C), con muy pocas precipitaciones.',
  'granada': 'Granada tiene un clima continental mediterráneo, con inviernos fríos por su altitud y veranos muy calurosos que superan los 35°C. La ciudad es única por poder disfrutar de la playa y la nieve de Sierra Nevada el mismo día.',
  'murcia': 'Murcia tiene un clima semiárido mediterráneo, siendo una de las ciudades más secas y calurosas de España. Los veranos superan fácilmente los 38°C y las precipitaciones anuales son muy escasas, convirtiendo la región en la más árida de Europa occidental.',

  // Latinoamérica
  'mexico-city': 'Ciudad de México tiene un clima templado de montaña gracias a su altitud de 2.240 metros, con temperaturas promedio de 16°C durante todo el año. Las lluvias se concentran de junio a octubre, mientras que la temporada seca es soleada y con noches frescas.',
  'buenos-aires': 'Buenos Aires tiene un clima templado oceánico, con veranos cálidos y húmedos (25-35°C) e inviernos frescos y lluviosos (8-15°C). La ciudad experimenta precipitaciones distribuidas durante todo el año, sin una estación seca definida.',
  'santiago': 'Santiago de Chile tiene un clima mediterráneo semiárido, con veranos secos y calurosos (hasta 33°C) e inviernos fríos y lluviosos (5-14°C). Las lluvias se concentran entre mayo y agosto, mientras que el resto del año predomina el sol.',
  'lima': 'Lima tiene un clima árido y húmedo único: pocas precipitaciones pero mucha nubosidad y garúa (llovizna fina). La temperatura es suave durante todo el año, entre 14°C en invierno (junio-septiembre) y 28°C en verano (enero-marzo).',
  'caracas': 'Caracas tiene un clima tropical de montaña agradable gracias a su altitud de 900 metros, con temperaturas promedio de 22°C durante todo el año. La temporada de lluvias va de mayo a noviembre y la seca de diciembre a abril.',
  'quito': 'Quito, ubicada a 2.850 metros en los Andes ecuatorianos, tiene un clima fresco y variable con temperaturas entre 10°C y 20°C. La ciudad experimenta dos temporadas lluviosas (febrero-mayo y octubre-noviembre) y dos secas.',
  'montevideo': 'Montevideo tiene un clima templado oceánico con las cuatro estaciones bien definidas. Los veranos son cálidos (22-28°C) y los inviernos frescos (8-14°C), con precipitaciones distribuidas durante todo el año.',
  'asuncion': 'Asunción tiene un clima subtropical húmedo con veranos extremadamente calurosos que superan los 38°C e inviernos templados (15-20°C). Las lluvias son frecuentes durante todo el año, con mayor intensidad en verano.',
  'la-paz': 'La Paz es la capital más alta del mundo, ubicada a 3.640 metros, con un clima frío y seco que varía mucho entre el día y la noche. Las temperaturas oscilan entre 2°C y 18°C, con una temporada de lluvias de noviembre a marzo.',
  'guadalajara': 'Guadalajara tiene uno de los climas más agradables de México, conocido como "ciudad de la eterna primavera". Con temperaturas promedio de 20°C, disfruta de veranos frescos gracias a las lluvias de julio a septiembre e inviernos secos y suaves.',
  'monterrey': 'Monterrey tiene un clima semiárido extremo, con veranos brutales que superan los 40°C e inviernos que ocasionalmente traen heladas. La temporada de lluvias va de junio a octubre, impulsada por la influencia del Golfo de México.',
  'havana': 'La Habana tiene un clima tropical con dos estaciones: seca (noviembre-abril) y lluviosa (mayo-octubre). Las temperaturas oscilan entre 20°C en invierno y 32°C en verano, con alta humedad durante todo el año.',
  'santo-domingo': 'Santo Domingo tiene un clima tropical cálido y húmedo durante todo el año, con temperaturas entre 25°C y 33°C. La temporada de huracanes va de junio a noviembre, siendo agosto y septiembre los meses de mayor actividad.',
  'san-jose': 'San José tiene un clima tropical de montaña agradable gracias a su altitud de 1.170 metros, con temperaturas promedio de 22°C. La temporada lluviosa va de mayo a noviembre y la seca de diciembre a abril.',
  'panama-city': 'Ciudad de Panamá tiene un clima tropical húmedo con temperaturas constantes de 25-32°C durante todo el año. La temporada de lluvias va de mayo a diciembre, siendo una de las ciudades más lluviosas de Centroamérica.',
  'managua': 'Managua tiene un clima tropical cálido con temperaturas que oscilan entre 27°C y 35°C. La ciudad experimenta una temporada seca de noviembre a abril y lluvias intensas de mayo a octubre.',
};

export function getCityDescription(slug: string): string | null {
  return descriptions[slug.toLowerCase()] ?? null;
}
