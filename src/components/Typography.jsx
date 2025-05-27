import React from 'react';
import styled from 'styled-components';

// Eleganckie komponenty typograficzne

export const DisplayTitle = styled.h1`
  font-family: var(--font-heading);
  font-size: clamp(3rem, 5vw, 5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 8vw, 3.5rem);
  }
`;

export const DisplaySubtitle = styled.p`
  font-family: var(--font-serif);
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 500;
  line-height: 1.4;
  color: var(--text-secondary);
  max-width: 800px;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: clamp(1.125rem, 4vw, 1.5rem);
  }
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-heading);
  font-size: clamp(2.25rem, 4vw, 3.25rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin-bottom: 1rem;
    position: relative;
  display: inline-block;
  
  ${props => props.$withLine && `
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--primary), var(--accent));
      transition: width 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
    }
    
    &:hover::after {
      width: 80px;
    }
  `}
  
  @media (max-width: 768px) {
    font-size: clamp(1.75rem, 6vw, 2.5rem);
  }
`;

export const SectionSubtitle = styled.p`
  font-family: var(--font-serif);
  font-size: clamp(1.125rem, 2vw, 1.35rem);
  font-weight: 500;
  line-height: 1.5;
  color: var(--text-secondary);
  max-width: 800px;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.25rem);
    margin-bottom: 2rem;
  }
`;

export const Paragraph = styled.p`
  font-family: var(--font-body);
  font-size: ${props => props.$large ? '1.125rem' : '1rem'};
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: ${props => props.$light ? 'var(--text-light)' : 'var(--text-secondary)'};
  max-width: ${props => props.$wide ? '100%' : '800px'};
`;

export const TextAccent = styled.span`
  font-family: var(--font-serif);
  font-style: italic;
  color: var(--accent);
`;

export const QuoteText = styled.blockquote`
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 500;
  font-style: italic;
  line-height: 1.6;
  color: var(--text);
  border-left: 3px solid var(--primary);
  padding-left: 1.5rem;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 2rem;
`;

// Używaj tego komponentu do tworzenia nagłówków sekcji
export const SectionHeader = ({ title, subtitle, centered = false }) => {
  return (
    <SectionHeaderWrapper $centered={centered}>
      <SectionTitle $withLine={!centered}>{title}</SectionTitle>
      {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
    </SectionHeaderWrapper>
  );
};

const SectionHeaderWrapper = styled.div`
  margin-bottom: 3rem;
  text-align: ${props => props.$centered ? 'center' : 'left'};
  
  ${props => props.$centered && `
    ${SectionTitle} {
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }
    
    ${SectionSubtitle} {
      margin-left: auto;
      margin-right: auto;
    }
  `}
`;
