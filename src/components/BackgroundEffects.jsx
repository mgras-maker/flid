import React from 'react';
import styled, { keyframes } from 'styled-components';

// Animowane eleganckie tło gradientowe
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Usunięty kosztowny blur animation
// const blurAnimation = keyframes`
//   0% {
//     filter: blur(30px);
//   }
//   50% {
//     filter: blur(45px);
//   }
//   100% {
//     filter: blur(30px);
//   }
// `;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Eleganckie animowane kształty tła
const BackgroundShape = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(15px); /* Zmniejszona intensywność blur dla lepszej wydajności */
  animation: ${pulseAnimation} 12s ease-in-out infinite,
             ${floatAnimation} 15s ease-in-out infinite;
  /* Usunięta animacja blur dla zmniejszenia obciążenia GPU */
  opacity: 0.4; /* Zmniejszona widoczność dla lepszej wydajności */
  z-index: -1;
  will-change: transform, opacity; /* Sugeruje przeglądارce optymalizację animacji */
`;

export const Shape1 = styled(BackgroundShape)`
  width: 350px;
  height: 350px;
  top: 10%;
  left: -100px;
  background: var(--lavender-300);
  animation-delay: 0s;
`;

export const Shape2 = styled(BackgroundShape)`
  width: 500px;
  height: 500px;
  bottom: -150px;
  right: -150px;
  background: var(--lavender-500);
  animation-delay: 2s;
`;

export const Shape3 = styled(BackgroundShape)`
  width: 200px;
  height: 200px;
  top: 40%;
  left: 20%;
  background: var(--lavender-200);
  animation-delay: 4s;
`;

export const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(var(--primary-rgb), 0.05) 0%, 
    rgba(var(--accent-rgb), 0.1) 50%, 
    rgba(var(--lavender-rgb), 0.05) 100%);
  background-size: 200% 200%; /* Zmniejszony rozmiar tła dla płynniejszej animacji */
  animation: ${gradientAnimation} 30s ease infinite; /* Wolniejsza animacja dla mniejszego obciążenia */
  z-index: -2;
  will-change: background-position; /* Sugeruje przeglądارce optymalizację animacji */
`;

// Komponent tła z kształtami
export const ElegantBackground = () => {
  return (
    <>
      <Shape1 />
      <Shape2 />
      <Shape3 />
      <GradientBackground />
    </>
  );
};

// Elegancki separator sekcji
const wavePath = "M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,133.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z";

export const WaveSeparator = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  
  svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 85px;
    
    path {
      fill: ${props => props.color || 'white'};
    }
  }
`;

export const SectionSeparator = ({ color }) => {
  return (
    <WaveSeparator color={color}>
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d={wavePath} fill={color || "white"}></path>
      </svg>
    </WaveSeparator>
  );
};

// Elegancki dekoracyjny element
export const DecorElement = styled.div`
  position: absolute;
  width: 200px;  height: 200px;
  border: 1px solid rgba(var(--primary-rgb), 0.2);
  border-radius: ${props => props.$rounded ? '50%' : '0'};
  transform: rotate(45deg);
  z-index: -1;
`;
