import styled from 'styled-components';
import { motion } from 'framer-motion';

// Generic placeholder image with text and customizable background
export const Placeholder = ({ width = '100%', height = '300px', text = 'Placeholder', bgColor = 'var(--primary)', textColor = 'white' }) => {
  return (
    <PlaceholderContainer 
      $width={width}
      $height={height}
      $bgColor={bgColor}
      $textColor={textColor}
    >
      {text}
    </PlaceholderContainer>
  );
};

// Project placeholder with hover effect
export const ProjectPlaceholder = ({ title = 'Project Title', animate = true }) => {
  return (
    <ProjectPlaceholderContainer
      whileHover={animate ? { scale: 1.03 } : {}}
      transition={{ duration: 0.3 }}
    >
      <Icon>🏗️</Icon>
      <Text>{title}</Text>
    </ProjectPlaceholderContainer>
  );
};

// Publication placeholder
export const PublicationPlaceholder = ({ title = 'Publication' }) => {
  return (
    <PublicationPlaceholderContainer>
      <Icon>📄</Icon>
      <Text>{title}</Text>
    </PublicationPlaceholderContainer>
  );
};

// Partner logo placeholder
export const PartnerLogoPlaceholder = ({ name = 'Partner' }) => {
  return (
    <PartnerPlaceholderContainer>
      <Icon>🤝</Icon>
      <Text>{name}</Text>
    </PartnerPlaceholderContainer>
  );
};

// Team member photo placeholder
export const TeamMemberPlaceholder = ({ name = 'Team Member' }) => {
  return (
    <TeamMemberPlaceholderContainer>
      <Icon>👤</Icon>
      <Text>{name}</Text>
    </TeamMemberPlaceholderContainer>
  );
};

// Base placeholder styles
const PlaceholderContainer = styled.div`
  width: ${props => props.$width};
  height: ${props => props.$height};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${props => props.$bgColor};
  color: ${props => props.$textColor};
  font-weight: 600;
  border-radius: 8px;
  text-align: left;
  padding: 1rem;
`;

// Project placeholder styles
const ProjectPlaceholderContainer = styled(motion.div)`
  width: 100%;
  aspect-ratio: 16/9;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  padding: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

// Publication placeholder styles
const PublicationPlaceholderContainer = styled.div`
  width: 100%;
  aspect-ratio: 3/4;
  background: linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  padding: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// Partner logo placeholder styles
const PartnerPlaceholderContainer = styled.div`
  width: 100%;
  aspect-ratio: 16/9;
  background-color: var(--card-bg);
  border: 2px dashed var(--border);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: var(--text-secondary);
  padding: 1rem;
`;

// Team member placeholder styles
const TeamMemberPlaceholderContainer = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  background: linear-gradient(45deg, var(--accent) 0%, var(--primary) 100%);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  padding: 1rem;
`;

// Shared styles
const Icon = styled.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const Text = styled.span`
  font-weight: 600;
  text-align: center;
  font-size: 0.9rem;
`;

export default Placeholder;
