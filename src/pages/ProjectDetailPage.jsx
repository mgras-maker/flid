import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import projectsData from '../data/projectsData';
import { ProjectPlaceholder } from '../components/PlaceholderImages';
import MetaTags from '../components/MetaTags';
import OptimizedImage from '../components/OptimizedImage';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Find the project by slug
  useEffect(() => {
    const foundProject = projectsData.find(p => p.slug === slug);
    
    if (foundProject) {
      console.log('Found project:', foundProject);
      console.log('Cover image:', foundProject.coverImage);
      console.log('Images array:', foundProject.images);
      setProject(foundProject);

      const displayableGalleryImages = foundProject.images
        ? foundProject.images.filter(img => img !== foundProject.coverImage)
        : [];
      
      const initialGalleryImage = displayableGalleryImages.length > 0 ? displayableGalleryImages[0] : null;
      
      console.log('Setting active gallery image to:', initialGalleryImage);
      setActiveImage(initialGalleryImage); // This is for the gallery section below the main cover
      setLoading(false);
    } else {
      // If project not found, redirect to projects page
      navigate('/projects', { replace: true });
    }
  }, [slug, navigate]);

  if (loading || !project) {
    return (
      <LoadingContainer>
        <LoadingSpinner />
      </LoadingContainer>
    );
  }

  return (
    <>
      <MetaTags 
        title={`${project.title} - Projekt`}
        description={project.shortDesc || `Projekt ${project.title} - szczegółowy opis projektu realizowanego przez Fundację FLID.`}
        keywords={`${project.title}, projekt, ${project.category}, design, flid`}
        canonical={`/projects/${project.slug}`}
        ogImage={project.coverImage || project.images?.[0] || '/images/projects/default-project-cover.svg'}
      />

      {project.coverImage && (
        <FullWidthCoverImageContainer>
          <OptimizedImage
            src={project.coverImage}
            alt={`${project.title} - Cover Image`}
            aspectRatio="auto" 
            priority={true}
            className="project-cover-image-full-width"
          />
        </FullWidthCoverImageContainer>
      )}
      
      <ProjectHeader>
        <div className="container">
          <HeaderContent>
            <BreadcrumbNav>
              <BreadcrumbLink to="/projects">Projekty</BreadcrumbLink>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbCurrent>{project.title}</BreadcrumbCurrent>
            </BreadcrumbNav>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectMeta>
              <ProjectMetaItem>
                <MetaLabel>Kategoria:</MetaLabel> {project.category}
              </ProjectMetaItem>
              <ProjectMetaItem>
                <MetaLabel>Rok:</MetaLabel> {project.year}
              </ProjectMetaItem>
            </ProjectMeta>
          </HeaderContent>
        </div>
      </ProjectHeader>

      <ProjectContent>
        <div className="container">
          <ProjectMainContent>
            <ProjectGallery>
              <MainImageContainer>
                {console.log('Rendering gallery main image, activeImage:', activeImage)}
                {activeImage ? (
                  <OptimizedImage
                    key={activeImage} // Use activeImage as key to re-mount if src changes
                    src={activeImage}
                    alt={`${project.title} - zdjęcie projektu`}
                    aspectRatio="auto" // Changed from "16:9" to "auto"
                    priority={true}
                    className="project-main-image"
                    placeholderSrc="/images/placeholder.svg"
                  />
                ) : (
                  // If no activeImage (e.g., only cover image existed), show nothing or a placeholder here
                  // This part might need adjustment based on desired behavior when no other images exist
                  (project.images && project.images.filter(img => img !== project.coverImage).length === 0) ?
                  null : // Or a message like "No additional gallery images"
                  <ProjectPlaceholder title={project.title} />
                )}
              </MainImageContainer>
              
              {(() => {
                const galleryImages = project.images ? project.images.filter(img => img !== project.coverImage) : [];
                if (galleryImages && galleryImages.length > 0) { // Show thumbnails if there are any non-cover images
                  return (
                    <ThumbnailsContainer>
                      {galleryImages.map((image) => (
                        <ThumbnailButton
                          key={image} // Use image path as key
                          $active={image === activeImage}
                          onClick={() => setActiveImage(image)}
                        >
                          <OptimizedImage 
                            src={image} 
                            alt={`${project.title} - zdjęcie ${galleryImages.indexOf(image) + 1}`}
                            aspectRatio="1:1"
                            imgStyles={{ objectFit: "cover" }}
                          />
                          {image === activeImage && <ThumbnailActive layoutId="activeThumb" />}
                        </ThumbnailButton>
                      ))}
                    </ThumbnailsContainer>
                  );
                }
                return null;
              })()}
            </ProjectGallery>

            <ProjectInfo>
              <ProjectDescription>
                {project.fullDesc}
              </ProjectDescription>

              {project.partners && project.partners.length > 0 && (
                <ProjectSection>
                  <SectionTitle>Partnerzy</SectionTitle>
                  <PartnersList>
                    {project.partners.map((partner, index) => (
                      <PartnersListItem key={index}>
                        {partner}
                      </PartnersListItem>
                    ))}
                  </PartnersList>
                </ProjectSection>
              )}

              {project.technologies && project.technologies.length > 0 && (
                <ProjectSection>
                  <SectionTitle>Technologie i metody</SectionTitle>
                  <TagsContainer>
                    {project.technologies.map((tech, index) => (
                      <Tag key={index}>{tech}</Tag>
                    ))}
                  </TagsContainer>
                </ProjectSection>
              )}
            </ProjectInfo>
          </ProjectMainContent>
          
          <ProjectNavigation>
            <ProjectNavButton to="/projects">
              <NavIcon>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </NavIcon>
              Powrót do listy projektów
            </ProjectNavButton>
          </ProjectNavigation>
        </div>
      </ProjectContent>
      
      <RelatedProjects>
        <div className="container">
          <RelatedTitle>Inne projekty</RelatedTitle>
          <RelatedGrid>
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(relatedProject => (
                <RelatedCard
                  key={relatedProject.id}
                  to={`/projects/${relatedProject.slug}`}
                  whileHover={{ y: -5 }}
                >
                  <RelatedImageContainer>
                    {relatedProject.coverImage ? (
                      <OptimizedImage 
                        src={relatedProject.coverImage}
                        alt={relatedProject.title}
                        aspectRatio="16:9"
                        className="related-project-image"
                      />
                    ) : (
                      <div style={{height: "100%", width: "100%"}}>
                        <ProjectPlaceholder title={relatedProject.title} />
                      </div>
                    )}
                  </RelatedImageContainer>
                  <RelatedInfo>
                    <RelatedProjectTitle>{relatedProject.title}</RelatedProjectTitle>
                    <RelatedProjectCategory>{relatedProject.category}</RelatedProjectCategory>
                  </RelatedInfo>
                </RelatedCard>
              ))}
          </RelatedGrid>
        </div>
      </RelatedProjects>
    </>
  );
};

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

const FullWidthCoverImageContainer = styled.div`
  width: 100%; /* Occupy full width of parent (Main) */
  margin-bottom: 2rem;
  line-height: 0; /* Prevents extra space below image */
  overflow: hidden; /* Ensures content (the image) does not spill out */

  .project-cover-image-full-width {
    display: block; /* Remove potential extra space below the image */
    width: 100%;    /* Make the image take the full width of this container */
    height: auto;   /* Maintain the image's aspect ratio */
    max-width: 100%; /* Explicitly ensure it doesn't exceed container width */
  }
`;

// Header Styles
const ProjectHeader = styled.header`
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

const ProjectTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: 2rem;
`;

const ProjectMetaItem = styled.div`
  color: var(--text);
`;

const MetaLabel = styled.span`
  color: var(--text-secondary);
`;

// Main Content Styles
const ProjectContent = styled.div`
  margin-bottom: 4rem;
`;

const ProjectMainContent = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectGallery = styled.div``;

const MainImageContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 1rem;
  background-color: var(--card-bg);
  
  /* Styles for the OptimizedImage component */
  .project-main-image {
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  @media (max-width: 768px) {
    max-height: 300px;
  }
`;

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

// Thumbnail Styles
const ThumbnailButton = styled.button`
  width: 80px;
  height: 80px;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  border: 2px solid ${({ $active }) => ($active ? 'var(--primary)' : 'var(--border-ultralight)')}; // Changed to $active
  transition: border-color 0.2s ease-in-out;

  &:hover {
    border-color: ${({ $active }) => ($active ? 'var(--primary-dark)' : 'var(--border-light)')}; // Changed to $active
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const ThumbnailActive = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid var(--primary);
  border-radius: 4px;
`;

const ProjectInfo = styled.div``;

const ProjectDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  white-space: pre-line;
`;

const ProjectSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--text);
`;

const PartnersList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PartnersListItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background-color: var(--card-bg);
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const ProjectNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
`;

const ProjectNavButton = styled(Link)`
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

// Related Projects Styles
const RelatedProjects = styled.section`
  padding: 4rem 0;
  background-color: var(--card-bg);
`;

const RelatedTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

// Create a motion component first using the new motion.create() API, then style it
const MotionLink = motion.create(Link);

const RelatedCard = styled(MotionLink)`
  display: block;
  color: var(--text);
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--background);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const RelatedImageContainer = styled.div`
  height: 150px;
  overflow: hidden;
  
  /* Styles for the OptimizedImage component */
  .related-project-image {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
    
    ${RelatedCard}:hover & {
      transform: scale(1.05);
    }
  }
`;

const RelatedInfo = styled.div`
  padding: 1rem;
`;

const RelatedProjectTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const RelatedProjectCategory = styled.span`
  font-size: 0.8rem;
  color: var(--text-secondary);
`;

export default ProjectDetailPage;
