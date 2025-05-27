import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import '../styles/CreativeNavbar.css';
import '../styles/IndependentMobileMenu.css';

const CreativeNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);
  
  // Debug tracking for development only
  useEffect(() => {
    if (import.meta.env.DEV) {
      console.debug('[CreativeNavbar] Component mounted');
    }
  }, []);
  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      
      // ESC key closes mobile menu
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      
      // Alt + M toggles mobile menu
      if (e.altKey && e.key === 'm') {
        setIsMobileMenuOpen(prev => !prev);
      }
      
      // Alt + H navigates to home
      if (e.altKey && e.key === 'h') {
        window.location.href = '/';
      }
      
      // Alt + 1-5 for quick navigation
      if (e.altKey && !isNaN(e.key) && parseInt(e.key) >= 1 && parseInt(e.key) <= 5) {
        const routes = ['/', '/projects', '/publications', '/about', '/contact'];
        const index = parseInt(e.key) - 1;
        if (routes[index]) {
          window.location.href = routes[index];
        }
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
      // Clean up
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);    // Toggle mobile menu with better state management
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => {
      const newState = !prev;
      
      // Prevent scrolling when menu is open
      if (newState) {
        document.body.style.overflow = 'hidden';
        document.body.classList.add('mobile-menu-open');
      } else {
        document.body.style.overflow = 'unset';
        document.body.classList.remove('mobile-menu-open');
      }
      
      return newState;
    });
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        document.body.style.overflow = 'unset';
        document.body.classList.remove('mobile-menu-open');
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMobileMenuOpen]);
  // Clean up body overflow when component unmounts
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('mobile-menu-open');
    };
  }, []);  return (
    <>
      <NavbarContainer 
        // $scrolled={isScrolled} // Removed $scrolled prop
        $isHomePage={isHomePage}
        role="navigation"
        aria-label="Main Navigation"
      >
        <NavInner>
          <LogoWrapper>
            <LogoLink to="/" aria-label="FLID Studio">
              <SimpleLogo>FLID</SimpleLogo>
            </LogoLink>
          </LogoWrapper>
          
          {/* Desktop Navigation */}<DesktopNav>          <NavList role="menubar">
            {[
              { to: "/", label: "Strona główna", shortcut: "Alt+1", ariaShortcut: "Alt plus 1" },
              { to: "/projects", label: "Projekty", shortcut: "Alt+2", ariaShortcut: "Alt plus 2" },
              { to: "/publications", label: "Publikacje", shortcut: "Alt+3", ariaShortcut: "Alt plus 3" },
              { to: "/about", label: "O nas", shortcut: "Alt+4", ariaShortcut: "Alt plus 4" },
              { to: "/contact", label: "Kontakt", shortcut: "Alt+5", ariaShortcut: "Alt plus 5" }
            ].map((item, index) => (
              <NavItem key={item.to} role="none">
                <NavLinkStyled
                  to={item.to}
                  $delay={index * 0.05}
                  $isActive={item.to === location.pathname || (item.to === "/" && location.pathname === "/")}
                  title={`${item.label} (${item.shortcut})`}
                  aria-keyshortcuts={item.ariaShortcut}
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.label}
                  <ShortcutHint>{item.shortcut}</ShortcutHint>
                  <LinkEffect className="link-effect" />
                </NavLinkStyled>
              </NavItem>
            ))}          </NavList>
          <NavControls>
            <ThemeToggle />
          </NavControls>
        </DesktopNav>
          {/* Mobile Menu Toggle */}
        <MobileControls>
          <ThemeWrapper>
            <ThemeToggle />
          </ThemeWrapper>          <MenuButton 
            className="menu-button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-haspopup="true"
          >
            <MenuIconContainer $isOpen={isMobileMenuOpen}>
              <MenuBarTop $isOpen={isMobileMenuOpen} />
              <MenuBarMiddle $isOpen={isMobileMenuOpen} />
              <MenuBarBottom $isOpen={isMobileMenuOpen} />
            </MenuIconContainer>
          </MenuButton>        </MobileControls>
      </NavInner>
    </NavbarContainer>

    {/* Independent Mobile Menu - Outside of navbar structure */}
    <AnimatePresence mode="wait">
      {isMobileMenuOpen && (
        <IndependentMobileMenu
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu nawigacyjne"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.3,
            ease: "easeInOut"
          }}
        >
          <MobileMenuOverlay 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={toggleMobileMenu}
          />
          
          <MobileMenuContent
            className="mobile-menu-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              type: "tween", 
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            <MobileMenuHeader>
              <MobileLogo to="/" onClick={toggleMobileMenu}>
                <SimpleLogo>FLID</SimpleLogo>
              </MobileLogo>
              
              <MobileMenuHeaderControls>
                <ThemeWrapper className="mobile-theme-wrapper">
                  <ThemeToggle />
                </ThemeWrapper>
                <CloseButton
                  onClick={toggleMobileMenu}
                  aria-label="Zamknij menu"
                  title="Zamknij menu"
                >
                  <CloseIcon />
                </CloseButton>
              </MobileMenuHeaderControls>
            </MobileMenuHeader>

            <MobileMenuMain>
              <MobileNavList
                initial="closed"
                animate="open"
                exit="closed"
                role="menu"
                aria-label="Menu nawigacyjne mobilne"
                variants={{
                  open: {
                    transition: { 
                      staggerChildren: 0.07,
                      delayChildren: 0.1
                    }
                  },
                  closed: {
                    transition: { 
                      staggerChildren: 0.05,
                      staggerDirection: -1
                    }
                  }
                }}
              >
                {[
                  { to: "/", label: "Strona główna", shortcut: "Alt+1", ariaShortcut: "Alt plus 1" },
                  { to: "/projects", label: "Projekty", shortcut: "Alt+2", ariaShortcut: "Alt plus 2" },
                  { to: "/publications", label: "Publikacje", shortcut: "Alt+3", ariaShortcut: "Alt plus 3" },
                  { to: "/about", label: "O nas", shortcut: "Alt+4", ariaShortcut: "Alt plus 4" },
                  { to: "/contact", label: "Kontakt", shortcut: "Alt+5", ariaShortcut: "Alt plus 5" }
                ].map((item) => (
                  <MobileNavItem
                    key={item.to}
                    role="none"
                    variants={{
                      open: { 
                        opacity: 1, 
                        y: 0,
                        transition: {
                          type: "spring",
                          stiffness: 350,
                          damping: 30
                        }
                      },
                      closed: { 
                        opacity: 0, 
                        y: 20,
                        transition: {
                          type: "spring",
                          stiffness: 350,
                          damping: 30
                        }
                      }
                    }}
                  >
                    <MobileNavLinkStyled
                      to={item.to}
                      onClick={toggleMobileMenu}
                      $isActive={item.to === location.pathname || (item.to === "/" && location.pathname === "/")}
                      role="menuitem"
                      tabIndex={0}
                      title={`${item.label} (${item.shortcut})`}
                      aria-keyshortcuts={item.ariaShortcut}
                    >
                      {item.label}
                    </MobileNavLinkStyled>
                  </MobileNavItem>
                ))}
              </MobileNavList>
            </MobileMenuMain>

            <MobileMenuFooter>
              <SocialLinks>
                {/* Social media icons */}
                <SocialLink href="https://facebook.com" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </SocialLink>
                <SocialLink href="https://instagram.com" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.247-.666.642-1.272 1.153-1.772.5-.508 1.106-.902 1.772-1.153.637-.247 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.058-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.352-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.352.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 100-6.666 3.333 3.333 0 000 6.666zm6.538-8.469a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                  </svg>
                </SocialLink>
                <SocialLink href="https://linkedin.com" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.996 2H4.004A2.004 2.004 0 002 4.004v15.992A2.004 2.004 0 004.004 22h15.992A2.004 2.004 0 0022 19.996V4.004A2.004 2.004 0 0019.996 2zM8.49 18.993H5.197V9.497H8.49v9.496zM6.843 8.146a1.91 1.91 0 11-.001-3.822 1.91 1.91 0 01.001 3.822zm12.15 10.847h-3.293v-5.148c0-1.23-.025-2.812-1.714-2.812-1.714 0-1.977 1.339-1.977 2.72v5.24H8.716V9.497h3.161v1.45h.045c.44-.836 1.515-1.714 3.118-1.714 3.334 0 3.953 2.193 3.953 5.048v4.712z" />
                  </svg>
                </SocialLink>
              </SocialLinks>
              <FooterInfoWrapper>
                <FooterText>© 2025 FLID Studio • Wszystkie prawa zastrzeżone</FooterText>
                <FooterLinks>
                  <FooterLink href="/privacy">Polityka Prywatności</FooterLink>
                  <FooterDivider>•</FooterDivider>
                  <FooterLink href="/terms">Warunki</FooterLink>
                </FooterLinks>
              </FooterInfoWrapper>
            </MobileMenuFooter>
          </MobileMenuContent>
        </IndependentMobileMenu>
            )}
    </AnimatePresence>
    </>
  );
};

// Styled Components
const NavbarContainer = styled.nav.attrs({ className: 'creative-navbar' })`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999; // Zwiększono z-index powyżej PageTransitionOverlay
  height: 80px;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center; // Center content within navbar
  transition: background-color 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0),
              backdrop-filter 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0),
              border-color 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0),
              box-shadow 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  // Always use semi-transparent background for elevated effect
  background-color: rgba(var(--background-rgb, 255, 255, 255), 0.9);
  // Always apply shadow
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
  // Always apply backdrop filter
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  // Always apply border
  border-bottom: 1px solid var(--border-translucent, rgba(150, 150, 150, 0.1));
  
  /* Enhanced navbar glass effect - now always applied */
  background-image: linear-gradient(
    to bottom,
    rgba(var(--primary-rgb), 0.03),
    rgba(var(--accent-rgb), 0.01)
  );

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const NavInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--max-content-width);
  
  /* Zapobieganie przesunięciom podczas otwierania menu mobilnego */
  position: relative;
  transform: none !important;
  
  @media (max-width: 768px) {
    /* BRUTALNA STABILIZACJA POZYCJI NA MOBILE - ZERO PRZESUNIĘĆ */
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    transform: none !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem;
  border-radius: 4px;
  
  /* Zapobieganie przesunięciom logo podczas otwierania menu */
  transform: none !important;
  margin: 0 !important;
  
  @media (max-width: 768px) {
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    transform: none !important;
    margin: 0 !important;
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  background-image: none;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: transform 0.4s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  
  /* Stabilizacja pozycji logo */
  position: relative;
  transform: none !important;
  
  &:hover {
    background-image: none;
    transform: translateY(-1px) !important;
  }
  
  &:active {
    transform: translateY(0) !important;
  }
  
  @media (max-width: 768px) {
    /* Całkowita stabilizacja na mobile */
    transform: none !important;
    
    &:hover {
      transform: none !important;
    }
    
    &:active {
      transform: none !important;
    }
  }
`;

const SimpleLogo = styled.div`
  font-family: 'Montserrat', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: 0.08em;
  color: var(--text);
  text-align: center;
  line-height: 1;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const DesktopNav = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
`;

const NavItem = styled.li`
  position: relative;
`;

const LinkEffect = styled.span`
  position: absolute;
  bottom: -3px;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent-light), var(--accent), var(--accent-dark));
  transition: width 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0), left 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  transform-origin: center;
  opacity: 0;
  border-radius: 4px;
  box-shadow: 0 0 8px var(--primary);
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const NavLinkStyled = styled(NavLink)`
  position: relative;
  padding: 0.5rem 1rem;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  color: var(--text) !important;
  text-decoration: none;
  background-image: none;
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  
  /* Added subtle dot indicator for active state */
  &:before {
    content: "";
    display: ${props => props.$isActive ? 'block' : 'none'};
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--accent);
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0.8;
    box-shadow: 0 0 4px var(--accent);
  }
  
  &:after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, var(--accent-light), var(--accent), var(--accent-dark));
    transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0), width 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
    transform-origin: center;
    border-radius: 4px;
    box-shadow: 0 0 8px var(--primary);
  }
  
  &:hover:after, &.active:after {
    transform: translateX(-50%) scaleX(1);
    width: 100%;
  }
  
  &:hover {
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  /* Enhanced focus state */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--accent), 0 0 0 4px rgba(var(--accent-rgb), 0.2);
    border-radius: 4px;
  }
    @media (prefers-reduced-motion: reduce) {
    transition: none;
    
    &:after {
      transition: none;
    }
  }
`;

const ShortcutHint = styled.span`
  position: absolute;
  top: -8px;
  right: 0;
  font-size: 0.6rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  background-color: var(--accent);
  color: white;
  padding: 1px 4px;
  border-radius: 3px;
  pointer-events: none;
  font-weight: var(--font-weight-medium);
  transform: translateY(-2px);
  
  @media (max-width: 992px) {
    display: none;
  }
  
  ${NavLinkStyled}:hover & {
    opacity: 0.9;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const ThemeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const InfoButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: var(--accent);
    background-color: rgba(var(--accent-rgb), 0.1);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:focus-visible {
    outline: none;
    outline-offset: 0;
  }
`;

const MobileControls = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;
  
  /* Stabilizacja pozycji kontrolek mobilnych */
  position: relative;
  transform: none !important;
  margin: 0 !important;
  
  @media (max-width: 768px) {
    display: flex;
    /* Zapobieganie przesunięciom podczas otwierania menu */
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    transform: none !important;
    margin: 0 !important;
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  /* Stabilizacja pozycji przycisku hamburgera */
  position: relative;
  transform: none !important;
  margin: 0 !important;
  flex-shrink: 0;
  
  &:hover {
    background-color: var(--border);
    /* Bez transform na hover - stabilność */
    transform: none !important;
  }
  
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
  
  @media (max-width: 768px) {
    /* Całkowita stabilizacja na mobile */
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    transform: none !important;
    margin: 0 !important;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const MenuIconContainer = styled.div`
  position: relative;
  width: 24px;
  height: 18px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;
`;

const MenuBar = styled.span`
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: var(--text);
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transition: transform 0.25s cubic-bezier(0.19, 1.0, 0.22, 1.0), opacity 0.25s ease;
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const MenuBarTop = styled(MenuBar)`
  top: ${props => (props.$isOpen ? '8px' : '0')};
  transform: ${props => (props.$isOpen ? 'rotate(135deg)' : 'rotate(0)')};
`;

const MenuBarMiddle = styled(MenuBar)`
  top: 8px;
  opacity: ${props => (props.$isOpen ? 0 : 1)};
`;

const MenuBarBottom = styled(MenuBar)`
  top: ${props => (props.$isOpen ? '8px' : '16px')};
  transform: ${props => (props.$isOpen ? 'rotate(-135deg)' : 'rotate(0)')};
`;

const MobileMenu = styled(motion.div).attrs({ className: 'mobile-menu-container' })`
  position: fixed !important;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  z-index: 9999;
  pointer-events: auto;
  margin: 0 !important;
  padding: 0 !important;
  
  /* STABILNE POZYCJONOWANIE BEZ MARGINESÓW */
  @media (max-width: 768px) {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    transform: none !important;
    width: 100vw !important;
    height: 100vh !important;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

// Independent Mobile Menu - Completely outside navbar structure
const IndependentMobileMenu = styled(motion.div).attrs({ className: 'independent-mobile-menu' })`
  position: fixed !important;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  left: 0 !important;
  z-index: 99999; /* Higher z-index than regular mobile menu */
  pointer-events: auto;
  margin: 0 !important;
  padding: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  
  /* COMPLETELY INDEPENDENT POSITIONING */
  @media (max-width: 768px) {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    transform: none !important;
    inset: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileMenuOverlay = styled(motion.div).attrs({ className: 'mobile-menu-overlay' })`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1000;
`;

const MobileMenuContent = styled(motion.div).attrs({ className: 'mobile-menu-content' })`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  background: rgba(var(--background-rgb, 255, 255, 255), 0.98);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 0 !important;
  margin: 0 !important;  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 10000;
  overflow-y: hidden;
  border: none;
  box-shadow: none;
  transform: none !important;
  
  /* BRUTALNE USUNIĘCIE WSZELKICH MARGINESÓW */
  inset: 0 !important;
  box-sizing: border-box !important;
  
  /* Zapobieganie marginesom na mobile */
  @media (max-width: 768px) {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    transform: none !important;
    width: 100vw !important;
    height: 100vh !important;
    max-width: none !important;
    max-height: none !important;
  }
  
  @media (prefers-reduced-motion: reduce) {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  position: relative !important;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  transform: none !important;
  
  /* Minimize top space to eliminate gap */
  margin: 0;
  min-height: 80px;
  height: 80px;
  
  /* Ensure header is flush with top */
  flex-shrink: 0;
  
  /* Zapobieganie przesunięciom na mobile */
  @media (max-width: 768px) {
    /* Fix padding to match main navbar exactly - no extra margin */
    padding: 0 2rem !important;
    height: 80px;
    align-items: center;
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    transform: none !important;
    margin: 0 !important;
  }
`;

const MobileMenuHeaderControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  transform: none !important;
  
  /* Stabilizacja kontrolek na mobile */
  @media (max-width: 768px) {
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    transform: none !important;
    margin: 0 !important;
    flex-shrink: 0;
  }
`;

const MobileMenuMain = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
  z-index: 10;
  
  /* Ensure centered content takes available space */
  min-height: 0;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  position: relative;
  transform: none !important;
  /* Match hamburger button dimensions for visual balance */
  flex-shrink: 0;
  
  /* Całkowita stabilizacja pozycji - bez transform na mobile */
  @media (max-width: 768px) {
    position: relative !important;
    left: 0 !important;
    top: 0 !important;
    transform: none !important;
    margin: 0 !important;
  }
  
  &:hover {
    background-color: rgba(var(--accent-rgb), 0.1);
    /* Usunięto transform dla stabilności pozycji */
  }
  
  &:active {
    background-color: rgba(var(--accent-rgb), 0.2);
    /* Usunięto transform dla stabilności pozycji */
  }
  
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const CloseIcon = styled.span`
  position: relative;
  width: 24px;
  height: 24px;
  
  &:before, &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: var(--text);
    top: 50%;
    left: 0;
    transform-origin: center;
  }
  
  &:before {
    transform: translateY(-50%) rotate(45deg);
  }
  
  &:after {
    transform: translateY(-50%) rotate(-45deg);
  }
`;

const MobileNavList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MobileNavItem = styled(motion.li)`
  position: relative;
`;

const MobileNavLinkStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 2rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text);
  text-decoration: none;
  background-image: none;
  position: relative;
  transition: all 0.3s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  border-radius: 12px;
  margin: 0.25rem 0;
  background-color: transparent;
  border: 2px solid transparent;
  
  &:hover, &.active {
    color: var(--accent);
    background-color: rgba(var(--accent-rgb), 0.1);
    border-color: rgba(var(--accent-rgb), 0.2);
    transform: translateY(-2px);
  }
  
  &.active {
    font-weight: 700;
    background-color: rgba(var(--accent-rgb), 0.15);
    border-color: var(--accent);
  }
  
  /* Accessible focus styles */
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.3);
  }
  
  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const MobileMenuFooter = styled.div`
  margin-top: auto;
  padding: 1rem;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  transition: color 0.3s ease, transform 0.3s ease;
  
  &:hover {
    color: var(--accent);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    display: block;
  }
`;

const FooterInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FooterText = styled.p`
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
  margin: 0;
  opacity: 0.8;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--font-size-xs);
`;

const FooterLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--accent);
  }
`;

const FooterDivider = styled.span`
  color: var(--text-secondary);
  opacity: 0.5;
  font-size: 0.5rem;
`;

const MobileLogo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  background-image: none;
  transition: transform 0.3s ease;
  padding: 0.25rem 0.5rem;
  border-radius: 8px;
  transform: none !important;
  
  /* Match close button dimensions for visual balance */
  min-width: 40px;
  min-height: 40px;
  justify-content: flex-start;
  flex-shrink: 0;
  
  &:hover {
    transform: scale(1.05) !important;
    background-color: rgba(var(--accent-rgb), 0.1);
  }
`;

export default CreativeNavbar;
