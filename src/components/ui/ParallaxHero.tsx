import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxHeroProps {
  title: string;
  highlightedText?: string;
  description?: string;
  backgroundImage?: string;
  height?: string;
}

const ParallaxHero = ({
  title,
  highlightedText,
  description,
  backgroundImage = '/public/projects/eco-packaging.jpg',
  height = '500px'
}: ParallaxHeroProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If not mounted yet, render with initial values to prevent hydration mismatch
  if (!isMounted) {
    return (
      <div 
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-white text-center p-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            {title} {highlightedText && <span className="text-flid-accent">{highlightedText}</span>}
          </h1>
          {description && <p className="text-xl max-w-3xl mx-auto">{description}</p>}
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height }}
    >
      <motion.div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          y
        }}
      />
      <div className="absolute inset-0 bg-black/50 z-10" />
      <motion.div 
        className="relative z-20 text-white text-center p-8"
        style={{ opacity }}
      >
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {title} {highlightedText && <span className="text-flid-accent">{highlightedText}</span>}
        </motion.h1>
        {description && (
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default ParallaxHero;
