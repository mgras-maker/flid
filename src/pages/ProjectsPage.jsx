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
  const pageRef = useRef(null);
  
  // Extract all unique categories
  const categories = ['all', ...new Set(projectsData.map(project => project.category))];
  
  // Filter projects based on category and search query
  useEffect(() => {
    let filtered = projectsData;
    
    console.log("Projects data:", projectsData); // Debug log
    
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
    }
    
    console.log("Filtered projects:", filtered); // Debug log
    setFilteredProjects(filtered);
  }, [activeCategory, searchQuery]);
  
  return (
    <PageContainer ref={pageRef} className="projects-page-container">
      <MetaTags 
        title="Projekty - FLID" 
        description="Odkryj nasze innowacyjne projekty i realizacje w obszarze zrównoważonego designu."
      />
      
      <ContentSection className="projects-content-section">        <PageLayout>          {/* Left sidebar with vertical controls */}
          <SidebarControls className="sidebar-controls">            {/* Search field - moved above categories */}            <SearchContainer
              className="search-container"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.15 }}
              whileHover={{ scale: 1.01, y: -1 }}
            >
              <SearchIcon>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
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

            {/* Divider between search and categories */}
            <Divider />            {/* Category pills */}
            <CategoryNav className="category-nav">
              {categories.map((category, index) => (                <CategoryPill
                  key={category}
                  $active={category === activeCategory}
                  onClick={() => setActiveCategory(category)}
                  as={motion.button}                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.005, duration: 0.15 }}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {category === 'all' ? 'Wszystkie' : category}
                  {category === activeCategory && (
                    <ActiveIndicator layoutId="activeCategoryIndicator" />
                  )}
                </CategoryPill>
              ))}
            </CategoryNav>
          </SidebarControls>
            {/* Main content with projects */}
          <MainContent className="main-content">
            {/* Projects Gallery */}            <ProjectsGallery className="projects-gallery">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    className="project-card"
                    key={project.id}                    initial={{ 
                      opacity: 0, 
                      y: 20,
                      scale: 0.98
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      scale: 1
                    }}                    exit={{ 
                      opacity: 0, 
                      scale: 0.98,
                      transition: { 
                        duration: 0.15 
                      }
                    }}
                    transition={{ 
                      duration: 0.25,
                      delay: index * 0.03,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.015,
                      transition: { 
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }}
                    whileTap={{ 
                      scale: 0.99,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <ProjectLink to={`/projects/${project.slug}`}>
                      <ProjectImageContainer>
                        {project.coverImage ? (
                          <ProjectImage 
                            src={project.coverImage} 
                            alt={project.title}
                          />
                        ) : (
                          <PlaceholderContainer>
                            <ProjectPlaceholder title={project.title} animate={false} />
                          </PlaceholderContainer>
                        )}
                        <ProjectCategory>{project.category}</ProjectCategory>
                        <ProjectOverlay />
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
          </MainContent>
        </PageLayout>
      </ContentSection>
    </PageContainer>
  );
};

// Page Layout
const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%; // Changed from 100vw to 100%
  max-width: 100%; // Changed from 100vw to 100%
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  flex: 1;
  
  /* Ważne dla ekranów 2K - zapobieganie białym paskom */
  left: 0;
  right: 0;
  
  /* Fix dla czyszczenia marginesów i paddingów */
  &:before, &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const PageLayout = styled.div`
  display: flex;
  width: 100%;
  max-width: none; // Removed max-width: 1800px
  margin: 0; // Removed margin: 0 auto
  padding: 0; // Added to remove default padding
  gap: 0; // Removed gap: 2.5rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem; // Keep gap for mobile
    
    & > * {
      text-align: left;
    }
  }
`;

const SidebarControls = styled.aside`
  flex: 0 0 280px; // Increased width for better spacing
  padding: 2rem 1.5rem; // Adjusted padding
  background-color: var(--background-secondary);
  // border-right: 1px solid var(--border); // Removed border for seamless look
  // border-radius: 8px; // Removed for seamless look
  display: flex;
  flex-direction: column;
  gap: 1.75rem; // Adjusted gap
  text-align: left;
  align-items: flex-start;
  // box-shadow: 0 3px 12px rgba(0, 0, 0, 0.03); // Removed shadow
  position: sticky; // Added for sticky behavior
  top: 0; // Stick to the top
  height: 100vh; // Full height
  overflow-y: auto; // Allow scrolling if content overflows
  
  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--text);
    font-weight: 600;
    text-align: left;
    width: 100%;
  }
  
  & > * {
    width: 100%;
    text-align: left;
    align-items: flex-start;
  }
  
  @media (max-width: 1024px) {
    flex: none;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding: 1.2rem 1.2rem 1.5rem;
    margin-bottom: 1rem;
    gap: 1.25rem;
    border-radius: 0;
    background-color: rgba(var(--background-secondary-rgb), 0.5);
    position: static; // Remove sticky on mobile
    height: auto; // Reset height on mobile
    overflow-y: visible; // Reset overflow on mobile
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--border);
  opacity: 0.6;
  margin: 0.25rem 0 0.75rem;
`;

const ContentSection = styled.section`
  max-width: none; // Removed max-width
  width: 100%;
  margin: 0;
  padding: 2rem 3rem; // Adjusted padding for elegant spacing
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; // Center content if it's narrower than the section
  position: relative;
  z-index: 10; // Keep z-index if needed for layering
  min-height: calc(100vh + 200px); 
  
  @media (max-width: 1024px) {
    padding: 1.5rem; // Adjusted mobile padding
    min-height: calc(100vh + 150px);
  }
  @media (min-width: 1025px) { // Apply padding only on larger screens for the main content area
    padding-left: 3rem; 
    padding-right: 3rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 0; // Reset padding, will be handled by ProjectsGallery or ContentSection
  width: 100%; // Ensure it takes full available width
  
  @media (max-width: 1024px) {
    padding: 0.5rem 0;
  }
`;

const CategoryNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  text-align: left;
  align-items: flex-start;
  margin-bottom: 0.25rem;
  padding-left: 0.15rem;
  
  @media (max-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 0.7rem;
    padding-left: 0;
  }
`;

const CategoryPill = styled(motion.button)`
  background: ${props => props.$active ? 'var(--lavender-300)' : 'transparent'};
  color: ${props => props.$active ? 'var(--text)' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.$active ? 'var(--lavender-300)' : 'transparent'};
  padding: 0.8rem 1.25rem;
  font-size: 0.9rem;
  text-align: left;
  cursor: pointer;
  position: relative;
  font-weight: ${props => props.$active ? '600' : '400'};
  letter-spacing: 0.01em;
  transition: all 0.25s ease;
  width: 100%;
  display: block;
  position: relative;
  overflow: hidden;
    &:hover {
    border-color: ${props => !props.$active && 'var(--border)'};
    color: ${props => !props.$active && 'var(--lavender-600)'};
    transform: translateX(3px);
    background-color: ${props => !props.$active && 'rgba(210, 205, 232, 0.05)'};
  }
  
  &:active {
    transform: translateX(1px);
  }
  
  @media (max-width: 1024px) {
    text-align: left;
    width: auto;
    padding: 0.7rem 1.2rem;
      &:hover {
      transform: translateY(-2px);
    }
    
    &:active {
      transform: translateY(-0.5px);
    }
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  height: 100%;
  background: var(--lavender-600);
  
  @media (max-width: 1024px) {
    bottom: -2px;
    left: 0;
    right: 0;
    width: 100%;
    height: 3px;
    top: auto;
  }
`;

const SearchContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  margin: 0.25rem 0 0.75rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  background: var(--background);
  border: 1px solid var(--border);
  
  &:hover {
    border-color: var(--lavender-300);
  }
  
  &:focus-within {
    border-color: var(--lavender-400);
  }
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--lavender-400), var(--lavender-600));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0.8;
  }
  
  &:focus-within:after {
    transform: scaleX(1);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--lavender-500);
  pointer-events: none;
  opacity: 0.8;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1;
  
  ${SearchContainer}:hover & {
    color: var(--lavender-600);
    opacity: 1;
  }
  
  ${SearchContainer}:focus-within & {
    color: var(--lavender-700);
    opacity: 1;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 2.8rem;
  border: none;
  background-color: transparent;
  color: var(--text);
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  font-weight: 400;
  letter-spacing: 0.01em;
  
  &:focus {
    outline: none;
    color: var(--text);
  }
  
  &::placeholder {
    color: var(--text-tertiary);
    text-align: left;
    opacity: 0.7;
    font-size: 0.9rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    font-weight: 400;
  }
  
  &:focus::placeholder {
    opacity: 0.5;
    transform: translateX(3px);
  }
  
  ${SearchContainer}:hover &::placeholder {
    opacity: 0.8;
    color: var(--lavender-500);
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  color: var(--text-tertiary);
  cursor: pointer;
  padding: 0.4rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: var(--lavender-600);
    opacity: 1;
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  svg {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const ProjectsGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); // Adjusted minmax for responsiveness
  gap: 2rem; // Adjusted gap
  width: 100%;
  min-height: 800px; 
  padding: 2rem 0; // Add vertical padding within the gallery

  @media (max-width: 1536px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); // Adjusted for slightly smaller cards
    min-height: 1000px; 
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem; // Adjusted mobile gap
    min-height: 1200px; 
    padding: 1rem 0; // Adjusted mobile padding
  }
  
  @media (min-width: 1920px) { // For very wide screens, allow more columns
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  }

  @media (min-width: 2200px) {
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); // Even more columns for ultra-wide
    min-height: 600px; 
  }
`;

const ProjectCard = styled(motion.article)`
  overflow: hidden;
  background-color: var(--card-bg);
  position: relative;
  border: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  transform-origin: center;
  transition: border-color 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  
  &:hover {
    border-color: var(--lavender-300);
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
  overflow: hidden;
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(139, 92, 246, 0.1) 0%, 
      rgba(147, 51, 234, 0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }
  
  ${ProjectCard}:hover &::after {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }`;

const PlaceholderContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, 
    rgba(139, 92, 246, 0.0) 0%, 
    rgba(147, 51, 234, 0.0) 100%);
  opacity: 0;
  transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  pointer-events: none;
  
  ${ProjectCard}:hover & {
    opacity: 1;
    background: linear-gradient(135deg, 
      rgba(139, 92, 246, 0.1) 0%, 
      rgba(147, 51, 234, 0.15) 100%);
  }
`;

const ProjectCategory = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.95);
  color: var(--lavender-600);
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  backdrop-filter: blur(8px);
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    ${ProjectCard}:hover & {
    transform: translateY(-1px);
    background-color: rgba(255, 255, 255, 0.98);
  }`;

const ProjectInfo = styled.div`
  padding: 2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  transform: translateY(0);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--border);
  }
    ${ProjectCard}:hover & {
    transform: translateY(-2px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.35rem;
  margin-bottom: 0.75rem;
  color: var(--text);
  font-weight: 600;
  line-height: 1.3;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    ${ProjectCard}:hover & {
    transform: translateY(-1px);
    color: var(--lavender-600);
  }`;

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
  border-top: 1px solid var(--border);
`;

const ProjectYear = styled.span`
  font-size: 0.85rem;
  color: var(--text-tertiary);
  font-weight: 500;
`;

const ViewLabel = styled.span`
  color: var(--lavender-600);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  transform: translateX(0);
  transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  
  svg {
    transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
    opacity: 0.8;
  }
    ${ProjectCard}:hover & {
    transform: translateX(5px);
    color: var(--lavender-700);
  }
  
  ${ProjectCard}:hover & svg {
    transform: translateX(4px) scale(1.05);
    opacity: 1;
  }
`;

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
  background: var(--lavender-500);
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
`;

export default ProjectsPage;
