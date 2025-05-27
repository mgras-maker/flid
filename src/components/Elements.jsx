import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Nowoczesne, eleganckie komponenty kart

export const Card = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0), 
              box-shadow 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 35px rgba(var(--primary-rgb), 0.15);
  }
`;

export const CardImage = styled.div`
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  }
  
  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

export const CardTag = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(var(--accent-rgb), 0.9);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  backdrop-filter: blur(5px);
`;

export const CardContent = styled.div`
  padding: 1.5rem 2rem 2rem;
`;

export const CardTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text);
  transition: color 0.3s ease;
  
  ${Card}:hover & {
    color: var(--accent);
  }
`;

export const CardDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--text-light);
  font-size: 0.85rem;
`;

// Komponenty siatki do układania kart

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 2.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

export const ModernProjectCard = ({ project, ...props }) => {
  return (
    <Card as={Link} to={`/projects/${project.slug}`} {...props}>
      <CardImage>
        <img src={project.coverImage || '/images/placeholder.svg'} alt={project.title} />
        {project.category && <CardTag>{project.category}</CardTag>}
      </CardImage>
      <CardContent>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.shortDesc}</CardDescription>
        <CardMeta>
          <span>{project.year}</span>
          <span>Zobacz projekt →</span>
        </CardMeta>
      </CardContent>
    </Card>
  );
};

// Container dla sekcji

export const Section = styled.section`
  padding: ${props => props.$small ? '4rem 0' : '6rem 0'};
  background-color: ${props => props.$light ? 'var(--neutral-200)' : 'var(--background)'};
  
  @media (max-width: 768px) {
    padding: ${props => props.$small ? '3rem 0' : '4rem 0'};
  }
`;

export const Container = styled.div`
  width: var(--content-width);
  max-width: var(--max-content-width);
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  align-items: ${props => props.$alignCenter ? 'center' : 'flex-start'};
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }
`;

export const ThreeColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const CenteredContent = styled.div`
  text-align: left;
  max-width: ${props => props.$narrow ? '800px' : '1200px'};
  margin-left: auto;
  margin-right: auto;
`;
