// Minimalistyczny, techniczny diagram procesu projektowego
// Poprawiona wersja eliminująca błędy HTTP 500
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ProcessCircleAnimation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  
  // Definicja kroków procesu
  const steps = [
    {
      id: 'empathy',
      label: 'empatia',
      shortLabel: 'I. odczuj',
      description: 'definiowanie problemu',
      angle: 230, // pozycja w stopniach na okręgu
    },
    {
      id: 'reasoning',
      label: 'rozumowanie',
      shortLabel: 'II. wymyśl',
      description: 'koncypowanie rozwiązań',
      angle: 350, // pozycja w stopniach na okręgu
    },
    {
      id: 'materialization',
      label: 'materializacja',
      shortLabel: 'III. zrób',
      description: 'prototypowanie i testowanie',
      angle: 110, // pozycja w stopniach na okręgu
    }
  ];
  
  // Automatyczna zmiana aktywnego kroku co 4 sekundy
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [steps.length]);
  
  // Funkcja do obsługi kliknięć na etap
  const handleStepClick = (index) => {
    setActiveStep(index);
  };
  
  // Obliczanie pozycji punktów na okręgu
  const getCircleX = (angle, radius = 120) => {
    return 150 + radius * Math.cos(angle * Math.PI / 180);
  };
  
  const getCircleY = (angle, radius = 120) => {
    return 150 + radius * Math.sin(angle * Math.PI / 180);
  };
  
  // Rysowanie trójkąta
  const trianglePoints = `
    ${getCircleX(steps[0].angle)},${getCircleY(steps[0].angle)}
    ${getCircleX(steps[1].angle)},${getCircleY(steps[1].angle)}
    ${getCircleX(steps[2].angle)},${getCircleY(steps[2].angle)}
  `;
  return (
    <DiagramContainer>
      <svg viewBox="0 0 300 300" role="img" aria-label="Diagram procesu projektowego">
        {/* Okrąg zewnętrzny */}
        <circle 
          cx="150" 
          cy="150" 
          r="120" 
          fill="none" 
          stroke="#343434" 
          strokeWidth="1.5"
        />

        {/* Przerywane elementy okręgu */}
        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const startAngle = step.angle - 25;
          const endAngle = step.angle + 25;
          const startX = getCircleX(startAngle);
          const startY = getCircleY(startAngle);
          const endX = getCircleX(endAngle);
          const endY = getCircleY(endAngle);
          const stepX = getCircleX(step.angle);
          const stepY = getCircleY(step.angle);
          
          return (
            <g key={step.id}>              <path
                d={`M ${startX},${startY} A 120,120 0 0,1 ${endX},${endY}`}
                stroke={isActive ? "#6750A4" : "#343434"}
                strokeWidth={isActive ? "2.5" : "1.5"}
                fill="none"
                strokeDasharray={isActive ? "0" : "3,3"}
              />
              
              <circle 
                cx={stepX} 
                cy={stepY}
                r="5" 
                fill={isActive ? "#6750A4" : hoveredStep === index ? "#eee" : "#fff"} 
                stroke={isActive ? "#6750A4" : "#343434"} 
                strokeWidth={isActive || hoveredStep === index ? "2" : "1.5"}
                style={{ cursor: "pointer" }}
                onClick={() => handleStepClick(index)}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              />
              
              <line 
                x1="150" 
                y1="150" 
                x2={stepX} 
                y2={stepY} 
                stroke={isActive ? "#6750A4" : "#343434"}
                strokeWidth={index === activeStep ? "1.5" : "1"}
                strokeDasharray={index === activeStep ? "0" : "2,2"}
              />
            </g>
          );
        })}        {/* Trójkąt w środku */}
        <polygon 
          points={trianglePoints}
          fill="none"
          stroke="#343434"
          strokeWidth="1"
          strokeDasharray="3,3"
        />
        
        {/* Centralny punkt */}
        <circle cx="150" cy="150" r="3" fill="#6750A4" />
      </svg>
      
      {/* Etykiety kroków procesu */}
      {steps.map((step, index) => {        const isRight = step.angle <= 90 || step.angle >= 270;
        // Calculate offset positions for better label placement
        let offsetX = 0;
        let offsetY = 0;
        
        if (step.angle === 230) {
          offsetX = -20;
          offsetY = 5;
        } else if (step.angle === 350) {
          offsetX = 15;
          offsetY = -5;
        } else if (step.angle === 110) {
          offsetX = -15;
          offsetY = 0;
        }
        
        const labelX = getCircleX(step.angle, 160) + offsetX;
        const labelY = getCircleY(step.angle, 160) + offsetY;
        
        return (
          <DiagramLabel 
            key={`label-${step.id}`}
            style={{
              position: 'absolute',
              left: `${labelX}px`,
              top: `${labelY}px`,
              transform: 'translate(-50%, -50%)',
              textAlign: isRight ? 'left' : 'right',
              maxWidth: '130px',
              opacity: index === activeStep ? 1 : 0.85,
              boxShadow: index === activeStep ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
            }}
            onClick={() => handleStepClick(index)}
          >            <StepNumber $position={isRight ? 'left' : 'right'}>
              {step.shortLabel}
            </StepNumber>
            <StepTitle $active={index === activeStep}>
              {step.label}
            </StepTitle>
            <StepDescription>
              {step.description}
            </StepDescription>
          </DiagramLabel>
        );
      })}
      
      {/* Tekst informujący o aktualnym kroku */}
      <DiagramCaption>
        {steps[activeStep].label}: {steps[activeStep].description}
      </DiagramCaption>
      
      {/* Ukryta treść dla czytników ekranowych */}
      <ScreenReaderText>
        <h3>Proces projektowy składa się z trzech etapów:</h3>
        <ol>
          {steps.map(step => (
            <li key={step.id}>
              {step.shortLabel} - {step.label}: {step.description}
            </li>
          ))}
        </ol>
      </ScreenReaderText>
    </DiagramContainer>
  );
};

// Stylizowane komponenty
const DiagramContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const DiagramLabel = styled.div`
  cursor: pointer;
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  }
`;

const StepNumber = styled.div`
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  top: -24px;
  ${props => props.$position === 'left' ? 'left: 0;' : 'right: 0;'}
  letter-spacing: 0.5px;
  color: #333;
`;

const StepTitle = styled.div`
  font-size: 16px;
  font-weight: ${props => props.$active ? 'bold' : 'normal'};
  letter-spacing: 0.2px;
  font-family: 'Playfair Display', serif;
`;

const StepDescription = styled.div`
  font-size: 12px;
  opacity: 0.8;
  margin-top: 2px;
  font-family: 'Plus Jakarta Sans', sans-serif;
  letter-spacing: 0.1px;
`;

const DiagramCaption = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
  letter-spacing: 0.03em;
  position: absolute;
  bottom: -40px;
  width: 100%;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 8px;
  border-radius: 4px;
`;

const ScreenReaderText = styled.div`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export default ProcessCircleAnimation;
