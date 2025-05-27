import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import MetaTags from '../components/MetaTags';
import projectsData from '../data/projectsData';
import { ProjectPlaceholder } from '../components/PlaceholderImages';
import OptimizedImage from '../components/OptimizedImage';
import { CreativeHeading } from '../components/CreativeElements';

// Styled components for hero section
const SubHeading = styled.div`
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--lavender-500);
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const HeroLine = styled(motion.div)`
  width: 120px;
  height: 2px;
  background-color: var(--lavender-400);
  margin: 3rem auto 0;
  opacity: 0.7;
`;

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredProject, setHoveredProject] = useState(null);
  const pageRef = useRef(null);
  
  // Extract all unique categories
  const categories = ['all', ...new Set(projectsData.map(project => project.category))];
  
  // Filter projects based on category and search query
  useEffect(() => {
    let filtered = projectsData;
    
    // Apply category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => project.category === activeCategory);
    }
    
    // Apply search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) || 
        project.shortDesc.toLowerCase().includes(query)
      );
    }    setFilteredProjects(filtered);
  }, [activeCategory, searchQuery]);

  return (
    <PageContainer ref={pageRef}>
      <MetaTags 
        title="Projekty - FLID" 
        description="Odkryj nasze innowacyjne projekty i realizacje w obszarze zrównoważonego designu."
      />
      
      <HeroSection>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SubHeading>NASZA PRACA</SubHeading>
        </motion.div>
        <CreativeHeading level={1} className="hero-title">
          Projekty
        </CreativeHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Odkryj nasze pomysły i kreatywne realizacje w obszarze zrównoważonego designu
        </motion.p>
        <HeroLine 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        />
      </HeroSection>
      
      <ContentSection>
        <ControlsContainer>
          {/* Category pills */}
          <CategoryNav>
            {categories.map((category, index) => (
              <CategoryPill
                key={category}
                $active={category === activeCategory}
                onClick={() => setActiveCategory(category)}
                as={motion.button}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.5 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                {category === 'all' ? 'Wszystkie' : category}
                {category === activeCategory && (
                  <ActiveIndicator layoutId="activeCategoryIndicator" />
                )}
              </CategoryPill>
            ))}
          </CategoryNav>
          
          {/* Search field */}
          <SearchContainer
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <SearchIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </SearchIcon>
            <SearchInput 
              type="text" 
              placeholder="Szukaj projektu..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <ClearButton onClick={() => setSearchQuery('')}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ClearButton>
            )}
          </SearchContainer>
        </ControlsContainer>
        
        {/* Results count */}
        <ResultsCount
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Znaleziono {filteredProjects.length} {filteredProjects.length === 1 ? 'projekt' : 
            filteredProjects.length > 1 && filteredProjects.length < 5 ? 'projekty' : 'projektów'}
        </ResultsCount>
        
        {/* Projects Gallery */}
        <ProjectsGallery>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                as={motion.div}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ 
                  delay: index * 0.05, 
                  duration: 0.6,
                  ease: [0.19, 1.0, 0.22, 1.0]
                }}
                layout
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                whileHover={{ y: -8 }}
              >
                <ProjectLink to={`/projects/${project.slug}`}>
                  <ProjectImageContainer>
                    <ImageOverlay 
                      animate={{ 
                        opacity: hoveredProject === project.id ? 0.8 : 0
                      }}
                    />
                    {project.coverImage ? (
                      <ProjectImage 
                        src={project.coverImage} 
                        alt={project.title}
                        animate={{ 
                          scale: hoveredProject === project.id ? 1.05 : 1
                        }}
                        transition={{ duration: 0.5 }}
                      />
                    ) : (
                      <PlaceholderContainer>
                        <ProjectPlaceholder title={project.title} animate={false} />
                      </PlaceholderContainer>
                    )}
                    <ProjectCategory>{project.category}</ProjectCategory>
                    
                    <ViewProjectOverlay
                      animate={{ 
                        opacity: hoveredProject === project.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ViewProjectButton>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </ViewProjectButton>
                    </ViewProjectOverlay>
                  </ProjectImageContainer>
                  
                  <ProjectInfo>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription>{project.shortDesc}</ProjectDescription>
                    <ProjectMeta>
                      <ProjectYear>{project.year}</ProjectYear>
                      <ViewLabel>
                        Zobacz projekt
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </ViewLabel>
                    </ProjectMeta>
                  </ProjectInfo>
                </ProjectLink>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGallery>
        
        {filteredProjects.length === 0 && (
          <EmptyState
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <EmptyIcon>🔍</EmptyIcon>
            <EmptyTitle>Brak wyników</EmptyTitle>
            <EmptyText>Nie znaleziono projektów pasujących do wybranych kryteriów.</EmptyText>
            <ResetButton 
              onClick={() => {setActiveCategory('all'); setSearchQuery('');}}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Resetuj filtry
            </ResetButton>
          </EmptyState>
        )}
      </ContentSection>
    </PageContainer>
  );
};

// Page Layout
const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const HeroSection = styled.header`
  text-align: left;
  padding: 10rem 2rem 6rem;
  max-width: 900px;
  margin: 0 auto;
  
  p {
    color: var(--text-secondary);
    font-size: 1.35rem;
    margin-top: 1.5rem;
    line-height: 1.7;
    font-weight: 300;
    letter-spacing: 0.01em;
  }
  
  .hero-title {
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, var(--lavender-500) 0%, var(--lavender-300) 50%, var(--lavender-600) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    letter-spacing: -0.02em;
  }
  
  @media (max-width: 768px) {
    padding: 8rem 2rem 5rem;
    
    .hero-title {
      font-size: 3.5rem;
    }
    
    p {
      font-size: 1.15rem;
    }
  }
`;

const ContentSection = styled.section`
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem 6rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 4rem;
  }
`;

// Controls Styles
const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1.5rem;
  max-width: 1800px;
  margin: 0 auto 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const CategoryNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const CategoryPill = styled(motion.button)`
  background: ${props => props.$active ? 
    'linear-gradient(135deg, var(--lavender-200) 0%, var(--lavender-300) 100%)' : 
    'transparent'};
  color: ${props => props.$active ? 'var(--text)' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.$active ? 'var(--lavender-300)' : 'var(--border)'};
  border-radius: 100px;
  padding: 0.7rem 1.5rem;
  font-size: 0.95rem;
  cursor: pointer;
  position: relative;
  font-weight: ${props => props.$active ? '500' : '400'};
  letter-spacing: 0.01em;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  box-shadow: ${props => props.$active ? 
    '0 4px 15px rgba(210, 205, 232, 0.25)' : 'none'};
  
  &:hover {
    border-color: var(--lavender-300);
    color: ${props => !props.$active && 'var(--lavender-600)'};
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0px);
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -3px;
  left: 50%;
  transform: translateX(-50%);
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--lavender-600);
`;

const SearchContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  pointer-events: none;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.85rem 2.75rem;
  border-radius: 100px;
  border: 1px solid var(--border);
  background-color: var(--background);
  color: var(--text);
  font-size: 0.95rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--lavender-300);
    box-shadow: 0 0 0 3px rgba(210, 205, 232, 0.2);
  }
  
  &::placeholder {
    color: var(--text-tertiary);
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 0.85rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  
  &:hover {
    color: var(--lavender-500);
  }
`;

const ResultsCount = styled(motion.p)`
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-size: 0.95rem;
  max-width: 1800px;
  margin: 0 auto 2rem;
  padding: 0 0.5rem;
`;

// Projects Gallery Styles
const ProjectsGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 3rem;
  margin-bottom: 6rem;
  max-width: 1800px;
  margin: 0 auto 6rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
  }
`;

const ProjectCard = styled(motion.article)`
  border-radius: 20px;
  overflow: hidden;
  background-color: var(--card-bg);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
  height: 100%;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 1.5px;
    background: linear-gradient(135deg, transparent 40%, var(--lavender-300) 70%, transparent 90%);
    -webkit-mask: 
       linear-gradient(#fff 0 0) content-box, 
       linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover {
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.07);
    
    &::after {
      opacity: 1;
    }
  }
`;

const ProjectLink = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: var(--text);
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 280px;
  overflow: hidden;
`;

const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
  z-index: 1;
`;

const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0 0;
  overflow: hidden;
`;

const ViewProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const ViewProjectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--lavender-300);
  color: white;
  opacity: 0.9;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const ProjectCategory = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.85);
  color: var(--lavender-600);
  padding: 0.35rem 1rem;
  border-radius: 100px;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const ProjectInfo = styled.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 2rem;
    right: 2rem;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent, 
      var(--lavender-200) 20%, 
      var(--lavender-200) 80%,
      transparent
    );
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
  color: var(--text);
  font-weight: 600;
  line-height: 1.3;
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.5;
  flex-grow: 1;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border-light);
`;

const ProjectYear = styled.span`
  font-size: 0.85rem;
  color: var(--text-tertiary);
  font-weight: 500;
`;

const ViewLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--lavender-500);
  font-size: 0.9rem;
  font-weight: 500;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  ${ProjectLink}:hover & svg {
    transform: translateX(4px);
  }
`;

// Empty State Styles
const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 5rem 0;
  max-width: 500px;
  margin: 0 auto;
`;

const EmptyIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
`;

const EmptyTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const EmptyText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const ResetButton = styled(motion.button)`
  background: linear-gradient(135deg, var(--lavender-400) 0%, var(--lavender-500) 100%);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 100px;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(158, 151, 195, 0.3);
`;

export default ProjectsPage;
