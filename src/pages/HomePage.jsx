/// Nowa elegancka strona główna fundacji FLID
import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import projectsData from '../data/projectsData';
import partnersData from '../data/partnersData';
import { ProjectPlaceholder, PartnerLogoPlaceholder } from '../components/PlaceholderImages';
import OptimizedImage from '../components/OptimizedImage';
import { SectionHeader } from '../components/Typography';
import { Button } from '../components/Buttons';
import { Section, Container, CardImage, CardContent, CardTitle, CardDescription, CenteredContent } from '../components/Elements';
import ProcessDiagramSection from '../components/ProcessDiagramSection';
import { ProcessPhaseProvider } from '../contexts/ProcessPhaseContext.jsx';
import DomDebug from '../components/DomDebug';

import '../styles/DiagramHighlight.css';
import '../styles/DiagramDarkMode.css';

// Custom section for process diagram with controlled spacing
const ProcessSection = styled(Section)`
  padding-top: 0; /* We're handling top spacing with margin in the container */
  padding-bottom: 3rem; /* Balanced spacing to match projects section padding-top */
  
  @media (min-width: 1200px) {
    padding-top: 0;
    padding-bottom: 3rem; /* Keep consistent balanced spacing */
  }
  
  @media (min-width: 1920px) {
    padding-top: 0;
    padding-bottom: 3rem; /* Keep consistent balanced spacing */
  }
  
  @media (max-width: 768px) {
    padding-bottom: 2rem; /* Proportional mobile spacing */
  }
`;

// Custom container with proper spacing from navbar
const ProcessContainer = styled(Container)`
  margin-top: 60px; /* Create ~140px space below navbar (80px from Main padding-top + 60px here) */
  
  @media (min-width: 1200px) {
    margin-top: 70px; 
  }
  
  @media (min-width: 1920px) {
    margin-top: 80px;
  }
  @media (max-width: 992px) {
    margin-top: 100px; /* Increased space on tablet to push diagram below navbar */
  }
  
  @media (max-width: 768px) {
    margin-top: 340px; /* Increased by 200px to ensure diagram doesn't overlap with mobile menu */
  }
`;

// Custom section for projects with balanced spacing after process section
const ProjectsSection = styled(Section)`
  padding-top: 3rem; /* Balanced spacing to match process section padding-bottom */
  padding-bottom: 8rem; /* Dodana duża przestrzeń przed stopką */
  min-height: 800px; /* Minimalna wysokość sekcji */
  
  @media (max-width: 768px) {
    padding-top: 2rem; /* Proportional mobile spacing to match process section */
    padding-bottom: 6rem; /* Dodana przestrzeń na mobile */
    min-height: 600px;
  }
`;

const HomePage = () => {
  const featuredProjects = projectsData.slice(0, 3);
    // Hooki do animacji przy wejściu na ekran
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [partnersRef, partnersInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="page-wrapper page-transition-container">
      <MetaTags 
        title="FLID - Fundacja Ludzie-Innowacje-Design"
        description="FLID to fundacja zajmująca się innowacyjnymi projektami z zakresu designu, technologii i usług dla społeczeństwa."
        keywords="design thinking, innowacje, projektowanie usług, bielsko-biała, design"
        canonical="/"
      />

      {/* Sekcja Proces projektowy */}
      <ProcessSection ref={processRef}>
        <ProcessContainer>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <ProcessPhaseProvider>
              <ProcessDiagramSection />
            </ProcessPhaseProvider>
          </motion.div>
        </ProcessContainer>      </ProcessSection>

      {/* Sekcja Projekty - minimalistyczne karty projektów */}
      <ProjectsSection ref={projectsRef} className="fade-in-element">
        <Container>
          <SectionHeader 
            title="Wybrane projekty" 
            subtitle="Zobacz nasze najnowsze realizacje"
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={projectsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <ProjectsGrid>
              {featuredProjects.map(project => (
                <ProjectCard 
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <CardImage>
                    {project.coverImage ? (
                      <OptimizedImage 
                        src={project.coverImage} 
                        alt={project.title}
                        aspectRatio="16:9"
                        className="project-image"
                      />
                    ) : (
                      <ProjectPlaceholder title={project.title} />
                    )}
                    <ProjectCategory>{project.category}</ProjectCategory>
                  </CardImage>
                  <CardContent>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.shortDesc}</CardDescription>
                    <ProjectMeta>
                      <span>{project.year}</span>
                      <ProjectMoreLink>Zobacz szczegóły →</ProjectMoreLink>
                    </ProjectMeta>
                  </CardContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </motion.div>
          
          <CenteredContent>
            <Button to="/projects" variant="secondary" withArrow>
              Zobacz wszystkie projekty
            </Button>          </CenteredContent>
        </Container>
      </ProjectsSection>
      {/* Sekcja Partnerzy - elegancka i minimalistyczna */}
      <Section $light ref={partnersRef} className="fade-in-element">
        <Container>
          <SectionHeader 
            title="Partnerzy"
            subtitle="Współpracujemy z najlepszymi"
            centered
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={partnersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <PartnersGrid>
              {partnersData.map(partner => (
                <PartnerItem key={partner.id}>
                  {partner.logo ? (
                    <OptimizedImage 
                      src={partner.logo} 
                      alt={partner.name}
                      aspectRatio="1:1"
                      className="partner-logo"
                    />
                  ) : (
                    <PartnerLogoPlaceholder name={partner.name} />
                  )}
                  <PartnerName>{partner.name}</PartnerName>
                </PartnerItem>
              ))}
            </PartnersGrid>
          </motion.div>        </Container>
      </Section>
    </div>
  );
};

// Nowe style sekcji i komponentów

// Projects Section
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 2.5rem;
  margin-bottom: 3rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.create(Link))`  text-decoration: none;
  color: inherit;
  background: var(--card-bg);
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
`;

const ProjectCategory = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(var(--accent-rgb), 0.9);
  backdrop-filter: blur(5px);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 3px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  color: var(--text-light);
  font-size: 0.85rem;
`;

const ProjectMoreLink = styled.span`
  color: var(--accent);
  font-weight: 500;
  transition: color 0.3s ease;
  
  ${ProjectCard}:hover & {
    color: var(--accent-dark);
  }
`;

// Partners Section
const PartnersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 2rem;
`;

const PartnerItem = styled.div`
  background-color: var(--card-bg);
  padding: 2rem;
  border-radius: 4px;
  box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.07);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const PartnerName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
`;

// Komponenty dla sekcji "Nasze podejście"
const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
  align-items: flex-start;
  margin-top: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 4rem;
  }
`;

const ProcessContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProcessDiagramColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  
  @media (max-width: 992px) {
    order: -1; // Na małych ekranach diagram na górze
    align-items: center;
  }
`;

const ProcessText = styled.div`
  padding-right: 2rem;
  
  @media (max-width: 992px) {
    padding-right: 0;
    text-align: center;
  }
`;

const ProcessSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1rem;
  width: 100%;
`;

const ProcessStep = styled.div`
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

// Removed unused styled components for the Materializacja section

const DiagramContainer = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  @media (max-width: 992px) {
    height: 450px;
  }
`;

export default HomePage;

