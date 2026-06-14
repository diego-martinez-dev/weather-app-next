export interface GlossaryTerm {
  term: { es: string; en: string };
  definition: { es: string; en: string };
  relatedGuide?: string;
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: { es: 'Presión atmosférica', en: 'Atmospheric pressure' },
    definition: {
      es: 'Es el peso del aire que hay sobre un punto determinado de la superficie terrestre, medido en hectopascales (hPa) o milibares (mb). La presión estándar al nivel del mar es 1013 hPa. Las variaciones de presión son el motor del viento y de los sistemas meteorológicos: el aire se mueve de zonas de alta presión a zonas de baja presión.',
      en: 'The weight of the air above a specific point on the Earth\'s surface, measured in hectopascals (hPa) or millibars (mb). Standard sea-level pressure is 1013 hPa. Pressure variations drive wind and weather systems: air moves from high-pressure to low-pressure areas.',
    },
    relatedGuide: 'diferencia-entre-clima-y-tiempo',
  },
  {
    term: { es: 'Punto de rocío', en: 'Dew point' },
    definition: {
      es: 'La temperatura a la que el aire se debe enfriar, a presión constante, para que el vapor de agua que contiene comience a condensarse en forma de rocío o niebla. Cuanto más cerca está la temperatura del aire al punto de rocío, mayor es la humedad relativa. Cuando ambas temperaturas coinciden, la humedad relativa es del 100% y el agua se condensa.',
      en: 'The temperature to which air must be cooled, at constant pressure, for the water vapor it contains to begin condensing as dew or fog. The closer the air temperature is to the dew point, the higher the relative humidity. When they are equal, relative humidity reaches 100% and condensation occurs.',
    },
    relatedGuide: 'humedad-relativa-como-afecta-tu-salud',
  },
  {
    term: { es: 'Frente frío', en: 'Cold front' },
    definition: {
      es: 'La zona de contacto entre una masa de aire frío que avanza y desplaza a una masa de aire más cálido. El aire frío, más denso, se introduce por debajo del aire cálido y lo eleva bruscamente. Esto genera nubes de desarrollo vertical, tormentas, lluvias intensas y un descenso brusco de temperatura tras el paso del frente.',
      en: 'The boundary between an advancing cold air mass and the warmer air it displaces. Cold, denser air wedges under the warm air and lifts it sharply, producing vertically developed clouds, storms, heavy rain, and a sudden temperature drop after the front passes.',
    },
  },
  {
    term: { es: 'Frente cálido', en: 'Warm front' },
    definition: {
      es: 'La zona de contacto donde una masa de aire cálido avanza y se desliza gradualmente sobre una masa de aire frío más densa. A diferencia del frente frío, el ascenso del aire es lento y progresivo, lo que produce nubes altas (cirrus, altostratus) que se van espesando con el tiempo, seguidas de lluvias suaves y prolongadas.',
      en: 'The boundary where a warm air mass advances and gradually glides over a denser cold air mass. Unlike a cold front, the air rises slowly and progressively, producing high clouds (cirrus, altostratus) that gradually thicken, followed by light, prolonged rainfall.',
    },
    relatedGuide: 'tipos-de-nubes-y-que-clima-anuncian',
  },
  {
    term: { es: 'Humedad relativa', en: 'Relative humidity' },
    definition: {
      es: 'El porcentaje de vapor de agua que contiene el aire en relación con la cantidad máxima que podría contener a esa temperatura. Una humedad relativa del 100% significa que el aire está completamente saturado y el vapor de agua comenzará a condensarse. El rango de confort para los humanos está entre el 40% y el 60%.',
      en: 'The percentage of water vapor in the air relative to the maximum amount it could hold at that temperature. A relative humidity of 100% means the air is fully saturated and water vapor will begin to condense. The comfortable range for humans is between 40% and 60%.',
    },
    relatedGuide: 'humedad-relativa-como-afecta-tu-salud',
  },
  {
    term: { es: 'Humedad absoluta', en: 'Absolute humidity' },
    definition: {
      es: 'La cantidad real de vapor de agua presente en el aire, expresada en gramos de vapor por kilogramo de aire seco o por metro cúbico. A diferencia de la humedad relativa, la humedad absoluta no depende de la temperatura: si no se agrega ni quita vapor de agua, permanece constante aunque la temperatura cambie.',
      en: 'The actual amount of water vapor present in the air, expressed in grams of vapor per kilogram of dry air or per cubic meter. Unlike relative humidity, absolute humidity does not depend on temperature: if no vapor is added or removed, it stays constant even when temperature changes.',
    },
  },
  {
    term: { es: 'Sensación térmica', en: 'Apparent temperature / Feels like' },
    definition: {
      es: 'La temperatura que el cuerpo humano percibe, que combina la temperatura del aire con otros factores como la humedad y el viento. Con calor y humedad alta, la sensación puede ser hasta 10–15°C mayor que la temperatura real. Con frío y viento fuerte, puede ser varios grados menor. Es el valor más relevante para la actividad humana al aire libre.',
      en: 'The temperature the human body perceives, combining air temperature with other factors like humidity and wind. In hot, humid conditions it can feel 10–15°C warmer than the actual temperature. In cold, windy conditions it can feel several degrees colder. It is the most relevant value for outdoor human activity.',
    },
    relatedGuide: 'que-es-la-sensacion-termica',
  },
  {
    term: { es: 'Isobaras', en: 'Isobars' },
    definition: {
      es: 'Líneas que unen puntos del mapa meteorológico con la misma presión atmosférica en un momento dado. Las isobaras cerradas forman sistemas de alta presión (anticiclones) o baja presión (borrascas). Cuanto más juntas están las isobaras, mayor es el gradiente de presión y más intenso el viento en esa zona.',
      en: 'Lines on weather maps connecting points of equal atmospheric pressure at a given moment. Closed isobars form high-pressure systems (anticyclones) or low-pressure systems (depressions). The closer the isobars, the steeper the pressure gradient and the stronger the wind in that area.',
    },
  },
  {
    term: { es: 'Índice UV', en: 'UV index' },
    definition: {
      es: 'Una escala numérica internacional que mide la intensidad de la radiación ultravioleta solar que llega a la superficie terrestre en un momento dado. Va de 0 (nulo) a 11+ (extremo). A partir de nivel 3 es recomendable protección solar; a partir de nivel 8 la protección es esencial para evitar quemaduras en menos de 20 minutos.',
      en: 'An international numerical scale measuring the intensity of solar ultraviolet radiation reaching the Earth\'s surface at a given time. It ranges from 0 (none) to 11+ (extreme). From level 3 upward, sun protection is recommended; from level 8, protection is essential to avoid burns in under 20 minutes.',
    },
    relatedGuide: 'indice-uv-que-significa-cada-nivel',
  },
  {
    term: { es: 'Precipitación', en: 'Precipitation' },
    definition: {
      es: 'Todo el agua que cae desde la atmósfera a la superficie terrestre en cualquier forma: lluvia, llovizna, nieve, granizo, aguanieve o escarcha. Se mide en milímetros (mm) o litros por metro cuadrado. 1 mm de precipitación equivale a 1 litro de agua caído sobre cada metro cuadrado del suelo.',
      en: 'All water falling from the atmosphere to the Earth\'s surface in any form: rain, drizzle, snow, hail, sleet, or frost. Measured in millimeters (mm) or liters per square meter. 1 mm of precipitation equals 1 liter of water falling on each square meter of ground.',
    },
    relatedGuide: 'como-se-mide-la-lluvia-y-probabilidades',
  },
  {
    term: { es: 'Ráfaga', en: 'Wind gust' },
    definition: {
      es: 'Un aumento breve e intenso en la velocidad del viento que supera significativamente la velocidad media. Las ráfagas duran segundos y pueden doblar o triplicar la velocidad media del viento. Son especialmente peligrosas en tormentas, ya que pueden tumbar árboles, arrancar techos y convertir objetos en proyectiles.',
      en: 'A brief, intense increase in wind speed that significantly exceeds the average wind speed. Gusts last only seconds but can double or triple the mean wind speed. They are especially dangerous during storms, as they can topple trees, tear off roofs, and turn objects into projectiles.',
    },
  },
  {
    term: { es: 'Borrasca', en: 'Low-pressure system / Depression' },
    definition: {
      es: 'Un sistema meteorológico caracterizado por presión atmosférica más baja que el entorno. El aire converge hacia el centro y asciende, lo que favorece la formación de nubes y precipitaciones. Las borrascas están asociadas con vientos en sentido antihorario en el hemisferio norte y horario en el hemisferio sur.',
      en: 'A weather system characterized by lower atmospheric pressure than its surroundings. Air converges toward the center and rises, favoring cloud formation and precipitation. Low-pressure systems are associated with counterclockwise winds in the Northern Hemisphere and clockwise winds in the Southern Hemisphere.',
    },
  },
  {
    term: { es: 'Anticiclón', en: 'Anticyclone' },
    definition: {
      es: 'Un sistema meteorológico de alta presión donde el aire desciende desde las capas superiores de la atmósfera hacia la superficie. Este descenso inhibe la formación de nubes, por lo que los anticiclones suelen asociarse con tiempo estable, soleado y poco viento. En verano producen calor intenso; en invierno, frío seco y nieblas.',
      en: 'A high-pressure weather system where air descends from upper atmospheric layers to the surface. This descent inhibits cloud formation, so anticyclones are typically associated with stable, sunny weather and light winds. In summer they produce intense heat; in winter, dry cold and fog.',
    },
  },
  {
    term: { es: 'Visibilidad', en: 'Visibility' },
    definition: {
      es: 'La distancia máxima a la que un objeto puede ser visto e identificado bajo las condiciones atmosféricas del momento. Se mide en metros o kilómetros. La niebla, la lluvia intensa, el polvo, el humo y el smog reducen la visibilidad. Una visibilidad inferior a 1 km se considera niebla densa según los estándares meteorológicos.',
      en: 'The maximum distance at which an object can be seen and identified under current atmospheric conditions. Measured in meters or kilometers. Fog, heavy rain, dust, smoke, and smog reduce visibility. Visibility below 1 km is classified as dense fog by meteorological standards.',
    },
  },
  {
    term: { es: 'Niebla', en: 'Fog' },
    definition: {
      es: 'Una nube a ras del suelo compuesta de minúsculas gotas de agua o cristales de hielo en suspensión que reducen la visibilidad horizontal a menos de 1 km. Se forma cuando el aire se enfría hasta el punto de rocío. Puede ser niebla de radiación (noches despejadas), de advección (cuando el aire húmedo pasa sobre una superficie fría) o de valle.',
      en: 'A ground-level cloud composed of tiny suspended water droplets or ice crystals that reduce horizontal visibility to below 1 km. It forms when air cools to the dew point. Types include radiation fog (clear nights), advection fog (moist air passing over cold surfaces), and valley fog.',
    },
    relatedGuide: 'tipos-de-nubes-y-que-clima-anuncian',
  },
  {
    term: { es: 'Granizo', en: 'Hail' },
    definition: {
      es: 'Precipitación sólida formada por bolas o piedras de hielo que se generan dentro de cumulonimbus de gran desarrollo vertical. Las corrientes ascendentes muy intensas dentro de la nube mantienen las partículas de hielo en el aire el tiempo suficiente para que capten capas sucesivas de agua y hielo, creciendo hasta que su peso supera la sustentación y caen.',
      en: 'Solid precipitation consisting of ice balls or stones formed inside cumulonimbus clouds with great vertical development. Very intense updrafts keep ice particles aloft long enough to accumulate successive layers of water and ice, growing until their weight exceeds the updraft and they fall.',
    },
    relatedGuide: 'que-hacer-ante-alerta-de-tormenta-o-calor-extremo',
  },
  {
    term: { es: 'Escarcha', en: 'Frost' },
    definition: {
      es: 'Depósito de cristales de hielo que se forma sobre superficies cuando la temperatura de estas baja por debajo de 0°C y hay suficiente vapor de agua en el aire que se deposita directamente en forma sólida (sublimación inversa). Se forma principalmente en noches despejadas y con poco viento, cuando la superficie irradia calor rápidamente.',
      en: 'A deposit of ice crystals that forms on surfaces when their temperature drops below 0°C and there is enough water vapor in the air to deposit directly in solid form (deposition). It forms mainly on clear, calm nights when the surface radiates heat rapidly.',
    },
  },
  {
    term: { es: 'Corriente en chorro (jet stream)', en: 'Jet stream' },
    definition: {
      es: 'Una corriente de viento de alta velocidad (150–300 km/h) que circula en la troposfera alta y estratosfera baja, a unos 8–15 km de altitud. Guía el movimiento de los sistemas de alta y baja presión en latitudes medias y tiene gran influencia en el tiempo en Europa, América del Norte y otros continentes. Su posición estacional determina qué tipo de tiempo domina en invierno o verano.',
      en: 'A high-speed wind current (150–300 km/h) flowing in the upper troposphere and lower stratosphere, at 8–15 km altitude. It steers high- and low-pressure systems in mid-latitudes and has great influence on weather across Europe, North America, and other continents. Its seasonal position determines which type of weather dominates in winter or summer.',
    },
  },
  {
    term: { es: 'Masa de aire', en: 'Air mass' },
    definition: {
      es: 'Un gran volumen de aire que tiene características de temperatura y humedad relativamente uniformes en horizontal. Se forman cuando el aire permanece estacionado sobre una región extensa (polar, tropical, oceánica, continental) durante días o semanas y adquiere las propiedades de esa superficie. El encuentro entre dos masas de aire distintas genera frentes meteorológicos.',
      en: 'A large volume of air with relatively uniform temperature and humidity characteristics horizontally. Air masses form when air stagnates over a large region (polar, tropical, oceanic, continental) for days or weeks, acquiring the surface\'s properties. Where two different air masses meet, weather fronts form.',
    },
  },
  {
    term: { es: 'Inversión térmica', en: 'Temperature inversion' },
    definition: {
      es: 'Un fenómeno en el que la temperatura aumenta con la altitud en lugar de disminuir, como es lo normal en la troposfera. Actúa como una tapa que impide la mezcla vertical del aire y atrapa contaminantes, polvo y humedad cerca de la superficie. Es la causa principal de los episodios de smog y niebla persistente en ciudades ubicadas en valles o rodeadas de montañas.',
      en: 'A phenomenon in which temperature increases with altitude instead of decreasing, as is normal in the troposphere. It acts as a cap that prevents vertical air mixing and traps pollutants, dust, and humidity near the surface. It is the main cause of smog episodes and persistent fog in cities located in valleys or surrounded by mountains.',
    },
  },
  {
    term: { es: 'Presión a nivel del mar', en: 'Sea-level pressure' },
    definition: {
      es: 'La presión atmosférica calculada como si cada punto de medición estuviera al nivel del mar, independientemente de la altitud real del lugar. Esta corrección permite comparar las lecturas de presión entre estaciones meteorológicas ubicadas a distintas alturas. El valor estándar es 1013,25 hPa.',
      en: 'Atmospheric pressure calculated as if each measurement point were at sea level, regardless of the location\'s actual altitude. This correction allows comparing pressure readings between weather stations at different elevations. The standard value is 1013.25 hPa.',
    },
  },
  {
    term: { es: 'Nubosidad', en: 'Cloud cover' },
    definition: {
      es: 'La fracción del cielo cubierta por nubes en un momento dado, expresada en octavos (octas) de 0 a 8, donde 0 es cielo despejado y 8 es totalmente cubierto. En las apps del tiempo suele representarse como porcentaje (0–100%) o con descripciones como "despejado", "parcialmente nublado", "muy nublado" o "cubierto".',
      en: 'The fraction of the sky covered by clouds at a given moment, expressed in eighths (oktas) from 0 to 8, where 0 is clear sky and 8 is completely overcast. In weather apps it is usually shown as a percentage (0–100%) or with descriptions like "clear," "partly cloudy," "mostly cloudy," or "overcast."',
    },
  },
  {
    term: { es: 'Ozono', en: 'Ozone' },
    definition: {
      es: 'Una molécula formada por tres átomos de oxígeno (O₃). En la estratosfera (15–35 km de altitud) forma la capa de ozono, que absorbe la mayor parte de la radiación UV dañina del sol. En la troposfera (a nivel del suelo) es un contaminante secundario formado por reacciones fotoquímicas entre óxidos de nitrógeno y compuestos orgánicos volátiles, y es un componente del smog fotoquímico.',
      en: 'A molecule made of three oxygen atoms (O₃). In the stratosphere (15–35 km altitude) it forms the ozone layer, which absorbs most of the sun\'s harmful UV radiation. In the troposphere (at ground level) it is a secondary pollutant formed by photochemical reactions and is a component of photochemical smog.',
    },
    relatedGuide: 'indice-uv-que-significa-cada-nivel',
  },
  {
    term: { es: 'Smog', en: 'Smog' },
    definition: {
      es: 'Una mezcla de humo (smoke) y niebla (fog) que reduce la visibilidad y la calidad del aire en zonas urbanas e industriales. Existen dos tipos: el smog clásico o de Londres (mezcla de dióxido de azufre y partículas, típico de industrias carboneras) y el smog fotoquímico (formado por la reacción de contaminantes vehiculares con la luz solar, propio de ciudades con mucho tráfico y sol intenso como Ciudad de México, Los Ángeles o Santiago).',
      en: 'A mixture of smoke and fog that reduces visibility and air quality in urban and industrial areas. Two types exist: classic or London smog (sulfur dioxide and particles from coal industries) and photochemical smog (formed by the reaction of vehicle emissions with sunlight, typical in cities with heavy traffic and intense sunshine).',
    },
  },
  {
    term: { es: 'Ola de calor', en: 'Heat wave' },
    definition: {
      es: 'Un período de al menos tres días consecutivos en que las temperaturas superan en 5°C o más el promedio histórico para esa época del año en una región determinada. Las definiciones varían según el país y el organismo meteorológico, pero el factor clave es la duración: los efectos sobre la salud se acumulan cuando el calor persiste noche y día sin dar al organismo tiempo de recuperarse.',
      en: 'A period of at least three consecutive days when temperatures exceed the historical average by 5°C or more for that time of year in a given region. Definitions vary by country and meteorological agency, but the key factor is duration: health effects accumulate when heat persists day and night without giving the body time to recover.',
    },
    relatedGuide: 'que-hacer-ante-alerta-de-tormenta-o-calor-extremo',
  },
  {
    term: { es: 'Cizalladura del viento', en: 'Wind shear' },
    definition: {
      es: 'El cambio de velocidad y/o dirección del viento en un espacio corto, ya sea en vertical (entre distintas altitudes) o en horizontal (en una misma altitud). La cizalladura es esencial para el desarrollo de tormentas severas y tornados. También es un peligro para la aviación: un cambio brusco de viento durante el despegue o aterrizaje puede desestabilizar una aeronave.',
      en: 'A change in wind speed and/or direction over a short distance, either vertically (between different altitudes) or horizontally (at the same altitude). Wind shear is essential for the development of severe storms and tornadoes. It is also an aviation hazard: a sudden wind change during takeoff or landing can destabilize an aircraft.',
    },
  },
  {
    term: { es: 'ENSO (El Niño / La Niña)', en: 'ENSO (El Niño / La Niña)' },
    definition: {
      es: 'El ENSO (El Niño-Oscilación del Sur) es un patrón climático recurrente que involucra cambios en la temperatura del Océano Pacífico tropical. El Niño ocurre cuando las aguas del Pacífico oriental se calientan anormalmente, alterando las lluvias y temperaturas en gran parte del mundo. La Niña es el fenómeno opuesto: aguas más frías que lo normal. Ambos tienen efectos drásticos en Colombia, Perú, Brasil y toda Latinoamérica.',
      en: 'ENSO (El Niño-Southern Oscillation) is a recurring climate pattern involving temperature changes in the tropical Pacific Ocean. El Niño occurs when eastern Pacific waters warm abnormally, altering rainfall and temperatures across much of the world. La Niña is the opposite: cooler-than-normal waters. Both have dramatic effects across Latin America.',
    },
  },
];
