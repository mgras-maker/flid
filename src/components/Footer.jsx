import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <FooterContent>
        <FooterMain>
          {/* Brand section with FLID text logo */}
          <FooterBrand>
            <BrandSection>
              <FlidLogo as={Link} to="/">
                FLID
              </FlidLogo>
              <BrandTagline>Design dla lepszej przyszłości</BrandTagline>
            </BrandSection>
            <BrandDescription>
              Fundacja Ludzie-Innowacje-Design to organizacja zajmująca się 
              projektowaniem pozytywnych zmian społecznych poprzez innowacyjne 
              podejście do designu i zrównoważonego rozwoju.
            </BrandDescription>
          </FooterBrand>

          {/* Navigation Links */}
          <FooterNavigation>
            <FooterColumn>
              <ColumnTitle>Nawigacja</ColumnTitle>
              <LinksList>
                <FooterLink as={Link} to="/">Strona główna</FooterLink>
                <FooterLink as={Link} to="/about">O nas</FooterLink>
                <FooterLink as={Link} to="/projects">Projekty</FooterLink>
                <FooterLink as={Link} to="/publications">Publikacje</FooterLink>
                <FooterLink as={Link} to="/contact">Kontakt</FooterLink>
              </LinksList>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Projekty</ColumnTitle>
              <LinksList>
                <FooterLink as={Link} to="/projects?category=design">Design thinking</FooterLink>
                <FooterLink as={Link} to="/projects?category=education">Edukacja</FooterLink>
                <FooterLink as={Link} to="/projects?category=innovation">Innowacje</FooterLink>
                <FooterLink as={Link} to="/projects?category=sustainability">Zrównoważony rozwój</FooterLink>
              </LinksList>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Kontakt</ColumnTitle>
              <ContactInfo>
                <ContactItem>
                  <ContactIcon>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </ContactIcon>
                  <ContactText>
                    ul. Gazownicza 9<br />
                    43-300 Bielsko-Biała
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <ContactIcon>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </ContactIcon>
                  <ContactText>(33) 812 43 86</ContactText>
                </ContactItem>
                
                <ContactItem>
                  <ContactIcon>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </ContactIcon>
                  <ContactText>biuro@flid.pl</ContactText>
                </ContactItem>
              </ContactInfo>
            </FooterColumn>

            <FooterColumn>
              <ColumnTitle>Śledź nas</ColumnTitle>
              <SocialSection>
                <SocialLinks>
                  <SocialLink 
                    href="https://www.facebook.com/fundacja.ludzie.innowacje.design" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="FLID na Facebooku"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </SocialLink>
                  
                  <SocialLink 
                    href="https://linkedin.com/company/flid-foundation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="FLID na LinkedIn"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </SocialLink>
                  
                  <SocialLink 
                    href="https://instagram.com/flid_foundation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="FLID na Instagramie"
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </SocialLink>
                </SocialLinks>
                
                <NewsletterSection>
                  <NewsletterTitle>Newsletter</NewsletterTitle>
                  <NewsletterForm>
                    <NewsletterInput 
                      type="email" 
                      placeholder="Twój email"
                      aria-label="Adres email do newslettera"
                    />
                    <NewsletterButton type="submit">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </NewsletterButton>
                  </NewsletterForm>
                </NewsletterSection>
              </SocialSection>
            </FooterColumn>
          </FooterNavigation>
        </FooterMain>

        <FooterDivider />

        <FooterBottom>
          <Copyright>
            © {currentYear} FLID - Fundacja Ludzie-Innowacje-Design. Wszystkie prawa zastrzeżone.
          </Copyright>
          <LegalLinks>
            <LegalLink href="/privacy">Polityka prywatności</LegalLink>
            <LegalSeparator>•</LegalSeparator>
            <LegalLink href="/terms">Regulamin</LegalLink>
            <LegalSeparator>•</LegalSeparator>
            <LegalLink href="/cookies">Polityka cookies</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  width: 100%;
  background: linear-gradient(
    135deg,
    var(--background) 0%,
    rgba(var(--primary-rgb), 0.02) 50%,
    var(--background) 100%
  );
  color: var(--text);
  border-top: 1px solid var(--border);
  margin-top: auto;
  
  [data-theme="dark"] & {
    background: linear-gradient(
      135deg,
      var(--background-dark) 0%,
      rgba(var(--primary-rgb), 0.05) 50%,
      var(--background-dark) 100%
    );
    border-top-color: var(--border-dark);
  }
`;

const FooterContent = styled.div`
  max-width: 100%;
  margin: 0;
  padding: 0;
`;

const FooterMain = styled.div`
  width: 100%;
  padding: 4rem 5%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 6rem;
  align-items: start;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 3rem 4%;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 3%;
    gap: 3rem;
  }
`;

const FooterBrand = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FlidLogo = styled.div`
  font-family: 'Montserrat', 'Arial', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  letter-spacing: 0.08em;
  color: var(--primary);
  text-decoration: none;
  line-height: 1;
  transition: all 0.3s ease;
  cursor: pointer;
  display: inline-block;
  
  &:hover {
    color: var(--accent);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const BrandTagline = styled.p`
  font-family: var(--font-serif);
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin: 0;
  font-style: italic;
  font-weight: 400;
`;

const BrandDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin: 0;
  max-width: 450px;
`;

const FooterNavigation = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ColumnTitle = styled.h3`
  font-family: var(--font-heading);
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--accent);
  display: inline-block;
  width: fit-content;
`;

const LinksList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  padding: 0.25rem 0;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--primary);
    transform: translateX(4px);
    
    &::before {
      width: 100%;
    }
  }
  
  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
    border-radius: 4px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(4px);
  }
`;

const ContactIcon = styled.div`
  color: var(--primary);
  margin-top: 0.2rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const ContactText = styled.div`
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: rgba(var(--primary-rgb), 0.1);
  border: 2px solid rgba(var(--primary-rgb), 0.2);
  border-radius: 12px;
  color: var(--primary);
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: var(--primary);
    border-radius: 50%;
    transition: all 0.3s ease;
    transform: translate(-50%, -50%);
  }
  
  &:hover {
    transform: translateY(-4px);
    border-color: var(--primary);
    color: white;
    box-shadow: 0 8px 20px rgba(var(--primary-rgb), 0.3);
    
    &::before {
      width: 100px;
      height: 100px;
    }
    
    svg {
      position: relative;
      z-index: 1;
    }
  }
  
  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
  }
`;

const NewsletterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NewsletterTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  color: var(--text);
  margin: 0;
`;

const NewsletterForm = styled.form`
  display: flex;
  border: 2px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  background: var(--background);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, 
      rgba(var(--primary-rgb), 0.1), 
      rgba(var(--primary-rgb), 0.05));
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  
  &:focus-within {
    border-color: var(--primary);
    box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.15);
    transform: translateY(-2px);
    
    &::before {
      opacity: 1;
    }
  }
  
  [data-theme="dark"] & {
    background: var(--background-dark);
    border-color: var(--border-dark);
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  background: transparent;
  color: var(--text);
  font-size: 0.95rem;
  outline: none;
  
  &::placeholder {
    color: var(--text-light);
  }
`;

const NewsletterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.25rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: linear-gradient(135deg, var(--primary-dark), var(--primary));
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(var(--primary-rgb), 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  &:focus-visible {
    outline: 3px solid rgba(var(--primary-rgb), 0.5);
    outline-offset: 2px;
  }
  
  &:active {
    transform: scale(0.98);
  }
`;

const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--border),
    var(--border),
    transparent
  );
  margin: 2rem 0;
`;

const FooterBottom = styled.div`
  width: 100%;
  padding: 2rem 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  
  @media (max-width: 1024px) {
    padding: 2rem 4%;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 2rem 3%;
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: var(--text-light);
  margin: 0;
`;

const LegalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const LegalLink = styled.a`
  font-size: 0.9rem;
  color: var(--text-light);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
  
  &:focus-visible {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
    border-radius: 2px;
  }
`;

const LegalSeparator = styled.span`
  color: var(--text-light);
  font-size: 0.9rem;
  opacity: 0.6;
`;

export default Footer;
