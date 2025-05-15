/**
 * This file contains fixes for the DesignThinkingFallback component that need to be applied.
 * The component has two main issues:
 * 1. The play/pause button doesn't properly pause all animations
 * 2. The info panel covers part of the triangle visualization
 * 
 * INSTRUCTIONS FOR IMPLEMENTING THE FIXES:
 */

// STEP 1: Add this CSS file to your project
// Create: src/components/ui/DesignThinkingFallback.css
`
/* Control animation states for flow particles */
.flow-particle.paused {
  animation-play-state: paused !important;
}

/* Info Panel positioning */
.info-panel {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(16px);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.3);
  border-top: 2px solid rgba(255, 255, 255, 0.4);
}

@media (min-width: 768px) {
  .info-panel {
    left: auto;
    right: 0;
    width: 40%;
    max-height: 85vh;
    overflow-y: auto;
  }
}
`

// STEP 2: Import the CSS at the top of the DesignThinkingFallback.tsx file
`
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import './DesignThinkingFallback.css';
`

// STEP 3: Fix the play/pause button onClick handler (find the play/pause button in the component)
`
// Within the component's JSX where the play/pause button is defined:
<motion.button
  className="flex items-center justify-center w-12 h-12 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-black/60 border border-white/30"
  style={{
    boxShadow: isPaused 
      ? \`0 0 15px 5px rgba(255,255,255,0.15)\` 
      : \`0 0 15px 5px rgba(\${nodes[0].isActive ? '79, 172, 254' : nodes[1].isActive ? '180, 101, 218' : '67, 233, 123'}, 0.3)\`
  }}
  whileHover={{ 
    scale: 1.1,
    boxShadow: isPaused 
      ? \`0 0 20px 8px rgba(255,255,255,0.25)\` 
      : \`0 0 20px 8px rgba(\${nodes[0].isActive ? '79, 172, 254' : nodes[1].isActive ? '180, 101, 218' : '67, 233, 123'}, 0.4)\`
  }}
  whileTap={{ scale: 0.95 }}
  onClick={() => {
    const newPausedState = !isPaused;
    setIsPaused(newPausedState);
    setAnimationsActive(!newPausedState);
  }}
>
  {...} <!-- Button content doesn't change -->
</motion.button>
`

// STEP 4: Fix the useEffect hook for animation control
`
// Replace the useEffect that controls animations:
useEffect(() => {
  // Clear any existing interval first
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  
  // Only set an interval if not paused
  if (!isPaused) {
    // Set animationsActive state based on pause state
    setAnimationsActive(true);
    
    // Start animations
    animationControls.start();
    
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
`

// STEP 5: Update energy particle components to use the animationsActive state
`
// In the renderEnergyFlow function where particles are created, add the 'flow-particle' class
// and conditionally add the 'paused' class based on animation state:

<motion.div
  key={\`energy-\${fromIndex}-\${toIndex}-\${i}\`}
  className={\`absolute \${particleType.shape} bg-white overflow-hidden flow-particle \${!animationsActive ? 'paused' : ''}\`}
  style={{
    // ... existing styles
  }}
  animate={{
    // ... existing animation
  }}
  transition={{
    // ... Make sure animations respect the animationsActive state
    duration: speed,
    delay: delay,
    repeat: animationsActive ? Infinity : 0,
    ease: enhancedParticles ? "easeInOut" : "linear",
  }}
/>
`

// STEP 6: Update the info panel to use the CSS class instead of inline styles
`
// Find where the info panel is rendered and replace:
{isInfoVisible && selectedNode && (
  <motion.div
    className="info-panel"
    style={{ 
      // Keep any remaining styles that aren't covered by the CSS
      borderTop: \`2px solid \${nodes.find(n => n.id === selectedNode)?.color}66\`,
      background: \`linear-gradient(to bottom, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95))\`,
    }}
    initial={{ opacity: 0, y: 100 }}
    animate={{ 
      opacity: 1, 
      y: 0,
      boxShadow: [
        \`0 -10px 30px -5px \${nodes.find(n => n.id === selectedNode)?.color}40\`,
        \`0 -10px 50px -5px \${nodes.find(n => n.id === selectedNode)?.color}60\`,
        \`0 -10px 30px -5px \${nodes.find(n => n.id === selectedNode)?.color}40\`
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
  </motion.div>
)}
`
