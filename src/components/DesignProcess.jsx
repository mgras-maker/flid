import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Animowany nowoczesny proces projektowy - Design Thinking
export const DesignProcess = () => {
  const steps = [
    {
      number: '01',
      title: 'Empatyzacja',
      description: 'Zrozumienie potrzeb i problemów użytkowników poprzez badania i wywiady.',
      icon: 'research',
    },
    {
      number: '02',
      title: 'Definiowanie',
      description: 'Precyzyjne określenie problemu projektowego na podstawie zebranych spostrzeżeń.',
      icon: 'define',
    },
    {
      number: '03',
      title: 'Generowanie Pomysłów',
      description: 'Kreatywne poszukiwanie różnorodnych rozwiązań dla zdefiniowanego problemu.',
      icon: 'ideate',
    },
    {
      number: '04',
      title: 'Prototypowanie',
      description: 'Tworzenie wersji testowych pomysłów, które można pokazać użytkownikom.',
      icon: 'prototype',
    },
    {
      number: '05',
      title: 'Testowanie',
      description: 'Sprawdzenie prototypów z użytkownikami, zbieranie opinii i wprowadzanie ulepszeń.',
      icon: 'test',
    }
  ];
  
  return (
    <ProcessContainer>
      {steps.map((step, index) => (
        <ProcessItem
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProcessNumber>{step.number}</ProcessNumber>
          <ProcessIconContainer>
            <ProcessIcon type={step.icon} />
          </ProcessIconContainer>
          <ProcessContent>
            <ProcessTitle>{step.title}</ProcessTitle>
            <ProcessDescription>{step.description}</ProcessDescription>
          </ProcessContent>
        </ProcessItem>
      ))}
    </ProcessContainer>
  );
};

// Stylizowane komponenty
const ProcessContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 2rem 0 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const ProcessItem = styled(motion.div)`
  position: relative;  padding: 2rem;
  background: var(--card-bg);
  border-radius: 6px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.04);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(var(--primary-rgb), 0.15);
  }
`;

const ProcessNumber = styled.span`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  font-family: var(--font-heading);
  font-size: 2rem;
  font-weight: 700;
  color: rgba(var(--primary-rgb), 0.15);
  line-height: 1;
`;

const ProcessIconContainer = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--lavender-100);
  border-radius: 50%;
  margin-bottom: 1.5rem;
`;

// Komponenty ikon dla procesu projektowego
const getIconPath = (type) => {
  switch(type) {
    case 'research':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'define':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7V21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H2V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 3H16C14.9391 3 13.9217 3.42143 13.1716 4.17157C12.4214 4.92172 12 5.93913 12 7V21C12 20.2044 12.3161 19.4413 12.8787 18.8787C13.4413 18.3161 14.2044 18 15 18H22V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'ideate':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2V6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'prototype':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'test':
      return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

const ProcessIcon = ({ type }) => {
  return (
    <ProcessIconStyled>
      {getIconPath(type)}
    </ProcessIconStyled>
  );
};

const ProcessIconStyled = styled.div`
  color: var(--accent);
`;

const ProcessContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProcessTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  font-weight: 600;
`;

const ProcessDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin: 0;
`;
