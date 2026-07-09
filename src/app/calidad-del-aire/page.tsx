import type { Metadata } from 'next';
import Link from 'next/link';
import TopMenu from '@/components/TopMenu';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Calidad del aire: qué es el ICA, contaminantes y cómo afectan tu salud',
  description: 'Aprende qué significa el Índice de Calidad del Aire (ICA/AQI), qué son el PM2.5, PM10, ozono, NO₂ y CO, y qué hacer en días de mala calidad del aire.',
  alternates: {
    canonical: 'https://www.clima-hoy.com/calidad-del-aire',
  },
  openGraph: {
    title: 'Calidad del aire: ICA, contaminantes y salud',
    description: 'Guía completa sobre el Índice de Calidad del Aire (ICA), contaminantes atmosféricos y recomendaciones de salud.',
    url: 'https://www.clima-hoy.com/calidad-del-aire',
    siteName: 'Clima Hoy',
    locale: 'es_CO',
    type: 'article',
  },
};

const faqItems = [
  {
    question: '¿Qué significa el ICA o AQI?',
    answer: 'El Índice de Calidad del Aire (ICA, o AQI en inglés) es un número del 1 al 5 (o del 0 al 500 en la escala EPA) que resume la contaminación del aire en un solo dato. Cuanto más alto el número, peor la calidad del aire y mayor el riesgo para la salud.',
  },
  {
    question: '¿Qué diferencia hay entre PM2.5 y PM10?',
    answer: 'Ambas son partículas suspendidas en el aire, pero el PM2.5 son partículas muy finas (menos de 2,5 micrómetros de diámetro) que pueden penetrar hasta los pulmones y el torrente sanguíneo. El PM10 son partículas más grandes (hasta 10 µm) que se quedan en las vías respiratorias superiores. El PM2.5 es más peligroso para la salud a largo plazo.',
  },
  {
    question: '¿A qué nivel de ICA debo evitar salir al aire libre?',
    answer: 'A partir del nivel 3 (moderado), las personas con asma, alergias, enfermedades cardiovasculares o respiratorias deben reducir el esfuerzo físico al aire libre. En los niveles 4 (malo) y 5 (muy malo) se recomienda que todos eviten la actividad intensa al exterior, y las personas del grupo de riesgo deben permanecer en interiores.',
  },
  {
    question: '¿Por qué empeora la calidad del aire en las ciudades?',
    answer: 'Los principales factores son el tráfico vehicular (emisión de NO₂, CO y partículas), la industria, la calefacción y los incendios. Las condiciones meteorológicas agravan el problema: en días sin viento y con inversión térmica (una capa de aire caliente atrapa el frío de abajo), los contaminantes no se dispersan y se acumulan a nivel del suelo.',
  },
  {
    question: '¿El ozono es siempre malo?',
    answer: 'Depende de dónde esté. El ozono estratosférico (la capa de ozono a 20-30 km de altitud) nos protege de los rayos UV. El ozono troposférico, el que se forma cerca del suelo por reacción de NOx y compuestos orgánicos volátiles con la luz solar, es un contaminante que irrita las vías respiratorias. Es el que mide el ICA.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      name: 'Calidad del aire: ICA, contaminantes y salud',
      description: 'Guía completa sobre el Índice de Calidad del Aire (ICA), contaminantes atmosféricos y recomendaciones de salud.',
      url: 'https://www.clima-hoy.com/calidad-del-aire',
      isPartOf: { '@type': 'WebSite', name: 'Clima Hoy', url: 'https://www.clima-hoy.com' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://www.clima-hoy.com' },
        { '@type': 'ListItem', position: 2, name: 'Calidad del aire', item: 'https://www.clima-hoy.com/calidad-del-aire' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

const aqiLevels = [
  { level: 1, label: 'Excelente', color: '#00e400', description: 'El aire es limpio. No hay riesgo para la salud.' },
  { level: 2, label: 'Buena',     color: '#92d050', description: 'Calidad aceptable. Puede haber un riesgo moderado para personas muy sensibles.' },
  { level: 3, label: 'Moderada',  color: '#ff7e00', description: 'Personas sensibles (asma, mayores, niños) deben reducir la actividad intensa al exterior.' },
  { level: 4, label: 'Mala',      color: '#ff0000', description: 'Toda la población puede sufrir efectos. Grupos de riesgo: evitar esfuerzo al aire libre.' },
  { level: 5, label: 'Muy mala',  color: '#8f3f97', description: 'Emergencia sanitaria. Se recomienda permanecer en interiores y ventilar poco.' },
];

const pollutants = [
  {
    name: 'PM2.5',
    full: 'Partículas finas (< 2,5 µm)',
    source: 'Tráfico, quema de biomasa, industria.',
    effect: 'Penetran hasta los alvéolos pulmonares y el torrente sanguíneo. Asociadas a enfermedades cardiovasculares y respiratorias crónicas.',
  },
  {
    name: 'PM10',
    full: 'Partículas gruesas (< 10 µm)',
    source: 'Polvo de carreteras, construcción, industria.',
    effect: 'Se depositan en las vías respiratorias superiores. Causan irritación nasal y de garganta; agravan el asma y la bronquitis.',
  },
  {
    name: 'O₃ (Ozono)',
    full: 'Ozono troposférico',
    source: 'Se forma por reacción de NOx y COV con luz solar. Picos en tardes soleadas de verano.',
    effect: 'Irrita los pulmones, reduce la capacidad respiratoria y agrava el asma. Especialmente dañino durante el ejercicio al aire libre.',
  },
  {
    name: 'NO₂',
    full: 'Dióxido de nitrógeno',
    source: 'Tráfico vehicular (diésel), calefacciones, plantas de energía.',
    effect: 'Irrita las vías respiratorias, aumenta la susceptibilidad a infecciones. Contribuye a la formación de ozono y partículas.',
  },
  {
    name: 'SO₂',
    full: 'Dióxido de azufre',
    source: 'Combustión de carbón y petróleo, industria metalúrgica.',
    effect: 'Causa irritación ocular y respiratoria. A altas concentraciones provoca broncoespasmo en personas con asma.',
  },
  {
    name: 'CO',
    full: 'Monóxido de carbono',
    source: 'Tráfico (sobre todo en túneles y horas pico), incendios, calefacciones mal ventiladas.',
    effect: 'Se une a la hemoglobina e impide el transporte de oxígeno. A niveles altos causa cefalea, mareos y puede ser letal.',
  },
];

const h2Style: React.CSSProperties = { fontSize: '1.15rem', marginBottom: '10px', marginTop: '28px' };
const boxStyle: React.CSSProperties = { maxWidth: 900, margin: '0 auto', padding: '0 16px' };
const pStyle: React.CSSProperties = { fontSize: '0.93rem', lineHeight: 1.75, color: 'var(--color-text)', margin: '0 0 10px' };

export default function CalidadDelAirePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <TopMenu />
      <div style={boxStyle}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: 8, marginTop: 28 }}>
          Calidad del aire: qué es el ICA y cómo afecta tu salud
        </h1>
        <p style={pStyle}>
          Cada vez que consultas el clima en una ciudad de Clima Hoy verás el <strong>Índice de Calidad del Aire (ICA)</strong>,
          también llamado AQI en inglés. Este número resume en un solo dato qué tan limpio o contaminado está
          el aire en ese momento. Aquí te explicamos qué significa, qué contaminantes lo componen y qué deberías
          hacer según el nivel.
        </p>

        <h2 style={h2Style}>La escala del ICA: 5 niveles</h2>
        <p style={pStyle}>
          En Clima Hoy usamos la escala de OpenWeatherMap, que va del 1 al 5. Cada nivel tiene un color y unas
          recomendaciones distintas:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
          {aqiLevels.map(({ level, label, color, description }) => (
            <div key={level} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: '10px 14px', background: 'var(--color-surface)', borderRadius: 8, border: '1px solid var(--color-border)', borderLeft: `4px solid ${color}` }}>
              <div style={{ minWidth: 24, fontWeight: 700 }}>{level}</div>
              <div>
                <strong style={{ color }}>{label}</strong>
                <span style={{ fontSize: '0.88rem', color: 'var(--color-text)', marginLeft: 8 }}>{description}</span>
              </div>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>Contaminantes que mide el ICA</h2>
        <p style={pStyle}>
          El ICA se calcula a partir de la concentración de varios contaminantes. Los cuatro más importantes para
          la salud cotidiana son PM2.5, PM10, ozono y NO₂. Aquí los 6 que monitoriza nuestra API:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 12, marginBottom: 20 }}>
          {pollutants.map(({ name, full, source, effect }) => (
            <div key={name} style={{ padding: '12px 14px', background: 'var(--color-surface)', borderRadius: 8, border: '1px solid var(--color-border)', fontSize: '0.88rem' }}>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 4 }}>{name}</div>
              <div style={{ color: '#888', marginBottom: 6 }}>{full}</div>
              <p style={{ margin: '0 0 4px' }}><strong>Fuente:</strong> {source}</p>
              <p style={{ margin: 0 }}><strong>Efectos:</strong> {effect}</p>
            </div>
          ))}
        </div>

        <h2 style={h2Style}>¿Quién está en riesgo?</h2>
        <p style={pStyle}>
          La contaminación del aire afecta a todos, pero algunos grupos son más vulnerables:
        </p>
        <ul style={{ fontSize: '0.93rem', lineHeight: 1.75, paddingLeft: 20, marginBottom: 20 }}>
          <li><strong>Niños y adolescentes:</strong> sus pulmones aún se están desarrollando; la exposición crónica puede reducir la capacidad pulmonar adulta.</li>
          <li><strong>Mayores de 65 años:</strong> mayor riesgo cardiovascular y respiratorio.</li>
          <li><strong>Personas con asma o EPOC:</strong> incluso niveles moderados pueden desencadenar crisis.</li>
          <li><strong>Embarazadas:</strong> el PM2.5 está asociado a bajo peso al nacer y parto prematuro.</li>
          <li><strong>Deportistas que entrenan al aire libre:</strong> la respiración acelerada aumenta la exposición a contaminantes.</li>
        </ul>

        <h2 style={h2Style}>Qué hacer según el nivel del ICA</h2>
        <p style={pStyle}>
          La clave es adaptar la actividad al aire libre al nivel del día:
        </p>
        <ul style={{ fontSize: '0.93rem', lineHeight: 1.75, paddingLeft: 20, marginBottom: 20 }}>
          <li><strong>ICA 1-2:</strong> Sin restricciones. Ideal para deporte, paseos y actividades al aire libre.</li>
          <li><strong>ICA 3:</strong> El grupo de riesgo debe reducir el ejercicio intenso al exterior. El resto, sin problema para actividades ligeras.</li>
          <li><strong>ICA 4:</strong> Toda la población debería limitar el esfuerzo físico intenso al aire libre. Grupo de riesgo: permanecer en interiores.</li>
          <li><strong>ICA 5:</strong> Emergencia. Toda la población, especialmente el grupo de riesgo, debería quedarse en interiores con las ventanas cerradas.</li>
        </ul>
        <p style={pStyle}>
          Si tienes que salir en un día con ICA 4 o 5, una mascarilla FFP2/N95 puede reducir significativamente
          la inhalación de PM2.5. Las mascarillas quirúrgicas o de tela filtran poco las partículas finas.
        </p>

        <h2 style={h2Style}>¿Por qué varía la calidad del aire durante el día?</h2>
        <p style={pStyle}>
          La contaminación no es constante. Los picos de tráfico de la mañana y el atardecer disparan NO₂ y PM.
          El ozono, en cambio, alcanza su máximo a media tarde, cuando la luz solar lleva horas reaccionando con
          los precursores. En días con poco viento o inversión térmica (una capa de aire caliente que bloquea la
          ventilación vertical), todos los contaminantes se acumulan a nivel del suelo. Los días lluviosos y
          ventosos "limpian" el aire de forma natural.
        </p>

        <h2 style={h2Style}>Preguntas frecuentes sobre la calidad del aire</h2>
        <div style={{ marginBottom: 28 }}>
          {faqItems.map(({ question, answer }, i) => (
            <details key={i} style={{ marginBottom: 10, padding: '10px 14px', background: 'var(--color-surface)', borderRadius: 8, border: '1px solid var(--color-border)', fontSize: '0.9rem' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 600 }}>{question}</summary>
              <p style={{ margin: '8px 0 0', paddingLeft: 8, lineHeight: 1.7 }}>{answer}</p>
            </details>
          ))}
        </div>

        <p style={{ ...pStyle, marginBottom: 32 }}>
          Consulta la calidad del aire en tiempo real en la{' '}
          <Link href="/" style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none' }}>página principal</Link>{' '}
          o en cualquier{' '}
          <Link href="/clima" style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none' }}>ciudad del directorio</Link>.
          También puedes revisar las{' '}
          <Link href="/guias" style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none' }}>guías de clima</Link>{' '}
          y el{' '}
          <Link href="/glosario" style={{ color: 'var(--color-primary, #1a73e8)', textDecoration: 'none' }}>glosario meteorológico</Link>.
        </p>
      </div>
      <Footer />
    </>
  );
}
