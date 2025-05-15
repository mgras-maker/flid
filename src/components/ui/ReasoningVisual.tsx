import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ReasoningVisual = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
  
  useEffect(() => {
    const handleResize = () => {
      const smallScreen = window.innerWidth < 640;
      const mediumScreen = window.innerWidth < 1024;
      
      setIsMobile(smallScreen);
      setIsSmallScreen(mediumScreen);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Background gradient */}
      <motion.div 
        className={`absolute inset-0 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-emerald-600/20 via-green-600/10 to-teal-600/20' 
            : 'bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-teal-500/20'
        } rounded-xl`}
        animate={{ 
          filter: ["blur(10px)", "blur(15px)", "blur(10px)"],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8 
        }}
      />
      {/* Grid pattern */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg width="100%" height="100%" className="opacity-30">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke={isDarkMode ? "#34D399" : "#10B981"} strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Central visualization */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56">
        {/* Thinking process animation */}
        <svg width="100%" height="100%" viewBox="0 0 200 200">
          <motion.g
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: isMobile ? 50 : 40,
              ease: "linear"
            }}
          >
            {/* Outer ring */}            <motion.circle 
              cx="100" 
              cy="100" 
              r={isMobile ? "75" : "80"}
              fill="none" 
              stroke="#10B981" 
              strokeWidth={isMobile ? "1.5" : "2"}
              strokeDasharray="5,5"
              animate={{
                r: isMobile ? ["75", "79", "75"] : ["80", "85", "80"], // Fix: use strings for radius
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            {/* Middle ring */}            <motion.circle 
              cx="100" 
              cy="100" 
              r={isMobile ? "55" : "60"}
              fill="none" 
              stroke="#10B981" 
              strokeWidth={isMobile ? "1.5" : "2"}
              animate={{
                r: isMobile ? ["55", "58", "55"] : ["60", "63", "60"], // Fix: use strings for radius
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5
              }}
            />
            
            {/* Inner ring */}            <motion.circle 
              cx="100" 
              cy="100" 
              r="40" 
              fill="none" 
              stroke="#10B981" 
              strokeWidth="2"
              strokeDasharray="3,3"
              animate={{
                r: ["40", "42", "40"], // Fix: use strings for radius
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            />
          </motion.g>
        </svg>
        
        {/* Center element */}
        <motion.div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          } rounded-lg shadow-lg flex items-center justify-center`}
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={isDarkMode ? 'text-green-400' : 'text-green-500'}>
            <polygon points="12 2 20 7 20 17 12 22 4 17 4 7" />
            <line x1="12" y1="22" x2="12" y2="11" />
            <line x1="20" y1="7" x2="12" y2="11" />
            <line x1="4" y1="7" x2="12" y2="11" />
          </svg>
        </motion.div>

        {/* Connected nodes */}
        {Array.from({ length: 5 }).map((_, i) => {
          const angle = (i / 5) * Math.PI * 2;
          const radius = 100;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={i}
              className={`absolute ${isMobile ? 'w-10 h-10' : isSmallScreen ? 'w-11 h-11' : 'w-12 h-12'} ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg flex items-center justify-center`}
              style={{
                left: "50%",
                top: "50%",
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                x,
                y,
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                x: { duration: 20, repeat: Infinity, repeatType: "reverse" },
                y: { duration: 20, repeat: Infinity, repeatType: "reverse" },
                rotate: { 
                  duration: 20, 
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: i * 0.8
                }
              }}
            >
              {/* Different icon for each node */}
              {i === 0 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isDarkMode ? "text-green-400" : "text-green-500"}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              )}
              {i === 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isDarkMode ? "text-green-400" : "text-green-500"}>
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              )}
              {i === 2 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isDarkMode ? "text-green-400" : "text-green-500"}>
                  <path d="M12 20v-6M6 20V10M18 20V4"></path>
                </svg>
              )}
              {i === 3 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isDarkMode ? "text-green-400" : "text-green-500"}>
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" y1="22" x2="12" y2="12"></line>
                </svg>
              )}
              {i === 4 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isDarkMode ? "text-green-400" : "text-green-500"}>
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ReasoningVisual;
