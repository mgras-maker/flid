import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ThemeSwitcher } from '../../contexts/ThemeContext.tsx';
import { useTheme } from '../../contexts/ThemeHooks.tsx';
import { throttle } from '../../utils/performance.ts';
import logoImage from '../../assets/images/logo.gif';

const Navbar = () => {
  const location = useLocation();  const { isDarkMode } = useTheme();
  // We're using responsive styles through CSS instead of this hook directly
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check if the current route is active
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);  // Throttle scroll handler for better performance
  // Using a memoized function with useEffect dependencies
  const handleScroll = throttle(() => {
    const isScrolled = window.scrollY > 20;
    if (isScrolled !== scrolled) {
      setScrolled(isScrolled);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);  return (    <header      className={`fixed top-0 left-0 w-full z-50 py-4 transition-all duration-300 ${
        scrolled 
          ? isDarkMode 
            ? 'bg-flid-dark shadow-md' 
            : 'bg-white shadow-md' 
          : 'bg-transparent'
      }`}
    >      <div className="container-wide flex items-center justify-between relative">        <Link to="/" className="flex items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center"
          >            <img 
              src={logoImage} 
              alt="FLID.PL" 
              className="h-12" 
            />
          </motion.div>
        </Link>        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Projects', 'Process', 'Contact'].map((item) => (          <motion.div
              key={item}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="mt-[2px]"
            >
              <Link 
                to={`/${item.toLowerCase()}`}
                className={`font-medium transition-colors ${
                  isActive(`/${item.toLowerCase()}`)
                    ? 'text-flid-accent'
                    : isDarkMode
                      ? 'text-white hover:text-flid-accent'
                      : 'text-flid-dark hover:text-flid-accent'
                }`}
              >
                {item}
              </Link>            </motion.div>          ))}
          
          {/* Design Thinking Game Link */}
          <motion.div
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="mt-[2px]"
          >
            <Link 
              to="/design-thinking-game"
              className={`font-medium transition-colors ${
                isActive('/design-thinking-game')
                  ? 'text-flid-accent'
                  : isDarkMode
                    ? 'text-white hover:text-flid-accent'
                    : 'text-flid-dark hover:text-flid-accent'
              }`}
            >
              Gra DT
            </Link>
          </motion.div>
            {/* Theme Switcher - Desktop */}
          <div>
            <ThemeSwitcher />
          </div>
        </nav>

        <div className="md:hidden flex items-center">
          {/* Theme Switcher - Mobile */}          <div className="mt-[1px]">
            <ThemeSwitcher className="mr-3" />
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className={`${isDarkMode ? 'text-white' : 'text-flid-dark'} focus:outline-none`}
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation with AnimatePresence for smooth animations */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Menu panel */}            <motion.div 
              className={`fixed top-[80px] right-0 w-4/5 max-w-sm h-[calc(100vh-80px)] ${
                isDarkMode ? 'bg-flid-dark' : 'bg-white'
              } shadow-lg py-6 px-4 md:hidden z-50 overflow-y-auto`}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex flex-col h-full">
                <div className="border-b border-gray-200 dark:border-gray-700 pb-2 mb-6">
                  <h3 className={`text-lg font-semibold ${isDarkMode ? 'text-white' : 'text-flid-dark'}`}>
                    Navigation
                  </h3>
                </div>
                  <div className="flex-1 space-y-6">
                  {['About', 'Projects', 'Process', 'Contact'].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-gray-100 dark:border-gray-800 pb-4"
                    >
                      <Link 
                        to={`/${item.toLowerCase()}`}
                        onClick={() => setMenuOpen(false)}
                        className={`font-medium py-3 px-2 flex items-center text-lg ${
                          isActive(`/${item.toLowerCase()}`)
                            ? 'text-flid-accent'
                            : isDarkMode
                              ? 'text-white/90 hover:text-flid-accent'
                              : 'text-flid-dark/80 hover:text-flid-accent'
                        }`}
                      >
                        {item}
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Design Thinking Game Link - Mobile */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="border-b border-gray-100 dark:border-gray-800 pb-4"
                  >
                    <Link 
                      to="/design-thinking-game"
                      onClick={() => setMenuOpen(false)}
                      className={`font-medium py-3 px-2 flex items-center text-lg ${
                        isActive('/design-thinking-game')
                          ? 'text-flid-accent'
                          : isDarkMode
                            ? 'text-white/90 hover:text-flid-accent'
                            : 'text-flid-dark/80 hover:text-flid-accent'
                      }`}
                    >
                      Gra Design Thinking
                    </Link>
                  </motion.div>
                </div>

                <div className="pt-8 mt-auto">
                  <div className={`text-center ${isDarkMode ? 'text-white/70' : 'text-flid-dark/70'} text-sm`}>
                    <p>© 2025 FLID Foundation</p>
                    <p className="mt-1">Foundation People-Innovations-Design</p>
                  </div>
                </div>
              </div>            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
