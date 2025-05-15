// Gruntownie przeprojektowany komponent Hero - bez problemów z migotaniem i podwójnym renderem
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useAnimation, useInView, LazyMotion, domAnimation, m } from 'framer-motion';

interface HeroProps {
  subtitle?: string;
}

// Predefiniowane pozycje kółek dekoracyjnych - unikamy losowości
const circlePositions = [
  { x: 15, y: 20, size: 250, delay: 0.2, duration: 25 },
  { x: 80, y: 15, size: 180, delay: 0.4, duration: 28 },
  { x: 50, y: 60, size: 320, delay: 0.1, duration: 22 },
  { x: 25, y: 80, size: 200, delay: 0.3, duration: 26 },
  { x: 85, y: 75, size: 280, delay: 0.5, duration: 24 }
];

// Użyj useIsomorphicLayoutEffect aby uniknąć ostrzeżeń w SSR
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const HeroOptimized = ({ subtitle = "Foundation People-Innovations-Design" }: HeroProps) => {
  // Używamy referencji do sekcji i kontrolerów animacji
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const backgroundControls = useAnimation();
  
  // Stan do śledzenia, czy komponent jest renderowany po stronie klienta
  const [isMounted, setIsMounted] = useState(false);
  
  // Tekst tytułu rozdzielony na znaki do animacji
  const titleText = "Balance through design";
  const titleChars = titleText.split("");
    // Efekt uruchamiany tylko po stronie klienta
  useEffect(() => {
    setIsMounted(true);
    
    // Jeśli renderujemy po stronie klienta, oznacz to w danych
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('hero-rendered', 'true');
    }
  }, []);
  
  // Uruchamiamy animacje po załadowaniu i kiedy element jest widoczny
  // Używamy osobnego efektu z większym opóźnieniem, aby upewnić się, 
  // że kontrolery animacji są w pełni zainicjalizowane
  useEffect(() => {
    // Zapobiegamy błędom podczas pierwszego renderowania
    if (!isMounted) return;

    let backgroundTimer: ReturnType<typeof setTimeout>;
    let contentTimer: ReturnType<typeof setTimeout>;

    // Nie uruchamiaj animacji dopóki komponent nie zostanie w pełni zamontowany
    if (isInView) {
      // Użyj setTimeout, aby upewnić się, że komponent jest już zamontowany
      backgroundTimer = setTimeout(() => {
        // Sekwencja animacji - najpierw tło
        backgroundControls.start("visible").catch(() => {
          // Ignorujemy błędy animacji
        });
        
        // Następnie uruchom animację treści
        contentTimer = setTimeout(() => {
          controls.start("visible").catch(() => {
            // Ignorujemy błędy animacji
          });
        }, 300);
      }, 100);
    }
    
    return () => {
      if (backgroundTimer) clearTimeout(backgroundTimer);
      if (contentTimer) clearTimeout(contentTimer);
    };
  }, [isInView, controls, backgroundControls, isMounted]);
  
  // Efekt parallax przy przewijaniu - używamy RAF dla płynności
  useIsomorphicLayoutEffect(() => {
    // Tylko uruchamiaj po stronie klienta i po zamontowaniu
    if (!isMounted || typeof window === 'undefined') return;
    
    let rafId: number;
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        rafId = window.requestAnimationFrame(() => {
          if (containerRef.current) {
            const parallaxCircles = containerRef.current.querySelectorAll('.parallax-circle');
            const scrollY = window.scrollY;
            
            parallaxCircles.forEach((circle, index) => {
              const speed = index % 2 === 0 ? 0.1 : 0.15;
              const yOffset = scrollY * speed;
              (circle as HTMLElement).style.transform = 
                `translate3d(0, ${yOffset}px, 0)`;
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, [isMounted]);
  
  // Warianty dla animacji - używamy staggerChildren dla sekwencyjnych animacji
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + (i * 0.05), // Delikatniejsze opóźnienie między literami
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };
    const circleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (index: number) => ({
      opacity: 0.15,
      scale: 1,
      transition: { 
        delay: 0.1 * index,
        duration: 1.2,
        ease: "easeOut"
      }
    })
  };

  return (
    <LazyMotion features={domAnimation}>
      <div 
        ref={containerRef}
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-flid-light py-24 px-4 sm:px-6"
      >        {/* Tło dekoracyjne z kółkami - renderowanie tylko po stronie klienta */}
        <div className="absolute inset-0 overflow-hidden">
          {isMounted && circlePositions.map((circle, i) => (
            <m.div
              key={`circle-${i}`}
              className="parallax-circle absolute rounded-full bg-flid-primary"
              style={{
                left: `${circle.x}%`,
                top: `${circle.y}%`,
                width: `${circle.size}px`,
                height: `${circle.size}px`,
                opacity: 0, // Początkowa przezroczystość
              }}
              custom={i}
              variants={circleVariants}
              initial="hidden"
              // Unikamy direct animation jeśli nie jest jeszcze gotowy
              {...(isMounted ? { animate: "visible" } : {})}
            />
          ))}
        </div>
        
        {/* Treść Hero z animacjami */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">          {/* Zawsze wyświetlamy ten sam układ, ale z animacjami tylko po hydratacji */}
          <div className="space-y-6">
            {!isMounted ? (
              <>
                <p className="text-flid-accent font-medium text-lg md:text-xl mb-2">
                  {subtitle}
                </p>
                <h1 className="text-4xl md:text-7xl font-bold text-flid-dark leading-tight">
                  {titleText}
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4">
                  Designing positive change for sustainability through innovation, 
                  research and creative thinking.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <a href="#projects" className="btn btn-primary">
                    Explore Projects
                  </a>
                  <a href="#process" className="btn border-2 border-flid-dark text-flid-dark hover:bg-flid-dark hover:text-white">
                    Our Process
                  </a>
                </div>
              </>
            ) : (
              <m.div
                variants={containerVariants}
                initial="hidden"
                // Używamy statycznych wartości animacji dla większej niezawodności
                animate="visible"
                className="space-y-6"
              >
                <m.p 
                  variants={itemVariants} 
                  className="text-flid-accent font-medium text-lg md:text-xl mb-2"
                >
                  {subtitle}
                </m.p>
                
                <m.h1 
                  className="text-4xl md:text-7xl font-bold text-flid-dark leading-tight"
                >
                  <span className="sr-only">{titleText}</span>
                  <span aria-hidden="true" className="block">
                    {titleChars.map((char, index) => (
                      <m.span
                        key={`char-${index}`}
                        variants={letterVariants}
                        custom={index}
                        initial="hidden"
                        className="inline-block mx-[1px] md:mx-[2px]"
                      >
                        {char === " " ? "\u00A0" : char}
                      </m.span>
                    ))}
                  </span>
                </m.h1>
                
                <m.p 
                  variants={itemVariants} 
                  className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4"
                >
                  Designing positive change for sustainability through innovation, 
                  research and creative thinking.
                </m.p>
                
                <m.div 
                  variants={itemVariants}
                  className="flex flex-wrap justify-center gap-4 pt-4"
                >
                  <m.a
                    href="#projects"
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Projects
                  </m.a>
                  
                  <m.a
                    href="#process"
                    className="btn border-2 border-flid-dark text-flid-dark hover:bg-flid-dark hover:text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Our Process
                  </m.a>
                </m.div>
              </m.div>
            )}
          </div>
        </div>
          {/* Wskaźnik przewijania - pokazuje się tylko po pełnym załadowaniu komponentu */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${!isMounted ? 'opacity-0' : ''}`}>
          {isMounted ? (
            <m.svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: 1,
                y: [0, 8, 0] 
              }}
              transition={{
                opacity: { duration: 0.6, delay: 1.6 },
                y: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                  delay: 1.6
                }
              }}
            >
              <path 
                d="M20 5V35M20 35L10 25M20 35L30 25" 
                stroke="#2A2A42" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </m.svg>
          ) : (
            <svg 
              width="40" 
              height="40" 
              viewBox="0 0 40 40" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-0"
            >
              <path 
                d="M20 5V35M20 35L10 25M20 35L30 25" 
                stroke="#2A2A42" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
    </LazyMotion>
  );
};

export default HeroOptimized;
