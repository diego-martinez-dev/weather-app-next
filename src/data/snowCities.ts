export const snowCities = new Set<string>([
  // Cono Sur / Andes
  'bariloche', 'ushuaia', 'san-martin-de-los-andes', 'villa-la-angostura', 'esquel',
  'el-bolson', 'el-calafate', 'farellones', 'coyhaique', 'punta-arenas',
  // EE.UU.
  'new-york', 'chicago', 'denver', 'boston', 'minneapolis', 'buffalo',
]);

export function isSnowCity(slug: string): boolean {
  return snowCities.has(slug);
}

export const snowDestinations = [
  {
    region: 'Argentina',
    cities: [
      { slug: 'bariloche', name: 'Bariloche' },
      { slug: 'ushuaia', name: 'Ushuaia' },
      { slug: 'san-martin-de-los-andes', name: 'San Martín de los Andes' },
      { slug: 'villa-la-angostura', name: 'Villa La Angostura' },
      { slug: 'esquel', name: 'Esquel' },
      { slug: 'el-bolson', name: 'El Bolsón' },
      { slug: 'el-calafate', name: 'El Calafate' },
    ],
  },
  {
    region: 'Chile',
    cities: [
      { slug: 'farellones', name: 'Farellones' },
      { slug: 'coyhaique', name: 'Coyhaique' },
      { slug: 'punta-arenas', name: 'Punta Arenas' },
    ],
  },
  {
    region: 'Estados Unidos',
    cities: [
      { slug: 'new-york', name: 'Nueva York' },
      { slug: 'chicago', name: 'Chicago' },
      { slug: 'denver', name: 'Denver' },
      { slug: 'boston', name: 'Boston' },
      { slug: 'minneapolis', name: 'Minneapolis' },
      { slug: 'buffalo', name: 'Buffalo' },
    ],
  },
];
