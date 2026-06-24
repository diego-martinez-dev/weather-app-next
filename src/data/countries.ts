export type Continent = 'Sudamérica' | 'Centroamérica y Caribe' | 'Norteamérica' | 'Europa';

export interface ClimateRegion {
  name: string;
  description: string;
}

export interface Country {
  slug: string;
  name: string;
  continent: Continent;
  cities: { slug: string; name: string }[];
  intro: string[];
  climateRegions: ClimateRegion[];
  bestSeason: string;
  rainySeason: string;
  whenToGo: string;
  whatToPack: string;
  faq: { question: string; answer: string }[];
}

export const countries: Country[] = [
  {
    slug: 'colombia',
    name: 'Colombia',
    continent: 'Sudamérica',
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
      'Una consecuencia práctica de los pisos térmicos es que en un mismo viaje por Colombia se puede pasar del calor de playa en Cartagena al frío de páramo en Bogotá o Manizales en cuestión de horas. Esta variedad lo convierte en uno de los países más fascinantes climáticamente de América Latina, pero también exige planificar el equipaje con cuidado.',
    ],
    climateRegions: [
      {
        name: 'Región Andina',
        description: 'Cubre Bogotá, Medellín, el Eje Cafetero, Pasto y Popayán. El clima es templado o frío según la altitud: Medellín ronda los 22–25°C todo el año, mientras Bogotá y Tunja se mantienen entre 7 y 19°C. Las lluvias tienen dos picos: abril-mayo y octubre-noviembre.',
      },
      {
        name: 'Costa Caribe',
        description: 'Barranquilla, Cartagena, Santa Marta y Valledupar son cálidas y soleadas de diciembre a abril, la temporada más seca y atractiva para el turismo. Reciben sus principales lluvias de mayo a noviembre. La Sierra Nevada de Santa Marta crea microclimas sorprendentes a pocos kilómetros de la playa.',
      },
      {
        name: 'Región Pacífica',
        description: 'El Chocó y la costa Pacífica son de las zonas más lluviosas del planeta, con precipitaciones que superan los 5.000 mm anuales en algunas áreas. El clima es cálido y muy húmedo todo el año, con escasa diferencia entre estaciones.',
      },
      {
        name: 'Orinoquía y Llanos',
        description: 'Villavicencio es la puerta de los llanos orientales, una planicie calurosa a menos de 500 metros de altitud. La temporada de lluvias (abril-noviembre) transforma el paisaje con ríos desbordados; la seca (diciembre-marzo) deja praderas doradas con alta concentración de fauna.',
      },
      {
        name: 'Amazonía',
        description: 'La región amazónica colombiana es calurosa y húmeda todo el año, con escasas variaciones de temperatura. Las lluvias son frecuentes en cualquier mes, aunque más intensas entre marzo y junio.',
      },
    ],
    bestSeason: 'Diciembre a febrero y junio a agosto son las temporadas más secas en la región Andina (Bogotá, Medellín, Eje Cafetero). Para la costa Caribe, de diciembre a abril hay menos lluvia y mar más calmo.',
    rainySeason: 'En la región Andina: marzo–mayo y septiembre–noviembre, con picos en abril y octubre. La costa Caribe concentra sus lluvias entre mayo y noviembre.',
    whenToGo: 'Si tu destino es la región Andina —Bogotá, Medellín o el Eje Cafetero—, los meses de junio a agosto y de diciembre a febrero son los más secos y agradables. Para la costa Caribe (Cartagena, Santa Marta), la ventana ideal va de diciembre a marzo: sol constante, menos humedad y playas con oleaje calmado. En Semana Santa y los puentes festivos la demanda turística se dispara, así que conviene reservar con antelación. Para quienes quieren ver el país en verde, los meses de lluvia tienen su propio encanto, aunque implican impermeable casi diario en muchas ciudades.',
    whatToPack: 'Colombia pide ropa en capas. Si visitás Bogotá o Manizales, llevá un buen suéter o chaqueta para las mañanas y noches, y ropa más ligera para el mediodía cuando el sol es fuerte. Para las ciudades de tierra caliente (Cartagena, Barranquilla, Cali) bastará con ropa ligera de verano y un chubasquero compacto para las tardes de lluvia. En cualquier destino, el protector solar es imprescindible: Colombia está sobre el ecuador y la radiación ultravioleta es intensa incluso en días nublados en altura.',
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
      {
        question: '¿Qué tan diferente es el clima en Bogotá versus Cartagena?',
        answer:
          'La diferencia es enorme: Bogotá está a 2.600 metros y tiene un clima fresco y variable, de 7–19°C, con cielos grises frecuentes. Cartagena está al nivel del mar en el Caribe, con calor y humedad constantes de 28–32°C. Son casi dos mundos diferentes dentro del mismo país.',
      },
      {
        question: '¿Es problema viajar a Colombia en temporada de lluvias?',
        answer:
          'No necesariamente. Las lluvias son en su mayoría aguaceros vespertinos cortos e intensos que raramente duran más de 1–2 horas. En las ciudades el impacto es menor; basta con llevar paraguas o chubasquero. Algunas rutas rurales y senderos de naturaleza pueden verse más afectados.',
      },
    ],
  },
  {
    slug: 'espana',
    name: 'España',
    continent: 'Europa',
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
      'El dato más práctico a la hora de viajar a España es que el verano en el interior puede ser agotador: Madrid y Sevilla superan con frecuencia los 40°C en julio y agosto, convirtiendo las mañanas tempranas y la noche en los mejores momentos para pasear. En la costa mediterránea el mar suaviza el calor, mientras que el norte atlántico se mantiene fresco incluso en pleno agosto.',
    ],
    climateRegions: [
      {
        name: 'Mediterránea (Costa este y Baleares)',
        description: 'Barcelona, Valencia, Alicante, Málaga y las Baleares disfrutan del clima mediterráneo clásico: veranos secos y cálidos (28–35°C), inviernos suaves (10–15°C) y la lluvia concentrada en otoño y primavera. El sol brilla más de 300 días al año en muchas partes de esta franja costera.',
      },
      {
        name: 'Atlántica (Norte y Noroeste)',
        description: 'Bilbao, San Sebastián, Santander, Oviedo y Galicia tienen un clima oceánico húmedo: temperaturas suaves todo el año (10–22°C según la estación), lluvia frecuente en otoño, invierno y primavera, y veranos frescos que raramente superan los 28°C. Es el "norte verde" que contrasta con el sur seco.',
      },
      {
        name: 'Interior Continental (Madrid, Castilla, Aragón)',
        description: 'La meseta castellana y Madrid tienen veranos muy calurosos (35–42°C en picos) e inviernos fríos con heladas, además de grandes diferencias entre el día y la noche. Zaragoza suma el viento cierzo, que puede bajar sensiblemente la temperatura percibida en cualquier estación.',
      },
      {
        name: 'Sureste árido (Murcia y Almería)',
        description: 'El sureste de España es el territorio más seco de Europa occidental, con precipitaciones anuales por debajo de los 250 mm en algunas zonas de Almería. Los veranos son tórridos y muy largos; el sol es el recurso dominante de esta región durante casi todo el año.',
      },
    ],
    bestSeason: 'Primavera (abril–junio) y otoño (septiembre–octubre) son las mejores épocas: temperaturas agradables y menos masificación que en pleno verano. El verano es ideal para playa pero muy caluroso en el interior.',
    rainySeason: 'Primavera y otoño concentran la lluvia en la mayor parte del país. El norte atlántico (Bilbao) puede tener lluvia en cualquier estación; el sureste (Murcia, Alicante) es seco casi todo el año.',
    whenToGo: 'Para recorrer el interior de España (Madrid, Toledo, Sevilla, Granada), la primavera (abril–junio) y el otoño (septiembre–octubre) ofrecen el equilibrio perfecto: días largos, temperaturas entre 18 y 28°C y mucho menos calor que en pleno verano. La playa en la costa mediterránea está en su mejor momento entre julio y septiembre, aunque coincide con el pico de turismo y los precios más altos. El norte (Galicia, Asturias, País Vasco) es una alternativa atractiva en verano: fresco, verde y con playas menos masificadas. Para esquiar en los Pirineos o Sierra Nevada, la temporada va de diciembre a marzo.',
    whatToPack: 'En verano en el sur y el interior, ropa ligera y transpirable es básica, junto con protector solar de factor alto, gafas de sol y un sombrero. Para la costa mediterránea bastan las prendas veranieras; añadí una capa para las noches. Si visitás el norte o vas en primavera u otoño, llevá capas y un impermeable compacto: la lluvia llega sin previo aviso en el norte y las noches del interior pueden ser frescas. En invierno en Madrid o el interior conviene equiparse con abrigo, bufanda y guantes.',
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
      {
        question: '¿Cuándo es la temporada de lluvias en España?',
        answer:
          'España no tiene una temporada de lluvias tan marcada como en el trópico. La lluvia se concentra en primavera y otoño en la mayor parte del país. El norte (Bilbao, Galicia) puede tener lluvia casi en cualquier mes; el sureste (Murcia, Almería) es seco casi todo el año. El verano es seco en prácticamente todo el territorio.',
      },
      {
        question: '¿Puedo ir a la playa en España en abril o mayo?',
        answer:
          'En la Costa del Sol (Málaga, Marbella) y Canarias sí hay días perfectos para la playa en abril y mayo, con temperaturas de 20–25°C. En la costa mediterránea norte (Barcelona, Valencia) el agua aún está fría en primavera y las temperaturas son más variables; la playa es más confortable a partir de junio.',
      },
    ],
  },
  {
    slug: 'mexico',
    name: 'México',
    continent: 'Norteamérica',
    cities: [
      { slug: 'mexico-city', name: 'Ciudad de México' },
      { slug: 'guadalajara', name: 'Guadalajara' },
      { slug: 'monterrey', name: 'Monterrey' },
      { slug: 'puebla', name: 'Puebla' },
    ],
    intro: [
      'México combina tres grandes patrones de clima: el norte árido y semidesértico (Monterrey), el altiplano central templado por la altitud (Ciudad de México, Puebla, Guadalajara) y el sur y las costas, de carácter tropical. En el centro del país, como en gran parte de Latinoamérica de montaña, no hay invierno ni verano marcados: lo que define el año es la temporada de lluvias frente a la temporada seca.',
      'La temporada de lluvias va de mayo a octubre, cuando casi todos los días de tarde caen aguaceros cortos pero intensos, sobre todo en el centro y sur. De noviembre a abril el ambiente es seco y soleado. Las costas del Pacífico y del Golfo, además, viven la temporada de huracanes entre junio y noviembre. Por la altitud, Ciudad de México y Puebla son templadas todo el año pese a estar en latitud tropical.',
      'Una particularidad de México es la diversidad dentro del altiplano: Guadalajara tiene un clima más cálido y seco que Ciudad de México, mientras Monterrey, más al norte, tiene veranos extremadamente calurosos y un invierno más marcado con frentes fríos ocasionales. El sur del país, en cambio, mantiene el calor tropical durante todo el año.',
    ],
    climateRegions: [
      {
        name: 'Norte árido y semidesértico',
        description: 'El norte de México (Monterrey, Chihuahua, Hermosillo) tiene un clima continental árido: veranos muy calurosos que superan los 38–40°C, inviernos relativamente fríos con ocasionales heladas y precipitación escasa. Monterrey recibe lluvias de verano y puede verse afectada por remanentes de ciclones del Golfo.',
      },
      {
        name: 'Altiplano central',
        description: 'Ciudad de México, Guadalajara y Puebla, en el altiplano a más de 1.500 metros de altitud, tienen un clima templado: noches frescas (8–15°C) y días agradables (22–26°C) casi todo el año. La temporada de lluvias (mayo-octubre) trae aguaceros vespertinos diarios; el resto del año es seco y soleado.',
      },
      {
        name: 'Sur y costas tropicales',
        description: 'Cancún, Los Cabos, Puerto Vallarta y el Pacífico sur tienen un clima tropical cálido, con temporada de lluvias entre mayo y octubre y riesgo de huracanes entre junio y noviembre. Los meses de noviembre a abril son los más secos y agradables para el turismo de playa.',
      },
    ],
    bestSeason: 'De noviembre a abril, durante la temporada seca: días soleados, poca lluvia y temperaturas agradables en el altiplano. Es también la mejor ventana para las playas, fuera de la temporada de huracanes.',
    rainySeason: 'De mayo a octubre, con lluvias de tarde frecuentes en el centro y sur. La temporada de huracanes en las costas va de junio a noviembre.',
    whenToGo: 'La mejor época para visitar México en general es la temporada seca, de noviembre a abril: días soleados, ambiente fresco en el altiplano y condiciones ideales para la playa sin riesgo de huracanes. En el altiplano central (Ciudad de México, Guadalajara) cualquier época es viable, pero la temporada de lluvias (mayo-octubre) implica aguaceros de tarde casi diarios. Navidad y Semana Santa son épocas de alta demanda; reservá con tiempo. El Día de Muertos (principios de noviembre) es uno de los mejores momentos culturales para visitar, ya en la transición hacia la temporada seca.',
    whatToPack: 'Para el altiplano (Ciudad de México, Guadalajara), llevá capas: las mañanas y noches son frescas incluso en verano, y la lluvia de tarde es casi segura entre mayo y octubre, así que un impermeable compacto es fundamental. Para las playas del Pacífico o el Caribe, ropa ligera de verano y protector solar de factor alto son suficientes. En el norte del país en invierno conviene un buen abrigo para las noches. En cualquier destino, el protector solar es imprescindible por la altitud y la latitud.',
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
      {
        question: '¿Es seguro visitar México en temporada de huracanes?',
        answer:
          'La temporada de huracanes (junio-noviembre) afecta principalmente las costas del Caribe (Cancún) y el Pacífico sur. Septiembre y octubre son los meses de mayor actividad, con posibles lluvias intensas y cancelaciones. Las ciudades del altiplano interior no se ven afectadas.',
      },
      {
        question: '¿Cuándo hace más frío en México?',
        answer:
          'En el altiplano, diciembre a febrero trae las noches más frescas (5–10°C en Ciudad de México). En el norte (Monterrey, Chihuahua) el invierno puede traer heladas y ocasionalmente nieve en zonas altas. Las costas mantienen calor tropical incluso en los meses más fríos.',
      },
    ],
  },
  {
    slug: 'argentina',
    name: 'Argentina',
    continent: 'Sudamérica',
    cities: [
      { slug: 'buenos-aires', name: 'Buenos Aires' },
      { slug: 'cordoba', name: 'Córdoba' },
      { slug: 'rosario', name: 'Rosario' },
      { slug: 'mendoza', name: 'Mendoza' },
    ],
    intro: [
      'Argentina es un país largísimo de norte a sur, así que su clima va del subtropical en el norte al frío patagónico en el extremo sur. Al estar en el hemisferio sur, las estaciones están invertidas respecto a Europa o Norteamérica: el verano va de diciembre a febrero y el invierno de junio a agosto. Buenos Aires y Rosario, sobre la llanura pampeana, tienen un clima templado y húmedo, con veranos calurosos e inviernos frescos pero rara vez gélidos.',
      'Hacia el oeste, Mendoza vive al pie de los Andes un clima seco y soleado, con gran amplitud térmica entre el día y la noche, ideal para los viñedos. Córdoba, en el centro, es templada con veranos de tormentas fuertes. En general las lluvias se concentran en el semestre cálido (octubre a marzo), mientras que el invierno tiende a ser más seco en gran parte del país.',
      'La diversidad climática de Argentina se refleja en la vestimenta: mientras en Mendoza se puede esquiar en julio, en Buenos Aires la misma semana puede tener días de 12–16°C con viento del sur. El patrón de lluvia también varía mucho: el noreste es húmedo casi todo el año, el centro recibe tormentas de verano y el sur puede tener condiciones extremas en cualquier estación.',
    ],
    climateRegions: [
      {
        name: 'Pampa y Buenos Aires',
        description: 'Buenos Aires, Rosario y Córdoba tienen un clima templado y húmedo con cuatro estaciones bien diferenciadas. Los veranos (diciembre-febrero) son calurosos y húmedos, con frecuentes tormentas; los inviernos son frescos pero rara vez nevosos. La humedad del Río de la Plata hace que el calor del verano sea especialmente agobiante en Buenos Aires.',
      },
      {
        name: 'Cuyo y Mendoza',
        description: 'Mendoza y la región de Cuyo, al pie de los Andes, tienen un clima semiárido con abundante sol y poca lluvia. Los veranos son calurosos pero más secos que en Buenos Aires; los inviernos son fríos y la nieve cae en la cordillera, haciendo de Mendoza el principal destino de esquí del país.',
      },
      {
        name: 'Patagonia',
        description: 'Bariloche, Ushuaia y El Calafate tienen un clima frío y ventoso casi todo el año. El verano (diciembre-febrero) es corto y suave, ideal para trekking y turismo glacial; el invierno es largo, frío y nevoso. El viento es un protagonista constante, especialmente en la Patagonia sur.',
      },
      {
        name: 'Noroeste (NOA)',
        description: 'Salta, Jujuy y la Quebrada de Humahuaca tienen un clima de altura árida, seco en invierno y lluvioso en verano. El "invierno boliviano" llega entre diciembre y marzo con tormentas de tarde. Los inviernos son secos y soleados, con noches muy frías por la altitud.',
      },
    ],
    bestSeason: 'Primavera (octubre–noviembre) y otoño (marzo–abril) ofrecen temperaturas agradables en casi todo el país. El verano es ideal para la Patagonia y el sur; el invierno, para esquiar en la cordillera.',
    rainySeason: 'Las lluvias se concentran en el semestre cálido, de octubre a marzo, sobre todo en forma de tormentas de tarde en el centro y noreste. El invierno suele ser más seco.',
    whenToGo: 'La mejor época para Buenos Aires y la pampa es la primavera (octubre-noviembre) y el otoño (marzo-abril), cuando las temperaturas son suaves y agradables. Para la Patagonia y el sur, el verano austral (diciembre-febrero) es la única ventana práctica para el trekking y la navegación glacial. Para esquiar en Bariloche o Las Leñas (Mendoza), los meses de julio y agosto son los mejores. El noroeste es ideal en invierno: días soleados y secos, aunque con noches muy frías.',
    whatToPack: 'Para Buenos Aires en verano (diciembre-febrero), ropa ligera y un chubasquero para las tormentas vespertinas. En invierno (junio-agosto), un buen abrigo, bufanda y guantes. Para la Patagonia, incluso en verano conviene llevar capas: camisetas térmicas, polar, cortaviento impermeable y más abrigo, ya que el clima puede cambiar radicalmente en pocas horas. En el noroeste, el protector solar de factor alto es imprescindible por la altitud.',
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
      {
        question: '¿Cuándo se puede esquiar en Argentina?',
        answer:
          'La temporada de nieve en los centros de esquí (Bariloche, Las Leñas, Valle Nevado) va aproximadamente de junio a septiembre, con julio y agosto como los meses de mejor calidad de nieve. Bariloche es el más accesible; Las Leñas en Mendoza tiene nieve más ligera y seca.',
      },
      {
        question: '¿Qué tan frío hace en Buenos Aires en invierno?',
        answer:
          'El invierno porteño (junio-agosto) es fresco pero moderado: las temperaturas oscilan entre 8°C y 15°C, con mínimas que rara vez bajan de 5°C. Casi nunca nieva en la ciudad. El frío se siente más por la humedad y el viento sur que por los termómetros en sí.',
      },
    ],
  },
  {
    slug: 'chile',
    name: 'Chile',
    continent: 'Sudamérica',
    cities: [
      { slug: 'santiago', name: 'Santiago' },
      { slug: 'valparaiso', name: 'Valparaíso' },
      { slug: 'concepcion', name: 'Concepción' },
      { slug: 'antofagasta', name: 'Antofagasta' },
    ],
    intro: [
      'Pocos países tienen un rango climático tan extremo como Chile, gracias a sus más de 4.000 km de longitud. En el norte está el desierto de Atacama (Antofagasta), el lugar más árido del mundo, donde prácticamente nunca llueve. En el centro, Santiago y Valparaíso disfrutan de un clima mediterráneo: veranos secos y cálidos, inviernos suaves con las únicas lluvias del año. Más al sur, Concepción ya entra en una zona templada y lluviosa.',
      'Como en toda Sudamérica, las estaciones están invertidas: verano de diciembre a febrero, invierno de junio a agosto. En la zona central, la lluvia se concentra casi por completo en los meses de invierno, mientras que el verano es seco y soleado. La costa, bañada por la fría corriente de Humboldt, suele ser más fresca y nublada por las mañanas de lo que sugiere la latitud.',
      'Una curiosidad del clima chileno es la influencia de la corriente de Humboldt: esta corriente de agua fría mantiene la costa más templada de lo esperado para la latitud, razón por la cual Santiago o Valparaíso pueden tener veranos agradables en vez del calor intenso que uno podría anticipar. Más al sur, la Patagonia chilena es una de las zonas más lluviosas y ventosas del planeta.',
    ],
    climateRegions: [
      {
        name: 'Norte — Desierto de Atacama',
        description: 'La región de Antofagasta y el norte de Chile está dominada por el desierto de Atacama, prácticamente sin lluvia durante años en algunas zonas. Los días son soleados y moderadamente cálidos (20–27°C); las noches pueden ser frías en las zonas de altitud. El "invierno boliviano" (enero-marzo) trae lluvia ocasional en el altiplano.',
      },
      {
        name: 'Centro mediterráneo (Santiago y Valparaíso)',
        description: 'El centro de Chile tiene un clima mediterráneo típico: veranos secos y cálidos (25–33°C), inviernos suaves y lluviosos (8–16°C), con casi toda la precipitación concentrada entre mayo y agosto. La niebla marina (camanchaca) aparece frecuentemente en la costa en las mañanas de verano.',
      },
      {
        name: 'Sur templado y lluvioso',
        description: 'Concepción, Temuco, Valdivia y Los Lagos tienen un clima templado oceánico, con lluvias que aumentan progresivamente hacia el sur. Puerto Montt ya recibe precipitaciones abundantes durante todo el año, y la Patagonia chilena es extremadamente lluviosa y ventosa.',
      },
    ],
    bestSeason: 'La primavera (septiembre–noviembre) y el verano (diciembre–febrero) son ideales para la zona central y el sur. Para el desierto de Atacama, prácticamente cualquier época del año funciona por su sequedad.',
    rainySeason: 'En la zona central (Santiago, Valparaíso) la lluvia cae casi exclusivamente en invierno, de junio a agosto. El norte es seco todo el año; el sur es lluvioso buena parte del año.',
    whenToGo: 'Para la zona central (Santiago, Valparaíso), el verano austral (diciembre-marzo) es la época de los días largos, el calor y el turismo activo. Si preferís evitar el calor, la primavera (septiembre-noviembre) es excelente con temperaturas frescas. Para el norte (Atacama), prácticamente cualquier época del año es válida. La Patagonia chilena (Torres del Paine, Carretera Austral) está en su mejor momento entre noviembre y marzo.',
    whatToPack: 'Para el norte y el Atacama, protector solar de factor muy alto y ropa que proteja del sol sin hacer calor: los días son cálidos pero la radiación UV es intensa. Para Santiago y la zona central en verano, ropa ligera suficiente; en invierno, un buen abrigo. Si viajás al sur, las capas son imprescindibles en cualquier época: impermeables y ropa de abrigo aunque sea pleno verano, porque el clima cambia rápidamente. En la Patagonia, una chaqueta cortaviento es tan importante como el abrigo.',
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
      {
        question: '¿Hay cuatro estaciones en Chile?',
        answer:
          'La zona central (Santiago, Valparaíso) tiene cuatro estaciones bien diferenciadas, con un verano seco y cálido y un invierno suave y lluvioso. En el extremo norte (Atacama) prácticamente no hay estaciones; en el extremo sur, el verano es muy corto y las condiciones son irregulares durante el resto del año.',
      },
      {
        question: '¿Cuándo nieva en Santiago?',
        answer:
          'En Santiago nieva en la ciudad muy raramente. En cambio, en los Andes a solo 60–80 km de distancia nieva abundantemente entre junio y septiembre, lo que permite hacer esquí de día desde la ciudad.',
      },
    ],
  },
  {
    slug: 'peru',
    name: 'Perú',
    continent: 'Sudamérica',
    cities: [
      { slug: 'lima', name: 'Lima' },
      { slug: 'arequipa', name: 'Arequipa' },
      { slug: 'cusco', name: 'Cusco' },
      { slug: 'trujillo', name: 'Trujillo' },
    ],
    intro: [
      'Perú tiene tres regiones climáticas muy distintas: la costa desértica, la sierra andina y la selva amazónica. En la costa, Lima y Trujillo viven un clima desértico y templado, casi sin lluvia, marcado por la garúa —una neblina húmeda típica del invierno limeño (junio–septiembre)—. La fría corriente de Humboldt mantiene la costa más fresca de lo esperable para su latitud tropical.',
      'En la sierra (Cusco, y en parte Arequipa) el clima depende de la altitud y se divide en dos temporadas: la seca, de mayo a septiembre, con días soleados y noches frías; y la húmeda, de noviembre a marzo, con lluvias frecuentes. Para visitar Cusco y Machu Picchu, la temporada seca es la más recomendable. La selva amazónica, por su parte, es calurosa y húmeda todo el año.',
      'Uno de los aspectos más llamativos del clima peruano es la coexistencia de extremos muy cercanos: en Cusco, a 3.400 metros, las noches pueden bajar de cero en la temporada seca, mientras que en el valle sagrado, a 30 km y 1.000 metros menos de altitud, las temperaturas son mucho más confortables. La planificación del equipaje es clave porque en un mismo viaje se puede pasar del calor amazónico al frío andino en pocas horas.',
    ],
    climateRegions: [
      {
        name: 'Costa (Lima, Trujillo, Ica)',
        description: 'La costa peruana es árida y templada gracias a la corriente de Humboldt. En invierno (junio-septiembre) domina la garúa: una neblina húmeda y fría que tapa el sol durante semanas sin que caiga lluvia real. En verano (diciembre-marzo) el cielo se despeja y las temperaturas suben a 26–28°C.',
      },
      {
        name: 'Sierra (Cusco, Arequipa, Huancayo)',
        description: 'Los Andes peruanos tienen dos estaciones: la seca (mayo-octubre), con días soleados y noches heladas, y la húmeda (noviembre-marzo), con lluvias frecuentes que pueden dificultar el trekking. La altitud varía enormemente el clima: Arequipa, a 2.300 metros, es más cálida que Cusco o Puno.',
      },
      {
        name: 'Selva amazónica (Iquitos, Puerto Maldonado)',
        description: 'La Amazonia peruana es calurosa (28–33°C) y húmeda todo el año. La mejor época para visitar es la temporada de aguas bajas (mayo-octubre), cuando los ríos bajan y es más fácil ver fauna silvestre en los parques nacionales.',
      },
    ],
    bestSeason: 'De mayo a septiembre (temporada seca en la sierra) es la mejor época para Cusco, Machu Picchu y los Andes. En la costa, el verano (diciembre–marzo) es más soleado y cálido que el invierno de garúa.',
    rainySeason: 'En la sierra, la temporada de lluvias va de noviembre a marzo. La costa es desértica y casi no llueve; la selva es húmeda todo el año.',
    whenToGo: 'La época ideal para la mayor parte de Perú es la temporada seca andina, de mayo a septiembre: Cusco, Machu Picchu y el Camino Inca están en su mejor estado, con cielos despejados y senderos secos. Para Lima y la costa, el verano austral (diciembre-marzo) es el mejor momento ya que el cielo se despeja. Para el Amazonas, la temporada de aguas bajas (mayo-octubre) permite mejores avistamientos de fauna. Evitá enero y febrero en la sierra si querés hacer trekking, ya que los caminos se vuelven resbaladizos.',
    whatToPack: 'Para Cusco y los Andes, llevá capas: camiseta térmica, polar o suéter y chaqueta impermeable son básicos. Las noches en la temporada seca pueden bajar bajo cero. Para Lima y la costa, ropa liviana en verano pero un suéter para los días de garúa. Para el Amazonas, ropa liviana pero de manga larga para protegerse de los mosquitos, repelente eficaz y calzado de agua. El protector solar de factor muy alto es imprescindible en toda la zona andina por la radiación de la altura.',
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
      {
        question: '¿Se puede visitar Machu Picchu en época de lluvias?',
        answer:
          'Sí, pero hay que aceptar ciertos inconvenientes: los senderos son más resbaladizos, las vistas pueden estar tapadas de nubes y el Camino Inca se cierra en febrero para mantenimiento. La ventaja es que hay menos turistas y la vegetación está más verde. Conviene tener flexibilidad en el itinerario.',
      },
      {
        question: '¿Hay peligro de mal de altura en Perú?',
        answer:
          'El mal de altura (soroche) es un riesgo real al visitar Cusco (3.400 m) o Puno (3.800 m). Los síntomas más comunes son dolor de cabeza, cansancio y náuseas durante las primeras 24–48 horas. Se recomienda aclimatarse un día antes de actividades físicas, hidratarse bien y evitar el alcohol el primer día.',
      },
    ],
  },
  {
    slug: 'ecuador',
    name: 'Ecuador',
    continent: 'Sudamérica',
    cities: [
      { slug: 'quito', name: 'Quito' },
      { slug: 'guayaquil', name: 'Guayaquil' },
      { slug: 'cuenca', name: 'Cuenca' },
      { slug: 'manta', name: 'Manta' },
    ],
    intro: [
      'Ecuador está justo sobre la línea del ecuador, por lo que la duración del día y la radiación solar apenas cambian a lo largo del año. Como en Colombia, lo que define el clima de cada ciudad es la altitud. En la Sierra, Quito y Cuenca disfrutan de un clima templado de "eterna primavera", con temperaturas frescas y estables todo el año pese a estar en pleno trópico. En la costa, Guayaquil y Manta viven un clima cálido y húmedo.',
      'El país tiene dos temporadas en lugar de cuatro estaciones: el "invierno" (lluvioso y cálido, de diciembre a mayo) y el "verano" (seco y más fresco, de junio a noviembre). En la Sierra las lluvias son más repartidas, mientras que en la costa la temporada húmeda es muy marcada. Por estar sobre el ecuador, el sol es intenso a mediodía durante todo el año, sobre todo en altura.',
      'Un dato práctico sobre Ecuador: el sol de mediodía es muy intenso en cualquier época del año y a cualquier altitud. El protector solar de factor alto (50+) es indispensable, especialmente en la sierra donde la altitud suma a la intensidad de la radiación. La madrugada y las primeras horas de la mañana son los mejores momentos para las caminatas en zonas de altura.',
    ],
    climateRegions: [
      {
        name: 'Costa (Guayaquil, Manta)',
        description: 'La costa pacífica tiene un clima tropical cálido. La temporada húmeda (diciembre-mayo) es calurosa y lluviosa; la temporada seca (junio-noviembre) es más fresca y con cielos frecuentemente nublados. Las aguas del Pacífico frente a Ecuador son más cálidas en la temporada húmeda.',
      },
      {
        name: 'Sierra andina (Quito, Cuenca)',
        description: 'La sierra andina tiene un clima templado de eterna primavera, con temperaturas estables de 10–22°C durante todo el año. La mayor parte de la lluvia cae entre febrero y mayo, y en menores cantidades entre octubre y noviembre.',
      },
      {
        name: 'Oriente amazónico',
        description: 'La región amazónica (Tena, Puyo, el Oriente) es calurosa y lluviosa todo el año, con temperaturas de 25–30°C y precipitaciones abundantes. Es la zona de mayor biodiversidad del país.',
      },
      {
        name: 'Islas Galápagos',
        description: 'Las Galápagos tienen dos épocas: de enero a mayo (más cálido, aguas cálidas y buen clima para snorkel) y de junio a diciembre (más fresco, con la corriente fría de Humboldt, ideal para ver vida marina y fauna terrestre). El clima es agradable durante todo el año.',
      },
    ],
    bestSeason: 'De junio a septiembre (temporada seca) es ideal para la Sierra y para recorrer Quito y Cuenca. Para la costa y las playas, los meses cálidos de diciembre a abril son los más soleados pese a ser la temporada húmeda.',
    rainySeason: 'La temporada de lluvias ("invierno") va de diciembre a mayo, más marcada en la costa. La temporada seca ("verano") va de junio a noviembre.',
    whenToGo: 'Para recorrer Quito y la sierra, la temporada seca de junio a septiembre ofrece los días más despejados para ver los volcanes y hacer excursiones. La costa y las playas están más animadas durante la temporada húmeda (diciembre-mayo), cuando el sol alterna con aguaceros y el agua es más cálida. Para las Galápagos, cualquier época tiene su encanto, pero enero a mayo ofrece el mejor clima y el agua más cálida para bucear.',
    whatToPack: 'La clave en Ecuador es la superposición de climas. Para Quito, un buen suéter o polar para las mañanas y noches, ropa liviana para el mediodía y un impermeable compacto para las lluvias de tarde. Para la costa, ropa de verano liviana y mucho protector solar. Para el Oriente amazónico, ropa de manga larga para los mosquitos, calzado impermeable y repelente eficaz. Las Galápagos piden ropa de baño, equipo de snorkel y un polar para las noches de la temporada seca.',
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
      {
        question: '¿Cuándo hay más probabilidad de ver sol en Quito?',
        answer:
          'La temporada seca, de junio a septiembre, ofrece los días más claros y soleados en Quito, con mayor probabilidad de ver los volcanes circundantes desde la ciudad. De octubre a mayo hay más días nublados y lluvia de tarde, aunque el sol suele aparecer por las mañanas.',
      },
      {
        question: '¿Cuál es la mejor época para visitar las Islas Galápagos?',
        answer:
          'Las Galápagos son un destino posible todo el año. De enero a mayo el agua está más cálida (24–27°C), ideal para snorkel con manta rayas y tortugas. De junio a diciembre la corriente fría de Humboldt trae más fauna marina, mejor visibilidad bajo el agua y la temporada de apareamiento de muchas especies.',
      },
    ],
  },
  {
    slug: 'brasil',
    name: 'Brasil',
    continent: 'Sudamérica',
    cities: [
      { slug: 'brasilia', name: 'Brasilia' },
      { slug: 'sao-paulo', name: 'São Paulo' },
      { slug: 'rio-de-janeiro', name: 'Río de Janeiro' },
      { slug: 'salvador', name: 'Salvador' },
    ],
    intro: [
      'Brasil es mayoritariamente tropical, pero su enorme tamaño genera contrastes. Río de Janeiro y Salvador, sobre la costa, son cálidas y húmedas casi todo el año, con temperaturas de playa. São Paulo, algo más al interior y en altura, tiene un clima subtropical más variable, con noches frescas en invierno. Brasilia, en el altiplano central, vive una marcada estación seca en invierno. Como está en el hemisferio sur, el verano va de diciembre a marzo.',
      'En el sureste (Río, São Paulo) el verano es la temporada más lluviosa y húmeda, con aguaceros de tarde; el invierno (junio–agosto) es más seco y agradable. En el nordeste (Salvador) las lluvias se reparten distinto, con un pico entre abril y julio. La región amazónica, al norte, es calurosa y húmeda durante todo el año.',
      'El Brasil tropical del noreste y la Amazonia coexiste con el Brasil templado del sur: Porto Alegre y Curitiba tienen inviernos frescos con alguna helada, mientras Manaos y Belém en la Amazonia mantienen calor tropical e intensa humedad todo el año. Esta variedad convierte a Brasil en un destino posible en cualquier mes dependiendo de qué región se elija.',
    ],
    climateRegions: [
      {
        name: 'Amazonia',
        description: 'La región amazónica (Manaos, Belém, Santarém) es la más calurosa y húmeda del país, con temperaturas de 28–34°C y precipitaciones durante todo el año, más intensas entre diciembre y mayo. La vegetación es exuberante y la fauna silvestre es la más diversa del planeta.',
      },
      {
        name: 'Nordeste (Salvador, Recife, Fortaleza)',
        description: 'El nordeste tiene un clima tropical cálido con playa casi todo el año. Las lluvias se concentran entre abril y julio en la parte sur del nordeste (Salvador) y entre febrero y mayo en el extremo norte. De septiembre a enero el ambiente es más seco y soleado.',
      },
      {
        name: 'Centro-oeste (Brasilia, Mato Grosso)',
        description: 'Brasilia y el centro del país tienen un clima de sabana tropical con dos estaciones bien marcadas: la seca (mayo-septiembre) y la húmeda (octubre-abril). En la temporada seca el aire es muy seco; en la húmeda las lluvias son intensas y el paisaje florece.',
      },
      {
        name: 'Sureste (Río de Janeiro, São Paulo)',
        description: 'El sureste es la región más poblada y tiene un clima subtropical: veranos calurosos y lluviosos (diciembre-febrero), inviernos secos y agradables (junio-agosto). São Paulo, por su altitud y el efecto urbano, puede tener noches frescas incluso en verano.',
      },
      {
        name: 'Sur (Porto Alegre, Curitiba, Florianópolis)',
        description: 'El sur del país tiene el clima más templado: cuatro estaciones diferenciadas, veranos cálidos e inviernos frescos con posibilidad de heladas y nieve en las zonas más altas de Santa Catarina y Rio Grande do Sul.',
      },
    ],
    bestSeason: 'El invierno y la primavera del hemisferio sur (de mayo a octubre) ofrecen un clima más seco y agradable en el sureste. Para Carnaval y playa con calor pleno, el verano (diciembre–febrero) es la temporada, aunque más lluviosa.',
    rainySeason: 'En el sureste (Río, São Paulo) las lluvias se concentran en verano, de diciembre a marzo. En el nordeste el pico húmedo va de abril a julio.',
    whenToGo: 'Para Río de Janeiro, São Paulo y el Carnaval, el verano (diciembre-marzo) es el momento más vibrante pero también el más lluvioso. Si preferís menos lluvia, el invierno austral (junio-agosto) es ideal en el sureste: cielos despejados y temperaturas de 20–26°C en Río. Para el nordeste, de septiembre a enero es la temporada más seca y soleada. El Amazonas es visitable todo el año, pero la temporada de aguas bajas (junio-noviembre) facilita el turismo fluvial.',
    whatToPack: 'Para el nordeste y el verano carioca, ropa liviana de playa y protector solar. En São Paulo o Brasilia durante el invierno (junio-agosto), el aire seco justifica llevar una capa extra para las mañanas y noches. En el sur del país en invierno, un abrigo y capas son necesarios. Para el Amazonas, ropa de manga larga, repelente de mosquitos de larga duración y calzado cómodo para la humedad del suelo son imprescindibles.',
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
      {
        question: '¿Es seguro bañarse en las playas de Brasil todo el año?',
        answer:
          'En el nordeste (Fortaleza, Natal, Porto Seguro), la temperatura del agua es cálida todo el año (26–28°C) y las playas son bañables en cualquier mes. En Río las aguas son más frescas en invierno (22–24°C) pero aún bañables. En el sur del país en invierno, el agua puede estar fría y el oleaje ser irregular.',
      },
      {
        question: '¿Cuándo es el Carnaval en Brasil?',
        answer:
          'El Carnaval brasileño se celebra en los cuatro días previos al Miércoles de Ceniza, entre febrero y principios de marzo (la fecha varía cada año). Río de Janeiro, Salvador y Olinda son las tres ciudades con las celebraciones más famosas. Es la semana de mayor demanda de alojamiento en todo el año.',
      },
    ],
  },
  {
    slug: 'estados-unidos',
    name: 'Estados Unidos',
    continent: 'Norteamérica',
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
      'La diferencia más llamativa para el viajero latinoamericano es la variación entre la Florida tropical y el norte nevado en pleno invierno: mientras en Miami hay 25°C con playa en enero, en Chicago o Minneapolis puede haber −20°C con nevadas intensas. Esta amplitud hace que la elección de la época del año sea tan importante como la de la ciudad de destino.',
    ],
    climateRegions: [
      {
        name: 'Noreste continental (Nueva York, Boston, Washington D.C.)',
        description: 'El noreste tiene cuatro estaciones marcadas: veranos cálidos y húmedos (25–32°C), otoños espectaculares con follaje de colores, inviernos fríos con nieve (diciembre-febrero) y primaveras variables. Las tormentas de nieve pueden ser intensas entre diciembre y marzo.',
      },
      {
        name: 'Sur y Florida',
        description: 'Miami, Nueva Orleans y el sur en general tienen un clima subtropical o tropical. Miami tiene veranos calurosos y húmedos con lluvias de tarde frecuentes y riesgo de huracanes (junio-noviembre), e inviernos cálidos y secos (22–27°C) que atraen turismo de todo el mundo.',
      },
      {
        name: 'Medio Oeste y Grandes Llanuras',
        description: 'Chicago, Denver y las grandes llanuras tienen un clima continental extremo: inviernos muy fríos con viento (el wind chill en Chicago puede hacer que −10°C se sienta como −25°C) y veranos calurosos con tormentas eléctricas y, ocasionalmente, tornados en el cinturón central.',
      },
      {
        name: 'Costa Oeste',
        description: 'Los Ángeles y San Diego gozan de un clima mediterráneo: soleado casi todo el año, veranos secos y templados, inviernos suaves con lluvia ocasional. San Francisco es la excepción: niebla y frescura por la influencia del Pacífico frío incluso en pleno agosto.',
      },
    ],
    bestSeason: 'La primavera (abril–junio) y el otoño (septiembre–octubre) son las mejores épocas en gran parte del país, con temperaturas suaves. El verano es ideal para el norte; el invierno, para escapar al sur (Miami, California).',
    rainySeason: 'Varía por región: Miami concentra lluvia y huracanes entre junio y noviembre; el noreste reparte la precipitación todo el año; California es seca en verano y lluviosa en invierno.',
    whenToGo: 'Para Nueva York, la primavera (abril-junio) y el otoño (septiembre-octubre) ofrecen el clima más agradable. Para Florida, de noviembre a abril es la temporada seca e ideal, evitando el calor extremo y los huracanes del verano. Para California del sur (Los Ángeles, San Diego), prácticamente cualquier época funciona bien. Para los Parques Nacionales (Yellowstone, Grand Canyon), mayo a septiembre es el período óptimo.',
    whatToPack: 'Estados Unidos requiere equipaje muy diferente según la ciudad y el mes. Para el noreste en invierno, abrigo grueso, botas de nieve y guantes son esenciales. Para Florida en cualquier época, ropa de verano y protector solar. Para California del sur, capas para las mañanas frescas y manga corta al mediodía. Para los parques nacionales del oeste, botas de trekking y capas impermeables.',
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
      {
        question: '¿Cuándo hay tornados en Estados Unidos?',
        answer:
          'Los tornados son más frecuentes en el "cinturón de tornados" (Tornado Alley): Texas, Oklahoma, Kansas y estados vecinos. La temporada va principalmente de marzo a mayo en el sur y de mayo a julio en el norte de las llanuras.',
      },
      {
        question: '¿Cuándo es la mejor época para ir a Miami?',
        answer:
          'De noviembre a abril es la temporada ideal en Miami: menos humedad, poca lluvia, temperatura agradable (24–28°C) y alejada del pico de huracanes. El verano (junio-septiembre) es caluroso, muy húmedo y con frecuentes tormentas de tarde, aunque también tiene sus fans.',
      },
    ],
  },
  {
    slug: 'canada',
    name: 'Canadá',
    continent: 'Norteamérica',
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
      'Lo que más sorprende a los visitantes latinoamericanos de Canadá es la duración del invierno: en Montreal o Ottawa, la nieve puede llegar en noviembre y permanecer hasta marzo o incluso abril. Sin embargo, la infraestructura canadiense está perfectamente adaptada al frío: calefacción en todos los espacios, transporte subterráneo en las grandes ciudades y una cultura de ropa de invierno muy desarrollada.',
    ],
    climateRegions: [
      {
        name: 'Este continental (Toronto, Montreal, Ottawa)',
        description: 'El este de Canadá tiene un clima continental húmedo: veranos cálidos y agradables (25–30°C), otoños de colores espectaculares (septiembre-octubre) e inviernos muy fríos con abundante nieve (diciembre-marzo). Montreal y Ottawa son dos de las ciudades más frías del mundo entre enero y febrero.',
      },
      {
        name: 'Costa Pacífico (Vancouver y la Columbia Británica)',
        description: 'Vancouver tiene el clima más suave de Canadá: inviernos templados pero muy lluviosos (raramente baja de −5°C) y veranos frescos y agradables con poca lluvia. Es el destino más buscado del país por su calidad de vida climática.',
      },
      {
        name: 'Interior y Praderas (Calgary, Winnipeg)',
        description: 'Calgary y las praderas tienen un clima continental extremo: inviernos muy fríos y largos, con posibilidad de viento chinook que sube la temperatura rápidamente. Los veranos son cortos pero cálidos. Winnipeg es una de las ciudades con mayor amplitud térmica anual del mundo.',
      },
    ],
    bestSeason: 'El verano (junio–agosto) es la mejor época para visitar casi todo el país, con clima cálido y días largos. El otoño regala paisajes espectaculares; el invierno es para los amantes de la nieve y los deportes.',
    rainySeason: 'Vancouver es lluvioso sobre todo de octubre a marzo. En el este, la precipitación se reparte todo el año y cae como nieve en invierno.',
    whenToGo: 'El verano (junio-agosto) es la mejor época para visitar casi todo Canadá: clima agradable, días larguísimos, parques nacionales abiertos y actividades al aire libre en su punto máximo. El otoño (septiembre-octubre) es espectacular en el este por el follaje de colores. Para esquí y deportes de invierno, enero y febrero ofrecen las mejores condiciones en las Rocosas (Whistler, Banff, Lake Louise).',
    whatToPack: 'En invierno, el equipo adecuado es fundamental: abrigo parka de plumas calificado para −25°C o menos (para el este), botas impermeables con buen aislante, guantes dobles, bufanda que cubra la cara y gorro que tape las orejas. En verano, capas son recomendables porque las noches pueden ser frescas y el tiempo puede cambiar; también conviene llevar repelente para los mosquitos en zonas de naturaleza. Para Vancouver en cualquier época, un impermeable es básico.',
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
      {
        question: '¿Se puede ver la aurora boreal en Canadá?',
        answer:
          'Sí, Canadá es uno de los mejores destinos del mundo para ver la aurora boreal. Las mejores zonas son el Territorio del Yukón (Whitehorse), los Territorios del Noroeste (Yellowknife) y el norte de Manitoba. La temporada óptima va de finales de agosto a principios de abril, con los meses de invierno como los de mayor actividad.',
      },
      {
        question: '¿Es necesario seguro de viaje para visitar Canadá?',
        answer:
          'Es muy recomendable. Los turistas deben pagar los servicios médicos si no tienen cobertura del país de origen. Una hospitalización puede costar miles de dólares canadienses. El seguro de viaje con cobertura médica es prácticamente imprescindible.',
      },
    ],
  },
  {
    slug: 'venezuela',
    name: 'Venezuela',
    continent: 'Sudamérica',
    cities: [{ slug: 'caracas', name: 'Caracas' }],
    intro: [
      'Venezuela tiene un clima tropical en el que, como en gran parte del Caribe y los Andes, no hay invierno ni verano sino dos temporadas: la seca y la de lluvias. Caracas, la capital, está en un valle a unos 900 metros de altitud, lo que le da un clima primaveral más agradable que el calor sofocante de la costa. Las temperaturas en la ciudad suelen rondar los 19–27°C durante casi todo el año.',
      'La temporada seca va de diciembre a abril, con cielos despejados y ambiente soleado. La temporada de lluvias, de mayo a noviembre, trae aguaceros de tarde frecuentes pero generalmente breves. En las zonas costeras y los llanos hace bastante más calor que en el valle de Caracas.',
      'La geografía venezolana crea climas muy distintos en distancias cortas: los llanos del Orinoco, planos y calurosos, contrastan con los Andes venezolanos donde ciudades como Mérida gozan de un clima templado de montaña. La costa, con el calor caribeño, está a pocas horas de estas zonas más frescas.',
    ],
    climateRegions: [
      {
        name: 'Costa Caribe y norte',
        description: 'La costa venezolana, con Maracaibo y las ciudades playeras, tiene un clima tropical cálido y relativamente seco durante buena parte del año, con temperaturas de 28–34°C. Maracaibo es una de las ciudades más calurosas de toda Sudamérica.',
      },
      {
        name: 'Andes venezolanos (Mérida)',
        description: 'La ciudad de Mérida, en los Andes venezolanos a unos 1.600 metros, tiene un clima templado y agradable, con temperaturas de 15–25°C. Hay dos temporadas: seca (diciembre-marzo) y de lluvias (abril-noviembre).',
      },
      {
        name: 'Llanos del Orinoco',
        description: 'Los llanos venezolanos son planos, calurosos (30–37°C) y tienen una marcada estacionalidad: la temporada seca (noviembre-abril) los convierte en sabanas doradas con concentraciones espectaculares de fauna; la de lluvias (mayo-octubre) los inunda, transformándolos en un paisaje de agua y vegetación.',
      },
    ],
    bestSeason: 'La temporada seca, de diciembre a abril, es la mejor época: días soleados, poca lluvia y ambiente agradable en Caracas y en la costa.',
    rainySeason: 'De mayo a noviembre, con lluvias de tarde frecuentes pero normalmente cortas.',
    whenToGo: 'La temporada seca (diciembre-abril) es el mejor momento para visitar Venezuela en general: el clima es más cómodo en Caracas y la costa, los llanos muestran su fauna en toda su esplendor al concentrarse cerca de los aguaderos, y el Salto Ángel es más accesible en términos logísticos. Para ver el Salto Ángel en su máximo esplendor, lo ideal es visitarlo entre junio y diciembre, cuando las lluvias lo hacen rugir con toda su potencia.',
    whatToPack: 'Para Caracas y la costa, ropa liviana de verano tropical y un impermeable para los aguaceros de tarde de la temporada de lluvias. Para los llanos, ropa de colores neutros y manga larga para protegerse del sol y los insectos, más repelente eficaz. Para los Andes venezolanos (Mérida), capas para las noches frescas y calzado de trekking si se planean caminatas.',
    faq: [
      {
        question: '¿Cómo es el clima en Caracas?',
        answer:
          'Caracas tiene un clima primaveral todo el año gracias a su altitud (unos 900 metros). Las temperaturas suelen ir de 19°C en las mañanas a 27°C al mediodía. La temporada seca va de diciembre a abril y la de lluvias de mayo a noviembre.',
      },
      {
        question: '¿Cuándo se puede ver el Salto Ángel?',
        answer:
          'El Salto Ángel (la catarata más alta del mundo) se puede visitar todo el año, pero su caudal varía. Entre junio y diciembre (temporada de lluvias) el salto es espectacular. En la temporada seca (enero-mayo) el acceso es más fácil y el clima más cómodo, aunque el caudal es menor.',
      },
      {
        question: '¿Cuánto dura la temporada de lluvias en Venezuela?',
        answer:
          'La temporada de lluvias dura aproximadamente 7 meses, de mayo a noviembre, con lluvias de tarde frecuentes. En la zona de los llanos las lluvias son más intensas y crean inundaciones extensas. La temporada seca (diciembre-abril) es más corta pero muy marcada.',
      },
    ],
  },
  {
    slug: 'uruguay',
    name: 'Uruguay',
    continent: 'Sudamérica',
    cities: [{ slug: 'montevideo', name: 'Montevideo' }],
    intro: [
      'Uruguay tiene un clima templado y húmedo, con las cuatro estaciones bien diferenciadas y, al estar en el hemisferio sur, invertidas respecto a Europa: el verano va de diciembre a febrero y el invierno de junio a agosto. Montevideo, sobre el Río de la Plata, recibe la influencia del agua, que suaviza las temperaturas pero también hace que el viento y la humedad sean protagonistas durante todo el año.',
      'El verano es cálido, con temperaturas de 25–30°C y días ideales para la playa. El invierno es fresco y húmedo, rara vez gélido, con mínimas que suelen rondar los 6–10°C. La lluvia se reparte de forma bastante uniforme a lo largo del año, sin una estación seca muy marcada.',
      'Uruguay es uno de los pocos países de América del Sur con un régimen de lluvias realmente uniforme: no hay una temporada seca bien definida, así que la lluvia puede aparecer en cualquier mes. El tiempo de Montevideo es famoso por su variabilidad, combinando días de sol espléndido con frentes fríos del sur que pueden bajar la temperatura varios grados en pocas horas.',
    ],
    climateRegions: [],
    bestSeason: 'El verano (diciembre–marzo) es ideal para la playa y la rambla; la primavera y el otoño ofrecen temperaturas agradables y menos gente.',
    rainySeason: 'La lluvia se reparte bastante a lo largo del año, sin una temporada seca marcada. El otoño y la primavera suelen ser algo más húmedos.',
    whenToGo: 'El verano uruguayo (diciembre-marzo) es el momento ideal para disfrutar de Montevideo, la rambla y los balnearios del este como Punta del Este: playa, sol y vida nocturna activa. La primavera (octubre-noviembre) y el otoño (marzo-abril) son las épocas más suaves para recorrer el país con temperaturas agradables. El invierno (junio-agosto) es tranquilo y fresco, no desagradable para visitar la ciudad, aunque la playa está fuera de temporada.',
    whatToPack: 'Para Uruguay en verano, ropa liviana y protector solar; la playa es el destino dominante. En primavera y otoño, capas: una camiseta, una capa intermedia y un cortaviento bastan. En invierno, un buen abrigo ya que el viento del Río de la Plata puede hacer que 10°C se sientan como 5°C. En cualquier época, un paraguas o chubasquero compacto es útil dado lo impredecible del tiempo.',
    faq: [
      {
        question: '¿Cómo es el clima en Montevideo?',
        answer:
          'Montevideo tiene un clima templado y húmedo con cuatro estaciones. El verano (diciembre–febrero) es cálido, de 25–30°C; el invierno (junio–agosto) es fresco y húmedo, de 6–14°C, con viento del Río de la Plata. La lluvia se reparte todo el año.',
      },
      {
        question: '¿Punta del Este vale la pena solo en verano?',
        answer:
          'Punta del Este es fundamentalmente un destino de verano (diciembre-marzo): playas llenas, restaurants abiertos y vida nocturna vibrante. Fuera de temporada muchos negocios cierran o reducen horarios, aunque la tranquilidad y la naturaleza tienen su propio atractivo.',
      },
      {
        question: '¿Cuál es la temperatura del mar en Uruguay?',
        answer:
          'El agua del Atlántico frente a las costas uruguayas oscila bastante: en verano (enero-febrero) llega a 22–24°C en el este del país; en invierno (junio-agosto) puede bajar a 12–14°C. Las corrientes del Río de la Plata hacen que el agua en Montevideo sea más turbia y fría que en las playas del este.',
      },
    ],
  },
  {
    slug: 'bolivia',
    name: 'Bolivia',
    continent: 'Sudamérica',
    cities: [{ slug: 'la-paz', name: 'La Paz' }],
    intro: [
      'El clima de Bolivia depende sobre todo de la altitud. En el altiplano, donde está La Paz a más de 3.600 metros, el clima es frío y seco buena parte del año, con un sol intenso de día y temperaturas que caen bruscamente al anochecer. En las tierras bajas del oriente, en cambio, el clima es tropical y caluroso. La Paz es una de las capitales más altas del mundo, y su altitud manda por completo sobre su tiempo.',
      'Hay dos temporadas: la seca, de mayo a octubre, con días soleados y noches muy frías, ideal para viajar; y la húmeda, de noviembre a marzo, con lluvias frecuentes. Por la altura, la radiación solar es muy fuerte a mediodía durante todo el año, así que el protector solar es imprescindible incluso cuando hace frío.',
      'Bolivia tiene también las tierras bajas del oriente (Santa Cruz de la Sierra), que presentan un clima tropical muy diferente al del altiplano: calurosas, húmedas y con lluvias de verano intensas. El país concentra dos extremos: el frío del altiplano a más de 3.600 metros y el calor amazónico en el oriente, con los Yungas (valles subtropicales) como zona intermedia.',
    ],
    climateRegions: [
      {
        name: 'Altiplano (La Paz, Potosí, Uyuni)',
        description: 'El altiplano boliviano tiene un clima frío y seco casi todo el año. Los días son soleados con radiación UV muy intensa; las noches son frías todo el año y en la temporada seca (mayo-octubre) pueden bajar de 0°C. La temporada de lluvias (noviembre-marzo) puede dificultar el acceso al Salar de Uyuni.',
      },
      {
        name: 'Valles y Yungas',
        description: 'Los valles bolivianos, con ciudades como Cochabamba y Sucre, tienen un clima templado y más agradable que el altiplano. Los Yungas son las laderas subtropicales orientales de los Andes, calurosas y muy lluviosas.',
      },
      {
        name: 'Tierras bajas orientales (Santa Cruz)',
        description: 'Santa Cruz de la Sierra y el Beni tienen un clima tropical: caluroso todo el año (28–35°C), con una temporada de lluvias intensa entre noviembre y marzo y una seca más agradable entre mayo y octubre. Los "surazos" son frentes fríos que llegan ocasionalmente del sur y bajan la temperatura súbitamente.',
      },
    ],
    bestSeason: 'La temporada seca, de mayo a octubre, es la mejor para visitar La Paz y el altiplano: días soleados y estables, aunque con noches frías.',
    rainySeason: 'De noviembre a marzo, con lluvias frecuentes en el altiplano.',
    whenToGo: 'Para el altiplano (La Paz, Potosí) y especialmente para el Salar de Uyuni, la temporada seca (mayo-octubre) es la más recomendada: cielos despejados y acceso más sencillo. El efecto espejo del Salar inundado (noviembre-marzo) es visualmente impresionante pero el acceso puede complicarse. Para los Yungas y Santa Cruz, la temporada seca también es más cómoda.',
    whatToPack: 'Bolivia requiere preparación para el frío. En el altiplano, incluso en verano, llevá ropa de abrigo para las noches: capas, suéter, chaqueta impermeable y, en la temporada seca, ropa para temperaturas bajo cero. El protector solar de factor muy alto (50+) es imprescindible por la radiación extrema. Para el Salar de Uyuni, gafas de sol de muy buena calidad son esenciales por el reflejo de la sal. Para Santa Cruz, ropa ligera de verano tropical.',
    faq: [
      {
        question: '¿Hace frío en La Paz, Bolivia?',
        answer:
          'Sí. La Paz está a más de 3.600 metros de altitud, lo que la hace fría todo el año. Los días pueden ser templados al sol (15–18°C), pero las noches bajan mucho, sobre todo en la temporada seca (mayo–octubre). El sol de mediodía es intenso pese al frío.',
      },
      {
        question: '¿Cuándo es la mejor época para ver el Salar de Uyuni?',
        answer:
          'Hay dos experiencias: en la temporada seca (mayo-octubre) el salar está seco con los polígonos de sal y el desierto de colores; en la temporada de lluvias (noviembre-marzo, especialmente enero-febrero) una delgada capa de agua crea el efecto espejo más espectacular del mundo. Ambas épocas son válidas con propósitos distintos.',
      },
      {
        question: '¿Cómo adaptarse al mal de altura en Bolivia?',
        answer:
          'La Paz está a 3.640 metros y el aeropuerto El Alto a 4.100 metros. Se recomienda llegar con calma, descansar el primer día, hidratarse bien y evitar el alcohol las primeras 48 horas. El té de coca es un remedio local muy usado para el soroche. Para Potosí (4.090 m) conviene aclimatarse primero en La Paz.',
      },
    ],
  },
  {
    slug: 'paraguay',
    name: 'Paraguay',
    continent: 'Sudamérica',
    cities: [{ slug: 'asuncion', name: 'Asunción' }],
    intro: [
      'Paraguay tiene un clima subtropical, cálido y húmedo, sin grandes contrastes de altitud. Asunción, la capital, vive veranos largos y muy calurosos, en los que la temperatura supera con facilidad los 35°C y la humedad hace que la sensación térmica sea aún mayor. Al estar en el hemisferio sur, el verano va de diciembre a febrero y el invierno de junio a agosto.',
      'El invierno es corto y suave, con días templados y algunas irrupciones de aire frío del sur que pueden bajar la temperatura de forma puntual. Las lluvias se concentran sobre todo en el semestre cálido, con tormentas intensas de verano, aunque puede llover en cualquier época del año.',
      'Paraguay es uno de los países más calurosos de Sudamérica en verano, y también uno de los menos visitados por el turismo internacional. El país tiene reservas naturales del Chaco y el Pantanal que ofrecen una naturaleza espectacular, aunque con un clima extremo en la zona más occidental.',
    ],
    climateRegions: [
      {
        name: 'Región Oriental y Asunción',
        description: 'La región oriental, más fértil y poblada, tiene un clima subtropical cálido con veranos extremos y tormentas de tarde en la estación cálida. Asunción, ubicada en esta región, es una de las ciudades más calurosas de Sudamérica en verano.',
      },
      {
        name: 'Chaco Paraguayo',
        description: 'El Chaco occidental es más árido y aún más extremo en temperatura: los veranos pueden superar los 44–45°C en las zonas más secas. Es una región de gran biodiversidad pero de turismo muy especializado, con acceso que puede requerir vehículo 4x4 en la temporada de lluvias.',
      },
    ],
    bestSeason: 'El invierno (junio–agosto) y los meses de otoño y primavera son los más cómodos, evitando el calor extremo del verano.',
    rainySeason: 'Las lluvias y tormentas se concentran en el semestre cálido (octubre–marzo), aunque puede llover en cualquier mes.',
    whenToGo: 'El invierno paraguayo (junio-agosto) es la mejor época para visitar el país: temperaturas de 18–26°C, sin el calor extremo del verano y menos lluvia. La primavera (septiembre-octubre) también es agradable. Para el Chaco, el invierno es prácticamente el único momento viable para una visita confortable.',
    whatToPack: 'Para el verano paraguayo, ropa muy liviana y transpirable, protector solar de factor alto, sombrero y mucho líquido: la hidratación es clave con el calor húmedo. Para el invierno, ropa de capas livianas ya que los días suelen ser agradables pero las noches pueden ser frescas con el viento sur. Para el Chaco, calzado robusto, repelente de mosquitos y ropa de manga larga.',
    faq: [
      {
        question: '¿Qué tan caluroso es el verano en Asunción?',
        answer:
          'Mucho. El verano en Asunción (diciembre–febrero) es largo y caluroso, con temperaturas que superan a menudo los 35°C y alta humedad, lo que eleva la sensación térmica. Conviene hidratarse bien y evitar el sol del mediodía.',
      },
      {
        question: '¿Tiene Paraguay playas?',
        answer:
          'Paraguay es un país mediterráneo (sin salida al mar), pero tiene ríos importantes como el Paraguay y el Paraná con playas fluviales. El lago Ypacaraí, al este de Asunción, también es un destino popular entre los locales durante el verano.',
      },
      {
        question: '¿Cuándo son las tormentas más intensas en Paraguay?',
        answer:
          'Las tormentas eléctricas más intensas ocurren en la transición entre estaciones: septiembre-octubre y marzo-abril son los períodos con más actividad eléctrica. En verano, los chubascos de tarde son frecuentes pero suelen ser cortos.',
      },
    ],
  },
  {
    slug: 'cuba',
    name: 'Cuba',
    continent: 'Centroamérica y Caribe',
    cities: [{ slug: 'havana', name: 'La Habana' }],
    intro: [
      'Cuba tiene un clima tropical típico del Caribe, con calor y humedad durante todo el año y solo dos temporadas: la seca y la de lluvias. La Habana, en la costa norte, disfruta de temperaturas cálidas que rondan los 26–32°C en verano y rara vez bajan de 20°C en invierno. La brisa del mar suaviza algo el calor en la capital.',
      'La temporada seca va de noviembre a abril y es la más agradable: menos lluvia, menos humedad y temperaturas más cómodas. La temporada de lluvias, de mayo a octubre, coincide con la temporada de huracanes del Atlántico, que tiene su pico entre agosto y octubre. Por eso el invierno caribeño es la época preferida para viajar.',
      'Cuba tiene una diferencia climática entre el occidente y el oriente de la isla. La Habana, en el oeste, tiene la influencia del Golfo de México y la corriente del Florida; Santiago de Cuba, en el extremo oriental, es generalmente más calurosa. Las montañas de Sierra Maestra en el oriente crean microclimas locales con más lluvia.',
    ],
    climateRegions: [
      {
        name: 'Occidente (La Habana y Pinar del Río)',
        description: 'La parte occidental de Cuba tiene el clima más moderado de la isla: temperaturas de 20–32°C, invierno caribeño suave (20–26°C) de noviembre a abril y verano caluroso de mayo a octubre. La Habana recibe la brisa del Malecón que suaviza el calor costero.',
      },
      {
        name: 'Oriente (Santiago, Guantánamo)',
        description: 'El oriente de Cuba es generalmente más caluroso y seco, con más exposición al sol. Santiago de Cuba es una de las ciudades más calurosas de todo el Caribe, y la Sierra Maestra crea microclimas con más precipitación en las zonas altas.',
      },
    ],
    bestSeason: 'La temporada seca, de noviembre a abril, es la mejor: clima cálido pero más seco y agradable, fuera de la temporada de huracanes.',
    rainySeason: 'De mayo a octubre, coincidiendo con la temporada de huracanes del Atlántico (pico de agosto a octubre).',
    whenToGo: 'La temporada seca cubana, de noviembre a abril, es el período ideal: calor agradable (24–28°C), poca lluvia y baja probabilidad de huracanes. Diciembre y enero son los meses más frescos; febrero y marzo los más equilibrados. El verano (junio-agosto) tiene calor extremo con alta humedad y es la temporada de mayor riesgo de huracanes.',
    whatToPack: 'Cuba pide ropa de verano durante casi todo el año: camisetas, shorts, ropa de baño y chanclas. Un chubasquero ligero es útil para los aguaceros de la temporada de lluvias. El protector solar es imprescindible, especialmente en Varadero o en el oriente de la isla. En diciembre y enero, una capa liviana para las noches más frescas puede ser cómoda.',
    faq: [
      {
        question: '¿Cuál es la mejor época para visitar Cuba?',
        answer:
          'De noviembre a abril, durante la temporada seca: hace calor pero con menos humedad y lluvia, y queda fuera de la temporada de huracanes. Es la ventana ideal para disfrutar de La Habana y las playas.',
      },
      {
        question: '¿Hay riesgo de huracanes en Cuba?',
        answer:
          'Sí, Cuba está en el Atlántico tropical y es vulnerable a los huracanes, especialmente entre agosto y octubre. La temporada de huracanes va de junio a noviembre. Aunque los impactos directos de grandes huracanes son relativamente infrecuentes, es recomendable tener un seguro de viaje que cubra cancelaciones por eventos meteorológicos.',
      },
      {
        question: '¿Se puede hacer ecoturismo en Cuba?',
        answer:
          'Sí, el Parque Nacional Alejandro de Humboldt en el oriente es una de las reservas de biosfera con mayor biodiversidad del Caribe. La Sierra del Rosario al oeste y el Valle de Viñales también ofrecen senderismo. El mejor momento es la temporada seca (noviembre-abril), cuando los senderos están secos y el clima es más cómodo.',
      },
    ],
  },
  {
    slug: 'republica-dominicana',
    name: 'República Dominicana',
    continent: 'Centroamérica y Caribe',
    cities: [{ slug: 'santo-domingo', name: 'Santo Domingo' }],
    intro: [
      'República Dominicana tiene un clima tropical cálido y húmedo durante todo el año, muy estable en cuanto a temperatura. Santo Domingo, la capital, en la costa sur, mantiene valores de 24–31°C casi sin variación entre estaciones; lo que cambia es la cantidad de lluvia y la humedad. Como en todo el Caribe, no hay invierno ni verano, sino una temporada seca y una de lluvias.',
      'La temporada relativamente más seca y agradable va de diciembre a abril. La temporada de lluvias se extiende de mayo a noviembre y coincide con la temporada de huracanes del Atlántico, cuyo período de mayor riesgo es de agosto a octubre. Las playas del país son disfrutables todo el año, pero el invierno caribeño ofrece el mejor equilibrio de clima.',
      'La República Dominicana tiene la particularidad de que las playas de la costa norte (Samaná, Las Terrenas) están orientadas al Atlántico y tienen un ritmo de lluvias diferente al del sur: en invierno (diciembre-febrero) el norte puede recibir más lluvia por el viento alisio del norte, mientras el sur (Punta Cana, Santo Domingo) es más seco.',
    ],
    climateRegions: [
      {
        name: 'Costa sur y este (Santo Domingo, Punta Cana)',
        description: 'La costa sur y el extremo este, incluyendo Punta Cana, tienen el clima más seco y soleado de diciembre a abril y son los principales destinos turísticos del país. La temperatura del agua ronda los 26–28°C casi todo el año.',
      },
      {
        name: 'Costa norte y Samaná',
        description: 'La costa norte (Puerto Plata, Cabarete, Samaná) recibe los vientos alisios del norte que traen más lluvia en diciembre-enero, cuando el sur es más seco. Es el destino ideal para el avistamiento de ballenas jorobadas que migran al banco de la Plata entre enero y marzo.',
      },
      {
        name: 'Interior montañoso (Cordillera Central)',
        description: 'La Cordillera Central tiene las temperaturas más frescas del país, con condiciones que pueden recordar a la montaña. El pico Duarte, el más alto del Caribe con 3.087 metros, puede tener niebla y frescura incluso en verano.',
      },
    ],
    bestSeason: 'De diciembre a abril, la temporada más seca y agradable, fuera del pico de huracanes.',
    rainySeason: 'De mayo a noviembre, coincidiendo con la temporada de huracanes (mayor riesgo de agosto a octubre).',
    whenToGo: 'Para las playas de Punta Cana y el sur, de noviembre a abril es la temporada ideal: días soleados, poca lluvia y temperatura del agua perfecta. Para ver ballenas jorobadas en la Bahía de Samaná, la ventana es de enero a marzo. El surf en Cabarete es mejor entre junio y agosto. El verano (julio-agosto) tiene más calor y humedad pero también precios más bajos y menos turistas en el interior.',
    whatToPack: 'Ropa de playa y verano tropical es lo fundamental: camisetas, shorts, trajes de baño y sandalias. Protector solar de factor alto, gafas de sol y sombrero son imprescindibles. Un chubasquero compacto para los aguaceros de tarde en la temporada más húmeda. Para el interior montañoso, una capa extra para las noches más frescas.',
    faq: [
      {
        question: '¿Cuándo es la mejor época para viajar a Santo Domingo?',
        answer:
          'De diciembre a abril, durante la temporada seca: clima cálido y soleado con menos lluvia y humedad, y fuera de la temporada alta de huracanes. Es la mejor ventana para disfrutar de la ciudad y las playas.',
      },
      {
        question: '¿Cuándo se pueden ver las ballenas en República Dominicana?',
        answer:
          'Las ballenas jorobadas visitan el Banco de la Plata, al norte de República Dominicana, entre enero y marzo para aparearse y dar a luz. La Bahía de Samaná es el mejor punto de observación. Este fenómeno concentra una de las mayores congregaciones de ballenas jorobadas del mundo.',
      },
      {
        question: '¿Qué tan frecuentes son los huracanes en República Dominicana?',
        answer:
          'República Dominicana está en la trayectoria de huracanes durante la temporada (junio-noviembre). Los meses de mayor riesgo son agosto, septiembre y octubre. Un impacto directo de un huracán mayor es relativamente infrecuente; lo que sí ocurre más regularmente son lluvias intensas y vientos de sistemas tropicales que pasan cerca.',
      },
    ],
  },
  {
    slug: 'costa-rica',
    name: 'Costa Rica',
    continent: 'Centroamérica y Caribe',
    cities: [{ slug: 'san-jose', name: 'San José' }],
    intro: [
      'Costa Rica tiene un clima tropical, pero con muchos microclimas debido a sus montañas, costas y bosques. San José, en el Valle Central a unos 1.150 metros de altitud, disfruta de un clima primaveral muy agradable todo el año, con temperaturas de 18–27°C. Las costas, tanto del Pacífico como del Caribe, son más calurosas y húmedas.',
      'El país tiene dos estaciones bien definidas: el "verano" o temporada seca, de diciembre a abril, con días soleados; y el "invierno" o temporada verde, de mayo a noviembre, con lluvias de tarde frecuentes que mantienen la exuberante vegetación. La vertiente caribeña tiene su propio patrón y puede llover en épocas distintas al resto del país.',
      'Costa Rica es un caso único en Centroamérica por su política ambiental: más del 25% del territorio está protegido como parque nacional o reserva. Esta biodiversidad, combinada con su posición entre dos océanos, crea una diversidad climática excepcional. El turismo de naturaleza es el principal atractivo del país, y el clima es central para planificar bien la visita.',
    ],
    climateRegions: [
      {
        name: 'Valle Central y zonas altas (San José, Arenal)',
        description: 'El Valle Central, donde está San José, tiene un clima primaveral todo el año por su altitud (1.000–1.200 metros): temperaturas de 18–27°C. La temporada seca (diciembre-abril) tiene días casi siempre soleados; la temporada verde (mayo-noviembre) tiene lluvias de tarde pero mañanas soleadas.',
      },
      {
        name: 'Pacífico Norte y Guanacaste',
        description: 'El Pacífico norte es el área más seca de Costa Rica: la temporada seca (diciembre-abril) es muy marcada, con escasa lluvia, cielos despejados y calor (28–34°C). Es el destino de playa más popular del país en temporada seca.',
      },
      {
        name: 'Pacífico Sur y Osa',
        description: 'El Pacífico sur (Quepos, Manuel Antonio, Osa) tiene lluvias más repartidas a lo largo del año. Es la zona más lluviosa del Pacífico costarricense y tiene una biodiversidad extraordinaria con abundante fauna.',
      },
      {
        name: 'Caribe (Limón, Tortuguero)',
        description: 'La costa caribeña tiene un patrón propio: llueve mucho durante todo el año, con dos períodos relativamente más secos en septiembre-octubre y febrero-marzo. Las playas caribeñas son famosas por el desove de tortugas y las aguas más cálidas y tranquilas.',
      },
    ],
    bestSeason: 'La temporada seca, de diciembre a abril, ofrece días soleados ideales para playas y parques nacionales. La temporada verde (mayo–noviembre) es más económica y con naturaleza exuberante.',
    rainySeason: 'De mayo a noviembre (temporada verde), con lluvias de tarde frecuentes. La costa caribeña sigue un patrón propio.',
    whenToGo: 'La temporada seca (diciembre-abril) es el momento más popular con los cielos más despejados en la mayor parte del país. La temporada verde (mayo-noviembre) tiene sus propias ventajas: más verde, menos turistas, precios más bajos y cascadas llenas de agua. Para el Caribe, septiembre y octubre son relativamente más secos. Para ver el desove de tortugas en Tortuguero, julio-octubre es la temporada de la tortuga verde.',
    whatToPack: 'Un impermeable compacto o un poncho es imprescindible en casi cualquier época, especialmente fuera de la temporada seca. Para las playas del Pacífico y el Caribe, ropa de verano y protector solar de factor alto. Para el interior montañoso (San José, volcanes, Monteverde), capas para las noches frescas. En zonas de selva y Caribe, repelente de mosquitos eficaz y ropa de manga larga para la noche. Calzado impermeable o de senderismo para los parques nacionales.',
    faq: [
      {
        question: '¿Cómo es el clima en San José de Costa Rica?',
        answer:
          'San José tiene un clima primaveral todo el año gracias a su altitud en el Valle Central, con temperaturas de 18–27°C. La temporada seca va de diciembre a abril y la temporada verde (lluviosa) de mayo a noviembre, con aguaceros de tarde.',
      },
      {
        question: '¿Vale la pena ir a Costa Rica en temporada de lluvias?',
        answer:
          'Es un mito que no valga la pena. Las lluvias en la temporada verde son principalmente de tarde: las mañanas suelen ser soleadas y perfectas para excursiones. El aguacero de la tarde suele ser intenso pero breve. Además, la vegetación es más exuberante, los ríos están llenos para el rafting y los precios de alojamiento son significativamente más bajos.',
      },
      {
        question: '¿Cuál es la zona más soleada de Costa Rica?',
        answer:
          'La provincia de Guanacaste (Liberia, Tamarindo, Nosara) es la más seca y soleada, especialmente durante la temporada seca (diciembre-abril). Algunas zonas del Pacífico norte reciben menos de 1.000 mm de lluvia anuales, comparado con más de 6.000 mm en algunas partes del Caribe.',
      },
    ],
  },
  {
    slug: 'panama',
    name: 'Panamá',
    continent: 'Centroamérica y Caribe',
    cities: [{ slug: 'panama-city', name: 'Ciudad de Panamá' }],
    intro: [
      'Panamá tiene un clima tropical cálido y húmedo durante todo el año, con temperaturas que se mantienen muy estables, en torno a 26–32°C. Ciudad de Panamá, sobre el Pacífico, vive el calor típico del trópico bajo, donde lo que marca el año no es la temperatura sino la cantidad de lluvia y humedad. La cercanía al mar y la condición ístmica del país hacen que la humedad sea casi siempre alta.',
      'La temporada seca va de mediados de diciembre a abril, con días más soleados y brisa, y es la época preferida para viajar. La temporada de lluvias, de mayo a mediados de diciembre, trae aguaceros de tarde frecuentes, a menudo intensos pero breves. La vertiente caribeña es aún más lluviosa que la pacífica.',
      'Una característica única del clima panameño es el contraste entre el Pacífico y el Caribe, separados por apenas 70 kilómetros a la altura del Canal. Cuando en Ciudad de Panamá (Pacífico) hay temporada seca y sol, en Colón (Caribe) puede estar lloviendo. Este mismo contraste convierte al Canal de Panamá en una obra de ingeniería fascinante para gestionar.',
    ],
    climateRegions: [
      {
        name: 'Vertiente del Pacífico (Ciudad de Panamá, Chiriquí)',
        description: 'Ciudad de Panamá y la mayor parte de la Panamá del Pacífico tienen la temporada seca bien marcada (mediados de diciembre a abril) y la de lluvias (mayo a mediados de diciembre). Las Islas Contadora frente a la ciudad tienen el clima pacífico con excelentes playas.',
      },
      {
        name: 'Vertiente del Caribe (Colón, San Blas)',
        description: 'La vertiente caribeña es mucho más lluviosa durante todo el año, con solo un período relativamente más seco entre febrero y marzo. Las Islas San Blas (Guna Yala) en el Caribe son el principal destino turístico de esta zona, con aguas turquesas durante todo el año.',
      },
      {
        name: 'Tierras altas de Chiriquí (Boquete)',
        description: 'Boquete, a 1.200 metros de altitud, tiene un clima fresco y agradable (15–24°C) conocido como "la ciudad de la eterna primavera". Es famosa por el café panameño de altura. La temporada seca (noviembre-marzo) es la mejor para visitar.',
      },
    ],
    bestSeason: 'La temporada seca, de mediados de diciembre a abril, es la mejor: más sol, menos lluvia y ambiente más cómodo pese al calor.',
    rainySeason: 'De mayo a mediados de diciembre, con aguaceros de tarde frecuentes. El lado caribeño es más lluvioso.',
    whenToGo: 'Para Ciudad de Panamá y el Pacífico, la temporada seca (mediados de diciembre a abril) es la ideal: menos lluvia, días soleados y condiciones agradables para explorar la ciudad y las playas. Para San Blas y el Caribe, el período relativamente más seco de febrero a marzo es el más recomendable. Boquete es agradable casi todo el año pero brilla especialmente en la temporada seca.',
    whatToPack: 'Para Ciudad de Panamá y el Pacífico, ropa ligera de verano tropical y protector solar son suficientes. En la temporada de lluvias, un impermeable compacto o un poncho es útil para los aguaceros de tarde. Para Boquete y las tierras altas, capas para las noches frescas: suéter o polar recomendable. Para San Blas, ropa de playa y equipo de snorkel; el sol caribeño pide protección UV alta.',
    faq: [
      {
        question: '¿Cuándo es la temporada seca en Panamá?',
        answer:
          'La temporada seca va de mediados de diciembre a abril, con días soleados y brisa. Es la mejor época para visitar Ciudad de Panamá. La temporada de lluvias va de mayo a mediados de diciembre, con aguaceros vespertinos.',
      },
      {
        question: '¿Se puede visitar el Canal de Panamá?',
        answer:
          'Sí, el Centro de Visitantes de Miraflores permite ver los buques atravesar las esclusas durante todo el año. La temporada seca (diciembre-abril) tiene los días más soleados y agradables para la visita.',
      },
      {
        question: '¿Cuál es la temperatura del mar en Panamá?',
        answer:
          'En el Pacífico oscila entre 22°C en la temporada seca (cuando suben corrientes frías) y 28°C en la época de lluvias. En el Caribe (San Blas) el agua está más constante y cálida, entre 27°C y 30°C durante todo el año, ideal para el snorkel y el buceo.',
      },
    ],
  },
  {
    slug: 'nicaragua',
    name: 'Nicaragua',
    continent: 'Centroamérica y Caribe',
    cities: [{ slug: 'managua', name: 'Managua' }],
    intro: [
      'Nicaragua tiene un clima tropical, caluroso durante todo el año en las tierras bajas. Managua, la capital, situada junto al lago Xolotlán, es una de las ciudades más calurosas de Centroamérica, con temperaturas que suelen rondar los 28–34°C. Como en el resto del istmo, no hay estaciones de frío y calor, sino una temporada seca y una de lluvias.',
      'La temporada seca, llamada localmente "verano", va de noviembre a abril, con días soleados y calurosos. La temporada de lluvias o "invierno" va de mayo a octubre, con aguaceros de tarde que refrescan el ambiente. Las zonas de montaña del norte y la costa caribeña son más frescas y lluviosas que el Pacífico, donde está Managua.',
      'Nicaragua tiene un atractivo turístico natural creciente: volcanes accesibles (el Cerro Negro para sandboard), la isla de Ometepe en el lago Nicaragua, y la costa caribeña de las Corn Islands. El clima tropical y los precios hacen de Nicaragua uno de los destinos más económicos de Centroamérica.',
    ],
    climateRegions: [
      {
        name: 'Pacífico y Managua',
        description: 'La vertiente del Pacífico, donde están Managua, León y Granada, tiene el clima más seco de Nicaragua: temporada seca marcada de noviembre a abril (días soleados de 28–34°C) y temporada de lluvias de mayo a octubre con aguaceros de tarde.',
      },
      {
        name: 'Interior y zona norte',
        description: 'Las zonas montañosas del norte (Matagalpa, Jinotega) son más frescas por la altitud, con temperaturas de 18–25°C y más nubosidad. Es la zona cafetera por excelencia del país.',
      },
      {
        name: 'Costa Caribe (Costa Atlántica)',
        description: 'La Costa Atlántica nicaragüense (Puerto Cabezas, Bluefields, Corn Islands) es la más lluviosa de Centroamérica, con más de 4.000 mm anuales en algunas zonas. El clima es caluroso y húmedo durante todo el año, con lluvias frecuentes en prácticamente cualquier mes.',
      },
    ],
    bestSeason: 'La temporada seca, de noviembre a abril, ofrece días soleados ideales para viajar, aunque calurosos en Managua.',
    rainySeason: 'De mayo a octubre, con lluvias de tarde frecuentes. La costa caribeña es bastante más lluviosa.',
    whenToGo: 'Para el Pacífico y las principales ciudades turísticas (Managua, Granada, León, Ometepe), la temporada seca (noviembre-abril) es la más cómoda: calor pero sin lluvia, y los volcanes son más accesibles. Para las Corn Islands y la costa caribeña, los períodos relativamente más secos van de marzo a mayo. Septiembre y octubre son los meses de mayor riesgo de huracanes en el Caribe centroamericano.',
    whatToPack: 'Nicaragua pide ropa ligera y transpirable durante todo el año en las tierras bajas: shorts, camisetas, calzado fresco y mucho protector solar. Para la temporada de lluvias en el Pacífico, un impermeable o poncho para los aguaceros de tarde. Para las zonas montañosas del norte, una capa extra para las noches más frescas. Para la costa caribeña, repelente de mosquitos es esencial junto con la ropa de playa.',
    faq: [
      {
        question: '¿Qué tan caluroso es Managua?',
        answer:
          'Managua es una de las ciudades más calurosas de Centroamérica, con temperaturas habituales de 28–34°C todo el año. La temporada seca (noviembre–abril) es la más calurosa y soleada; la de lluvias (mayo–octubre) refresca algo el ambiente con aguaceros de tarde.',
      },
      {
        question: '¿Es seguro hacer senderismo en los volcanes de Nicaragua?',
        answer:
          'Varios volcanes nicaragüenses son accesibles para el senderismo. El Cerro Negro es famoso por el sandboard (descenso en tabla por la ladera de lava). La temporada seca (noviembre-abril) es la más recomendable. Algunos volcanes requieren guía local; es importante informarse sobre el estado actual antes de visitar.',
      },
      {
        question: '¿Hay playas en Nicaragua?',
        answer:
          'Sí, Nicaragua tiene dos costas: el Pacífico (San Juan del Sur, Las Peñitas) con olas para surf y buen clima de noviembre a abril; y el Caribe (Corn Islands, Bluefields) con aguas más cálidas y tranquilas pero más lluvia. Las Corn Islands son consideradas algunas de las playas más hermosas de Centroamérica, con arrecifes de coral y aguas cristalinas.',
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

export const continentOrder: Continent[] = [
  'Sudamérica',
  'Centroamérica y Caribe',
  'Norteamérica',
  'Europa',
];

export function getCountriesByContinent(): { continent: Continent; countries: Country[] }[] {
  return continentOrder
    .map(continent => ({ continent, countries: countries.filter(c => c.continent === continent) }))
    .filter(group => group.countries.length > 0);
}

export function getCountryBySlug(slug: string): Country | undefined {
  return countryBySlug.get(slug);
}

export function getCountryForCity(citySlug: string): Country | undefined {
  return countryByCitySlug.get(citySlug);
}
