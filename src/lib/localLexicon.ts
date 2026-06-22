// Vocabulario a interpolar en las plantillas del consejo según país + idioma.
// El léxico varía sobre todo en español (paraguas/sombrilla, abrigo/chaqueta/chamarra/campera,
// conducir/manejar, etc.). Para AR usa formas voseo en los verbos imperativos.
// Para el resto de idiomas se usa el vocabulario por defecto del idioma.

function spanishLexicon(country: string): Record<string, string> {
  let vocab: Record<string, string>;
  switch (country) {
    case 'ES':
      vocab = { umbrella: 'paraguas', jacket: 'un abrigo', drive: 'conducir', car: 'coche', sunscreen: 'crema solar' };
      break;
    case 'CO':
      vocab = { umbrella: 'sombrilla', jacket: 'una chaqueta', drive: 'manejar', car: 'carro', sunscreen: 'bloqueador' };
      break;
    case 'MX':
      vocab = { umbrella: 'paraguas', jacket: 'una chamarra', drive: 'manejar', car: 'carro', sunscreen: 'bloqueador' };
      break;
    case 'AR':
      vocab = { umbrella: 'paraguas', jacket: 'una campera', drive: 'manejar', car: 'auto', sunscreen: 'protector solar' };
      break;
    default:
      vocab = { umbrella: 'paraguas', jacket: 'un abrigo', drive: 'manejar', car: 'auto', sunscreen: 'protector solar' };
  }

  const verbs = country === 'AR'
    ? { take: 'llevá', use: 'usá', hydrate: 'hidratate', beCareful: 'extremá la precaución', bundleUp: 'abrigate', avoid: 'evitá' }
    : { take: 'lleva', use: 'usa', hydrate: 'hidrátate', beCareful: 'extrema la precaución', bundleUp: 'abrígate', avoid: 'evita' };

  return { ...vocab, ...verbs };
}

export function getLexicon(language: string, country: string): Record<string, string> {
  switch (language) {
    case 'es':
      return spanishLexicon(country);
    case 'pt':
      return { umbrella: 'guarda-chuva', jacket: 'casaco', drive: 'dirigir', car: 'carro', sunscreen: 'protetor solar' };
    case 'fr':
      return { umbrella: 'parapluie', jacket: 'veste', drive: 'conduire', car: 'voiture', sunscreen: 'crème solaire' };
    case 'de':
      return { umbrella: 'Schirm', jacket: 'Jacke', drive: 'fahren', car: 'Auto', sunscreen: 'Sonnencreme' };
    case 'it':
      return { umbrella: 'ombrello', jacket: 'giacca', drive: 'guidare', car: 'auto', sunscreen: 'crema solare' };
    case 'en':
    default:
      return { umbrella: 'umbrella', jacket: 'jacket', drive: 'drive', car: 'car', sunscreen: 'sunscreen' };
  }
}
