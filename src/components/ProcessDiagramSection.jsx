import React, { useState, useContext, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
/* eslint-enable no-unused-vars */
import DiagramProces from './DiagramProces';
import { ProcessPhaseContext } from '../contexts/ProcessPhaseContext';
import { processPhaseData } from '../data/processPhaseData';

// Add global styles for dropdown z-index fixes
const GlobalSelectStyle = createGlobalStyle`
  :root {
    --accent-rgb: 97, 106, 229;
  }
  
  select:focus-visible {
    outline: none;
  }
  
  /* Safari focus styling fix */
  @media not all and (min-resolution:.001dpcm) { 
    @supports (-webkit-appearance:none) {
      select:focus {
        box-shadow: 0 0 0 1px var(--accent);
      }
    }
  }
  
`;

// Component for the process description section
const ProcessDiagramSection = () => {  // Use the context for phase management
  const { currentPhase, setCurrentPhase } = useContext(ProcessPhaseContext);
    // Animation style and speed state
  const [animationStyle, setAnimationStyle] = useState('dynamicEntry');
  const [animationSpeed, setAnimationSpeed] = useState(1);
    // We get phase names directly from the phase data
  // Initialize to s2 (Empatia) if not set
  useEffect(() => {
    if (!currentPhase) {
      setCurrentPhase('s2');
    }
  }, [currentPhase, setCurrentPhase]);
    // Handlers for controls
  const handleStyleChange = (e) => {
    setAnimationStyle(e.target.value);
  };
    const handleSpeedChange = (e) => {
    setAnimationSpeed(parseFloat(e.target.value));
  };
  const handlePhaseClick = (phase) => {
    setCurrentPhase(phase);
  };
  
  // Get current phase data
  const phaseData = processPhaseData[currentPhase] || processPhaseData.s2;
  
  return (
    <ProcessSectionWrapper className="process-diagram-section">
      <GlobalSelectStyle />
      
      <ProcessContentWrapper>
        <ProcessDescriptionColumn><AnimatePresence mode="wait">            <motion.div
              key={`phase-${currentPhase}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
              className="process-description-content"
            >
                <PhaseContent>
                <PhaseLabel>{phaseData.subtitle}</PhaseLabel>
                <PhaseTitle>{phaseData.title}</PhaseTitle>
                <PhaseDescription>{phaseData.description}</PhaseDescription>
                
                <KeyPoints>
                  <KeyPointsTitle>Kluczowe elementy</KeyPointsTitle>
                  <KeyPointsList>
                    {phaseData.keyPoints.map((point, index) => (
                      <KeyPointItem key={index}>
                        <KeyPointBullet>•</KeyPointBullet>
                        <span>{point}</span>
                      </KeyPointItem>
                    ))}
                  </KeyPointsList>
                </KeyPoints>
                
                {phaseData.quote && (
                  <PhaseQuote>
                    <QuoteText>"{phaseData.quote}"</QuoteText>
                  </PhaseQuote>
                )}
              </PhaseContent>            </motion.div>
          </AnimatePresence>
        </ProcessDescriptionColumn>
          <DiagramColumn>
            <div className="w-full h-full flex items-center justify-center relative diagram-wrapper">              
              <div className="diagram-scale-container w-full h-full">                
                <DiagramProces 
                  preset={animationStyle} 
                  speed={animationSpeed}
                  activePhase={currentPhase}
                  onPhaseClick={handlePhaseClick}
                  controlsOnLeft={true} />
              </div>
            </div>
        </DiagramColumn>
      </ProcessContentWrapper>
      
      <AnimationControlsContainer>
        <ControlsWrapper>
          <ControlGroup>
            <ControlLabel>Styl:</ControlLabel>
            <SelectWrapper>
              <Select value={animationStyle} onChange={handleStyleChange}>
                <option value="dynamicEntry">Dynamiczne Wejście</option>
                <option value="springPop">Sprężyste Pojawienie</option>
                <option value="smoothUnfold">Płynne Odsłanianie</option>
                <option value="blueprintReveal">Odsłanianie Rysunku Tech.</option>
                <option value="circuitTrace">Śledzenie Obwodu</option>
                <option value="cinematicBuildUp">Kinematograficzne Budowanie</option>
                <option value="organicGrowth">Organiczny Wzrost</option>
                <option value="energyBurst">Rozbłysk Energii</option>
                <option value="quantumPulse">Pulsowanie Kwantowe</option>
              </Select>
            </SelectWrapper>
          </ControlGroup>          
          <ControlGroup>
            <ControlLabel>Szybkość:</ControlLabel>
            <SelectWrapper>
              <Select value={animationSpeed.toString()} onChange={handleSpeedChange}>
                <option value="0.5">Wolno (0.5x)</option>
                <option value="0.75">Powoli (0.75x)</option>
                <option value="1">Normalnie (1x)</option>
                <option value="1.5">Szybko (1.5x)</option>
                <option value="2">Bardzo szybko (2x)</option>
              </Select>
            </SelectWrapper>
          </ControlGroup>
        </ControlsWrapper>
      </AnimationControlsContainer>
    </ProcessSectionWrapper>
  );
};

// Styled components
const ProcessSectionWrapper = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: -300px auto 0 auto;
  padding: 0 2.2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  background: var(--background);
  color: var(--text);
  transition: background-color 0.5s ease, color 0.5s ease;
  
  @media (min-width: 1200px) {
    margin: 0 auto;
    padding: 0 2.7rem 2.2rem;
    gap: 0.8rem;
  }
  
  @media (min-width: 1440px) {
    margin: 0 auto;
    padding: 0 3.2rem 2.4rem;
    gap: 0.9rem;
  }
  
  @media (min-width: 1920px) {
    margin: 0 auto;
    max-width: 1500px;
    padding: 0 3.7rem 2.6rem;
    gap: 1rem;
  }
  
  @media (min-width: 2560px) {
    margin: 0 auto;
    max-width: 1600px;
    padding: 0 4.2rem 2.8rem;
    gap: 1.1rem;
  }
  
  @media (min-width: 3840px) {
    max-width: 1800px;
    padding: 1rem 5.2rem 4.7rem;
    gap: 1.5rem;
  }  @media (max-width: 992px) {
    margin: 0 auto;
    padding: 0 1.7rem 2rem;
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    margin: 0 auto;
    padding: 0 1.7rem 1.5rem;
    gap: 0.8rem;
  }
`;

// Usunięto niepotrzebny komponent ProcessHeading

const ProcessContentWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 5.5rem;
  align-items: center;
  background: var(--background);
  color: var(--text);
  transition: background-color 0.5s ease, color 0.5s ease;
  margin-top: -100px;
  
  @media (min-width: 1200px) {
    gap: 6rem;
  }
  
  @media (min-width: 1440px) {
    gap: 6.5rem;
  }
  
  @media (min-width: 1920px) {
    gap: 7rem;
  }
  
  @media (min-width: 2560px) {
    gap: 8rem;
  }
  
  @media (max-width: 1199px) {
    gap: 5rem;
  }  @media (max-width: 992px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    gap: 0.8rem;
  }
`;

const ProcessDescriptionColumn = styled.div`
  flex: 0 0 38%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: -5%;
  color: var(--text);
  transition: color 0.5s ease;
  
  .process-description-content {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  @media (min-width: 1200px) {
    flex: 0 0 39%;
    margin-left: -6%;
  }
  
  @media (min-width: 1920px) {
    flex: 0 0 37%;
    margin-left: -7%;
  }
  
  @media (min-width: 2560px) {
    flex: 0 0 35%;
    margin-left: -8%;
  }
  
  @media (max-width: 1199px) {
    flex: 0 0 38%;
    margin-left: -3%;
  }
    @media (max-width: 992px) {
    flex: 0 0 100%;
    margin-left: 0; /* Reset margin for mobile layouts */
    display: none; /* Hide phase description texts on mobile */
  }
`;

const DiagramColumn = styled.div`
  flex: 0 0 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  position: relative;
  overflow: visible;
  z-index: 1;
  min-width: 400px;
  max-width: 100%;  padding-right: 5%;
  margin-top: 200px;
  margin-left: 225px;

  .diagram-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .diagram-scale-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transform-origin: center center;
    transform: scale(2.2);
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  }

  @media (min-width: 1200px) {
    padding-right: 7%;
    
    .diagram-scale-container {
      transform: scale(2.3);
    }
  }

  @media (min-width: 1440px) {
    height: 620px;
    padding-right: 9%;
    
    .diagram-scale-container {
      transform: scale(2.4);
    }
  }
  
  @media (min-width: 1920px) {
    flex: 0 0 64%;
    height: 650px;
    padding-right: 12%;
    
    .diagram-scale-container {
      transform: scale(2.5);
    }
  }

  @media (min-width: 2560px) {
    height: 700px;
    padding-right: 15%;
    
    .diagram-scale-container {
      transform: scale(2.6);
    }
  }
  
  @media (min-width: 3840px) {
    height: 750px;
    padding-right: 18%;
    
    .diagram-scale-container {
      transform: scale(2.7);
    }
  }
  
  @media (max-width: 1199px) {
    padding-right: 3%;
    
    .diagram-scale-container {
      transform: scale(2.1);
    }
  }  @media (max-width: 992px) {
    flex: 0 0 90%;
    height: 500px;
    min-width: 90%;
    width: 90%;
    padding-right: 0;
    margin-bottom: -6rem;
    margin-top: -75px;
    margin-left: auto;
    margin-right: auto;
    
    .diagram-scale-container {
      transform: scale(1.95);
    }
    
    .diagram-wrapper {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    height: 450px;
    flex: 0 0 95%;
    min-width: 95%;
    width: 95%;
    margin-bottom: -6rem;
    margin-top: -75px;
    margin-left: auto;
    margin-right: auto;
    
    .diagram-scale-container {
      transform: scale(1.75);
    }
  }

  @media (max-width: 480px) {
    height: 400px;
    flex: 0 0 100%;
    min-width: 100%;
    width: 100%;
    margin-bottom: -6rem;
    margin-top: -75px;
    margin-left: auto;
    margin-right: auto;
    
    .diagram-scale-container {
      transform: scale(1.5);
    }
  }
`;

const PhaseSelector = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  
  button {
    background: none;
    border: 2px solid var(--lavender-200);
    border-radius: 4px;
    padding: 0.55rem 1.35rem;
    margin-right: 0.85rem;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 1.05rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    position: relative;
    color: var(--text-secondary);
    
    &:last-child {
      margin-right: 0;
    }
    
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
  
  @media (min-width: 1440px) {
    button {
      font-size: 1.1rem;
      padding: 0.6rem 1.4rem;
    }
  }
  
  @media (min-width: 1920px) {
    button {
      font-size: 1.15rem;
      padding: 0.65rem 1.45rem;
    }
  }
  
  @media (min-width: 2560px) {
    button {
      font-size: 1.2rem;
      padding: 0.7rem 1.5rem;
    }
  }
`;

const PhaseContent = styled.div`
  padding: 0.6rem 0.8rem 0.6rem 0.6rem; /* Reduced left padding to move text further left */
  flex: 1;
  max-width: 96%;
  color: var(--text);
  transition: color 0.5s ease;
  
  @media (min-width: 1200px) {
    padding: 0.65rem 0.8rem 0.65rem 0.7rem;
    max-width: 98%;
  }
  
  @media (min-width: 1440px) {
    padding: 0.8rem 1rem 0.8rem 0.8rem;
    max-width: 100%;
  }
  
  @media (min-width: 1920px) {
    padding: 0.85rem 1rem 0.85rem 0.9rem;
  }
  
  @media (min-width: 2560px) {
    padding: 1.1rem 1.2rem 1.1rem 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 1rem 0.4rem 0.8rem;
    max-width: 100%;
  }
`;

const PhaseLabel = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: var(--accent);
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  transition: color 0.5s ease;
  
  @media (min-width: 1440px) {
    font-size: 1.15rem;
    letter-spacing: 1.1px;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.2rem;
    letter-spacing: 1.15px;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.25rem;
    letter-spacing: 1.2px;
    margin-bottom: 0.85rem;
  }
`;

const PhaseTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1.15rem;
  color: var(--text);
  letter-spacing: 0.01em;
  line-height: 1.2;
  transition: color 0.5s ease;
  
  @media (min-width: 1440px) {
    font-size: 2.45rem;
    line-height: 1.15;
  }
  
  @media (min-width: 1920px) {
    font-size: 2.6rem;
  }
  
  @media (min-width: 2560px) {
    font-size: 2.8rem;
    margin-bottom: 1.35rem;
  }
`;

const PhaseDescription = styled.p`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.15rem;
  line-height: 1.68;
  color: var(--text);
  margin-bottom: 1.65rem;
  max-width: 97%;
  transition: color 0.5s ease;
  
  @media (min-width: 1440px) {
    font-size: 1.2rem;
    line-height: 1.72;
    max-width: 95%;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.25rem;
    line-height: 1.74;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.3rem;
    line-height: 1.76;
    margin-bottom: 2rem;
  }
`;

const KeyPoints = styled.div`
  margin-top: 1.85rem;
  margin-bottom: 2.45rem;
  
  @media (min-width: 1440px) {
    margin-top: 1.9rem;
    margin-bottom: 2.5rem;
  }
  
  @media (min-width: 1920px) {
    margin-top: 2rem;
    margin-bottom: 2.6rem;
  }
  
  @media (min-width: 2560px) {
    margin-top: 2.1rem;
    margin-bottom: 2.75rem;
  }
`;

const KeyPointsTitle = styled.h4`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06rem;
  color: var(--text);
  margin-bottom: 1.25rem;
  transition: color 0.5s ease;
  
  @media (min-width: 1440px) {
    font-size: 1.05rem;
    letter-spacing: 0.065rem;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.1rem;
    letter-spacing: 0.068rem;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.15rem;
    letter-spacing: 0.07rem;
    margin-bottom: 1.5rem;
  }
`;

const KeyPointsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const KeyPointItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.85rem;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.55;
  max-width: 95%;
  
  @media (min-width: 1440px) {
    font-size: 1.1rem;
    margin-bottom: 0.95rem;
    line-height: 1.57;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.15rem;
    line-height: 1.58;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    line-height: 1.6;
  }
`;

const KeyPointBullet = styled.span`
  color: var(--accent);
  font-size: 1.3rem;
  margin-right: 0.75rem;
  line-height: 1;
  
  @media (min-width: 1440px) {
    font-size: 1.35rem;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.4rem;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.45rem;
  }
`;

const PhaseQuote = styled.div`
  margin-top: 1.75rem;
  padding-left: 1.35rem;
  border-left: 3px solid var(--lavender-200);
  position: relative;
  
  &::before {
    content: '"';
    position: absolute;
    top: -1.5rem;
    left: -0.5rem;
    font-family: 'Playfair Display', serif;
    font-size: 3.2rem;
    color: var(--lavender-200);
    opacity: 0.6;
    line-height: 1;
  }
  
  @media (min-width: 1440px) {
    padding-left: 1.6rem;
    
    &::before {
      font-size: 3.4rem;
    }
  }
  
  @media (min-width: 1920px) {
    padding-left: 1.7rem;
    
    &::before {
      font-size: 3.5rem;
      top: -1.65rem;
    }
  }
  
  @media (min-width: 2560px) {
    padding-left: 1.85rem;
    margin-top: 2.1rem;
    
    &::before {
      font-size: 3.7rem;
      top: -1.75rem;
    }
  }
`;

const QuoteText = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem;
  font-style: italic;
  color: var(--text-secondary);
  line-height: 1.62;
  position: relative;
  transition: color 0.5s ease;
  
  @media (min-width: 1440px) {
    font-size: 1.2rem;
    line-height: 1.65;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.25rem;
    line-height: 1.68;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.3rem;
    line-height: 1.7;
  }
`;

const AnimationControlsContainer = styled.div`
  width: 100%;
  margin-top: -60px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 20;
  
  @media (min-width: 1200px) {
    margin-top: -60px;
  }
  
  @media (min-width: 1440px) {
    margin-top: -60px;
  }
  
  @media (min-width: 1920px) {
    margin-top: -60px;
  }
  
  @media (min-width: 2560px) {
    margin-top: -60px;
  }
    @media (max-width: 992px) {
    justify-content: center; /* Center on mobile/tablet */
    display: none; /* Hide animation controls on mobile */
  }
  
  @media (max-width: 768px) {
    margin-top: 1rem;
    justify-content: center;
    display: none; /* Hide animation controls on mobile */
  }
`;

const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  justify-content: flex-start; /* Align controls to the left instead of center */
  align-items: center;
  position: relative; /* Ensure proper stacking context */
  z-index: 15;
  width: 100%;
  max-width: 1300px;
  padding-left: 0; /* Reset padding */
  margin-left: -5%; /* Align with left edge of text column */
  
  @media (min-width: 1440px) {
    gap: 1.5rem;
    margin-left: -6%;
  }
  
  @media (min-width: 1920px) {
    gap: 1.75rem;
    margin-left: -7%;
  }
  
  @media (min-width: 2560px) {
    gap: 2rem;
    margin-left: -8%;
  }
  
  @media (max-width: 1199px) {
    margin-left: -3%;
  }
  
  @media (max-width: 992px) {
    justify-content: center;
    margin-left: 0;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
    margin-left: 0;
  }
`;

const ControlGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.85rem;
  min-width: 230px;
  position: relative; /* Ensure proper positioning for child elements */
  
  @media (min-width: 1440px) {
    min-width: 250px;
    gap: 0.95rem;
  }
  
  @media (min-width: 1920px) {
    min-width: 260px;
    gap: 1rem;
  }
  
  @media (min-width: 2560px) {
    min-width: 280px;
    gap: 1.1rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ControlLabel = styled.label`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-secondary);
  white-space: nowrap;
  letter-spacing: 0.02em;
  
  @media (min-width: 1440px) {
    font-size: 1.1rem;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.15rem;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.2rem;
    letter-spacing: 0.025em;
  }
`;

const Select = styled.select`
  padding: 0.5rem 0.75rem;
  border-radius: 4px;
  border: 1px solid var(--lavender-200);
  background-color: var(--card-bg);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1rem;
  color: var(--text);
  width: 100%;
  min-width: 210px;
  position: relative;
  z-index: 10; /* Ensure dropdown appears above other elements */
  cursor: pointer;
  appearance: none; /* Remove default appearance */
  -webkit-appearance: none; /* For Safari */
  -moz-appearance: none; /* For Firefox */
  transition: border-color 0.2s ease;
  
  /* Custom dropdown arrow indicator */
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  padding-right: 2.25rem; /* Add space for the arrow */
  
  &:hover {
    border-color: var(--accent);
  }
  
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
  
  @media (min-width: 1440px) {
    font-size: 1.05rem;
    min-width: 230px;
    padding: 0.55rem 0.8rem;
  }
  
  @media (min-width: 1920px) {
    font-size: 1.1rem;
    min-width: 240px;
  }
  
  @media (min-width: 2560px) {
    font-size: 1.15rem;
    min-width: 250px;
    padding: 0.6rem 0.85rem;
  }
`;

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
  
  &:hover {
    &::after {
      opacity: 0.8;
    }
  }
`;

// SpeedSlider component removed as we now use a dropdown

export default ProcessDiagramSection;
