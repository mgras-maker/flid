import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import publicationsData from '../data/publicationsData';
import MetaTags from '../components/MetaTags';
import OptimizedImage from '../components/OptimizedImage';

const PublicationDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [publication, setPublication] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Find the publication by slug
  useEffect(() => {
    const foundPublication = publicationsData.find(p => p.slug === slug);
    
    if (foundPublication) {
      setPublication(foundPublication);
      setActiveImage(foundPublication.coverImage || foundPublication.images?.[0]);
      setLoading(false);
    } else {
      // If publication not found, redirect to publications page
      navigate('/publications', { replace: true });
    }
  }, [slug, navigate]);

  if (loading || !publication) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
      </LoadingContainer>
    );
  }

  return (
    <>
      <MetaTags 
        title={`${publication.title} - Publikacja`}
        description={publication.shortDesc || `Publikacja ${publication.title} - szczegółowy opis publikacji wydanej przez Fundację FLID.`}
        keywords={`${publication.title}, publikacja, ${publication.type}, artykuł, badanie, flid`}
        canonical={`/publications/${publication.slug}`}
        ogImage={publication.coverImage || '/images/publications/default-publication-cover.svg'}
      />
      
      <PublicationHeader>
        <div className="container">
          <HeaderContent>
            <BreadcrumbNav>
              <BreadcrumbLink to="/publications">Publikacje</BreadcrumbLink>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbCurrent>{publication.title}</BreadcrumbCurrent>
            </BreadcrumbNav>
            <PublicationTitle>{publication.title}</PublicationTitle>
            <PublicationMeta>
              <PublicationMetaItem>
                <MetaLabel>Typ:</MetaLabel> {publication.type}
              </PublicationMetaItem>
              <PublicationMetaItem>
                <MetaLabel>Rok:</MetaLabel> {publication.year}
              </PublicationMetaItem>
              {publication.format && (
                <PublicationMetaItem>
                  <MetaLabel>Format:</MetaLabel> {publication.format}
                </PublicationMetaItem>
              )}
            </PublicationMeta>
          </HeaderContent>
        </div>
      </PublicationHeader>

      <PublicationContent>
        <div className="container">
          <PublicationMainContent>
            <PublicationGallery>              <MainImageContainer>
                <OptimizedImage
                  key={activeImage}
                  src={activeImage || "/images/publication-placeholder.jpg"}
                  alt={publication.title}
                  aspectRatio="16:9"
                  priority={true}
                  className="publication-main-image"
                  placeholderSrc="/images/placeholder.svg"
                />
              </MainImageContainer>
              
              {publication.images && publication.images.length > 1 && (
                <ThumbnailsContainer>
                  {publication.images.map((image, index) => (
                    <ThumbnailButton
                      key={index}
                      active={image === activeImage}
                      onClick={() => setActiveImage(image)}
                    >                      <OptimizedImage 
                        src={image || "/images/publication-placeholder-thumb.jpg"} 
                        alt={`${publication.title} - zdjęcie ${index + 1}`}
                        aspectRatio="1:1"
                        className="thumbnail-image"
                      />
                      {image === activeImage && <ThumbnailActive layoutId="activeThumb" />}
                    </ThumbnailButton>
                  ))}
                </ThumbnailsContainer>
              )}
            </PublicationGallery>

            <PublicationInfo>
              <PublicationDescription>
                {publication.fullDesc}
              </PublicationDescription>

              {publication.publisher && (
                <PublicationSection>
                  <SectionTitle>Wydawca</SectionTitle>
                  <PublisherName>{publication.publisher}</PublisherName>
                </PublicationSection>
              )}

              {publication.links && publication.links.length > 0 && (
                <PublicationSection>
                  <SectionTitle>Dodatkowe informacje</SectionTitle>
                  <LinksList>
                    {publication.links.map((link, index) => (
                      <LinksListItem key={index}>
                        <ExternalLink href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.name}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </ExternalLink>
                      </LinksListItem>
                    ))}
                  </LinksList>
                </PublicationSection>
              )}
            </PublicationInfo>
          </PublicationMainContent>
          
          <PublicationNavigation>
            <PublicationNavButton to="/publications">
              <NavIcon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavIcon>
              Powrót do listy publikacji
            </PublicationNavButton>
          </PublicationNavigation>
        </div>
      </PublicationContent>
      
      <RelatedPublications>
        <div className="container">
          <RelatedTitle>Inne publikacje</RelatedTitle>
          <RelatedGrid>
            {publicationsData
              .filter(p => p.id !== publication.id)
              .slice(0, 2)
              .map(relatedPublication => (
                <RelatedCard
                  key={relatedPublication.id}
                  to={`/publications/${relatedPublication.slug}`}
                  whileHover={{ y: -5 }}
                >
                  <RelatedImageContainer>                    <OptimizedImage 
                      src={relatedPublication.coverImage || "/images/publication-placeholder.jpg"} 
                      alt={relatedPublication.title}
                      aspectRatio="16:9"
                      className="related-publication-image"
                      imgStyles={RelatedImageStyles}
                    />
                  </RelatedImageContainer>
                  <RelatedInfo>
                    <RelatedPublicationTitle>{relatedPublication.title}</RelatedPublicationTitle>
                    <RelatedPublicationType>{relatedPublication.type}</RelatedPublicationType>
                  </RelatedInfo>
                </RelatedCard>
              ))}
          </RelatedGrid>
        </div>
      </RelatedPublications>
    </>
  );
};

// Header Styles
const PublicationHeader = styled.header`
  background-color: var(--card-bg);
  padding: 6rem 0 3rem;
  margin-bottom: 3rem;
`;

const HeaderContent = styled.div`
  max-width: 800px;
`;

const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const BreadcrumbLink = styled(Link)`
  color: var(--text-secondary);
  font-size: 0.9rem;
  
  &:hover {
    color: var(--primary);
  }
`;

const BreadcrumbSeparator = styled.span`
  margin: 0 0.5rem;
  color: var(--text-secondary);
`;

const BreadcrumbCurrent = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const PublicationTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PublicationMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const PublicationMetaItem = styled.div`
  color: var(--text);
`;

const MetaLabel = styled.span`
  color: var(--text-secondary);
`;

// Main Content Styles
const PublicationContent = styled.div`
  margin-bottom: 4rem;
`;

const PublicationMainContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const PublicationGallery = styled.div``;

const MainImageContainer = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: var(--card-bg);
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

// MainImage is now replaced by OptimizedImage component

const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  
  &::-webkit-scrollbar {
    height: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--border);
    border-radius: 3px;
  }
`;

const ThumbnailButton = styled.button`
  width: 80px;
  height: 80px;
  border: none;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  background: none;
  flex-shrink: 0;
  
  &:focus {
    outline: 2px solid var(--primary);
  }
`;

// ThumbnailImage is now replaced by OptimizedImage component

const ThumbnailActive = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid var(--primary);
  border-radius: 4px;
  pointer-events: none; /* Ensures it doesn't interfere with clicks */
`;

const PublicationInfo = styled.div``;

const PublicationDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  white-space: pre-line;
`;

const PublicationSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text);
`;

const PublisherName = styled.div`
  font-size: 1.1rem;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
`;

const LinksListItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  
  svg {
    opacity: 0.7;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  
  &:hover {
    color: var(--secondary);
    
    svg {
      opacity: 1;
      transform: translateX(3px);
    }
  }
`;

const PublicationNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
`;

const PublicationNavButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  font-weight: 600;
  
  &:hover {
    color: var(--secondary);
  }
`;

const NavIcon = styled.div`
  display: flex;
  align-items: center;
`;

// Related Publications Styles
const RelatedPublications = styled.section`
  padding: 4rem 0;
  background-color: var(--card-bg);
`;

const RelatedTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const RelatedCard = styled(motion.create(Link))`
  display: block;
  color: var(--text);
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--background);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const RelatedImageContainer = styled.div`
  height: 200px;
  overflow: hidden;
`;

// RelatedImage is now replaced by OptimizedImage component
// Adding specific styles for OptimizedImage in related cards
const RelatedImageStyles = {
  transition: 'transform 0.5s ease',
};

const RelatedInfo = styled.div`
  padding: 1rem;
`;

const RelatedPublicationTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const RelatedPublicationType = styled.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

// Loading Styles
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: var(--primary);
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default PublicationDetailPage;
