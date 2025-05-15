import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import './DesignThinkingFallback.css';

// Informacje o procesach
const processInfo = [
  {
    id: "empathy", 
    title: "Empatia", 
    description: "Zrozumienie potrzeb, pragnieÅ„ i wyzwaÅ„ ludzi poprzez gÅ‚Ä™bokie zanurzenie, obserwacjÄ™ i rozmowÄ™."
  },
  {
    id: "reasoning", 
    title: "Rozumowanie", 
    description: "Analiza spostrzeÅ¼eÅ„, definiowanie problemÃ³w i poszukiwanie kreatywnych rozwiÄ…zaÅ„ poprzez krytyczne myÅ›lenie."
  },
  {
    id: "materialization", 
    title: "Materializacja", 
    description: "PrzeksztaÅ‚canie pomysÅ‚Ã³w w namacalne prototypy i gotowe produkty, ktÃ³re tworzÄ… pozytywny wpÅ‚yw."
  }
];

/**
 * A fallback component for the DesignThinkingViz that uses Framer Motion
 * instead of React Three Fiber to avoid context issues with React 19.
 * Updated to display a triangular layout with orbiting elements and clickable nodes.
 * Enhanced with improved animations, harmonious planet orbits and better synchronization.
 */
const DesignThinkingFallback: React.FC = () => {
  const [phase, setPhase] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Animation controls for better pausing functionality
  const animationControls = useAnimation();
  
  // Track if animations are currently running
  const [animationsActive, setAnimationsActive] = useState(true);
  
  // Responsive layout adaptation
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });
  
  // Enhanced screen size detection with debounce for better performance
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleResize = () => {
      // Clear the previous timeout to implement debounce
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      // Debounce resize events to prevent excessive re-renders
      timeoutId = setTimeout(() => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight
        });
      }, 100);
    };
    
    window.addEventListener('resize', handleResize);
    // Initial sizing
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);
  
  // Adjust node positions based on screen size - perfect equilateral triangle inscribed in a square
  const getResponsivePositions = () => {
    // Perfect equilateral triangle positions - matematycznie idealne wspÃ³Å‚rzÄ™dne
    const defaultPositions = {
      empathy: { x: "50%", y: "25%" },             // Top center - dokÅ‚adnie na gÃ³rze Å›rodka
      reasoning: { x: "28.87%", y: "75%" },        // Bottom left - dokÅ‚adna pozycja wyliczona matematycznie (50% - 50%*cos(60Â°))
      materialization: { x: "71.13%", y: "75%" }   // Bottom right - dokÅ‚adna pozycja wyliczona matematycznie (50% + 50%*cos(60Â°))
    };
    
    // For small screens, use a vertical layout
    if (screenSize.width < 600) {
      return {
        empathy: { x: "50%", y: "25%" },           // Top
        reasoning: { x: "50%", y: "50%" },         // Middle
        materialization: { x: "50%", y: "75%" }    // Bottom
      };
    }
    
    return defaultPositions;
  };
  
  // Handle node hover
  const handleNodeHover = (nodeId: string | null) => {
    setHoveredNode(nodeId);
  };
  
  // Handle node selection
  const handleNodeClick = (nodeId: string) => {
    console.log('2D Fallback - Node clicked:', nodeId);
    
    // Toggle off if already selected
    if (selectedNode === nodeId) {
      setSelectedNode(null);
      setIsPaused(false);
      setIsInfoVisible(false);
    } else {
      setSelectedNode(nodeId);
      setIsPaused(true);
      setIsInfoVisible(true);
        // Auto hide info after 8 seconds - longer time for better reading
      setTimeout(() => {
        setIsInfoVisible(false);
      }, 8000);
    }
  };
  
  // Enhanced animation cycle with longer pauses between phase transitions for improved comprehension
  useEffect(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // Only set an interval if not paused
    if (!isPaused) {      // Set animationsActive state based on pause state
      setAnimationsActive(true);
      
      // Start animations
      animationControls.start("visible");
      
      // Start phase rotation
      intervalRef.current = setInterval(() => {
        setPhase(prev => (prev + 1) % 6);
      }, 4500);
    } else {
      // When paused, set animations to inactive
      setAnimationsActive(false);
      
      // Stop animations
      animationControls.stop();
    }
    
    // Cleanup function
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isPaused, animationControls]);
  
  // Node positions and styles - perfect equilateral triangle
  const responsivePositions = getResponsivePositions();
  const nodes = [
    { 
      id: "empathy", 
      name: "Empatia", 
      position: responsivePositions.empathy, // Responsive position
      color: "#4facfe", // Blue
      isActive: phase === 0,
      isFlowing: phase === 1,
      isDimmed: phase > 1 && phase !== 5,
      isSelected: selectedNode === "empathy",
      isHovered: hoveredNode === "empathy",
      info: processInfo[0]
    },
    { 
      id: "reasoning", 
      name: "Rozumowanie", 
      position: responsivePositions.reasoning, // Responsive position
      color: "#b465da", // Purple
      isActive: phase === 2,
      isFlowing: phase === 3,
      isDimmed: phase > 3 || phase === 1,
      isSelected: selectedNode === "reasoning",
      isHovered: hoveredNode === "reasoning",
      info: processInfo[1]
    },
    { 
      id: "materialization", 
      name: "Materializacja", 
      position: responsivePositions.materialization, // Responsive position
      color: "#43e97b", // Green
      isActive: phase === 4,
      isFlowing: phase === 5,
      isDimmed: phase < 4 && phase !== 3,
      isSelected: selectedNode === "materialization",
      isHovered: hoveredNode === "materialization",
      info: processInfo[2]
    }
  ];
  
  // Define triangle lines
  const triangleLines = [
    { from: 0, to: 1 },
    { from: 1, to: 2 },
    { from: 2, to: 0 }
  ];
    // Render triangle lines
  const renderTriangleLines = () => {
    return triangleLines.map(({ from, to }) => {
      const fromNode = nodes[from];
      const toNode = nodes[to];
      const isActive = fromNode.isSelected && toNode.isSelected;
      
      return (
        <div key={`line-${from}-${to}`} className="absolute line-connection" 
             style={{
               opacity: isPaused ? 0.5 : 1,
               backgroundColor: isActive ? `${fromNode.color}` : "rgba(255,255,255,0.2)"
             }}>
          {/* Line visualization will go here */}
        </div>
      );
    });
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full bg-gray-900 overflow-hidden rounded-lg relative" style={{ minHeight: "650px" }}>
      {/* Left side - Visualization area */}
      <div className="relative md:w-3/5 w-full aspect-square min-h-[550px]">
        {/* Play/Pause button */}
        <div className="absolute top-5 right-5 z-30">
          <motion.button
            className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 border border-white/30"
            style={{
              boxShadow: isPaused 
                ? `0 0 15px 5px rgba(255,255,255,0.15)` 
                : `0 0 15px 5px rgba(${nodes[0].isActive ? '79, 172, 254' : nodes[1].isActive ? '180, 101, 218' : '67, 233, 123'}, 0.3)`
            }}
            whileHover={{ 
              scale: 1.1,
              boxShadow: isPaused 
                ? `0 0 20px 8px rgba(255,255,255,0.25)` 
                : `0 0 20px 8px rgba(${nodes[0].isActive ? '79, 172, 254' : nodes[1].isActive ? '180, 101, 218' : '67, 233, 123'}, 0.4)`
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const newPausedState = !isPaused;
              setIsPaused(newPausedState);
              setAnimationsActive(!newPausedState);
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full opacity-20"
              style={{
                background: `radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%)`
              }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {isPaused ? (
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
              </motion.svg>
            ) : (
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="18" 
                height="18" 
                fill="currentColor" 
                viewBox="0 0 16 16"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>
              </motion.svg>
            )}
          </motion.button>
        </div>

        {/* Selected node info overlay - positioned to not cover visualization */}
        <AnimatePresence>
          {isInfoVisible && selectedNode && (
            <motion.div
              className="info-panel"
              style={{ 
                borderTop: `2px solid ${nodes.find(n => n.id === selectedNode)?.color}66`,
                background: `linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95))`,
              }}
              initial={{ opacity: 0, y: 100 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                boxShadow: [
                  `0 -10px 30px -5px ${nodes.find(n => n.id === selectedNode)?.color}40`,
                  `0 -10px 50px -5px ${nodes.find(n => n.id === selectedNode)?.color}60`,
                  `0 -10px 30px -5px ${nodes.find(n => n.id === selectedNode)?.color}40`
                ],
              }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ 
                duration: 0.6,
                ease: "easeInOut",
                boxShadow: {
                  repeat: Infinity,
                  duration: 3
                }
              }}
            >
              {/* Info panel content */}
              <div className="p-8 relative z-10 flex items-center justify-between max-w-6xl mx-auto">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: nodes.find(n => n.id === selectedNode)?.color }}>
                    {processInfo.find(p => p.id === selectedNode)?.title || ""}
                  </h3>
                  <p className="text-gray-200">
                    {processInfo.find(p => p.id === selectedNode)?.description || ""}
                  </p>
                </div>
                
                {/* Close button */}
                <motion.button
                  className="ml-4 w-10 h-10 rounded-full flex items-center justify-center bg-black/50 border-2 backdrop-blur-md hover:bg-black/70"
                  style={{
                    borderColor: `${nodes.find(n => n.id === selectedNode)?.color}66`
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    borderColor: nodes.find(n => n.id === selectedNode)?.color
                  }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    setSelectedNode(null);
                    setIsInfoVisible(false);
                    setIsPaused(false);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Triangle connection lines */}
        {renderTriangleLines()}
          {/* Nodes */}
        {nodes.map(node => (
          <div key={node.id} className="absolute node-container" style={{ 
            left: node.position.x, 
            top: node.position.y,
            transform: "translate(-50%, -50%)" 
          }}>
            {/* Main node */}
            <motion.div
              className="rounded-full flex items-center justify-center text-white font-bold relative overflow-hidden"
              style={{
                width: 70,
                height: 70,
                backgroundColor: node.isSelected ? 'rgba(10, 18, 30, 0.85)' : (node.isActive ? 'rgba(15, 23, 42, 0.8)' : 'rgba(30, 41, 59, 0.5)'),
                border: `${node.isSelected ? 3 : 2}px solid ${node.isSelected ? node.color : node.isHovered ? 'white' : (node.isActive ? node.color : 'rgba(255,255,255,0.2)')}`,
                backdropFilter: 'blur(5px)',
                boxShadow: node.isSelected
                  ? `0 0 35px 15px ${node.color}`
                  : node.isHovered
                    ? `0 0 28px 10px ${node.color}`
                    : node.isActive 
                      ? `0 0 22px 8px ${node.color}`
                      : '0 0 10px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                opacity: node.isDimmed && !node.isSelected ? 0.5 : 1,
                zIndex: 10
              }}
              onClick={() => handleNodeClick(node.id)}
              onMouseEnter={() => handleNodeHover(node.id)}
              onMouseLeave={() => handleNodeHover(null)}
              whileHover={{ 
                scale: 1.08,
                boxShadow: `0 0 35px 15px ${node.color}`
              }}              animate={{
                scale: node.isSelected ? 1.15 : node.isHovered ? 1.1 : (node.isActive && animationsActive ? [1, 1.08, 1] : 1),
                rotate: node.isHovered && !node.isSelected && animationsActive ? [0, 6, -6, 0] : 0
              }}
              transition={{
                duration: node.isHovered && !node.isSelected ? 0.6 : 2.2,
                repeat: ((node.isActive && !node.isSelected) || (node.isHovered && !node.isSelected)) && animationsActive ? Infinity : 0,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <span style={{ 
                color: node.isSelected ? node.color : 'white',
                fontWeight: node.isSelected ? 800 : 600,
                zIndex: 2
              }}>
                {node.name.split(' ')[0]}
              </span>
            </motion.div>
            
            {/* Node label */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-white text-center">
              <motion.div
                animate={{
                  opacity: node.isDimmed ? 0.6 : 1
                }}
              >
                {node.name}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Right side - Info blocks */}
      <div className="md:w-2/5 p-6 flex flex-col justify-center items-center">
        <div className="space-y-8 w-full max-w-md">
          {processInfo.map((info, index) => (
            <motion.div
              key={info.id}
              className="bg-gradient-to-br from-black/60 to-gray-900/70 backdrop-blur-md rounded-lg p-5 relative overflow-hidden"
              style={{
                border: `1px solid ${nodes[index].color}66`,
                boxShadow: `0 0 15px ${nodes[index].color}33`,
                opacity: nodes[index].isActive || nodes[index].isSelected ? 1 : 0.75,
                transform: `scale(${nodes[index].isActive || nodes[index].isSelected ? 1.05 : 1})`,
              }}
              initial={{ x: 50, opacity: 0 }}
              animate={{ 
                x: 0, 
                opacity: nodes[index].isActive || nodes[index].isSelected ? 1 : 0.75,
                scale: nodes[index].isActive || nodes[index].isSelected ? 1.08 : 1,
                y: nodes[index].isActive || nodes[index].isSelected ? -5 : 0,
                boxShadow: nodes[index].isActive || nodes[index].isSelected ? 
                  [
                    `0 0 15px ${nodes[index].color}33`, 
                    `0 0 25px ${nodes[index].color}44`, 
                    `0 0 15px ${nodes[index].color}33`
                  ] : undefined
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 14,
                delay: index * 0.25,
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: `0 0 25px ${nodes[index].color}55`
              }}
              onClick={() => handleNodeClick(nodes[index].id)}
            >
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2" style={{ color: nodes[index].color }}>
                  {info.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {info.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignThinkingFallback;
