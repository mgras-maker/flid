// Project cards data for the homepage grid display
export interface ProjectCardData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  aspectRatio?: string; // Optional aspect ratio - will adjust the container's aspect ratio
}

export const projectCardsData: ProjectCardData[] = [  {
    id: 1,
    title: 'Beata Przybytek',
    description: 'Odkryj świat muzyczny wybitnej artystki jazzu - Beaty Przybytek, której nowy album "Today Girls Don\'t Cry" to fascynująca mozaika muzycznych stylistyk i emocji.',
    imageUrl: './projects/beata-przybytek/beata-przybytek.jpg',
    link: '/projects/beata-przybytek',
    aspectRatio: '3/4' // Portrait orientation
  },
  {
    id: 2,
    title: 'Energia Jutra',
    description: 'A grassroots initiative transforming how communities access, understand, and benefit from renewable energy through design innovation and education.',
    imageUrl: './projects/energia-jutra.jpg',
    link: '/projects/energia-jutra',
    aspectRatio: '4/3' // Custom aspect ratio
  },  {
    id: 3,
    title: 'Sustainable Packaging',
    description: 'Developing innovative biodegradable packaging solutions to reduce environmental impact in consumer goods while maintaining functionality and aesthetic appeal.',
    imageUrl: './projects/eco-packaging.jpg',
    link: '/projects/eco-packaging',
    aspectRatio: '3/4' // Portrait orientation
  },
  {
    id: 4,
    title: 'Lotnisko-wiec Festival',
    description: 'A groundbreaking festival that reclaimed an abandoned airport as a vibrant space for art, music, and sustainable community engagement.',
    imageUrl: './projects/lotnisko-wiec.jpg',
    link: '/projects/lotnisko-wiec',
    aspectRatio: '16/9' // Landscape orientation
  },  {
    id: 5,
    title: 'Beskidzka Bench',
    description: 'An innovative urban furniture design that enhances public spaces and promotes community interaction.',
    imageUrl: './projects/urban-sustainability.jpg',
    link: '/projects/beskidzka-bench',
    aspectRatio: '1/1' // Square aspect ratio
  },  {
    id: 6,
    title: 'BB__Design Lab',
    description: 'A collaborative design laboratory focused on experimental materials and production methods.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/projects/bb-design-lab',
    aspectRatio: '3/2' // Common photography aspect ratio
  },
  {
    id: 7,
    title: 'House of Creative Work',
    description: 'A multifunctional space designed to inspire creativity and facilitate artistic collaboration.',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/projects/house-of-creative-work',
    aspectRatio: '2/3' // Portrait orientation
  },
  {
    id: 8,
    title: 'Energy of Tomorrow',
    description: 'A forward-looking project exploring sustainable energy solutions for urban environments.',
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/projects/energy-of-tomorrow',
    aspectRatio: '16/9' // Landscape orientation
  },
  {
    id: 9,
    title: 'D-Spot Design Portal',
    description: 'An online platform connecting designers, clients, and resources for collaborative innovation.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/projects/d-spot-design-portal',
    aspectRatio: '16/9'
  },  {
    id: 10,
    title: 'Artistic Shack on the Shaft',
    description: 'A repurposed industrial structure transformed into an artistic hub for community engagement.',
    imageUrl: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/projects/artistic-shack-on-the-shaft',
    aspectRatio: '4/3'
  },
  {
    id: 11,
    title: 'Design Bank',
    description: 'A repository of design methodologies and case studies for educational and professional use.',
    imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    link: '/projects/design-bank',
    aspectRatio: '4/3'
  }
];
