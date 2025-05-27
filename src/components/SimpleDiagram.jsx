// SimpleDiagram.jsx - Uproszczony komponent diagramu procesu bez dodatkowych elementów

import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { DesignProcessDiagramSVG } from './DiagramProces';

// Styled container to properly size and position the diagram
const DiagramContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  
  /* Override internal styles of the diagram to fit in our layout */
  .flex {
    width: 100% !important;
    height: 100% !important;
  }
  
  svg {
    max-width: 100%;
    max-height: 100%;
  }
`;

// This component renders only the SVG diagram part of the DiagramProces component,
// without the description panel or controls, for use in simpler layouts
const SimpleDiagram = () => {
  // State for re-triggering animations
  const [animationKey, setAnimationKey] = useState(0);
  // Using fixed preset and speed for simplicity
  const selectedPresetKey = 'dynamicEntry';
  const speedMultiplier = 1;
  // Looping is always active
  const isLoopingActive = true;
  // State for the currently highlighted section
  const [activePhase, setActivePhase] = useState('s2'); // Default to 'empatia'
  
  // Required for the diagram to work
  const initialStates = {
    path: { pathLength: 0, opacity: 0 },
    circle: { scale: 0, opacity: 0 },
    dot: { scale: 0, opacity: 0 },
    text: { opacity: 0, y: 20 },
    trianglePath: { pathLength: 0, opacity: 0 },
    triangleGroup: { scale: 0.5, opacity: 0, rotateY: 180 },
    markerGroup: { opacity: 0, scaleY: 0 },
    generic: { opacity: 0, scale: 0, filter: "blur(4px)" }
  };

  // Handler for when the highlighted section changes
  const handleHighlightChange = useCallback((sectionId) => {
    setActivePhase(sectionId);
  }, []);
  
  // Animation presets required for the SVG
  const animationPresets = {
    dynamicEntry: {
      name: "Dynamiczne Wejście",
      intro: {
        path: (i, speed = 1) => ({ 
          pathLength: 1, 
          opacity: 1, 
          transition: { 
            duration: 0.8 * speed, 
            ease: "easeInOut", 
            delay: (0.1 + i * 0.1) * speed 
          } 
        }),
        generic: (i, speed = 1) => ({ 
          opacity: 1, 
          scale: 1, 
          transition: { 
            duration: 0.4 * speed, 
            ease: [0.6, -0.05, 0.01, 0.99], 
            delay: (0.4 + i * 0.08) * speed 
          } 
        }),
        text: (i, speed = 1) => ({ 
          opacity: 1, 
          y:0, 
          transition: { 
            duration: 0.5 * speed, 
            ease: "easeOut", 
            delay: (0.9 + i * 0.1) * speed 
          } 
        }),
        drawTriangle: {
          polygon: (speed = 1) => ({ 
            pathLength: 1, 
            opacity: 1, 
            transition: { 
              pathLength: { 
                duration: 0.7 * speed, 
                ease: "easeInOut", 
                delay: 0.5 * speed 
              }, 
              opacity: { 
                duration: 0.01 * speed, 
                delay: 0.5 * speed
              } 
            } 
          }),
          line: (index, speed = 1) => ({ 
            pathLength: 1, 
            opacity: 1, 
            transition: { 
              pathLength: { 
                duration: 0.5 * speed, 
                ease: "easeInOut", 
                delay: (0.8 + index * 0.2) * speed 
              }, 
              opacity: { 
                duration: 0.01 * speed, 
                delay: (0.8 + index * 0.2) * speed 
              } 
            } 
          }),
        },
        triangleGroup: (speed = 1) => ({ 
          opacity: 1, 
          scale: 1, 
          rotateY:0, 
          transition: { 
            duration: 0.5 * speed, 
            ease: "easeOut", 
            delay: 0.3 * speed 
          } 
        })
      },
      loop: {}
    }
  };
  return (
    <div className="w-full" style={{ height: "500px", maxWidth: "500px", margin: "0 auto" }}>
      <AnimatePresence mode="wait">
        <DesignProcessDiagramSVG
          key={animationKey}
          selectedPresetKey={selectedPresetKey}
          isLoopingActive={isLoopingActive}
          speedMultiplier={speedMultiplier}
          animationPresets={animationPresets}
          initialStates={initialStates}
          onHighlightChange={handleHighlightChange}
        />
      </AnimatePresence>
    </div>
  );
};

export default SimpleDiagram;
