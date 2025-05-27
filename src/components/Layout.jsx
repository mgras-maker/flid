import styled from 'styled-components';
import ScrollToTopButton from './ScrollToTopButton';
import useSmoothScrolling from '../hooks/useSmoothScrolling';
import CreativeNavbar from './CreativeNavbar';
import useScrollRestoration from '../hooks/useScrollRestoration';
import Footer from './Footer';

const Layout = ({ children }) => {  
  // Apply smooth scrolling behavior for anchor links
  useSmoothScrolling();
    // Apply improved scroll restoration behavior
  useScrollRestoration();  return (
    <LayoutWrapper>
      <CreativeNavbar />
      <Main className="page-transition-container">
        {children}
      </Main>
      <Footer />
      <ScrollToTopButton />
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding-top: 80px; /* Kompensacja dla fixed navbar */
  
  /* Add smooth transition for dark/light mode changes */
  transition: background-color 0.3s ease, color 0.3s ease;
  
  /* HD Display enhancements with refined spacing and typography */
  @media (min-width: 1920px) {
    padding: 0;
    max-width: none;
    margin: 0;
    
    & h1 {
      font-size: 3.5rem;
    }
    
    & h2 {
      font-size: 2.8rem;
    }
    
    & p {
      font-size: 1.1rem;
      line-height: 1.7;
    }
    
    & section {
      margin: 5rem 0;
    }
  }
  
  /* Ultra HD Display optimizations */
  @media (min-width: 2560px) {
    padding: 0;
    max-width: none;
    margin: 0;
    
    & h1 {
      font-size: 4rem;
    }
    
    & h2 {
      font-size: 3.2rem;
    }
    
    & p {
      font-size: 1.2rem;
      line-height: 1.8;
    }
    
    & section {
      margin: 6rem 0;
    }
  }
`;

export default Layout;
