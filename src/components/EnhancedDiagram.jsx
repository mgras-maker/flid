// EnhancedDiagram.jsx - Interaktywny komponent diagramu procesu z kontrolami animacji
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import DiagramProces from './DiagramProces';
import { ProcessPhaseContext } from '../contexts/ProcessPhaseContext.jsx';

// Style dla kontenera diagramu
const DiagramWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Style dla kontrolera animacji
const AnimationControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;
  max-width: 350px;
`;

const ControlRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const ControlLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
`;

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--lavender-200);
  background-color: var(--card-bg);
  font-size: 0.85rem;
  flex: 1;
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const SpeedControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  input {
    margin-top: 0.5rem;
  }
`;

const PhaseSelector = styled.div`
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  
  button {
    background: none;
    border: 2px solid var(--lavender-200);
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    font-size: 0.9rem;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    
    &.active {
      background-color: var(--accent);
      border-color: var(--accent);
      color: white;
      
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid var(--accent);
      }
    }
    
    &:hover:not(.active) {
      border-color: var(--accent);
      color: var(--accent);
    }
  }
`;

const EnhancedDiagram = () => {
  const { currentPhase, setCurrentPhase } = useContext(ProcessPhaseContext);
  const [animationStyle, setAnimationStyle] = useState('dynamicEntry');
  const [animationSpeed, setAnimationSpeed] = useState(1);
  
  const handleStyleChange = (e) => {
    setAnimationStyle(e.target.value);
  };
  
  const handleSpeedChange = (e) => {
    setAnimationSpeed(parseFloat(e.target.value));
  };

  const handlePhaseClick = (phase) => {
    setCurrentPhase(phase);
  };

  // Add click handler for diagram elements
  const handleDiagramClick = (e) => {
    // Check if the clicked element has a data-phase attribute
    const phaseElement = e.target.closest('[data-phase]');
    if (phaseElement) {
      const phase = phaseElement.getAttribute('data-phase');
      if (phase) {
        setCurrentPhase(phase);
      }
    }
  };
  return (
    <DiagramWrapper onClick={handleDiagramClick} className="enhanced-diagram-with-left-controls">
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%', marginTop: '-2rem' }}>
        <div style={{ width: '30%', padding: '0 1rem' }}>
          <PhaseSelector>
            <button 
              className={currentPhase === 's2' ? 'active' : ''} 
              onClick={() => handlePhaseClick('s2')}
            >
              Empatia
            </button>
            <button 
              className={currentPhase === 's3' ? 'active' : ''} 
              onClick={() => handlePhaseClick('s3')}
            >
              Materializacja
            </button>
            <button 
              className={currentPhase === 's1' ? 'active' : ''} 
              onClick={() => handlePhaseClick('s1')}
            >
              Rozumowanie
            </button>
          </PhaseSelector>
          
          <AnimationControls>
            <ControlRow>
              <ControlLabel>Styl animacji:</ControlLabel>
              <Select value={animationStyle} onChange={handleStyleChange}>
                <option value="dynamicEntry">Dynamiczne Wejście</option>
                <option value="springPop">Sprężyste Pojawienie</option>
                <option value="smoothUnfold">Płynne Odsłanianie</option>
                <option value="blueprintReveal">Odsłanianie Rysunku Tech.</option>
              </Select>
            </ControlRow>
            
            <SpeedControl>
              <ControlLabel>Szybkość animacji: {animationSpeed}x</ControlLabel>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={animationSpeed}
                onChange={handleSpeedChange}
              />
            </SpeedControl>
          </AnimationControls>
        </div>
        
        <div style={{ width: '70%' }}>
          <DiagramProces 
            preset={animationStyle} 
            speed={animationSpeed}
            onPhaseClick={handlePhaseClick}
            activePhase={currentPhase}
            controlsOnLeft={true}
          />
        </div>
      </div>
    </DiagramWrapper>
  );
};

export default EnhancedDiagram;
