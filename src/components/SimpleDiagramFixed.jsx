// SimpleDiagramFixed.jsx - Naprawiony komponent diagramu procesu bez dodatkowych elementów

import React from 'react';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import DiagramProces from './DiagramProces';

// Styled container to properly size and position the diagram
const DiagramWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Styles to hide the ProcessDescription and controls from the original DiagramProces */
  div.w-full.h-full.flex {
    display: block !important;
  }
  
  div.w-2\/5.h-full {
    display: none !important;
  }
  
  div.absolute.top-2.right-2 {
    display: none !important;
  }
  
  button.mt-4.px-6.py-3 {
    display: none !important;
  }
  
  /* Scale the diagram to fit in our column */
  div.w-3\/5.h-full {
    width: 100% !important;
  }
`;

// This simplified component just wraps the full DiagramProces but hides additional elements
const SimpleDiagramFixed = () => {
  return (
    <DiagramWrapper>
      <DiagramProces />
    </DiagramWrapper>
  );
};

export default SimpleDiagramFixed;
