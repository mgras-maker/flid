import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Creative Heading with gradient animation
export const CreativeHeading = ({ children, level = 1, className = '' }) => {
  const HeadingTag = `h${level}`;
  
  return (
    <StyledHeading 
      as={HeadingTag} 
      className={`text-gradient ${className}`}
    >
      {children}
    </StyledHeading>
  );
};

// Creative Button with hover effects
export const CreativeButton = ({ 
  children, 
  variant = 'primary', 
  className = '',
  onClick,
  ...props 
}) => {
  return (
    <StyledButton 
      className={`btn btn-${variant} ${className}`} 
      onClick={onClick}
      {...props}
    >
      <ButtonContent>
        {children}
      </ButtonContent>
      <ButtonBackground />
    </StyledButton>
  );
};

// Creative Card with hover effects and animations
export const CreativeCard = ({ 
  children, 
  className = '', 
  delay = 0,
  ...props 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, 
      scale: 0.97 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.19, 1.0, 0.22, 1.0],
        delay: delay * 0.15
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <StyledCard className={`card ${className}`} {...props}>
        <CardInner className="card-inner">
          {children}
        </CardInner>
        <CardBorder className="card-border" />
      </StyledCard>
    </motion.div>
  );
};

// Animated divider with creative style
export const CreativeDivider = ({ className = '', ...props }) => {
  return (
    <StyledDivider className={`divider ${className}`} {...props}>
      <DividerLine />
      <DividerDot />
      <DividerLine />
    </StyledDivider>
  );
};

// Section with parallax background
export const ParallaxSection = ({ children, bgImage, className = '', ...props }) => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <ParallaxContainer className={`section-bg ${className}`} {...props}>      <ParallaxBackground 
        $bgImage={bgImage}
        style={{ 
          transform: `translateY(${scrollY * 0.2}px)` 
        }}
      />
      <ParallaxContent>
        {children}
      </ParallaxContent>
    </ParallaxContainer>
  );
};

// Animated text that reveals on scroll
export const RevealText = ({ children, className = '', ...props }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const words = children.split(' ');
  
  return (
    <RevealContainer ref={ref} className={className} {...props}>
      {words.map((word, i) => (
        <RevealWord
          key={i}
          className="text-reveal"
          initial={{ y: '100%', opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.19, 1.0, 0.22, 1.0], 
            delay: i * 0.08 
          }}
        >
          {word}&nbsp;
        </RevealWord>
      ))}
    </RevealContainer>
  );
};

// Badge component with our brand color
export const CreativeBadge = ({ children, className = '', ...props }) => {
  return (
    <StyledBadge className={`badge ${className}`} {...props}>
      {children}
    </StyledBadge>
  );
};

// Gradient background container
export const GradientContainer = ({ children, className = '', ...props }) => {
  return (
    <StyledGradientContainer className={`lavender-gradient ${className}`} {...props}>
      {children}
    </StyledGradientContainer>
  );
};

// Float animation container
export const FloatingElement = ({ children, speed = 'normal', className = '', ...props }) => {
  const floatClass = speed === 'slow' ? 'floating-slow' : 
                     speed === 'fast' ? 'floating-fast' : 'floating';
  
  return (
    <div className={`${floatClass} ${className}`} {...props}>
      {children}
    </div>
  );
};

// Styled Components
const StyledHeading = styled.h1`
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
`;

const ButtonContent = styled.span`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonBackground = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: inherit;
  z-index: 1;
`;

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover ${ButtonBackground} {
    opacity: 1;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(210, 205, 232, 0.3);
  }
`;

const StyledCard = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CardInner = styled.div`
  position: relative;
  z-index: 2;
`;

const CardBorder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  overflow: hidden;
  z-index: 1;
  
  &:before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      transparent, 
      rgba(210, 205, 232, 0.4), 
      transparent 30%
    );
    animation: rotate 4s linear infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }
`;

const StyledDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 3rem 0;
`;

const DividerLine = styled.div`
  height: 1px;
  flex-grow: 1;
  background: linear-gradient(90deg, 
    transparent, 
    var(--primary), 
    transparent
  );
`;

const DividerDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary);
  margin: 0 1rem;
  position: relative;
  
  &:before, &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--primary);
    border-radius: 50%;
    opacity: 0.7;
    animation: pulse 2s infinite;
  }
  
  &:before {
    width: 16px;
    height: 16px;
    animation-delay: 0.5s;
  }
  
  &:after {
    width: 24px;
    height: 24px;
  }
  
  @keyframes pulse {
    0% {
      transform: translate(-50%, -50%) scale(0.5);
      opacity: 0.7;
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
      opacity: 0;
    }
  }
`;

const ParallaxContainer = styled.section`
  position: relative;
  overflow: hidden;
  min-height: 400px;
`;

const ParallaxBackground = styled.div`
  position: absolute;
  top: 0;  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${props => props.$bgImage ? `url(${props.$bgImage})` : 'none'};
  background-size: cover;
  background-position: center center;
  z-index: -1;
  transform: translateZ(0);
  will-change: transform;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(0deg, var(--background) 0%, transparent 100%);
  }
`;

const ParallaxContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 5rem 0;
`;

const RevealContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const RevealWord = styled(motion.span)`
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

const StyledBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  letter-spacing: var(--letter-spacing-wider);
  text-transform: uppercase;
  background-color: var(--accent-light);
  color: var(--accent-dark);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(210, 205, 232, 0.3);
  }
`;

const StyledGradientContainer = styled.div`
  padding: 2rem;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`;

export default {
  CreativeHeading,
  CreativeButton,
  CreativeCard,
  CreativeDivider,
  ParallaxSection,
  RevealText,
  CreativeBadge,
  GradientContainer,
  FloatingElement
};
