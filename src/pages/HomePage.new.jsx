// Nowa elegancka strona główna fundacji FLID
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import MetaTags from '../components/MetaTags';
import projectsData from '../data/projectsData';
import partnersData from '../data/partnersData';
import { ProjectPlaceholder, PartnerLogoPlaceholder } from '../components/PlaceholderImages';
import OptimizedImage from '../components/OptimizedImage';
import { DisplayTitle, DisplaySubtitle, SectionHeader, Paragraph, TextAccent } from '../components/Typography';
import { Button } from '../components/Buttons';
import { Section, Container, Card, CardImage, CardContent, CardTag, CardTitle, CardDescription, CardMeta, Grid, CenteredContent } from '../components/Elements';

const HomePage = () => {
  // Wybrane projekty do wyświetlenia (3 zamiast 6 dla bardziej minimalistycznego wyglądu)
  const featuredProjects = projectsData.slice(0, 3);
  
  // Hooki do animacji przy wejściu na ekran  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
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
      
      {/* Sekcja Hero - minimalistyczna i elegancka */}
      <HeroSection>
        <Container>
          <HeroGrid ref={heroRef}>
            <HeroContent>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.9, 
                  delay: 0.2,
                  ease: [0.19, 1.0, 0.22, 1.0]
                }}
              >
                <HeroAccent>Fundacja Ludzie-Innowacje-Design</HeroAccent>
                <DisplayTitle>
                  Równowaga<br />poprzez <TextAccent>design</TextAccent>
                </DisplayTitle>
                <DisplaySubtitle>
                  Projektowanie pozytywnych zmian dla zrównoważonego rozwoju
                </DisplaySubtitle>
                <HeroButtons>
                  <Button to="/about" variant="primary" withArrow>
                    Poznaj nas
                  </Button>
                  <Button to="/projects" variant="secondary">
                    Nasze projekty
                  </Button>
                </HeroButtons>
              </motion.div>
            </HeroContent>
            
            <HeroImageWrapper>
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.4 }}
              >
                <HeroImageFrame>
                  <OptimizedImage 
                    src="/images/placeholder.svg"
                    alt="FLID Design"
                    aspectRatio="4:3"
                    priority={true}
                    className="hero-image"
                  />
                </HeroImageFrame>
              </motion.div>
            </HeroImageWrapper>
          </HeroGrid>
        </Container>
        <HeroBgAccent />
      </HeroSection>

      {/* Sekcja O Nas - minimalistyczna z elegancką typografią */}
      <Section>
        <Container>
          <AboutGrid ref={aboutRef}>
            <AboutImageColumn>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <AboutImageFrame>
                  <OptimizedImage 
                    src="/images/placeholder.svg"
                    alt="O Fundacji FLID"
                    aspectRatio="1:1"
                    className="about-image"
                  />
                </AboutImageFrame>
              </motion.div>
            </AboutImageColumn>
            
            <AboutContentColumn>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.9, delay: 0.4 }}
              >
                <SectionHeader 
                  title="O Fundacji" 
                  subtitle="Projektowanie pozytywnej przyszłości"
                />
                
                <Paragraph large>
                  Jesteśmy fundacją działającą na rzecz zrównoważonego rozwoju poprzez
                  <TextAccent> projektowanie i innowacje</TextAccent>. Wierzymy, że dobrze
                  zaprojektowane rozwiązania mogą pozytywnie wpływać na środowisko,
                  społeczeństwo i gospodarkę.
                </Paragraph>
                
                <Paragraph>
                  Łączymy ludzi, technologie i idee, tworząc przestrzeń dla multidyscyplinarnych
                  projektów, które odpowiadają na współczesne wyzwania i potrzeby.
                </Paragraph>
                
                <AboutValues>
                  <ValueItem>
                    <ValueIcon>↗</ValueIcon>
                    <ValueText>Innowacyjność</ValueText>
                  </ValueItem>
                  <ValueItem>
                    <ValueIcon>♻</ValueIcon>
                    <ValueText>Zrównoważony rozwój</ValueText>
                  </ValueItem>
                  <ValueItem>
                    <ValueIcon>⚡</ValueIcon>
                    <ValueText>Kreatywność</ValueText>
                  </ValueItem>
                </AboutValues>
                
                <Button to="/about" variant="text" withArrow>
                  Poznaj nas bliżej
                </Button>
              </motion.div>
            </AboutContentColumn>
          </AboutGrid>
        </Container>
      </Section>

      {/* Sekcja Proces projektowy - elegancka i minimalistyczna */}
      <Section light ref={processRef}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <SectionHeader 
              title="Nasze podejście" 
              subtitle="Design thinking w codziennej praktyce"
              centered
            />
            
            <ProcessSteps>
              <ProcessStep>
                <ProcessStepNumber>01</ProcessStepNumber>
                <ProcessStepTitle>Empatyzacja</ProcessStepTitle>
                <ProcessStepDesc>
                  Zrozumienie potrzeb użytkowników i dogłębne poznanie problemu
                </ProcessStepDesc>
              </ProcessStep>
              
              <ProcessStep>
                <ProcessStepNumber>02</ProcessStepNumber>
                <ProcessStepTitle>Definiowanie</ProcessStepTitle>
                <ProcessStepDesc>
                  Określenie głównych wyzwań i możliwości projektowych
                </ProcessStepDesc>
              </ProcessStep>
              
              <ProcessStep>
                <ProcessStepNumber>03</ProcessStepNumber>
                <ProcessStepTitle>Ideacja</ProcessStepTitle>
                <ProcessStepDesc>
                  Kreatywne podejście do poszukiwania wielu możliwych rozwiązań
                </ProcessStepDesc>
              </ProcessStep>
              
              <ProcessStep>
                <ProcessStepNumber>04</ProcessStepNumber>
                <ProcessStepTitle>Prototypowanie</ProcessStepTitle>
                <ProcessStepDesc>
                  Szybkie tworzenie prototypów w celu testowania rozwiązań
                </ProcessStepDesc>
              </ProcessStep>
              
              <ProcessStep>
                <ProcessStepNumber>05</ProcessStepNumber>
                <ProcessStepTitle>Testowanie</ProcessStepTitle>
                <ProcessStepDesc>
                  Weryfikacja rozwiązań z użytkownikami i interesariuszami
                </ProcessStepDesc>
              </ProcessStep>
            </ProcessSteps>
          </motion.div>
        </Container>
      </Section>

      {/* Sekcja Projekty - minimalistyczne karty projektów */}
      <Section ref={projectsRef}>
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
            <ProjectsGrid>              {featuredProjects.map((project) => (                <ProjectCard 
                  key={project.id}
                  to={`/projects/${project.slug}`}
                  $whileHover={{ y: -10 }}
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
            </Button>
          </CenteredContent>
        </Container>
      </Section>

      {/* Sekcja Partnerzy - elegancka i minimalistyczna */}
      <Section light ref={partnersRef}>
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

// Hero Section
const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  padding: 4rem 0;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 6rem 0 4rem;
  }
`;

const HeroBgAccent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 75%;
  height: 100%;
  background: linear-gradient(135deg, var(--lavender-100) 0%, var(--lavender-200) 100%);
  z-index: -1;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
  
  @media (max-width: 768px) {
    width: 100%;
    clip-path: none;
  }
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const HeroContent = styled.div`
  @media (max-width: 992px) {
    text-align: center;
  }
`;

const HeroAccent = styled.div`
  font-family: var(--font-serif);
  font-size: 1.1rem;
  color: var(--accent);
  margin-bottom: 1rem;
  font-style: italic;
  letter-spacing: 0.5px;
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    max-width: 600px;
    margin: 0 auto;
  }
`;

const HeroImageFrame = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(var(--primary-rgb), 0.15);
`;

// About Section
const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-gap: 6rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-gap: 4rem;
  }
`;

const AboutImageColumn = styled.div`
  @media (max-width: 992px) {
    max-width: 450px;
    margin: 0 auto;
  }
`;

const AboutImageFrame = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(var(--primary-rgb), 0.15);
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    width: 80px;
    height: 80px;
    border-top: 3px solid var(--accent);
    border-left: 3px solid var(--accent);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 80px;
    height: 80px;
    border-bottom: 3px solid var(--accent);
    border-right: 3px solid var(--accent);
  }
`;

const AboutContentColumn = styled.div``;

const AboutValues = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin: 2.5rem 0;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ValueItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ValueIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--lavender-200);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.25rem;
  color: var(--accent);
`;

const ValueText = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text);
`;

// Process Section
const ProcessSteps = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.5rem;
  margin-top: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessStep = styled.div`
  background-color: var(--card-bg);
  border-radius: 4px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(var(--primary-rgb), 0.07);
  text-align: center;
  position: relative;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  border: 1px solid var(--border);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(var(--primary-rgb), 0.12);
  }
`;

const ProcessStepNumber = styled.div`
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--lavender-300);
  margin-bottom: 1rem;
  line-height: 1;
`;

const ProcessStepTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const ProcessStepDesc = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

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

const ProjectCard = styled(motion.div).attrs({ as: Link })`
  text-decoration: none;
  color: inherit;
  background: var(--card-bg);
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.15);
    border-color: var(--accent-light);
  }
  
  ${props => props.$whileHover && ""}
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
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(var(--primary-rgb), 0.12);
  }
  
  img {
    max-width: 140px;
    max-height: 80px;
    object-fit: contain;
    margin-bottom: 1.5rem;
  }
`;

const PartnerName = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
`;

export default HomePage;
