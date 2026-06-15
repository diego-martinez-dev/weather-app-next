export interface CityClimate {
  bestTimeToVisit: string;
  rainySeasons: string;
  avgTempRange: string;
  faq: { question: string; answer: string }[];
}

export const cityClimate: Record<string, CityClimate> = {
  // ── Colombia ──────────────────────────────────────────────────────────────
  bogota: {
    bestTimeToVisit:
      'La mejor época para visitar Bogotá es entre diciembre y febrero, y también en junio y julio. Estos meses corresponden a las temporadas secas de la ciudad, con más días despejados y menor probabilidad de lluvia. La temperatura sigue siendo fresca (7–19°C), pero el cielo abierto permite disfrutar la arquitectura colonial de La Candelaria y el Parque Simón Bolívar sin empaparte.',
    rainySeasons:
      'Bogotá tiene dos temporadas de lluvia al año: de marzo a mayo, y de septiembre a noviembre. Abril y octubre son los meses más lluviosos, con precipitaciones frecuentes en las tardes y cielos permanentemente nublados. En ambas temporadas conviene llevar chaqueta impermeable.',
    avgTempRange: '7°C – 19°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Bogotá?',
        answer:
          'Bogotá tiene una temperatura que oscila entre 7°C y 19°C durante todo el año, sin estaciones de calor ni de frío extremo. Al estar a 2.600 metros de altitud, el clima es fresco y lluvioso independientemente del mes.',
      },
      {
        question: '¿Cuándo es la temporada de lluvias en Bogotá?',
        answer:
          'Bogotá tiene dos temporadas de lluvias: de marzo a mayo, y de septiembre a noviembre. Abril y octubre son los meses con más precipitaciones. Las temporadas secas son diciembre–febrero y junio–agosto.',
      },
      {
        question: '¿Hace frío en Bogotá?',
        answer:
          'Sí, Bogotá es una ciudad fría. La temperatura máxima rara vez supera los 19–20°C y por las noches puede bajar a 5–7°C. Siempre es recomendable llevar ropa de abrigo, especialmente en temporada de lluvia cuando el frío húmedo cala más.',
      },
      {
        question: '¿Cuál es la mejor época para visitar Bogotá?',
        answer:
          'Las mejores épocas son diciembre–febrero y junio–agosto, durante las temporadas secas. En esos meses hay más días soleados y el frío es más manejable. Diciembre coincide con la Navidad y las fiestas, que animanconsiderablemente la ciudad.',
      },
    ],
  },
  medellin: {
    bestTimeToVisit:
      'Medellín se puede visitar casi todo el año gracias a su famoso clima de eterna primavera, pero los mejores meses son diciembre–febrero y julio–agosto, cuando las lluvias son mínimas y los días son soleados. En esas épocas la temperatura ronda los 22–26°C de día, perfecta para recorrer el Metro Cable y el Jardín Botánico.',
    rainySeasons:
      'Las temporadas de lluvia son de abril a mayo y de octubre a noviembre. Las lluvias son abundantes en las tardes, pero por lo general los aguaceros duran poco y las mañanas suelen estar despejadas.',
    avgTempRange: '16°C – 28°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Medellín?',
        answer:
          'Medellín tiene una temperatura promedio de 22°C todo el año. Los días oscilan entre 16°C en la madrugada y 28°C en las horas más cálidas del mediodía. No hay inviernos ni veranos: el clima es estable y templado durante los doce meses.',
      },
      {
        question: '¿Cuándo es la temporada de lluvias en Medellín?',
        answer:
          'Las temporadas de lluvia en Medellín son de abril a mayo y de octubre a noviembre. Las lluvias suelen caer en las tardes y las mañanas generalmente están despejadas.',
      },
      {
        question: '¿Por qué llaman a Medellín la ciudad de la eterna primavera?',
        answer:
          'Porque su temperatura promedio anual de 22°C y la ausencia de cambios estacionales extremos recuerdan a una primavera perpetua. La altitud de 1.495 metros suaviza el calor tropical que tendría a esa latitud.',
      },
      {
        question: '¿Cuál es la mejor época para visitar Medellín?',
        answer:
          'Diciembre–febrero y julio–agosto son las temporadas más secas y soleadas. Sin embargo, incluso en temporada de lluvia, las mañanas suelen estar despejadas y las tardes lluviosas son breves.',
      },
    ],
  },
  cali: {
    bestTimeToVisit:
      'La mejor época para visitar Cali es entre diciembre y febrero, y también en julio y agosto, que son sus dos temporadas secas. En esos meses el clima cálido de 25°C se combina con cielos despejados que permiten disfrutar los parques, la salsa y la gastronomía local al aire libre.',
    rainySeasons:
      'Cali tiene lluvias de marzo a mayo y de septiembre a noviembre. La intensidad es moderada y las lluvias suelen ser vespertinas, dejando las mañanas soleadas.',
    avgTempRange: '20°C – 32°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Cali?',
        answer:
          'Cali tiene temperaturas entre 20°C y 32°C durante todo el año. El promedio ronda los 25°C, con días calurosos y noches frescas gracias a la brisa del Pacífico.',
      },
      {
        question: '¿Cuándo es la temporada de lluvias en Cali?',
        answer:
          'Cali tiene dos temporadas lluviosas: marzo–mayo y septiembre–noviembre. Sus temporadas secas son diciembre–febrero y junio–agosto.',
      },
      {
        question: '¿Hace calor en Cali todo el año?',
        answer:
          'Sí, Cali es una ciudad calurosa con temperaturas que rara vez bajan de 20°C. Sin embargo, las noches son más frescas que en ciudades costeras gracias a su altitud de 995 metros y a la brisa característica de la ciudad.',
      },
    ],
  },
  barranquilla: {
    bestTimeToVisit:
      'La mejor época para visitar Barranquilla es de diciembre a marzo, la temporada seca impulsada por los vientos alisios del Caribe. El calor sigue siendo intenso (28–33°C) pero la humedad es más baja y el cielo está despejado, ideal para el Carnaval de febrero.',
    rainySeasons:
      'La temporada de lluvias va de mayo a noviembre, con octubre como el mes más húmedo. Las lluvias son tropicales: intensas pero generalmente cortas.',
    avgTempRange: '26°C – 35°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Barranquilla?',
        answer:
          'Barranquilla es calurosa todo el año, con temperaturas entre 26°C y 35°C. En los meses más calurosos la temperatura sensible puede superar los 40°C por la combinación de calor y humedad.',
      },
      {
        question: '¿Cuándo es el Carnaval de Barranquilla y qué clima hace?',
        answer:
          'El Carnaval de Barranquilla ocurre en febrero, durante la temporada seca. El calor es intenso (30–33°C) pero la humedad es más baja que en los meses lluviosos, haciendo el ambiente festivo más llevadero.',
      },
      {
        question: '¿Cuándo es la temporada de lluvias en Barranquilla?',
        answer:
          'De mayo a noviembre. La temporada seca va de diciembre a abril, impulsada por los vientos alisios del norte que refrescan el ambiente caribeño.',
      },
    ],
  },
  cartagena: {
    bestTimeToVisit:
      'Enero y febrero son los mejores meses para visitar Cartagena: cielos azules, brisa marina constante y la temporada seca en su punto óptimo. La temperatura es de 27–31°C y la humedad es más tolerable que en el resto del año.',
    rainySeasons:
      'La temporada de lluvias va de mayo a noviembre, con septiembre y octubre como los meses más intensos. Fuera de ese período, la ciudad disfruta de un clima seco y ventoso.',
    avgTempRange: '25°C – 33°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Cartagena?',
        answer:
          'Cartagena tiene un clima tropical cálido con temperaturas entre 25°C y 33°C durante todo el año y humedad alta constante. La brisa marina suaviza el calor, especialmente en las tardes.',
      },
      {
        question: '¿Cuál es la mejor época para visitar Cartagena?',
        answer:
          'Diciembre a abril es la temporada seca y la mejor para visitar. Enero y febrero son los meses con menos lluvia y más brisa, ideales para recorrer la Ciudad Amurallada y las islas del Rosario.',
      },
      {
        question: '¿Llueve mucho en Cartagena?',
        answer:
          'Cartagena tiene una temporada de lluvias de mayo a noviembre. Fuera de ese período, la lluvia es escasa. Incluso en temporada lluviosa, los aguaceros suelen ser intensos pero breves.',
      },
    ],
  },
  bucaramanga: {
    bestTimeToVisit:
      'Diciembre a marzo es la época más soleada y seca de Bucaramanga, ideal para visitar el Cañón del Chicamocha y los parques de la ciudad. Las tardes son cálidas (25–28°C) y las noches son frescas sin llegar a frías.',
    rainySeasons:
      'Las temporadas lluviosas son de abril a mayo y de septiembre a noviembre. Las lluvias son moderadas y generalmente vespertinas.',
    avgTempRange: '18°C – 28°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Bucaramanga?',
        answer:
          'Bucaramanga tiene un clima cálido y agradable con temperaturas entre 18°C y 28°C durante todo el año. El promedio es de unos 23°C, con noches frescas y tardes soleadas.',
      },
      {
        question: '¿Cuándo visitar el Cañón del Chicamocha desde Bucaramanga?',
        answer:
          'La mejor época es diciembre a marzo, la temporada seca, cuando el cielo está despejado y las condiciones para el turismo de aventura son óptimas.',
      },
    ],
  },
  pereira: {
    bestTimeToVisit:
      'Los mejores meses para visitar Pereira y el Eje Cafetero son diciembre–enero y junio–julio, las temporadas relativamente más secas de la región. El paisaje verde y el café en su apogeo hacen de estos meses la experiencia más completa.',
    rainySeasons:
      'El Eje Cafetero tiene lluvias casi todo el año. Las temporadas más lluviosas son marzo–mayo y septiembre–noviembre, pero incluso en temporada "seca" hay lluvias frecuentes.',
    avgTempRange: '17°C – 26°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Pereira?',
        answer:
          'Pereira tiene un clima templado con temperaturas entre 17°C y 26°C. El promedio es de 21°C gracias a su altitud de 1.411 metros sobre el nivel del mar.',
      },
      {
        question: '¿Cuándo visitar el Eje Cafetero?',
        answer:
          'Diciembre–enero y junio–julio son las épocas más secas. Sin embargo, la región es lluviosa casi todo el año y la lluvia hace parte de su encanto. Para senderismo y avistamiento de aves, es mejor evitar los meses de mayor lluvia (abril–mayo y octubre–noviembre).',
      },
    ],
  },
  manizales: {
    bestTimeToVisit:
      'La mejor época para visitar Manizales es de junio a agosto, los meses más despejados del año, cuando la visibilidad es mayor y se puede ver el Nevado del Ruiz en los días más claros. La Feria de Manizales en enero también es un buen momento, con clima frío pero festivo.',
    rainySeasons:
      'Manizales es lluviosa durante la mayor parte del año, con picos en abril–mayo y octubre–noviembre. La niebla es frecuente en las mañanas incluso en los meses más secos.',
    avgTempRange: '12°C – 22°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Manizales?',
        answer:
          'Manizales tiene un clima frío andino con temperaturas entre 12°C y 22°C. A 2.153 metros de altitud, es más fría que Medellín y Pereira. Las noches pueden bajar a 8–10°C.',
      },
      {
        question: '¿Cuándo se puede ver el Nevado del Ruiz desde Manizales?',
        answer:
          'Los meses de junio a agosto son los más despejados y ofrecen mayor probabilidad de ver el volcán. En los meses lluviosos (abril–mayo, octubre–noviembre) la niebla cubre frecuentemente las cumbres.',
      },
    ],
  },
  cucuta: {
    bestTimeToVisit:
      'Si debes visitar Cúcuta, elige los meses de diciembre a febrero cuando el calor es algo más seco y las noches son ligeramente menos sofocantes. Sin embargo, no existe una época verdaderamente "fresca" en Cúcuta: la ciudad es calurosa todo el año.',
    rainySeasons:
      'Las lluvias se concentran de mayo a octubre. La temporada seca de noviembre a abril es calurosa y muy árida, con vientos secos que aumentan la sensación de calor.',
    avgTempRange: '26°C – 38°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Cúcuta?',
        answer:
          'Cúcuta es una de las ciudades más calurosas de Colombia, con temperaturas entre 26°C y 38°C. En los meses más calurosos la sensación térmica puede superar los 42°C.',
      },
      {
        question: '¿Por qué hace tanto calor en Cúcuta?',
        answer:
          'Cúcuta está ubicada en el Valle del río Zulia, una depresión topográfica que atrapa el calor. Su baja altitud (320 metros) y la ausencia de brisas marinas la convierten en una de las ciudades más calurosas del país.',
      },
    ],
  },
  ibague: {
    bestTimeToVisit:
      'Los meses de diciembre a febrero y junio a agosto son los más secos para visitar Ibagué y disfrutar del Festival Folclórico de junio. La cercanía al Nevado del Tolima crea contrastes climáticos interesantes que hacen el recorrido a la montaña especialmente atractivo en temporada seca.',
    rainySeasons:
      'Ibagué tiene dos temporadas lluviosas: marzo–mayo y septiembre–noviembre. Las lluvias son cálidas y suelen ser vespertinas.',
    avgTempRange: '20°C – 30°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Ibagué?',
        answer:
          'Ibagué tiene un clima cálido con temperaturas entre 20°C y 30°C. El promedio es de 24°C, y las noches son refrescadas por el viento que baja del Nevado del Tolima.',
      },
    ],
  },
  'santa-marta': {
    bestTimeToVisit:
      'Enero y febrero son los mejores meses para visitar Santa Marta: el mar Caribe está más calmado, el Parque Tayrona está abierto (suele cerrar parte de febrero para recuperación natural) y el calor es más manejable con la brisa. La Sierra Nevada crea microclimas que permiten combinar playa y montaña.',
    rainySeasons:
      'La temporada de lluvias va de mayo a noviembre. Diciembre–abril es la temporada seca con más viento y cielos despejados.',
    avgTempRange: '24°C – 33°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Santa Marta?',
        answer:
          'Santa Marta tiene un clima tropical cálido con temperaturas entre 24°C y 33°C durante todo el año. La brisa de la Sierra Nevada refresca las tardes más calurosas.',
      },
      {
        question: '¿Cuándo visitar el Parque Tayrona?',
        answer:
          'La mejor época es de diciembre a abril, durante la temporada seca. El parque suele cerrar la primera quincena de febrero para recuperación natural. Evita el período de agosto a noviembre cuando las lluvias hacen los senderos difíciles.',
      },
    ],
  },
  villavicencio: {
    bestTimeToVisit:
      'La temporada seca de diciembre a marzo es la mejor época para visitar Villavicencio y los Llanos Orientales. El paisaje de sabana en su versión más fotogénica, los ríos más accesibles y las fincas llenas de fauna hacen de estos meses la época ideal para el ecoturismo llanero.',
    rainySeasons:
      'De abril a noviembre los Llanos se inundan parcialmente, con lluvias casi diarias. Agosto y septiembre son los meses más lluviosos. Los caminos rurales pueden volverse intransitables.',
    avgTempRange: '23°C – 33°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Villavicencio?',
        answer:
          'Villavicencio tiene un clima cálido y húmedo con temperaturas entre 23°C y 33°C. Es mucho más calurosa que Bogotá, a pesar de estar relativamente cerca.',
      },
      {
        question: '¿Cuándo visitar los Llanos Orientales desde Villavicencio?',
        answer:
          'Diciembre a marzo es la temporada seca y la mejor para actividades de ecoturismo. En la temporada de lluvias (abril–noviembre) muchas fincas y caminos son inaccesibles.',
      },
    ],
  },
  armenia: {
    bestTimeToVisit:
      'Los meses de diciembre–enero y junio–julio ofrecen las mejores condiciones para el Valle del Cocora, el Parque Nacional del Café y las fincas cafeteras del Quindío. Las mañanas suelen estar despejadas en esas épocas, perfectas para senderismo.',
    rainySeasons:
      'Armenia y el Quindío son muy lluviosos durante casi todo el año. Las temporadas más intensas son marzo–mayo y septiembre–noviembre. Incluso en "temporada seca" hay lloviznas frecuentes.',
    avgTempRange: '16°C – 26°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Armenia?',
        answer:
          'Armenia tiene un clima templado y húmedo con temperaturas entre 16°C y 26°C. El promedio es de 20°C gracias a su altitud de 1.483 metros en el corazón del Eje Cafetero.',
      },
    ],
  },
  pasto: {
    bestTimeToVisit:
      'Junio a agosto son los meses más secos y con mejor tiempo en Pasto. Sin embargo, el Carnaval de Blancos y Negros de enero es la gran razón para visitar la ciudad, con frío y lluvia frecuente pero un ambiente festivo inigualable.',
    rainySeasons:
      'Pasto es lluviosa la mayor parte del año. Las lluvias se intensifican de febrero a mayo y de septiembre a noviembre. El frío húmedo puede hacer la temperatura sensible varios grados más baja.',
    avgTempRange: '8°C – 18°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Pasto?',
        answer:
          'Pasto tiene un clima frío con temperaturas entre 8°C y 18°C durante todo el año. A 2.527 metros de altitud, es una de las ciudades más frías de Colombia. Las noches pueden bajar a 5–6°C.',
      },
      {
        question: '¿Cuándo es el Carnaval de Blancos y Negros en Pasto?',
        answer:
          'El Carnaval de Blancos y Negros se celebra del 2 al 7 de enero. El clima en esa época es frío (8–14°C) y con posibilidad de lluvia, así que es indispensable llevar ropa de abrigo y ropa de recambio.',
      },
    ],
  },
  monteria: {
    bestTimeToVisit:
      'Diciembre a abril es la temporada seca de Montería, la mejor época para visitar la ciudad y recorrer la rambla del río Sinú. El calor sigue siendo intenso (30–35°C) pero la baja humedad y los vientos hacen el ambiente más llevadero.',
    rainySeasons:
      'De mayo a noviembre, con lluvias abundantes especialmente en septiembre y octubre. Las lluvias son tropicales: intensas pero generalmente cortas.',
    avgTempRange: '26°C – 35°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Montería?',
        answer:
          'Montería tiene un clima tropical cálido con temperaturas entre 26°C y 35°C todo el año. La humedad es alta en temporada de lluvias, lo que hace la sensación térmica significativamente mayor.',
      },
    ],
  },
  sincelejo: {
    bestTimeToVisit:
      'Diciembre a abril es la temporada más seca de Sincelejo, ideal para recorrer la ciudad y visitar los alrededores de los Montes de María. El calor es intenso pero la humedad más baja lo hace más tolerable que en las ciudades costeras del Caribe.',
    rainySeasons:
      'De mayo a noviembre, con intensidad creciente hacia septiembre y octubre.',
    avgTempRange: '24°C – 34°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Sincelejo?',
        answer:
          'Sincelejo tiene temperaturas entre 24°C y 34°C. Es más seca que otras ciudades del Caribe colombiano, lo que hace su calor más tolerable.',
      },
    ],
  },
  valledupar: {
    bestTimeToVisit:
      'El Festival Vallenato de finales de abril es la gran razón para visitar Valledupar, aunque coincide con el final de la temporada seca y el inicio de las lluvias. Para un clima más cómodo sin el festival, enero y febrero son los meses más secos y con menos calor relativo.',
    rainySeasons:
      'De mayo a octubre. La temporada seca de noviembre a abril es calurosa y árida, con temperaturas que pueden superar los 38°C.',
    avgTempRange: '27°C – 38°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Valledupar?',
        answer:
          'Valledupar es una de las ciudades más calurosas de Colombia, con temperaturas entre 27°C y 38°C. La temperatura sensible puede superar los 42°C en los meses más calurosos.',
      },
      {
        question: '¿Cuándo es el Festival Vallenato?',
        answer:
          'El Festival de la Leyenda Vallenata se celebra a finales de abril. El clima es caluroso (35–38°C) con alta humedad, así que es esencial hidratarse constantemente durante los eventos al aire libre.',
      },
    ],
  },
  neiva: {
    bestTimeToVisit:
      'Diciembre a febrero y junio a agosto son los meses más secos y soleados de Neiva, ideales para visitar el Desierto de la Tatacoa, que está a solo 40 km de la ciudad. La combinación de calor seco y cielos despejados hace de la observación astronómica en La Tatacoa una experiencia única.',
    rainySeasons:
      'Las temporadas lluviosas son marzo–mayo y septiembre–noviembre. Fuera de esos períodos el calor es seco y muy intenso.',
    avgTempRange: '24°C – 34°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Neiva?',
        answer:
          'Neiva tiene un clima cálido y seco con temperaturas entre 24°C y 34°C. Es una de las ciudades más calurosas del interior de Colombia, ubicada en el Valle del Magdalena.',
      },
      {
        question: '¿Cuándo visitar el Desierto de La Tatacoa desde Neiva?',
        answer:
          'La Tatacoa es visitable todo el año, pero los meses secos (diciembre–febrero y junio–agosto) ofrecen cielos más despejados, ideales para astronomía. En temporada lluviosa los colores del desierto son más intensos pero los caminos pueden estar complicados.',
      },
    ],
  },
  popayan: {
    bestTimeToVisit:
      'La Semana Santa en Popayán es Patrimonio Cultural Inmaterial de la Humanidad y la razón más famosa para visitar la ciudad, aunque ocurre en marzo o abril con clima frío y posibilidad de lluvia. Para mejor tiempo, julio y agosto son los meses más despejados de la Ciudad Blanca.',
    rainySeasons:
      'Popayán es lluviosa gran parte del año. Las temporadas más intensas son de marzo a mayo y de octubre a noviembre.',
    avgTempRange: '14°C – 22°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Popayán?',
        answer:
          'Popayán tiene un clima frío con temperaturas entre 14°C y 22°C. A 1.702 metros de altitud, las noches son frescas y lluviosas durante gran parte del año.',
      },
    ],
  },
  tunja: {
    bestTimeToVisit:
      'Diciembre a febrero es la temporada más seca de Tunja, con cielos más despejados aunque el frío sigue siendo intenso. Junio y julio también ofrecen días más soleados. Si visitas en verano colombiano, el Festival de Aguinaldos de diciembre es una excelente razón para visitar la ciudad más fría de Colombia.',
    rainySeasons:
      'Las lluvias son frecuentes casi todo el año, con mayor intensidad de marzo a mayo y de septiembre a noviembre. Las heladas ocurren con cierta regularidad en las noches más frías de diciembre y enero.',
    avgTempRange: '5°C – 15°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Tunja?',
        answer:
          'Tunja es la capital departamental más fría de Colombia, con temperaturas entre 5°C y 15°C durante todo el año. A 2.820 metros de altitud, las noches pueden bajar a 2–3°C y ocasionalmente hay heladas.',
      },
    ],
  },
  riohacha: {
    bestTimeToVisit:
      'Diciembre a abril es la mejor época para visitar Riohacha y la Guajira. El viento alisio baja las temperaturas sensibles y el desierto guajiro luce en su máximo esplendor árido, con cielos azules y el contraste del desierto con el mar Caribe.',
    rainySeasons:
      'Las lluvias son escasas casi todo el año. Cuando llueve (mayo–noviembre), suele ser en forma de aguaceros breves pero intensos.',
    avgTempRange: '28°C – 38°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Riohacha?',
        answer:
          'Riohacha tiene un clima árido y muy caluroso, con temperaturas entre 28°C y 38°C. El viento alisio constante puede bajar la sensación térmica varios grados.',
      },
      {
        question: '¿Cuándo visitar La Guajira desde Riohacha?',
        answer:
          'La mejor época es de diciembre a abril, durante la temporada seca y con vientos alisios activos. Evita septiembre–octubre cuando las escasas lluvias pueden complicar los caminos del desierto.',
      },
    ],
  },

  // ── España ────────────────────────────────────────────────────────────────
  madrid: {
    bestTimeToVisit:
      'La primavera (abril–junio) y el otoño (septiembre–octubre) son las mejores épocas para visitar Madrid, con temperaturas entre 15°C y 25°C perfectas para recorrer el Retiro, el Prado y la Gran Vía. El verano es extremadamente caluroso (hasta 40°C) y el invierno puede ser frío y gris, aunque la Navidad madrileña tiene su encanto.',
    rainySeasons:
      'Madrid no tiene una temporada de lluvias pronunciada. Las precipitaciones más frecuentes son en otoño y primavera, pero son moderadas. Julio y agosto son muy secos y calurosos.',
    avgTempRange: '3°C – 38°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Madrid?',
        answer:
          'Madrid tiene un clima continental mediterráneo con grandes contrastes: veranos muy calurosos que superan los 35–40°C e inviernos fríos que pueden bajar de 0°C. La primavera y el otoño son las estaciones más agradables (15–25°C).',
      },
      {
        question: '¿Cuándo es la mejor época para visitar Madrid?',
        answer:
          'Abril–junio y septiembre–octubre son los mejores meses, con temperaturas agradables y menos turistas que en verano.',
      },
      {
        question: '¿Nieva en Madrid?',
        answer:
          'Sí, aunque no es frecuente en la ciudad. Madrid puede recibir nevadas entre diciembre y febrero, como la histórica tormenta Filomena de enero de 2021. Las sierras cercanas (Guadarrama) tienen nieve regularmente en invierno.',
      },
    ],
  },
  barcelona: {
    bestTimeToVisit:
      'Mayo–junio y septiembre–octubre son los meses ideales para visitar Barcelona: temperatura de 20–25°C, mar aún cálido en septiembre y menos masificación que en julio–agosto. La primavera barcelonesa con la floración y las terrazas abiertas es especialmente agradable.',
    rainySeasons:
      'Las lluvias se distribuyen durante el año sin una temporada muy marcada. El otoño (octubre–noviembre) puede traer episodios intensos de lluvia, a veces en forma de gota fría.',
    avgTempRange: '8°C – 30°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Barcelona?',
        answer:
          'Barcelona tiene un clima mediterráneo con inviernos suaves (8–14°C) y veranos cálidos y húmedos (22–30°C). La temperatura raramente baja de 5°C en invierno o supera los 32°C en verano.',
      },
      {
        question: '¿Cuándo es mejor visitar Barcelona?',
        answer:
          'Mayo–junio y septiembre–octubre son los mejores meses: buen clima, mar cálido en septiembre y menos turistas que en pleno verano.',
      },
    ],
  },
  valencia: {
    bestTimeToVisit:
      'Marzo–mayo y octubre son las mejores épocas para visitar Valencia. Las Fallas de marzo (cuando hace 15–20°C y cielo soleado) son la fiesta más espectacular de España. El otoño ofrece temperaturas perfectas aunque hay que estar atento a las alertas de gota fría.',
    rainySeasons:
      'Valencia tiene pocas lluvias en verano, pero el otoño puede traer episodios de gota fría muy intensos. Septiembre–noviembre son los meses con mayor riesgo de lluvias torrenciales.',
    avgTempRange: '10°C – 32°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Valencia?',
        answer:
          'Valencia tiene uno de los climas más agradables de España: veranos cálidos (25–32°C), inviernos suaves (10–17°C) y más de 300 días de sol al año.',
      },
      {
        question: '¿Qué es la gota fría en Valencia?',
        answer:
          'La gota fría (DANA) es un fenómeno meteorológico que puede traer lluvias torrenciales extremas en otoño. En noviembre de 2024, una DANA causó inundaciones graves en la región valenciana. Siempre es importante seguir las alertas meteorológicas en otoño.',
      },
    ],
  },
  sevilla: {
    bestTimeToVisit:
      'Abril (Semana Santa y Feria de Abril) y octubre–noviembre son las mejores épocas para visitar Sevilla, con temperaturas entre 18°C y 28°C ideales para recorrer el Alcázar y la Giralda. Evita julio y agosto: con 42–45°C, es literalmente una de las ciudades más calurosas de Europa.',
    rainySeasons:
      'El invierno (noviembre–febrero) es la temporada más lluviosa, aunque con temperaturas suaves. El verano es extremadamente seco y caluroso.',
    avgTempRange: '8°C – 42°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Sevilla en verano?',
        answer:
          'Sevilla tiene los veranos más calurosos de Europa continental, con temperaturas que regularmente superan los 40°C en julio y agosto. La temperatura más alta registrada es de 47,4°C (agosto 2023). Las noches rara vez bajan de 25°C.',
      },
      {
        question: '¿Cuándo es la Feria de Abril en Sevilla?',
        answer:
          'La Feria de Abril tiene lugar dos semanas después de la Semana Santa, generalmente a finales de abril. El clima suele ser perfecto: 22–28°C con cielos soleados.',
      },
    ],
  },
  bilbao: {
    bestTimeToVisit:
      'Junio–agosto son los meses más soleados de Bilbao, con temperaturas de 18–25°C ideales para visitar el Guggenheim y el Casco Viejo. La Semana Grande de agosto anima la ciudad. Hay que estar preparado para lluvia en cualquier época del año.',
    rainySeasons:
      'Bilbao llueve en más de 140 días al año, con mayor intensidad en otoño e invierno (octubre–marzo). El verano es relativamente más seco pero no libre de lluvia.',
    avgTempRange: '7°C – 25°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Bilbao?',
        answer:
          'Bilbao tiene un clima oceánico atlántico con temperaturas suaves todo el año: 7–12°C en invierno y 18–25°C en verano. La lluvia es frecuente en todas las estaciones.',
      },
      {
        question: '¿Llueve mucho en Bilbao?',
        answer:
          'Sí, Bilbao es una de las ciudades más lluviosas de España. Llueve en más de 140 días al año. Un paraguas o impermeable es imprescindible en cualquier visita.',
      },
    ],
  },
  malaga: {
    bestTimeToVisit:
      'Marzo–mayo y septiembre–noviembre son los meses perfectos para visitar Málaga: temperaturas de 18–25°C, mar agradable y menos turistas que en verano. El invierno malagueño (enero–febrero con 16–18°C de máxima) es también atractivo para quienes escapan del frío del norte de Europa.',
    rainySeasons:
      'Las lluvias se concentran en invierno (noviembre–febrero). El verano (junio–septiembre) es muy seco y caluroso.',
    avgTempRange: '12°C – 34°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Málaga en invierno?',
        answer:
          'El invierno en Málaga es el más cálido de Europa continental: en enero y febrero la temperatura máxima ronda los 16–18°C en días soleados. Las heladas son rarísimas en la ciudad.',
      },
      {
        question: '¿Cuándo es mejor ir a Málaga?',
        answer:
          'Para turismo general, marzo–mayo y septiembre–noviembre. Para playas de verano, julio–agosto (aunque es el período más turístico y caluroso). Para escapadas de invierno, diciembre–febrero con su clima suave.',
      },
    ],
  },
  zaragoza: {
    bestTimeToVisit:
      'Abril–junio y septiembre–octubre son las mejores épocas para visitar Zaragoza, evitando tanto el frío y el viento del invierno como el calor extremo del verano. Las Fiestas del Pilar en octubre son la gran celebración de la ciudad, con clima otoñal agradable.',
    rainySeasons:
      'Zaragoza es una ciudad semiárida con pocas lluvias (unos 320 mm anuales). El cierzo, el viento norte frío y seco, es el fenómeno meteorológico más característico de la ciudad.',
    avgTempRange: '3°C – 36°C según estación',
    faq: [
      {
        question: '¿Qué es el cierzo en Zaragoza?',
        answer:
          'El cierzo es un viento frío, seco y muy fuerte que sopla del noroeste, descendiendo por el Valle del Ebro. Puede alcanzar 100 km/h y hace que la temperatura sensible sea hasta 10°C menor que la real. Es el fenómeno climático más característico de Zaragoza.',
      },
      {
        question: '¿Qué temperatura hace en Zaragoza?',
        answer:
          'Zaragoza tiene un clima continental semiárido con inviernos fríos (3–10°C) y veranos muy calurosos (28–38°C). El viento cierzo puede hacer que el frío sea más intenso de lo que indica el termómetro.',
      },
    ],
  },
  alicante: {
    bestTimeToVisit:
      'Alicante es visitable casi todo el año gracias a su clima soleado. Los mejores meses para combinar sol, playa y temperaturas no extremas son mayo–junio y septiembre–octubre.',
    rainySeasons:
      'Alicante es una de las ciudades más secas de España, con menos de 300 mm anuales. Las lluvias son escasas en todas las estaciones, aunque septiembre–noviembre puede traer episodios intensos esporádicos.',
    avgTempRange: '10°C – 34°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Alicante?',
        answer:
          'Alicante tiene veranos calurosos (25–34°C) e inviernos muy suaves (10–18°C). Con más de 320 días de sol al año, es una de las ciudades más soleadas de España.',
      },
    ],
  },
  granada: {
    bestTimeToVisit:
      'Primavera (marzo–mayo) y otoño (septiembre–octubre) son ideales para visitar Granada, con temperaturas de 15–25°C perfectas para la Alhambra. En enero–febrero, cuando hay nieve en Sierra Nevada, se puede esquiar por la mañana y visitar la Alhambra por la tarde.',
    rainySeasons:
      'Las lluvias se concentran en invierno (noviembre–febrero), aunque en verano casi no llueve. Sierra Nevada recibe nieve abundante de diciembre a abril.',
    avgTempRange: '4°C – 36°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Granada?',
        answer:
          'Granada tiene un clima continental mediterráneo con inviernos fríos (4–12°C) y veranos muy calurosos (25–36°C). La altitud de 740 metros hace que las noches sean siempre frescas, incluso en verano.',
      },
      {
        question: '¿Se puede esquiar en Granada?',
        answer:
          'Sí, Sierra Nevada (a solo 30 km de la ciudad) tiene una de las estaciones de esquí más altas de Europa. La temporada va de diciembre a abril aproximadamente.',
      },
    ],
  },
  murcia: {
    bestTimeToVisit:
      'Marzo–mayo y octubre–noviembre son los meses más agradables para visitar Murcia, con temperaturas de 15–25°C. El verano (julio–agosto) es extremadamente caluroso, con records históricos que superan los 45°C.',
    rainySeasons:
      'Murcia es la ciudad más seca de España, con apenas 300 mm anuales. Las lluvias son escasas en todas las estaciones; el otoño puede traer episodios intensos pero breves.',
    avgTempRange: '8°C – 40°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Murcia en verano?',
        answer:
          'Murcia tiene los veranos más calurosos de España, con temperaturas que regularmente superan los 38–40°C en julio y agosto. Es la ciudad con mayor temperatura media anual de España.',
      },
    ],
  },

  // ── Latinoamérica ─────────────────────────────────────────────────────────
  'mexico-city': {
    bestTimeToVisit:
      'Marzo y abril son los meses más soleados y con menos lluvia en Ciudad de México, ideales para recorrer Teotihuacán, el Centro Histórico y Xochimilco sin que la lluvia interrumpa los planes. Diciembre–febrero también son buenos meses con temperaturas agradables de 18–22°C.',
    rainySeasons:
      'De junio a octubre hay lluvias vespertinas casi diarias. Las tormentas eléctricas de julio y agosto pueden ser intensas pero duran poco.',
    avgTempRange: '8°C – 25°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Ciudad de México?',
        answer:
          'Ciudad de México tiene un clima templado de montaña con temperaturas entre 8°C y 25°C durante todo el año. La altitud de 2.240 metros suaviza el calor tropical que correspondería a esa latitud.',
      },
      {
        question: '¿Cuándo es la temporada de lluvias en Ciudad de México?',
        answer:
          'De junio a octubre hay lluvias casi diarias, generalmente por las tardes. Fuera de esa temporada, el cielo suele estar despejado y las temperaturas son muy agradables.',
      },
      {
        question: '¿Hace frío en Ciudad de México?',
        answer:
          'Los inviernos son frescos con mínimas de 5–8°C por las madrugadas y máximas de 18–22°C. No nieva en la ciudad, pero las montañas cercanas (Popocatépetl, Iztaccíhuatl) tienen nieve en invierno.',
      },
    ],
  },
  'buenos-aires': {
    bestTimeToVisit:
      'Septiembre–noviembre (primavera) y marzo–mayo (otoño) son las mejores épocas para visitar Buenos Aires, con temperaturas de 18–26°C y los famosos jacarandás en flor en noviembre. El verano (diciembre–febrero) puede ser bochornoso con humedad alta.',
    rainySeasons:
      'Buenos Aires tiene lluvias distribuidas durante todo el año sin una estación seca definida. Las tormentas eléctricas de verano (diciembre–febrero) pueden ser muy intensas.',
    avgTempRange: '6°C – 35°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Buenos Aires?',
        answer:
          'Buenos Aires tiene un clima templado oceánico con veranos calurosos (25–35°C) e inviernos frescos (6–15°C). La humedad del Río de la Plata intensifica tanto el calor estival como el frío invernal.',
      },
      {
        question: '¿Cuándo es mejor visitar Buenos Aires?',
        answer:
          'Primavera (septiembre–noviembre) y otoño (marzo–mayo) son las mejores épocas. Noviembre es espectacular por la floración de los jacarandás.',
      },
    ],
  },
  santiago: {
    bestTimeToVisit:
      'Octubre–noviembre (primavera) y marzo–abril (otoño) son los mejores meses para visitar Santiago, con temperaturas de 18–25°C y los viñedos cercanos en su punto más fotogénico. En invierno (junio–agosto) la contaminación y las lluvias pueden limitar la visibilidad de los Andes.',
    rainySeasons:
      'Las lluvias se concentran de mayo a agosto. El verano (diciembre–marzo) es muy seco y caluroso.',
    avgTempRange: '3°C – 33°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Santiago de Chile?',
        answer:
          'Santiago tiene un clima mediterráneo semiárido con veranos secos y calurosos (hasta 33°C) e inviernos fríos y lluviosos (3–14°C). Las lluvias se concentran de mayo a agosto.',
      },
      {
        question: '¿Se puede ver la cordillera de los Andes desde Santiago?',
        answer:
          'Sí, en los días despejados la vista de los Andes nevados desde Santiago es espectacular. Los mejores meses para verla son los de primavera y verano, cuando la lluvia ha lavado el aire. En invierno, la contaminación y la nubosidad pueden reducir la visibilidad.',
      },
    ],
  },
  lima: {
    bestTimeToVisit:
      'Diciembre a abril es el verano limeño, cuando el sol aparece regularmente y las temperaturas llegan a 26–28°C. Es la mejor época para disfrutar las playas del sur de Lima y los circuitos turísticos de la ciudad. Los meses de junio a noviembre son grises, con la garúa cubriendo la ciudad casi permanentemente.',
    rainySeasons:
      'Lima es paradójicamente árida pero húmeda: casi no llueve formalmente, pero la garúa (niebla fina) cubre la ciudad de mayo a noviembre, con cielos grises persistentes.',
    avgTempRange: '14°C – 28°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Lima?',
        answer:
          'Lima tiene temperaturas entre 14°C (invierno, junio–septiembre) y 28°C (verano, enero–marzo). El clima es árido pero nublado gran parte del año gracias a la corriente de Humboldt.',
      },
      {
        question: '¿Qué es la garúa en Lima?',
        answer:
          'La garúa es una llovizna fina y brumosa que cubre Lima de mayo a noviembre. Técnicamente casi no llueve (pocos mm acumulados), pero el cielo está permanentemente gris y la humedad es alta, creando un ambiente melancólico que los limeños llaman "el invierno gris".',
      },
      {
        question: '¿Cuándo hay sol en Lima?',
        answer:
          'De diciembre a abril el sol aparece regularmente. Enero, febrero y marzo son los mejores meses para disfrutar Lima con buen tiempo y las playas cercanas.',
      },
    ],
  },
  caracas: {
    bestTimeToVisit:
      'Diciembre a abril es la temporada seca de Caracas, ideal para visitar la ciudad con cielos más despejados y menor humedad. La temperatura agradable de 22–28°C y las noches frescas hacen de este período la mejor época para recorrer el Ávila y los parques de la ciudad.',
    rainySeasons:
      'De mayo a noviembre, con lluvias frecuentes en las tardes. Junio–agosto son los meses más lluviosos.',
    avgTempRange: '15°C – 28°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Caracas?',
        answer:
          'Caracas tiene un clima tropical de montaña muy agradable: temperaturas entre 15°C y 28°C durante todo el año, con pocas variaciones estacionales. La altitud de 900 metros suaviza el calor caribeño.',
      },
    ],
  },
  quito: {
    bestTimeToVisit:
      'Junio a septiembre y diciembre a enero son las temporadas más secas de Quito, con más días soleados para visitar las iglesias barrocas del Centro Histórico y hacer excursiones al Cotopaxi. Aun así, en Quito llueve casi todo el año y conviene llevar siempre un impermeable.',
    rainySeasons:
      'Las temporadas más lluviosas son de febrero a mayo y de octubre a noviembre. A estas lluvias se suma el patrón de "cuatro estaciones en un día" que experimenta Quito regularmente.',
    avgTempRange: '10°C – 20°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Quito?',
        answer:
          'Quito tiene un clima de alta montaña con temperaturas entre 10°C y 20°C durante todo el año. La altitud de 2.850 metros hace que la temperatura sea fresca y el sol, cuando aparece, sea muy intenso.',
      },
      {
        question: '¿Por qué dicen que Quito tiene cuatro estaciones en un día?',
        answer:
          'Es un fenómeno real: en Quito es común que amanezca con sol y temperatura agradable, nublarse al mediodía, llover en la tarde y hacer frío en la noche. Las capas de ropa son indispensables para moverse por la ciudad.',
      },
    ],
  },
  montevideo: {
    bestTimeToVisit:
      'Diciembre a marzo es el verano uruguayo, con temperaturas de 22–30°C ideales para las playas del este y el Rambla de Montevideo. La primavera (septiembre–noviembre) también es agradable con flores y temperaturas perfectas para recorrer Ciudad Vieja.',
    rainySeasons:
      'Las lluvias están distribuidas durante todo el año sin una temporada seca definida. Los vientos del Río de la Plata pueden hacer las temperaturas invernales más desagradables de lo que indican los termómetros.',
    avgTempRange: '8°C – 30°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Montevideo?',
        answer:
          'Montevideo tiene un clima templado oceánico con veranos cálidos (22–30°C) e inviernos frescos (8–14°C). Los vientos del Río de la Plata intensifican el frío invernal.',
      },
    ],
  },
  asuncion: {
    bestTimeToVisit:
      'Mayo a agosto (otoño e invierno paraguayo) son los mejores meses para visitar Asunción, cuando las temperaturas de 20–28°C son mucho más manejables que los tórridos veranos. El cielo suele estar despejado y la humedad es menor.',
    rainySeasons:
      'Las lluvias son frecuentes casi todo el año, con mayor intensidad en verano (diciembre–marzo) cuando las tormentas eléctricas pueden ser muy intensas.',
    avgTempRange: '14°C – 38°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Asunción?',
        answer:
          'Asunción tiene un clima subtropical húmedo con veranos extremadamente calurosos (30–42°C) e inviernos templados (14–25°C). Es una de las capitales más calurosas de América del Sur.',
      },
    ],
  },
  'la-paz': {
    bestTimeToVisit:
      'Mayo a octubre es la temporada seca de La Paz, con cielos azules brillantes y noches muy frías. Es la mejor época para visitar la ciudad y hacer excursiones al Salar de Uyuni, Titicaca y el Camino de la Muerte.',
    rainySeasons:
      'De noviembre a marzo las lluvias son frecuentes, con tormentas eléctricas en las tardes. El Camino de la Muerte puede ser más peligroso en temporada lluviosa.',
    avgTempRange: '2°C – 18°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en La Paz?',
        answer:
          'La Paz tiene temperaturas entre 2°C y 18°C. A 3.640 metros de altitud, es la capital administrativa más alta del mundo. Las noches son frías y las madrugadas pueden registrar temperaturas bajo cero.',
      },
      {
        question: '¿Qué es el soroche en La Paz?',
        answer:
          'El soroche o mal de altura es el malestar causado por la falta de oxígeno al llegar a La Paz (3.640 metros). Se manifiesta con dolor de cabeza, náuseas y cansancio. Se recomienda descansar el primer día, beber mucha agua, evitar el alcohol y tomar té de coca.',
      },
    ],
  },
  brasilia: {
    bestTimeToVisit:
      'Mayo a septiembre es la temporada seca de Brasilia, con cielos despejados, días soleados y humedad baja. Es la mejor época para visitar la arquitectura de Niemeyer y los museos de la capital brasileña sin las lluvias tropicales de la temporada húmeda.',
    rainySeasons:
      'De octubre a abril llega la temporada lluviosa, con tormentas eléctricas casi diarias en las tardes. La humedad puede ser muy baja en temporada seca (similar a condiciones desérticas).',
    avgTempRange: '15°C – 28°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Brasilia?',
        answer:
          'Brasilia tiene temperaturas entre 15°C y 28°C todo el año, moderadas por su altitud de 1.170 metros. A diferencia de las ciudades costeras de Brasil, el clima es más seco.',
      },
    ],
  },
  'sao-paulo': {
    bestTimeToVisit:
      'Junio a septiembre es el invierno paulistano (el más seco y agradable), con temperaturas de 14–24°C ideales para recorrer los barrios de la metrópolis sin el calor y la lluvia del verano. El verano tiene el Carnaval (febrero) como gran atractivo a pesar del calor.',
    rainySeasons:
      'De noviembre a marzo lluvias intensas, especialmente en enero, el mes más lluvioso. Las inundaciones y deslizamientos son riesgos reales en algunas zonas periféricas.',
    avgTempRange: '10°C – 32°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en São Paulo?',
        answer:
          'São Paulo tiene un clima subtropical con veranos calurosos y húmedos (22–32°C) e inviernos frescos (10–22°C). Los cambios de temperatura bruscos por frentes fríos ("friagem") pueden bajar la temperatura 10°C en pocas horas.',
      },
    ],
  },
  'rio-de-janeiro': {
    bestTimeToVisit:
      'Junio a septiembre es el invierno carioca: sin lluvia intensa, temperaturas de 22–28°C perfectas para el Cristo Redentor, el Pan de Azúcar y las playas. El Carnaval de febrero (pleno verano, 30–38°C y alto índice UV) es el mayor evento de la ciudad pero exige preparación para el calor.',
    rainySeasons:
      'Diciembre a marzo es la temporada lluviosa, con aguaceros intensos y deslizamientos en los cerros. Las playas de Copacabana e Ipanema son más peligrosas por el oleaje en esa época.',
    avgTempRange: '20°C – 40°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Río de Janeiro?',
        answer:
          'Río tiene temperaturas entre 20°C y 40°C. El verano (diciembre–marzo) es caluroso, húmedo y lluvioso; el invierno (junio–septiembre) es seco y más agradable, con temperaturas de 20–28°C.',
      },
      {
        question: '¿Cuándo es el Carnaval de Río de Janeiro?',
        answer:
          'El Carnaval de Río ocurre en febrero, en pleno verano tropical. Las temperaturas son de 30–38°C con humedad muy alta. Es esencial hidratarse constantemente y usar protector solar.',
      },
    ],
  },
  guadalajara: {
    bestTimeToVisit:
      'Octubre a mayo son los mejores meses para visitar Guadalajara, con temperaturas de 18–27°C y cielos despejados. La temporada de lluvias (julio–septiembre) refresca la ciudad pero puede interrumpir actividades al aire libre.',
    rainySeasons:
      'De julio a septiembre lluvias regulares en las tardes. El resto del año es seco y soleado.',
    avgTempRange: '10°C – 30°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Guadalajara, México?',
        answer:
          'Guadalajara tiene un clima muy agradable con temperaturas entre 10°C y 30°C. El promedio anual es de 20°C, lo que le da su fama de "ciudad de la eterna primavera".',
      },
    ],
  },
  monterrey: {
    bestTimeToVisit:
      'Octubre a diciembre son los mejores meses para visitar Monterrey: calor moderado (22–28°C), cielos despejados y sin los extremos del verano. El otoño también ofrece los colores del Cañón del Huajuco y la Sierra Madre.',
    rainySeasons:
      'De junio a octubre, con influencia del Golfo de México. Los "nortes" invernales pueden bajar la temperatura abruptamente de 30°C a 5°C en pocas horas.',
    avgTempRange: '5°C – 42°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Monterrey?',
        answer:
          'Monterrey tiene un clima semiárido extremo con veranos brutales (hasta 42°C) e inviernos que pueden ser fríos (5–10°C) cuando llegan los frentes del norte. Los cambios de temperatura bruscos son muy característicos de la ciudad.',
      },
    ],
  },
  havana: {
    bestTimeToVisit:
      'Diciembre a abril es la temporada seca cubana, perfecta para visitar La Habana con temperaturas de 22–28°C, brisa marina y mínima humedad. Enero y febrero son los meses más frescos (20–24°C) e ideales para recorrer el Malecón y La Habana Vieja.',
    rainySeasons:
      'De mayo a octubre, coincidiendo con la temporada de huracanes del Caribe. Las lluvias son intensas y frecuentes.',
    avgTempRange: '18°C – 32°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en La Habana?',
        answer:
          'La Habana tiene un clima tropical con temperaturas de 18–24°C en invierno y 27–32°C en verano. La humedad es alta durante todo el año.',
      },
      {
        question: '¿Cuándo es la temporada de huracanes en Cuba?',
        answer:
          'De junio a noviembre, con mayor riesgo en agosto y septiembre. Durante ese período existe riesgo real de huracanes o tormentas tropicales que pueden interrumpir viajes.',
      },
    ],
  },
  'santo-domingo': {
    bestTimeToVisit:
      'Diciembre a abril es la temporada seca dominicana, la mejor época para visitar Santo Domingo y las playas del país. Las temperaturas de 25–30°C con brisa caribeña hacen el clima perfecto para el turismo.',
    rainySeasons:
      'Mayo a noviembre, con mayor riesgo de huracanes en agosto y septiembre. Las lluvias pueden ser muy intensas en la capital.',
    avgTempRange: '22°C – 33°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Santo Domingo?',
        answer:
          'Santo Domingo tiene un clima tropical cálido con temperaturas entre 22°C y 33°C durante todo el año y humedad alta constante.',
      },
    ],
  },
  'san-jose': {
    bestTimeToVisit:
      'Diciembre a abril es la temporada seca costarricense, perfecta para visitar San José y hacer excursiones a los volcanes, la selva y las playas del Pacífico. Las temperaturas de 20–25°C son agradables todo el año gracias a la altitud.',
    rainySeasons:
      'De mayo a noviembre hay lluvias vespertinas casi diarias. Las mañanas suelen estar despejadas, lo que permite planificar actividades al aire libre sin problema.',
    avgTempRange: '15°C – 28°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en San José de Costa Rica?',
        answer:
          'San José tiene temperaturas entre 15°C y 28°C todo el año gracias a su altitud de 1.170 metros. El clima es agradable y estable, sin extremos de calor ni de frío.',
      },
    ],
  },
  'panama-city': {
    bestTimeToVisit:
      'Diciembre a abril es la única temporada seca de Panamá, la mejor época para visitar Ciudad de Panamá y ver los barcos pasar por el Canal. Las temperaturas de 26–32°C con humedad más baja hacen el calor más tolerable.',
    rainySeasons:
      'De mayo a noviembre lluvias casi diarias, siendo Panamá uno de los países más lluviosos del mundo. En una hora puede caer más lluvia que en un mes en muchas ciudades europeas.',
    avgTempRange: '24°C – 33°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Ciudad de Panamá?',
        answer:
          'Ciudad de Panamá tiene un clima tropical húmedo con temperaturas entre 24°C y 33°C durante todo el año. La humedad es alta en todas las estaciones.',
      },
    ],
  },
  managua: {
    bestTimeToVisit:
      'Noviembre a abril es la temporada seca nicaragüense, la mejor época para visitar Managua y los destinos turísticos del país (Ometepe, León, Granada colonial). Las temperaturas son calurosas (28–35°C) pero la baja humedad y los cielos despejados hacen el calor más manejable.',
    rainySeasons:
      'De mayo a octubre hay lluvias frecuentes e intensas, especialmente de julio a septiembre.',
    avgTempRange: '25°C – 37°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Managua?',
        answer:
          'Managua tiene un clima tropical cálido con temperaturas entre 25°C y 37°C todo el año. Es una de las capitales más calurosas de Centroamérica.',
      },
    ],
  },

  // ── Argentina adicional ───────────────────────────────────────────────────
  cordoba: {
    bestTimeToVisit:
      'Septiembre–noviembre (primavera) y marzo–mayo (otoño) son las mejores épocas para Córdoba: temperaturas de 18–26°C, cielos despejados y las sierras en su mejor estado. El verano (diciembre–febrero) trae calor intenso y tormentas eléctricas espectaculares.',
    rainySeasons:
      'Las lluvias se concentran en verano (diciembre–febrero), con tormentas eléctricas frecuentes y a veces muy intensas. El otoño y la primavera tienen lluvias moderadas.',
    avgTempRange: '5°C – 35°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Córdoba, Argentina?',
        answer:
          'Córdoba tiene un clima continental con veranos calurosos (25–35°C) e inviernos suaves (5–15°C). Las tormentas eléctricas de verano son frecuentes e intensas.',
      },
    ],
  },
  rosario: {
    bestTimeToVisit:
      'Primavera (septiembre–noviembre) y otoño (marzo–abril) son los mejores momentos para visitar Rosario, con temperaturas de 18–26°C perfectas para recorrer la Costanera del Paraná y los parques de la ciudad.',
    rainySeasons:
      'Las lluvias están distribuidas durante el año. El verano trae tormentas eléctricas. La Sudestada (mayo–agosto) puede traer lluvias persistentes con frío y viento.',
    avgTempRange: '5°C – 35°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Rosario?',
        answer:
          'Rosario tiene veranos calurosos y húmedos (25–35°C) e inviernos frescos (5–15°C). La humedad del río Paraná intensifica tanto el calor del verano como el frío invernal.',
      },
    ],
  },
  mendoza: {
    bestTimeToVisit:
      'Marzo es el mes más famoso de Mendoza: la vendimia (cosecha de uva) con temperaturas perfectas de 18–28°C, festivales y las bodegas en plena actividad. La primavera (septiembre–noviembre) también es magnífica con los Andes nevados de fondo y los viñedos floreciendo.',
    rainySeasons:
      'Mendoza es semiárida con pocas lluvias (menos de 200 mm anuales). Las precipitaciones se concentran en verano (diciembre–febrero) en forma de tormentas ocasionales. El viento Zonda puede aparecer en cualquier época.',
    avgTempRange: '-5°C – 40°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Mendoza?',
        answer:
          'Mendoza tiene un clima semiárido con veranos muy calurosos y secos (hasta 40°C), otoños y primaveras perfectos (15–25°C) e inviernos fríos (-5°C a 14°C) con mucho sol.',
      },
      {
        question: '¿Qué es el viento Zonda en Mendoza?',
        answer:
          'El viento Zonda es un fenómeno meteorológico similar al Föhn europeo: un viento cálido y muy seco que desciende de los Andes, secando el aire y elevando la temperatura hasta 10°C en pocas horas. Puede ocurrir en cualquier estación y tiene efectos físicos notables (dolor de cabeza, sequedad intensa).',
      },
    ],
  },

  // ── Chile adicional ───────────────────────────────────────────────────────
  valparaiso: {
    bestTimeToVisit:
      'Diciembre a febrero (verano chileno) es la mejor época para visitar Valparaíso: cielos más despejados, temperaturas de 18–24°C y el ambiente costero en su apogeo. Los cerros de colores y el puerto son aún más fotogénicos con luz brillante.',
    rainySeasons:
      'Las lluvias se concentran de mayo a agosto, siendo junio y julio los más lluviosos. La neblina marina (camanchaca) es frecuente en las mañanas durante todo el año.',
    avgTempRange: '8°C – 24°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Valparaíso?',
        answer:
          'Valparaíso tiene un clima mediterráneo costero más fresco y húmedo que Santiago: veranos suaves (18–24°C) e inviernos lluviosos (8–14°C), con frecuentes neblinas matutinas todo el año.',
      },
    ],
  },
  concepcion: {
    bestTimeToVisit:
      'Diciembre a febrero (verano austral) son los mejores meses para visitar Concepción, con temperaturas de 18–24°C y los días más soleados del año. El resto del año es frecuentemente lluvioso.',
    rainySeasons:
      'Concepción es una de las ciudades más lluviosas de Chile, con precipitaciones en más de 130 días al año. Los meses de mayo a agosto son los más lluviosos.',
    avgTempRange: '5°C – 24°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Concepción?',
        answer:
          'Concepción tiene un clima oceánico húmedo: veranos frescos (18–24°C) e inviernos lluviosos y fríos (5–12°C). Es significativamente más lluviosa que Santiago.',
      },
    ],
  },
  antofagasta: {
    bestTimeToVisit:
      'Antofagasta puede visitarse durante todo el año gracias a su clima estable. Los meses de diciembre a marzo tienen temperaturas algo más cálidas (20–25°C), mientras que julio–agosto son los más frescos (14–18°C) con el viento del Pacífico más intenso.',
    rainySeasons:
      'Antofagasta es uno de los lugares más áridos del mundo, con precipitaciones prácticamente nulas (menos de 5 mm anuales en años buenos). La lluvia es un evento excepcional.',
    avgTempRange: '14°C – 25°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Antofagasta?',
        answer:
          'Antofagasta tiene temperaturas muy estables entre 14°C y 25°C durante todo el año, refrescadas por el viento del Pacífico y la corriente de Humboldt. Es uno de los lugares más secos del planeta.',
      },
    ],
  },

  // ── Brasil adicional ──────────────────────────────────────────────────────
  salvador: {
    bestTimeToVisit:
      'Septiembre a diciembre son los mejores meses para visitar Salvador: las playas del litoral bahiano en temporada seca, temperaturas de 26–32°C y el mar en perfecto estado. El Carnaval de febrero (el más grande del mundo por asistentes) ocurre en pleno verano tropical con mucho calor.',
    rainySeasons:
      'De abril a julio las lluvias son más frecuentes. Los meses de septiembre a marzo son los más secos y soleados.',
    avgTempRange: '23°C – 32°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Salvador de Bahía?',
        answer:
          'Salvador tiene un clima tropical cálido y húmedo con temperaturas entre 23°C y 32°C todo el año.',
      },
    ],
  },

  // ── Perú ──────────────────────────────────────────────────────────────────
  arequipa: {
    bestTimeToVisit:
      'Mayo a octubre es la temporada seca de Arequipa, perfecta para el Cañón del Colca, el Monasterio de Santa Catalina y los volcanes de la región. Los cielos despejados y las temperaturas agradables (12–22°C) hacen de este período el ideal para el turismo de aventura.',
    rainySeasons:
      'De enero a marzo llueve con frecuencia, aunque los aguaceros suelen ser por las tardes. Enero puede ser problemático para algunas rutas hacia el Colca.',
    avgTempRange: '8°C – 22°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Arequipa?',
        answer:
          'Arequipa tiene un clima seco y soleado con temperaturas entre 8°C y 22°C. A 2.335 metros de altitud, los días son agradables pero las noches son frescas durante todo el año.',
      },
    ],
  },
  cusco: {
    bestTimeToVisit:
      'Mayo a octubre es la temporada seca del Cusco, la época ideal para el Camino Inca y Machu Picchu. Junio y julio son los meses más secos pero también los más fríos por las noches (bajo 0°C en algunas áreas). Septiembre–octubre combina buen tiempo con menos turistas.',
    rainySeasons:
      'De noviembre a abril hay lluvias casi diarias en las tardes y el Camino Inca puede estar cerrado en febrero para mantenimiento.',
    avgTempRange: '4°C – 18°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Cusco?',
        answer:
          'Cusco tiene temperaturas entre 4°C y 18°C gracias a su altitud de 3.400 metros. Los días son soleados pero las noches son frías durante todo el año.',
      },
      {
        question: '¿Cuándo visitar Machu Picchu?',
        answer:
          'La temporada seca de mayo a octubre es la ideal. Junio–julio tienen los días más despejados pero también más turistas. Septiembre–octubre ofrecen buen clima con menos masificación. Febrero es la peor época por lluvias y el cierre del Camino Inca.',
      },
      {
        question: '¿Hace mucho frío en Cusco?',
        answer:
          'Las noches en Cusco son frías todo el año, especialmente en la temporada seca (mayo–agosto) cuando pueden bajar a 0°C o incluso menos. Los días son agradables con sol (16–18°C). El riesgo de mal de altura (soroche) es real al llegar a 3.400 metros.',
      },
    ],
  },
  trujillo: {
    bestTimeToVisit:
      'Trujillo tiene un clima muy estable que permite visitarla durante todo el año. Los meses de diciembre a abril son ligeramente más cálidos (22–26°C) y tienen más días soleados. Chan Chan y las Huacas del Sol y la Luna son atractivos que no dependen del clima.',
    rainySeasons:
      'Trujillo es desértica: prácticamente no llueve. El fenómeno El Niño puede traer lluvias ocasionales en algunos años.',
    avgTempRange: '16°C – 26°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Trujillo, Perú?',
        answer:
          'Trujillo tiene un clima desértico costero muy estable con temperaturas entre 16°C y 26°C durante todo el año. La neblina marina de las mañanas y la brisa del Pacífico mantienen el ambiente fresco.',
      },
    ],
  },

  // ── Ecuador ───────────────────────────────────────────────────────────────
  guayaquil: {
    bestTimeToVisit:
      'Mayo a diciembre es la temporada seca de Guayaquil (llamada "garúa"), con temperaturas de 24–30°C y menor humedad. Es la mejor época para hacer escala hacia las Islas Galápagos y visitar la ciudad sin los aguaceros de la temporada lluviosa.',
    rainySeasons:
      'De enero a abril la temporada lluviosa trae tormentas eléctricas diarias por las tardes y calor húmedo extremo (hasta 33°C con 85% de humedad).',
    avgTempRange: '22°C – 33°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Guayaquil?',
        answer:
          'Guayaquil tiene un clima tropical húmedo con temperaturas entre 22°C y 33°C. La temporada lluviosa (enero–abril) combina calor intenso con alta humedad, haciendo la sensación térmica muy agobiante.',
      },
    ],
  },
  cuenca: {
    bestTimeToVisit:
      'Junio a agosto y diciembre a enero son las épocas más secas de Cuenca, con más días de sol y temperaturas agradables de 15–22°C. La ciudad es visitable todo el año, pero en temporada lluviosa los aguaceros son diarios.',
    rainySeasons:
      'Cuenca tiene lluvias frecuentes durante gran parte del año, especialmente de febrero a mayo y de septiembre a noviembre. Los aguaceros suelen ser breves.',
    avgTempRange: '10°C – 22°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Cuenca, Ecuador?',
        answer:
          'Cuenca tiene un clima templado y agradable con temperaturas entre 10°C y 22°C gracias a su altitud de 2.550 metros. Los aguaceros son frecuentes pero breves.',
      },
    ],
  },
  manta: {
    bestTimeToVisit:
      'Junio a noviembre es la temporada seca de Manta, con temperaturas de 22–27°C, mares más calmados y los mejores días para avistamiento de ballenas jorobadas (julio–septiembre). Enero–abril puede ser muy lluvioso y caluroso.',
    rainySeasons:
      'De enero a mayo, con mayor intensidad en febrero–abril.',
    avgTempRange: '22°C – 30°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Manta, Ecuador?',
        answer:
          'Manta tiene un clima cálido costero con temperaturas entre 22°C y 30°C. La temporada seca (junio–noviembre) es más fresca gracias a la corriente del Pacífico.',
      },
    ],
  },

  // ── México adicional ──────────────────────────────────────────────────────
  puebla: {
    bestTimeToVisit:
      'Marzo a mayo y octubre a diciembre son los mejores meses para visitar Puebla, con temperaturas de 15–22°C, cielos despejados y las mejores condiciones para ver el Popocatépetl nevado desde la ciudad. En otoño se puede combinar Puebla con la temporada del mole y las tradiciones del Día de Muertos.',
    rainySeasons:
      'De junio a septiembre hay lluvias frecuentes, a veces acompañadas de granizo. Las tormentas eléctricas de verano pueden ser espectaculares en la zona volcánica.',
    avgTempRange: '8°C – 24°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en Puebla, México?',
        answer:
          'Puebla tiene un clima templado de montaña con temperaturas entre 8°C y 24°C durante todo el año. El promedio es de 17°C gracias a su altitud de 2.135 metros.',
      },
    ],
  },

  // ── Mundo ─────────────────────────────────────────────────────────────────
  'new-york': {
    bestTimeToVisit:
      'Septiembre–octubre (otoño) y mayo–junio (primavera) son las mejores épocas para visitar Nueva York, con temperaturas de 15–22°C, cielos despejados y el parque Central Park en sus versiones más fotogénicas. El otoño de los árboles de Central Park y el regreso a clases animado es especialmente icónico.',
    rainySeasons:
      'Nueva York tiene precipitaciones distribuidas durante el año. El invierno (diciembre–febrero) puede traer nevadas significativas; el verano es caluroso y húmedo con tormentas ocasionales.',
    avgTempRange: '-5°C – 35°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Nueva York?',
        answer:
          'Nueva York tiene cuatro estaciones bien definidas: inviernos que pueden llegar a -10°C, primaveras agradables (10–20°C), veranos calurosos y húmedos (25–35°C) y otoños perfectos (10–20°C).',
      },
      {
        question: '¿Nieva en Nueva York?',
        answer:
          'Sí, Nueva York recibe nevadas entre diciembre y marzo, aunque la cantidad varía mucho de un año a otro. Las nevadas más intensas pueden paralizar el transporte de la ciudad.',
      },
    ],
  },
  london: {
    bestTimeToVisit:
      'Junio a agosto es el verano londinense, con temperaturas de 18–25°C, días largos (sol hasta las 21 horas en junio) y todos los parques en pleno esplendor. Aunque puede llover en cualquier momento, el verano tiene las mejores probabilidades de días soleados para disfrutar la ciudad.',
    rainySeasons:
      'Londres llueve durante todo el año, pero sin una estación muy concentrada. Octubre–noviembre tienen mayor frecuencia de lluvias. Contrariamente a su fama, Londres no es de las más lluviosas de Europa en milímetros acumulados.',
    avgTempRange: '4°C – 25°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Londres?',
        answer:
          'Londres tiene un clima oceánico templado: inviernos suaves (4–10°C) y veranos frescos (18–25°C). Las temperaturas extremas son raras, aunque las olas de calor son cada vez más frecuentes.',
      },
      {
        question: '¿Llueve mucho en Londres?',
        answer:
          'Londres tiene fama de lluviosa pero en realidad recibe menos lluvia (600 mm anuales) que Roma o Miami. Lo que la caracteriza es la frecuencia de días nublados y la llovizna fina, más que los aguaceros intensos.',
      },
    ],
  },
  paris: {
    bestTimeToVisit:
      'Abril–junio y septiembre–octubre son las épocas ideales para visitar París: temperaturas de 15–22°C, cafés en terraza, jardines en flor y menos turistas que en el apogeo del verano. Junio tiene los días más largos y el ambiente más animado de la ciudad.',
    rainySeasons:
      'Las lluvias están distribuidas durante todo el año sin una estación seca. Mayo y junio suelen ser los meses más soleados; noviembre–enero son los más grises y fríos.',
    avgTempRange: '3°C – 35°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en París?',
        answer:
          'París tiene un clima oceánico continental: inviernos fríos (2–8°C), veranos cálidos que pueden superar los 35°C en olas de calor, y primaveras y otoños muy agradables (15–22°C).',
      },
    ],
  },
  tokyo: {
    bestTimeToVisit:
      'Marzo–mayo (floración de los cerezos, sakura) y octubre–noviembre (momiji, hojas otoñales) son las dos épocas más icónicas para visitar Tokio, con temperaturas de 15–22°C y eventos naturales únicos. El verano (julio–agosto) es caluroso y húmedo, y el invierno es frío pero seco.',
    rainySeasons:
      'Tokio tiene una temporada de lluvias (tsuyu) de mediados de junio a mediados de julio, con lluvias frecuentes. El verano también tiene tifones ocasionales.',
    avgTempRange: '3°C – 32°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Tokio?',
        answer:
          'Tokio tiene cuatro estaciones bien definidas: inviernos fríos y secos (3–10°C), primaveras agradables (10–20°C), veranos calurosos y húmedos (25–32°C) y otoños perfectos (10–20°C).',
      },
      {
        question: '¿Cuándo florecen los cerezos en Tokio?',
        answer:
          'Los cerezos (sakura) florecen en Tokio generalmente entre finales de marzo y principios de abril, dependiendo del año. El pico de floración dura unos 7–10 días.',
      },
    ],
  },
  berlin: {
    bestTimeToVisit:
      'Junio–agosto es el mejor período para visitar Berlín: veranos soleados de 20–28°C con días que duran hasta las 22 horas en junio, festivales de música al aire libre y la ciudad en su versión más animada. La primavera (abril–mayo) también es muy agradable.',
    rainySeasons:
      'Las precipitaciones se distribuyen durante el año. Las nevadas son comunes de diciembre a febrero. Los veranos son relativamente secos.',
    avgTempRange: '-5°C – 30°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Berlín?',
        answer:
          'Berlín tiene un clima continental húmedo con inviernos fríos que pueden bajar a -10°C y veranos cálidos (20–30°C). La primavera llega de golpe y es muy agradable.',
      },
    ],
  },
  rome: {
    bestTimeToVisit:
      'Abril–mayo y octubre son las épocas doradas de Roma: temperaturas de 18–25°C, menos turistas que en el verano y condiciones perfectas para recorrer el Coliseo, el Vaticano y los barrios históricos a pie sin sufrir el calor.',
    rainySeasons:
      'Las lluvias se concentran en otoño e invierno (octubre–febrero). El verano (junio–agosto) es caluroso, seco y muy turístico.',
    avgTempRange: '6°C – 35°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Roma?',
        answer:
          'Roma tiene un clima mediterráneo clásico: veranos calurosos y secos (28–35°C) e inviernos suaves y lluviosos (6–14°C). Julio y agosto son los meses más secos y calurosos.',
      },
      {
        question: '¿Cuándo ir a Roma para evitar el calor?',
        answer:
          'Abril–mayo y septiembre–octubre tienen las temperaturas más agradables (18–25°C) y menos masificación que el verano. Julio y agosto en Roma pueden ser muy calurosos con mucha gente.',
      },
    ],
  },
  amsterdam: {
    bestTimeToVisit:
      'Abril–mayo (tulipanes y temperaturas agradables de 14–18°C) y junio–agosto (el verano más soleado, 18–22°C) son los mejores meses para visitar Ámsterdam. Abril es especialmente icónico con los campos de tulipanes de los alrededores en plena floración.',
    rainySeasons:
      'Ámsterdam llueve durante todo el año, con mayor frecuencia en otoño e invierno. Un impermeable compacto es prácticamente obligatorio en cualquier época.',
    avgTempRange: '2°C – 22°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Ámsterdam?',
        answer:
          'Ámsterdam tiene un clima oceánico fresco: inviernos templados (2–8°C) y veranos frescos (18–22°C). La lluvia es frecuente durante todo el año.',
      },
    ],
  },
  dubai: {
    bestTimeToVisit:
      'Noviembre a marzo es la única época realmente cómoda para visitar Dubái, con temperaturas de 20–28°C y cielos despejados. En esos meses se concentra el turismo, el turismo de playas y los grandes eventos. El verano (junio–septiembre) es peligrosamente caluroso para cualquier actividad al exterior.',
    rainySeasons:
      'Dubái tiene precipitaciones mínimas (menos de 100 mm anuales). Llueve ocasionalmente entre noviembre y marzo.',
    avgTempRange: '15°C – 48°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Dubái en verano?',
        answer:
          'El verano en Dubái (junio–septiembre) es extremo: temperaturas de 40–48°C con humedad que puede superar el 90%. La sensación térmica puede superar los 55°C. La mayor parte de la vida transcurre en interiores con aire acondicionado.',
      },
      {
        question: '¿Cuándo es la mejor época para visitar Dubái?',
        answer:
          'Noviembre a marzo, cuando las temperaturas son de 20–28°C. Es también la época de los grandes festivales de compras y los eventos deportivos internacionales.',
      },
    ],
  },
  sydney: {
    bestTimeToVisit:
      'Septiembre–noviembre (primavera austral) son los mejores meses para visitar Sídney: temperaturas de 18–24°C, sin el calor extremo del verano ni las lluvias del otoño. El verano (diciembre–febrero) también es muy atractivo para las playas de Bondi pero con calor y radiación UV muy altos.',
    rainySeasons:
      'Sídney tiene lluvias moderadas distribuidas durante el año, con mayor concentración en otoño e invierno (marzo–agosto). El verano puede traer días de calor extremo con riesgo de incendios forestales.',
    avgTempRange: '8°C – 35°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Sídney?',
        answer:
          'Sídney tiene un clima templado oceánico. Al estar en el hemisferio sur, el verano es diciembre–febrero (22–28°C) y el invierno es junio–agosto (8–17°C), suave y seco.',
      },
    ],
  },
  toronto: {
    bestTimeToVisit:
      'Junio a septiembre es el verano de Toronto, con temperaturas de 20–28°C perfectas para el Festival Internacional de Cine de Toronto (septiembre), las islas de la bahía y los parques. El otoño (septiembre–octubre) tiene el icónico cambio de color de las hojas.',
    rainySeasons:
      'Toronto tiene precipitaciones durante todo el año. El invierno (diciembre–marzo) trae nevadas frecuentes y frío intenso, con el efecto lago del Ontario amplificando las nevadas.',
    avgTempRange: '-15°C – 30°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Toronto?',
        answer:
          'Toronto tiene cuatro estaciones marcadas: inviernos fríos (-15 a -5°C), primaveras agradables (5–18°C), veranos calurosos (20–28°C) y otoños frescos (5–18°C).',
      },
    ],
  },

  // ── EEUU adicional ────────────────────────────────────────────────────────
  'los-angeles': {
    bestTimeToVisit:
      'Septiembre–noviembre es el otoño de Los Ángeles: temperaturas de 22–28°C, menos niebla matutina que en verano y menor afluencia turística. Octubre puede traer los vientos Santa Ana que suben la temperatura a 35°C, pero también son los días más claros del año con visibilidad excepcional.',
    rainySeasons:
      'Los Ángeles tiene muy pocas lluvias (380 mm anuales), concentradas en invierno (noviembre–marzo). El verano (junio–agosto) tiene el fenómeno "June Gloom" de niebla matutina.',
    avgTempRange: '10°C – 35°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Los Ángeles?',
        answer:
          'Los Ángeles tiene un clima mediterráneo seco: veranos cálidos y secos (25–32°C) e inviernos muy suaves (12–18°C). Las mañanas de verano pueden ser grises por la niebla del Pacífico ("June Gloom").',
      },
    ],
  },
  chicago: {
    bestTimeToVisit:
      'Junio–agosto es el verano de Chicago, sorprendentemente cálido (22–30°C) y muy animado con festivales de música, el lago Michigan y las terrazas. Sin embargo, el viento del lago puede hacer las temperaturas más variables de lo esperado.',
    rainySeasons:
      'Las precipitaciones están distribuidas durante el año. El invierno (diciembre–febrero) trae nevadas frecuentes y frío extremo, amplificado por el viento del lago Michigan.',
    avgTempRange: '-20°C – 35°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Chicago?',
        answer:
          'Chicago tiene uno de los climas más extremos de las grandes ciudades de EE.UU.: inviernos brutales (-20°C con viento) y veranos calurosos y húmedos (hasta 35°C). La diferencia entre las estaciones es de más de 50°C.',
      },
      {
        question: '¿Por qué llaman a Chicago "Ciudad del Viento"?',
        answer:
          'El apodo viene del viento que sopla desde el lago Michigan, que puede bajar la temperatura sensible varios grados y convertir -5°C en una experiencia de -15°C. El viento es constante durante todo el año pero especialmente intenso en invierno.',
      },
    ],
  },
  miami: {
    bestTimeToVisit:
      'Noviembre a abril es la temporada seca de Miami, perfecta para las playas de South Beach, el Art Deco District y Everglades, con temperaturas de 22–28°C y humedad más tolerable. El verano (junio–septiembre) es caluroso, muy húmedo y con tormentas casi diarias.',
    rainySeasons:
      'De mayo a octubre hay tormentas eléctricas casi diarias, generalmente a media tarde. La temporada de huracanes va de junio a noviembre, con pico en agosto–septiembre.',
    avgTempRange: '18°C – 35°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Miami?',
        answer:
          'Miami tiene un clima subtropical con calor durante todo el año: de 22–28°C en invierno a 30–35°C en verano, siempre con alta humedad.',
      },
      {
        question: '¿Cuándo es la temporada de huracanes en Miami?',
        answer:
          'De junio a noviembre, con mayor riesgo en agosto y septiembre. Miami ha sido impactada por huracanes en el pasado y el riesgo es real en esos meses.',
      },
    ],
  },
  'san-francisco': {
    bestTimeToVisit:
      'Septiembre–octubre es el mejor período para San Francisco: el verano tardío californiano con temperaturas de 18–22°C, menos niebla que en julio–agosto y los mejores días del año en la ciudad. Muchos locales llaman a octubre "el mejor mes del año" en San Francisco.',
    rainySeasons:
      'Las lluvias se concentran de noviembre a marzo (380 mm anuales). El verano (junio–agosto) es seco pero frío y nublado por la niebla del Pacífico.',
    avgTempRange: '8°C – 25°C todo el año',
    faq: [
      {
        question: '¿Qué temperatura hace en San Francisco?',
        answer:
          'San Francisco tiene un microclima único: los veranos son frescos y nublados (14–20°C en el centro) mientras el resto de California tiene 38°C. Las temperaturas son muy estables durante el año, raramente bajando de 8°C o superando los 25°C.',
      },
      {
        question: '¿Qué es la niebla de San Francisco?',
        answer:
          '"Karl the Fog" es el apodo de la niebla característica de San Francisco que llega del Pacífico. Cubre la ciudad casi a diario de junio a agosto, especialmente las mañanas y las tardes. El Puente Golden Gate aparece y desaparece entre la niebla de forma espectacular.',
      },
    ],
  },

  // ── Canadá adicional ──────────────────────────────────────────────────────
  vancouver: {
    bestTimeToVisit:
      'Julio–agosto son los únicos meses verdaderamente soleados de Vancouver, con temperaturas de 22–26°C perfectas para Stanley Park, Granville Island y las playas de English Bay. El resto del año es mayoritariamente lluvioso y nublado.',
    rainySeasons:
      'Vancouver llueve durante la mayor parte del año (160+ días), con mayor intensidad de octubre a marzo. El verano (junio–septiembre) es el único período relativamente seco.',
    avgTempRange: '2°C – 26°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Vancouver?',
        answer:
          'Vancouver tiene el clima más suave de Canadá: inviernos lluviosos y templados (2–10°C) y veranos frescos y soleados (20–26°C). La nieve en la ciudad es rara aunque las montañas cercanas tienen esquí excelente.',
      },
    ],
  },
  montreal: {
    bestTimeToVisit:
      'Junio–agosto es el verano de Montreal, corto pero intenso: temperaturas de 24–30°C, festivales de jazz y comedia, patios animados y el ambiente más vibrante de la ciudad. El invierno, aunque muy frío, tiene su propio atractivo con el Festival de Invierno y el Canal Rideau congelado.',
    rainySeasons:
      'Las precipitaciones incluyen nevadas masivas (200+ cm anuales) de diciembre a marzo. El verano es cálido y húmedo, con tormentas ocasionales.',
    avgTempRange: '-25°C – 32°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Montreal?',
        answer:
          'Montreal tiene uno de los climas más extremos de cualquier gran ciudad del mundo: inviernos que bajan a -25°C y veranos que pueden superar 32°C, con más de 50°C de diferencia entre las estaciones.',
      },
    ],
  },
  calgary: {
    bestTimeToVisit:
      'Julio y agosto son los mejores meses de Calgary: temperaturas de 22–28°C, el famoso Stampede de julio (el rodeo más grande del mundo) y excursiones a las Rocosas Canadienses cuando los parques están plenamente accesibles.',
    rainySeasons:
      'Las precipitaciones incluyen nieve de octubre a abril. Las Chinooks (vientos cálidos de las Rocosas) pueden deshacer la nieve abruptamente incluso en pleno invierno.',
    avgTempRange: '-20°C – 30°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Calgary?',
        answer:
          'Calgary tiene un clima continental con inviernos fríos (-20°C) pero interrumpidos por las Chinooks (vientos cálidos que pueden subir la temperatura 30°C en pocas horas). Los veranos son cortos pero soleados (20–28°C).',
      },
      {
        question: '¿Qué son las Chinooks en Calgary?',
        answer:
          'Las Chinooks son vientos cálidos y secos que descienden de las Montañas Rocosas, capaces de subir la temperatura de -20°C a +15°C en pocas horas. Este fenómeno único hace el invierno de Calgary más tolerable que en otras ciudades canadienses.',
      },
    ],
  },
  ottawa: {
    bestTimeToVisit:
      'Junio a agosto son los mejores meses de Ottawa: temperaturas de 20–28°C, festivales de verano y los museos nacionales en temporada alta. El Canal Rideau congelado en enero–febrero es un atractivo invernal único, pero requiere preparación para el frío extremo.',
    rainySeasons:
      'Las nevadas de diciembre a marzo son abundantes. El verano puede traer tormentas eléctricas ocasionales.',
    avgTempRange: '-25°C – 30°C según estación',
    faq: [
      {
        question: '¿Qué temperatura hace en Ottawa?',
        answer:
          'Ottawa es oficialmente la segunda capital más fría del mundo (después de Ulan Bator), con inviernos que bajan a -25°C y veranos cálidos de 20–28°C.',
      },
    ],
  },
};

export function getCityClimate(slug: string): CityClimate | null {
  return cityClimate[slug.toLowerCase()] ?? null;
}
