import { useState, useEffect } from 'react'; // Added useEffect
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion'; // Added AnimatePresence
import { Link } from 'react-router-dom';

import publicationsData from '../data/publicationsData';
import { PublicationPlaceholder } from '../components/PlaceholderImages';
import MetaTags from '../components/MetaTags';
import OptimizedImage from '../components/OptimizedImage';

const PublicationsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredPublications, setFilteredPublications] = useState(publicationsData);

  // Extract all unique categories from publicationsData (types)
  const categories = ['all', ...new Set(publicationsData.map(pub => pub.type).filter(type => type))];

  useEffect(() => {
    let filtered = publicationsData;
    
    if (activeCategory !== 'all') {
      filtered = filtered.filter(publication => publication.type === activeCategory);
    }
    
    setFilteredPublications(filtered);
  }, [activeCategory]);

  return (
    <>
      <MetaTags 
        title="Publikacje"
        description="Odkryj publikacje, badania i artykuły Fundacji Ludzie-Innowacje-Design na temat zrównoważonego designu i innowacji społecznych."
        keywords="publikacje, artykuły, badania, design, innowacje społeczne, flid"
        canonical="/publications"
      />
      <PageContainer>
        <PageLayout>          <SidebarControls>
            <SectionTitle>Kategorie publikacji</SectionTitle>
            <CategoryNav>
              {categories.map((category, index) => (
                <CategoryPill
                  key={category}
                  $active={category === activeCategory}
                  onClick={() => setActiveCategory(category)}
                  as={motion.button}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.005, duration: 0.15 }}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {category === 'all' ? 'Wszystkie' : category}
                  {category === activeCategory && (
                    <ActiveIndicator layoutId="activePublicationCategoryIndicator" />
                  )}
                </CategoryPill>
              ))}
            </CategoryNav>
          </SidebarControls>
          
          <MainContent>
            <AnimatePresence mode="popLayout">
              <PublicationsList>
                  {filteredPublications.map((publication, index) => (
                    <PublicationCard
                      key={publication.id}
                      as={motion.article}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95, transition: { duration: 0.2 } }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.05, // Slightly adjusted delay
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      layout
                      role="article"
                      aria-labelledby={`publication-title-${publication.id}`}
                    >
                      <Link to={`/publications/${publication.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <PublicationImageContainer>
                        {publication.coverImage ? (
                          <OptimizedImage 
                            src={publication.coverImage} 
                            alt={`Okładka publikacji: ${publication.title}`}
                            aspectRatio="3:4"
                            className="publication-card-image" 
                          />
                        ) : (
                          <PublicationPlaceholder title={publication.title} />
                        )}
                      </PublicationImageContainer>
                      
                      <PublicationContent>
                        <PublicationType>{publication.type}</PublicationType>
                        <PublicationTitle id={`publication-title-${publication.id}`}>{publication.title}</PublicationTitle>
                        <PublicationDescription>{publication.shortDesc}</PublicationDescription>
                        <PublicationMeta>
                          <PublicationYear>{publication.year}</PublicationYear>
                        </PublicationMeta>
                      </PublicationContent>
                      </Link>
                    </PublicationCard>
                  ))}
              </PublicationsList>
            </AnimatePresence>
            
            {filteredPublications.length === 0 && (
              <EmptyState
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                role="region"
                aria-label="Brak wyników wyszukiwania"
              >
                <EmptyIcon>📚</EmptyIcon>
                <EmptyTitle>Brak publikacji</EmptyTitle>
                <EmptyText>
                  Nie znaleziono publikacji pasujących do wybranej kategorii.
                  Spróbuj wybrać inną kategorię lub pokaż wszystkie.
                </EmptyText>
                <ResetButton 
                  onClick={() => setActiveCategory('all')}
                  aria-label="Pokaż wszystkie publikacje"
                >
                  Pokaż wszystkie
                </ResetButton>
              </EmptyState>
            )}
          </MainContent>
        </PageLayout>
      </PageContainer>
    </>
  );
};

// Removed HeroSection and related components as they are not part of this page's primary content structure.
// If a Hero is needed, it should be added separately above PageContainer or handled by a global layout.

/* 
  The following styled components are commented out as they are replaced by the new layout structure (PageContainer, PageLayout, etc.)
  or are related to the removed search functionality.
*/
/*
const MainSection = styled.section`
  position: relative;
  z-index: 1;
  padding-top: 6rem;
  
  @media (max-width: 768px) {
    padding-top: 4rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SearchContainer = styled.div`
  position: relative;
  max-width: 500px;
  margin: 0 auto 3rem;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, var(--primary), var(--secondary), #8B5CF6);
    border-radius: 100px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:focus-within::before {
    opacity: 1;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
  z-index: 2;
  transition: color 0.3s ease;
  
  ${SearchContainer}:focus-within & {
    color: var(--primary);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 3rem 1rem 3.5rem;
  border-radius: 100px;
  border: 2px solid transparent;
  background-color: var(--card-bg);
  color: var(--text);
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  
  &:focus {
    outline: none;
    background-color: var(--background);
    box-shadow: 0 8px 30px rgba(74, 144, 226, 0.15);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: var(--text-secondary);
    font-weight: 400;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: var(--primary);
  border: none;
  color: white;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: var(--secondary);
    transform: translateY(-50%) scale(1.1);
  }
`;

const ResultsCount = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  font-weight: 500;
  
  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    background: var(--primary);
    border-radius: 50%;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
  
  &::after {
    content: '';
    display: inline-block;
    width: 4px;
    height: 4px;
    background: var(--primary);
    border-radius: 50%;
    margin-left: 0.5rem;
    vertical-align: middle;
  }
`;

*/

// NEW Styled components for layout (inspired by ProjectsPage)
const PageContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding-top: calc(var(--navbar-height, 80px) + 4rem); // Increased breathing space from 2rem to 4rem and updated navbar height
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const PageLayout = styled.div`
  display: flex;
  width: 100%;
  max-width: 1800px; 
  margin: 0 auto; 
  padding: 2rem; 
  gap: 2.5rem;
  flex-grow: 1;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem; 
  }
`;

const SidebarControls = styled.aside`
  flex: 0 0 280px; // Increased width for better readability
  padding: 2rem 1.5rem; // Increased top/bottom padding for better spacing
  background-color: var(--background);
  border-right: 1px solid var(--border);
  border-radius: 8px; // Added subtle border radius
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06); // Subtle shadow for depth
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  position: sticky;
  top: calc(var(--navbar-height, 80px) + 5rem); // Updated to match new padding and navbar height
  height: calc(100vh - var(--navbar-height, 80px) - 7rem); // Adjusted height for new spacing
  overflow-y: auto;
  
  @media (max-width: 1024px) {
    flex: none;
    width: 100%;
    position: static;
    height: auto;
    overflow-y: visible;
    border-right: none;
    border-bottom: 1px solid var(--border);
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const MainContent = styled.main`
  flex: 1;
  min-width: 0; // Important for flex item children to not overflow
`;

const CategoryNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`;

const CategoryPill = styled(motion.button)`
  background: ${props => props.$active ? 'var(--accent-light)' : 'transparent'};
  color: ${props => props.$active ? 'var(--primary)' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.$active ? 'var(--accent-light)' : 'transparent'};
  padding: 1rem 1.5rem; // Increased padding for better touch targets
  border-radius: 6px; // Added subtle border radius for modern look
  font-size: 0.95rem; // Slightly larger font for better readability
  text-align: left;
  cursor: pointer;
  font-weight: ${props => props.$active ? '600' : '500'};
  transition: all 0.3s ease; // Slightly longer transition for smoother feel
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: flex-start; // Ensures left alignment
  letter-spacing: 0.025em; // Subtle letter spacing for better readability

  &:hover {
    border-color: ${props => !props.$active && 'var(--border)'};
    color: ${props => !props.$active && 'var(--primary)'};
    background-color: ${props => !props.$active && 'var(--accent-light)'};
    transform: translateX(2px); // Subtle hover animation
  }

  &:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 4px; // Changed to left border indicator instead of full background
  height: 100%;
  background: var(--primary);
  z-index: 1;
  border-radius: 0 2px 2px 0; // Rounded right side only
  
  @media (max-width: 1024px) {
    bottom: 0;
    left: 0;
    top: auto;
    width: 100%;
    height: 3px; // Underline style on mobile
    border-radius: 0;
  }
`;

// Section title component for better visual hierarchy
const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 1.5rem;
  margin-top: 0;
  text-align: left;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;
  padding-left: 0;
`;

// MODIFIED Styled components
const PublicationsList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 4rem;
  
  @media (max-width: 1200px) { // 2 columns for medium screens
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) { // 1 column for small screens
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const PublicationCard = styled(motion.article)`
  position: relative;
  background: var(--card-bg);
  /* border-radius: 20px; */ // Removed as per original request
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  display: flex; 
  flex-direction: column;
  height: 100%; // Ensure card takes full height for consistent link area
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--secondary), #8B5CF6);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    
    &::before {
      opacity: 1;
    }
  }
`;

const PublicationImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%; // Aspect ratio 4:3 for the image container
  overflow: hidden;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);

  .publication-card-image { // This targets the OptimizedImage component's img tag if it's a direct child or via its className
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  ${PublicationCard}:hover & .publication-card-image {
    transform: scale(1.08);
  }
`;

const PublicationContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex-grow: 1; // Allows this section to take available space
`;

const PublicationType = styled.span`
  display: inline-flex;
  align-items: center;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 25px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  align-self: flex-start;
  box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  
  &::before {
    content: '●';
    margin-right: 0.5rem;
    animation: pulse 2s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 0.7; }
    50% { opacity: 1; }
  }
`;

const PublicationTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.3;
  color: var(--text);
  margin-bottom: 0.25rem;
  
  ${PublicationCard}:hover & {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const PublicationDescription = styled.p`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  flex-grow: 1; // Allows description to push meta to bottom
  margin-bottom: 1rem;
`;

const PublicationMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
  margin-top: auto; // Pushes to the bottom of PublicationContent
`;

const PublicationYear = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-weight: 500;
  
  &::before {
    content: '📅';
    font-size: 1rem;
  }
`;

// PublicationLink is removed as the whole card is a link

const EmptyState = styled(motion.div)`
  text-align: center;
  padding: 3rem 1.5rem; // Adjusted padding
  background: var(--card-bg);
  /* border-radius: 20px; */ // Removed
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  margin: 2rem auto; // Centered with some margin
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  max-width: 500px; // Limit width
  width: 100%;
`;

const EmptyIcon = styled.div`
  font-size: 3rem; // Adjusted size
  margin-bottom: 1rem;
`;

const EmptyTitle = styled.h3`
  font-size: 1.5rem; // Adjusted size
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text);
`;

const EmptyText = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 350px;
`;

const ResetButton = styled.button`
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: white;
  padding: 0.75rem 1.5rem; // Adjusted padding
  border: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem; // Adjusted font size
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(74, 144, 226, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(74, 144, 226, 0.4);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export default PublicationsPage;
