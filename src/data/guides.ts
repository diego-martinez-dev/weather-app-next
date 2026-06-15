export interface Guide {
  slug: string;
  title: { es: string; en: string };
  description: { es: string; en: string };
  date: string;
  related?: string[];
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
  // --- Guías Fase 2 ---
  {
    slug: 'como-protegerte-durante-una-ola-de-calor',
    title: {
      es: 'Cómo protegerte durante una ola de calor',
      en: 'How to Protect Yourself During a Heat Wave',
    },
    description: {
      es: 'Las olas de calor matan más personas que cualquier otro fenómeno meteorológico. Esta guía te explica qué hacer antes, durante y después, y a quiénes cuidar especialmente.',
      en: 'Heat waves kill more people than any other weather phenomenon. This guide explains what to do before, during, and after a heat wave, and who to protect most.',
    },
    date: '2026-06-14',
    body: {
      es: `Una ola de calor no es simplemente un día muy caluroso. Es un período de varios días consecutivos en que las temperaturas superan significativamente los promedios históricos y, crucialmente, tampoco bajan de noche. Esa combinación —calor extremo sostenido sin recuperación nocturna— es lo que convierte una ola de calor en una emergencia de salud pública. En Europa, la ola de 2003 mató a más de 70.000 personas. En Argentina, las de 2013 y 2023 dejaron decenas de muertos en pocas semanas. El calor extremo es el peligro meteorológico más subestimado que existe.

## Por qué el calor extremo es tan peligroso

El cuerpo humano mantiene su temperatura interna alrededor de 37°C. Para lograrlo, elimina el exceso de calor principalmente a través del sudor: el líquido se evapora en la piel y esa evaporación enfría. Cuando la temperatura ambiente supera los 35°C y la humedad es alta (más del 60–70%), la evaporación del sudor se vuelve ineficiente y el cuerpo empieza a acumular calor interno.

El golpe de calor ocurre cuando la temperatura corporal supera los 40°C. El sistema nervioso central colapsa, los órganos empiezan a fallar y puede sobrevenir la muerte en horas si no se actúa. La diferencia entre el agotamiento por calor (grave pero tratable) y el golpe de calor (emergencia potencialmente fatal) es a veces una cuestión de una hora o dos.

## Antes de que llegue la ola de calor

La preparación marca la diferencia. Cuando el pronóstico anuncia temperaturas extremas para los próximos días:

- Comprá o prepará suministros de agua suficientes para varios días. Durante una ola de calor, la demanda de agua potable puede superar la capacidad de distribución en algunas zonas.
- Identificá los espacios más frescos de tu hogar: generalmente son los cuartos orientados al norte o al este, o los subsuelos. Organizá tu espacio para dormir ahí.
- Comprá o prepará un ventilador o aire acondicionado portátil si no tenés refrigeración fija. El aire acondicionado salva vidas literalmente durante una ola.
- Identificá dónde están los lugares con aire acondicionado en tu barrio: centros comerciales, bibliotecas, hospitales, centros comunitarios. Son refugios reales en emergencias.
- Avisá a los vecinos mayores que viven solos. Un control diario durante la ola puede marcar la diferencia entre la vida y la muerte.

## Durante la ola de calor

**Hidratación**: Bebé agua aunque no sientas sed. El mecanismo de la sed es imperfecto, especialmente en adultos mayores que lo tienen menos desarrollado. Entre 2 y 3 litros por día mínimo; más si hacés esfuerzo físico. Evitá el alcohol y las bebidas con mucha cafeína porque aceleran la deshidratación.

**Actividad física**: Cancelá o postponé el ejercicio intenso al aire libre. Si es inevitable, hacelo antes de las 9 de la mañana o después de las 19 horas. Nunca en las horas centrales del día.

**Ventilación del hogar**: Cerrá persianas, cortinas y ventanas durante el día, especialmente las orientadas al sol. Abrí puertas y ventanas de madrugada (entre las 2 y las 6 am) cuando el exterior es más fresco que el interior, para ventilar el calor acumulado. Apagá las luces incandescentes y los electrodomésticos que generen calor.

**Refrescarte activamente**: Mojate la nuca, las muñecas y las sienes con agua fría: son zonas donde los vasos sanguíneos están cercanos a la superficie. Un trapo húmedo en la cabeza reduce la temperatura percibida. Un baño o ducha fresca durante el pico de calor es una de las medidas más efectivas.

**Ropa**: Vestí ropa suelta, liviana y de colores claros. Los colores oscuros absorben más radiación solar. El algodón y el lino permiten mejor circulación de aire que las fibras sintéticas.

## Señales de alarma: cuándo llamar a emergencias

El agotamiento por calor se manifiesta con sudoración abundante, piel pálida y fría al tacto, debilidad muscular, náuseas, mareos y dolor de cabeza. La persona todavía suda (mecanismo de refrigeración activo). Llevala a un lugar fresco, hacela recostar con los pies elevados, dale agua en sorbos pequeños y aplicá compresas frías.

El golpe de calor es una emergencia médica. Sus señales: piel caliente y seca (ya no suda, el mecanismo falló), temperatura corporal por encima de 39–40°C, confusión mental, delirio, pérdida de conciencia. Llamá al servicio de emergencias inmediatamente. Mientras llegan, enfriá a la persona por todos los medios disponibles: agua fría sobre la piel, hielo en axilas y cuello, ventilador directo.

## Los grupos más vulnerables

Adultos mayores de 65 años —especialmente los que viven solos— tienen menor respuesta del sistema de regulación térmica y detectan peor la sed. Niños menores de 4 años no pueden comunicar que tienen calor y se deshidratan rápidamente. Personas con enfermedades cardiovasculares, respiratorias o renales tienen menor margen antes de que el calor les cause daño orgánico. Personas con obesidad también tienen mayor riesgo porque el tejido adiposo actúa como aislante térmico.

Si conocés personas en estos grupos, un llamado diario o una visita durante los días de calor extremo es una acción concreta que puede salvar vidas.

## Después de la ola de calor

La recuperación del organismo después de varios días de estrés térmico puede tardar uno o dos días. Seguí bebiendo suficiente agua. Reiniciá gradualmente el ejercicio. Si notás fatiga inusual, dificultades para concentrarte o irregularidades cardíacas en los días siguientes, consultá un médico: el estrés térmico puede tener efectos que se manifiestan con demora.`,
      en: `A heat wave is not simply a very hot day. It is a period of several consecutive days when temperatures significantly exceed historical averages and, crucially, also fail to drop at night. That combination — sustained extreme heat with no nighttime recovery — is what turns a heat wave into a public health emergency. In Europe, the 2003 heat wave killed over 70,000 people. Heat waves are the most underestimated meteorological hazard that exists.

## Why extreme heat is so dangerous

The human body maintains its internal temperature around 37°C. It eliminates excess heat mainly through sweat: liquid evaporates on the skin and that evaporation cools the body. When ambient temperature exceeds 35°C and humidity is high (above 60–70%), sweat evaporation becomes inefficient and the body begins accumulating internal heat.

Heat stroke occurs when body temperature exceeds 40°C. The central nervous system collapses, organs begin to fail, and death can occur within hours without intervention. The difference between heat exhaustion (serious but treatable) and heat stroke (potentially fatal emergency) is sometimes a matter of one or two hours.

## During the heat wave

**Hydration**: Drink water even if you don't feel thirsty. The thirst mechanism is imperfect, especially in older adults who experience it less. At least 2–3 liters per day; more if you're physically active. Avoid alcohol and highly caffeinated beverages.

**Physical activity**: Cancel or postpone intense outdoor exercise. If unavoidable, do it before 9 a.m. or after 7 p.m.

**Home ventilation**: Close blinds, curtains, and sun-facing windows during the day. Open doors and windows in the early morning hours (2–6 a.m.) when the outside is cooler than the inside to ventilate accumulated heat.

**Active cooling**: Wet your neck, wrists, and temples with cold water. A cool shower during the peak heat hours is one of the most effective measures.

## Warning signs: when to call emergency services

Heat exhaustion: profuse sweating, pale and cool skin, muscle weakness, nausea, dizziness, headache. The person is still sweating (cooling mechanism active). Move them to a cool place, have them lie down with feet elevated, give water in small sips, apply cold compresses.

Heat stroke is a medical emergency: hot and dry skin (no longer sweating), body temperature above 39–40°C, mental confusion, delirium, loss of consciousness. Call emergency services immediately. While waiting, cool the person by all available means: cold water on the skin, ice on armpits and neck, direct fan.`,
    },
  },
  {
    slug: 'que-ropa-llevar-segun-el-clima',
    title: {
      es: 'Qué ropa llevar según el clima y la estación',
      en: 'What Clothes to Wear According to the Weather and Season',
    },
    description: {
      es: 'Una guía práctica para vestirte según la temperatura, la humedad y el tipo de actividad. El sistema de capas, qué materiales funcionan en el calor y en el frío, y cómo prepararte para climas variables.',
      en: 'A practical guide to dressing for temperature, humidity, and activity type. The layering system, which materials work in heat and cold, and how to prepare for variable climates.',
    },
    date: '2026-06-14',
    body: {
      es: `Saber qué ponerse según el clima parece algo básico, pero hay mucha gente que toma decisiones de ropa basándose solo en la temperatura y luego termina empapada de lluvia, helada de viento o deshidratada de calor. La ropa correcta no solo hace que estés más cómodo: en condiciones extremas puede ser la diferencia entre una experiencia agradable y una emergencia médica.

## El sistema de capas: la base para climas fríos y variables

El sistema de tres capas es el método más eficiente para manejar el frío y la variabilidad climática:

**Primera capa (base layer)**: va directo sobre la piel y su función es evacuar la humedad del sudor hacia afuera para mantener la piel seca. Los materiales ideales son la lana merina o las fibras sintéticas (poliéster, polipropileno). El algodón es el peor material para esta capa: cuando se moja, queda húmedo y pegado, lo que puede causar hipotermia en condiciones frías.

**Segunda capa (aislante)**: retiene el calor corporal. El polar (fleece) es el material más versátil: liviano, aislante incluso húmedo, y de secado rápido. Para frío extremo, el plumón (down) es más cálido por gramo de peso, pero pierde casi toda su capacidad aislante cuando se moja.

**Tercera capa (capa exterior)**: protege del viento, la lluvia y la nieve. Debe ser impermeable o al menos resistente al agua, y permeable al vapor (breathable) para que la humedad del sudor pueda salir. Las membranas Gore-Tex y similares son el estándar de referencia. Una capa exterior impermeable que no sea permeable al vapor te hace sudar y terminar igual de mojado que sin ella.

## Temperatura y ropa: una guía práctica

**Por encima de 25°C**: ropa ligera, suelta y de colores claros. El algodón y el lino funcionan bien porque absorben el sudor. Protección solar (sombrero, mangas largas si hay sol intenso, protector solar en piel expuesta).

**15–25°C**: una capa liviana suele ser suficiente. En el límite inferior o con viento, agrega una segunda capa o una chaqueta liviana. Si hay probabilidad de lluvia, llevá siempre un impermeable compacto o poncho.

**5–15°C**: sistema de dos capas. Base layer que evacue la humedad y una capa media aislante. Si salís en moto, al viento o con actividad baja, la sensación puede ser mucho menor; sumá la capa exterior.

**0–5°C**: las tres capas completas. Prestá especial atención a las extremidades: guantes, gorro o gorra que cubra las orejas, y calcetines de lana. El frío en las manos reduce la destreza motora rápidamente.

**Por debajo de 0°C**: ropa técnica térmica. A estos niveles, el algodón en cualquier capa es peligroso. Los guantes deben ser impermeables si hay nieve o lluvia. El pasamontañas protege la cara del viento y de la pérdida de calor.

## Humedad: el factor que cambia todo

Con humedad alta (por encima del 70%), el calor se siente más intenso y la ropa que "respira" se vuelve crítica. Las fibras sintéticas que evacuan la humedad son mejores que el algodón en actividades físicas porque se secan rápido. Con humedad baja (menos del 30%), como en los desiertos o en inviernos continentales secos, la piel se reseca y los labios se agrietan; una crema hidratante liviana es un "accesorio" climático real.

## El viento multiplica el efecto del frío y del calor

Con viento, la sensación térmica puede ser varios grados menor. Una capa cortavientos (windbreaker) fina puede equivaler en términos de calor percibido a una capa aislante completa. En verano, el viento fresco puede compensar temperaturas de 30°C y hacer el ambiente perfectamente confortable sin ropa especial; pero el mismo viento frío en invierno a 10°C puede hacer que la sensación caiga a 3–4°C.

## Climas variables: el arte de las capas desmontables

En climas donde la temperatura cambia drásticamente entre la mañana y la tarde —como en muchas ciudades andinas, en las zonas de montaña, o en primaveras y otoños variables— la clave es la modularidad. Vestite en capas que puedas sacarte y ponerte fácilmente. Una mochila pequeña o una bolsa de tela sirven para guardar la ropa que vas sacando. Quito, Bogotá, Medellín en temporada de lluvia, o cualquier ciudad de montaña en otoño, son ejemplos donde este enfoque es invaluable.

## Para la lluvia: impermeabilidad vs. resistencia al agua

No todos los "impermeables" son iguales. Un chubasquero resistente al agua (water resistant) resiste la lluvia leve por un tiempo, pero se satura con lluvias intensas o prolongadas. Un impermeable técnico con soldadura de costuras y membrana es completamente estanco incluso bajo lluvia torrencial. Para viajes, el nivel de impermeabilidad depende del destino: un viaje a Bogotá o Medellín justifica un impermeable de calidad; para una caminata en el desierto, basta con el resistente al agua.

## Cuidado de la ropa técnica

La ropa técnica (gore-tex, polar, lana merina) requiere cuidados específicos para mantener sus propiedades. El polar se lava al revés para proteger las fibras. El gore-tex necesita detergente especial (sin suavizantes que taponan la membrana). La lana merina puede lavarse en ciclo delicado o a mano con agua fría. Secar siempre al aire o en tendedero; la secadora daña la membrana de los impermeables técnicos.`,
      en: `Knowing what to wear according to the weather seems basic, but many people make clothing decisions based only on temperature and end up soaked in rain, frozen by wind, or dehydrated from heat. The right clothing not only makes you more comfortable: in extreme conditions, it can be the difference between a pleasant experience and a medical emergency.

## The layering system: the foundation for cold and variable climates

The three-layer system is the most efficient method for managing cold and weather variability.

**Base layer**: goes directly on the skin, its function is to move sweat moisture outward to keep skin dry. Ideal materials: merino wool or synthetic fibers (polyester, polypropylene). Cotton is the worst material for this layer: when wet, it stays damp and clammy, which can cause hypothermia in cold conditions.

**Mid layer (insulator)**: retains body heat. Fleece is the most versatile: lightweight, insulating even when wet, and fast-drying. For extreme cold, down is warmer per gram of weight, but loses almost all insulating ability when wet.

**Outer layer (shell)**: protects from wind, rain, and snow. Must be waterproof or at least water-resistant, and vapor-permeable so sweat moisture can escape.

## Temperature and clothing: a practical guide

**Above 25°C**: light, loose, light-colored clothing. **15–25°C**: one light layer usually suffices; add a windbreaker if there's a chance of rain. **5–15°C**: two-layer system. **0–5°C**: all three layers, plus gloves and hat. **Below 0°C**: technical thermal clothing, no cotton in any layer.

## Humidity changes everything

With high humidity (above 70%), heat feels more intense and moisture-wicking synthetics outperform cotton during physical activity. With low humidity (below 30%), skin dries out quickly; a light moisturizer becomes a genuine climate accessory.`,
    },
  },
  {
    slug: 'como-preparar-tu-casa-para-la-temporada-de-lluvias',
    title: {
      es: 'Cómo preparar tu casa para la temporada de lluvias',
      en: 'How to Prepare Your Home for Rainy Season',
    },
    description: {
      es: 'Antes de que lleguen las lluvias intensas, hay medidas concretas que podés tomar para proteger tu hogar de filtraciones, inundaciones y daños. Una guía práctica, habitación por habitación.',
      en: 'Before heavy rains arrive, there are concrete steps you can take to protect your home from leaks, flooding, and damage. A practical room-by-room guide.',
    },
    date: '2026-06-14',
    body: {
      es: `La temporada de lluvias llega puntualmente cada año, pero cada año hay casas que se inundan, techos que gotean y sótanos que se anegan como si fuera la primera vez. La diferencia entre una casa bien preparada y una mal preparada puede ser la diferencia entre inconveniencias menores y pérdidas materiales significativas. La buena noticia: la mayoría de las medidas de preparación son accesibles y no requieren conocimientos técnicos especializados.

## Cuándo prepararte

El mejor momento es cuatro a seis semanas antes del inicio de la temporada de lluvias en tu región. En Colombia, las dos temporadas lluviosas principales van de marzo a mayo y de septiembre a noviembre, con variaciones por región. En Ciudad de México, de junio a octubre. En Buenos Aires, las lluvias son más distribuidas pero los eventos intensos se concentran en primavera-verano. Revisá el calendario de tu región y marcá la fecha en que debés empezar la revisión.

## Techo y canaletas: la primera línea de defensa

El techo es la parte más crítica de la preparación. Un techo que gotea puede arruinar paredes, pisos, muebles y hasta la estructura en semanas.

- Revisá las tejas, chapas o láminas del techo buscando grietas, piezas rotas o desplazadas, y juntas en mal estado. En techos planos, buscá burbujas, despegues o zonas donde el agua se acumule.
- Limpiá las canaletas y bajadas de agua antes de la temporada. Las hojas, ramas y suciedad acumuladas pueden tapar el sistema de drenaje y hacer que el agua se desborde hacia las paredes o los cimientos.
- Verificá que los desagotes de los techos planos estén libres de obstrucciones. Un techo plano que no drena puede acumular cientos de litros de agua y llegar a colapsar.

## Ventanas y puertas: sellar las filtraciones

Las filtraciones por ventanas y puertas son el problema más frecuente en lluvias intensas con viento.

- Revisá los burletes (cauchos de sellado) alrededor de ventanas y puertas. Si están agrietados, secos o despegados, cambialos: son baratos y se colocan fácilmente.
- Aplicá sellador de silicona en las juntas entre el marco y la pared, especialmente en ventanas de orientación norte o sur que reciben viento diagonal.
- En balcones y terrazas, verificá que los desagotes estén despejados: un balcón inundado puede filtrar agua hacia el interior más rápido que cualquier gotera.

## Sótanos y plantas bajas: preparación contra inundaciones

Si tu casa tiene sótano o planta baja que ha tenido problemas de humedad en el pasado:

- Instalá o verificá el correcto funcionamiento de una bomba de achique (sump pump). En zonas con alto riesgo de inundación, tener una con batería de respaldo es una inversión que se paga sola con un solo evento.
- Sellá las grietas en las paredes del sótano con sellador hidráulico. Aunque no resuelve problemas estructurales de larga data, reduce significativamente la filtración pasiva durante lluvia intensa.
- Elevá los objetos de valor del piso del sótano: estantes metálicos, tarimas de madera o plástico dan unos centímetros de margen que pueden salvar equipos electrónicos, archivos o muebles en un evento de inundación.
- Identificá la llave general de agua y la ubicación del tablero eléctrico. En caso de inundación, cortar la electricidad antes de que el agua llegue al tablero es fundamental para evitar cortocircuitos y riesgos eléctricos.

## Sistema de drenaje externo

El entorno inmediato de la casa es tan importante como la estructura misma.

- Verificá que el terreno alrededor de la casa tenga pendiente hacia afuera, alejando el agua de los cimientos. Si el terreno es plano o inclina hacia la casa, el agua de lluvia se acumula contra los muros y filtra.
- Limpiá las cunetas y desagotes de la calle frente a tu casa. Si están tapados, el agua de lluvia puede superar el nivel de la entrada y comenzar a ingresar.
- Verificá los pozos de drenaje del jardín y la entrada del vehículo. Las hojas y sedimentos se acumulan rápidamente durante la lluvia.

## Electrodomésticos y circuito eléctrico

El agua y la electricidad son una combinación peligrosa. Algunas medidas preventivas:

- Revisá el estado de los disyuntores y la puesta a tierra del tablero eléctrico. Si hay humedad en el tablero o cables oxidados, llamá a un electricista antes de que lleguen las lluvias.
- Desconectá los electrodomésticos de las tomas de corriente durante tormentas eléctricas intensas. Los rayos pueden viajar por la red eléctrica y dañar aparatos aunque caigan a kilómetros de distancia.
- Si tenés bombas de agua, calefón o caldera en el exterior, verificá que el gabinete esté bien cerrado y sea resistente al agua.

## Plan de emergencia familiar

Más allá de la preparación física, tener un plan claro para cuando llegue una emergencia climática vale tanto como cualquier medida estructural.

- Identificá las zonas de mayor riesgo de tu casa (el rincón donde siempre gotea, el sótano que se anegó hace dos años).
- Acordá con la familia quién hace qué en caso de emergencia: quién corta la electricidad, quién saca a las mascotas, quién tiene a mano los documentos importantes.
- Guardá en una bolsa impermeable los documentos básicos (documentos de identidad, escrituras, seguros) en un lugar accesible y elevado.
- Tené a mano el número de emergencias de tu municipio, empresa de agua y distribuidora eléctrica.

La preparación no elimina el riesgo: una lluvia torrencial extraordinaria puede superar cualquier barrera. Pero sí reduce drásticamente los daños en el 80–90% de los eventos habituales de la temporada.`,
      en: `Rainy season arrives punctually every year, but every year there are houses that flood, roofs that leak, and basements that fill with water as if it were the first time. The difference between a well-prepared home and an unprepared one can mean the difference between minor inconveniences and significant material losses.

## Roof and gutters: the first line of defense

- Inspect roof tiles or panels for cracks, broken or displaced pieces, and damaged joints.
- Clean gutters and downspouts before the season. Accumulated leaves and debris can block the drainage system.
- Verify that flat-roof drains are clear of obstructions.

## Windows and doors: sealing leaks

- Check seals and weatherstripping around windows and doors. If cracked, dry, or peeling, replace them.
- Apply silicone sealant at junctions between frames and walls, especially on windward-facing windows.

## Basements and ground floors: flood preparation

- Install or verify a functioning sump pump. In high-flood-risk areas, one with a battery backup is an investment that pays for itself.
- Seal cracks in basement walls with hydraulic sealant.
- Elevate valuables off the basement floor on metal shelving or plastic pallets.
- Know where the main water shutoff and electrical panel are located.

## Emergency family plan

- Identify the highest-risk areas of your home.
- Agree on who does what in an emergency: who cuts electricity, who gets pets, who has documents.
- Store essential documents in a waterproof bag in an accessible, elevated location.`,
    },
  },
  {
    slug: 'como-elegir-epoca-del-ano-para-viajar-segun-el-clima',
    title: {
      es: 'Cómo elegir la mejor época del año para viajar según el clima',
      en: 'How to Choose the Best Time of Year to Travel Based on the Weather',
    },
    description: {
      es: 'El clima es el factor más importante que nadie planifica. Esta guía te enseña a investigar el clima de tu destino, entender las temporadas y evitar los errores más comunes de los viajeros.',
      en: 'Weather is the most important factor nobody plans for. This guide teaches you how to research your destination\'s climate, understand seasons, and avoid the most common traveler mistakes.',
    },
    date: '2026-06-14',
    body: {
      es: `El clima puede arruinar el mejor itinerario de viaje o hacer que un destino aparentemente secundario se convierta en una experiencia inolvidable. La diferencia está en investigarlo bien antes de comprar el pasaje. Y sin embargo, el clima es el factor que más frecuentemente se ignora al planificar un viaje.

## Temporada alta, temporada baja y temporada de hombro

Casi todos los destinos turísticos tienen tres temporadas desde el punto de vista climático y turístico:

**Temporada alta**: la de mejor clima. Es también la más cara y concurrida. Hoteles llenos, precios inflados, colas largas y menos posibilidad de improvisación. Para destinos de sol y playa en el hemisferio norte, suele ser julio-agosto; para el sur, diciembre-febrero.

**Temporada baja**: la de peor clima o la temporada de lluvias. Precios mucho más bajos, prácticamente sin turistas, pero con posibilidad real de que el clima arruine actividades al aire libre. En el Caribe, coincide con la temporada de huracanes (junio-noviembre).

**Temporada de hombro (shoulder season)**: las semanas o meses entre las dos anteriores. Suelen ser la mejor opción relación calidad-precio: el clima es razonablemente bueno, los precios son moderados y hay menos turistas. Por ejemplo, mayo-junio y septiembre-octubre en Europa; abril-mayo y noviembre en el sureste asiático.

## Cómo investigar el clima de tu destino

**Datos históricos, no pronósticos**: para planificar un viaje con meses de anticipación, los pronósticos no sirven porque no existen a ese plazo. Lo que sí sirve son los promedios históricos: temperatura media, días de lluvia por mes, probabilidad de tormenta. Buscá "clima promedio en [ciudad] por mes" para obtener estos datos.

**Temperatura media vs. temperatura máxima**: la temperatura media puede ser agradable (20°C) pero si las máximas llegan a 38°C al mediodía, el paseo por el centro histórico puede ser agotador. Revisá tanto el promedio como los extremos esperados.

**Días de lluvia vs. milímetros de lluvia**: una ciudad puede tener 20 días de lluvia al mes pero si son lloviznas de media hora que terminan con sol, es perfectamente compatible con el turismo. Otra puede tener solo 10 días de lluvia pero con 200 mm distribuidos en esos días (lluvias torrenciales que duran horas). Los milímetros mensuales dan mejor idea del impacto real.

**Hora del día en que llueve**: en muchas zonas tropicales, las lluvias son vespertinas y bastante predecibles. En el Amazonas, en Centroamérica o en zonas de los Andes, las mañanas suelen ser despejadas y las lluvias llegan entre las 14 y las 18 horas. Podés planificar actividades al aire libre en las mañanas y museos o descanso por la tarde sin problema.

## Errores frecuentes por región

**Europa en verano**: el error más común es visitar ciudades del sur de Europa (Sevilla, Atenas, Roma) en julio-agosto esperando el calor mediterráneo y no anticipar que puede haber 40°C con sol aplastante al mediodía. La solución: salir muy temprano, descansar entre las 12 y las 16 horas y aprovechar las noches largas y cálidas para el turismo nocturno.

**Caribe en temporada de huracanes**: visitar el Caribe entre agosto y octubre puede salir muy barato, pero el riesgo de un huracán es real. Si aun así vas, comprá un seguro de viaje que cubra cancelaciones por clima y no pagues tarifas no reembolsables.

**Machu Picchu en temporada de lluvias**: la temporada seca (mayo-octubre) es ideal; la lluviosa (noviembre-abril) trae niebla y lluvias diarias. Lo que muchos no saben: en mayo las lluvias terminan, el paisaje está verde y exuberante, los turistas son muchos menos que en junio-agosto, y el precio del alojamiento en Aguas Calientes es considerablemente menor.

**Tailandia y el sureste asiático en monzón**: el monzón (junio-octubre en Tailandia) no significa lluvia todo el día. En muchas zonas, las mañanas son soleadas y las lluvias se concentran en las tardes. El costo del viaje puede ser 40–50% menor que en temporada alta y las playas están prácticamente vacías.

## El concepto de "mejor época" es relativo al viajero

Para un mochilero que busca economizar, la temporada baja tiene sus ventajas. Para una familia con niños pequeños, la previsibilidad del buen tiempo es prioritaria. Para un fotógrafo, la luz de la temporada baja (nubes altas, cielos dramáticos, neblina en las montañas) puede ser mejor que el cielo azul perfecto de la temporada alta.

La pregunta correcta no es "¿cuándo hace mejor clima?" sino "¿qué clima es compatible con lo que quiero hacer y con las condiciones que estoy dispuesto a tolerar?"

## Herramientas útiles para la investigación climática

Además de las apps del tiempo como Clima Hoy, para planificar viajes con anticipación son útiles los gráficos climáticos mensuales (climograms) que muestran temperatura y precipitación promedio mes a mes. También sirve el índice de turismo climático, que pondera temperatura, lluvia, sol y viento para dar un puntaje de "confort turístico" por mes en cada destino. Y, sobre todo, los blogs y relatos de viajeros que estuvieron en el destino exactamente en el mes que vos querés ir: ningún gráfico reemplaza la experiencia directa.`,
      en: `Weather can ruin the best travel itinerary or turn a seemingly secondary destination into an unforgettable experience. The difference lies in researching it well before buying the ticket.

## High season, low season, and shoulder season

**High season**: best weather, also most expensive and crowded. **Low season**: worst weather or rainy season, much lower prices but real risk of weather disrupting outdoor activities. **Shoulder season**: the weeks between the other two, usually the best value: reasonably good weather, moderate prices, fewer tourists.

## How to research your destination's weather

Use historical averages, not forecasts — forecasts don't exist months out. Look at average temperature, rainy days per month, and storm probability. Check both averages and expected maximums. Note whether rainfall is distributed throughout the day or concentrated in brief afternoon showers.

## Common mistakes by region

**Europe in summer**: don't expect comfortable Mediterranean heat in southern Europe in July–August; temperatures can reach 40°C with crushing midday sun. Plan for early starts, midday rest, and evening tourism.

**Caribbean during hurricane season**: visiting between August and October is cheap, but hurricane risk is real. Buy travel insurance covering weather cancellations.

**Southeast Asia in monsoon**: the monsoon doesn't mean rain all day. In many areas, mornings are sunny and rain concentrates in afternoons. Travel costs can be 40–50% lower than high season.`,
    },
  },
  {
    slug: 'ciudades-mas-lluviosas-de-colombia',
    title: {
      es: 'Las ciudades más lluviosas de Colombia (y por qué llueve tanto)',
      en: 'The Rainiest Cities in Colombia (and Why It Rains So Much)',
    },
    description: {
      es: 'Colombia es uno de los países más lluviosos del mundo. Descubrí cuáles son las ciudades y regiones con más precipitaciones, por qué llueve tanto y cómo adaptarse a esa realidad climática.',
      en: 'Colombia is one of the rainiest countries in the world. Discover which cities and regions receive the most rainfall, why it rains so much, and how to adapt to that climate reality.',
    },
    date: '2026-06-14',
    body: {
      es: `Colombia es, por múltiples razones geográficas, uno de los países más lluviosos del planeta. Ocupa el tercer lugar en el mundo por volumen total de precipitaciones anuales. Algunas de sus regiones reciben más de 10.000 mm de lluvia al año —para referencia, Madrid recibe unos 450 mm anuales, y se considera una ciudad relativamente seca. Entender por qué llueve tanto en Colombia, y dónde llueve más, ayuda a planificar viajes, actividades y hasta decisiones de vida.

## Por qué Colombia es tan lluviosa

Colombia es el único país de América del Sur con costa tanto en el Océano Pacífico como en el Mar Caribe, y además está atravesado de norte a sur por tres cordilleras que superan los 3.000–5.000 metros de altitud. Esta combinación crea las condiciones perfectas para precipitaciones extremas:

**La Zona de Convergencia Intertropical (ZCIT)**: Colombia está ubicada sobre el ecuador climático, donde los vientos alisios del hemisferio norte y del hemisferio sur convergen. Este encuentro fuerza el ascenso de grandes masas de aire húmedo, que al enfriarse producen lluvias intensas. La ZCIT se desplaza norte-sur a lo largo del año, lo que explica las dos temporadas de lluvia que tiene la mayor parte del país.

**Las tres cordilleras**: los Andes colombianos forman tres ramales que actúan como barreras para los vientos húmedos. Cuando el aire cargado de humedad del Pacífico o del Amazonas choca con las cordilleras, asciende, se enfría y precipita. Las vertientes occidentales de las cordilleras son significativamente más lluviosas que las orientales.

**La influencia amazónica**: la región de la Amazonia colombiana recibe humedad de la selva brasileña que circula en forma de "ríos aéreos" a través de la región. Esta humedad adicional se suma a la propia de la Amazonia colombiana.

## Las regiones más lluviosas de Colombia

**El Pacífico colombiano**: la región más lluviosa del país y una de las más lluviosas del mundo. El municipio de Lloró (Chocó) tiene un promedio histórico de 12.000–13.000 mm anuales, lo que lo coloca entre los lugares con más lluvia del planeta. Quibdó, capital del Chocó, supera los 8.000 mm anuales. La razón: los vientos del Pacífico traen humedad masiva que impacta de frente la cordillera Occidental, generando lluvias casi permanentes.

**El piedemonte amazónico**: la zona donde la selva amazónica empieza a subir hacia los Andes recibe lluvias extraordinarias. Puerto Asís (Putumayo), Mocoa y Florencia (Caquetá) tienen precipitaciones anuales entre 3.500 y 5.000 mm, con lluvias frecuentes durante casi todos los meses del año.

**El sur de Colombia**: Nariño y Putumayo tienen climas de alta pluviosidad influenciados tanto por el Pacífico como por el Amazonas. La ciudad de Tumaco tiene más de 3.000 mm anuales y registra lluvias en más de 200 días del año.

## Las ciudades principales y sus lluvias

Entre las grandes ciudades del país, la distribución de lluvias varía considerablemente:

**Medellín**: unos 1.600–1.700 mm anuales, con dos temporadas de lluvia bien marcadas (abril-mayo y octubre-noviembre). Las tardes lluviosas son parte de la identidad de la ciudad, especialmente en esos meses.

**Bogotá**: 800–1.000 mm anuales distribuidos en sus dos temporadas húmedas. Los meses más lluviosos son abril y octubre. Aunque no llueve tanto en volumen, la frecuencia de días lluviosos o parcialmente nublados es alta.

**Cali**: 1.000–1.200 mm anuales. Tiene dos temporadas secas bastante marcadas (diciembre-febrero y julio-agosto) que la hacen más agradable en esos meses.

**Barranquilla**: 800 mm anuales, pero concentrados en la temporada lluviosa (mayo-noviembre). La temporada seca (diciembre-abril) es calurosa y predominantemente soleada con los vientos alisios del norte.

**Cartagena**: similar a Barranquilla, con 900–1.000 mm anuales, temporada seca de diciembre a abril y lluviosa el resto del año.

## Cómo adaptarse a la realidad lluviosa colombiana

Los colombianos tienen estrategias culturales de adaptación a la lluvia que vale la pena imitar:

**La "camándula"**: en muchas ciudades colombianas, especialmente Medellín, el impermeable liviano o el paraguas compacto es un accesorio permanente, como las llaves de casa.

**La hora de la lluvia**: en la mayoría de las ciudades andinas y del interior, las lluvias son más frecuentes en la tarde (entre las 14 y las 18 horas). Planificar actividades al aire libre en las mañanas es un ajuste simple pero efectivo.

**Las temporadas secas**: las temporadas secas (verano en Colombia) son preciadas para actividades al aire libre, excursiones y turismo rural. Planificar viajes de senderismo, visitas al Cocora o al Parque Tayrona para estas ventanas climáticas hace una diferencia enorme en la experiencia.

La lluvia en Colombia no es un obstáculo: es parte del paisaje, de la exuberancia de la vegetación, del caudal de los ríos y de la fertilidad del suelo cafetero. Pero como cualquier elemento climático, entenderla y planificar en función de ella hace que la experiencia sea mucho más disfrutable.`,
      en: `Colombia is one of the world's rainiest countries, ranking third globally by total annual precipitation. Some regions receive over 10,000 mm of rain per year — for reference, Madrid receives about 450 mm annually.

## Why Colombia is so rainy

Colombia is the only South American country with coastline on both the Pacific Ocean and the Caribbean Sea, and is crossed from north to south by three mountain ranges exceeding 3,000–5,000 meters. This creates perfect conditions for extreme rainfall.

The Intertropical Convergence Zone (ITCZ) sits over Colombia where trade winds from both hemispheres meet, forcing large humid air masses upward, which cool and produce intense rain. The three Andean ranges act as barriers for humid winds from the Pacific and Amazon.

## The rainiest regions

**The Colombian Pacific**: Lloró (Chocó) averages 12,000–13,000 mm annually, placing it among the rainiest places on Earth. Quibdó exceeds 8,000 mm annually.

**The Amazon piedmont**: Puerto Asís, Mocoa, and Florencia receive 3,500–5,000 mm annually with frequent rain nearly year-round.

## Major cities and their rainfall

**Medellín**: 1,600–1,700 mm annually with two marked rainy seasons. **Bogotá**: 800–1,000 mm in two wet seasons. **Barranquilla**: 800 mm concentrated in the rainy season (May–November). **Cartagena**: 900–1,000 mm with a dry season from December to April.

## How to adapt

Plan outdoor activities for mornings in most Andean cities, where afternoon rains (2–6 p.m.) are common. Schedule hikes and outdoor tourism during dry seasons. Carry a compact umbrella as a permanent accessory.`,
    },
  },
  {
    slug: 'ciudades-con-el-mejor-clima-de-latinoamerica',
    title: {
      es: 'Ciudades con el mejor clima de Latinoamérica',
      en: 'Cities with the Best Climate in Latin America',
    },
    description: {
      es: 'Un ranking argumentado de las ciudades latinoamericanas con clima más agradable y equilibrado: temperatura, humedad, lluvias, sol y calidad del aire como criterios.',
      en: 'A reasoned ranking of Latin American cities with the most pleasant and balanced climate: temperature, humidity, rainfall, sun, and air quality as criteria.',
    },
    date: '2026-06-14',
    body: {
      es: `Hablar del "mejor clima" implica definir qué se entiende por mejor. Para algunos es calor y sol constante; para otros, temperatura fresca y estable; para muchos, lo ideal es una primavera eterna sin calores extremos ni frío excesivo. Acá tomamos como criterios: temperatura promedio anual entre 18°C y 25°C, baja amplitud térmica entre el día y la noche, pocas semanas de calor extremo o frío intenso, precipitaciones moderadas sin sequía ni inundaciones, y buena calidad del aire.

## Medellín, Colombia: la ciudad de la eterna primavera (con matices)

Medellín tiene fama mundial de clima perfecto y en gran parte la merece: temperatura promedio de 22°C durante todo el año, sin inviernos fríos ni veranos sofocantes. La altitud de 1.495 metros sobre el nivel del mar suaviza el calor que correspondería a una ciudad tropical. Las noches son agradables (15–18°C) y los días son cálidos pero no agobiantes (25–28°C).

Los "matices": las temporadas de lluvia (abril-mayo y octubre-noviembre) traen aguaceros frecuentes en las tardes, y la humedad puede estar por encima del 70% en esos meses. Pero incluso así, las mañanas suelen estar despejadas. Para quienes no tienen intolerancia a la lluvia ocasional, Medellín tiene pocos rivales en Latinoamérica en cuanto a balance climático.

## Guadalajara, México: la eterna primavera mexicana

Guadalajara tiene una temperatura promedio de 20°C, con veranos moderados (máximas de 28–30°C) gracias a las lluvias de julio-agosto que refrescan la ciudad. Los inviernos son suaves y secos (días de 22°C, noches de 8–12°C). La Ciudad Tapatía tiene más de 2.700 horas de sol al año y las lluvias, aunque frecuentes en verano, son generalmente por las tardes y de corta duración.

## San José, Costa Rica: tropical de montaña sin extremos

San José, a 1.170 metros de altitud, tiene una temperatura constante de 22–23°C durante todo el año. A diferencia de las ciudades costeras costarricenses, el calor nunca es sofocante y el frío nunca es real. La temporada lluviosa (mayo-noviembre) trae lluvias regulares en las tardes, pero las mañanas son soleadas y los días siguen siendo agradables.

## Asunción del Sol, España (Canarias) — fuera de Latinoamérica pero referencia

Las Islas Canarias son el patrón de oro del clima perfecto con temperaturas entre 18°C y 25°C durante todo el año, sin temporadas de lluvia intensas y con mucho sol. Si buscamos algo similar en Latinoamérica, el Valle del Cauca en Colombia (Cali) y algunas zonas de Jalisco (México) se acercan.

## Cali, Colombia: calor agradable con temporada seca prolongada

Cali tiene un clima cálido y estable (25°C de promedio) con dos temporadas secas bien definidas: diciembre-febrero y julio-agosto. En esos meses, el sol predomina y las temperaturas son cómodas. Las temporadas de lluvia son moderadas en comparación con otras ciudades colombianas. Las noches son frescas gracias a la brisa del Pacífico y el viento que los caleños llaman "viento de Cali" o "fresco caleño". La humedad es más baja que en ciudades costeras del Caribe.

## Mendoza, Argentina: el Sol cuyana

Mendoza tiene más de 300 días de sol al año, un dato que poca gente en el resto de Latinoamérica conoce. El clima es árido continental: veranos calurosos (hasta 38°C, pero calor seco que se tolera mejor que el húmedo), otoños y primaveras espléndidos (15–25°C), e inviernos fríos pero secos. La vendimia de marzo es el momento ideal: clima de otoño perfecto, uvas maduras y la ciudad en modo festivo. La calidad del aire es muy buena al no haber industria pesada y estar a los pies de los Andes.

## Valdivia y el sur de Chile: para los amantes del verde y la lluvia

Si el "buen clima" incluye vegetación exuberante, temperaturas frescas y un ambiente permanentemente verde, el sur de Chile —especialmente Valdivia— tiene un encanto climático específico. Con 2.200–2.500 mm de lluvia anuales y temperaturas que raramente superan los 25°C en verano o bajan de 0°C en invierno, es el paraíso para quienes disfrutan de climas oceánicos.

## Los criterios que más pesan según el tipo de habitante

Para trabajadores remotos y nómadas digitales que buscan calidad de vida cotidiana: Medellín y San José son las elecciones más frecuentes, combinando clima agradable con infraestructura moderna.

Para jubilados latinoamericanos y europeos: Guadalajara, Cali y algunas ciudades del centro-sur de Chile como Temuco ofrecen clima equilibrado, bajo costo de vida y calidad de servicios.

Para viajeros de paso: el "mejor clima" depende del mes de visita y la actividad. En los Andes, la temporada seca es universalmente mejor para cualquier tipo de turismo. En el Caribe y el Pacífico colombiano, la temporada seca (diciembre-abril) transforma radicalmente la experiencia.

El clima perfecto no existe, pero la combinación de altitud moderada, latitud tropical y ausencia de océanos cercanos que amplifiquen el calor produce algunos de los microclimas más habitables del mundo en Latinoamérica.`,
      en: `Defining the "best climate" requires criteria. Here we use: average annual temperature between 18°C and 25°C, low daily temperature range, few weeks of extreme heat or cold, moderate precipitation without drought or flooding, and good air quality.

## Medellín, Colombia: the city of eternal spring

Medellín's reputation is largely deserved: 22°C average year-round, no cold winters or suffocating summers. At 1,495 meters above sea level, altitude softens the tropical heat. Caveats: two rainy seasons (April–May and October–November) bring frequent afternoon showers with humidity above 70%, but mornings are usually clear.

## Guadalajara, Mexico: Mexico's eternal spring

20°C average, moderate summers (28–30°C peaks) thanks to July–August rains, mild dry winters (22°C days, 8–12°C nights), over 2,700 annual sunshine hours.

## San José, Costa Rica: tropical highland without extremes

At 1,170 meters, San José has a constant 22–23°C year-round. Heat is never suffocating, cold is never real. Regular afternoon rains in the wet season (May–November) but sunny mornings throughout.

## Cali, Colombia: pleasant warmth with extended dry season

25°C average with two well-defined dry seasons (December–February and July–August). Lower humidity than Caribbean coast cities, with the characteristic fresh evening breeze locals call "viento de Cali."

## Mendoza, Argentina: over 300 sunny days per year

Arid continental climate: hot dry summers (up to 38°C, but dry heat is more tolerable), spectacular spring and fall (15–25°C), cold dry winters. Excellent air quality. The March grape harvest season offers perfect fall weather.`,
    },
  },
  {
    slug: 'clima-de-colombia-regiones-y-temporadas',
    title: {
      es: 'Clima de Colombia: regiones naturales y temporadas de lluvia',
      en: 'Colombia\'s Climate: Natural Regions and Rainy Seasons',
    },
    description: {
      es: 'Colombia tiene seis regiones naturales con climas completamente distintos. Esta guía explica qué tiempo hace en cada una, cuándo son las temporadas de lluvia y cómo afectan a la vida cotidiana.',
      en: 'Colombia has six natural regions with completely different climates. This guide explains what the weather is like in each, when the rainy seasons are, and how they affect daily life.',
    },
    date: '2026-06-14',
    body: {
      es: `Colombia es uno de los países con mayor diversidad climática del mundo. A diferencia de la mayoría de los países, que tienen un clima dominante con variaciones, Colombia tiene seis regiones naturales con condiciones meteorológicas completamente distintas, algunas de las cuales coexisten a pocos kilómetros de distancia. Subir de Medellín a Bogotá en auto (unos 450 km) es pasar de una ciudad de eterna primavera a una capital fría y nublada que a veces luce más a Manchester que a Latinoamérica.

## La Zona Andina: la región más poblada y la más variable

Los Andes colombianos se dividen en tres cordilleras (Occidental, Central y Oriental) que crean una variedad altitudinal enorme. La regla general: por cada 1.000 metros de altitud, la temperatura disminuye unos 6°C.

**Bogotá (2.600 m)**: temperatura entre 7°C y 19°C todo el año, con dos temporadas húmedas (marzo-mayo y septiembre-noviembre) y dos secas (diciembre-febrero y junio-agosto). La "temporada seca de verano" de diciembre-enero es soleada y agradable, aunque con noches frías.

**Medellín (1.495 m)**: 22°C de promedio, dos temporadas de lluvia similares a Bogotá pero menos intensas. El clima más equilibrado del país.

**Cali (995 m)**: más cálida que Medellín con 25°C de promedio. Sus temporadas secas son más marcadas (diciembre-febrero y junio-agosto).

**Manizales, Pereira, Armenia (1.400–2.100 m)**: el Eje Cafetero tiene precipitaciones casi todo el año, con lluvias en más de 200 días anuales en algunas zonas. La exuberancia del Paisaje Cultural Cafetero se explica en parte por esta humedad constante.

## La Región Caribe: calor, vientos alisios y temporada seca prolongada

La Costa Caribe colombiana tiene un clima tropical árido o semiárido con temperaturas de 28–35°C y una temporada seca bien definida de diciembre a abril impulsada por los vientos alisios del norte. La temporada de lluvias va de mayo a noviembre.

**Barranquilla y Cartagena**: calor intenso todo el año. La diferencia entre la temporada seca y la lluviosa es dramática: en diciembre-enero, el cielo es azul y el viento alisio refresca; en octubre, la humedad y el calor son sofocantes.

**La Guajira**: la zona más seca de Colombia con precipitaciones inferiores a 500 mm anuales en algunas zonas. El desierto de La Guajira es un contraste radical con las selvas del Pacífico.

**Santa Marta**: tiene la Sierra Nevada de Santa Marta a pocos kilómetros, lo que crea microclimas que van desde el desierto hasta las nieves perpetuas de los picos más altos.

## La Región del Pacífico: la más lluviosa del país

La Costa Pacífica colombiana es una de las regiones más lluviosas del planeta. Quibdó, capital del Chocó, tiene precipitaciones de 8.000–9.000 mm anuales. La razón: los vientos del Pacífico sur llevan humedad masiva que choca con la Cordillera Occidental, forzando ascenso continuo del aire y lluvia casi permanente.

La biodiversidad excepcional de esta región —el Chocó biogeográfico es uno de los puntos de mayor biodiversidad del planeta— se explica en gran parte por esta disponibilidad permanente de agua.

## Los Llanos Orientales: dos estaciones extremas

La Orinoquía colombiana tiene un clima tropical con dos estaciones muy marcadas: lluvia (abril-octubre) y seca (noviembre-marzo). En temporada de lluvias, los Llanos se inundan parcialmente y la sabana se transforma en espejo de agua. En temporada seca, el paisaje se vuelve amarillo y árido. El turismo de observación de fauna (especialmente aves y caimanes) es mejor en la transición entre ambas estaciones.

## La Amazonia: lluvia distribuida todo el año

La Amazonia colombiana (Amazonas, Vaupés, Guainía) tiene lluvias abundantes durante todo el año, sin temporada seca definida. Las precipitaciones pueden superar los 3.000–4.000 mm anuales y la temperatura es alta (28–32°C) y estable. La humedad es permanentemente alta. Esta combinación de calor y humedad constantes crea el ecosistema de selva tropical más biodiverso del mundo.

## La zona Insular: el Caribe perfecto

Las Islas del Rosario, San Bernardo y el Archipiélago de San Andrés tienen el clima caribeño insular: temperaturas de 27–30°C, brisas marinas constantes y lluvias moderadas. San Andrés tiene temporada seca de enero a abril, que es cuando las playas de Seven Colors están en su mejor momento.

## Las dos temporadas de lluvia del interior del país

A diferencia de muchos países tropicales con un solo monzón, Colombia tiene dos temporadas de lluvia en el interior gracias al doble paso anual de la Zona de Convergencia Intertropical (ZCIT): una vez hacia el norte (marzo-mayo) y otra hacia el sur (septiembre-noviembre). Esta doble temporada es característica del norte de Sudamérica y permite que muchos cultivos se den dos veces al año.

Para el turismo, las temporadas secas colombianas (diciembre-febrero y junio-agosto) son generalmente las mejores para actividades al aire libre en la región Andina y Caribe. En el Pacífico y la Amazonia, no hay temporada seca real, pero las lluvias son parte inherente de la experiencia.`,
      en: `Colombia is one of the world's most climatically diverse countries, with six natural regions of completely different meteorological conditions that can coexist just kilometers apart. Driving from Medellín to Bogotá (about 450 km) means going from a city of eternal spring to a cold, cloudy capital.

## The Andean Region: most populated and most variable

The rule: for every 1,000 meters of altitude, temperature drops about 6°C. Bogotá (2,600 m): 7–19°C year-round with two wet seasons (March–May and September–November). Medellín (1,495 m): 22°C average, the most balanced climate in the country. Cali (995 m): 25°C average with well-defined dry seasons.

## The Caribbean Region: heat, trade winds, and extended dry season

Tropical arid or semi-arid climate with temperatures of 28–35°C. A well-defined dry season from December to April driven by northerly trade winds. La Guajira is Colombia's driest zone with under 500 mm annually in some areas.

## The Pacific Region: the country's rainiest

Quibdó averages 8,000–9,000 mm of annual rainfall. Humid winds from the Pacific hit the western Andes and produce near-permanent rain. This explains the extraordinary biodiversity of the Chocó biogeographic region.

## The Eastern Plains (Llanos): two extreme seasons

Tropical climate with two very marked seasons: rain (April–October) when the plains partially flood, and dry (November–March) when the landscape turns yellow and arid.

## Colombia's two inland rainy seasons

Unlike most tropical countries with a single monsoon, Colombia has two inland rainy seasons due to the ITCZ passing twice per year: northward (March–May) and southward (September–November). This allows many crops to be harvested twice annually.`,
    },
  },
  {
    slug: 'estaciones-del-ano-en-argentina',
    title: {
      es: 'Las estaciones del año en Argentina: qué esperar en cada una',
      en: 'The Seasons of the Year in Argentina: What to Expect in Each One',
    },
    description: {
      es: 'Argentina es el segundo país más grande de América del Sur y tiene climas muy distintos según la región. Esta guía explica las cuatro estaciones con datos reales de temperatura, lluvias y qué hacer en cada época.',
      en: 'Argentina is the second largest country in South America and has very different climates by region. This guide explains the four seasons with real temperature data, rainfall, and what to do in each period.',
    },
    date: '2026-06-14',
    body: {
      es: `Argentina se extiende desde los trópicos del norte hasta la Patagonia casi antártica del sur, con más de 3.000 km de distancia vertical. A diferencia de los países del trópico, Argentina tiene cuatro estaciones bien definidas en la mayor parte del país, aunque la amplitud climática entre el norte y el sur hace que prácticamente hablar de "las estaciones de Argentina" sea hablar de al menos cuatro climas distintos superpuestos.

## El hemisferio sur invierte el calendario

El primer dato que confunde a los visitantes del hemisferio norte: las estaciones están invertidas. En Argentina, el verano es diciembre-febrero, el otoño es marzo-mayo, el invierno es junio-agosto y la primavera es septiembre-noviembre. Esto tiene consecuencias prácticas enormes: las vacaciones de verano argentinas son en enero, la Semana de Turismo es en otoño (abril), y las vacaciones de invierno son en julio.

## Verano (diciembre – febrero): calor para todos (más o menos)

El verano argentino es el período de máximas temperaturas y también el de mayor actividad turística interna. Las diferencias regionales son extremas:

**Buenos Aires y la Pampa**: temperaturas de 28–38°C con humedad alta. Las tormentas eléctricas de verano son frecuentes e intensas, especialmente en enero y febrero. La combinación de calor húmedo puede hacer que la temperatura sensible supere los 42–44°C. Las madrugadas en verano raramente bajan de 22–24°C, lo que hace que el descanso nocturno sea difícil sin aire acondicionado.

**Córdoba y las Sierras**: calor similar al de Buenos Aires en los valles (32–37°C) pero más tolerable en las zonas altas (25–30°C). Las tormentas de tarde son espectaculares y características del verano cordobés.

**Mendoza y Cuyo**: verano muy caluroso y seco (hasta 40°C) con vientos Zonda ocasionales que suben la temperatura abruptamente. A diferencia del verano húmedo pampeano, el calor cuyana es seco y se tolera mejor a la sombra.

**Patagonia norte**: temporada turística máxima en los Lagos (Bariloche, Villa La Angostura). Temperaturas agradables de 20–28°C, noches frescas y los días más largos del año (el sol puede ponerse cerca de las 22 horas en enero).

**Patagonia sur y Tierra del Fuego**: el verano patagónico es fresco (12–18°C en Ushuaia) y con muchas horas de luz pero viento constante e intenso. El período de diciembre a febrero es el único en que el turismo del fin del mundo es realmente confortable.

## Otoño (marzo – mayo): el secreto mejor guardado de Argentina

El otoño argentino es la estación menos conocida y probablemente la mejor para viajar en muchas regiones. Las temperaturas son perfectas, los turistas son muchos menos que en verano y los paisajes tienen colores únicos.

**Buenos Aires**: temperaturas de 18–26°C con cielos despejados en abril. La ciudad en otoño es perfecta para caminar: sin el calor agobiante del verano ni el frío del invierno.

**Mendoza**: la vendimia, el festival de la cosecha de uva, ocurre en marzo. El campo está lleno de viñas en sus colores más intensos, la temperatura es ideal (15–25°C) y el precio del alojamiento es menor que en el verano.

**Patagonia**: el otoño es la estación de los colores. Los álamos y las hayas australes (lengas y ñires) se vuelven amarillos y rojos en marzo-abril, creando paisajes que compiten con los de Canadá o el norte de EE.UU. en otoño. El turismo es menor que en verano y las condiciones climáticas aún son buenas.

## Invierno (junio – agosto): nieve, frío y deportes de montaña

El invierno es la estación más contrastante del país: del frío subtropical templado del norte al frío extremo del sur.

**Buenos Aires y la Pampa**: inviernos frescos y húmedos (7–15°C), raramente con heladas en la capital. El frío porteño no es extremo en temperatura absoluta pero la humedad lo hace sentir más intenso. Las lluvias invernales son frecuentes y las noches grises son características.

**Mendoza**: frío seco con heladas nocturnas (hasta -8°C en la ciudad) pero días soleados. El invierno mendocino es espectacular para el esquí: Las Leñas y Los Penitentes son centros de esquí de clase mundial.

**Bariloche y la Patagonia norte**: la temporada de esquí (julio-agosto) es el período de mayor turismo. Los cerros Catedral (Bariloche) y Chapelco (San Martín de los Andes) reciben buenos volúmenes de nieve en inviernos típicos.

**Tierra del Fuego**: el invierno austral en Ushuaia es oscuro (pocas horas de luz), frío (temperaturas de -5 a 5°C) y con nieve frecuente. El Canal Beagle puede congelarse parcialmente y el viento patagónico es constante e intenso.

## Primavera (septiembre – noviembre): flores, lluvias y transición

La primavera argentina es la estación de la renovación y también de la inestabilidad meteorológica. Las temperaturas suben progresivamente pero el tiempo es variable, con días muy cálidos intercalados con lluvias y descensos bruscos de temperatura.

**Buenos Aires**: septiembre y octubre tienen el problema de los "días de un minuto de cada estación": puede amanecer con 8°C y terminar con 28°C, o al revés. Las lluvias primaverales en la Pampa pueden ser intensas. La floración de los jacarandás en noviembre es uno de los eventos naturales más fotografiados del país.

**Patagonia**: la primavera patagónica (octubre-noviembre) es la de los campos de flores silvestres y las cascadas en su máximo caudal por el deshielo. Los vientos son intensos pero el turismo ya es posible y los precios son más accesibles que en verano.

Conocer las estaciones argentinas permite planificar un viaje que aproveche lo mejor de cada región y cada época del año, desde la vendimia mendocina hasta los días más largos de Ushuaia, pasando por el otoño patagónico y la primavera porteña de los jacarandás.`,
      en: `Argentina extends from tropical regions in the north to near-Antarctic Patagonia in the south — over 3,000 km of vertical distance. Unlike tropical countries, Argentina has four well-defined seasons in most of the country.

## The Southern Hemisphere inverts the calendar

The first fact that confuses Northern Hemisphere visitors: seasons are reversed. In Argentina, summer is December–February, fall is March–May, winter is June–August, and spring is September–November.

## Summer (December – February): heat for all (more or less)

**Buenos Aires and the Pampas**: 28–38°C with high humidity. Frequent intense thunderstorms in January–February. Heat index can exceed 42–44°C. Nights rarely drop below 22–24°C, making rest difficult without air conditioning.

**Mendoza**: very hot, dry summers (up to 40°C) with occasional Zonda winds that abruptly raise temperature. Dry heat is more tolerable than humid Pampas heat.

**Patagonia north**: peak tourist season at the Lakes (Bariloche). Pleasant 20–28°C with cool nights and the longest days of the year.

## Fall (March – May): Argentina's best-kept secret

Fall is the least-known and probably the best season to travel. Perfect temperatures, far fewer tourists than summer, unique foliage colors. Mendoza's grape harvest festival occurs in March. Patagonian larches (lengas and ñires) turn yellow and red, creating landscapes rivaling Canadian or New England fall foliage.

## Winter (June – August): snow, cold, and mountain sports

**Buenos Aires**: cool and humid winters (7–15°C), rarely freezing. **Mendoza**: dry cold with overnight frost (down to -8°C) but sunny days; world-class ski resorts. **Bariloche**: ski season (July–August) is peak tourism period. **Tierra del Fuego**: dark, cold (-5 to 5°C), frequent snow, and constant Patagonian wind.

## Spring (September – November): flowers, rain, and transition

Variable weather: very warm days mixed with rain and sudden temperature drops. Buenos Aires jacaranda blooming in November is one of the country's most photographed natural events. Patagonian spring brings wildflower fields and waterfalls at peak flow from snowmelt.`,
    },
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}

export const guideSlugs = guides.map(g => g.slug);
