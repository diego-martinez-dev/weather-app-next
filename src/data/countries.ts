// Datos de clima por país para las páginas /clima-pais/[pais].
// Contenido original (no derivado de la API) usado para crear clusters temáticos
// y enlazado interno hacia las páginas de ciudad. El orden de `cities` debe
// coincidir con los slugs presentes en `topCities` (clima/[slug]/page.tsx).

export interface Country {
  slug: string;
  name: string;
  cities: { slug: string; name: string }[];
  intro: string[];
  bestSeason: string;
  rainySeason: string;
  faq: { question: string; answer: string }[];
}

export const countries: Country[] = [
  {
    slug: 'colombia',
    name: 'Colombia',
    cities: [
      { slug: 'bogota', name: 'Bogotá' },
      { slug: 'medellin', name: 'Medellín' },
      { slug: 'cali', name: 'Cali' },
      { slug: 'barranquilla', name: 'Barranquilla' },
      { slug: 'cartagena', name: 'Cartagena' },
      { slug: 'bucaramanga', name: 'Bucaramanga' },
      { slug: 'pereira', name: 'Pereira' },
      { slug: 'manizales', name: 'Manizales' },
      { slug: 'cucuta', name: 'Cúcuta' },
      { slug: 'ibague', name: 'Ibagué' },
      { slug: 'santa-marta', name: 'Santa Marta' },
      { slug: 'villavicencio', name: 'Villavicencio' },
      { slug: 'armenia', name: 'Armenia' },
      { slug: 'pasto', name: 'Pasto' },
      { slug: 'monteria', name: 'Montería' },
      { slug: 'sincelejo', name: 'Sincelejo' },
      { slug: 'valledupar', name: 'Valledupar' },
      { slug: 'neiva', name: 'Neiva' },
      { slug: 'popayan', name: 'Popayán' },
      { slug: 'tunja', name: 'Tunja' },
    ],
    intro: [
      'El clima de Colombia no se entiende por estaciones, sino por altitud. Al estar sobre el ecuador, las temperaturas casi no cambian a lo largo del año en una misma ciudad; lo que manda es la altura sobre el nivel del mar. Así, mientras Cartagena y Barranquilla viven un calor tropical de 28–32°C en la costa Caribe, Bogotá y Tunja se mantienen frescas entre 7 y 19°C por estar a más de 2.500 metros. A esta lógica se la llama "pisos térmicos": tierra caliente abajo, tierra fría arriba, y un piso templado intermedio donde está Medellín, la ciudad de la eterna primavera.',
      'En lugar de invierno y verano, gran parte del país (sobre todo la región Andina) tiene dos temporadas secas y dos de lluvia. Las lluvias llegan típicamente de marzo a mayo y de septiembre a noviembre, con abril y octubre como los meses más húmedos. La costa Caribe es más seca de diciembre a abril, mientras que la región Pacífica (Chocó) es de las más lluviosas del planeta. Conocer en qué piso térmico y en qué temporada está cada ciudad es la mejor forma de saber qué empacar.',
    ],
    bestSeason: 'Diciembre a febrero y junio a agosto son las temporadas más secas en la región Andina (Bogotá, Medellín, Eje Cafetero). Para la costa Caribe, de diciembre a abril hay menos lluvia y mar más calmo.',
    rainySeason: 'En la región Andina: marzo–mayo y septiembre–noviembre, con picos en abril y octubre. La costa Caribe concentra sus lluvias entre mayo y noviembre.',
    faq: [
      {
        question: '¿Cuál es la mejor época para viajar a Colombia?',
        answer:
          'Depende de la región. Para las ciudades andinas (Bogotá, Medellín, el Eje Cafetero) lo ideal es diciembre–febrero y junio–agosto, las temporadas secas. Para la costa Caribe (Cartagena, Santa Marta) la mejor ventana es de diciembre a abril, con menos lluvia y mar tranquilo.',
      },
      {
        question: '¿Por qué hace frío en Bogotá si Colombia es un país tropical?',
        answer:
          'Por la altitud. Bogotá está a 2.600 metros sobre el nivel del mar, y a esa altura el aire es más frío aunque esté sobre el ecuador. Es el mismo motivo por el que Pasto, Tunja o Manizales son frescas mientras Cartagena o Cali son calurosas.',
      },
    ],
  },
  {
    slug: 'espana',
    name: 'España',
    cities: [
      { slug: 'madrid', name: 'Madrid' },
      { slug: 'barcelona', name: 'Barcelona' },
      { slug: 'valencia', name: 'Valencia' },
      { slug: 'sevilla', name: 'Sevilla' },
      { slug: 'bilbao', name: 'Bilbao' },
      { slug: 'malaga', name: 'Málaga' },
      { slug: 'zaragoza', name: 'Zaragoza' },
      { slug: 'alicante', name: 'Alicante' },
      { slug: 'granada', name: 'Granada' },
      { slug: 'murcia', name: 'Murcia' },
    ],
    intro: [
      'España tiene una variedad climática enorme para su tamaño. En la costa mediterránea (Barcelona, Valencia, Alicante, Málaga) domina el clima mediterráneo: veranos cálidos y secos, inviernos suaves y la mayor parte de la lluvia repartida en primavera y otoño. El interior, en cambio, tiene un clima continental marcado: Madrid y Zaragoza viven veranos muy calurosos y secos e inviernos fríos, con gran diferencia entre el día y la noche.',
      'El norte atlántico (Bilbao y toda la cornisa cantábrica) es la cara verde de España: clima oceánico, temperaturas templadas todo el año y lluvia frecuente en cualquier estación. Y el sureste (Murcia, Almería) es la zona más árida del continente europeo, con escasas precipitaciones y mucho sol. A diferencia de los países tropicales, aquí sí hay cuatro estaciones bien diferenciadas, así que la época del año marca por completo qué ropa llevar.',
    ],
    bestSeason: 'Primavera (abril–junio) y otoño (septiembre–octubre) son las mejores épocas: temperaturas agradables y menos masificación que en pleno verano. El verano es ideal para playa pero muy caluroso en el interior.',
    rainySeason: 'Primavera y otoño concentran la lluvia en la mayor parte del país. El norte atlántico (Bilbao) puede tener lluvia en cualquier estación; el sureste (Murcia, Alicante) es seco casi todo el año.',
    faq: [
      {
        question: '¿Cuál es la mejor época para visitar España?',
        answer:
          'La primavera (de abril a junio) y el otoño (septiembre y octubre) ofrecen el mejor equilibrio: clima agradable en casi todo el país, días largos y menos turistas que en verano. El verano es excelente para la costa, pero el interior (Madrid, Sevilla, Córdoba) puede superar los 38–40°C.',
      },
      {
        question: '¿Dónde hace mejor clima en España todo el año?',
        answer:
          'La costa mediterránea sur (Málaga, Alicante) tiene de los inviernos más suaves de Europa continental, con temperaturas que rara vez bajan de 10°C y muchos días de sol. Por eso la Costa del Sol es un destino popular incluso fuera de verano.',
      },
    ],
  },
  {
    slug: 'mexico',
    name: 'México',
    cities: [
      { slug: 'mexico-city', name: 'Ciudad de México' },
      { slug: 'guadalajara', name: 'Guadalajara' },
      { slug: 'monterrey', name: 'Monterrey' },
      { slug: 'puebla', name: 'Puebla' },
    ],
    intro: [
      'México combina tres grandes patrones de clima: el norte árido y semidesértico (Monterrey), el altiplano central templado por la altitud (Ciudad de México, Puebla, Guadalajara) y el sur y las costas, de carácter tropical. En el centro del país, como en gran parte de Latinoamérica de montaña, no hay invierno ni verano marcados: lo que define el año es la temporada de lluvias frente a la temporada seca.',
      'La temporada de lluvias va de mayo a octubre, cuando casi todos los días de tarde caen aguaceros cortos pero intensos, sobre todo en el centro y sur. De noviembre a abril el ambiente es seco y soleado. Las costas del Pacífico y del Golfo, además, viven la temporada de huracanes entre junio y noviembre. Por la altitud, Ciudad de México y Puebla son templadas todo el año pese a estar en latitud tropical.',
    ],
    bestSeason: 'De noviembre a abril, durante la temporada seca: días soleados, poca lluvia y temperaturas agradables en el altiplano. Es también la mejor ventana para las playas, fuera de la temporada de huracanes.',
    rainySeason: 'De mayo a octubre, con lluvias de tarde frecuentes en el centro y sur. La temporada de huracanes en las costas va de junio a noviembre.',
    faq: [
      {
        question: '¿Cuándo es la temporada de lluvias en México?',
        answer:
          'En la mayor parte del país la temporada de lluvias va de mayo a octubre, con aguaceros vespertinos frecuentes pero breves. De noviembre a abril el clima es seco y soleado, especialmente en el centro del país.',
      },
      {
        question: '¿Hace frío en Ciudad de México?',
        answer:
          'Ciudad de México tiene un clima templado todo el año gracias a sus 2.240 metros de altitud. Las mañanas y noches de invierno (diciembre–febrero) pueden ser frescas, de 5–10°C, mientras que los días rondan los 20–24°C durante casi todo el año.',
      },
    ],
  },
  {
    slug: 'argentina',
    name: 'Argentina',
    cities: [
      { slug: 'buenos-aires', name: 'Buenos Aires' },
      { slug: 'cordoba', name: 'Córdoba' },
      { slug: 'rosario', name: 'Rosario' },
      { slug: 'mendoza', name: 'Mendoza' },
    ],
    intro: [
      'Argentina es un país largísimo de norte a sur, así que su clima va del subtropical en el norte al frío patagónico en el extremo sur. Al estar en el hemisferio sur, las estaciones están invertidas respecto a Europa o Norteamérica: el verano va de diciembre a febrero y el invierno de junio a agosto. Buenos Aires y Rosario, sobre la llanura pampeana, tienen un clima templado y húmedo, con veranos calurosos e inviernos frescos pero rara vez gélidos.',
      'Hacia el oeste, Mendoza vive al pie de los Andes un clima seco y soleado, con gran amplitud térmica entre el día y la noche, ideal para los viñedos. Córdoba, en el centro, es templada con veranos de tormentas fuertes. En general las lluvias se concentran en el semestre cálido (octubre a marzo), mientras que el invierno tiende a ser más seco en gran parte del país.',
    ],
    bestSeason: 'Primavera (octubre–noviembre) y otoño (marzo–abril) ofrecen temperaturas agradables en casi todo el país. El verano es ideal para la Patagonia y el sur; el invierno, para esquiar en la cordillera.',
    rainySeason: 'Las lluvias se concentran en el semestre cálido, de octubre a marzo, sobre todo en forma de tormentas de tarde en el centro y noreste. El invierno suele ser más seco.',
    faq: [
      {
        question: '¿En qué meses es verano en Argentina?',
        answer:
          'El verano en Argentina va de diciembre a febrero, porque está en el hemisferio sur y las estaciones están invertidas respecto al hemisferio norte. El invierno corresponde a junio, julio y agosto.',
      },
      {
        question: '¿Cómo es el clima en Buenos Aires?',
        answer:
          'Buenos Aires tiene un clima templado y húmedo. Los veranos (diciembre–febrero) son calurosos y pueden ser bochornosos, con tormentas; los inviernos (junio–agosto) son frescos, de 8–15°C, sin nieve. La primavera y el otoño son las estaciones más agradables.',
      },
    ],
  },
  {
    slug: 'chile',
    name: 'Chile',
    cities: [
      { slug: 'santiago', name: 'Santiago' },
      { slug: 'valparaiso', name: 'Valparaíso' },
      { slug: 'concepcion', name: 'Concepción' },
      { slug: 'antofagasta', name: 'Antofagasta' },
    ],
    intro: [
      'Pocos países tienen un rango climático tan extremo como Chile, gracias a sus más de 4.000 km de longitud. En el norte está el desierto de Atacama (Antofagasta), el lugar más árido del mundo, donde prácticamente nunca llueve. En el centro, Santiago y Valparaíso disfrutan de un clima mediterráneo: veranos secos y cálidos, inviernos suaves con las únicas lluvias del año. Más al sur, Concepción ya entra en una zona templada y lluviosa.',
      'Como en toda Sudamérica, las estaciones están invertidas: verano de diciembre a febrero, invierno de junio a agosto. En la zona central, la lluvia se concentra casi por completo en los meses de invierno, mientras que el verano es seco y soleado. La costa, bañada por la fría corriente de Humboldt, suele ser más fresca y nublada por las mañanas de lo que sugiere la latitud.',
    ],
    bestSeason: 'La primavera (septiembre–noviembre) y el verano (diciembre–febrero) son ideales para la zona central y el sur. Para el desierto de Atacama, prácticamente cualquier época del año funciona por su sequedad.',
    rainySeason: 'En la zona central (Santiago, Valparaíso) la lluvia cae casi exclusivamente en invierno, de junio a agosto. El norte es seco todo el año; el sur es lluvioso buena parte del año.',
    faq: [
      {
        question: '¿Cuándo llueve en Santiago de Chile?',
        answer:
          'Santiago tiene un clima mediterráneo, así que la lluvia se concentra en los meses de invierno, entre junio y agosto. El resto del año, y especialmente el verano (diciembre–febrero), es seco y soleado.',
      },
      {
        question: '¿Por qué casi no llueve en el norte de Chile?',
        answer:
          'Porque allí está el desierto de Atacama, el más árido del planeta. La combinación de la cordillera de los Andes, la corriente fría de Humboldt y el anticiclón del Pacífico impide la formación de lluvias durante años en algunas zonas.',
      },
    ],
  },
  {
    slug: 'peru',
    name: 'Perú',
    cities: [
      { slug: 'lima', name: 'Lima' },
      { slug: 'arequipa', name: 'Arequipa' },
      { slug: 'cusco', name: 'Cusco' },
      { slug: 'trujillo', name: 'Trujillo' },
    ],
    intro: [
      'Perú tiene tres regiones climáticas muy distintas: la costa desértica, la sierra andina y la selva amazónica. En la costa, Lima y Trujillo viven un clima desértico y templado, casi sin lluvia, marcado por la garúa —una neblina húmeda típica del invierno limeño (junio–septiembre)—. La fría corriente de Humboldt mantiene la costa más fresca de lo esperable para su latitud tropical.',
      'En la sierra (Cusco, y en parte Arequipa) el clima depende de la altitud y se divide en dos temporadas: la seca, de mayo a septiembre, con días soleados y noches frías; y la húmeda, de noviembre a marzo, con lluvias frecuentes. Para visitar Cusco y Machu Picchu, la temporada seca es la más recomendable. La selva amazónica, por su parte, es calurosa y húmeda todo el año.',
    ],
    bestSeason: 'De mayo a septiembre (temporada seca en la sierra) es la mejor época para Cusco, Machu Picchu y los Andes. En la costa, el verano (diciembre–marzo) es más soleado y cálido que el invierno de garúa.',
    rainySeason: 'En la sierra, la temporada de lluvias va de noviembre a marzo. La costa es desértica y casi no llueve; la selva es húmeda todo el año.',
    faq: [
      {
        question: '¿Cuál es la mejor época para visitar Cusco y Machu Picchu?',
        answer:
          'La temporada seca, de mayo a septiembre, es la más recomendable: días soleados, poca lluvia y mejor visibilidad en los senderos. Las noches son frías por la altitud, así que conviene llevar abrigo. La temporada de lluvias (noviembre–marzo) complica las caminatas.',
      },
      {
        question: '¿Por qué Lima es tan nublada y gris?',
        answer:
          'Por la garúa, una neblina húmeda producto de la corriente fría de Humboldt. Entre junio y septiembre, Lima vive cielos grises y húmedos casi permanentes, aunque prácticamente no llueve. En verano (diciembre–marzo) el cielo se despeja y sube la temperatura.',
      },
    ],
  },
  {
    slug: 'ecuador',
    name: 'Ecuador',
    cities: [
      { slug: 'quito', name: 'Quito' },
      { slug: 'guayaquil', name: 'Guayaquil' },
      { slug: 'cuenca', name: 'Cuenca' },
      { slug: 'manta', name: 'Manta' },
    ],
    intro: [
      'Ecuador está justo sobre la línea del ecuador, por lo que la duración del día y la radiación solar apenas cambian a lo largo del año. Como en Colombia, lo que define el clima de cada ciudad es la altitud. En la Sierra, Quito y Cuenca disfrutan de un clima templado de "eterna primavera", con temperaturas frescas y estables todo el año pese a estar en pleno trópico. En la costa, Guayaquil y Manta viven un clima cálido y húmedo.',
      'El país tiene dos temporadas en lugar de cuatro estaciones: el "invierno" (lluvioso y cálido, de diciembre a mayo) y el "verano" (seco y más fresco, de junio a noviembre). En la Sierra las lluvias son más repartidas, mientras que en la costa la temporada húmeda es muy marcada. Por estar sobre el ecuador, el sol es intenso a mediodía durante todo el año, sobre todo en altura.',
    ],
    bestSeason: 'De junio a septiembre (temporada seca) es ideal para la Sierra y para recorrer Quito y Cuenca. Para la costa y las playas, los meses cálidos de diciembre a abril son los más soleados pese a ser la temporada húmeda.',
    rainySeason: 'La temporada de lluvias ("invierno") va de diciembre a mayo, más marcada en la costa. La temporada seca ("verano") va de junio a noviembre.',
    faq: [
      {
        question: '¿Hace frío en Quito?',
        answer:
          'Quito tiene un clima templado de eterna primavera gracias a sus 2.850 metros de altitud. Los días rondan los 18–21°C y las noches bajan a 8–10°C durante todo el año. No hace frío extremo, pero conviene llevar abrigo para las mañanas y noches.',
      },
      {
        question: '¿Cuándo es la temporada de lluvias en Ecuador?',
        answer:
          'La temporada lluviosa, llamada localmente "invierno", va de diciembre a mayo y es más intensa en la costa (Guayaquil, Manta). La temporada seca o "verano" va de junio a noviembre.',
      },
    ],
  },
  {
    slug: 'brasil',
    name: 'Brasil',
    cities: [
      { slug: 'brasilia', name: 'Brasilia' },
      { slug: 'sao-paulo', name: 'São Paulo' },
      { slug: 'rio-de-janeiro', name: 'Río de Janeiro' },
      { slug: 'salvador', name: 'Salvador' },
    ],
    intro: [
      'Brasil es mayoritariamente tropical, pero su enorme tamaño genera contrastes. Río de Janeiro y Salvador, sobre la costa, son cálidas y húmedas casi todo el año, con temperaturas de playa. São Paulo, algo más al interior y en altura, tiene un clima subtropical más variable, con noches frescas en invierno. Brasilia, en el altiplano central, vive una marcada estación seca en invierno. Como está en el hemisferio sur, el verano va de diciembre a marzo.',
      'En el sureste (Río, São Paulo) el verano es la temporada más lluviosa y húmeda, con aguaceros de tarde; el invierno (junio–agosto) es más seco y agradable. En el nordeste (Salvador) las lluvias se reparten distinto, con un pico entre abril y julio. La región amazónica, al norte, es calurosa y húmeda durante todo el año.',
    ],
    bestSeason: 'El invierno y la primavera del hemisferio sur (de mayo a octubre) ofrecen un clima más seco y agradable en el sureste. Para Carnaval y playa con calor pleno, el verano (diciembre–febrero) es la temporada, aunque más lluviosa.',
    rainySeason: 'En el sureste (Río, São Paulo) las lluvias se concentran en verano, de diciembre a marzo. En el nordeste el pico húmedo va de abril a julio.',
    faq: [
      {
        question: '¿Cuándo es verano en Brasil?',
        answer:
          'El verano brasileño va de diciembre a marzo, ya que el país está en el hemisferio sur. Es la temporada más calurosa y también la más lluviosa en el sureste (Río de Janeiro, São Paulo), con la fiesta del Carnaval entre febrero y marzo.',
      },
      {
        question: '¿Cuál es la mejor época para visitar Río de Janeiro?',
        answer:
          'De mayo a octubre el clima es más seco y agradable, con temperaturas cómodas para recorrer la ciudad y la playa. El verano (diciembre–marzo) es muy caluroso, animado y festivo, pero con más lluvia y humedad.',
      },
    ],
  },
  {
    slug: 'estados-unidos',
    name: 'Estados Unidos',
    cities: [
      { slug: 'new-york', name: 'Nueva York' },
      { slug: 'miami', name: 'Miami' },
      { slug: 'los-angeles', name: 'Los Ángeles' },
      { slug: 'chicago', name: 'Chicago' },
      { slug: 'san-francisco', name: 'San Francisco' },
    ],
    intro: [
      'Estados Unidos abarca casi todos los climas posibles. Nueva York y Chicago tienen un clima continental de cuatro estaciones muy marcadas: veranos calurosos e inviernos fríos con nieve, especialmente severos en Chicago por los vientos del lago Michigan. Miami, en cambio, es subtropical: cálida y húmeda todo el año, con una temporada de lluvias y huracanes entre junio y noviembre.',
      'En la costa oeste, Los Ángeles disfruta de un clima mediterráneo seco y soleado casi todo el año, mientras que San Francisco es famosa por su niebla y su frescura incluso en verano, fruto de la corriente fría del Pacífico. Es un país donde la ciudad concreta importa muchísimo: la diferencia entre Miami y Chicago en pleno enero puede ser de más de 20°C.',
    ],
    bestSeason: 'La primavera (abril–junio) y el otoño (septiembre–octubre) son las mejores épocas en gran parte del país, con temperaturas suaves. El verano es ideal para el norte; el invierno, para escapar al sur (Miami, California).',
    rainySeason: 'Varía por región: Miami concentra lluvia y huracanes entre junio y noviembre; el noreste reparte la precipitación todo el año; California es seca en verano y lluviosa en invierno.',
    faq: [
      {
        question: '¿Cuál es la mejor época para visitar Nueva York?',
        answer:
          'La primavera (de abril a junio) y el otoño (septiembre y octubre) ofrecen el clima más agradable, con temperaturas suaves y paisajes bonitos. El verano es caluroso y húmedo, y el invierno frío con posibilidad de nieve, aunque con el encanto de las fiestas.',
      },
      {
        question: '¿Por qué hace frío en San Francisco en verano?',
        answer:
          'Por la corriente fría del Pacífico y la niebla costera que entra por la bahía. Aunque esté en California, San Francisco rara vez tiene calor; los veranos son frescos y neblinosos, y conviene llevar una chaqueta incluso en julio.',
      },
    ],
  },
  {
    slug: 'canada',
    name: 'Canadá',
    cities: [
      { slug: 'toronto', name: 'Toronto' },
      { slug: 'vancouver', name: 'Vancouver' },
      { slug: 'montreal', name: 'Montreal' },
      { slug: 'calgary', name: 'Calgary' },
      { slug: 'ottawa', name: 'Ottawa' },
    ],
    intro: [
      'Canadá es famoso por sus inviernos largos y rigurosos, pero su clima varía mucho según la región. Toronto, Montreal y Ottawa, en el este, tienen un clima continental con cuatro estaciones intensas: veranos cálidos y agradables, e inviernos muy fríos con abundante nieve y temperaturas que pueden bajar de −20°C. Montreal y Ottawa están entre las capitales más frías del mundo en pleno invierno.',
      'Vancouver, en la costa oeste del Pacífico, es la gran excepción: tiene un clima oceánico mucho más templado, con inviernos suaves pero lluviosos y veranos frescos y agradables. Calgary, al pie de las Rocosas, combina inviernos fríos con un fenómeno particular, el viento chinook, que puede subir la temperatura varios grados en pocas horas.',
    ],
    bestSeason: 'El verano (junio–agosto) es la mejor época para visitar casi todo el país, con clima cálido y días largos. El otoño regala paisajes espectaculares; el invierno es para los amantes de la nieve y los deportes.',
    rainySeason: 'Vancouver es lluvioso sobre todo de octubre a marzo. En el este, la precipitación se reparte todo el año y cae como nieve en invierno.',
    faq: [
      {
        question: '¿Qué tan frío es el invierno en Canadá?',
        answer:
          'En el este (Toronto, Montreal, Ottawa) los inviernos son muy fríos, con temperaturas que suelen oscilar entre −5°C y −20°C y nevadas frecuentes de diciembre a marzo. Vancouver, en la costa oeste, es la excepción: su invierno es suave pero lluvioso.',
      },
      {
        question: '¿Cuál es la mejor época para visitar Canadá?',
        answer:
          'El verano, de junio a agosto, ofrece el clima más cálido y agradable en todo el país, con días largos ideales para explorar la naturaleza. El otoño (septiembre–octubre) destaca por los colores de los bosques.',
      },
    ],
  },
  {
    slug: 'venezuela',
    name: 'Venezuela',
    cities: [{ slug: 'caracas', name: 'Caracas' }],
    intro: [
      'Venezuela tiene un clima tropical en el que, como en gran parte del Caribe y los Andes, no hay invierno ni verano sino dos temporadas: la seca y la de lluvias. Caracas, la capital, está en un valle a unos 900 metros de altitud, lo que le da un clima primaveral más agradable que el calor sofocante de la costa. Las temperaturas en la ciudad suelen rondar los 19–27°C durante casi todo el año.',
      'La temporada seca va de diciembre a abril, con cielos despejados y ambiente soleado. La temporada de lluvias, de mayo a noviembre, trae aguaceros de tarde frecuentes pero generalmente breves. En las zonas costeras y los llanos hace bastante más calor que en el valle de Caracas.',
    ],
    bestSeason: 'La temporada seca, de diciembre a abril, es la mejor época: días soleados, poca lluvia y ambiente agradable en Caracas y en la costa.',
    rainySeason: 'De mayo a noviembre, con lluvias de tarde frecuentes pero normalmente cortas.',
    faq: [
      {
        question: '¿Cómo es el clima en Caracas?',
        answer:
          'Caracas tiene un clima primaveral todo el año gracias a su altitud (unos 900 metros). Las temperaturas suelen ir de 19°C en las mañanas a 27°C al mediodía. La temporada seca va de diciembre a abril y la de lluvias de mayo a noviembre.',
      },
    ],
  },
  {
    slug: 'uruguay',
    name: 'Uruguay',
    cities: [{ slug: 'montevideo', name: 'Montevideo' }],
    intro: [
      'Uruguay tiene un clima templado y húmedo, con las cuatro estaciones bien diferenciadas y, al estar en el hemisferio sur, invertidas respecto a Europa: el verano va de diciembre a febrero y el invierno de junio a agosto. Montevideo, sobre el Río de la Plata, recibe la influencia del agua, que suaviza las temperaturas pero también hace que el viento y la humedad sean protagonistas durante todo el año.',
      'El verano es cálido, con temperaturas de 25–30°C y días ideales para la playa. El invierno es fresco y húmedo, rara vez gélido, con mínimas que suelen rondar los 6–10°C. La lluvia se reparte de forma bastante uniforme a lo largo del año, sin una estación seca muy marcada.',
    ],
    bestSeason: 'El verano (diciembre–marzo) es ideal para la playa y la rambla; la primavera y el otoño ofrecen temperaturas agradables y menos gente.',
    rainySeason: 'La lluvia se reparte bastante a lo largo del año, sin una temporada seca marcada. El otoño y la primavera suelen ser algo más húmedos.',
    faq: [
      {
        question: '¿Cómo es el clima en Montevideo?',
        answer:
          'Montevideo tiene un clima templado y húmedo con cuatro estaciones. El verano (diciembre–febrero) es cálido, de 25–30°C; el invierno (junio–agosto) es fresco y húmedo, de 6–14°C, con viento del Río de la Plata. La lluvia se reparte todo el año.',
      },
    ],
  },
  {
    slug: 'bolivia',
    name: 'Bolivia',
    cities: [{ slug: 'la-paz', name: 'La Paz' }],
    intro: [
      'El clima de Bolivia depende sobre todo de la altitud. En el altiplano, donde está La Paz a más de 3.600 metros, el clima es frío y seco buena parte del año, con un sol intenso de día y temperaturas que caen bruscamente al anochecer. En las tierras bajas del oriente, en cambio, el clima es tropical y caluroso. La Paz es una de las capitales más altas del mundo, y su altitud manda por completo sobre su tiempo.',
      'Hay dos temporadas: la seca, de mayo a octubre, con días soleados y noches muy frías, ideal para viajar; y la húmeda, de noviembre a marzo, con lluvias frecuentes. Por la altura, la radiación solar es muy fuerte a mediodía durante todo el año, así que el protector solar es imprescindible incluso cuando hace frío.',
    ],
    bestSeason: 'La temporada seca, de mayo a octubre, es la mejor para visitar La Paz y el altiplano: días soleados y estables, aunque con noches frías.',
    rainySeason: 'De noviembre a marzo, con lluvias frecuentes en el altiplano.',
    faq: [
      {
        question: '¿Hace frío en La Paz, Bolivia?',
        answer:
          'Sí. La Paz está a más de 3.600 metros de altitud, lo que la hace fría todo el año. Los días pueden ser templados al sol (15–18°C), pero las noches bajan mucho, sobre todo en la temporada seca (mayo–octubre). El sol de mediodía es intenso pese al frío.',
      },
    ],
  },
  {
    slug: 'paraguay',
    name: 'Paraguay',
    cities: [{ slug: 'asuncion', name: 'Asunción' }],
    intro: [
      'Paraguay tiene un clima subtropical, cálido y húmedo, sin grandes contrastes de altitud. Asunción, la capital, vive veranos largos y muy calurosos, en los que la temperatura supera con facilidad los 35°C y la humedad hace que la sensación térmica sea aún mayor. Al estar en el hemisferio sur, el verano va de diciembre a febrero y el invierno de junio a agosto.',
      'El invierno es corto y suave, con días templados y algunas irrupciones de aire frío del sur que pueden bajar la temperatura de forma puntual. Las lluvias se concentran sobre todo en el semestre cálido, con tormentas intensas de verano, aunque puede llover en cualquier época del año.',
    ],
    bestSeason: 'El invierno (junio–agosto) y los meses de otoño y primavera son los más cómodos, evitando el calor extremo del verano.',
    rainySeason: 'Las lluvias y tormentas se concentran en el semestre cálido (octubre–marzo), aunque puede llover en cualquier mes.',
    faq: [
      {
        question: '¿Qué tan caluroso es el verano en Asunción?',
        answer:
          'Mucho. El verano en Asunción (diciembre–febrero) es largo y caluroso, con temperaturas que superan a menudo los 35°C y alta humedad, lo que eleva la sensación térmica. Conviene hidratarse bien y evitar el sol del mediodía.',
      },
    ],
  },
  {
    slug: 'cuba',
    name: 'Cuba',
    cities: [{ slug: 'havana', name: 'La Habana' }],
    intro: [
      'Cuba tiene un clima tropical típico del Caribe, con calor y humedad durante todo el año y solo dos temporadas: la seca y la de lluvias. La Habana, en la costa norte, disfruta de temperaturas cálidas que rondan los 26–32°C en verano y rara vez bajan de 20°C en invierno. La brisa del mar suaviza algo el calor en la capital.',
      'La temporada seca va de noviembre a abril y es la más agradable: menos lluvia, menos humedad y temperaturas más cómodas. La temporada de lluvias, de mayo a octubre, coincide con la temporada de huracanes del Atlántico, que tiene su pico entre agosto y octubre. Por eso el invierno caribeño es la época preferida para viajar.',
    ],
    bestSeason: 'La temporada seca, de noviembre a abril, es la mejor: clima cálido pero más seco y agradable, fuera de la temporada de huracanes.',
    rainySeason: 'De mayo a octubre, coincidiendo con la temporada de huracanes del Atlántico (pico de agosto a octubre).',
    faq: [
      {
        question: '¿Cuál es la mejor época para visitar Cuba?',
        answer:
          'De noviembre a abril, durante la temporada seca: hace calor pero con menos humedad y lluvia, y queda fuera de la temporada de huracanes. Es la ventana ideal para disfrutar de La Habana y las playas.',
      },
    ],
  },
  {
    slug: 'republica-dominicana',
    name: 'República Dominicana',
    cities: [{ slug: 'santo-domingo', name: 'Santo Domingo' }],
    intro: [
      'República Dominicana tiene un clima tropical cálido y húmedo durante todo el año, muy estable en cuanto a temperatura. Santo Domingo, la capital, en la costa sur, mantiene valores de 24–31°C casi sin variación entre estaciones; lo que cambia es la cantidad de lluvia y la humedad. Como en todo el Caribe, no hay invierno ni verano, sino una temporada seca y una de lluvias.',
      'La temporada relativamente más seca y agradable va de diciembre a abril. La temporada de lluvias se extiende de mayo a noviembre y coincide con la temporada de huracanes del Atlántico, cuyo período de mayor riesgo es de agosto a octubre. Las playas del país son disfrutables todo el año, pero el invierno caribeño ofrece el mejor equilibrio de clima.',
    ],
    bestSeason: 'De diciembre a abril, la temporada más seca y agradable, fuera del pico de huracanes.',
    rainySeason: 'De mayo a noviembre, coincidiendo con la temporada de huracanes (mayor riesgo de agosto a octubre).',
    faq: [
      {
        question: '¿Cuándo es la mejor época para viajar a Santo Domingo?',
        answer:
          'De diciembre a abril, durante la temporada seca: clima cálido y soleado con menos lluvia y humedad, y fuera de la temporada alta de huracanes. Es la mejor ventana para disfrutar de la ciudad y las playas.',
      },
    ],
  },
  {
    slug: 'costa-rica',
    name: 'Costa Rica',
    cities: [{ slug: 'san-jose', name: 'San José' }],
    intro: [
      'Costa Rica tiene un clima tropical, pero con muchos microclimas debido a sus montañas, costas y bosques. San José, en el Valle Central a unos 1.150 metros de altitud, disfruta de un clima primaveral muy agradable todo el año, con temperaturas de 18–27°C. Las costas, tanto del Pacífico como del Caribe, son más calurosas y húmedas.',
      'El país tiene dos estaciones bien definidas: el "verano" o temporada seca, de diciembre a abril, con días soleados; y el "invierno" o temporada verde, de mayo a noviembre, con lluvias de tarde frecuentes que mantienen la exuberante vegetación. La vertiente caribeña tiene su propio patrón y puede llover en épocas distintas al resto del país.',
    ],
    bestSeason: 'La temporada seca, de diciembre a abril, ofrece días soleados ideales para playas y parques nacionales. La temporada verde (mayo–noviembre) es más económica y con naturaleza exuberante.',
    rainySeason: 'De mayo a noviembre (temporada verde), con lluvias de tarde frecuentes. La costa caribeña sigue un patrón propio.',
    faq: [
      {
        question: '¿Cómo es el clima en San José de Costa Rica?',
        answer:
          'San José tiene un clima primaveral todo el año gracias a su altitud en el Valle Central, con temperaturas de 18–27°C. La temporada seca va de diciembre a abril y la temporada verde (lluviosa) de mayo a noviembre, con aguaceros de tarde.',
      },
    ],
  },
  {
    slug: 'panama',
    name: 'Panamá',
    cities: [{ slug: 'panama-city', name: 'Ciudad de Panamá' }],
    intro: [
      'Panamá tiene un clima tropical cálido y húmedo durante todo el año, con temperaturas que se mantienen muy estables, en torno a 26–32°C. Ciudad de Panamá, sobre el Pacífico, vive el calor típico del trópico bajo, donde lo que marca el año no es la temperatura sino la cantidad de lluvia y humedad. La cercanía al mar y la condición ístmica del país hacen que la humedad sea casi siempre alta.',
      'La temporada seca va de mediados de diciembre a abril, con días más soleados y brisa, y es la época preferida para viajar. La temporada de lluvias, de mayo a mediados de diciembre, trae aguaceros de tarde frecuentes, a menudo intensos pero breves. La vertiente caribeña es aún más lluviosa que la pacífica.',
    ],
    bestSeason: 'La temporada seca, de mediados de diciembre a abril, es la mejor: más sol, menos lluvia y ambiente más cómodo pese al calor.',
    rainySeason: 'De mayo a mediados de diciembre, con aguaceros de tarde frecuentes. El lado caribeño es más lluvioso.',
    faq: [
      {
        question: '¿Cuándo es la temporada seca en Panamá?',
        answer:
          'La temporada seca va de mediados de diciembre a abril, con días soleados y brisa. Es la mejor época para visitar Ciudad de Panamá. La temporada de lluvias va de mayo a mediados de diciembre, con aguaceros vespertinos.',
      },
    ],
  },
  {
    slug: 'nicaragua',
    name: 'Nicaragua',
    cities: [{ slug: 'managua', name: 'Managua' }],
    intro: [
      'Nicaragua tiene un clima tropical, caluroso durante todo el año en las tierras bajas. Managua, la capital, situada junto al lago Xolotlán, es una de las ciudades más calurosas de Centroamérica, con temperaturas que suelen rondar los 28–34°C. Como en el resto del istmo, no hay estaciones de frío y calor, sino una temporada seca y una de lluvias.',
      'La temporada seca, llamada localmente "verano", va de noviembre a abril, con días soleados y calurosos. La temporada de lluvias o "invierno" va de mayo a octubre, con aguaceros de tarde que refrescan el ambiente. Las zonas de montaña del norte y la costa caribeña son más frescas y lluviosas que el Pacífico, donde está Managua.',
    ],
    bestSeason: 'La temporada seca, de noviembre a abril, ofrece días soleados ideales para viajar, aunque calurosos en Managua.',
    rainySeason: 'De mayo a octubre, con lluvias de tarde frecuentes. La costa caribeña es bastante más lluviosa.',
    faq: [
      {
        question: '¿Qué tan caluroso es Managua?',
        answer:
          'Managua es una de las ciudades más calurosas de Centroamérica, con temperaturas habituales de 28–34°C todo el año. La temporada seca (noviembre–abril) es la más calurosa y soleada; la de lluvias (mayo–octubre) refresca algo el ambiente con aguaceros de tarde.',
      },
    ],
  },
];

const countryBySlug = new Map(countries.map(c => [c.slug, c]));
const countryByCitySlug = new Map<string, Country>();
for (const c of countries) {
  for (const city of c.cities) {
    countryByCitySlug.set(city.slug, c);
  }
}

export const countrySlugs = countries.map(c => c.slug);

export function getCountryBySlug(slug: string): Country | undefined {
  return countryBySlug.get(slug);
}

export function getCountryForCity(citySlug: string): Country | undefined {
  return countryByCitySlug.get(citySlug);
}
