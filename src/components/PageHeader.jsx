import styled from 'styled-components';
import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle, backgroundImage }) => {  return (
    <HeaderContainer $backgroundImage={backgroundImage}>
      <div className="container">
        <HeaderContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeaderTitle>{title}</HeaderTitle>
            {subtitle && <HeaderSubtitle>{subtitle}</HeaderSubtitle>}
          </motion.div>        </HeaderContent>
      </div>
      <HeaderOverlay $backgroundImage={backgroundImage} />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  position: relative;
  min-height: 40vh;
  display: flex;  align-items: center;
  background-image: ${props => props.$backgroundImage ? `url(${props.$backgroundImage})` : 'none'};
  background-size: cover;
  background-position: center;
  color: white;
  margin-bottom: 3rem;
`;

const HeaderOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;  bottom: 0;
  background: ${props => props.$backgroundImage 
    ? 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))' 
    : 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)'};
  z-index: -1;
  opacity: ${props => props.$backgroundImage ? 1 : 0.9};
`;

const HeaderContent = styled.div`
  text-align: center;
  padding: 4rem 0;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeaderSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export default PageHeader;
