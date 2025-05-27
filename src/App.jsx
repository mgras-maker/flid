import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { HelmetProvider } from 'react-helmet-async'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import SimpleScrollbar from './components/SimpleScrollbar'
import PageTransitionOverlay from './components/PageTransitionOverlay'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import PublicationsPage from './pages/PublicationsPage'
import PublicationDetailPage from './pages/PublicationDetailPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './App.css'
import GlobalStyles from './styles/GlobalStyles'
import './styles/LavenderAnimations.css'
import './styles/PageTransitions.css'
import './styles/LogoFix.css'
import './styles/FullWidth.css'
import './styles/MobileFixes.css'
import './styles/FullWidthFix.css'
import './styles/ProjectPageFix.css'
import './styles/ProjectPageEmergencyFix.css'
import './styles/PageFixes.css'
import './styles/ThemeToggleFix.css'
import './styles/DarkModeTransitions.css'
import './styles/DarkModeEnhancements.css'
import './styles/MobileDarkMode.css'
import './styles/SubtleThemeTransitions.css'
import './styles/SubtlePageTransitions.css'
import './styles/TransitionDebug.css'
import './styles/FocusOverride.css'
// import './styles/ScrollbarFix.css'
import './styles/PageTransitionFix.css'
import MetaTags from './components/MetaTags'
import DebugOverlay from './components/DebugOverlay'
import CreativeButtons from './components/CreativeButtons'
import CreativeCards from './components/CreativeCards'
import CreativeElements from './components/CreativeElements'
import CreativeTypography from './components/CreativeTypography'
import CreativeNavbar from './components/CreativeNavbar'

// Enhanced PageTransition component for smooth page transitions
const PageTransition = ({ children }) => {
  const pageVariants = {
    initial: { 
      opacity: 0,
    },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      }
    }
  };
  
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      style={{ 
        width: '100%',
        backgroundColor: 'var(--background)',
      }}
    >
      {children}
    </motion.div>
  );
};

// Enhanced AnimatedRoutes component for handling smooth page transitions
const AnimatedRoutes = ({ setIsTransitioning }) => {
  const location = useLocation();
  
  useEffect(() => {
    setIsTransitioning?.(true);
    
    const timeout = setTimeout(() => {
      setIsTransitioning?.(false);
    }, 400);
    
    return () => clearTimeout(timeout);
  }, [location, setIsTransitioning]);

  return (
    <div className="animated-routes-container">
      <AnimatePresence 
        mode="wait" 
        initial={false}
        onExitComplete={() => {
          // Scrolluj na górę po zakończeniu animacji wyjścia
          window.scrollTo(0, 0);
        }}
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <HomePage />
            </PageTransition>
          } />
          <Route path="/projects" element={
            <PageTransition>
              <ProjectsPage />
            </PageTransition>
          } />
          <Route path="/projects/:slug" element={
            <PageTransition>
              <ProjectDetailPage />
            </PageTransition>
          } />
          <Route path="/publications" element={
            <PageTransition>
              <PublicationsPage />
            </PageTransition>
          } />
          <Route path="/publications/:slug" element={
            <PageTransition>
              <PublicationDetailPage />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

// Root App component
function App() {
  const [isTransitioning, setIsTransitioning] = useState(false);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <PageTransitionOverlay isTransitioning={isTransitioning} />
          <Layout>
            <AnimatedRoutes setIsTransitioning={setIsTransitioning} />
          </Layout>
          {/* <SimpleScrollbar /> */}
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App
