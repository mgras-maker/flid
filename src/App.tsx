import { useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import ScrollToTop from './components/utils/ScrollToTop.tsx';
import ResourcePreloader from './components/utils/ResourcePreloader.tsx';
import { usePrefetchRoutes } from './utils/routePrefetch.ts';
import './App.css';

// Preload critical components to eliminate flashing
import('./components/layout/Navbar').catch(console.error);
import('./components/layout/Footer').catch(console.error);

// Non-lazy loaded pages for immediate rendering - remove lazy loading to prevent flicker
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import ProjectDetailPage from './pages/ProjectDetailPage.tsx';
import ProcessPage from './pages/ProcessPage.tsx';
import ContactPage from './pages/ContactPage.tsx';
import EnergiaJutraPage from './pages/EnergiaJutraPage.tsx';
import SustainablePackagingPage from './pages/SustainablePackagingPage.tsx';
import BeataPrzybytkPage from './pages/BeataPrzybytkPage.tsx';
import { DesignThinkingGamePage } from './pages/DesignThinkingGamePage.tsx';

// Note: This function is kept for future implementation of dynamic prefetching
// Currently not used but will be integrated once route analytics are collected
// const getRoutesToPrefetch = (path: string) => {
//   // Default routes to prefetch from any page
//   const commonRoutes = ['/', '/about'];
//   
//   // Add page-specific prefetches
//   switch (true) {
//     case path === '/':
//       return [...commonRoutes, '/projects', '/process'];
//     case path === '/about':
//       return [...commonRoutes, '/projects', '/contact'];
//     case path.startsWith('/projects'):
//       return [...commonRoutes, '/process', '/contact'];
//     case path === '/process':
//       return [...commonRoutes, '/projects', '/contact'];
//     case path === '/contact':
//       return [...commonRoutes, '/projects'];
//     default:
//       return commonRoutes;
//   }
// };

// Wrapper component for routes with direct rendering - simplified to avoid flickering
const CachedRoute = ({ Component }: { path: string, Component: React.ComponentType }) => {
  // Skip all caching checks and conditional rendering to avoid flickering
  return (
    <Component />
  );
};

// Main app with prefetching and caching - simplified to prevent flickering
const AppContent = () => {
  // Implement route prefetching
  const routes = ['/about', '/projects', '/process', '/contact'];
  usePrefetchRoutes({ paths: routes });
  
  // Simply mark render completion for performance measurement
  useEffect(() => {
    performance.mark('app-ready');
  }, []);
  
  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      {/* Preload critical resources */}
      <ResourcePreloader />
      
      {/* All routes without transition or suspense wrappers to prevent flickering */}
      <Routes>
        <Route path="/" element={<CachedRoute path="/" Component={HomePage} />} />
        <Route path="/about" element={<CachedRoute path="/about" Component={AboutPage} />} />        <Route path="/projects" element={<CachedRoute path="/projects" Component={ProjectsPage} />} />
        <Route path="/projects/beata-przybytek" element={<CachedRoute path="/beata-przybytek" Component={BeataPrzybytkPage} />} />
        <Route path="/projects/energia-jutra" element={<CachedRoute path="/energia-jutra" Component={EnergiaJutraPage} />} />
        <Route path="/projects/energia-jutra-en" element={<CachedRoute path="/energia-jutra-en" Component={EnergiaJutraPage} />} />
        <Route path="/projects/eco-packaging" element={<CachedRoute path="/eco-packaging" Component={SustainablePackagingPage} />} />
        <Route path="/projects/sustainable-packaging" element={<CachedRoute path="/sustainable-packaging" Component={SustainablePackagingPage} />} />
        {/* Specific routes come before the parameterized route */}        <Route path="/projects/:projectId" element={<CachedRoute path="/project-detail" Component={ProjectDetailPage} />} />
        <Route path="/process" element={<CachedRoute path="/process" Component={ProcessPage} />} />
        <Route path="/design-thinking-game" element={<CachedRoute path="/design-thinking-game" Component={DesignThinkingGamePage} />} />
        <Route path="/contact" element={<CachedRoute path="/contact" Component={ContactPage} />} />
        
        {/* Fallback for unknown routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    
    </>
  );
};

function App() {
  // Mark render completion for performance measurement
  useEffect(() => {
    // Run after the initial render is complete
    performance.mark('react-render-complete');
    performance.measure('react-render', 'react-render-start', 'react-render-complete');
  }, []);

  return (
    <ThemeProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
