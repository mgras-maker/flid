import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  index: number;
  aspectRatio?: string; // Optional aspect ratio
}

const ProjectCard = ({ title, description, imageUrl, link, aspectRatio, index }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
    // Enhanced variants for sophisticated animations with refined spring physics
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 1,
        delay: index * 0.08, // Subtle staggered appearance
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15,
        mass: 0.8
      }
    }  };return (
    <motion.div 
      className="relative overflow-hidden rounded-xl h-full project-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}      style={{ transformOrigin: "center bottom" }}
      layoutId={`project-card-${index}`}>
      <Link to={link} className="block h-full">
        <div 
          className="relative w-full aspect-ratio-container overflow-hidden" 
          style={aspectRatio ? { 
            paddingTop: aspectRatio === '1/1' ? '100%' : 
                      aspectRatio === '3/4' ? '133.33%' : 
                      aspectRatio === '4/3' ? '75%' : 
                      aspectRatio === '16/9' ? '56.25%' : 
                      aspectRatio === '2/3' ? '150%' : 
                      aspectRatio === '3/2' ? '66.67%' : '75%',
            position: 'relative'
          } : { position: 'relative' }}
        ><motion.div            className="w-full h-full bg-cover bg-center aspect-ratio-img absolute inset-0"
            style={{ 
              backgroundImage: `url(${imageUrl})`,
              filter: isHovered ? 'brightness(1.05) contrast(1.05)' : 'brightness(1) contrast(1)'
            }}
            animate={{ 
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 30,
              mass: 0.8
            }}
            layoutId={`project-image-${index}`}
          /><motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-rgba(0,0,0,0.1) to-rgba(0,0,0,0.7)"
            initial={{ opacity: 0.4 }}
            animate={{ 
              opacity: isHovered ? 0.2 : 0.5,
              background: isHovered 
                ? 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 100%)' 
                : 'linear-gradient(to bottom, rgba(0,0,0,0) 70%, rgba(0,0,0,0.6) 100%)'
            }}
            transition={{ 
              duration: 0.4,
              ease: [0.19, 1.0, 0.22, 1.0] // Smooth easing curve
            }}
          /></div>          <motion.div 
            className="p-5 bg-white dark:bg-gray-800 relative z-10 card-content"
            initial={{ y: 5 }}
            animate={{
              y: isHovered ? 0 : 5,
              boxShadow: isHovered 
                ? '0 10px 30px rgba(0, 0, 0, 0.1)' 
                : '0 5px 15px rgba(0, 0, 0, 0.05)'
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20,
              mass: 0.6
            }}
            layoutId={`project-content-${index}`}
          >            <motion.div 
              className="overflow-hidden"
              animate={{
                height: isHovered ? 'auto' : '4rem',
              }}
              transition={{ 
                type: "spring", 
                stiffness: 500, 
                damping: 30,
                mass: 0.8,
                bounce: 0.1 // Reduce bounce for more professional look
              }}
            >              <motion.h3 
                className="text-lg font-bold text-flid-dark dark:text-white mb-2"
                layout
                layoutId={`project-title-${index}`}
                initial={{ y: 10, opacity: 0.8 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    delay: 0.1 * index, 
                    duration: 0.5,
                    ease: [0.19, 1.0, 0.22, 1.0] // Premium easing
                  }
                }}
              >
                {title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                animate={{
                  opacity: isHovered ? 1 : 0.7,
                }}
                transition={{ duration: 0.3 }}
              >
                {description}
              </motion.p>
            </motion.div>
          </motion.div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
