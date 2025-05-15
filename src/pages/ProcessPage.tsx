import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import type { Variants } from 'framer-motion';
import Layout from '../components/layout/Layout.tsx';
import { useTheme } from '../contexts/ThemeHooks.tsx';

const ProcessPage = () => {
  const { isDarkMode } = useTheme();
  const [activeStage, setActiveStage] = useState<number>(0);
  const [expandedStage, setExpandedStage] = useState<number | null>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Design thinking stages with expanded details
  const designThinkingStages = [
    {
      id: 'empathy',
      title: 'Empatia',
      icon: '👂',
      color: '#D2CDE8',
      darkColor: '#9183d0',
      description: 'Zrozumienie potrzeb, pragnień i wyzwań ludzi dla których projektujemy.',
      details: [
        {
          title: 'Zrozumienie użytkownika',
          description: 'Wczucie się w sytuację użytkownika i zrozumienie jego perspektywy. Odłożenie na bok własnych przekonań, aby uzyskać prawdziwy wgląd w potrzeby innych.',
          techniques: ['Wywiady z użytkownikami', 'Obserwacja uczestników', 'Mapy empatii', 'Mapowanie podróży']
        },
        {
          title: 'Analiza zachowań',
          description: 'Zbieranie i analizowanie danych o sposobach korzystania z produktów i usług. Identyfikacja wzorców i niespełnionych potrzeb.',
          techniques: ['Badania etnograficzne', 'Analiza danych użytkowników', 'Ankiety i wywiady', 'Obserwacja kontekstowa']
        }
      ]
    },
    {
      id: 'reasoning',
      title: 'Rozumowanie',
      icon: '🧠',
      color: '#B5A9DC',
      darkColor: '#7c68c8',
      description: 'Analiza informacji, definiowanie problemów i identyfikacja możliwości innowacji.',
      details: [
        {
          title: 'Definiowanie problemu',
          description: 'Przekształcanie obserwacji w konkretny problem do rozwiązania. Ustalanie ram i określanie kryteriów sukcesu dla rozwiązania.',
          techniques: ['Definiowanie problemu', 'Klastrowanie spostrzeżeń', 'Mapowanie systemu', 'Analiza przyczyn głównych']
        },
        {
          title: 'Generowanie pomysłów',
          description: 'Twórcze podejście do poszukiwania rozwiązań. Wykorzystanie różnych technik do wygenerowania wielu opcji i perspektyw.',
          techniques: ['Burza mózgów', 'Szkicowanie pomysłów', 'Technika "Co jeśli?"', 'Mapy myśli']
        }
      ]
    },
    {
      id: 'materialization',
      title: 'Materializacja',
      icon: '✨',
      color: '#8371C7',
      darkColor: '#6854b2',
      description: 'Przekształcanie pomysłów w namacalne prototypy, testowanie koncepcji i udoskonalanie rozwiązań.',
      details: [
        {
          title: 'Prototypowanie',
          description: 'Tworzenie fizycznych lub cyfrowych reprezentacji rozwiązania. Skupienie się na kluczowych funkcjach i doświadczeniach użytkownika.',
          techniques: ['Szybkie prototypowanie', 'Makiety', 'Prototypy interaktywne', 'Wizualizacje 3D']
        },
        {
          title: 'Testowanie i iteracja',
          description: 'Zbieranie opinii użytkowników na temat prototypów. Analiza wyników i udoskonalanie projektu na podstawie zebranych informacji.',
          techniques: ['Testy użyteczności', 'Ocena heurystyczna', 'Badanie A/B', 'Iteracyjne projektowanie']
        }
      ]
    }
  ];

  // Scroll into view when selecting a stage
  useEffect(() => {
    if (expandedStage !== null && processRef.current) {
      const yOffset = -100; // Adjust based on navbar height
      const element = document.getElementById(`stage-details-${expandedStage}`);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  }, [expandedStage]);

  // Animate process flow
  useEffect(() => {
    controls.start({
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" }
    });
  }, [controls]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }  };

  const flowLineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <Layout>
      {/* Hero Section with animated background */}
      <section className={`relative min-h-[90vh] flex items-center justify-center overflow-hidden ${isDarkMode ? 'bg-gradient-to-b from-[#1a1a2e] to-[#16213e]' : 'bg-gradient-to-b from-[#f0f0ff] to-[#e6e6ff]'}`}>
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute w-full h-full">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full opacity-30 ${isDarkMode ? 'bg-flid-accent' : 'bg-flid-accent'}`}
                style={{
                  width: Math.random() * 300 + 50,
                  height: Math.random() * 300 + 50,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: Math.random() * 10 + 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>
          <div className="absolute inset-0 backdrop-blur-[100px]" />
        </div>

        <motion.div
          className="container px-4 relative z-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-flid-dark dark:text-white tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Design <span className="text-flid-accent">Thinking</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-flid-dark/80 dark:text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Proces kreatywnego rozwiązywania problemów, który koncentruje się na zrozumieniu 
            użytkowników, kwestionowaniu założeń i redefiniowaniu problemów.
          </motion.p>
          
          <motion.a
            href="#process"
            className={`inline-block px-8 py-3 rounded-full font-medium text-lg ${isDarkMode ? 'bg-flid-accent text-white hover:bg-flid-accent-dark' : 'bg-flid-accent text-white hover:bg-flid-accent/90'} transition-all shadow-lg hover:shadow-xl`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Poznaj proces
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M12 5L12 19M12 19L18 13M12 19L6 13" 
              stroke={isDarkMode ? "#fff" : "#2A2A42"} 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </section>

      {/* Process Flow Section */}
      <div className="relative overflow-hidden">
        <section id="process" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} relative`} ref={processRef}>
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-flid-dark dark:text-white">
              Trójfazowy Proces <span className="text-flid-accent">Design Thinking</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-flid-dark/80 dark:text-gray-300">
              FLID wykorzystuje trójfazowy proces design thinking, który równoważy potrzeby 
              użytkowników, możliwości technologiczne i wymagania dla sukcesu projektu.
            </p>
          </motion.div>

          {/* Interactive Process Flow */}
          <div className="relative">
            {/* Process Flow Visualization */}
            <div className="hidden md:block relative h-[200px] mb-16">
              <svg 
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 200" 
                fill="none" 
                preserveAspectRatio="none"
              >
                <motion.path 
                  d="M100,100 C250,30 350,170 500,100 C650,30 750,170 900,100" 
                  stroke={isDarkMode ? "#8B7DD1" : "#8B7DD1"}
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="0 1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={controls}
                  variants={flowLineVariants}
                  className="opacity-60"
                />
              </svg>

              {/* Stage indicators along the path */}
              {designThinkingStages.map((stage, index) => {
                const positions = [{x: 100, y: 100}, {x: 500, y: 100}, {x: 900, y: 100}];
                return (
                  <motion.div
                    key={stage.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ 
                      left: `${positions[index].x / 10}%`, 
                      top: `${positions[index].y / 2}%`
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.5, duration: 0.6 }}
                  >
                    <div 
                      className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                        activeStage === index 
                          ? 'ring-4 ring-offset-4 ring-flid-accent ring-offset-white dark:ring-offset-gray-900' 
                          : ''
                      } cursor-pointer transition-all duration-300 transform hover:scale-110`}
                      style={{ 
                        backgroundColor: isDarkMode ? stage.darkColor : stage.color,
                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
                      }}
                      onClick={() => {
                        setActiveStage(index);
                        setExpandedStage(index);
                      }}
                    >
                      <span>{stage.icon}</span>
                    </div>
                    <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-max">
                      <p className="font-medium text-flid-dark dark:text-white whitespace-nowrap">{stage.title}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Stages Card View for both mobile and desktop */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {designThinkingStages.map((stage, index) => (
                <motion.div
                  key={stage.id}
                  className={`rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 ${
                    activeStage === index 
                      ? 'ring-2 ring-flid-accent' 
                      : ''
                  }`}                  variants={itemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  initial="initial"
                  onClick={() => {
                    setActiveStage(index);
                    setExpandedStage(index);
                  }}
                  style={{ 
                    backgroundColor: isDarkMode ? 'rgba(45, 45, 60, 0.6)' : 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <div 
                    className="h-2" 
                    style={{ backgroundColor: isDarkMode ? stage.darkColor : stage.color }}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div 
                        className="w-12 h-12 rounded-full flex items-center justify-center text-xl mr-4"
                        style={{ backgroundColor: isDarkMode ? stage.darkColor : stage.color }}
                      >
                        <span>{stage.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-flid-dark dark:text-white">{stage.title}</h3>
                    </div>
                    <p className="text-flid-dark/80 dark:text-gray-300">{stage.description}</p>
                    
                    <div className="mt-6 flex justify-between items-center">
                      <motion.div 
                        className="w-full flex"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                      >
                        <div 
                          className="h-1 rounded-full"
                          style={{ 
                            backgroundColor: isDarkMode ? stage.darkColor : stage.color,
                            width: '100%'
                          }}
                        ></div>
                      </motion.div>
                      <div 
                        className="ml-4 w-6 h-6 rounded-full flex items-center justify-center bg-flid-accent text-white"
                      >
                        <span>{index + 1}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Expanded Stage Details */}
          <AnimatePresence mode="wait">
            {expandedStage !== null && (
              <motion.div
                id={`stage-details-${expandedStage}`}
                key={`expanded-${expandedStage}`}
                className={`mt-16 rounded-xl overflow-hidden shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
                initial={{ opacity: 0, y: 50, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -50, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div 
                  className="h-3" 
                  style={{ 
                    backgroundColor: isDarkMode 
                      ? designThinkingStages[expandedStage].darkColor 
                      : designThinkingStages[expandedStage].color 
                  }}
                ></div>
                <div className="p-6 md:p-10">
                  <div className="flex items-center mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-6"
                      style={{ 
                        backgroundColor: isDarkMode 
                          ? designThinkingStages[expandedStage].darkColor 
                          : designThinkingStages[expandedStage].color 
                      }}
                    >
                      <span>{designThinkingStages[expandedStage].icon}</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-flid-dark dark:text-white mb-1">
                        {designThinkingStages[expandedStage].title}
                      </h2>
                      <p className="text-flid-dark/80 dark:text-gray-300">
                        Faza {expandedStage + 1} procesu Design Thinking
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-flid-dark/80 dark:text-gray-300 mb-8">
                    {designThinkingStages[expandedStage].description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {designThinkingStages[expandedStage].details.map((detail, idx) => (
                      <motion.div
                        key={idx}
                        className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.2 }}
                      >
                        <h3 className="text-xl font-semibold mb-3 text-flid-dark dark:text-white">
                          {detail.title}
                        </h3>
                        <p className="text-flid-dark/80 dark:text-gray-300 mb-4">
                          {detail.description}
                        </p>
                        
                        <h4 className="text-sm font-medium text-flid-accent mb-2">TECHNIKI</h4>
                        <ul className="grid grid-cols-1 gap-2">
                          {detail.techniques.map((technique, i) => (
                            <motion.li
                              key={i}
                              className="flex items-center"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                            >
                              <div 
                                className="w-2 h-2 rounded-full mr-2"
                                style={{ 
                                  backgroundColor: isDarkMode 
                                    ? designThinkingStages[expandedStage].darkColor 
                                    : designThinkingStages[expandedStage].color 
                                }}
                              ></div>
                              <span className="text-flid-dark/90 dark:text-gray-200">{technique}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex justify-center mt-10">
                    <motion.button
                      className={`px-5 py-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} text-flid-dark/90 dark:text-gray-200`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setExpandedStage(null)}
                    >
                      Zamknij szczegóły
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>      </section>
      </div>

      {/* Interactive Process Visualizer */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-flid-light'}`}>
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-flid-dark dark:text-white">
              Interaktywne <span className="text-flid-accent">doświadczenie</span> procesu
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-flid-dark/80 dark:text-gray-300">
              Odkryj jak trzy fazy procesu design thinking płynnie przechodzą jedna w drugą,
              tworząc ciągły cykl doskonalenia projektu.
            </p>
          </motion.div>

          {/* Interactive Circular Process Visualization */}
          <div className="relative h-[500px] max-w-3xl mx-auto">
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            >
              <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
              >
                <defs>
                  <linearGradient id="gradientEmpatia" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={isDarkMode ? "#9183d0" : "#D2CDE8"} />
                    <stop offset="100%" stopColor={isDarkMode ? "#7c68c8" : "#B5A9DC"} />
                  </linearGradient>
                  <linearGradient id="gradientRozumowanie" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={isDarkMode ? "#7c68c8" : "#B5A9DC"} />
                    <stop offset="100%" stopColor={isDarkMode ? "#6854b2" : "#8371C7"} />
                  </linearGradient>
                  <linearGradient id="gradientMaterializacja" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={isDarkMode ? "#6854b2" : "#8371C7"} />
                    <stop offset="100%" stopColor={isDarkMode ? "#9183d0" : "#D2CDE8"} />
                  </linearGradient>
                </defs>

                {/* Circular segments */}
                <motion.path
                  d="M200,50 A150,150 0 0,1 350,200"
                  fill="none"
                  stroke="url(#gradientEmpatia)"
                  strokeWidth="30"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M350,200 A150,150 0 0,1 200,350"
                  fill="none"
                  stroke="url(#gradientRozumowanie)"
                  strokeWidth="30"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
                />
                <motion.path
                  d="M200,350 A150,150 0 0,1 50,200"
                  fill="none"
                  stroke="url(#gradientMaterializacja)"
                  strokeWidth="30"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                />
                <motion.path
                  d="M50,200 A150,150 0 0,1 200,50"
                  fill="none"
                  stroke="url(#gradientEmpatia)"
                  strokeWidth="30"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
                />

                {/* Center circle */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="50"
                  fill={isDarkMode ? "#1a1a2e" : "#ffffff"}
                  stroke={isDarkMode ? "#8B7DD1" : "#8B7DD1"}
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 2 }}
                />

                <motion.text
                  x="200"
                  y="200"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={isDarkMode ? "#ffffff" : "#2A2A42"}
                  fontSize="14"
                  fontWeight="bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                >
                  FLID
                </motion.text>
              </svg>
            </motion.div>

            {/* Stage Labels */}
            {designThinkingStages.map((stage, index) => {
              const positions = [
                { x: "200px", y: "30px" },  // Empathy - top
                { x: "370px", y: "200px" }, // Reasoning - right
                { x: "30px", y: "200px" },  // Materialization - left
              ];
              return (
                <motion.div
                  key={stage.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
                  style={{ 
                    left: positions[index].x, 
                    top: positions[index].y
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 + index * 0.2 }}
                >
                  <div 
                    className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-flid-dark'} shadow-lg`}
                    style={{ 
                      borderLeft: `4px solid ${isDarkMode ? stage.darkColor : stage.color}`
                    }}
                  >
                    <p className="font-medium">{stage.title}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits section */}
      <section className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-flid-dark dark:text-white">
              Korzyści z <span className="text-flid-accent">Design Thinking</span>
            </h2>
            <p className="text-lg max-w-3xl mx-auto text-flid-dark/80 dark:text-gray-300">
              Poznaj kluczowe zalety wykorzystania metodologii design thinking w procesie projektowym.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: '🎯',
                title: 'Skupienie na użytkowniku',
                description: 'Projekty oparte na rzeczywistych potrzebach ludzi, a nie na założeniach.'
              },
              {
                icon: '💡',
                title: 'Innowacyjność',
                description: 'Przełamywanie konwencjonalnych schematów myślenia i tworzenie nowatorskich rozwiązań.'
              },
              {
                icon: '🔄',
                title: 'Iteracyjność',
                description: 'Ciągłe udoskonalanie projektu w oparciu o feedback i nowe spostrzeżenia.'
              },
              {
                icon: '🤝',
                title: 'Współpraca',
                description: 'Łączenie różnych perspektyw i umiejętności w interdyscyplinarnych zespołach.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-flid-light'} shadow-lg`}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-flid-dark dark:text-white">{benefit.title}</h3>
                <p className="text-flid-dark/80 dark:text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>      {/* Game Promotion Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto gap-8">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-flid-dark dark:text-white">
                  Sprawdź swoją wiedzę w <span className="text-flid-accent">grze Design Thinking</span>
                </h2>
                <p className="text-lg mb-6 text-flid-dark/80 dark:text-gray-300">
                  Przetestuj zrozumienie procesu design thinking w naszej interaktywnej grze, 
                  która przeprowadzi Cię przez każdy etap metodologii.
                </p>
                <motion.a
                  href="/design-thinking-game"
                  className={`inline-flex items-center px-6 py-3 rounded-lg font-medium text-white bg-flid-accent hover:bg-flid-accent/90 transition-all shadow-md`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Zagraj teraz</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.a>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                className={`rounded-xl overflow-hidden shadow-lg ${isDarkMode ? 'shadow-flid-accent/10' : 'shadow-flid-accent/20'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <div className={`aspect-video bg-gradient-to-br ${isDarkMode ? 'from-[#4a3b97] to-[#2c1e64]' : 'from-[#9183d0] to-[#6854b2]'} p-8 flex items-center justify-center`}>
                    <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className={`py-20 ${isDarkMode ? 'bg-[#1a1a2e]' : 'bg-flid-light'}`}>
        <div className="container px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-flid-dark dark:text-white">
              Gotowy na rozpoczęcie<br />swojego projektu <span className="text-flid-accent">design thinking</span>?
            </h2>
            <p className="text-lg mb-10 text-flid-dark/80 dark:text-gray-300">
              Skontaktuj się z nami już dziś, aby dowiedzieć się, jak możemy pomóc Ci wykorzystać 
              pełny potencjał procesu design thinking w Twoim kolejnym projekcie.
            </p>
            <motion.a
              href="/contact"
              className={`inline-block px-8 py-4 rounded-full font-medium text-lg ${isDarkMode ? 'bg-flid-accent text-white hover:bg-flid-accent-dark' : 'bg-flid-accent text-white hover:bg-flid-accent/90'} transition-all shadow-lg hover:shadow-xl`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skontaktuj się z nami
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ProcessPage;
