import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import DesignThinkingViz from '../three/DesignThinkingViz';

const processSteps = [
  {
    title: 'Empatia',
    description: 'Zrozumienie potrzeb, pragnień i wyzwań ludzi i społeczności poprzez głębokie zanurzenie, obserwację i rozmowę.',
    icon: '❤️',
    color: '#6495ED' // dodgerblue
  },
  {
    title: 'Rozumowanie',
    description: 'Analiza spostrzeżeń, definiowanie problemów i poszukiwanie kreatywnych rozwiązań poprzez krytyczne myślenie i wspólną ideację.',
    icon: '🧠',
    color: '#FF6347' // tomato
  },
  {
    title: 'Materializacja',
    description: 'Przekształcanie pomysłów w namacalne prototypy i gotowe produkty, które tworzą pozytywny wpływ z uwzględnieniem zrównoważonego rozwoju.',
    icon: '✨',
    color: '#90EE90' // lightgreen
  }
];

const DesignProcessEnhanced = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Intersection observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const element = document.getElementById('design-process-enhanced-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="design-process-enhanced-section" className="section bg-white dark:bg-gray-900 py-16">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-flid-dark dark:text-white mb-4">Nasz Proces Projektowy</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Nasze podejście do Design Thinking to trzystopniowy proces iteracyjny, który równoważy potrzeby człowieka,
            możliwości technologiczne i wymogi zrównoważonego rozwoju.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* 3D Visualization */}
          <motion.div
            className="lg:col-span-7 order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg p-2 md:p-4 relative overflow-hidden">
              <DesignThinkingViz />
            </div>
          </motion.div>
          
          {/* Process Steps */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                  className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
                  style={{ borderLeft: `4px solid ${step.color}` }}
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{step.icon}</span>
                    <h3 className="text-xl font-bold text-flid-dark dark:text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Wizualizacja reprezentuje płynny, iteracyjny proces Design Thinking, 
            gdzie każdy etap dostarcza cennych spostrzeżeń i kieruje projekt w stronę rozwiązań 
            zorientowanych na człowieka i respektujących środowisko.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessEnhanced;
