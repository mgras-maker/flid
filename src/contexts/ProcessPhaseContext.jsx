// ProcessPhaseContext.jsx - Kontekst dla aktualnej fazy procesu
import React, { useState, useEffect, createContext } from 'react';
import { processPhaseData } from '../data/processPhaseData';

// Kontekst do przechowywania i udostępniania aktualnej fazy procesu
export const ProcessPhaseContext = createContext({
  currentPhase: 's3', // Domyślnie Materializacja
  setCurrentPhase: () => {},
  phaseData: null, // Set to null instead of empty object so components can properly check
});

export const ProcessPhaseProvider = ({ children }) => {
  const [currentPhase, setCurrentPhase] = useState('s3'); // Domyślnie Materializacja
  const [phaseData, setPhaseData] = useState(processPhaseData.s3);

  useEffect(() => {
    setPhaseData(processPhaseData[currentPhase]);
  }, [currentPhase]);

  return (
    <ProcessPhaseContext.Provider value={{ currentPhase, setCurrentPhase, phaseData }}>
      {children}
    </ProcessPhaseContext.Provider>
  );
};
