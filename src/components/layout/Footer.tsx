import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Character variants for staggered text animation
const charVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  },
  hover: {
    y: -5,
    color: "#D2CDE8",
    transition: { 
      type: "spring", 
      stiffness: 500, 
      damping: 10 
    }
  }
};

// Container animation variant for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  hover: { 
    transition: { 
      staggerChildren: 0.05
    }
  }
};

// Link item animation
const linkItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 20 
    } 
  }
};

// Social icon animation
const socialIconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20
    }
  },
  hover: {
    y: -5,
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Detect dark mode preference from system or document
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };
    
    // Initial check
    setIsDarkMode(mediaQuery.matches || document.documentElement.classList.contains('dark'));
    
    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white py-16 relative overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">            
            <Link to="/" className="inline-block mb-6 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-flid-accent focus:rounded-sm">
              <motion.div 
                className="flex items-center justify-start h-12"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={containerVariants}
                aria-label="FLID animated logo"
              >                {/* Animated FLID letters - hacker style */}                {"FLID".split("").map((char, index) => {
                  return (
                    <motion.div
                      key={index}
                      variants={charVariants}
                      className="text-4xl font-bold select-none relative overflow-hidden mx-[1px]"
                      style={{ display: "inline-block" }}
                    >
                      {/* Main character */}
                      <motion.span
                        style={{ 
                          display: "inline-block",
                          color: isDarkMode ? '#ffffff' : '#2A2A42'
                        }}
                        animate={{
                          color: [
                            isDarkMode ? '#ffffff' : '#2A2A42',
                            isDarkMode ? '#9A8CE0' : '#8B7DD1',
                            isDarkMode ? '#ffffff' : '#2A2A42'
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatType: "reverse",
                          delay: index * 0.2
                        }}
                      >
                        {char}
                      </motion.span>                      {/* Designer-style glitch effect - subtle chromatic aberration */}
                      <motion.span 
                        className="absolute left-0 top-0 w-full text-flid-accent/70 mix-blend-overlay"
                        animate={{ 
                          opacity: [0, 0.5, 0],
                          x: [-1, 0, 1],
                          scale: [0.98, 1, 0.99]
                        }}
                        transition={{ 
                          duration: 2.5, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          repeatDelay: Math.random() * 3 + index
                        }}
                      >
                        {char}
                      </motion.span>
                      
                      {/* Elegant design split effect */}
                      <motion.span 
                        className="absolute left-0 top-0 w-full"
                        style={{
                          color: isDarkMode ? 'rgba(154, 140, 224, 0.6)' : 'rgba(139, 125, 209, 0.6)',
                          mixBlendMode: 'difference'
                        }}
                        animate={{ 
                          x: [1, -1, 0],
                          y: [0, 1, 0],
                          opacity: [0, 0.7, 0]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          repeatDelay: 2 + index * 0.5
                        }}
                      >
                        {char}
                      </motion.span>                      {/* Designer accent line effect */}
                      <motion.div 
                        className="absolute h-[1px] left-0 opacity-0"
                        style={{
                          background: isDarkMode ? 
                            'linear-gradient(90deg, transparent, rgba(154, 140, 224, 0.8), transparent)' : 
                            'linear-gradient(90deg, transparent, rgba(139, 125, 209, 0.6), transparent)',
                          width: '120%',
                          left: '-10%'
                        }}
                        animate={{ 
                          opacity: [0, 0.6, 0],
                          top: ["30%", "70%"]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatDelay: 4 + index * 1.5,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
              Foundation People-Innovations-Design<br />
              <span className="font-light italic">Balance through design</span><br />
              Designing positive change for sustainability
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-flid-accent after:bottom-0 after:left-0 pb-2">Links</h3>
            <motion.ul 
              className="space-y-3"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {['About', 'Projects', 'Process', 'Contact'].map((item, index) => (
                <motion.li 
                  key={item}
                  variants={linkItemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link 
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-flid-accent dark:hover:text-flid-accent transition-colors flex items-center"
                  >
                    <svg className="w-3 h-3 mr-2 opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-flid-accent after:bottom-0 after:left-0 pb-2">Projects</h3>
            <motion.ul 
              className="space-y-3"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              {[
                'Project Arting',
                'Bee Hall',
                'Beskidzka Bench',
                'BB__Design Lab',
                'Energy of Tomorrow'
              ].map((item, index) => (
                <motion.li 
                  key={item}
                  variants={linkItemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link 
                    to={`/projects/${item.toLowerCase().replace(/ /g, '-')}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-flid-accent dark:hover:text-flid-accent transition-colors flex items-center"
                  >
                    <svg className="w-3 h-3 mr-2 opacity-70" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-0.5 after:bg-flid-accent after:bottom-0 after:left-0 pb-2">Contact</h3>
            <address className="not-italic text-gray-600 dark:text-gray-300">
              <motion.div 
                className="space-y-3"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <motion.p variants={linkItemVariants} className="mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-flid-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2a1 1 0 011-1h8a1 1 0 011 1z" clipRule="evenodd" />
                  </svg>
                  <span>FLID Foundation</span>
                </motion.p>
                <motion.p variants={linkItemVariants} className="mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-flid-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:info@flid.pl" className="hover:text-flid-accent transition-colors">info@flid.pl</a>
                </motion.p>
                
                {/* Social media icons moved under contact section */}
                <motion.div
                  className="flex space-x-4 mt-6"
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  {['facebook', 'instagram', 'linkedin'].map((platform) => (
                    <motion.a
                      key={platform}
                      href={`https://${platform}.com/flid`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 bg-gradient-to-br from-flid-accent to-flid-accent/80 rounded-full flex items-center justify-center text-white shadow-sm hover:shadow-md"
                      whileHover="hover"
                      variants={socialIconVariants}
                      aria-label={`FLID on ${platform}`}
                    >
                      <span className="sr-only">FLID on {platform}</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        {platform === 'facebook' && (
                          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                        )}
                        {platform === 'instagram' && (
                          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.509-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.66.598-1.216 1.153-1.772.5-.509 1.105-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                        )}
                        {platform === 'linkedin' && (
                          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        )}
                      </svg>
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </address>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-500 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.5 }}
            className="font-light"
          >
            © {currentYear} FLID Foundation. All rights reserved.
          </motion.p>
          <motion.div 
            className="mt-4 md:mt-0 flex space-x-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            <Link to="/privacy-policy" className="hover:text-flid-accent transition-colors text-gray-500 dark:text-gray-400">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-flid-accent transition-colors text-gray-500 dark:text-gray-400">Terms of Service</Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
