// PhaseKeySteps.jsx - Komponent wyświetlający kroki dla aktualnej fazy
import React, { useContext } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ProcessPhaseContext } from '../contexts/ProcessPhaseContext.jsx';

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
  width: 100%;
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ProcessStepNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
  min-width: 2.5rem;
`;

const ProcessStepContent = styled.div`
  flex: 1;
`;

const ProcessStepTitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const ProcessStepDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.5;
`;

// Mapowanie punktów kluczowych dla poszczególnych faz
const phaseStepsMap = {
  's2': [ // Empatia
    {
      number: '01',
      title: 'Obserwacja i rozmowy z użytkownikami',
      description: 'Bezpośredni kontakt umożliwia zrozumienie ich perspektywy.'
    },
    {
      number: '02',
      title: 'Identyfikacja prawdziwych potrzeb',
      description: 'Odkrywanie ukrytych potrzeb i motywacji użytkowników.'
    },
    {
      number: '03',
      title: 'Definiowanie głównego problemu',
      description: 'Precyzyjne określenie problemu, który chcemy rozwiązać.'
    },
    {
      number: '04',
      title: 'Tworzenie map empatii',
      description: 'Wizualizacja doświadczeń i emocji użytkowników.'
    }
  ],
  's3': [ // Materializacja
    {
      number: '01',
      title: 'Burza mózgów i ideacja',
      description: 'Generowanie innowacyjnych pomysłów i koncepcji rozwiązań.'
    },
    {
      number: '02',
      title: 'Szybkie prototypowanie',
      description: 'Tworzenie namacalnych wersji pomysłów do testowania.'
    },
    {
      number: '03',
      title: 'Testowanie z użytkownikami',
      description: 'Zbieranie feedbacku od rzeczywistych użytkowników.'
    },
    {
      number: '04',
      title: 'Iteracyjne udoskonalanie',
      description: 'Ciągłe udoskonalanie rozwiązań na podstawie zebranego feedbacku.'
    }
  ],
  's1': [ // Rozumowanie
    {
      number: '01',
      title: 'Analiza danych z testów',
      description: 'Przegląd i interpretacja danych zebranych podczas testowania.'
    },
    {
      number: '02',
      title: 'Optymalizacja rozwiązań',
      description: 'Wprowadzanie ulepszeń na podstawie analizy danych.'
    },
    {
      number: '03',
      title: 'Implementacja finalnego produktu',
      description: 'Wdrażanie zoptymalizowanego rozwiązania.'
    },
    {
      number: '04',
      title: 'Ewaluacja i dalszy rozwój',
      description: 'Monitorowanie efektów i planowanie przyszłych ulepszeń.'
    }
  ]
};

const PhaseKeySteps = ({ hideWhenLeftControls }) => {
  const { currentPhase, phaseData } = useContext(ProcessPhaseContext);
  
  // Only render when we have valid phaseData
  // This ensures we only render inside a proper provider
  if (!phaseData || !phaseData.title) return null;
  
  // Get all elements with the enhanced-diagram-with-left-controls class
  const enhancedDiagramElements = document.querySelectorAll('.enhanced-diagram-with-left-controls');
  
  // If hideWhenLeftControls is true and there's an enhanced diagram with left controls,
  // don't render the content to avoid duplication
  if (hideWhenLeftControls && enhancedDiagramElements.length > 0) {
    return null;
  }
  
  const steps = phaseStepsMap[currentPhase] || [];
  
  return (
    <ProcessSteps>
      {steps.map((step, index) => (
        <ProcessStep 
          key={`${currentPhase}-${index}`}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.3 + index * 0.1,
            type: "spring",
            stiffness: 120,
            damping: 10
          }}
        >
          <ProcessStepNumber>{step.number}</ProcessStepNumber>
          <ProcessStepContent>
            <ProcessStepTitle>{step.title}</ProcessStepTitle>
            <ProcessStepDescription>{step.description}</ProcessStepDescription>
          </ProcessStepContent>
        </ProcessStep>
      ))}
    </ProcessSteps>
  );
};

export default PhaseKeySteps;
