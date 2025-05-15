import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DesignProcessVisualization from '../three/DesignProcessVisualization';

const processSteps = [
  {
    title: 'Empathy',
    description: 'Understanding the needs, desires, and challenges of people and communities through deep immersion, observation, and conversation.',
    icon: '❤️',
    color: '#D2CDE8'
  },
  {
    title: 'Reasoning',
    description: 'Analyzing insights, defining problems, and exploring creative solutions through critical thinking and collaborative ideation.',
    icon: '🧠',
    color: '#8B7DD1'
  },
  {
    title: 'Materialization',
    description: 'Transforming ideas into tangible prototypes and final products that create positive impact while considering sustainability.',
    icon: '✨',
    color: '#6A5ACD'
  }
];

const DesignProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  // Auto-rotate through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processSteps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
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
    
    const element = document.getElementById('design-process-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);  return (
    <section id="design-process-section" className="section bg-white dark:bg-gray-800">
      <div className="container-wide">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >          <h2 className="text-3xl md:text-5xl font-bold text-flid-dark dark:text-white mb-4">Our Design Process</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our approach to design thinking is a three-step iterative process that balances human needs, 
            technological possibilities, and sustainability requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* 3D Visualization */}          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >            <DesignProcessVisualization 
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              processes={processSteps.map((step) => ({
                id: step.title.toLowerCase(),
                title: step.title,
                color: step.color,
                detail: step.description
              }))}
            />
          </motion.div>
          
          {/* Process Steps */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.title}                  className={`p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeStep === index
                      ? 'bg-flid-primary bg-opacity-30 dark:bg-flid-primary/20 shadow-lg'
                      : 'bg-gray-50 dark:bg-gray-700 hover:bg-flid-primary hover:bg-opacity-10 dark:hover:bg-flid-primary/10'
                  }`}
                  onClick={() => setActiveStep(index)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  whileHover={{ x: activeStep === index ? 0 : 5 }}
                >
                  <div className="flex items-start">
                    <div 
                      className="text-4xl mr-4 p-3 rounded-full" 
                      style={{ backgroundColor: step.color }}
                    >
                      {step.icon}
                    </div>
                    <div>                      <h3 className="text-xl font-bold text-flid-dark dark:text-white mb-2">
                        {step.title}
                      </h3>
                      <AnimatePresence mode="wait">
                        {activeStep === index && (
                          <motion.p
                            key={`description-${index}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-gray-600 dark:text-gray-300"
                          >
                            {step.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignProcess;
