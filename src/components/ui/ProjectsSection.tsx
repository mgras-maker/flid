import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard.tsx';
import { useDelayedAnimation } from '../../hooks/useDelayedAnimation.ts';
import { projectCardsData } from '../../data/projectCardsData.ts';



const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  // Use our new hook to delay animations until after initial render
  const shouldAnimate = useDelayedAnimation(300);
  
  // References and effects for parallax scrolling
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
    // Create parallax effects with different speeds  
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  // Intersection observer to trigger animations when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById('projects-section');
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  // Container animation with enhanced staggering effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Subtle stagger
        delayChildren: 0.2,
        ease: "easeOut",
        duration: 0.6
      }
    }
  };
  
  // Title animation variants for more professional look
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.8
      }
    }
  };    return (    <div className="relative overflow-hidden">      <section 
        id="projects-section" 
        className="section bg-gray-50 dark:bg-gray-900 pt-36 pb-12 full-width-section relative"
        ref={sectionRef}
      >
      <div className="container-extra-wide">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial="hidden"
          animate={shouldAnimate && isVisible ? "visible" : "hidden"}
          variants={titleVariants}
          style={{ y: titleY }} // Apply parallax effect to title
        >
          <motion.h2 
            className="text-4xl md:text-7xl font-bold text-flid-dark dark:text-white mb-6 relative"
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  type: "spring", 
                  damping: 12, 
                  stiffness: 100 
                }
              }
            }}
          >
            <span className="relative z-10 inline-block">
              Our Projects
              <motion.span 
                className="absolute -bottom-2 left-0 right-0 h-3 bg-flid-accent opacity-30 transform -rotate-1"
                variants={{
                  hidden: { scaleX: 0 },
                  visible: { 
                    scaleX: 1, 
                    transition: { 
                      delay: 0.2, 
                      duration: 0.6, 
                      ease: "easeOut" 
                    } 
                  }
                }}
                style={{ originX: 0 }}
              ></motion.span>
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { 
                  delay: 0.3,
                  duration: 0.5 
                } 
              }
            }}
          >
            Explore our portfolio of innovative design projects that create positive change 
            for communities and environments.          </motion.p>
        </motion.div>
        
        <motion.div
          className="projects-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          animate={shouldAnimate && isVisible ? "visible" : "hidden"}
          style={{ y: contentY }} // Apply parallax effect to content
        >
          {projectCardsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              link={project.link}
              aspectRatio={project.aspectRatio}
              index={index}
            />
          ))}
        </motion.div>          <motion.div
          className="text-center mt-10"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: 0.5, 
                duration: 0.6,
                type: "spring",
                stiffness: 80,
                damping: 12
              } 
            }
          }}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          style={{ 
            y: useTransform(scrollYProgress, [0, 1], [0, -30]) // Parallax effect for button
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/projects"
              className="btn btn-primary inline-flex items-center px-8 py-3 rounded-lg"
            >
              <span>View All Projects</span>
              <motion.svg 
                className="ml-2 h-5 w-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                whileHover={{ x: 3, transition: { repeat: Infinity, repeatType: "mirror", duration: 0.6 } }}
              >
                <path 
                  strokeLinecap="round"
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />              </motion.svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </div>
  );
};

export default ProjectsSection;
