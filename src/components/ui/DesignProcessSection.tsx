import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../contexts/ThemeHooks.tsx';
import ReasoningVisual from './ReasoningVisual.tsx';

interface StepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  lightColor: string;
}

const DesignProcessSection = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const { isDarkMode } = useTheme();
  
  const designSteps: StepProps[] = [
    {
      step: 1,
      title: 'Empatia',
      description: 'Głębokie zrozumienie potrzeb użytkownika, jego kontekstu i otoczenia. Obserwacja, słuchanie i analiza prowadzące do wartościowych spostrzeżeń.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 4 3 6 6 10a15.9 15.9 0 0 0 6-10z" />
          <circle cx="12" cy="8" r="2" />
        </svg>
      ),
      color: '#8B5CF6',
      lightColor: '#C4B5FD'
    },
    {
      step: 2,
      title: 'Rozumowanie',
      description: 'Analityczne podejście do zebranych informacji. Definiowanie problemów, generowanie pomysłów i testowanie rozwiązań w procesie iteracyjnym.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 20 7 20 17 12 22 4 17 4 7" />
          <line x1="12" y1="22" x2="12" y2="11" />
          <line x1="20" y1="7" x2="12" y2="11" />
          <line x1="4" y1="7" x2="12" y2="11" />
        </svg>
      ),
      color: '#10B981',
      lightColor: '#A7F3D0'
    },
    {
      step: 3,
      title: 'Materializacja',
      description: 'Przekształcanie koncepcji w namacalne rozwiązania. Budowanie prototypów, wdrażanie i ciągłe doskonalenie z myślą o zrównoważonym rozwoju.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      color: '#F59E0B',
      lightColor: '#FDE68A'
    }
  ];  return (    <section className={`pt-8 pb-24 px-6 ${isDarkMode ? 'bg-gray-950' : 'bg-gray-50'} overflow-hidden transition-colors duration-300`}>
      <div className="max-w-[1920px] w-full mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >          <h2 className={`text-3xl md:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-flid-dark'} tracking-tight`}>
            Proces <span className="text-flid-accent">projektowy</span>
          </h2>
          <p className={`text-lg md:text-xl max-w-4xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-flid-dark/80'} leading-relaxed`}>
            Trzyetapowy, iteracyjny proces, który równoważy ludzkie potrzeby, 
            możliwości technologiczne i wymagania zrównoważonego rozwoju.
          </p>
        </motion.div>        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mb-20 mx-auto max-w-[90%]">
          {designSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -5,
                boxShadow: isDarkMode 
                  ? '0 10px 15px -5px rgba(0, 0, 0, 0.5), 0 5px 10px -5px rgba(0, 0, 0, 0.2)'
                  : '0 10px 15px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04)'
              }}              onClick={() => setActiveStep(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveStep(index);
                  e.preventDefault();
                }
              }}
              tabIndex={0}
              role="button"
              aria-selected={activeStep === index}
              aria-label={`${step.title} - Etap ${step.step} procesu projektowania`}              className={`rounded-xl p-10 cursor-pointer transition-all duration-300 border ${
                activeStep === index 
                  ? isDarkMode ? 'bg-gray-800 shadow-xl border-flid-accent/30' : 'bg-white shadow-xl border-flid-accent/30' 
                  : isDarkMode ? 'bg-gray-800/70 shadow-md border-transparent' : 'bg-white shadow-md border-transparent'
              } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                isDarkMode ? 'focus:ring-violet-500/70' : 'focus:ring-violet-500'
              } hover:transform hover:translate-y-[-4px]`}
            >              <div className="mb-8 flex justify-center">
                <div 
                  className="rounded-full p-5 inline-flex items-center justify-center shadow-lg" 
                  style={{ 
                    backgroundColor: isDarkMode ? `${step.color}20` : `${step.lightColor}70`,
                    borderWidth: '1px',
                    borderColor: isDarkMode ? `${step.color}30` : `${step.color}20`
                  }}
                >
                  <div className="text-2xl" style={{ color: activeStep === index ? 'var(--flid-accent, #8B5CF6)' : step.color }}>{step.icon}</div>
                </div>
              </div>
              <div className="text-center">                <div className="mb-5 flex justify-center">
                  <span className="w-10 h-10 rounded-full inline-flex items-center justify-center text-white font-medium shadow-md" 
                    style={{ 
                      backgroundColor: activeStep === index ? 'var(--flid-accent, #8B5CF6)' : step.color,
                      transition: 'all 0.3s ease'
                    }}>
                    {step.step}
                  </span>
                </div><h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>
                  {step.title}
                </h3>
                <p className={`${isDarkMode ? 'text-gray-300' : 'text-flid-dark/80'} leading-relaxed`}>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 relative overflow-hidden transition-colors duration-300 mx-auto max-w-[90%] border ${isDarkMode ? 'border-gray-700' : 'border-gray-100'}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="md:flex items-center gap-10 lg:gap-16 xl:gap-20"
            >
              <div className="md:w-1/2 mb-10 md:mb-0 max-h-[450px] overflow-hidden rounded-2xl shadow-lg">
                <StepVisualizer step={activeStep} isDarkMode={isDarkMode} />
              </div>
              <div className="md:w-1/2">                <div 
                  className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-sm font-medium mb-4 sm:mb-5 shadow-md"
                  style={{ 
                    backgroundColor: isDarkMode 
                      ? `${designSteps[activeStep].color}20`
                      : `${designSteps[activeStep].lightColor}50`,
                    color: isDarkMode ? designSteps[activeStep].color : 'var(--flid-accent, #8B5CF6)',
                    borderWidth: '1px',
                    borderColor: isDarkMode 
                      ? `${designSteps[activeStep].color}40`
                      : `${designSteps[activeStep].color}30`
                  }}
                >                  Etap {designSteps[activeStep].step}
                </div><h3 className={`text-3xl sm:text-4xl font-bold mb-5 sm:mb-7 tracking-tight ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>
                  {designSteps[activeStep].title}
                </h3>
                
                <StepDetails step={activeStep} isDarkMode={isDarkMode} />
                  <div className="mt-8 sm:mt-10 flex space-x-6">
                  {designSteps.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-12 sm:w-16 h-3 rounded-full ${activeStep === index ? 'shadow-md' : 'opacity-40'}`}
                      style={{ 
                        backgroundColor: activeStep === index 
                          ? 'var(--flid-accent, #8B5CF6)'
                          : designSteps[index].color 
                      }}
                      whileHover={{ 
                        opacity: activeStep === index ? 1 : 0.7,
                        scale: 1.05
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const StepDetails = ({ step, isDarkMode }: { step: number; isDarkMode: boolean }) => {
  const details = [
    {
      points: [
        'Pogłębione badania użytkowników i ich kontekstu',
        'Obserwacje i wywiady terenowe',
        'Analiza danych i identyfikacja ukrytych potrzeb',
        'Mapy empatii i ścieżki użytkownika'
      ]
    },
    {
      points: [
        'Definiowanie głównych problemów i wyzwań',
        'Burze mózgów i sesje ideacyjne',
        'Prototypowanie koncepcyjne i testowanie',
        'Synteza rozwiązań uwzględniająca aspekty ekologiczne'
      ]
    },
    {
      points: [
        'Rozwój zaawansowanych prototypów',
        'Testowanie i iteracyjne udoskonalanie',
        'Implementacja rozwiązań',
        'Monitorowanie efektów i zbieranie feedbacku'
      ]
    }
  ];
  return (
    <ul className="space-y-5">
      {details[step].points.map((point, i) => (
        <motion.li 
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.5 }}
          className="flex items-start group"
        >          <span 
            className={`flex items-center justify-center w-8 h-8 rounded-full mr-4 mt-0.5 shadow-md transition-all duration-300 group-hover:scale-110 ${
              isDarkMode ? 'bg-opacity-30' : 'bg-opacity-40'
            }`} 
            style={{ 
              backgroundColor: step === 0 
                ? '#8B5CF6' + (isDarkMode ? '40' : '30')
                : step === 1 
                  ? '#10B981' + (isDarkMode ? '40' : '30')
                  : '#F59E0B' + (isDarkMode ? '40' : '30')
            }}
          >
            <svg className={`w-4 h-4 ${
              isDarkMode ? 'text-flid-accent' : 'text-flid-accent'
            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className={`${isDarkMode ? 'text-gray-300' : 'text-flid-dark/80'} font-medium text-lg leading-relaxed`}>{point}</span>
        </motion.li>
      ))}
    </ul>
  );
};

const StepVisualizer = ({ step, isDarkMode }: { step: number; isDarkMode: boolean }) => {
  // Delikatne przejście tła podczas zmiany kroków
  const backgroundColors = {
    empathy: {
      dark: 'bg-violet-900/10',
      light: 'bg-violet-100'
    },
    reasoning: {
      dark: 'bg-emerald-900/10',
      light: 'bg-emerald-50'
    },
    materialization: {
      dark: 'bg-amber-900/10',
      light: 'bg-amber-50'
    }
  };
  
  const getBgClass = () => {
    if (step === 0) return isDarkMode ? backgroundColors.empathy.dark : backgroundColors.empathy.light;
    if (step === 1) return isDarkMode ? backgroundColors.reasoning.dark : backgroundColors.reasoning.light;
    return isDarkMode ? backgroundColors.materialization.dark : backgroundColors.materialization.light;
  };

  // Different visualization for each step
  const visuals = [
    // Empathy - Connected nodes representing people/needs
    <EmpathyVisual key="empathy" isDarkMode={isDarkMode} />,
    // Reasoning - Analysis grid/pattern
    <ReasoningVisual key="reasoning" isDarkMode={isDarkMode} />,
    // Materialization - 3D object being built
    <MaterializationVisual key="materialization" isDarkMode={isDarkMode} />
  ];

  return (
    <motion.div 
      className={`relative h-80 w-full rounded-xl overflow-hidden ${getBgClass()}`}
      initial={{ opacity: 0.9 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {visuals[step]}
    </motion.div>
  );
};

const EmpathyVisual = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [nodeCount, setNodeCount] = useState<number>(8);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  
  // Wykrywanie rozmiaru ekranu dla responsywności
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsSmallScreen(window.innerWidth < 1024);
      setNodeCount(window.innerWidth < 768 ? 6 : 8);
    };
    
    handleResize(); // Początkowe ustawienie
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Rekalkulacja po zmianie trybu ciemnego/jasnego dla lepszej harmonii kolorów
  useEffect(() => {
    // Możemy dodać tutaj dodatkowe przeliczenia, jeśli potrzebujemy
  }, [isDarkMode]);return (
    <div className="relative h-full w-full">
      {/* Circular background gradient */}
      <motion.div 
        className={`absolute w-[90%] h-[90%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full ${
          isDarkMode 
            ? 'bg-gradient-to-br from-violet-600/20 via-indigo-600/15 to-blue-600/20' 
            : 'bg-gradient-to-br from-violet-500/20 via-indigo-500/15 to-blue-500/20'
        } blur-xl`}
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
        }}
        transition={{ 
          repeat: Infinity,
          repeatType: "reverse",
          duration: 8 
        }}
      />      {/* Nodes representing people */}
      {Array.from({ length: nodeCount }).map((_, i) => {        const angleOffset = (i / nodeCount) * Math.PI * 2;        // Responsywny promień zależny od szerokości ekranu
        const radius = isMobile ? 80 : isSmallScreen ? 90 : 100;
        const centerOffset = isMobile ? 120 : isSmallScreen ? 135 : 150;
        const x = Math.cos(angleOffset) * radius + centerOffset;
        const y = Math.sin(angleOffset) * radius + 150;
        
        // Zróżnicowane rozmiary dla bardziej organicznego wyglądu
        const size = i % 3 === 0 
          ? (isMobile ? 40 : isSmallScreen ? 45 : 50) 
          : (isMobile ? 32 : isSmallScreen ? 36 : 40);
        
        return (
          <motion.div
            key={i}
            className={`absolute rounded-full ${isDarkMode ? 'bg-violet-500' : 'bg-indigo-600'} shadow-lg`}
            style={{ 
              width: size, 
              height: size,
              x, 
              y,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ 
              scale: [1, 1.1, 1],
              boxShadow: isDarkMode 
                ? [
                    "0 0 0 rgba(139, 92, 246, 0.3)",
                    "0 0 20px rgba(139, 92, 246, 0.6)",
                    "0 0 0 rgba(139, 92, 246, 0.3)"
                  ]
                : [
                    "0 0 0 rgba(79, 70, 229, 0.3)",
                    "0 0 20px rgba(79, 70, 229, 0.6)",
                    "0 0 0 rgba(79, 70, 229, 0.3)"
                  ]
            }}
            transition={{ 
              repeat: Infinity,
              duration: 3,
              delay: i * 0.4
            }}
          >
            <motion.div 
              className={`w-full h-full rounded-full ${isDarkMode ? 'bg-gray-800/90' : 'bg-white/90'} flex items-center justify-center overflow-hidden`}
              initial={{ scale: 0.8 }}
              animate={{ scale: 0.9 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`${size > 40 ? 'w-6 h-6' : 'w-5 h-5'} ${isDarkMode ? 'text-violet-400' : 'text-indigo-600'}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Connection lines */}      <svg className="absolute top-0 left-0 w-full h-full">
        <motion.g
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          {Array.from({ length: 8 }).map((_, i) => {
            const connections = [
              (i + 1) % 8, 
              (i + 3) % 8,
              (i === 0) ? 4 : ((i === 4) ? 0 : i)
            ];
            
            return connections.map((connection, idx) => {        const angle1 = (i / 8) * Math.PI * 2;
              const angle2 = (connection / 8) * Math.PI * 2;
              const radius = 100;
              
              const x1 = Math.cos(angle1) * radius + 150;
              const y1 = Math.sin(angle1) * radius + 150;
              const x2 = Math.cos(angle2) * radius + 150;
              const y2 = Math.sin(angle2) * radius + 150;
              
              return (
                <motion.line 
                  key={`${i}-${idx}`}
                  x1={x1} 
                  y1={y1} 
                  x2={x2} 
                  y2={y2} 
                  stroke={isDarkMode ? "#818CF8" : "#4F46E5"} 
                  strokeOpacity={0.3}
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  animate={{
                    strokeWidth: [2, 3, 2],
                    strokeOpacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    delay: idx * 0.2,
                    repeat: Infinity
                  }}
                />
              );
            });
          })}
        </motion.g>
      </svg>      {/* Central node */}
      <motion.div
        className={`absolute top-1/2 left-1/2 w-20 sm:w-24 h-20 sm:h-24 rounded-full ${isDarkMode ? 'bg-violet-500' : 'bg-indigo-600'} flex items-center justify-center z-10`}
        style={{
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ 
          boxShadow: isDarkMode
            ? [
                "0 0 0 rgba(139, 92, 246, 0.3)",
                "0 0 30px rgba(139, 92, 246, 0.7)",
                "0 0 0 rgba(139, 92, 246, 0.3)"
              ]
            : [
                "0 0 0 rgba(79, 70, 229, 0.3)",
                "0 0 30px rgba(79, 70, 229, 0.7)",
                "0 0 0 rgba(79, 70, 229, 0.3)"
              ],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity 
        }}
      >
        <div className={`w-16 sm:w-20 h-16 sm:h-20 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center shadow-inner`}>          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={isMobile ? "28" : isSmallScreen ? "30" : "32"} 
            height={isMobile ? "28" : isSmallScreen ? "30" : "32"} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={isDarkMode ? 'text-violet-400' : 'text-indigo-600'}
          >
            <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 4 3 6 6 10a15.9 15.9 0 0 0 6-10z" />
            <circle cx="12" cy="8" r="2" />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};



const MaterializationVisual = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsSmallScreen(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);return (
    <div className="relative h-full w-full">
      {/* Background elements */}
      <motion.div
        className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-amber-600/20 to-yellow-600/20' 
            : 'bg-gradient-to-br from-amber-500/20 to-yellow-500/20'
        } rounded-xl`}
        animate={{
          filter: ["blur(10px)", "blur(20px)", "blur(10px)"],
        }}
        transition={{
          repeat: Infinity,
          duration: 8
        }}
      />
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* 3D cube visualization */}
        <div className="perspective-800">          <motion.div
            className={`relative ${isMobile ? 'h-48 w-48' : 'h-56 w-56'} transform-style-3d`}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360]
            }}
            transition={{
              duration: isMobile ? 25 : 20, // Wolniejsza rotacja na urządzeniach mobilnych
              repeat: Infinity,
              ease: "linear"
            }}
          >            {/* Front face */}            <motion.div              className={`absolute ${isMobile ? 'h-32 w-32' : isSmallScreen ? 'h-36 w-36' : 'h-40 w-40'} ${isDarkMode ? 'bg-amber-600/80' : 'bg-amber-500/80'} rounded`}
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                transform: `translateZ(${isMobile ? '16px' : isSmallScreen ? '18px' : '20px'})`,
              }}
              animate={{
                opacity: [0.8, 1, 0.8],
                boxShadow: isDarkMode
                  ? [
                      "0 0 0 rgba(217, 119, 6, 0)",
                      "0 0 20px rgba(217, 119, 6, 0.7)",
                      "0 0 0 rgba(217, 119, 6, 0)"
                    ]
                  : [
                      "0 0 0 rgba(245, 158, 11, 0)",
                      "0 0 20px rgba(245, 158, 11, 0.7)",
                      "0 0 0 rgba(245, 158, 11, 0)"
                    ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
            
            {/* Back face */}            <motion.div              className={`absolute ${isMobile ? 'h-32 w-32' : isSmallScreen ? 'h-36 w-36' : 'h-40 w-40'} ${isDarkMode ? 'bg-amber-600/80' : 'bg-amber-500/80'} rounded`}
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                transform: `rotateY(180deg) translateZ(${isMobile ? '16px' : isSmallScreen ? '18px' : '20px'})`,
              }}
              animate={{
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5
              }}
            />
              {/* Left face */}            <motion.div 
              className={`absolute ${isMobile ? 'h-32 w-32' : isSmallScreen ? 'h-36 w-36' : 'h-40 w-40'} ${isDarkMode ? 'bg-amber-500/80' : 'bg-amber-400/80'} rounded`}
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                transform: `rotateY(-90deg) translateZ(${isMobile ? '16px' : isSmallScreen ? '18px' : '20px'})`,
              }}
              animate={{
                opacity: [0.7, 0.9, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1
              }}
            />
              {/* Right face */}            <motion.div 
              className={`absolute ${isMobile ? 'h-32 w-32' : isSmallScreen ? 'h-36 w-36' : 'h-40 w-40'} ${isDarkMode ? 'bg-amber-500/80' : 'bg-amber-400/80'} rounded`}
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                transform: `rotateY(90deg) translateZ(${isMobile ? '16px' : isSmallScreen ? '18px' : '20px'})`,
              }}
              animate={{
                opacity: [0.7, 0.9, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 1.5
              }}
            />
              {/* Top face */}            <motion.div 
              className={`absolute ${isMobile ? 'h-32 w-32' : isSmallScreen ? 'h-36 w-36' : 'h-40 w-40'} ${isDarkMode ? 'bg-amber-400/80' : 'bg-amber-300/80'} rounded`}
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                transform: `rotateX(90deg) translateZ(${isMobile ? '16px' : isSmallScreen ? '18px' : '20px'})`,
              }}
              animate={{
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 2
              }}
            />
              {/* Bottom face */}            <motion.div 
              className={`absolute ${isMobile ? 'h-32 w-32' : isSmallScreen ? 'h-36 w-36' : 'h-40 w-40'} ${isDarkMode ? 'bg-amber-400/80' : 'bg-amber-300/80'} rounded`}
              style={{
                backfaceVisibility: "hidden",
                transformStyle: "preserve-3d",
                transform: `rotateX(-90deg) translateZ(${isMobile ? '16px' : isSmallScreen ? '18px' : '20px'})`,
              }}
              animate={{
                opacity: [0.6, 0.8, 0.6]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 2.5
              }}
            />
              {/* Icon in the center */}            <motion.div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-14 h-14' : 'w-16 h-16'} ${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } rounded-full flex items-center justify-center z-10 shadow-lg`}
              style={{
                transformStyle: "preserve-3d",
                transform: `translateZ(${isMobile ? '40px' : '50px'})`,
              }}
              animate={{
                scale: [1, 1.1, 1],
                boxShadow: isDarkMode
                  ? [
                      "0 0 0 rgba(31, 41, 55, 0.3)",
                      "0 0 30px rgba(31, 41, 55, 0.7)",
                      "0 0 0 rgba(31, 41, 55, 0.3)"
                    ]
                  : [
                      "0 0 0 rgba(255, 255, 255, 0.3)",
                      "0 0 30px rgba(255, 255, 255, 0.7)",
                      "0 0 0 rgba(255, 255, 255, 0.3)"
                    ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width={isMobile ? "28" : isSmallScreen ? "30" : "32"} 
                height={isMobile ? "28" : isSmallScreen ? "30" : "32"} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className={isDarkMode ? "text-amber-400" : "text-amber-500"}
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </motion.div>
          </motion.div>
        </div>        {/* Orbiting particles */}
        <div className="absolute top-1/2 left-1/2 w-64 h-64 -ml-32 -mt-32">
          {Array.from({ length: isMobile ? 8 : 12 }).map((_, i) => {
            const delay = i * 0.3;
            const size = 4 + (i % 3) * 2;
            const speed = 10 + (i % 5);
            
            return (              <motion.div
                key={i}
                className={`absolute rounded-full ${isDarkMode ? 'bg-amber-300 shadow-amber-300/50' : 'bg-amber-500 shadow-amber-500/30'} shadow-lg`}
                style={{
                  width: size,
                  height: size,
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  x: [
                    Math.cos((i / 12) * Math.PI * 2) * 100,
                    Math.cos(((i + 4) / 12) * Math.PI * 2) * 120,
                    Math.cos(((i + 8) / 12) * Math.PI * 2) * 100,
                    Math.cos((i / 12) * Math.PI * 2) * 100,
                  ],
                  y: [
                    Math.sin((i / 12) * Math.PI * 2) * 100,
                    Math.sin(((i + 4) / 12) * Math.PI * 2) * 120,
                    Math.sin(((i + 8) / 12) * Math.PI * 2) * 100,
                    Math.sin((i / 12) * Math.PI * 2) * 100,
                  ],
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.5, 1],
                  boxShadow: [
                    isDarkMode ? '0 0 5px rgba(252, 211, 77, 0.3)' : '0 0 5px rgba(245, 158, 11, 0.3)', 
                    isDarkMode ? '0 0 12px rgba(252, 211, 77, 0.7)' : '0 0 12px rgba(245, 158, 11, 0.7)', 
                    isDarkMode ? '0 0 5px rgba(252, 211, 77, 0.3)' : '0 0 5px rgba(245, 158, 11, 0.3)'
                  ]
                }}
                transition={{
                  x: { duration: speed, repeat: Infinity, ease: "linear" },
                  y: { duration: speed, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity, delay },
                  scale: { duration: 2, repeat: Infinity, delay },
                  boxShadow: { duration: 3, repeat: Infinity, delay: delay + 0.2 }
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DesignProcessSection;
