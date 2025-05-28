import { getImagePath } from '../utils/paths.js';

const publicationsData = [
  {
    id: 1,
    title: 'Beata Przybytek',
    slug: 'beata-przybytek',
    type: 'Płyta winylowa',
    year: 2021,
    coverImage: getImagePath('publications/beata-przybytek/cover.jpg'), // Placeholder path
    shortDesc: 'Kolekcjonerskie wydanie płyty winylowej z muzyką jazzową',
    fullDesc: `Kolekcjonerskie wydanie płyty winylowej Beaty Przybytek, utrzymane w estetyce
    nawiązującej do klasycznych wydań jazzowych z lat 60. Projekt obejmował opracowanie
    całościowej identyfikacji wizualnej, w tym okładki, etykiet, kopert wewnętrznych oraz
    materiałów promocyjnych. Wydanie zostało wzbogacone o unikalne ilustracje i wysokiej
    jakości druk na ekskluzywnym papierze.`,    images: [
      getImagePath('publications/beata-przybytek/image1.jpg'), // Placeholder paths
      getImagePath('publications/beata-przybytek/image2.jpg'),
    ],
    format: '12" winyl, 180g',
    publisher: 'FLID Records',
    links: [
      { name: 'Strona artystki', url: '#' },
      { name: 'Sklep online', url: '#' },
    ],
  },
  {
    id: 2,
    title: 'Komisarz Orłowska',
    slug: 'komisarz-orlowska',
    type: 'Seria książek',
    year: 2020,
    coverImage: getImagePath('publications/komisarz-orlowska/cover.jpg'), // Placeholder path
    shortDesc: 'Seria kryminałów o komisarz Orłowskiej z charakterystyczną identyfikacją wizualną',
    fullDesc: `Seria kryminałów o komisarz Orłowskiej to projekt wydawniczy obejmujący
    kompleksowe opracowanie identyfikacji wizualnej dla cyklu książek kryminalnych.
    Projekt zakładał stworzenie spójnego, rozpoznawalnego stylu graficznego dla całej
    serii, z jednoczesnym podkreśleniem unikalnego charakteru każdego tomu. Opracowanie
    objęło projekt okładek, wybór typografii, układ tekstu oraz materiały promocyjne.`,    images: [
      getImagePath('publications/komisarz-orlowska/image1.jpg'), // Placeholder paths
      getImagePath('publications/komisarz-orlowska/image2.jpg'),
      getImagePath('publications/komisarz-orlowska/image3.jpg'),
    ],
    format: 'Oprawa twarda, 145x205 mm',
    publisher: 'Wydawnictwo Literackie',
    links: [
      { name: 'Strona serii', url: '#' },
      { name: 'Sklep wydawnictwa', url: '#' },
    ],
  },
  {
    id: 3,
    title: 'Historia fotografii światowej',
    slug: 'historia-fotografii-swiatowej',
    type: 'Książka',
    year: 2022,
    coverImage: getImagePath('publications/historia-fotografii/cover.jpg'), // Placeholder path
    shortDesc: 'Bogato ilustrowana publikacja o historii fotografii',
    fullDesc: `"Historia fotografii światowej" to obszerna, bogato ilustrowana publikacja
    przedstawiająca rozwój sztuki fotograficznej od jej początków po czasy współczesne.
    Projekt obejmował opracowanie koncepcji edytorskiej, dobór materiałów wizualnych,
    projekt layoutu oraz opracowanie typograficzne. Szczególny nacisk położono na
    wysoką jakość reprodukcji fotografii historycznych oraz nowoczesne, czytelne
    przedstawienie złożonych treści.`,    images: [
      getImagePath('publications/historia-fotografii/image1.jpg'), // Placeholder paths
      getImagePath('publications/historia-fotografii/image2.jpg'),
    ],
    format: 'Oprawa twarda, 220x280 mm, 456 stron',
    publisher: 'FLID Publishing',
    links: [
      { name: 'Strona książki', url: '#' },
      { name: 'Księgarnia internetowa', url: '#' },
    ],
  },
];

export default publicationsData;
