// Project data centralized in one place to avoid circular imports
// This file contains all project data used throughout the application

// Type definitions for project data
export interface ProjectPhase {
  phase: string;
  description: string;
  outcome: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  title: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  client: string;
  duration: string;
  year: string;
  location: string;
  categories: string[];
  coverImage: string;
  gallery: string[];
  galleryCaptions?: string[];  // Optional array of captions for gallery images
  challenge: string;
  approach: ProjectPhase[];
  results: string[];
  testimonial: ProjectTestimonial;
  nextProjects: string[];
}

// TypeScript index signature to allow string indexing
export interface ProjectsData {
  [key: string]: Project;
}

// Central project data store
const projectsData: ProjectsData = {
  'beata-przybytek': {
    title: 'Beata Przybytek',
    subtitle: 'Artystka Dźwięków, Barw i Emocji',
    description: 'Odkryj świat muzyczny wybitnej artystki jazzu - Beaty Przybytek, której nowy album "Today Girls Don\'t Cry" to fascynująca mozaika muzycznych stylistyk i emocji.',
    client: 'Beata Przybytek',
    duration: 'Ongoing collaboration',
    year: '2025',
    location: 'Poland',
    categories: ['Music', 'Jazz', 'Culture'],
    coverImage: './projects/beata-przybytek/beata-przybytek.jpg',    gallery: [
      './projects/beata-przybytek/gallery-1.jpg',
      './projects/beata-przybytek/gallery-2.jpg',
      './projects/beata-przybytek/gallery-3.jpg',
      './projects/beata-przybytek/gallery-4.jpg',
      './projects/beata-przybytek/gallery-5.jpg',
      './projects/beata-przybytek/gallery-6.jpg',
      './projects/beata-przybytek/gallery-7.jpg',
    ],
    galleryCaptions: [
      'Beata Przybytek podczas występu na Jazz Festival 2024',
      'Moment z sesji nagraniowej albumu "Today Girls Don\'t Cry"',
      'Wieczór promocyjny nowego albumu',
      'Beata przy fortepianie - sesja zdjęciowa',
      'Fragment koncertu w Filharmonii Narodowej',
      'Okładka albumu "Today Girls Don\'t Cry"',
      'Beata Przybytek z zespołem podczas trasy koncertowej',
    ],
    galleryCaptions: [
      'Beata Przybytek podczas występu na Jazz Festival 2024',
      'Moment z sesji nagraniowej albumu "Today Girls Don\'t Cry"',
      'Wieczór promocyjny nowego albumu',
      'Beata przy fortepianie - sesja zdjęciowa',
      'Fragment koncertu w Filharmonii Narodowej',
      'Okładka albumu "Today Girls Don\'t Cry"',
      'Beata Przybytek z zespołem podczas trasy koncertowej',
    ],
    challenge: 'Prezentacja nowego albumu "Today Girls Don\'t Cry" artystki, której wszechstronny talent obejmuje wirtuozerską grę na fortepianie, przejmujący wokal oraz głęboką wrażliwość kompozytorską.',
    approach: [
      {
        phase: 'Koncepcja',
        description: 'Stworzyliśmy kompleksową strategię promocji dla najnowszego albumu "Today Girls Don\'t Cry", uwzględniającą unikalne brzmienie artystki i jej artystyczną dojrzałość.',
        outcome: 'Plan działań promocyjnych podkreślających wyjątkowość albumu jako mozaiki dziesięciu misternie utkanych kompozycji.'
      },
      {
        phase: 'Realizacja',
        description: 'Przygotowaliśmy kampanię łączącą tradycyjne i cyfrowe kanały promocji, z naciskiem na wartość analogowego brzmienia poprzez wydanie płyty winylowej.',
        outcome: 'Kompleksowa prezentacja artystki i jej twórczości, z akcentem na autorski charakter kompozycji i różnorodność stylistyk.'
      },
      {
        phase: 'Dystrybucja',
        description: 'Opracowaliśmy strategię dystrybucji albumu, zarówno w formie cyfrowej jak i analogowej, zapewniając dostępność dla różnych grup odbiorców.',
        outcome: 'Skuteczne dotarcie do miłośników jazzu i pokrewnych gatunków muzycznych, zarówno wśród tradycyjnych słuchaczy jak i młodszych odbiorców.'
      }
    ],    results: [
      'Prezentacja pełni talentu artystki: od wirtuozerii fortepianowej po przejmujący wokal',
      'Promocja albumu "Today Girls Don\'t Cry" jako dzieła w pełni autorskiego',
      'Ukazanie różnorodności stylistycznej: od bluesa, przez jazz, soul, R\'n\'B i funky, po brzmienia latynoskie i gospel',
      'Przybliżenie bogatej dyskografii artystki, w tym albumów "I\'m Gonna Rock You", "Wonderland", "The Island" i innych',
      'Stworzenie unikalnych pamiątek dla fanów, w tym plakatów z osobistą dedykacją artystki'
    ],
    testimonial: {
      quote: "Głos to doprawdy niezwykły. Niski i mocny, ekspresyjny, o nieco chropawej, \"czarnej\" barwie. Szerokim zakresem naturalnych dyspozycji wokalnych Beata Przybytek operuje w sposób różnorodny i przemyślany. Efektem jest jazzowy śpiew najwyższej próby.",
      author: 'Adam Poprawa',
      title: 'Tygodnik Powszechny'
    },
    nextProjects: ['energia-jutra-en', 'lotnisko-wiec', 'eco-packaging']
  },
  'energia-jutra-en': {
    title: 'Energią Jutra',
    subtitle: 'Renewable energy community initiative',
    description: 'A grassroots initiative transforming how communities access, understand, and benefit from renewable energy through design innovation and education.',
    client: 'Community Energy Coalition',
    duration: '24 months',
    year: '2024-2025',
    location: 'Kraków, Poland',    categories: ['Sustainability', 'Innovation', 'Social Impact'],
    coverImage: './projects/energia-jutra.jpg',
    gallery: [
      './projects/energia-jutra/gallery-1.jpg',
      './projects/energia-jutra/gallery-2.jpg',
      './projects/energia-jutra/gallery-3.jpg',
    ],
    challenge: 'The Community Energy Coalition sought to address the growing energy crisis by making renewable energy solutions more accessible and understandable to ordinary citizens. Despite technological advances, adoption remained low due to complexity, cost perceptions, and lack of community engagement models.',
    approach: [
      {
        phase: 'Empathy',
        description: 'We conducted extensive community research through workshops, home visits, and energy usage monitoring to understand barriers to renewable energy adoption across different socioeconomic groups.',
        outcome: 'Identified key barriers including financial concerns, technical complexity, and lack of community ownership models.'
      },
      {
        phase: 'Reasoning',
        description: 'Analysis of community feedback alongside technical renewable energy data to develop community-centered solutions that prioritize accessibility, education, and shared ownership.',
        outcome: 'Created a framework for community solar projects that combines innovative financing models with intuitive user interfaces and education programs.'
      },
      {
        phase: 'Materialization',
        description: 'Developed modular community solar installation designs alongside digital platforms for monitoring and education, with community workshops for participatory implementation.',
        outcome: 'Created complete solution packages including physical solar installations, mobile monitoring applications, and community engagement toolkits.'
      }
    ],
    results: [
      'Installation of 5 community solar projects serving over 500 households',
      'Development of educational platform reaching 2,000+ community members',
      '35% increase in renewable energy literacy in target communities',
      'Creation of cooperative ownership model reducing costs by 40% for participants',
      'Establishment of youth renewable energy ambassador program with 50 graduates'
    ],    testimonial: {
      quote: "FLID Foundation's approach to renewable energy transformed our communities' relationship with power generation. By making solar not just accessible but a source of community pride and ownership, they've created something far more sustainable than just the energy itself.",
      author: 'Anna Nowak',
      title: 'Director, Community Energy Coalition'
    },
    nextProjects: ['lotnisko-wiec', 'eco-packaging', 'urban-sustainability']
  },
  'lotnisko-wiec': {
    title: 'Lotnisko-wiec Festival',
    subtitle: 'Transforming abandoned spaces into cultural hubs',
    description: 'A groundbreaking festival that reclaimed an abandoned airport as a vibrant space for art, music, and sustainable community engagement, creating a blueprint for adaptive reuse of industrial spaces.',
    client: 'Artistic Spaces Foundation',
    duration: '8 months',
    year: '2023-2024',
    location: 'Gdańsk, Poland',
    categories: ['Urban Design', 'Cultural Events', 'Adaptive Reuse'],
    coverImage: './projects/lotnisko-wiec.jpg',
    gallery: [
      './projects/lotnisko-wiec/gallery-1.jpg',
      './projects/lotnisko-wiec/gallery-2.jpg',
      './projects/lotnisko-wiec/gallery-3.jpg',
    ],
    challenge: 'The Artistic Spaces Foundation sought to address both urban blight and lack of cultural spaces by temporarily transforming an abandoned airport into a vibrant festival space. The challenge included creating a safe, accessible cultural venue while respecting the industrial heritage and demonstrating sustainable event design principles.',
    approach: [
      {
        phase: 'Empathy',
        description: 'We engaged with local communities, artists, and urban planners through participatory workshops and site visits to understand both the potential and limitations of the abandoned airport space.',
        outcome: 'Created a multilayered understanding of community cultural needs, site challenges, and opportunities for sustainable event design.'
      },
      {
        phase: 'Reasoning',
        description: 'Analyzed site constraints, community input, and sustainable event benchmarks to develop a comprehensive festival concept that balanced accessibility, artistic expression, and environmental impact.',
        outcome: 'Developed a festival blueprint incorporating modular spaces, renewable energy solutions, and programming that highlighted the site\'s industrial heritage.'
      },
      {
        phase: 'Materialization',
        description: 'Transformed the abandoned airport using modular, reusable structures, solar-powered lighting and sound systems, and wayfinding that illuminated the site\'s history while ensuring safety.',
        outcome: 'Created a temporary but immersive cultural space that served multiple artistic disciplines while demonstrating principles of adaptive reuse and sustainable event design.'
      }
    ],
    results: [
      'Transformation of 15,000m² of abandoned space into cultural venues',
      'Attendance of over 25,000 visitors across 5 festival days',
      'Implementation of zero-waste principles with 85% waste diversion rate',
      'Platform for 120+ artists and performers from diverse backgrounds',
      'Development of a blueprint for adaptive reuse that has been adopted by three other municipalities'
    ],
    testimonial: {
      quote: "What FLID created wasn't just a festival but a living laboratory for how abandoned spaces can be reimagined. Their thoughtful approach to design honored the airport's history while creating something entirely new—a magical balance that our attendees felt from the moment they arrived.",
      author: 'Marek Kowalski',
      title: 'Creative Director, Artistic Spaces Foundation'
    },    nextProjects: ['energia-jutra-en', 'community-garden']
  },
  
  'eco-packaging': {
    title: 'Sustainable Packaging',
    subtitle: 'Biodegradable solutions for consumer goods',
    description: 'Developing innovative biodegradable packaging solutions to reduce environmental impact in consumer goods while maintaining functionality and aesthetic appeal.',
    client: 'EcoRetail Consortium',
    duration: '18 months',
    year: '2023-2024',
    location: 'Warsaw, Poland',
    categories: ['Product Design', 'Sustainability', 'Innovation'],
    coverImage: './projects/eco-packaging.jpg',
    gallery: [
      './projects/eco-packaging/gallery-1.jpg',
      './projects/eco-packaging/gallery-2.jpg',
      './projects/eco-packaging/gallery-3.jpg',
    ],
    challenge: 'The EcoRetail Consortium needed to address growing consumer and regulatory demand for sustainable packaging solutions that didn\'t compromise on product protection, shelf appeal, or user experience. Traditional plastic packaging was creating significant environmental issues, while existing eco-alternatives often failed on performance or aesthetics.',
    approach: [
      {
        phase: 'Empathy',
        description: 'We conducted comprehensive user research with consumers, retailers, and sustainability experts to understand pain points with current packaging solutions and identify opportunities for innovation.',
        outcome: 'Created a detailed map of user needs and environmental impact factors that informed our design priorities.'
      },
      {
        phase: 'Reasoning',
        description: 'Analyzed materials science research alongside user insights to identify promising biodegradable materials that could meet both functional and aesthetic requirements.',
        outcome: 'Developed a material selection framework that balanced performance characteristics with environmental impact across the full lifecycle.'
      },
      {
        phase: 'Materialization',
        description: 'Prototyped multiple packaging solutions using seaweed-based polymers, mycelium structures, and agricultural waste composites through an iterative design process.',
        outcome: 'Created a family of packaging solutions for different product categories that meet sustainability goals while enhancing the user experience.'
      }
    ],
    results: [
      'Development of a packaging system that decomposes fully within 180 days',
      'Reduction in carbon footprint by 65% compared to conventional packaging',
      'Implementation across 3 major product lines with 200,000+ units in market',
      'Creation of visually distinctive aesthetic that enhances brand recognition',
      'Patent-pending material composite technology with potential applications beyond packaging'
    ],
    testimonial: {
      quote: "FLID's sustainable packaging designs didn't force us to choose between environmental responsibility and market appeal. Their innovative approach actually enhanced our product experience while dramatically reducing our environmental footprint—a win-win we didn't think was possible.",
      author: 'Julia Kowalczyk',
      title: 'Sustainability Director, EcoRetail Consortium'
    },
    nextProjects: ['urban-sustainability', 'community-garden']
  }
};

// Utility functions for working with project data
export const getProjectById = (id: string): Project | null => {
  if (projectsData[id]) {
    return projectsData[id];
  }
  
  // Special case handling
  if (id === 'energia-jutra') {
    return projectsData['energia-jutra-en'];
  }
  
  // Handle aliases for sustainable packaging project
  if (id === 'sustainable-packaging') {
    return projectsData['eco-packaging'];
  }
  
  // Special case for energia-jutra-en to ensure energia-jutra works too
  if (id === 'energia-jutra' && projectsData['energia-jutra-en']) {
    return projectsData['energia-jutra-en'];
  }
  
  // Fuzzy matching for known projects
  if (id && id.includes('energia')) {
    return projectsData['energia-jutra-en'];
  }
  
  if (id && id.includes('lotnisko')) {
    return projectsData['lotnisko-wiec'];
  }
  
  if (id && (id.includes('packaging') || id.includes('sustain'))) {
    return projectsData['eco-packaging'];
  }
  
  return null;
};

export default projectsData;
