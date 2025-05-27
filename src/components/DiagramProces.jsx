// Nazwa pliku: DiagramProces.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Helper to calculate a point on a circle
// Pomocnicza funkcja do obliczania punktu na okręgu
const pointOnCircle = (center, radius, angleDegrees) => {
  // Convert degrees to radians and adjust so 0 degrees is at the top
  const radians = (angleDegrees - 90) * Math.PI / 180; // Adjusting so 0 is top (Dostosowanie, aby 0 było na górze)
  return {
    x: center + radius * Math.cos(radians), // Calculate x-coordinate
    y: center + radius * Math.sin(radians), // Calculate y-coordinate
  };
};

// --- Animation Preset Definitions ---
// --- Definicje Presetów Animacji ---
const animationPresets = {
  dynamicEntry: {
    name: "Dynamiczne Wejście", // Dynamic Entry
    intro: {
      // Animation for paths: controls pathLength and opacity
      path: (i, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { duration: 0.8 * speed, ease: "easeInOut", delay: (0.1 + i * 0.1) * speed } }),
      // Generic animation for elements: controls opacity and scale
      generic: (i, speed = 1) => ({ opacity: 1, scale: 1, transition: { duration: 0.4 * speed, ease: [0.6, -0.05, 0.01, 0.99], delay: (0.4 + i * 0.08) * speed } }),
      // Animation for text elements: controls opacity and y-position
      text: (i, speed = 1) => ({ opacity: 1, y:0, transition: { duration: 0.5 * speed, ease: "easeOut", delay: (0.9 + i * 0.1) * speed } }),
      // Animation for triangle drawing
      drawTriangle: {
        // Animation for the outer triangle polygon: controls pathLength and opacity
        polygon: (speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 0.7 * speed, ease: "easeInOut", delay: 0.5 * speed }, opacity: { duration: 0.01 * speed, delay: 0.5 * speed} } }),
        // Animation for the inner triangle lines: controls pathLength and opacity with index-based delay
        line: (index, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 0.5 * speed, ease: "easeInOut", delay: (0.8 + index * 0.2) * speed }, opacity: { duration: 0.01 * speed, delay: (0.8 + index * 0.2) * speed } } }),
      },
       // Animation for the overall triangle group (scale, rotation etc.)
      triangleGroup: (speed = 1) => ({ opacity: 1, scale: 1, rotateY:0, transition: { duration: 0.5 * speed, ease: "easeOut", delay: 0.3 * speed } })
    },
    // Loop animations are not used for the triangle in this new setup, handled by highlight effect
    loop: {}
  },
  springPop: {
    name: "Sprężyste Pojawienie", // Springy Appearance
    intro: {
      // Spring animation for paths: controls scale and opacity
      path: (i, speed = 1) => ({ scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20, delay: (0.1 + i * 0.05) * speed } }),
      // Spring animation for generic elements: controls opacity and scale
      generic: (i, speed = 1) => ({ opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: (0.3 + i * 0.07) * speed } }),
      // Spring animation for text elements: controls opacity and y-position
      text: (i, speed = 1) => ({ opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 10, delay: (0.6 + i * 0.05) * speed } }),
      // Spring animation for triangle drawing
      drawTriangle: {
        // Spring animation for outer triangle polygon
        polygon: (speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { type: "spring", stiffness: 200, damping:15, duration: 0.6 * speed, delay: 0.4 * speed }, opacity: { duration: 0.01 * speed, delay: 0.4 * speed} } }),
        // Spring animation for inner triangle lines
        line: (index, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { type: "spring", stiffness:150, damping:10, duration: 0.4 * speed, delay: (0.7 + index * 0.15) * speed }, opacity: { duration: 0.01 * speed, delay: (0.7 + index * 0.15) * speed } } }),
      },
      // Spring animation for overall triangle group
      triangleGroup: (speed = 1) => ({ opacity: 1, scale: 1, transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.2 * speed } })
    },
    loop: {}
  },
  smoothUnfold: {
    name: "Płynne Odsłanianie", // Smooth Unfolding
    intro: {
      // Smooth animation for paths: controls pathLength and opacity
      path: (i, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { duration: 1.2 * speed, ease: "circOut", delay: (0.2 + i * 0.15) * speed } }),
      // Smooth animation for generic elements: controls opacity, blur, and y-position
      generic: (i, speed = 1) => ({ opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8 * speed, ease: "easeOut", delay: (0.5 + i * 0.1) * speed } }),
      // Smooth animation for text elements: controls opacity and y-position
      text: (i, speed = 1) => ({ opacity: 1, y: 0, transition: { duration: 0.7 * speed, ease: "easeOut", delay: (1.1 + i * 0.1) * speed } }),
       // Smooth animation for triangle drawing
      drawTriangle: {
        // Smooth animation for outer triangle polygon
        polygon: (speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 1.0 * speed, ease: "circOut", delay: 0.6 * speed }, opacity: { duration: 0.01 * speed, delay: 0.6 * speed} } }),
        // Smooth animation for inner triangle lines
        line: (index, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 0.7 * speed, ease: "circOut", delay: (1.1 + index * 0.2) * speed }, opacity: { duration: 0.01 * speed, delay: (1.1 + index * 0.2) * speed } } }),
      },
      // Smooth animation for overall triangle group
      triangleGroup: (speed = 1) => ({ opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.0 * speed, ease: "circOut", delay: 0.4 * speed }})
    },
    loop: {}
  },
  blueprintReveal: {
    name: "Odsłanianie Rysunku Tech.", // Blueprint Reveal
    intro: {
      // Blueprint-style animation for paths: controls pathLength and opacity
      path: (i, speed = 1) => ({ pathLength: 1, opacity: [0.5, 1], transition: { duration: 0.7 * speed, ease: "circIn", delay: (0.1 + i * 0.2) * speed } }),
      // Animation for marker groups: controls opacity and y-scale
      markerGroup: (i, speed = 1) => ({ opacity: 1, scaleY: 1, transition: { duration: 0.5 * speed, ease: "easeOut", delay: (0.6 + i * 0.1) * speed } }),
      // Animation for dots: controls opacity and scale
      dot: (i, speed = 1) => ({ opacity: 1, scale: 1, transition: { duration: 0.4 * speed, ease: "backOut", delay: (0.5 + i * 0.1) * speed } }),
      // Animation for text elements: controls opacity and y-position
      text: (i, speed = 1) => ({ opacity: 1, y: 0, transition: { duration: 0.6 * speed, ease: "easeOut", delay: (1.0 + i * 0.08) * speed } }),
      // Blueprint animation for triangle drawing
      drawTriangle: {
        // Blueprint animation for outer triangle polygon
        polygon: (speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 0.8 * speed, ease: "easeInOut", delay: 0.7 * speed }, opacity: { duration: 0.01 * speed, delay: 0.7 * speed} } }),
        // Blueprint animation for inner triangle lines
        line: (index, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 0.6 * speed, ease: "easeInOut", delay: (1.2 + index * 0.2) * speed }, opacity: { duration: 0.01 * speed, delay: (1.2 + index * 0.2) * speed } } }),
      },
      // Blueprint animation for overall triangle group
      triangleGroup: (speed = 1) => ({ opacity: 1, scale: 1, transition: { duration: 0.8 * speed, ease: "easeInOut", delay: 0.5 * speed }})
    },
    loop: {}
  },
  circuitTrace: {
    name: "Śledzenie Obwodu", // Circuit Tracing
    intro: {
      // Circuit-style animation for paths: controls pathLength and opacity
      path: (i, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { duration: 0.3 * speed, ease: "linear", delay: (0.1 + i * 0.05) * speed } }),
      // Animation for marker groups: controls opacity and x-scale
      markerGroup: (i, speed = 1) => ({ opacity: 1, scaleX: 1, transition: { duration: 0.3 * speed, ease: "linear", delay: (0.4 + i * 0.05) * speed } }),
      // Animation for dots: controls opacity and scale with multiple keyframes
      dot: (i, speed = 1) => ({ opacity: [0, 1, 0.7, 1], scale: [0.5, 1.2, 1], transition: { duration: 0.4 * speed, times:[0, 0.2, 0.6, 1], delay: (0.3 + i * 0.05) * speed } }),
      // Animation for text elements: controls opacity
      text: (i, speed = 1) => ({ opacity: 1, transition: { duration: 0.2 * speed, ease: "linear", delay: (0.7 + i * 0.03) * speed } }),
      // Circuit animation for triangle drawing
      drawTriangle: {
        // Circuit animation for outer triangle polygon
        polygon: (speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 0.4 * speed, ease: "linear", delay: 0.5 * speed }, opacity: { duration: 0.01 * speed, delay: 0.5 * speed} } }),
        // Circuit animation for inner triangle lines
        line: (index, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 0.3 * speed, ease: "linear", delay: (0.7 + index * 0.1) * speed }, opacity: { duration: 0.01 * speed, delay: (0.7 + index * 0.1) * speed } } }),
      },
      // Circuit animation for overall triangle group
      triangleGroup: (speed = 1) => ({ opacity: 1, scale: 1, transition: { duration: 0.4 * speed, ease: "easeOut", delay: 0.3 * speed }})
    },
    loop: {}
  },
  cinematicBuildUp: {
    name: "Kinematograficzne Budowanie", // Cinematic Build-Up
    intro: {
      // Cinematic animation for paths: controls pathLength and opacity
      path: (i, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { duration: 1.5 * speed, ease: "easeInOut", delay: (0.3 + i * 0.3) * speed } }),
      // Cinematic animation for generic elements: controls opacity, scale, y-position, and blur
      generic: (i, speed = 1) => ({ opacity: 1, scale: 1, y: 0, filter: "blur(0px)", transition: { duration: 1.0 * speed, ease: "circOut", delay: (0.9 + i * 0.15) * speed } }),
      // Cinematic animation for text elements: controls opacity and y-position
      text: (i, speed = 1) => ({ opacity: 1, y: 0, transition: { duration: 0.8 * speed, ease: "circOut", delay: (1.6 + i * 0.15) * speed } }),
      // Cinematic animation for triangle drawing
      drawTriangle: {
        // Cinematic animation for outer triangle polygon
        polygon: (speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 1.2 * speed, ease: "circOut", delay: 1.0 * speed }, opacity: { duration: 0.01 * speed, delay: 1.0 * speed} } }),
        // Cinematic animation for inner triangle lines
        line: (index, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 0.9 * speed, ease: "circOut", delay: (1.7 + index * 0.25) * speed }, opacity: { duration: 0.01 * speed, delay: (1.7 + index * 0.25) * speed } } }),
      },
      // Cinematic animation for overall triangle group
      triangleGroup: (speed = 1) => ({ opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.2 * speed, ease: "circOut", delay: 0.8 * speed }})
    },
    loop: {}
  },
  organicGrowth: {
    name: "Organiczny Wzrost", // Organic Growth
    intro: {
      // Organic growth animation for paths: controls pathLength, opacity, and scale
      path: (i, speed = 1) => ({ pathLength: 1, opacity: 1, scale:1, transition: { duration: 1.2 * speed, ease: "easeOut", delay: (0.1 + i * 0.2) * speed } }),
      // Organic growth animation for dots: controls opacity and scale using spring physics
      dot: (i, speed = 1) => ({ opacity: 1, scale: 1, transition: { type: "spring", stiffness:100, damping: 10, duration: 0.8 * speed, delay: (0.6 + i * 0.1) * speed } }),
      // Organic growth animation for marker groups: controls opacity and y-scale
      markerGroup: (i, speed = 1) => ({ opacity: 1, scaleY: 1, transition: { duration: 0.7 * speed, ease: "easeOut", delay: (0.7 + i * 0.1) * speed } }),
      // Organic growth animation for text elements: controls opacity, scale, and y-position
      text: (i, speed = 1) => ({ opacity: 1, scale: 1, y:0, transition: { duration: 0.7 * speed, ease: "easeOut", delay: (1.3 + i * 0.1) * speed } }),
      // Organic growth animation for triangle drawing
      drawTriangle: {
        // Organic growth animation for outer triangle polygon
        polygon: (speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { type:"spring", stiffness:120, damping:12, duration: 1.0 * speed, delay: 0.8 * speed }, opacity: { duration: 0.01 * speed, delay: 0.8 * speed} } }),
        // Organic growth animation for inner triangle lines
        line: (index, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { type:"spring", stiffness:100, damping:10, duration: 0.7 * speed, delay: (1.4 + index * 0.2) * speed }, opacity: { duration: 0.01 * speed, delay: (1.4 + index * 0.2) * speed } } }),
      },
      // Organic growth animation for overall triangle group
      triangleGroup: (speed = 1) => ({ opacity: 1, scale: 1, transition: { type: "spring", stiffness: 120, damping: 12, duration: 1.0 * speed, delay: 0.6 * speed }})
    },
    loop: {}
  },
  technicalDrawingLR: {
    name: "Techniczne Rysowanie L-P", // Technical Drawing L-R
    // Configuration for sequencing animations within this preset
    _sequenceConfig: {
      sectionOrder: ['s1', 's3', 's2'], // Order in which sections animate
      durationBase: 0.6, // Base duration for animations
      phaseStagger: 0.15, // Stagger between phases within a section
      sectionStagger: 0.8, // Stagger between sections
      // Function to calculate delay for an item based on its section, phase, and index
      getDelay: function(sectionId, phaseIndex, itemIndex = 0, itemStagger = 0.05) {
        const sectionOrderIndex = this.sectionOrder.indexOf(sectionId);
        if (sectionOrderIndex === -1) return 0; // Should not happen if sectionId is valid
        const sectionBaseDelay = sectionOrderIndex * this.sectionStagger;
        const phaseBaseDelay = sectionBaseDelay + phaseIndex * this.phaseStagger;
        return phaseBaseDelay + itemIndex * itemStagger;
      }
    },
    intro: {
      // Animation for paths, using the sequence config for delay and duration
      path: function(sectionId, speed = 1) {
        const delay = animationPresets.technicalDrawingLR._sequenceConfig.getDelay(sectionId, 0);
        const duration = animationPresets.technicalDrawingLR._sequenceConfig.durationBase;
        return { pathLength: 1, opacity: 1, transition: { duration: duration * speed, ease: "linear", delay: (0.1 + delay) * speed } };
      },
      // Animation for dots, using the sequence config
      dot: function(sectionId, speed = 1) {
        const delay = animationPresets.technicalDrawingLR._sequenceConfig.getDelay(sectionId, 1);
        const duration = animationPresets.technicalDrawingLR._sequenceConfig.durationBase * 0.6;
        return { opacity: 1, scale: 1, transition: { duration: duration * speed, ease: "easeOut", delay: (0.1 + delay) * speed }};
      },
      // Animation for marker groups, using the sequence config
      markerGroup: function(sectionId, speed = 1) {
        const delay = animationPresets.technicalDrawingLR._sequenceConfig.getDelay(sectionId, 2);
        const duration = animationPresets.technicalDrawingLR._sequenceConfig.durationBase * 0.8;
        return { opacity: 1, scaleX: 1, transition: { duration: duration * speed, ease: "easeOut", delay: (0.1 + delay) * speed }};
      },
      // Animation for text elements, using the sequence config
      text: function(textItemData, speed = 1) {
        const { sectionId, lineIndex } = textItemData;
        const delay = animationPresets.technicalDrawingLR._sequenceConfig.getDelay(sectionId, 3, lineIndex, 0.08);
        const duration = animationPresets.technicalDrawingLR._sequenceConfig.durationBase * 0.7;
        return { opacity: 1, x: 0, transition: { duration: duration * speed, ease: "easeOut", delay: (0.1 + delay) * speed }};
      },
      // Animation for triangle drawing, sequenced after other elements
      drawTriangle: {
        // Animation for outer triangle polygon
        polygon: function(speed = 1) {
            const delay = animationPresets.technicalDrawingLR._sequenceConfig.sectionOrder.length * animationPresets.technicalDrawingLR._sequenceConfig.sectionStagger + 0.2;
            const duration = animationPresets.technicalDrawingLR._sequenceConfig.durationBase;
            return { pathLength: 1, opacity: 1, transition: { pathLength: {duration: duration * speed, ease: "easeOut", delay: delay * speed}, opacity: {duration: 0.01 * speed, delay: delay * speed} }};
        },
        // Animation for inner triangle lines
        line: function(index, speed = 1) {
            // Calculate delay based on section sequence end + base duration + polygon duration + line index stagger
            const baseSequenceEndDelay = animationPresets.technicalDrawingLR._sequenceConfig.sectionOrder.length * animationPresets.technicalDrawingLR._sequenceConfig.sectionStagger;
            const polygonAnimDuration = animationPresets.technicalDrawingLR.intro.drawTriangle.polygon(1).transition.pathLength.duration; // Get base polygon duration
             const polygonAnimDelay = animationPresets.technicalDrawingLR.intro.drawTriangle.polygon(1).transition.pathLength.delay; // Get base polygon delay
            const delay = (baseSequenceEndDelay + polygonAnimDelay + polygonAnimDuration * speed) + (index * 0.15 * speed); // Total delay for lines
            const duration = animationPresets.technicalDrawingLR._sequenceConfig.durationBase * 0.7;
             return { pathLength: 1, opacity: 1, transition: { pathLength: {duration: duration * speed, ease: "easeOut", delay: delay }, opacity: {duration: 0.01 * speed, delay: delay} }};
        }
      },      // Animation for overall triangle group (appears after drawing is complete)
      triangleGroup: function(speed = 1) {
         // Estimate end of triangle drawing (last line)
        const lastLineIndex = 2; // Assuming 3 lines (0, 1, 2)
        const lastLineAnimDelay = animationPresets.technicalDrawingLR.intro.drawTriangle.line(lastLineIndex, 1).transition.pathLength.delay;
        const lastLineAnimDuration = animationPresets.technicalDrawingLR.intro.drawTriangle.line(lastLineIndex, 1).transition.pathLength.duration;

        // Delay the group animation slightly after the last line drawing finishes
        const delay = (lastLineAnimDelay + lastLineAnimDuration) * speed + 0.2 * speed; // Add a small buffer
        const duration = animationPresets.technicalDrawingLR._sequenceConfig.durationBase;
        return { opacity: 1, scale:1, rotateY: 0, transition: { duration: duration * speed, ease: "easeOut", delay: delay }};
      }
    },
    loop: {}
  },
   energyBurst: {
    name: "Rozbłysk Energii",
    intro: {
      path: (i, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { type: "spring", stiffness: 100, damping: 15, duration: 0.8 * speed, delay: (0.2 + i * 0.1) * speed }, opacity: { duration: 0.2 * speed, delay: (0.2 + i * 0.1) * speed } } }),
      generic: (i, speed = 1) => ({ opacity: 1, scale: 1, transition: { type: "spring", stiffness: 250, damping: 10, delay: (0.1 + i * 0.05) * speed } }),
      text: (i, speed = 1) => ({ opacity: 1, y: 0, transition: { duration: 0.5 * speed, ease: "easeOut", delay: (0.5 + i * 0.08) * speed } }),
      drawTriangle: {
        polygon: (speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 0.5 * speed, ease: [0.6, -0.28, 0.735, 0.045], delay: 0.4 * speed }, opacity: { duration: 0.01, delay: 0.4 * speed } } }),
        line: (index, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 0.4 * speed, ease: [0.6, -0.28, 0.735, 0.045], delay: (0.7 + index * 0.1) * speed }, opacity: { duration: 0.01, delay: (0.7 + index * 0.1) * speed } } }),
      },
      triangleGroup: (speed = 1) => ({ opacity: 1, scale: [0, 1.2, 1], transition: { duration: 0.6 * speed, ease: "backOut", delay: 0.1 * speed } })
    },
    loop: {}
  },
  quantumPulse: {
    name: "Pulsowanie Kwantowe",
    intro: {
      path: (i, speed = 1) => ({ opacity: [0, 1, 0.7, 1], filter: ["blur(5px)", "blur(0px)", "blur(2px)", "blur(0px)"], transition: { duration: 1.2 * speed, ease: "easeInOut", delay: (0.1 + i * 0.2) * speed, times: [0, 0.4, 0.7, 1] } }),
      generic: (i, speed = 1) => ({ opacity: 1, scale: [0.8, 1.05, 1], filter: "blur(0px)", transition: { duration: 0.8 * speed, ease: "circOut", delay: (0.4 + i * 0.1) * speed } }),
      text: (i, speed = 1) => ({ opacity: 1, filter: "blur(0px)", transition: { duration: 0.7 * speed, ease: "easeOut", delay: (0.8 + i * 0.15) * speed } }),
      drawTriangle: {
        polygon: (speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 0.9 * speed, ease: "sine.inOut", delay: 0.8 * speed }, opacity: { duration: 0.01, delay: 0.8 * speed } } }),
        line: (index, speed = 1) => ({ pathLength: 1, opacity: 1, transition: { pathLength: { duration: 0.6 * speed, ease: "sine.inOut", delay: (1.3 + index * 0.15) * speed }, opacity: { duration: 0.01, delay: (1.3 + index * 0.15) * speed } } }),
      },
      triangleGroup: (speed = 1) => ({ opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 1.0 * speed, ease: "circOut", delay: 0.5 * speed } })
    },
    loop: {}
  }
};

// Initial states for animations, defining how elements look before they animate in
// Stany początkowe dla animacji
const initialStates = {
  dynamicEntry: { path: { pathLength: 0, opacity: 0 }, generic: { opacity: 0, scale: 0.3 }, text: { opacity: 0, y:5 }, trianglePolygon: { pathLength: 0, opacity: 0 }, triangleLines: { pathLength: 0, opacity: 0 }, triangleGroup: { opacity: 0, scale: 0.3, rotateY: -90 } },
  springPop: { path: { scale: 0, opacity: 0 }, generic: { opacity: 0, scale: 0.3 }, text: { opacity: 0, y: 20 }, trianglePolygon: { pathLength: 0, opacity: 0 }, triangleLines: { pathLength: 0, opacity: 0 }, triangleGroup: { opacity: 0, scale: 0.3 } },
  smoothUnfold: { path: { pathLength: 0, opacity: 0 }, generic: { opacity: 0, filter: "blur(10px)", y: 10 }, text: { opacity: 0, y:15 }, trianglePolygon: { pathLength: 0, opacity: 0 }, triangleLines: { pathLength: 0, opacity: 0 }, triangleGroup: { opacity: 0, filter: "blur(10px)", scale: 0.8 } },
  blueprintReveal: { path: { pathLength: 0, opacity: 0 }, markerGroup: { opacity:0, scaleY:0, transformOrigin: 'center bottom' }, dot: {opacity:0, scale:0}, text: { opacity: 0, y:10 }, trianglePolygon: { pathLength: 0, opacity: 0 }, triangleLines: { pathLength: 0, opacity: 0 }, triangleGroup: { opacity: 0, scale: 0.5 } },
  circuitTrace: { path: { pathLength: 0, opacity: 0 }, markerGroup: { opacity:0, scaleX:0, transformOrigin: 'left center' }, dot: {opacity:0, scale:0.5}, text: { opacity: 0 }, trianglePolygon: { pathLength: 0, opacity: 0 }, triangleLines: { pathLength: 0, opacity: 0 }, triangleGroup: { opacity: 0, scale: 0.7 } },
  cinematicBuildUp: { path: { pathLength: 0, opacity: 0 }, generic: { opacity: 0, scale: 0.8, y:5, filter:"blur(5px)" }, text: { opacity: 0, y:10 }, trianglePolygon: { pathLength: 0, opacity: 0 }, triangleLines: { pathLength: 0, opacity: 0 }, triangleGroup: { opacity: 0, scale: 0.7, filter:"blur(5px)" } },
  organicGrowth: { path: { pathLength: 0, opacity: 0, scale:0.8 }, dot: {opacity:0, scale:0}, markerGroup: {opacity:0, scaleY:0, transformOrigin: 'center bottom'}, text: { opacity: 0, scale:0.5, y:10 }, trianglePolygon: { pathLength: 0, opacity: 0 }, triangleLines: { pathLength: 0, opacity: 0 }, triangleGroup: { opacity: 0, scale: 0.3 } },
  technicalDrawingLR: { path: { pathLength: 0, opacity: 0 }, dot: { opacity: 0, scale: 0 }, markerGroup: { opacity: 0, scaleX: 0, transformOrigin: 'left center' }, text: { opacity: 0, x: -15 }, trianglePolygon: { pathLength: 0, opacity: 0 }, triangleLines: { pathLength: 0, opacity: 0 }, triangleGroup: { opacity: 0, scale: 0.5, rotateY: 90 } },
  energyBurst: { path: { pathLength: 0, opacity: 0 }, generic: { opacity: 0, scale: 0 }, text: { opacity: 0, y: 10 }, trianglePolygon: { pathLength: 0, opacity: 0 }, triangleLines: { pathLength: 0, opacity: 0 }, triangleGroup: { opacity: 0, scale: 0 } },
  quantumPulse: { path: { opacity: 0, filter: "blur(5px)" }, generic: { opacity: 0, scale: 0.8, filter: "blur(3px)" }, text: { opacity: 0, filter: "blur(2px)" }, trianglePolygon: { pathLength: 0, opacity: 0 }, triangleLines: { pathLength: 0, opacity: 0 }, triangleGroup: { opacity: 0, scale: 0.7, filter: "blur(5px)" } },
};

// Kolory
// Using CSS variables to support dark mode
const defaultColor = "var(--diagram-default-color)";
const lavenderColor = "var(--diagram-lavender-color)"; // Highlight color
const defaultTextColor = "var(--diagram-text-color);"; // Text color

// Helper function to get resolved CSS variable values
const getResolvedColor = (cssVar) => {
  if (typeof window !== 'undefined') {
    // Remove 'var()' wrapper and semicolon if present
    const cleanVar = cssVar.replace(/var\(([^)]+)\);?/, '$1');
    return getComputedStyle(document.documentElement).getPropertyValue(cleanVar).trim() || cssVar;
  }
  return cssVar;
};

// --- Component rendering the SVG diagram ---
// Ten komponent odpowiada tylko za renderowanie i animację samego SVG
const DesignProcessDiagramSVG = React.memo(({
  animationKey,
  selectedPresetKey,
  isLoopingActive, // Prop determines if the highlighting loop is active
  speedMultiplier,
  // Pass animation data from the parent
  animationPresets,
  initialStates,
  onHighlightChange,
  activePhase // Add activePhase prop
}) => {
  // Select the current animation preset and initial states, defaulting if not found
  const preset = animationPresets[selectedPresetKey] || animationPresets.dynamicEntry;
  const initials = initialStates[selectedPresetKey] || initialStates.dynamicEntry;
  // State for the highlighting loop - initialize with activePhase
  const [currentHighlight, setCurrentHighlight] = useState(activePhase);// Effect to update currentHighlight when activePhase changes
  useEffect(() => {
    setCurrentHighlight(activePhase);
  }, [activePhase]);

  // Effect to set up auto cycling through phases
  useEffect(() => {
    // Define the sequence of phases to cycle through
    const phases = ['s2', 's3', 's1']; // II (s2), III (s3), I (s1) in order
    let cycleIndex = phases.indexOf(activePhase) !== -1 ? phases.indexOf(activePhase) : 0;
    let cycleIntervalId;
    let initialDelayId;

    // Estimate when the initial intro animation is likely finished
    const introCompletionEstimate = selectedPresetKey === 'technicalDrawingLR'
      ? (animationPresets.technicalDrawingLR._sequenceConfig.sectionOrder.length * animationPresets.technicalDrawingLR._sequenceConfig.sectionStagger +
         animationPresets.technicalDrawingLR.intro.triangleGroup(1).transition.delay) * speedMultiplier + 
         (animationPresets.technicalDrawingLR.intro.triangleGroup(1).transition.duration * speedMultiplier)
      : 3000 * speedMultiplier; // Default estimate

    // Setup auto cycling only if looping is active
    if (isLoopingActive) {
      // First, delay until the intro animation completes
      initialDelayId = setTimeout(() => {
        // Set the initial phase - only if we haven't already changed it manually
        if (currentHighlight === activePhase) {
          const initialPhase = phases[cycleIndex];
          setCurrentHighlight(initialPhase);
          if (onHighlightChange) onHighlightChange(initialPhase);
        }
        
        // Start cycling through phases every 7 seconds (slightly longer for better user experience)
        cycleIntervalId = setInterval(() => {
          // Move to the next phase in the cycle
          cycleIndex = (cycleIndex + 1) % phases.length;
          const nextPhase = phases[cycleIndex];
          
          // Update current highlight and notify parent
          setCurrentHighlight(nextPhase);
          if (onHighlightChange) onHighlightChange(nextPhase);
        }, 7000 * speedMultiplier); // 7 seconds * speed multiplier
      }, introCompletionEstimate);
    }

    // Cleanup function to clear timers
    return () => {
      clearTimeout(initialDelayId);
      clearInterval(cycleIntervalId);
    };
  }, [animationKey, selectedPresetKey, speedMultiplier, animationPresets, isLoopingActive, onHighlightChange, activePhase, currentHighlight]);

  // SVG parameters
  const svgSize = 500;
  const svgCenter = svgSize / 2;
  const mainArcRadius = 100;
  const arcStrokeWidth = 15.3;
  const dotRadius = 10;
  const triangleStrokeWidth = 2;
  const numeralDistanceFromDot = 15;

  // Radii for text paths
  const textPathRadii = {
    layer1: mainArcRadius + 30,
    layer2: mainArcRadius + 56,
    layer3: mainArcRadius + 82,
  };

  // Center angles for gaps
  const GAP_CENTER_ANGLES = { s1_gap: 300, s2_gap: 60, s3_gap: 180 }; // s1_gap (I) at 300, s2_gap (II) at 60, s3_gap (III) at 180
  const GAP_ANGULAR_WIDTH = 22;

  // Data for arcs
  const arcsData = [
    // Arc for "rozumowanie" (between III and I) - Section 's1'
    { id: 'arc_rozumowanie', sectionId: 's1', startAngle: GAP_CENTER_ANGLES.s3_gap + GAP_ANGULAR_WIDTH / 2, endAngle: GAP_CENTER_ANGLES.s1_gap - GAP_ANGULAR_WIDTH / 2 },
    // Arc for "empatia" (between I and II) - Section 's2'
    { id: 'arc_empatia', sectionId: 's2', startAngle: GAP_CENTER_ANGLES.s1_gap + GAP_ANGULAR_WIDTH / 2, endAngle: GAP_CENTER_ANGLES.s2_gap - GAP_ANGULAR_WIDTH / 2 },
    // Arc for "materializacja" (between II and III) - Section 's3'
    { id: 'arc_materializacja', sectionId: 's3', startAngle: GAP_CENTER_ANGLES.s2_gap + GAP_ANGULAR_WIDTH / 2, endAngle: GAP_CENTER_ANGLES.s3_gap - GAP_ANGULAR_WIDTH / 2 },
  ].map(arc => {
    let sAngle = arc.startAngle % 360; let eAngle = arc.endAngle % 360;
    if (sAngle < 0) sAngle += 360; if (eAngle < 0) eAngle += 360;
     // Ensure arc sweeps clockwise in its original coordinate system
    if (eAngle <= sAngle) eAngle += 360;
    const startPt = pointOnCircle(svgCenter, mainArcRadius, sAngle);
    const endPt = pointOnCircle(svgCenter, mainArcRadius, eAngle);
    const angleDiff = eAngle - sAngle;
    const largeArcFlag = angleDiff > 180 ? 1 : 0; // For standard clockwise arc
    return { ...arc, path: `M ${startPt.x.toFixed(2)} ${startPt.y.toFixed(2)} A ${mainArcRadius.toFixed(2)} ${mainArcRadius.toFixed(2)} 0 ${largeArcFlag} 1 ${endPt.x.toFixed(2)} ${endPt.y.toFixed(2)}`, textPathMidAngle: arc.startAngle + (angleDiff / 2)};
  });

  // Triangle points - recalculated for a smaller triangle as per new code
  const triHeight = 96; // Smaller height
  const circumRadius = (2/3) * triHeight;
  const inRadius = (1/3) * triHeight;
  const sideLengthOverTwo = triHeight / Math.sqrt(3);
  const p1x_final = svgCenter;
  const p1y_final = svgCenter + circumRadius;
  const p2x_final = svgCenter + sideLengthOverTwo;
  const p2y_final = svgCenter - inRadius;
  const p3x_final = svgCenter - sideLengthOverTwo;
  const p3y_final = svgCenter - inRadius;
  const triPoints = `${p1x_final.toFixed(2)},${p1y_final.toFixed(2)} ${p2x_final.toFixed(2)},${p2y_final.toFixed(2)} ${p3x_final.toFixed(2)},${p3y_final.toFixed(2)}`;
  const triangleInnerLinesData = [
      { x1:p1x_final, y1:p1y_final, x2:svgCenter, y2:svgCenter, key:'triLine1' },
      { x1:p2x_final, y1:p2y_final, x2:svgCenter, y2:svgCenter, key:'triLine2' },
      { x1:p3x_final, y1:p3y_final, x2:svgCenter, y2:svgCenter, key:'triLine3' },
  ];


  // Data for gap elements (dots, numerals) - marker groups removed as per new code
  const gapElements = [
    { sectionId_ref: 's1', angle: GAP_CENTER_ANGLES.s1_gap, id: 'gap1', numeral: "I" }, // Numeral I at 300 deg (Rozumowanie end / Empatia start)
    { sectionId_ref: 's2', angle: GAP_CENTER_ANGLES.s2_gap, id: 'gap2', numeral: "II" },// Numeral II at 60 deg (Empatia end / Materializacja start)
    { sectionId_ref: 's3', angle: GAP_CENTER_ANGLES.s3_gap, id: 'gap3', numeral: "III" },// Numeral III at 180 deg (Materializacja end / Rozumowanie start)
  ].map(gp => {
    const dotPoint = pointOnCircle(svgCenter, mainArcRadius, gp.angle);
    // Position for the numeral, relative to the dot
    const numeralPoint = pointOnCircle(svgCenter, mainArcRadius + dotRadius + numeralDistanceFromDot, gp.angle);
    const numeralAnchor = "middle"; // Always center text before rotation
    return { ...gp, dotX: dotPoint.x, dotY: dotPoint.y,
              numeralX: numeralPoint.x, numeralY: numeralPoint.y, numeralAnchor: numeralAnchor
            };
  });

  // Definition for text sections on paths, associating text content with visual arcs
  const textSectionsDefinition = [    // Section 's1' for "materializacja" (between III and I)
    { id: 's1', visualArcRef: arcsData.find(a=>a.id==='arc_rozumowanie'), textsOnPath: [
        { key: 's1_rozum_title', content: "materializacja", radius: textPathRadii.layer1, dy: -0.5, letterSpacing: 0.8, isTitle: true },
        { key: 's1_rozum_sub', content: "prototypowanie i testowanie", radius: textPathRadii.layer2, dy: -1.5, letterSpacing: 0.3, isTitle: false },
        { key: 's1_rozum_tag', content: "III. zrób", radius: textPathRadii.layer3, dy: -2, letterSpacing: 1, isTitle: true },
      ]},
    // Section 's2' for "empatia" (between I and II)
    { id: 's2', visualArcRef: arcsData.find(a=>a.id==='arc_empatia'), textsOnPath: [
        { key: 's2_empatia_title', content: "empatia", radius: textPathRadii.layer1, dy: -0.5, letterSpacing: 0.8, isTitle: true },
        { key: 's2_empatia_sub', content: "definiowanie problemu", radius: textPathRadii.layer2, dy: -1, letterSpacing: 0.6, isTitle: false },
        { key: 's2_empatia_tag', content: "I. odczuj", radius: textPathRadii.layer3, dy: -1.5, letterSpacing: 1, isTitle: true },
      ]},
    // Section 's3' for "rozumowanie" (between II and III)
    { id: 's3', visualArcRef: arcsData.find(a=>a.id==='arc_materializacja'), textsOnPath: [
        { key: 's3_mater_title', content: "rozumowanie", radius: textPathRadii.layer1, dy: -0.5, letterSpacing: 0.8, isTitle: true },
        { key: 's3_mater_sub', content: "koncypowanie rozwiązań", radius: textPathRadii.layer2, dy: -1.5, letterSpacing: 0.6, isTitle: false },
        { key: 's3_mater_tag', content: "II. wymyśl", radius: textPathRadii.layer3, dy: -2, letterSpacing: 1, isTitle: true },
      ]},
  ];

  // Generate all text path data
  const allTextPathData = textSectionsDefinition.flatMap((section) => {
    const visualArc = section.visualArcRef;
    if (!visualArc) {
        console.warn(`Visual arc not found for section ${section.id}`);
        return [];
    }
    // Determine if the arc is visually at the bottom after global rotation (-60deg)
    // Original arc_rozumowanie (s1) had mid-angle ~240deg. Rotated: 240-60 = 180deg (bottom).
    const isOnBottom = visualArc.id === 'arc_rozumowanie';

    // Helper function to create an SVG arc path definition string for textPath
    const createTextPathDef = (radius, startAngle, endAngle, onBottomArc) => {
        let sAng = startAngle % 360; let eAng = endAngle % 360;
        if (sAng < 0) sAng += 360; if (eAng < 0) eAng += 360;

        let sweep = 1; // Default sweep direction (clockwise for text on top/sides relative to path start/end)
        // If the text is on the bottom arc, reverse the start/end angles and sweep direction
        // to make the text read correctly from left to right along the *outside* of the curve after global rotation.
        if (onBottomArc) {
             // Swap angles for the text path definition to make text flow correctly
             // This ensures the path goes from right-to-left relative to original arc direction
             // which becomes left-to-right visually after global -60deg rotation positions it at the bottom.
            [sAng, eAng] = [eAng, sAng];
            sweep = 0; // Change sweep flag to counter-clockwise
        }        // Calculate angular difference based on sweep direction to determine large-arc-flag
        // This needs to be calculated on the *original* angles before swapping for textPath sweep
        let originalSAng = startAngle % 360; if (originalSAng < 0) originalSAng += 360;
        let originalEAng = endAngle % 360; if (originalEAng < 0) originalEAng += 360;
        if (originalEAng <= originalSAng) originalEAng += 360; // Ensure original arc sweeps correctly

        const largeArc = (originalEAng - originalSAng) > 180 ? 1 : 0; // Determine large arc flag based on the *visual* arc size

        const startPt = pointOnCircle(svgCenter, radius, sAng); // Calculate start point of the text path
        const endPt = pointOnCircle(svgCenter, radius, eAng); // Calculate end point of the text path

        // Construct the SVG arc path string
        return `M ${startPt.x.toFixed(2)} ${startPt.y.toFixed(2)} A ${radius.toFixed(2)} ${radius.toFixed(2)} 0 ${largeArc} ${sweep} ${endPt.x.toFixed(2)} ${endPt.y.toFixed(2)}`;
    };

    // Define a slight offset for text paths from the main visual arc ends for better spacing
    const textAngleOffset = 5; // Degrees
    const baseStartAngle = visualArc.startAngle - textAngleOffset;
    const baseEndAngle = visualArc.endAngle + textAngleOffset;

    // Map over textsOnPath for the current section to generate full data for each text line
    return section.textsOnPath.map((textInfo, lineIndex) => ({
      ...textInfo,
      sectionId: section.id, // This is the new section id ('s1', 's2', 's3')
      lineIndex: lineIndex, // Index within the text lines for this section
      pathId: `tp-${textInfo.key}`, // Unique ID for the <path> element in <defs>
      pathDef: createTextPathDef(textInfo.radius, baseStartAngle, baseEndAngle, isOnBottom)
    }));
  });


  // --- Prepare Animation Props ---
  // Extract animation properties using the speedMultiplier
  const introTrianglePolygonAnim = preset.intro.drawTriangle.polygon(speedMultiplier);
  // Map line animation properties for each inner triangle line
  const introTriangleLinesAnim = triangleInnerLinesData.map((_, i) => preset.intro.drawTriangle.line(i, speedMultiplier));
  // Get animation properties for the overall triangle group
  const introTriangleGroupAnim = preset.intro.triangleGroup ? preset.intro.triangleGroup(speedMultiplier) : { opacity: 1, scale: 1}; // Fallback if no specific group animation

  // Helper functions to get animation props based on preset and index/sectionId
  const getArcAnimProps = (arc, index) => typeof preset.intro.path === 'function'
      ? preset.intro.path(selectedPresetKey === 'technicalDrawingLR' ? arc.sectionId : index, speedMultiplier)
      : (preset.intro.path || {}); // Fallback

  const getDotAnimProps = (gp, index) => typeof preset.intro.dot === 'function'
      ? preset.intro.dot(selectedPresetKey === 'technicalDrawingLR' ? gp.sectionId_ref : index, speedMultiplier)
      : (preset.intro.dot || preset.intro.generic(index, speedMultiplier) || {}); // Fallback with generic

  const getIntroTextAnimProps = (tp, index) => typeof preset.intro.text === 'function'
      ? preset.intro.text(selectedPresetKey === 'technicalDrawingLR' ? {sectionId: tp.sectionId, lineIndex: tp.lineIndex} : index, speedMultiplier)
      : (preset.intro.text || {}); // Fallback

  return (
    // Main container for the diagram, uses motion.div for exit animation (managed by AnimatePresence in parent)
    <motion.div
      key={animationKey} // Key to re-trigger animations when changed
      className="flex items-center justify-center w-full h-full" // Fill available space
      style={{ minHeight: '400px', maxWidth: '100%' }} // Ensure minimum height and respect parent width
      exit={{ opacity: 0 }} // Exit animation is handled by AnimatePresence wrapping this component
    >      {/* SVG element for the diagram */}
      <motion.svg
        viewBox={`0 0 ${svgSize} ${svgSize}`} // Defines the coordinate system and aspect ratio
        className="w-full h-auto max-h-full" // Allow diagram to take available height
        aria-label="Diagram procesu projektowego" // Accessibility label
        style={{ 
          perspective: "1000px", 
          transform: "rotate(-60deg)",
          maxWidth: "100%", 
          display: "block",
          minWidth: "300px", // Debug: ensure minimum width
          minHeight: "300px", // Debug: ensure minimum height
          border: "2px solid red" // Debug: make SVG visible
        }} // Global rotation to bring II to top (s2)
      >
        {/* Definitions for reusable elements, like text paths */}
        <defs>
          {allTextPathData.map(tp => (
            // Each text path is defined here with an ID to be referenced by <textPath>
            <path id={tp.pathId} key={tp.pathId} d={tp.pathDef} fill="none" stroke="transparent" />
          ))}
        </defs>

        {/* Arcs */}
        {arcsData.map((arc, index) => {
          const introProps = getArcAnimProps(arc, index); // Get intro animation props
          const isHighlighted = isLoopingActive && currentHighlight === arc.sectionId; // Check if this arc's section is highlighted
          const FADE_IN_OUT_DURATION = 1.5 * speedMultiplier; // Duration for highlight fade

          return (
            // Use React.Fragment to render multiple paths for the same arc (base + highlight)
            <React.Fragment key={`arc-group-${arc.id}`}>
              {/* Base arc */}              <motion.path
                d={arc.path} // SVG path data for the arc
                fill="none" // Arcs are strokes
                stroke={defaultColor} // Default color
                strokeWidth={arcStrokeWidth} // Width
                className="diagram-element" // Class for theme transitions
                initial={initials.path || {}} // Initial animation state for paths
                animate={introProps} // Apply intro animation
              />
              {/* Highlight arc layer */}              <motion.path
                d={arc.path}
                fill="none"
                stroke={lavenderColor} // Highlight color
                strokeWidth={arcStrokeWidth}
                className="diagram-element diagram-highlight" // Add classes for theme transitions
                initial={{ opacity: 0 }} // Starts invisible
                animate={{
                  // Animate opacity based on highlight state
                  opacity: isHighlighted ? 1 : 0,
                }}
                transition={{
                  // Smooth transition for opacity changes during highlighting loop
                  opacity: { duration: FADE_IN_OUT_DURATION, ease: "easeInOut" },
                }}
              />
            </React.Fragment>
          );
        })}

        {/* Triangle Group - for the new triangle style with inner lines */}
        <motion.g
            // Apply initial and intro animations to the overall triangle group (scale, rotation, etc.)
            initial={initials.triangleGroup || { opacity:0, scale:0.3 }}
            animate={introTriangleGroupAnim}
            style={{ transformOrigin: `${svgCenter}px ${svgCenter}px` }} // Set transform origin for scaling/rotation
        >
            {/* Outer Triangle Polygon */}
            {/* Note: Animating pathLength on <polygon> works in some SVG engines but can be unreliable.
                     Using <path> with the polygon 'd' attribute is more robust for pathLength animation.
                     However, the current preset structure assumes polygon/line elements. Let's stick to that,
                     assuming Framer Motion handles it for these specific elements. If not, refactor to use <path>. */}            <motion.polygon
              points={triPoints} // SVG points data for the triangle
              fill="none" // Triangle is a stroke
              stroke={defaultColor} // Color
              strokeWidth={triangleStrokeWidth}
              className="diagram-element" // Add class for theme transitions
              // Apply pathLength animation to the polygon stroke
              initial={initials.trianglePolygon || { pathLength: 0, opacity: 0 }}
              animate={introTrianglePolygonAnim}
            />
            {/* Inner lines of the new triangle */}
            {triangleInnerLinesData.map((line, i) => (                <motion.line
                    key={line.key}
                    x1={line.x1} y1={line.y1}
                    x2={line.x2} y2={line.y2}
                    stroke={defaultColor}
                    strokeWidth={triangleStrokeWidth}
                    className="diagram-element" // Add class for theme transitions
                     // Apply pathLength animation to each line stroke
                    initial={initials.triangleLines || { pathLength: 0, opacity: 0 }}
                    animate={introTriangleLinesAnim[i]} // Use the pre-calculated animation props for this line index
                />
            ))}
        </motion.g>

        {/* Gap Elements (dots, numerals) */}
        {gapElements.map((gp, index) => {
          const dotAnim = getDotAnimProps(gp, index); // Get animation props for dots/numerals
          // Numerals don't highlight individually, they follow the text highlight on the arc

          return (
            // Group for dot and numeral, animated together with dot animation props
            <motion.g key={gp.id} initial={initials.dot || initials.generic || {}} animate={dotAnim}>
              {/* The dot itself */}              <circle cx={gp.dotX} cy={gp.dotY} r={dotRadius} fill={defaultColor} className="diagram-element" />
              {/* The numeral text (I, II, III) */}
              <text
                x={gp.numeralX}
                y={gp.numeralY}
                textAnchor={gp.numeralAnchor} // Now always "middle"
                dominantBaseline="middle" // Controls vertical alignment
                className="text-3xl font-bold diagram-element" // Tailwind class for font size/weight + theme transitions
                fill={defaultColor} // Default color
                // Apply rotation to numerals by their angle on the circle (gp.angle)
                // This makes them perpendicular to the circle's tangent at their position.
                transform={
                  (gp.numeral === "I" || gp.numeral === "II" || gp.numeral === "III")
                    ? `rotate(${gp.angle} ${gp.numeralX} ${gp.numeralY})`
                    : undefined
                }
              >
                {gp.numeral}
              </text>
              {/* Marker bars are removed as per the new code */}
            </motion.g>
          );
        })}

        {/* Text on Paths */}
        {/* Tekst na Ścieżkach */}
        {allTextPathData.map((tp, index) => {
          const introTextAnimateProps = getIntroTextAnimProps(tp, index); // Get intro animation props
          const isTextHighlighted = isLoopingActive && currentHighlight === tp.sectionId; // Check if the text's section is highlighted
          const FADE_IN_OUT_DURATION = 1.5 * speedMultiplier; // Duration for highlight fade

          return (
            // Group for each line of text on a path
            <motion.g
              key={`tg-${tp.pathId}`}
              initial={initials.text || {}} // Initial animation state for text
              animate={introTextAnimateProps} // Apply intro animation
            >              <motion.text
                 // Dynamic classes for styling (title vs regular text) + hide text on mobile
                 className={`${tp.isTitle ? 'text-sm sm:text-base font-medium' : 'text-xs sm:text-sm'} diagram-element`}
                 // Animate fill color based on highlight state - resolve CSS variables to actual colors
                 initial={{ fill: getResolvedColor(defaultTextColor) }} // Initial text color
                 animate={{ fill: isTextHighlighted ? getResolvedColor(lavenderColor) : getResolvedColor(defaultTextColor) }} // Animate between highlight and default
                 transition={{ fill: { duration: FADE_IN_OUT_DURATION, ease: "easeInOut" } }} // Smooth color transition
                 dy={tp.dy} // Vertical offset from the path
                 dominantBaseline="middle" // Vertical alignment
                 letterSpacing={tp.letterSpacing} // Adjust letter spacing
              >
                {/* textPath element links to the path defined in <defs> */}
                <textPath href={`#${tp.pathId}`} startOffset="50%" textAnchor="middle">
                  {tp.content}
                </textPath>
              </motion.text>
            </motion.g>
          );
        })}
      </motion.svg>
    </motion.div>
  );
});


// Import the ProcessDescription component and ProcessPhaseContext
import ProcessDescription from './ProcessDescription';
import { useContext } from 'react';
import { ProcessPhaseContext } from '../contexts/ProcessPhaseContext';

// Export the SVG diagram component for reuse in SimpleDiagram
export { DesignProcessDiagramSVG };

// --- Main Exported Component ---
// This component contains the state, controls, and the SVG diagram component
export default function DiagramProces({ preset = 'dynamicEntry', speed = 1, activePhase = 's2', onPhaseClick, controlsOnLeft = false }) {
  // State for re-triggering animations
  const [animationKey, setAnimationKey] = useState(0);
  // Use the preset prop passed from the parent component directly
  const selectedPresetKey = preset;
  // Use the speed prop passed from the parent component directly
  const speedMultiplier = speed;
  // Looping is now always active in this version as per your code structure
  const isLoopingActive = true;
  
  // Effect to replay animation when preset or speed changes
  useEffect(() => {
    setAnimationKey(prevKey => prevKey + 1);
  }, [preset, speed]);  // We no longer need a manual replay function as animations replay with preset/speed changes
  
  // Handler for when the highlighted section changes
  const handleHighlightChange = useCallback((sectionId) => {
    // If onPhaseClick is provided, call it with the new phase
    if (onPhaseClick && typeof onPhaseClick === 'function') {
      onPhaseClick(sectionId);
    }
  }, [onPhaseClick]);

  // Check if we have a valid ProcessPhaseContext
  const { phaseData } = useContext(ProcessPhaseContext);
  const shouldRenderDescription = phaseData !== null;
  
  return (
    // Main container - using process-diagram-section class for targeting with dark mode styles
    <div className="process-diagram-section font-sans relative overflow-hidden w-full h-full flex justify-center items-center" style={{ background: "var(--diagram-background)" }}>
      {/* Only display as full diagram when not controlled from the EnhancedDiagram parent */}
      {!controlsOnLeft ? (
        <div className="w-full h-full flex" style={{ minHeight: '600px' }}>
          {/* Left column: Process Description - only render if we have valid phase data */}
          <div className="w-2/5 h-full" style={{ minWidth: '300px' }}>
            {shouldRenderDescription && (
              <div className="h-full flex items-center justify-center p-4 md:p-6 lg:p-8">
                <ProcessDescription activePhase={activePhase} />
              </div>
            )}
          </div>
          
          {/* Right column: Diagram */}
          <div className={`${shouldRenderDescription ? 'w-3/5' : 'w-full'} h-full relative flex flex-col items-center justify-center p-4`}>
            {/* Animated Diagram */}
            <div className="flex items-center justify-center w-full h-full">
              <AnimatePresence mode="wait">
                <DesignProcessDiagramSVG
                  key={animationKey}
                  selectedPresetKey={selectedPresetKey}
                  isLoopingActive={isLoopingActive}
                  speedMultiplier={speedMultiplier}
                  animationPresets={animationPresets}
                  initialStates={initialStates}
                  onHighlightChange={handleHighlightChange}
                  activePhase={activePhase}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      ) : (        /* Only the diagram when controlled from EnhancedDiagram */
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex items-center justify-center w-full h-full" style={{ minHeight: '400px', maxWidth: '100%' }}>
            <AnimatePresence mode="wait">
              <DesignProcessDiagramSVG
                key={animationKey}
                selectedPresetKey={selectedPresetKey}
                isLoopingActive={isLoopingActive}
                speedMultiplier={speedMultiplier}
                animationPresets={animationPresets}
                initialStates={initialStates}
                onHighlightChange={handleHighlightChange}
                activePhase={activePhase}
              />
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}