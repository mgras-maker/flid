import { memo, Suspense, lazy } from 'react';
import type { ReactNode } from 'react';
import Navbar from './Navbar.tsx';
import Footer from './Footer.tsx';
import { useTrackRender } from '../../utils/performance.ts';

// Lazy load non-critical components
const ScrollToTopButton = lazy(() => 
  import(/* webpackChunkName: "scroll-top-button" */ '../ui/ScrollToTopButton')
);

interface LayoutProps {
  children: ReactNode;
}

// Memoize layout to prevent unnecessary re-renders
const Layout = memo(({ children }: LayoutProps) => {
  // Track component render time for performance monitoring
  useTrackRender('Layout');
  
  return (    <div className="flex flex-col min-h-screen bg-flid-light dark:bg-flid-dark transition-colors duration-300">
      <Navbar />
      <main className="flex-grow mt-16">
        {children}
      </main>
      <Footer />
      <Suspense fallback={null}>
        <ScrollToTopButton />
      </Suspense>
    </div>
  );
});

// Add display name for better debugging
Layout.displayName = 'Layout';

export default Layout;
