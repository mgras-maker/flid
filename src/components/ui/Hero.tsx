import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  subtitle?: string;
}

const Hero = ({ subtitle = "Foundation People-Innovations-Design" }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  
  // Only enable animations after component is mounted to prevent SSR issues
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  // Letter animation for main title
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };  // Create a parallax effect on scroll
  useEffect(() => {
    // Only run on client and after the component is mounted
    if (!isClient || typeof window === 'undefined') return;
    
    // Use requestAnimationFrame for smoother scrolling
    let rafId: number;
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const scrollPosition = window.scrollY;
            const parallaxElements = containerRef.current.querySelectorAll('.parallax');
            
            parallaxElements.forEach((element: Element, index) => {
              const speed = index % 2 === 0 ? 0.15 : 0.25;
              const yOffset = scrollPosition * speed;
              const el = element as HTMLElement;
              
              // Get the current animation transform - use regex to extract x and scale
              const currentTransform = el.style.transform || '';
              const xMatch = currentTransform.match(/translateX\(([^)]+)\)/);
              const scaleMatch = currentTransform.match(/scale\(([^)]+)\)/);
              
              const xTransform = xMatch ? `translateX(${xMatch[1]})` : '';
              const scaleTransform = scaleMatch ? `scale(${scaleMatch[1]})` : '';
              
              // Apply all transforms together
              el.style.transform = `${xTransform} translateY(${yOffset}px) ${scaleTransform}`;
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    // Run once immediately to position elements correctly
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [isClient]);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-flid-light dark:bg-flid-dark py-24 px-4 sm:px-6"
    >      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Circles - only render when on client side to prevent hydration issues */}
        {isClient && [...Array(5)].map((_, i) => {
          // Fixed preset values instead of random ones to avoid re-renders
          const presetPositions = [
            { x: 15, y: 20, scale: 0.7, width: 250, duration: 25 },
            { x: 80, y: 15, scale: 0.6, width: 180, duration: 18 },
            { x: 50, y: 60, scale: 0.9, width: 320, duration: 22 },
            { x: 25, y: 80, scale: 0.5, width: 200, duration: 20 },
            { x: 85, y: 75, scale: 0.8, width: 280, duration: 24 }
          ];
          
          const preset = presetPositions[i];
          
          return (
            <motion.div
              key={`circle-${i}`}
              className="parallax absolute rounded-full bg-flid-primary opacity-20"
              initial={{ 
                x: `${preset.x}%`, 
                y: `${preset.y}%`,
                scale: preset.scale
              }}
              animate={{
                x: `${100 - preset.x}%`,
                y: `${100 - preset.y}%`,
                scale: preset.scale + 0.2
              }}
              transition={{
                duration: preset.duration,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              style={{
                width: `${preset.width}px`,
                height: `${preset.width}px`,
              }}
            />
          );
        })}
      </div>
        {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Show static content first for immediate visibility, then animate when client-side */}
        {!isClient ? (
          <>
            <p className="text-flid-accent font-medium text-lg md:text-xl mb-4">
              {subtitle}
            </p>            <h1 className="text-4xl md:text-7xl font-bold text-flid-dark dark:text-white leading-tight mb-6">
              Balance through design
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Designing positive change for sustainability through innovation,
              research and creative thinking.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#projects" className="btn btn-primary">
                Explore Projects
              </a>              <a href="#process" className="btn border-2 border-flid-dark text-flid-dark dark:border-white dark:text-white hover:bg-flid-dark dark:hover:bg-white hover:text-white dark:hover:text-flid-dark">
                Our Process
              </a>
            </div>
          </>
        ) : (
          <>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <p className="text-flid-accent font-medium text-lg md:text-xl mb-4">
                {subtitle}
              </p>
            </motion.div>
            
            <div className="overflow-hidden">              <h1 className="text-4xl md:text-7xl font-bold text-flid-dark dark:text-white leading-tight mb-6">
                {"Balance through design".split("").map((char, index) => (
                  <motion.span
                    key={`title-${index}`}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block mx-[1px] md:mx-[2px]"
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>
            </div>
            
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 0.8
              }}
            >
              Designing positive change for sustainability through innovation, 
              research and creative thinking.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={textVariants}
              initial="hidden"
              animate="visible"
              transition={{
                delay: 1.2
              }}
            >
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Projects
              </motion.a>
              
              <motion.a
                href="#process"
                className="btn border-2 border-flid-dark text-flid-dark dark:border-white dark:text-white hover:bg-flid-dark dark:hover:bg-white hover:text-white dark:hover:text-flid-dark"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Process
              </motion.a>
            </motion.div>
          </>
        )}
      </div>
        {/* Scroll indicator - only animate on client side */}
      {isClient ? (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2,
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >            <path 
              d="M20 5V35M20 35L10 25M20 35L30 25" 
              stroke="currentColor" 
              className="text-flid-dark dark:text-white"
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      ) : (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0">
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 40 40" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >            <path 
              d="M20 5V35M20 35L10 25M20 35L30 25" 
              stroke="currentColor" 
              className="text-flid-dark dark:text-white"
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Hero;
