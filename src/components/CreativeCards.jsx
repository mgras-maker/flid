import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

// Standard Creative Card with hover effects
export const CreativeCard = ({ 
  title, 
  subtitle, 
  image, 
  link, 
  delay = 0,
  children,
  className = '',
  ...props 
}) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <CardContainer
      className={`creative-card ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.7, 
        delay: delay * 0.1, 
        ease: [0.19, 1.0, 0.22, 1.0] 
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      {...props}
    >
      <CardInner>
        {image && (
          <CardImageWrapper>
            <CardImage 
              src={image} 
              alt={title}
              animate={{ 
                scale: hovered ? 1.05 : 1
              }}
              transition={{ duration: 0.4 }}
            />
            <CardImageOverlay 
              animate={{ 
                opacity: hovered ? 0.4 : 0
              }}
            />
          </CardImageWrapper>
        )}
        <CardContent>
          {subtitle && <CardSubtitle className="badge">{subtitle}</CardSubtitle>}
          {title && <CardTitle>{title}</CardTitle>}
          {children}
        </CardContent>
        {link && (
          <CardLink to={link} className="card-link">
            <span>Learn more</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M5 12H19M19 12L12 5M19 12L12 19" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </CardLink>
        )}
      </CardInner>
      <CardBorder 
        animate={{ 
          opacity: hovered ? 1 : 0.2
        }}
      />
    </CardContainer>
  );
};

// 3D Hover Card with perspective tilting
export const TiltCard = ({ 
  title, 
  image, 
  children, 
  intensity = 20,
  className = '',
  ...props 
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [intensity, -intensity]);
  const rotateY = useTransform(x, [-100, 100], [-intensity, intensity]);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  
  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }
  
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }
  
  return (
    <TiltCardContainer
      className={`tilt-card ${className}`}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformPerspective: 1200
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {image && (
        <TiltCardImage src={image} alt={title || 'Card image'} />
      )}
      <TiltCardContent>
        {title && <TiltCardTitle>{title}</TiltCardTitle>}
        {children}
      </TiltCardContent>
      <TiltCardHighlight 
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformPerspective: 1200
        }}
      />
    </TiltCardContainer>
  );
};

// Frosted glass card effect
export const GlassCard = ({
  title,
  icon,
  children,
  blurStrength = 10,
  className = '',
  ...props
}) => {
  return (
    <GlassCardContainer 
      className={`glass-card ${className}`} 
      blurStrength={blurStrength}
      {...props}
    >
      <GlassCardContent>
        {icon && <GlassCardIcon>{icon}</GlassCardIcon>}
        {title && <GlassCardTitle>{title}</GlassCardTitle>}
        {children}
      </GlassCardContent>
    </GlassCardContainer>
  );
};

// Flip card with front and back sides
export const FlipCard = ({
  frontContent,
  backContent,
  className = '',
  ...props
}) => {
  const [flipped, setFlipped] = useState(false);
  
  return (
    <FlipCardContainer 
      className={`flip-card ${className}`}
      onClick={() => setFlipped(!flipped)}
      {...props}
    >
      <FlipCardInner $flipped={flipped}>
        <FlipCardFront>
          {frontContent}
        </FlipCardFront>
        <FlipCardBack>
          {backContent}
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardContainer>
  );
};

// Gradient Border Card
export const GradientBorderCard = ({
  title,
  children,
  className = '',
  ...props
}) => {
  return (
    <GradientBorderContainer className={`gradient-border-card ${className}`} {...props}>
      <GradientBorderContent>
        {title && <GradientBorderTitle>{title}</GradientBorderTitle>}
        {children}
      </GradientBorderContent>
    </GradientBorderContainer>
  );
};

// Styled Components
const CardContainer = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--card-bg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0),
              box-shadow 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const CardInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  z-index: 2;
  position: relative;
`;

const CardImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  aspect-ratio: 16/9;
`;

const CardImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
`;

const CardImageOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  opacity: 0;
  z-index: 1;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
`;

const CardSubtitle = styled.div`
  margin-bottom: 0.75rem;
`;

const CardTitle = styled.h3`
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const CardLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-top: 1px solid var(--border);
  font-weight: var(--font-weight-medium);
  color: var(--accent-dark);
  transition: all 0.3s ease;
  
  svg {
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background-color: var(--accent-light);
    color: var(--accent-dark);
    
    svg {
      transform: translateX(5px);
    }
  }
`;

const CardBorder = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  pointer-events: none;
  border-radius: inherit;
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, var(--primary), var(--accent), var(--lavender-500), var(--primary));
    background-size: 400% 400%;
    animation: borderGradient 8s linear infinite;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
  
  @keyframes borderGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

// 3D Tilt Card Styles
const TiltCardContainer = styled(motion.div)`
  position: relative;
  background-color: var(--card-bg);
  border-radius: 12px;
  overflow: hidden;
  padding: 2rem;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  will-change: transform;
  transform-style: preserve-3d;
  transition: box-shadow 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  
  &:hover {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  }
`;

const TiltCardImage = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  transform: translateZ(40px);
`;

const TiltCardContent = styled.div`
  transform: translateZ(30px);
`;

const TiltCardTitle = styled.h3`
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  margin-bottom: 1rem;
`;

const TiltCardHighlight = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at var(--mouse-x) var(--mouse-y),
    rgba(210, 205, 232, 0.1) 0%,
    transparent 80%
  );
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.5s;
  
  ${TiltCardContainer}:hover & {
    opacity: 1;
    --mouse-x: 50%;
    --mouse-y: 50%;
  }
`;

// Glass Card Styles
const GlassCardContainer = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(${props => props.blurStrength || 10}px);
  -webkit-backdrop-filter: blur(${props => props.blurStrength || 10}px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.4s ease;
  height: 100%;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(210, 205, 232, 0.5),
      transparent
    );
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
`;

const GlassCardContent = styled.div`
  position: relative;
  z-index: 1;
`;

const GlassCardIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const GlassCardTitle = styled.h3`
  font-family: var(--font-heading);
  font-weight: var(--font-weight-semibold);
  margin-bottom: 1rem;
`;

// Flip Card Styles
const FlipCardContainer = styled.div`
  perspective: 1000px;
  width: 100%;
  height: 300px;
  cursor: pointer;
`;

const FlipCardInner = styled.div`
  position: relative;
  width: 100%;  height: 100%;
  transition: transform 0.8s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  transform-style: preserve-3d;
  transform: ${props => props.$flipped ? 'rotateY(180deg)' : 'rotateY(0)'};
`;

const FlipCardSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  padding: 2rem;
  background-color: var(--card-bg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const FlipCardFront = styled(FlipCardSide)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FlipCardBack = styled(FlipCardSide)`
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(135deg, var(--lavender-300), var(--lavender-500));
  color: white;
`;

// Gradient Border Card Styles
const GradientBorderContainer = styled.div`
  position: relative;
  border-radius: 12px;
  background-color: var(--card-bg);
  padding: 2rem;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  
  &:before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, var(--primary), var(--accent), var(--lavender-500), var(--primary));
    background-size: 300% 300%;
    animation: borderGradient 8s linear infinite;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-5px);
  }
  
  @keyframes borderGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const GradientBorderContent = styled.div`
  position: relative;
  z-index: 1;
`;

const GradientBorderTitle = styled.h3`
  font-family: var(--font-heading);
  font-weight: var(--font-weight-bold);
  margin-bottom: 1rem;
`;

export default {
  CreativeCard,
  TiltCard,
  GlassCard,
  FlipCard,
  GradientBorderCard
};
