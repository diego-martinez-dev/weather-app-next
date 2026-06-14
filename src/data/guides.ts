export interface Guide {
  slug: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  date: string;
  body: { es: string; en: string };
}

export const guides: Guide[] = [
  {
    slug: 'como-leer-un-pronostico-del-tiempo',
    title: {
      es: 'Cómo leer e interpretar un pronóstico del tiempo',
      en: 'How to Read and Interpret a Weather Forecast',
    },
    description: {
      es: 'Aprende a interpretar correctamente un pronóstico del tiempo: qué significa cada variable, cómo se generan los modelos y por qué los pronósticos no siempre aciertan.',
      en: 'Learn how to correctly interpret a weather forecast: what each variable means, how models are generated, and why forecasts are not always accurate.',
    },
    date: '2026-06-14',
    body: {
      es: `Un pronóstico del tiempo no es una promesa: es una estimación probabilística basada en modelos matemáticos que procesan millones de datos cada día. Entender qué hay detrás de esos números y símbolos te permite tomar decisiones más inteligentes y dejar de frustrarte cuando el tiempo no se comporta como decía la app.

## Qué es un modelo meteorológico

Los pronósticos modernos se generan mediante modelos numéricos de predicción, que son programas informáticos de enorme complejidad. Estos modelos dividen la atmósfera en una cuadrícula tridimensional y aplican las leyes físicas de la termodinámica y la dinámica de fluidos para simular cómo evolucionará el estado del aire en las próximas horas y días.

Los centros meteorológicos más conocidos —el ECMWF europeo, el GFS americano, el ICON alemán— corren sus modelos varias veces al día utilizando datos de satélites, globos sonda, boyas oceánicas y estaciones terrestres. Cada modelo produce ligeramente resultados diferentes porque usa distintas ecuaciones y resoluciones espaciales.

## Qué significan las variables principales

**Temperatura**: el valor que ves en la app corresponde a la temperatura del aire medida a dos metros del suelo en la sombra. No es la temperatura que sentís al sol ni sobre el asfalto, que pueden ser 10-15°C más altas.

**Sensación térmica**: combina temperatura, humedad y velocidad del viento para estimar cómo percibe el cuerpo humano el calor o el frío. Con 35°C y alta humedad, la sensación puede superar los 42°C. Con -5°C y viento fuerte, puede sentirse como -15°C.

**Probabilidad de lluvia**: este porcentaje indica la probabilidad de que caiga al menos 1 mm de lluvia en el área durante el período indicado. Un 70% no significa que lloverá el 70% del tiempo; significa que en 7 de cada 10 situaciones atmosféricas similares, cayó lluvia. Si ves 40%, es razonable llevar paraguas.

**Humedad relativa**: el porcentaje de vapor de agua que contiene el aire respecto al máximo que podría contener a esa temperatura. Una humedad del 90% no significa que hay mucha lluvia sino que el aire está muy saturado, lo cual hace que la evaporación del sudor sea lenta y el calor se sienta más intenso.

**Viento**: los pronósticos suelen mostrar velocidad media y dirección. Las ráfagas —picos momentáneos— pueden duplicar la velocidad media. La dirección indica de dónde viene el viento: viento norte viene del norte hacia el sur.

## Por qué los pronósticos fallan

Los pronósticos son más precisos cuanto más cerca en el tiempo. A 24 horas la precisión es alta. A 72 horas es razonablemente buena. A partir del día 5, la incertidumbre crece exponencialmente. Más allá de 10 días, los pronósticos tienen valor estadístico pero no deben tomarse como predicciones concretas.

La razón es el caos atmosférico: pequeñas diferencias en las condiciones iniciales producen grandes diferencias en el resultado a largo plazo. Es lo que se llama efecto mariposa. Ningún modelo puede capturar con precisión perfecta el estado inicial de la atmósfera porque los datos siempre tienen alguna imprecisión.

Los fenómenos locales como tormentas convectivas de tarde son especialmente difíciles de pronosticar en cuanto a ubicación exacta y horario. Un modelo puede prever que habrá tormentas en la región, pero no que la tormenta caerá exactamente sobre tu barrio a las 4:30 de la tarde.

## Cómo leer un pronóstico de 5 días

Mirá los primeros dos días con confianza. El día 3 y 4 tomalo como orientación. Del día 5 en adelante, usalo solo para tener una idea general de la tendencia: ¿habrá calor? ¿lluvia? ¿frío? pero no para planificar eventos con horario exacto.

Prestá atención a los íconos de condición climática, no solo a los números. Un cielo parcialmente nublado con 25°C y 30% de probabilidad de lluvia es muy diferente a un cielo cubierto con 25°C y 80% de lluvia, aunque la temperatura sea la misma.

Chequeá la fuente del pronóstico. Distintas apps usan distintos modelos. Si tenés una decisión importante, consultá dos o tres fuentes y fijate si coinciden.

## Consejo práctico

Para decisiones del día a día, el pronóstico de las próximas 6 horas es el más confiable. Para planificar una actividad al aire libre mañana, el pronóstico de 24 horas es sólido. Para planificar un viaje la semana que viene, revisá el pronóstico de 5-7 días cuando te quede un par de días para salir, no con una semana de anticipación.`,
      en: `A weather forecast is not a promise: it is a probabilistic estimate based on mathematical models that process millions of data points every day. Understanding what lies behind those numbers and symbols lets you make smarter decisions and stop being frustrated when the weather doesn't match the app.

## What is a meteorological model

Modern forecasts are generated by numerical prediction models — extremely complex computer programs. These models divide the atmosphere into a three-dimensional grid and apply the physical laws of thermodynamics and fluid dynamics to simulate how the state of the air will evolve over the coming hours and days.

The best-known meteorological centers — Europe's ECMWF, the American GFS, Germany's ICON — run their models several times a day using data from satellites, weather balloons, ocean buoys, and land stations. Each model produces slightly different results because it uses different equations and spatial resolutions.

## What the main variables mean

**Temperature**: the value you see in the app is the air temperature measured at two meters above the ground in the shade. It is not the temperature you feel in direct sunlight or over asphalt, which can be 10–15°C higher.

**Feels like (apparent temperature)**: combines temperature, humidity, and wind speed to estimate how the human body perceives heat or cold. At 35°C with high humidity, the apparent temperature can exceed 42°C. At -5°C with strong wind, it can feel like -15°C.

**Rain probability**: this percentage indicates the probability that at least 1 mm of rain will fall in the area during the stated period. 70% does not mean it will rain 70% of the time; it means that in 7 out of 10 similar atmospheric situations, rain fell. If you see 40%, it's reasonable to carry an umbrella.

**Relative humidity**: the percentage of water vapor in the air relative to the maximum it could hold at that temperature. A humidity of 90% doesn't mean heavy rain; it means the air is highly saturated, which slows sweat evaporation and makes heat feel more intense.

**Wind**: forecasts typically show average speed and direction. Gusts — momentary peaks — can double the average speed. Direction indicates where the wind is coming from: northerly wind comes from the north toward the south.

## Why forecasts fail

Forecasts are more accurate the closer in time they are. At 24 hours, accuracy is high. At 72 hours, it is reasonably good. Beyond day 5, uncertainty grows exponentially. Beyond 10 days, forecasts have statistical value but should not be taken as concrete predictions.

The reason is atmospheric chaos: small differences in initial conditions produce large differences in the outcome over time. This is what is called the butterfly effect. No model can perfectly capture the initial state of the atmosphere because data always carries some imprecision.

Local phenomena like afternoon convective storms are especially hard to forecast in terms of exact location and timing. A model may predict storms in a region, but not that the storm will fall precisely over your neighborhood at 4:30 in the afternoon.

## How to read a 5-day forecast

Trust the first two days. Take day 3 and 4 as guidance. From day 5 onward, use it only to get a general sense of the trend — will it be hot? Rainy? Cold? — but not to plan events with exact timing.

Pay attention to the weather condition icons, not just the numbers. Partly cloudy at 25°C with 30% rain probability is very different from overcast at 25°C with 80% rain probability, even though the temperature is the same.

Check the forecast source. Different apps use different models. For important decisions, consult two or three sources and see if they agree.

## Practical advice

For day-to-day decisions, the next 6-hour forecast is the most reliable. For planning an outdoor activity tomorrow, the 24-hour forecast is solid. For planning a trip next week, check the 5–7 day forecast when you have a couple of days left before departure, not a full week in advance.`,
    },
  },
  {
    slug: 'que-es-la-sensacion-termica',
    title: {
      es: 'Qué es la sensación térmica y por qué difiere de la temperatura real',
      en: 'What Is the Apparent Temperature and Why It Differs from the Actual Temperature',
    },
    description: {
      es: 'La sensación térmica puede diferir hasta 15°C de la temperatura real. Descubrí cómo se calcula, qué factores influyen y por qué es la cifra más útil para tu vida cotidiana.',
      en: 'The apparent temperature can differ by up to 15°C from the actual temperature. Discover how it is calculated, what factors influence it, and why it is the most useful figure for daily life.',
    },
    date: '2026-06-14',
    body: {
      es: `Cuando una app del tiempo dice 28°C pero salís a la calle y parece que hay 38°C, no está fallando. Está mostrando la temperatura del aire medida en la sombra. Lo que sentís en tu cuerpo es algo completamente diferente, y la **sensación térmica** —también llamada temperatura aparente— es el número que intenta capturar esa experiencia real.

## Qué mide exactamente la temperatura del aire

La temperatura meteorológica estándar se mide con un termómetro ubicado en una caseta de ventilación, a dos metros del suelo, protegida del sol directo y de la lluvia. Eso garantiza que el instrumento registre el calor del aire, no la radiación solar ni el calor reflejado por superficies.

El problema es que el cuerpo humano no es un termómetro en la sombra. Estamos expuestos al sol, caminamos sobre asfalto caliente, sudamos, recibimos el viento. La experiencia térmica que tenemos es el resultado de varios factores simultáneos.

## Los cuatro factores que construyen la sensación térmica

**1. Temperatura del aire**: el punto de partida. Con temperaturas suaves (15-22°C) los demás factores tienen poca influencia. En los extremos de calor o frío, los otros factores amplifican el efecto.

**2. Humedad relativa**: el factor más importante en climas cálidos. El cuerpo humano regula su temperatura principalmente a través del sudor. Cuando el aire ya está saturado de humedad (80-90%), el sudor no puede evaporarse eficientemente, y el calor se acumula en el cuerpo. Una temperatura de 35°C con humedad del 80% produce una sensación de hasta 46°C según el índice de calor.

**3. Velocidad del viento**: el factor dominante en climas fríos. El viento acelera la transferencia de calor desde la piel hacia el aire, enfriando el cuerpo más rápido. El índice de temperatura sensible al viento (wind chill) cuantifica este efecto: con -10°C y viento de 30 km/h, la sensación es de -20°C. Con viento de 60 km/h, puede bajar a -26°C.

**4. Radiación solar**: aunque generalmente no se incluye en los cálculos estándar de sensación térmica, la exposición directa al sol puede agregar entre 6°C y 12°C a la sensación percibida. Es por eso que en un día de 30°C al sol directo podés sentir 40°C fácilmente.

## Cómo se calcula la sensación térmica

Existen dos fórmulas principales según el contexto:

**Índice de calor (Heat Index)**: se aplica cuando la temperatura supera los 27°C y la humedad es significativa. Fue desarrollado por Robert Steadman y adoptado por el Servicio Meteorológico Nacional de EE.UU. Usa temperatura y humedad relativa para estimar la temperatura aparente en la sombra.

**Temperatura de viento (Wind Chill)**: se aplica cuando la temperatura está por debajo de 10°C y hay viento apreciable. Calcula cuánto tiempo tarda la piel expuesta en enfriarse al punto de congelación, combinando temperatura del aire y velocidad del viento.

Las apps modernas combinan ambas fórmulas según las condiciones: si hace calor y hay humedad, usan el índice de calor; si hace frío y hay viento, usan el wind chill. En condiciones templadas sin extremos, la sensación térmica y la temperatura suelen ser muy similares.

## Por qué importa en la práctica

La sensación térmica es el número más relevante para tu vida cotidiana porque determina:

- Si debés hidratarte más de lo habitual (calor + humedad alta)
- Si el ejercicio al aire libre es seguro o de riesgo
- Si necesitás más ropa de abrigo de lo que el termómetro sugiere (frío + viento)
- Si sos vulnerable a golpes de calor o hipotermia

Una regla práctica: en verano, cuando la temperatura supera los 32°C y la humedad está por encima del 60%, chequeá siempre la sensación térmica antes de hacer actividad física al aire libre. Una sensación de 40°C implica un riesgo real para la salud, especialmente en personas mayores, niños y personas con enfermedades cardiovasculares.

En invierno, cuando la temperatura baja de 5°C, prestá atención al wind chill antes de salir. La piel expuesta al viento puede sufrir congelación en minutos en condiciones extremas.

## La sensación térmica y el calentamiento global

Con el cambio climático, las olas de calor son más frecuentes e intensas. Lo que más preocupa a los epidemiólogos no es la temperatura máxima en sí, sino la combinación de temperatura alta + humedad alta que se está volviendo más común en regiones tropicales y subtropicales. Hay umbrales de temperatura y humedad combinados que el cuerpo humano, por más sano que esté, no puede tolerar sin ventilación artificial. La sensación térmica es la variable que mejor captura ese riesgo.`,
      en: `When a weather app says 28°C but you step outside and it feels like 38°C, the app isn't broken. It's showing the air temperature measured in the shade. What your body feels is something entirely different, and the **apparent temperature** — also called feels-like temperature — is the number that tries to capture that real experience.

## What air temperature actually measures

Standard meteorological temperature is measured by a thermometer inside a ventilated shelter, two meters above the ground, protected from direct sunlight and rain. This ensures the instrument records the heat of the air, not solar radiation or heat reflected from surfaces.

The problem is that the human body isn't a thermometer in the shade. We're exposed to the sun, we walk on hot asphalt, we sweat, we're buffeted by wind. Our thermal experience is the result of several simultaneous factors.

## The four factors that shape apparent temperature

**1. Air temperature**: the starting point. At mild temperatures (15–22°C), other factors have little influence. At heat or cold extremes, the other factors amplify the effect.

**2. Relative humidity**: the most important factor in warm climates. The human body regulates its temperature mainly through sweat. When the air is already saturated with moisture (80–90%), sweat can't evaporate efficiently and heat accumulates in the body. A temperature of 35°C with 80% humidity produces an apparent temperature of up to 46°C according to the heat index.

**3. Wind speed**: the dominant factor in cold climates. Wind accelerates the transfer of heat from the skin to the air, cooling the body faster. The wind chill index quantifies this effect: at -10°C with winds of 30 km/h, the apparent temperature is -20°C. With winds at 60 km/h, it can drop to -26°C.

**4. Solar radiation**: although usually not included in standard apparent temperature calculations, direct sun exposure can add 6–12°C to the perceived temperature. That's why on a 30°C day in direct sun you can easily feel 40°C.

## How apparent temperature is calculated

There are two main formulas depending on context:

**Heat Index**: applied when temperature exceeds 27°C and humidity is significant. Developed by Robert Steadman and adopted by the US National Weather Service. Uses temperature and relative humidity to estimate apparent temperature in the shade.

**Wind Chill**: applied when temperature is below 10°C and there is appreciable wind. It calculates how quickly exposed skin cools to the freezing point, combining air temperature and wind speed.

Modern apps combine both formulas depending on conditions: if it's hot and humid, they use the heat index; if it's cold and windy, they use wind chill. In mild conditions without extremes, apparent temperature and actual temperature are usually very similar.

## Why it matters in practice

Apparent temperature is the most relevant number for daily life because it determines:

- Whether you need to hydrate more than usual (heat + high humidity)
- Whether outdoor exercise is safe or risky
- Whether you need more clothing than the thermometer suggests (cold + wind)
- Whether you're vulnerable to heat stroke or hypothermia

A practical rule: in summer, when temperature exceeds 32°C and humidity is above 60%, always check the apparent temperature before outdoor physical activity. An apparent temperature of 40°C poses a real health risk, especially for older adults, children, and people with cardiovascular disease.

In winter, when temperature drops below 5°C, check the wind chill before going out. Exposed skin can suffer frostbite in minutes under extreme conditions.`,
    },
  },
  {
    slug: 'indice-uv-que-significa-cada-nivel',
    title: {
      es: 'Índice UV: qué significa cada nivel y cómo protegerte',
      en: 'UV Index: What Each Level Means and How to Protect Yourself',
    },
    description: {
      es: 'El índice UV mide la intensidad de la radiación ultravioleta del sol. Conocé qué significa cada nivel, cuándo es peligroso y qué medidas de protección debés tomar.',
      en: 'The UV index measures the intensity of ultraviolet radiation from the sun. Learn what each level means, when it becomes dangerous, and what protective measures to take.',
    },
    date: '2026-06-14',
    body: {
      es: `El sol emite radiación ultravioleta (UV) de forma continua, pero su intensidad varía enormemente según la hora, la estación, la latitud y las condiciones atmosféricas. El **índice UV** es una escala numérica internacional que mide esa intensidad y te dice qué tan protegido debés estar en cada momento.

## Qué es la radiación UV

La radiación UV es una forma de energía electromagnética con longitud de onda más corta que la luz visible. El sol emite principalmente tres tipos:

- **UVA (315-400 nm)**: llega a la superficie terrestre en grandes cantidades durante todo el día y todo el año. Penetra profundo en la piel, está asociada con el envejecimiento prematuro y puede contribuir al cáncer de piel.
- **UVB (280-315 nm)**: la mayoría es absorbida por la capa de ozono. La porción que llega produce la quemadura solar, estimula la producción de vitamina D y es la principal causa de cáncer de piel.
- **UVC (100-280 nm)**: completamente absorbida por la atmósfera. No llega a la superficie terrestre en condiciones normales.

## Cómo se calcula el índice UV

El índice UV integra la intensidad espectral de la radiación UV que llega a la superficie, ponderada por el efecto biológico en la piel humana. Un índice de 1 equivale aproximadamente a 25 mW/m² de irradiancia eritémica (la que produce quemadura). La Organización Mundial de la Salud (OMS) y la Organización Meteorológica Mundial (OMM) establecieron la escala estándar.

## Los niveles del índice UV

**1-2 (Bajo)**: riesgo mínimo para la mayoría de las personas. Podés estar al aire libre sin protección especial. Típico en días de invierno, a primeras horas de la mañana o al atardecer.

**3-5 (Moderado)**: protección recomendada. Usá protector solar SPF 30+ si vas a estar más de 20-30 minutos al sol. Cubrirte en las horas centrales del día es una buena práctica. Podés quemarte si te exponés sin protección durante 45-60 minutos.

**6-7 (Alto)**: protección necesaria. Sombrero, gafas de sol y ropa protectora son recomendables. El tiempo para quemarse sin protección puede ser de apenas 25-30 minutos. Reducí la exposición entre las 10 y las 16 horas.

**8-10 (Muy alto)**: protección esencial. Sin protección adecuada, la piel puede quemarse en 15-20 minutos. Evitá el sol al mediodía, usá SPF 50+, ropa de protección solar y buscá la sombra. Típico en veranos mediterráneos, zonas tropicales y en altitudes elevadas.

**11+ (Extremo)**: peligro real. La piel sin protección puede quemarse en menos de 10 minutos. Niveles frecuentes en zonas ecuatoriales, a gran altitud (Andes, Himalaya) y en el verano austral en Australia y Sudamérica. Hay que evitar el sol entre las 10 y las 16 horas y protegerse completamente.

## Qué factores amplían el índice UV

**Altitud**: la radiación UV aumenta aproximadamente un 10-12% por cada 1.000 metros de altitud porque hay menos atmósfera que la filtre. A 3.000 metros, la radiación puede ser un 30-40% más alta que a nivel del mar en el mismo ángulo solar.

**Reflexión de superficies**: la nieve refleja hasta el 80% de la radiación UV, la arena entre 15-25%, el agua entre 10-20%. Si estás esquiando o en la playa, la radiación total que recibís es mucho mayor.

**Ángulo solar**: el índice UV es máximo al mediodía solar, cuando el sol está en su punto más alto. En verano y cerca del ecuador, ese pico es más alto e intenso.

**Nubosidad**: las nubes reducen el índice UV pero no lo eliminan. Nubes altas y tenues pueden dejar pasar el 80-90% de la radiación. Una nublazón densa puede reducirla al 30%. Lo que no cambia es el riesgo de quemarse incluso en días nublados.

## Protector solar: cómo usarlo bien

El FPS (Factor de Protección Solar) o SPF en inglés indica cuánto tiempo podés estar al sol antes de quemarte en comparación con no tener protector. SPF 30 filtra el 97% de los rayos UVB; SPF 50 filtra el 98%. La diferencia parece pequeña pero es significativa en exposiciones prolongadas.

Para que funcione bien:
- Aplicarlo 20-30 minutos antes de la exposición
- Usar suficiente cantidad: al menos una cucharadita para la cara y media taza para el cuerpo completo
- Reaplicar cada 2 horas y después de nadar o sudar

El protector solar más eficaz es el que se usa de verdad; uno de SPF 30 aplicado correctamente protege más que uno de SPF 100 aplicado insuficientemente.

## Un dato que sorprende

Podés quemarte en un día de invierno soleado, especialmente en altitud. Si el índice UV está en 3 o 4 y estás en la nieve, la reflexión puede hacer que el índice efectivo supere 6. El índice UV no depende de la temperatura del aire: un día frío y soleado en los Alpes puede tener mayor riesgo UV que un día caluroso y nublado en la playa.`,
      en: `The sun continuously emits ultraviolet (UV) radiation, but its intensity varies enormously depending on the time of day, season, latitude, and atmospheric conditions. The **UV index** is an international numerical scale that measures that intensity and tells you how protected you need to be at any given moment.

## What UV radiation is

UV radiation is a form of electromagnetic energy with a shorter wavelength than visible light. The sun mainly emits three types:

- **UVA (315–400 nm)**: reaches the Earth's surface in large quantities throughout the day and year. Penetrates deep into the skin, associated with premature aging and can contribute to skin cancer.
- **UVB (280–315 nm)**: most is absorbed by the ozone layer. The portion that reaches us causes sunburn, stimulates vitamin D production, and is the main cause of skin cancer.
- **UVC (100–280 nm)**: completely absorbed by the atmosphere. Does not reach the Earth's surface under normal conditions.

## How the UV index is calculated

The UV index integrates the spectral intensity of UV radiation reaching the surface, weighted by the biological effect on human skin. An index of 1 equals approximately 25 mW/m² of erythemic irradiance (the kind that causes sunburn). The World Health Organization (WHO) and the World Meteorological Organization (WMO) established the standard scale.

## UV index levels

**1–2 (Low)**: minimal risk for most people. You can be outdoors without special protection. Typical on winter days, early morning, or late afternoon.

**3–5 (Moderate)**: protection recommended. Use SPF 30+ sunscreen if you'll be in the sun for more than 20–30 minutes. Seeking shade during midday hours is a good habit. You can burn in 45–60 minutes without protection.

**6–7 (High)**: protection needed. Hat, sunglasses, and protective clothing are advisable. Time to burn without protection can be as little as 25–30 minutes. Reduce exposure between 10 a.m. and 4 p.m.

**8–10 (Very High)**: protection essential. Without adequate protection, skin can burn in 15–20 minutes. Avoid midday sun, use SPF 50+, wear sun-protective clothing, and seek shade. Typical in Mediterranean summers, tropical areas, and at high altitudes.

**11+ (Extreme)**: real danger. Unprotected skin can burn in under 10 minutes. Common in equatorial zones, at high altitudes (Andes, Himalayas), and during the southern summer in Australia and South America. Avoid sun between 10 a.m. and 4 p.m. and protect yourself completely.

## Factors that increase the UV index

**Altitude**: UV radiation increases approximately 10–12% per 1,000 meters of altitude because there is less atmosphere to filter it. At 3,000 meters, radiation can be 30–40% higher than at sea level at the same solar angle.

**Surface reflection**: snow reflects up to 80% of UV radiation, sand 15–25%, water 10–20%. If you're skiing or at the beach, the total radiation you receive is much higher.

**Solar angle**: the UV index peaks at solar noon, when the sun is at its highest. In summer and near the equator, that peak is higher and more intense.

**Cloud cover**: clouds reduce the UV index but don't eliminate it. High, thin clouds can let through 80–90% of radiation. Dense overcast can reduce it to 30%. What doesn't change is the risk of burning even on cloudy days.

## Sunscreen: how to use it properly

SPF (Sun Protection Factor) indicates how long you can be in the sun before burning compared to not wearing sunscreen. SPF 30 filters 97% of UVB rays; SPF 50 filters 98%. The difference seems small but is significant during prolonged exposure.

To make it work:
- Apply 20–30 minutes before exposure
- Use enough: at least a teaspoon for the face and half a cup for the whole body
- Reapply every 2 hours and after swimming or sweating

The most effective sunscreen is the one you actually use; SPF 30 applied correctly protects more than SPF 100 applied insufficiently.`,
    },
  },
  {
    slug: 'humedad-relativa-como-afecta-tu-salud',
    title: {
      es: 'Humedad relativa: cómo afecta tu comodidad y tu salud',
      en: 'Relative Humidity: How It Affects Your Comfort and Health',
    },
    description: {
      es: 'La humedad relativa influye en cómo sentimos el calor y el frío, en la calidad del sueño, en las vías respiratorias y hasta en la propagación de virus. Entendé qué significa y cómo impacta en tu vida.',
      en: 'Relative humidity affects how we feel heat and cold, sleep quality, respiratory health, and even virus transmission. Understand what it means and how it impacts your life.',
    },
    date: '2026-06-14',
    body: {
      es: `La humedad relativa es uno de los indicadores meteorológicos que más impacto tiene en el bienestar humano, pero también uno de los menos comprendidos. No es "cuánta agua hay en el aire" en términos absolutos, sino una relación entre el vapor de agua presente y el máximo que el aire podría contener a esa temperatura.

## Por qué es "relativa"

El aire cálido puede contener mucho más vapor de agua que el aire frío. A 30°C, el aire puede retener hasta 30 gramos de vapor por kilogramo de aire. A 10°C, ese límite baja a apenas 7,6 gramos. La humedad relativa expresa qué porcentaje de esa capacidad máxima está siendo usada.

Si la temperatura baja sin que se agregue ni quite vapor, la humedad relativa sube automáticamente, porque la capacidad del aire se reduce. Por eso, en las mañanas —cuando la temperatura está en su punto más bajo del día— la humedad relativa es máxima, incluso si la cantidad absoluta de agua en el aire no cambió.

## El rango óptimo para el ser humano

El cuerpo humano funciona mejor con una humedad relativa entre el 40% y el 60%. En ese rango:

- Las mucosas respiratorias se mantienen húmedas y pueden filtrar partículas y gérmenes de forma efectiva
- La piel no se seca excesivamente ni se vuelve propensa a hongos
- La regulación de la temperatura corporal es eficiente
- El confort percibido es máximo para la mayoría de temperaturas moderadas

Por debajo del 30% (humedad baja):
- Las mucosas nasales y oculares se secan, aumentando la susceptibilidad a infecciones respiratorias
- La piel se reseca y pica
- La madera y otros materiales se contraen; el polvo se suspende más fácilmente en el aire
- Los virus de tipo influenza sobreviven más tiempo (esto es parte de por qué las epidemias de gripe son más frecuentes en invierno en climas secos)

Por encima del 70-80% (humedad alta):
- El sudor no se evapora bien, haciendo el calor mucho más agobiante
- Aumenta el riesgo de hongos y moho en ambientes cerrados
- Los ácaros del polvo se reproducen más activamente, empeorando las alergias y el asma
- La ropa y la ropa de cama tardan más en secarse

## Humedad y calidad del sueño

Un factor poco conocido: la humedad alta interfiere con el sueño. El cuerpo necesita bajar su temperatura central para entrar en sueño profundo, y lo hace en parte mediante la evaporación de sudor. Con humedad alta, ese mecanismo no funciona bien, y el cuerpo permanece más caliente de lo que debería. El resultado es un sueño fragmentado, sudoración nocturna y sensación de no haber descansado.

La temperatura ideal para dormir está entre 16°C y 20°C con una humedad entre 50% y 60%.

## Humedad en climas extremos

**Desiertos**: humedad relativa de 10-20%, especialmente en las horas centrales del día. El calor parece más seco y tolerable que en los trópicos, pero la deshidratación es más rápida e insidiosa porque el sudor se evapora instantáneamente. Muchas personas en zonas áridas se deshidratan sin sentir sed notable hasta que ya están en déficit hídrico.

**Trópicos**: humedad permanente de 75-90%. El calor parece "pesado" y la transpiración no refresca. Con 30°C y 90% de humedad, la sensación térmica puede superar los 42°C. Las tardes nubladas de regiones tropicales a veces son más incómodas que los mediodías soleados porque la humedad acumulada hace que el calor sea sofocante.

**Climas continentales en invierno**: con temperaturas de -5°C y calefacción interior, la humedad relativa dentro de las casas puede caer al 15-20%. Esta combinación de frío seco es especialmente dañina para las vías respiratorias.

## Cómo adaptar tu entorno

En interiores, un higrómetro (medidor de humedad) te permite conocer la humedad de tu hogar. Si está por debajo del 35%, un humidificador puede mejorar tu comodidad y tu salud respiratoria. Si está por encima del 70%, ventilá más frecuentemente y considerá un deshumidificador, especialmente en dormitorios y baños.

En el exterior, la humedad es el contexto que da sentido a la temperatura. Antes de salir a hacer ejercicio en días calurosos, fijate en la humedad, no solo en la temperatura. 32°C con 40% de humedad es manejable; 32°C con 85% de humedad puede ser peligroso para el ejercicio intenso al aire libre.`,
      en: `Relative humidity is one of the meteorological indicators with the greatest impact on human wellbeing, yet also one of the least understood. It is not "how much water is in the air" in absolute terms, but a relationship between the water vapor present and the maximum the air could hold at that temperature.

## Why it's "relative"

Warm air can hold much more water vapor than cold air. At 30°C, air can retain up to 30 grams of vapor per kilogram of air. At 10°C, that limit drops to just 7.6 grams. Relative humidity expresses what percentage of that maximum capacity is being used.

If temperature drops without adding or removing vapor, relative humidity rises automatically, because the air's capacity decreases. That's why in the morning — when temperature is at its daily low — relative humidity is highest, even if the absolute amount of water in the air hasn't changed.

## The optimal range for humans

The human body functions best at a relative humidity between 40% and 60%. In that range, respiratory mucous membranes stay moist and can filter particles and germs effectively, skin doesn't dry out excessively or become prone to fungal infections, body temperature regulation is efficient, and perceived comfort is highest for most moderate temperatures.

Below 30% (low humidity): nasal and eye mucous membranes dry out, increasing susceptibility to respiratory infections; skin dries and itches; influenza viruses survive longer (this is partly why flu epidemics are more common in winter in dry climates).

Above 70–80% (high humidity): sweat doesn't evaporate well, making heat much more oppressive; risk of mold increases in enclosed spaces; dust mites reproduce more actively, worsening allergies and asthma.

## Humidity and sleep quality

A little-known factor: high humidity interferes with sleep. The body needs to lower its core temperature to enter deep sleep, partly through sweat evaporation. With high humidity, that mechanism doesn't work well, and the body stays warmer than it should. The result is fragmented sleep, night sweats, and the feeling of not having rested.

The ideal sleeping temperature is 16–20°C with 50–60% humidity.

## Humidity in extreme climates

**Deserts**: relative humidity of 10–20%, especially at midday. Heat seems drier and more tolerable than in the tropics, but dehydration is faster and more insidious because sweat evaporates instantly. Many people in arid zones dehydrate without feeling notable thirst until they're already in a fluid deficit.

**Tropics**: permanent humidity of 75–90%. Heat feels "heavy" and perspiration doesn't refresh. At 30°C with 90% humidity, apparent temperature can exceed 42°C.

**Continental climates in winter**: with temperatures of -5°C and indoor heating, relative humidity inside homes can drop to 15–20%. This combination of cold dry air is particularly damaging to the respiratory tract.`,
    },
  },
  {
    slug: 'tipos-de-nubes-y-que-clima-anuncian',
    title: {
      es: 'Tipos de nubes y qué clima anuncian',
      en: 'Types of Clouds and What Weather They Announce',
    },
    description: {
      es: 'Las nubes son el pronóstico del tiempo más visible del cielo. Aprendé a identificar los tipos principales y qué condiciones meteorológicas indican para las próximas horas.',
      en: 'Clouds are the most visible weather forecast in the sky. Learn to identify the main types and what meteorological conditions they indicate for the coming hours.',
    },
    date: '2026-06-14',
    body: {
      es: `Antes de que existieran los satélites y los modelos numéricos, los navegantes, agricultores y viajeros aprendían a leer el cielo. Las nubes no son decoración: son el resultado visible de los procesos atmosféricos en marcha y contienen información sobre lo que va a pasar en las próximas horas.

## El sistema de clasificación de nubes

La clasificación moderna de nubes fue establecida en 1803 por Luke Howard, un farmacéutico y meteorólogo aficionado inglés. El sistema usa tres alturas y formas básicas:

**Alturas**:
- Nubes altas (cirro-): por encima de 6.000 metros
- Nubes medias (alto-): entre 2.000 y 6.000 metros
- Nubes bajas y de desarrollo vertical: por debajo de 2.000 metros

**Formas básicas**:
- Cúmulo (cumulus): cúmulos o montones; indican convección, desarrollo vertical
- Estrato (stratus): capas horizontales; indican estabilidad atmosférica
- Cirro (cirrus): delgadas, de hielo; nubes altas
- Nimbo (nimbus): prefijo o sufijo que indica lluvia

## Nubes altas: señales de lo que viene

**Cirrus**: filamentos blancos y delgados como mechones de cabello o colas de caballo. Se forman por encima de los 6.000 metros y están compuestas de cristales de hielo. Por sí solos no traen lluvia, pero si el cielo pasa de cirrus dispersos a una cubierta de cirrostratus, es una señal clásica de que un frente cálido se aproxima. En 24-48 horas puede venir lluvia.

**Cirrostratus**: velo blanquecino y translúcido que cubre todo el cielo. Produce los famosos halos solares y lunares. Es el siguiente paso después de los cirrus y confirma que un sistema de lluvias se aproxima. Observar un halo alrededor del sol o la luna con cielo blanquecino es uno de los mejores predictores populares de lluvia próxima.

**Cirrocumulus**: pequeños grupos de manchas blancas, como escamas o granos de arroz. El famoso "cielo aborregado". Suele indicar tiempo inestable en camino, aunque rara vez produce precipitación directa. El dicho "cielo aborregado, suelo mojado" tiene bastante fundamento.

## Nubes medias: la zona de la lluvia persistente

**Altocumulus**: masas redondeadas de nubes, más grandes que los cirrocumulus, en capas medias. Su presencia en las mañanas de verano puede anunciar tormentas convectivas por la tarde, especialmente si el cielo está húmedo.

**Altostratus**: capa gris o azulada que cubre el cielo uniformemente y difumina el sol. Señal clara de lluvia próxima. El sol se ve como "detrás de un vidrio opaco". Precede típicamente a las lluvias frontales que pueden durar horas.

## Nubes bajas: ya está lloviendo o va a llover pronto

**Stratus**: capa gris y uniforme a baja altura, como niebla elevada. Produce llovizna fina o garúa. No suele producir lluvia intensa pero mantiene el ambiente gris y húmedo. Muy típico en ciudades costeras con influencia marina, como Lima o San Francisco.

**Stratocumulus**: la nube más común del planeta. Masas irregulares de color gris en la base y blancas en la cima. Puede producir lluvias débiles o chubascos. No siempre llueve, pero cuando el cielo está cubierto de stratocumulus oscuros y bajos, las probabilidades aumentan.

**Nimbostratus**: la nube de lluvia por excelencia. Capa gris oscura y uniforme que cubre todo el cielo, sin forma definida. Produce lluvia o nieve continua y moderada a intensa durante horas. Si el cielo se pone de ese gris uniforme y oscuro, preparate.

## Nubes de desarrollo vertical: tormentas

**Cumulus**: nubes de buen tiempo cuando son pequeñas y de base plana con cimas redondeadas. Indican convección activa pero controlada. Se forman bien durante el día por el calentamiento solar y suelen desaparecer al atardecer.

**Cumulonimbus**: el gigante de las nubes. Puede alcanzar los 12-15 kilómetros de altura. Produce tormentas eléctricas, granizo, lluvias torrenciales, vientos fuertes y en casos extremos, tornados. Se identifica por su cima en forma de yunque (la parte superior se aplana por los vientos de la estratósfera). Si ves un cumulonimbus en la dirección desde la que viene el viento, tomá precauciones inmediatas.

## Un truco práctico

Mirá la base de las nubes: mientras más baja, más humedad hay en las capas bajas de la atmósfera y más probable es la lluvia. Una base de nubes a 4.000 metros indica aire relativamente seco; una base a 400-600 metros sobre el suelo indica que el punto de rocío es casi igual a la temperatura, y la lluvia puede llegar en cualquier momento.`,
      en: `Before satellites and numerical models existed, sailors, farmers, and travelers learned to read the sky. Clouds are not decoration: they are the visible result of ongoing atmospheric processes and contain information about what's going to happen in the next few hours.

## The cloud classification system

The modern cloud classification was established in 1803 by Luke Howard, an English pharmacist and amateur meteorologist. The system uses three heights and basic shapes.

**Heights**: High clouds (cirro-) above 6,000 meters; middle clouds (alto-) between 2,000 and 6,000 meters; low and vertically-developed clouds below 2,000 meters.

**Basic shapes**: Cumulus (heaps; indicate convection and vertical development); Stratus (horizontal layers; indicate atmospheric stability); Cirrus (thin, icy; high clouds); Nimbus (prefix or suffix indicating rain).

## High clouds: signals of what's coming

**Cirrus**: white, thin filaments like hair strands or horse tails. Formed above 6,000 meters, composed of ice crystals. Alone they don't bring rain, but if the sky transitions from scattered cirrus to cirrostratus cover, it's a classic sign that a warm front is approaching. Rain may come within 24–48 hours.

**Cirrostratus**: a whitish, translucent veil covering the entire sky. Produces the famous solar and lunar halos. Confirms that a rain system is approaching. Observing a halo around the sun or moon is one of the best folk predictors of imminent rain.

**Cirrocumulus**: small groups of white specks, like scales or grains of rice. The famous "mackerel sky." Usually indicates unstable weather on the way.

## Middle clouds: the persistent rain zone

**Altocumulus**: rounded cloud masses, larger than cirrocumulus, at middle levels. Their presence on summer mornings can announce convective storms in the afternoon.

**Altostratus**: gray or bluish layer covering the sky uniformly, blurring the sun. Clear sign of imminent rain. Typically precedes frontal rains that can last hours.

## Low clouds: rain is here or coming soon

**Stratus**: gray, uniform low-level layer, like elevated fog. Produces fine drizzle. Very typical in coastal cities with marine influence, like Lima or San Francisco.

**Nimbostratus**: the quintessential rain cloud. Dark gray uniform layer covering the entire sky with no defined shape. Produces continuous moderate-to-intense rain or snow for hours.

## Vertically-developed clouds: storms

**Cumulus**: fair-weather clouds when small with flat bases and rounded tops. Indicate active but controlled convection.

**Cumulonimbus**: the giant of clouds. Can reach 12–15 kilometers in height. Produces lightning storms, hail, torrential rain, strong winds, and in extreme cases, tornadoes. Identified by its anvil-shaped top. If you see a cumulonimbus in the upwind direction, take immediate precautions.`,
    },
  },
  {
    slug: 'diferencia-entre-clima-y-tiempo',
    title: {
      es: 'Diferencia entre clima y tiempo: conceptos que se confunden',
      en: 'The Difference Between Climate and Weather: Concepts That Get Confused',
    },
    description: {
      es: 'Clima y tiempo meteorológico no son lo mismo, aunque se usan como sinónimos. Entender la diferencia es clave para interpretar correctamente las noticias, los pronósticos y los datos sobre cambio climático.',
      en: 'Climate and weather are not the same thing, even though they are often used interchangeably. Understanding the difference is key to correctly interpreting news, forecasts, and climate change data.',
    },
    date: '2026-06-14',
    body: {
      es: `"El clima" y "el tiempo" se usan constantemente como sinónimos en el lenguaje cotidiano, pero en meteorología y climatología son conceptos completamente distintos. Confundirlos lleva a malinterpretar pronósticos, datos científicos y debates sobre cambio climático.

## La diferencia fundamental

La forma más clara de explicarlo es esta: **el tiempo es lo que vestís hoy; el clima es el armario que tenés.**

El **tiempo meteorológico** describe el estado de la atmósfera en un lugar y momento específico: temperatura, humedad, viento, precipitación, nubosidad. Es dinámico, cambia hora a hora y día a día, y es lo que muestran las apps del tiempo.

El **clima** es el patrón estadístico del tiempo a lo largo de un período prolongado, típicamente 30 años. Es el promedio de lo que ha pasado y da cuenta de la variabilidad esperada. Cuando decís "en Buenos Aires el verano es caluroso y húmedo", estás describiendo el clima; cuando decís "hoy en Buenos Aires hay 37°C y tormenta", estás describiendo el tiempo.

## Por qué 30 años

La Organización Meteorológica Mundial (OMM) define el clima como el promedio de variables meteorológicas durante un período de referencia de 30 años. Los períodos actuales son 1961-1990 y 1991-2020. Este marco temporal captura suficientes variaciones interanuales (como El Niño y La Niña) para dar un promedio representativo, sin que sea tan largo que los cambios a largo plazo queden diluidos.

Cada vez que la OMM actualiza el período de referencia, los promedios cambian. Si la temperatura media de enero en una ciudad era 15°C usando el período 1961-1990 y es 16,2°C con el período 1991-2020, eso por sí solo indica cambio climático.

## Variables del tiempo vs. variables del clima

Las **variables del tiempo** incluyen: temperatura del momento, velocidad del viento, presión atmosférica, precipitación en las últimas horas, nubosidad actual, humedad actual.

Las **variables del clima** incluyen: temperatura media mensual y anual, precipitación total anual, número promedio de días de helada, temperatura mínima absoluta registrada, distribución estacional de las lluvias, frecuencia de eventos extremos.

## El error de usar el tiempo para refutar el clima

Un error muy común es decir "mira, hace mucho frío hoy, el cambio climático no existe" o "este verano fue fresco, la temperatura global no está subiendo". Esto confunde tiempo con clima. Una ola de frío en enero no contradice el calentamiento global del mismo modo que una ola de calor intensa en junio tampoco lo confirma por sí sola.

El cambio climático se mide en décadas, no en días. Lo que sí puede usarse como evidencia son las tendencias: más olas de calor récord que olas de frío récord, aumento de la temperatura promedio anual global durante varios decenios consecutivos, retroceso de glaciares medido durante décadas, aumento del nivel del mar medido durante décadas.

## Microclima: la escala local del clima

Un concepto intermedio útil es el **microclima**: las condiciones climáticas particulares de un área pequeña que difieren del clima regional. Una ladera norte recibe más sol que una ladera sur en el hemisferio norte; un valle puede tener heladas cuando las alturas cercanas no; una ciudad puede ser 3-5°C más caliente que el campo circundante por el efecto isla de calor urbano.

Los microclimas importan mucho en agricultura, arquitectura y planificación urbana, y también explican por qué dos barrios de la misma ciudad pueden tener condiciones tan distintas.

## Cómo esto afecta la lectura de pronósticos

Entender la diferencia ayuda a interpretar mejor los pronósticos. Cuando un pronóstico dice "temperatura por encima de lo normal para la época", se refiere al clima —el promedio histórico de ese período— como punto de referencia. Cuando dice "posibilidad de lluvias el jueves", está describiendo el tiempo futuro esperado.

El clima es el libreto; el tiempo es la actuación de cada día. Y en los últimos años, la actuación se está desviando cada vez más del libreto que conocíamos.`,
      en: `"Climate" and "weather" are constantly used interchangeably in everyday language, but in meteorology and climatology they are completely distinct concepts. Confusing them leads to misinterpreting forecasts, scientific data, and climate change debates.

## The fundamental difference

The clearest way to explain it: **weather is what you wear today; climate is the wardrobe you have.**

**Weather** describes the state of the atmosphere at a specific place and moment: temperature, humidity, wind, precipitation, cloud cover. It's dynamic, changes hour by hour and day by day, and is what weather apps display.

**Climate** is the statistical pattern of weather over a prolonged period, typically 30 years. It is the average of what has happened and accounts for expected variability. When you say "Buenos Aires has hot, humid summers," you're describing climate; when you say "today in Buenos Aires it's 37°C with a storm," you're describing weather.

## Why 30 years

The World Meteorological Organization (WMO) defines climate as the average of meteorological variables over a 30-year reference period. The current periods are 1961–1990 and 1991–2020. This time frame captures enough interannual variations (such as El Niño and La Niña) to give a representative average, without being so long that long-term changes become diluted.

Each time the WMO updates the reference period, the averages change. If the mean January temperature in a city was 15°C using the 1961–1990 period and is 16.2°C with the 1991–2020 period, that alone indicates climate change.

## The error of using weather to refute climate

A very common mistake is saying "look, it's really cold today, climate change doesn't exist" or "this summer was cool, global temperatures aren't rising." This confuses weather with climate. A cold snap in January doesn't contradict global warming, just as an intense heat wave in June doesn't confirm it on its own.

Climate change is measured in decades, not days. What can be used as evidence are the trends: more record heat waves than record cold waves, rising average annual global temperatures over several consecutive decades, glacier retreat measured over decades, sea level rise measured over decades.

## How this affects reading forecasts

Understanding the difference helps interpret forecasts better. When a forecast says "temperatures above normal for the season," it is using climate — the historical average for that period — as a reference point. When it says "possible rain on Thursday," it is describing expected future weather.

Climate is the script; weather is each day's performance. And in recent years, the performance has been increasingly deviating from the script we knew.`,
    },
  },
  {
    slug: 'como-se-mide-la-lluvia-y-probabilidades',
    title: {
      es: 'Cómo se mide la lluvia (mm) y qué significan los porcentajes de probabilidad',
      en: 'How Rainfall Is Measured (mm) and What Probability Percentages Mean',
    },
    description: {
      es: 'Los milímetros de lluvia y los porcentajes de probabilidad de precipitación son datos que aparecen en todos los pronósticos pero muy pocos saben interpretarlos bien. Esta guía lo explica con claridad.',
      en: 'Millimeters of rain and precipitation probability percentages appear in every forecast, but very few people know how to interpret them correctly. This guide explains them clearly.',
    },
    date: '2026-06-14',
    body: {
      es: `"70% de probabilidad de lluvia" — ese número aparece en todos los pronósticos y la mayoría de las personas lo interpreta como "va a llover 70% del tiempo" o "7 de cada 10 zonas va a recibir lluvia". Ninguna de esas interpretaciones es correcta, y entenderlo bien marca la diferencia entre tomar buenas y malas decisiones.

## Qué es un milímetro de lluvia

La precipitación se mide en milímetros, que en realidad corresponde a litros por metro cuadrado. 1 mm de lluvia = 1 litro de agua cayendo sobre cada metro cuadrado del suelo.

Para tener referencia de escala:
- **1-2 mm**: llovizna leve. El suelo se moja superficialmente pero no hay charcos.
- **5-10 mm**: lluvia moderada. En 30-60 minutos es suficiente para mojar bien el piso y generar charcos pequeños.
- **20-30 mm**: lluvia intensa. Puede generar inconvenientes en el tráfico y pequeñas inundaciones en zonas bajas.
- **50+ mm en pocas horas**: lluvia torrencial. Riesgo de inundaciones, deslizamientos y corte de servicios.
- **100+ mm en 24 horas**: evento extremo. Puede considerarse el volumen mensual normal de muchas ciudades europeas en un solo día.

Los pluviómetros —instrumentos que miden la lluvia— funcionan recolectando el agua en un tubo de sección conocida y midiendo la altura acumulada. Hay pluviómetros manuales (se leen cada 24 horas) y automáticos (registran en tiempo real). Los datos de miles de estos instrumentos se integran en los modelos climáticos.

## Qué mide exactamente el porcentaje de probabilidad de lluvia

El **Probability of Precipitation (PoP)** en inglés —traducido como "probabilidad de lluvia" en las apps— tiene una definición técnica precisa que difiere de la intuición popular.

El PoP se define como la probabilidad de que caiga al menos 0,1 pulgadas (2,54 mm) de precipitación en un punto concreto del área de cobertura del pronóstico, durante el período de tiempo indicado.

Esto significa que:
- **No es la fracción del tiempo que va a llover**: un 70% no significa que lloverá 70% del día.
- **No es la fracción del área que recibirá lluvia**: aunque en algunas formulaciones hay un componente geográfico.
- **Es simplemente la probabilidad de que en tu ubicación específica ocurra precipitación apreciable durante ese período**.

La fórmula que usan muchos servicios meteorológicos es:
PoP = Confianza × Área de cobertura

Si el meteorólogo está 100% seguro de que lloverá pero solo sobre el 70% del área, el PoP es 70%. Si está 70% seguro de que lloverá sobre toda el área, el PoP también es 70%. Dos escenarios muy diferentes, mismo número.

## Cómo interpretar los porcentajes en la práctica

**10-20%**: muy poco probable. En la mayoría de los casos no lloverá. Podés planificar actividades al aire libre con cierta confianza, pero llevá algo por si acaso.

**30-40%**: posible. En 3-4 de cada 10 situaciones similares cayó lluvia. Si tu actividad es sensible a la lluvia (picnic, casamiento al aire libre, partido de fútbol), considerá un plan B.

**50-60%**: más probable que no llueva versus que llueva. Paraguas recomendado.

**70-80%**: muy probable. Planificá como si fuera a llover. Si tenés ropa de abrigo o impermeable, llevala.

**90-100%**: casi seguro. Lluvia prácticamente garantizada en algún momento del período.

## Por qué los milímetros importan tanto como el porcentaje

Una probabilidad alta con pocos milímetros esperados puede ser menos problemática que una probabilidad media con muchos milímetros esperados. El pronóstico ideal para planificar combina ambos datos:

- "40% de probabilidad, 2-5 mm": posible llovizna, probablemente no arruina un picnic.
- "60% de probabilidad, 30-50 mm": lluvia probable e intensa; reagendá el picnic.

Muchas apps modernas muestran el volumen esperado de lluvia por hora, que es más informativo que solo el porcentaje.

## La lluvia acumulada vs. la lluvia horaria

Para inundaciones, lo que importa es la **tasa horaria**, no solo el total del día. 50 mm en 24 horas distribuidos uniformemente es manejable en la mayoría de las ciudades. 50 mm en 2 horas puede colapsar el sistema de drenaje de cualquier ciudad del mundo.

Los pronósticos avanzados distinguen entre precipitación continua (lluvia frontal, que puede durar horas a intensidad moderada) y precipitación convectiva (tormentas de tarde, breves pero muy intensas). Saber qué tipo de lluvia se espera es tan importante como saber cuánta.`,
      en: `"70% chance of rain" — that number appears in every forecast and most people interpret it as "it will rain 70% of the time" or "7 out of 10 areas will receive rain." Neither interpretation is correct, and understanding it properly makes the difference between good and bad decisions.

## What a millimeter of rain is

Precipitation is measured in millimeters, which corresponds to liters per square meter. 1 mm of rain = 1 liter of water falling on each square meter of ground.

Scale reference:
- **1–2 mm**: light drizzle. The ground gets damp but no puddles form.
- **5–10 mm**: moderate rain. In 30–60 minutes, enough to wet the floor well and create small puddles.
- **20–30 mm**: heavy rain. Can cause traffic issues and small flooding in low-lying areas.
- **50+ mm in a few hours**: torrential rain. Risk of flooding and service disruptions.
- **100+ mm in 24 hours**: extreme event. Can equal the entire monthly average for many European cities in a single day.

## What the probability percentage actually measures

The **Probability of Precipitation (PoP)** has a precise technical definition that differs from popular intuition.

PoP is defined as the probability that at least 0.1 inches (2.54 mm) of precipitation will fall at a specific point in the forecast coverage area, during the stated time period.

This means:
- **It is not the fraction of time it will rain**: 70% doesn't mean it will rain 70% of the day.
- **It is simply the probability that appreciable precipitation will occur at your specific location during that period**.

The formula many weather services use is:
PoP = Confidence × Coverage area

If the meteorologist is 100% sure it will rain but only over 70% of the area, PoP is 70%. If they are 70% sure it will rain over the entire area, PoP is also 70%. Two very different scenarios, same number.

## How to interpret percentages in practice

**10–20%**: very unlikely. In most cases it won't rain. **30–40%**: possible. Carry an umbrella if your activity is rain-sensitive. **50–60%**: umbrella recommended. **70–80%**: very likely; plan as if it will rain. **90–100%**: almost certain; rain practically guaranteed at some point.

## Why millimeters matter as much as the percentage

High probability with few expected millimeters can be less problematic than medium probability with many expected millimeters. The ideal forecast for planning combines both: "40% chance, 2–5 mm" means possible drizzle, probably won't ruin a picnic; "60% chance, 30–50 mm" means probable heavy rain — reschedule the picnic.`,
    },
  },
  {
    slug: 'que-hacer-ante-alerta-de-tormenta-o-calor-extremo',
    title: {
      es: 'Qué hacer ante una alerta de tormenta o calor extremo',
      en: 'What to Do When There Is a Storm or Extreme Heat Alert',
    },
    description: {
      es: 'Las alertas meteorológicas salvan vidas si se actúa correctamente. Esta guía explica qué hacer ante una alerta de tormenta eléctrica, tornado, tormenta de granizo o ola de calor extremo.',
      en: 'Weather alerts save lives when acted on correctly. This guide explains what to do when there is a lightning storm, tornado, hailstorm, or extreme heat wave alert.',
    },
    date: '2026-06-14',
    body: {
      es: `Las alertas meteorológicas no existen para crear pánico: existen porque los eventos climáticos extremos matan gente que no estaba preparada. Saber cómo responder a cada tipo de alerta es una habilidad que puede salvar tu vida o la de alguien cercano.

## Los niveles de alerta

La mayoría de los servicios meteorológicos usan un sistema de colores:

- **Amarillo / Vigilancia**: condiciones posibles para un evento meteorológico significativo. Seguí de cerca el pronóstico y preparate.
- **Naranja / Advertencia**: evento meteorológico significativo probable. Tomá precauciones activas.
- **Rojo / Alerta extrema**: evento meteorológico severo o extremo inminente o en curso. Actuá de inmediato.

## Tormentas eléctricas

Las tormentas eléctricas son el fenómeno meteorológico más subestimado. Los rayos matan a cientos de personas al año en América Latina y causan incendios y daños materiales enormes.

**Qué hacer si hay alerta de tormenta eléctrica:**

Antes de que llegue:
- Desconectá dispositivos electrónicos de los enchufes (un rayo puede viajar por la red eléctrica y dañar aparatos aunque no caiga en tu casa)
- Guardá objetos de jardín que puedan convertirse en proyectiles con el viento fuerte
- Si estás al aire libre, identificá dónde podés refugiarte rápidamente

Durante la tormenta:
- Buscá interior. Si no podés entrar a un edificio, metete en un auto con las ventanas cerradas (el chasis actúa como jaula de Faraday)
- Evitá los árboles altos aislados: son blanco frecuente de rayos
- En campo abierto, si sentís los pelos de punta o escuchás crepitar el aire, agachate con los pies juntos, sin apoyar manos ni rodillas en el suelo —reducís la superficie de contacto
- No toqués objetos metálicos al aire libre (cercas, postes)
- Esperá 30 minutos después del último trueno antes de salir

## Granizo

El granizo puede caer en cuestión de minutos, pasar de 0 a granizos del tamaño de una pelota de golf en tiempo récord, y causar daños millonarios en vehículos, techos y cultivos.

**Qué hacer:**

- Si estás en el auto, estacioná bajo techo o en un garage inmediatamente; si no podés, cubrite la cabeza y el cuello, que son las zonas más vulnerables si el granizo rompe el vidrio
- No salgas a "ver la tormenta" desde la puerta: los granizos grandes pueden causar lesiones graves
- Cubrí plantas y cultivos si tenés tiempo antes de que llegue
- Después de la tormenta, revisá el techo y los desagotes; el granizo puede tapar canaletas y generar filtraciones

## Tormentas con viento fuerte y tornados

Las ráfagas de viento huracanado (más de 90-100 km/h) pueden tirar árboles, arrancar techos y convertir objetos en proyectiles peligrosos. Los tornados, aunque menos comunes en América del Sur que en Norteamérica, ocurren especialmente en el Litoral y la Pampa argentina, y en zonas de Brasil y Paraguay.

**Ante viento fuerte:**
- Cerrá puertas y ventanas, especialmente las de vidrio
- Alejate de ventanas y paredes exteriores
- Asegurá o guardá todo objeto al aire libre
- No te refugies bajo puentes o viaductos (aumentan la velocidad del viento por efecto embudo)

**Ante alerta de tornado:**
- Buscá el lugar más bajo posible: sótano, planta baja, baño interior sin ventanas
- Cubrí la cabeza y el cuello con los brazos o con almohadas y mantas
- Nunca te quedes en un auto o remolque; son extremadamente vulnerables

## Ola de calor extremo

El calor extremo mata más personas que cualquier otro fenómeno meteorológico en muchos países. El problema es que es silencioso: no hay viento, no hay ruido, no hay una amenaza visible. Las personas vulnerables pueden sufrir golpe de calor en sus propias casas sin darse cuenta.

**Señales de advertencia:**

El golpe de calor ocurre cuando la temperatura corporal supera los 40°C. Sus síntomas: piel caliente y seca (ya no suda), confusión o pérdida de conciencia, latidos rápidos. Es una emergencia médica. Llamá a la ambulancia y enfriá a la persona con agua fría inmediatamente.

El agotamiento por calor —un paso previo— se manifiesta con sudoración profusa, debilidad, náuseas, mareo. La persona todavía suda (el mecanismo de enfriamiento funciona). Llevala a un lugar fresco y dale agua.

**Qué hacer durante una ola de calor:**

- Permanecé en lugares frescos o con aire acondicionado entre las 11 y las 18 horas
- Bebé agua aunque no sientas sed (especialmente adultos mayores, que tienen menor sensación de sed)
- Cerrá persianas y cortinas al sol durante el día
- Ventilá la casa de madrugada, cuando el exterior está más fresco que el interior
- Verificá el estado de personas mayores, niños y enfermos crónicos en tu entorno; son los más vulnerables
- Evitá el ejercicio físico intenso al aire libre hasta que bajen las temperaturas

## Los grupos más vulnerables

En toda situación de alerta meteorológica, los grupos que requieren cuidado especial son:

- Adultos mayores (especialmente los que viven solos)
- Niños pequeños
- Personas con enfermedades cardiovasculares, respiratorias o metabólicas
- Personas sin hogar
- Trabajadores al aire libre

Si conocés a alguien en estas categorías, un llamado o visita durante una alerta puede marcar la diferencia.`,
      en: `Weather alerts don't exist to create panic — they exist because extreme weather events kill people who weren't prepared. Knowing how to respond to each type of alert is a skill that can save your life or someone close to you.

## Alert levels

Most meteorological services use a color system: **Yellow / Watch** (conditions possible for a significant event — monitor the forecast and prepare); **Orange / Warning** (significant event likely — take active precautions); **Red / Extreme Alert** (severe or extreme event imminent or occurring — act immediately).

## Lightning storms

Lightning storms are the most underestimated weather phenomenon. Lightning kills hundreds of people every year and causes enormous fires and property damage.

**Before the storm arrives**: unplug electronic devices; store outdoor objects that could become projectiles; identify where you can take shelter quickly.

**During the storm**: seek indoor shelter. If you can't enter a building, get in a car with windows closed (the chassis acts as a Faraday cage). Avoid tall isolated trees. In open fields, if you feel your hair stand on end, crouch down with feet together, hands off the ground — you reduce the contact surface. Wait 30 minutes after the last thunder before going out.

## Hailstorms

Hail can fall within minutes, going from nothing to golf ball-sized hailstones in record time, causing millions in damage to vehicles, roofs, and crops.

If you're in a car, park under cover immediately. Don't go outside to "watch the storm" — large hailstones can cause serious injuries.

## Extreme heat wave

Extreme heat kills more people than any other weather phenomenon in many countries. The problem is that it's silent: no wind, no noise, no visible threat. Vulnerable people can suffer heat stroke in their own homes without realizing it.

**Heat stroke signs**: body temperature exceeds 40°C; hot and dry skin (no longer sweating); confusion or loss of consciousness; rapid heartbeat. It is a medical emergency. Call an ambulance and cool the person with cold water immediately.

**During a heat wave**: stay in cool or air-conditioned places between 11 a.m. and 6 p.m.; drink water even if you don't feel thirsty; close blinds during the day; ventilate the house before dawn; check on elderly people, children, and those with chronic illness — they are the most vulnerable.`,
    },
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export const guideSlugs = guides.map(g => g.slug);
