// DynamicPhaseContent.jsx - Komponent wyświetlający dynamiczną zawartość w zależności od wybranej fazy
import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ProcessPhaseContext } from '../contexts/ProcessPhaseContext.jsx';

// Styled components
const PhaseSection = styled(motion.div)`
  margin-top: 2rem;
  background-color: var(--lavender-100);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--accent);
`;

const PhaseTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--primary);
`;

const PhaseDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: var(--text);
`;

const PhaseQuote = styled(motion.blockquote)`
  font-style: italic;
  color: var(--text-secondary);
  border-left: 2px solid var(--accent);
  padding-left: 1rem;
  margin: 1.5rem 0;
`;

const PhaseKeyPoints = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1.5rem 0;
  
  li {
    padding-left: 1.5rem;
    position: relative;
    margin-bottom: 0.5rem;
    
    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: var(--accent);
      font-size: 1.2em;
    }
    
    &[style*="animation"] {
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(10px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
`;

const DynamicPhaseContent = ({ hideWhenLeftControls }) => {
  const { phaseData, currentPhase } = useContext(ProcessPhaseContext);
  
  // Get the EnhancedDiagram context if it exists (to check if we're inside a diagram with left controls)  // Only render when we have valid phaseData with a title property
  // This ensures we only render inside a proper provider
  if (!phaseData || !phaseData.title) return null;
  
  // Get all elements with the enhanced-diagram-with-left-controls class
  const enhancedDiagramElements = document.querySelectorAll('.enhanced-diagram-with-left-controls');
  
  // If hideWhenLeftControls is true and there's an enhanced diagram with left controls,
  // don't render the content to avoid duplication
  if (hideWhenLeftControls && enhancedDiagramElements.length > 0) {
    return null;
  }
  
  return (
    <PhaseSection
      key={currentPhase}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PhaseTitle>{phaseData.title}</PhaseTitle>
      <PhaseDescription>
        {phaseData.description}
      </PhaseDescription>
      
      {phaseData.keyPoints && phaseData.keyPoints.length > 0 && (
        <PhaseKeyPoints>
          {phaseData.keyPoints.map((point, index) => (
            <li 
              key={index}
              style={{ 
                opacity: 0,
                animation: `fadeIn 0.5s ease forwards ${0.2 + index * 0.1}s` 
              }}
            >
              {point}
            </li>
          ))}
        </PhaseKeyPoints>
      )}
      
      {phaseData.quote && (
        <PhaseQuote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          "{phaseData.quote}"
        </PhaseQuote>
      )}
    </PhaseSection>
  );
};

export default DynamicPhaseContent;
