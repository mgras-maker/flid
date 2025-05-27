// ProcessDescription.jsx - Component to display process phase descriptions

import React from 'react';
import { motion } from 'framer-motion';
import { processPhaseData } from '../data/processPhaseData';

const ProcessDescription = ({ activePhase }) => {
  // Get the current phase data
  const phaseData = processPhaseData[activePhase] || processPhaseData.s2; // Default to 'empatia' if not found

  // Animation variants for content transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };  return (
    <motion.div 
      key={activePhase} // Force re-render when phase changes
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full"
    >
      <div>
        {/* Phase subtitle - small, elegant uppercase label */}
        <motion.div variants={itemVariants} className="mb-2">
          <h3 className="text-xs uppercase tracking-wider text-gray-500 font-medium letter-spacing-2">
            {phaseData.subtitle}
          </h3>
        </motion.div>
        
        {/* Phase title - large, bold, elegant typography */}
        <motion.h2 
          variants={itemVariants}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-900 tracking-tight leading-tight"
        >
          {phaseData.title}
        </motion.h2>
        
        {/* Phase description - clean, readable text */}
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed"
        >
          {phaseData.description}
        </motion.p>

        {/* Key points - minimalist list with subtle indicators */}
        <motion.div variants={itemVariants} className="mb-8">
          <h4 className="text-sm font-semibold mb-4 text-gray-800 uppercase tracking-wide">
            Kluczowe elementy
          </h4>
          <ul className="space-y-3">
            {phaseData.keyPoints.map((point, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex items-start"
              >
                <span className="text-indigo-500 mr-2 mt-0.5 text-lg">•</span> 
                <span className="text-sm md:text-base text-gray-700">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        
        {/* Quote - elegant, subtle highlight */}
        <motion.blockquote 
          variants={itemVariants}
          className="border-l-2 border-indigo-400 pl-4 py-1 italic text-sm md:text-base text-gray-600"
        >
          "{phaseData.quote}"
        </motion.blockquote>
      </div>
    </motion.div>
  );
};

export default ProcessDescription;
