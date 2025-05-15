import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/layout/Layout.tsx';
import { useTheme } from '../contexts/ThemeHooks.tsx';
import useScrollAnimation from '../hooks/useScrollAnimation.ts';

// BeataPrzybytkPage component

const BeataPrzybytkPage = () => {  
  const { isDarkMode } = useTheme();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);  
  const videoRef = useRef<HTMLVideoElement>(null);
    // Set up section IDs for scroll animations
  // Using useScrollAnimation but not storing the result since we're using framer-motion
  // for animations based on scroll position
  useScrollAnimation('section-overview');
  useScrollAnimation('section-gallery');
  useScrollAnimation('section-results');
  
  // Handle video errors
  useEffect(() => {
    const videoElement = videoRef.current;
    
    if (videoElement) {
      // Handle any errors
      const handleError = () => {
        console.error('Video playback error');
      };
      
      // Add event listeners
      videoElement.addEventListener('error', handleError);
      
      // Cleanup event listeners
      return () => {
        videoElement.removeEventListener('error', handleError);
      };
    }
  }, []);
  
  // Project data specific to Beata Przybytek
  const project = {
    title: 'Beata Przybytek',
    subtitle: 'Artystka Dźwięków, Barw i Emocji',
    description: 'Odkryj świat muzyczny wybitnej artystki jazzu - Beaty Przybytek, której nowy album "Today Girls Don\'t Cry" to fascynująca mozaika muzycznych stylistyk i emocji.',
    client: 'Beata Przybytek',
    duration: 'Ongoing collaboration',
    year: '2025',
    location: 'Poland',
    categories: ['Music', 'Jazz', 'Culture'],
    coverImage: './projects/beata-przybytek/beata-przybytek.jpg',
    gallery: [
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
    ],
    results: [
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
  };
  
  // Function to handle lightbox open/close
  const toggleLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(!lightboxOpen);
  };
  
  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      
      switch (e.key) {
        case 'Escape':
          setLightboxOpen(false);
          break;
        case 'ArrowRight':
          setActiveImageIndex((activeImageIndex + 1) % project.gallery.length);
          break;
        case 'ArrowLeft':
          setActiveImageIndex((activeImageIndex - 1 + project.gallery.length) % project.gallery.length);
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, activeImageIndex, project.gallery.length]);
  
  // This will fix the activeImageIndex warning by ensuring it's used
  useEffect(() => {
    if (activeImageIndex >= project.gallery.length) {
      setActiveImageIndex(0);
    }  
  }, [project.gallery.length, activeImageIndex]);
  
  return (
    <Layout>
      {/* Enhanced Hero Section with Deep Parallax Animation */}
      <div className="relative pt-20 pb-32 bg-flid-dark overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Reduced overlay opacity for more vibrant image */}
          <div className="absolute inset-0 bg-gradient-to-r from-flid-dark/50 to-flid-dark/30 backdrop-blur-[1px] z-10"></div>
          
          {/* Enhanced parallax effect with deeper movement */}
          <motion.div 
            className="w-full h-full"
            style={{
              backgroundImage: `url(${project.coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'saturate(1.5) contrast(1.2) brightness(1.1)'  /* Enhanced color vibrancy */
            }}
            animate={{ 
              y: [0, -40, 0],
              scale: [1, 1.08, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 30,
              ease: "easeInOut"
            }}
          ></motion.div>
        </motion.div>

        <div className="container-wide relative z-20 mt-16">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="flex flex-wrap gap-2 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {project.categories.map((category, index) => (
                <motion.span 
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="text-sm bg-flid-accent/70 dark:bg-flid-accent-light/70 text-white px-3 py-1 rounded-full font-light"
                >
                  {category}
                </motion.span>
              ))}
            </motion.div>              
            <motion.h1 
              className="text-5xl md:text-6xl font-semibold text-white/90 mb-5 font-display tracking-wide leading-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {project.title}
            </motion.h1>
            <motion.p 
              className="text-2xl text-white/85 mb-8 font-normal tracking-wider leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {project.subtitle}
            </motion.p>
            <motion.p 
              className="text-xl text-white/80 max-w-2xl font-normal leading-relaxed tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {project.description}
            </motion.p>

            {/* Call to action */}
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.button 
                className="px-6 py-3 bg-flid-accent hover:bg-flid-accent-dark text-white rounded-full font-medium flex items-center gap-2 group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('section-overview')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Poznaj artystkę</span>
                <motion.span 
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Project Content */}
      <div className={isDarkMode ? 'bg-flid-dark/90' : 'bg-flid-light'}>
        <div className="container-wide py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">              
              {/* Project Overview Section */}
              <section id="section-overview" className="mb-20">                
                <motion.div 
                  className="flex items-center mb-10 pb-3 border-b border-flid-accent/40 dark:border-flid-accent-dark/40"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="mr-4 text-flid-accent dark:text-flid-accent-light">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-semibold tracking-wide leading-tight">
                    Beata Przybytek – Artystka Dźwięków, Barw i Emocji
                  </h2>
                </motion.div>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="font-normal text-base leading-relaxed tracking-wide">
                    Witajcie w uniwersum muzycznym Beaty Przybytek – wybitnej artystki, której wszechstronny 
                    talent obejmuje wirtuozerką grę na fortepianie, przejmujący wokal oraz głęboką wrażliwość 
                    kompozytorską. To twórczyni, która z gracją porusza się w szerokim spektrum jazzu i gatunków 
                    pokrewnych, nieustannie poszukując nowych środków wyrazu. Adam Poprawa, na łamach „Tygodnika 
                    Powszechnego", z niezwykłą trafnością uchwycił esencję jej sztuki: „Głos to doprawdy niezwykły. 
                    Niski i mocny, ekspresyjny, o nieco chropawej, „czarnej" barwie. Szerokim zakresem naturalnych 
                    dyspozycji wokalnych Beata Przybytek operuje w sposób różnorodny i przemyślany. Efektem jest 
                    jazzowy śpiew najwyższej próby." Słowa te stanowią doskonałe preludium do podróży, jaką oferuje jej muzyka.
                  </p>
                </div>                
                <h3 className="text-2xl font-semibold mt-16 mb-8 tracking-wide leading-tight relative">
                  <span className="relative z-10">Apogeum Twórczej Dojrzałości: „Today Girls Don't Cry"</span>
                  <span className="absolute -bottom-3 left-0 h-[2px] w-16 bg-flid-accent/50 dark:bg-flid-accent-light/50"></span>
                </h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="font-normal text-base leading-relaxed tracking-wide">
                    Po triumfie albumu „I'm Gonna Rock You", uhonorowanego prestiżowym „Mateuszem Trójki 2013" – 
                    nagrodą stanowiącą świadectwo uznania zarówno krytyków, jak i słuchaczy – Beata Przybytek 
                    prezentuje swoje najnowsze, w pełni autorskie dzieło: „Today Girls Don't Cry". Ta starannie 
                    przygotowana propozycja, dostępna również w szlachetnej formie płyty winylowej dla koneserów 
                    analogowego brzmienia, jest niczym muzyczna mozaika, składająca się z dziesięciu misternie 
                    utkanych kompozycji. Każda z nich to odrębny świat, zapraszający słuchacza w ekscytującą 
                    peregrynację przez bogactwo stylistyk: od surowej ekspresji bluesa, przez improwizacyjną 
                    swobodę jazzu, ciepło soulu i energię R'n'B oraz funky, aż po korzenne brzmienia muzyki 
                    latynoskiej i uduchowioną moc gospel.
                  </p>
                  <p>
                    Beata Przybytek, jako autorka wszystkich kompozycji na płycie, po raz kolejny dowodzi swojej 
                    kompozytorskiej maestrii. Warstwę liryczną współtworzą znakomici autorzy: Alicja Maciejowska, 
                    Grzegorz Wasowski oraz Dariusz Dusza, których słowa kongenialnie dopełniają muzyczną narrację. 
                    Album wieńczy subtelny bonus – piosenka „Dotyku Motyl", owoc współpracy Jakuba Chmielarskiego 
                    (muzyka) i Andrzeja Poniedzielskiego (tekst), dodając całości jeszcze jeden, nieoczekiwany odcień. 
                    Niezwykle istotną rolę w finalnym kształcie „Today Girls Don't Cry" odegrał Tomasz Kałwak – 
                    ceniony producent muzyczny i aranżer, którego artystyczna wizja i doświadczenie, zdobyte przy 
                    współpracy z takimi luminarzami polskiej sceny jak Dorota Miśkiewicz, Mietek Szcześniak, 
                    Natalia Niemen, Marek Napiórkowski, Kasia Cerekwicka czy Grażyna Auguścik, stały się gwarancją 
                    najwyższej jakości brzmienia i spójności artystycznej projektu.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold mt-12 mb-6">
                  Zaproszenie do Odkrycia Pełnej Palety Barw Artystki
                </h3>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p>
                    Nasza witryna to nie tylko brama do najnowszego wydawnictwa, ale również zaproszenie do 
                    głębszego poznania bogatej dyskografii Beaty Przybytek, która konsekwentnie buduje swoją 
                    artystyczną tożsamość:
                  </p>
                  <ul>
                    <li>„I'm Gonna Rock You": Album-kamień milowy, który ugruntował pozycję artystki i przyniósł jej zasłużone laury.</li>
                    <li>„Wonderland": Podróż w krainę autorskich wizji, gdzie jazz flirtuje z popową wrażliwością.</li>
                    <li>„The Island": Intymne, pełne liryzmu oblicze twórczości, skłaniające do refleksji.</li>
                    <li>„You don't know what love is": Hołd dla jazzowej tradycji, przefiltrowany przez osobistą wrażliwość i mistrzowskie interpretacje standardów.</li>
                    <li>„Czemuż się dzisiaj weselić nie mamy": Wyjątkowy zbiór kolęd i pieśni bożonarodzeniowych, otulający ciepłem i magią świątecznego nastroju.</li>
                  </ul>
                  <p>
                    Dla tych, którzy pragną zachować namacalny ślad spotkania z muzyką Beaty Przybytek, 
                    przygotowaliśmy również możliwość nabycia plakatu z osobistą dedykacją artystki – 
                    unikalnej pamiątki, która stanie się ozdobą każdej kolekcji.
                  </p>
                  <p>
                    Zachęcamy Państwa do zanurzenia się w dźwiękowym pejzażu, malowanym przez Beatę Przybytek. 
                    To muzyka, która porusza, inspiruje i pozostaje w sercu na długo – prawdziwa uczta dla 
                    koneserów wyrafinowanych brzmień i autentycznych emocji.
                  </p>
                </div>
              </section>              
              {/* Elegant Visual Gallery Composition */}
              <section id="section-gallery" className="mb-32">                <motion.div 
                  className="flex items-center mb-12 pb-2 border-b border-flid-accent/40 dark:border-flid-accent-dark/40"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="mr-4"
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="galleryIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#0ea5e9" />
                          <stop offset="50%" stopColor="#22d3ee" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" fill="url(#galleryIconGradient)" />
                    </svg>
                  </motion.div>                  
                  <h2 className="text-3xl font-semibold tracking-wide">
                    Dorobek artystyczny
                  </h2>
                </motion.div>
                  {/* Masonry gallery starts directly without featured image */}
                {/* Masonry Gallery Layout */}
                <div className="mb-20">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {project.gallery.map((image, index) => (
                      <motion.div 
                        key={index}
                        className={`${
                          // Create masonry effect with different spans
                          index % 5 === 0 ? 'row-span-2 col-span-1 sm:col-span-2 lg:col-span-1' : 
                          index % 3 === 0 ? 'row-span-1 col-span-1' :
                          'row-span-1 col-span-1'
                        } overflow-hidden`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                      >
                        <div 
                          className="relative h-full w-full overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                          onClick={() => toggleLightbox(index)}
                          style={{
                            height: index % 5 === 0 ? '600px' : 
                                   index % 3 === 0 ? '300px' : '400px'
                          }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.7 }}
                            className="h-full w-full overflow-hidden"
                          >
                            <img 
                              src={image} 
                              alt={project.galleryCaptions?.[index] || `${project.title} - zdjęcie ${index + 1}`}
                              className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </motion.div>
                          
                          <div className="absolute bottom-0 left-0 p-5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-white font-medium tracking-wide text-lg">
                              {project.galleryCaptions?.[index] || `${project.title} - zdjęcie ${index + 1}`}
                            </p>
                          </div>
                          
                          {/* Image number indicator */}
                          <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm opacity-70 group-hover:opacity-100 transition-opacity">
                            {index + 1}/{project.gallery.length}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Album Feature Section */}
                <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-flid-dark/5 to-flid-accent/5 p-8 rounded-2xl">
                  <motion.div
                    className="md:w-1/3 mb-6 md:mb-0 md:mr-10"
                    initial={{ opacity: 0, rotateY: 30 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="relative cursor-pointer group" onClick={() => toggleLightbox(5)}>
                      <img 
                        src={project.gallery[5]} 
                        alt="Okładka albumu 'Today Girls Don't Cry'"
                        className="w-full h-auto rounded-lg shadow-2xl"
                      />
                      <motion.div 
                        className="absolute -top-4 -right-4 text-flid-accent dark:text-flid-accent-light"
                        animate={{ 
                          rotate: [0, 10, 0],
                          y: [0, -5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" />
                        </svg>
                      </motion.div>
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                    </div>
                  </motion.div>
                  
                  <div className="md:w-2/3">
                    <motion.h3 
                      className="text-2xl font-semibold mb-3 tracking-wide"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      Album "Today Girls Don't Cry"
                    </motion.h3>
                    <motion.p 
                      className="text-base mb-4 leading-relaxed font-normal"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Najnowsze dzieło artystki to doskonała synteza różnorodnych stylistyk muzycznych, 
                      od jazzu przez soul, R'n'B po elementy muzyki latynoskiej i gospel. Album dostępny jest
                      również w ekskluzywnej wersji winylowej, dla koneserów analogowego brzmienia.
                    </motion.p>
                    
                    <motion.a 
                      href="#section-overview" 
                      className="inline-block mt-2 text-flid-accent dark:text-flid-accent-light font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      Dowiedz się więcej o albumie
                      <span className="ml-1">→</span>
                    </motion.a>
                  </div>
                </div>
                
                {/* Subtle divider with musical notation */}                <div className="my-16 flex justify-center">
                  <motion.div 
                    className="flex items-center"
                    animate={{ 
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-blue-300 to-indigo-400"></div>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        y: [0, -5, 0]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" className="drop-shadow-lg">
                        <defs>
                          <linearGradient id="musicNoteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4dabf7" />
                            <stop offset="50%" stopColor="#748ffc" />
                            <stop offset="100%" stopColor="#9775fa" />
                          </linearGradient>
                        </defs>
                        <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" fill="url(#musicNoteGradient)" />
                      </svg>
                    </motion.div>
                    <div className="h-[1px] w-20 bg-gradient-to-l from-transparent via-blue-300 to-indigo-400"></div>
                  </motion.div>
                </div>
                
                {/* Featured last image - elegant presentation */}
                <motion.div 
                  className="relative cursor-pointer group overflow-hidden rounded-xl"
                  onClick={() => toggleLightbox(6)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                >
                  <motion.img
                    src={project.gallery[6]} 
                    alt={project.galleryCaptions?.[6] || "Z zespołem"}
                    className="w-full h-auto object-cover"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.8 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-10 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <h4 className="text-white text-xl font-medium tracking-wide mb-2">
                      {project.galleryCaptions?.[6] || "Beata Przybytek z zespołem"}
                    </h4>
                    <p className="text-white/80 tracking-wide max-w-xl">
                      Muzyka Beaty Przybytek to dzieło kolektywne, w którym każdy z muzyków ma przestrzeń 
                      na własną ekspresję, tworząc wspólnie unikatowe brzmienie zespołu.                    </p>
                  </div>
                </motion.div>
              </section>
              
              {/* Testimonial Section */}
              <motion.div 
                className="relative p-10 mb-28 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Elegant background */}
                <div className="absolute inset-0 bg-gradient-to-br from-flid-accent/10 via-flid-accent-light/5 to-transparent dark:from-flid-accent-dark/10 dark:via-flid-accent/5 dark:to-transparent rounded-2xl shadow-lg border border-flid-accent/10 dark:border-flid-accent/5 backdrop-blur-sm"></div>
                
                {/* Musical note decorations with refined animation */}
                <div className="absolute top-6 right-6 text-flid-accent/20 dark:text-flid-accent-light/20">
                  <motion.svg 
                    width="50" 
                    height="50" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    initial={{ scale: 0.8, rotate: -10 }}
                    animate={{ 
                      scale: [0.8, 1, 0.8], 
                      rotate: [-10, 0, -10],
                      y: [0, -5, 0]
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" />
                  </motion.svg>
                </div>
                
                <div className="absolute bottom-6 left-6 text-flid-accent/20 dark:text-flid-accent-light/20">
                  <motion.svg 
                    width="40" 
                    height="40" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    initial={{ scale: 0.8, rotate: 10 }}
                    animate={{ 
                      scale: [0.8, 1, 0.8], 
                      rotate: [10, 0, 10],
                      y: [0, 5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z" />
                  </motion.svg>
                </div>
                
                {/* Subtle animated music-themed glow effects */}
                <motion.div 
                  className="absolute top-1/3 right-1/4 w-40 h-40 bg-flid-accent/5 dark:bg-flid-accent-light/5 rounded-full filter blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div 
                  className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-flid-accent-light/5 dark:bg-flid-accent/5 rounded-full filter blur-3xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
                
                {/* Decorative quote symbols */}                <motion.div 
                  className="absolute top-8 left-10"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 0.2 }}
                  transition={{ duration: 1 }}
                >
                  <svg width="80" height="80" viewBox="0 0 24 24" className="drop-shadow-lg">
                    <defs>
                      <linearGradient id="quoteIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fcd34d" />
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="100%" stopColor="#d97706" />
                      </linearGradient>
                    </defs>
                    <path d="M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z" fill="url(#quoteIconGradient)" />
                  </svg>
                </motion.div>
                
                {/* Quote content with refined typography */}
                <div className="relative z-10 max-w-2xl mx-auto">
                  <motion.blockquote 
                    className="text-xl font-normal leading-relaxed tracking-wide mb-6 relative z-10 px-4 pt-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="mb-6">{project.testimonial.quote}</p>
                    
                    <motion.div 
                      className="mt-8 pt-4 border-t border-flid-accent/30 dark:border-flid-accent-light/30 flex items-center gap-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >                      <motion.div 
                        className="h-12 w-12 rounded-full flex items-center justify-center text-white shadow-xl"
                        style={{
                          background: "linear-gradient(135deg, #0ea5e9, #3b82f6)" 
                        }}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 5h-3.2L15 3H9L7.2 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14h-16V7h16v12zM12 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z" />
                        </svg>
                      </motion.div>
                      <div>
                        <motion.p 
                          className="font-semibold text-lg tracking-wide"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          {project.testimonial.author}
                        </motion.p>
                        <motion.p 
                          className="text-sm text-gray-600 dark:text-gray-400 tracking-wide"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                        >
                          {project.testimonial.title}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.blockquote>
                </div>
              </motion.div>

              {/* Results Section */}
              <section id="section-results" className="mb-28">                <motion.div 
                  className="flex items-center mb-10 pb-3 border-b border-flid-accent/40 dark:border-flid-accent-dark/40"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="mr-4"
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="resultsIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#f59f00" />
                          <stop offset="50%" stopColor="#f03e3e" />
                          <stop offset="100%" stopColor="#da77f2" />
                        </linearGradient>
                      </defs>
                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" fill="url(#resultsIconGradient)" />
                    </svg>
                  </motion.div>
                  <h2 className="text-3xl font-semibold tracking-wide leading-tight">
                    Osiągnięcia
                  </h2>
                </motion.div>
                
                <div className="relative">
                  {/* Decorative background element */}
                  <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 opacity-5 hidden lg:block">
                    <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" />
                    </svg>
                  </div>
                  
                  <ul className="space-y-6 mb-10 relative z-10">
                    {project.results.map((result, index) => (
                      <motion.li 
                        key={index} 
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >                        <motion.div 
                          className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center text-white mr-4 mt-1 shadow-xl"
                          style={{
                            background: `linear-gradient(135deg, 
                              hsl(${index * 40}, 95%, 60%), 
                              hsl(${index * 40 + 20}, 95%, 55%))`,
                          }}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          initial={{ rotate: -90, scale: 0.8 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          {index % 3 === 0 ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                            </svg>
                          ) : index % 3 === 1 ? (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z" />
                          </svg>
                          ) : (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7-7-3.14 7-7 7zm1-11h-2v4H7v2h4v4h2v-4h4v-2h-4z" />
                            </svg>
                          )}
                        </motion.div>
                        <motion.span 
                          className="text-lg font-normal leading-relaxed tracking-wide group-hover:text-flid-accent dark:group-hover:text-flid-accent-light transition-colors duration-300"
                          whileHover={{ scale: 1.01 }}
                        >
                          {result}
                        </motion.span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                {/* Highlighted final achievement box */}                <motion.div
                  className="mt-12 p-6 bg-gradient-to-r from-flid-accent/5 to-transparent dark:from-flid-accent-light/5 dark:to-transparent rounded-xl border-l-4 border-flid-accent dark:border-flid-accent-light shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                >
                  <div className="flex items-start">
                    <motion.div 
                      className="mr-4 mt-1 flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center shadow-lg" 
                      style={{
                        background: "linear-gradient(135deg, #38b2ac, #4299e1)"
                      }}
                      whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                        <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2-.9 2 2v1h-9c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                      </svg>
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 tracking-wide">Podsumowanie współpracy</h3>
                      <p className="text-base leading-relaxed font-normal">
                        Współpraca z Beatą Przybytek zaowocowała powstaniem kompleksowego przedstawienia jej 
                        artystycznego dorobku, podkreślającego zarówno wirtuozerię wykonawczą, jak i głębię 
                        kompozytorską. Reprezentacja wizualna idealnie odzwierciedla muzyczną stylistykę artystki.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </section>
              
              {/* Related Projects */}
              <section className="mb-20">                <motion.div 
                  className="flex items-center mb-12 pb-3 border-b border-flid-accent/40 dark:border-flid-accent-dark/40"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div 
                    className="mr-4"
                    whileHover={{ rotate: [0, -10, 10, -5, 0], scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24">
                      <defs>
                        <linearGradient id="projectsIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#e11d48" />
                          <stop offset="50%" stopColor="#db2777" />
                          <stop offset="100%" stopColor="#c026d3" />
                        </linearGradient>
                      </defs>
                      <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM12 5.5v9l6-4.5z" fill="url(#projectsIconGradient)" />
                    </svg>
                  </motion.div>
                  <h2 className="text-3xl font-semibold tracking-wide leading-tight">
                    Podobne projekty
                  </h2>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {project.nextProjects.map((projectId, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                      <Link 
                        to={`/projects/${projectId}`}
                        className="group block overflow-hidden rounded-xl transition-all duration-300"
                      >
                        <div className="relative h-52 overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                          {/* Elegant overlay with gradient */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 opacity-60 group-hover:opacity-80 transition-opacity duration-500 flex flex-col justify-end p-6">
                            <h3 className="font-medium text-lg tracking-wide text-white capitalize mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                              {projectId.replace(/-/g, ' ')}
                            </h3>
                            
                            <div className="flex items-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                              <span className="text-white/90 text-sm mr-2">Zobacz projekt</span>
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                              >
                                <svg className="w-4 h-4 text-flid-accent-light" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </motion.div>
                            </div>
                          </div>
                          
                          {/* Image with smooth transformation */}
                          <motion.div
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 1.2, ease: "easeOutQuint" }}
                            className="w-full h-full"
                          >
                            <img 
                              src={`./projects/${projectId}.jpg`} 
                              alt={projectId.replace(/-/g, ' ')} 
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                          
                          {/* Music-themed decorative element */}
                          <motion.div 
                            className="absolute top-4 right-4 text-white/50 z-10"
                            animate={{ 
                              rotate: [0, 10, 0],
                              opacity: [0.5, 0.7, 0.5]
                            }}
                            transition={{ duration: 3, repeat: Infinity }}
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 3V13.55C11.41 13.21 10.73 13 10 13C7.79 13 6 14.79 6 17S7.79 21 10 21 14 19.21 14 17V7H18V3H12Z" />
                            </svg>
                          </motion.div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
                
                {/* Decorative ending elements */}                <div className="flex justify-center mt-20">
                  <motion.div 
                    className="flex items-center gap-3"
                    animate={{ 
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-pink-400"></div>
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                        rotate: [-5, 5, -5]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" className="drop-shadow-lg">
                        <defs>
                          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ff6b6b" />
                            <stop offset="50%" stopColor="#cc5de8" />
                            <stop offset="100%" stopColor="#5c7cfa" />
                          </linearGradient>
                        </defs>
                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z" fill="url(#heartGradient)" />
                      </svg>
                    </motion.div>
                    <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-pink-400"></div>
                  </motion.div>
                </div>
              </section>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="sticky top-24 bg-white/95 dark:bg-flid-dark/90 backdrop-blur-md shadow-xl rounded-xl p-8 border border-gray-100 dark:border-gray-800/50">
                {/* Video Section - Moved to top of sidebar */}
                <div className="mb-10">
                  <h4 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-200 dark:border-gray-700/50 tracking-wide"></h4>
                  <div className="relative rounded-lg overflow-hidden">
                    <video 
                      ref={videoRef}
                      src="./projects/beata-przybytek/beata_wid.mp4"
                      className="w-full rounded-lg shadow-lg"
                      poster="./projects/beata-przybytek/gallery-1.jpg"
                      preload="metadata"
                      playsInline
                      autoPlay
                      loop
                      muted
                      aria-label="Beata Przybytek - fragment koncertu"
                    />                    
                  </div>
                </div>                  <h3 className="text-xl font-semibold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700/50 tracking-wide relative">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600">
                    Informacje o projekcie
                  </span>
                  <span className="absolute -bottom-1 left-0 w-20 h-[2px] bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600"></span>
                </h3>
                <motion.div 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Music-themed icons for project details */}                  <div className="flex items-center group">
                    <div className="h-10 w-10 mr-4 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">Klient</p>
                      <p className="font-medium tracking-wide">{project.client}</p>
                    </div>
                  </div>                  <div className="flex items-center group">
                    <div className="h-10 w-10 mr-4 flex items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-400 text-white shadow-lg group-hover:shadow-violet-500/30 transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">Czas trwania</p>
                      <p className="font-medium tracking-wide">{project.duration}</p>
                    </div>
                  </div>                    <div className="flex items-center group">
                    <div className="h-10 w-10 mr-4 flex items-center justify-center rounded-full bg-gradient-to-br from-rose-400 to-red-500 text-white shadow-lg group-hover:shadow-rose-500/30 transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">Rok</p>
                      <p className="font-medium tracking-wide">{project.year}</p>
                    </div>
                  </div>                    <div className="flex items-center group">
                    <div className="h-10 w-10 mr-4 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 text-white shadow-lg group-hover:shadow-teal-500/30 transition-all duration-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">Lokalizacja</p>
                      <p className="font-medium tracking-wide">{project.location}</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 font-medium">Kategorie</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.categories.map((category, index) => (                        <motion.span 
                          key={index}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          style={{
                            background: `linear-gradient(135deg, 
                              hsl(${index * 60}, 95%, 85%), 
                              hsl(${index * 60 + 30}, 95%, 80%))`
                          }}
                          className="text-sm px-3 py-1.5 rounded-full font-medium tracking-wide shadow-sm text-gray-800 border border-white/20"
                        >
                          {category}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>                <div className="mt-12">
                  <h4 className="text-lg font-semibold mb-8 pb-2 border-b border-gray-200 dark:border-gray-700/50 tracking-wide relative">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 via-teal-400 to-emerald-500">
                      Fazy projektu
                    </span>
                    <span className="absolute -bottom-1 left-0 w-20 h-[2px] bg-gradient-to-r from-green-500 via-teal-400 to-emerald-500"></span>
                  </h4>
                  <div className="space-y-8">
                    {project.approach.map((phase, index) => (
                      <motion.div 
                        key={index} 
                        className="relative pl-10"
                        initial={{ opacity: 0, x: -5 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ x: 2 }}
                      >
                        <div className="absolute left-0 top-1 h-6 w-6 rounded-full bg-gradient-to-br from-flid-accent to-flid-accent/70 dark:from-flid-accent-light dark:to-flid-accent-light/70 flex items-center justify-center text-white text-xs font-medium shadow-md">
                          {index + 1}
                        </div>
                        {index < project.approach.length - 1 && (
                          <div className="absolute left-3 top-7 h-full w-[2px] bg-gradient-to-b from-flid-accent/50 to-flid-accent/10 dark:from-flid-accent-light/50 dark:to-flid-accent-light/10"></div>
                        )}
                        <h5 className="font-semibold text-base tracking-wide">{phase.phase}</h5>
                        <p className="text-sm mt-2 mb-3 font-normal leading-relaxed tracking-wide">{phase.description}</p>
                        <div className="bg-flid-accent/5 dark:bg-flid-accent-light/5 p-3 rounded-lg border-l-2 border-flid-accent/30 dark:border-flid-accent-light/30">
                          <p className="text-xs text-gray-600 dark:text-gray-300 font-normal">{phase.outcome}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Elegant Lightbox with AnimatePresence */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/97 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setLightboxOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            {/* Close button with improved accessibility */}
            <motion.button 
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 text-white text-4xl z-50 w-14 h-14 flex items-center justify-center rounded-full bg-black/60 backdrop-blur-sm border border-white/10"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(255,105,180,0.3)",
                borderColor: "rgba(255,255,255,0.3)" 
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close lightbox"
            >
              ×
            </motion.button>
            
            {/* Image container with animations and adjacent navigation controls */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImageIndex}
                className="relative max-w-[90vw] max-h-[90vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative group">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    src={project.gallery[activeImageIndex]}
                    alt={project.galleryCaptions?.[activeImageIndex] || `${project.title} - zdjęcie ${activeImageIndex + 1}`}
                    className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                  />
                  
                  {/* Adjacent navigation controls that appear on hover or focus */}
                  <motion.div
                    className="absolute inset-y-0 left-0 flex items-center opacity-0 group-hover:opacity-100 focus-within:opacity-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((activeImageIndex - 1 + project.gallery.length) % project.gallery.length);
                      }}
                      className="h-16 w-16 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center -ml-5 hover:bg-flid-accent/80 transition-colors duration-300"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Previous image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                  </motion.div>
                  
                  <motion.div
                    className="absolute inset-y-0 right-0 flex items-center opacity-0 group-hover:opacity-100 focus-within:opacity-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveImageIndex((activeImageIndex + 1) % project.gallery.length);
                      }}
                      className="h-16 w-16 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-center -mr-5 hover:bg-flid-accent/80 transition-colors duration-300"
                      whileHover={{ scale: 1.1, x: -5 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Next image"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </motion.div>
                  
                  {/* Image dot indicators */}
                  <div className="absolute bottom-[-30px] left-0 right-0 flex justify-center gap-2 pb-4">
                    {project.gallery.map((_, index) => (
                      <motion.button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveImageIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-flid-accent-light focus:ring-offset-2 ${
                          index === activeImageIndex ? 'w-8 bg-flid-accent' : 'bg-white/40'
                        }`}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`View image ${index + 1}`}
                        aria-current={index === activeImageIndex ? "true" : "false"}
                      />
                    ))}
                  </div>

                </div>
                
                {/* Elegant caption container */}
                <motion.div 
                  className="absolute bottom-[-80px] left-0 right-0 flex flex-col items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  {project.galleryCaptions?.[activeImageIndex] && (
                    <span className="px-8 py-4 bg-black/60 text-white text-center max-w-xl rounded-lg backdrop-blur-md border border-white/10 text-lg font-normal tracking-wide">
                      {project.galleryCaptions[activeImageIndex]}
                    </span>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            {/* Keyboard navigation instructions */}
            <motion.div 
              className="absolute top-6 left-0 right-0 flex justify-center pointer-events-none"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              <div className="px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm text-xs text-white/60 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10">←</kbd>
                  <span>Poprzednie</span>
                </span>
                <span className="h-3 w-[1px] bg-white/30"></span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10">→</kbd>
                  <span>Następne</span>
                </span>
                <span className="h-3 w-[1px] bg-white/30"></span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1.5 py-0.5 rounded bg-white/10">ESC</kbd>
                  <span>Zamknij</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default BeataPrzybytkPage;
