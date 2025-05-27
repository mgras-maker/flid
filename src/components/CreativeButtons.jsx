import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Standard Creative Button with hover effects
export const CreativeButton = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick,
  className = '',
  animated = false,
  icon,
  ...props 
}) => {
  const Component = to ? StyledButtonLink : StyledButton;
  const btnClassName = `btn btn-${variant} ${animated ? 'btn-animated' : ''} ${className}`;
  
  return (
    <Component 
      to={to} 
      className={btnClassName} 
      onClick={onClick}
      {...props}
    >
      <span className="btn-content">
        {children}
        {icon && <span className="btn-icon">{icon}</span>}
      </span>
      <span className="btn-background"></span>
      {animated && <span className="btn-glow"></span>}
    </Component>
  );
};

// Gradient Button with elegant hover effect
export const GradientButton = ({ 
  children, 
  to, 
  onClick,
  className = '',
  ...props 
}) => {
  const Component = to ? StyledGradientButtonLink : StyledGradientButton;
  
  return (
    <Component 
      to={to} 
      className={`gradient-btn ${className}`} 
      onClick={onClick}
      {...props}
    >
      <span className="gradient-btn-text">{children}</span>
    </Component>
  );
};

// Icon Button with animation
export const IconButton = ({ 
  icon, 
  size = 'medium',
  onClick,
  className = '',
  ...props 
}) => {
  const sizeClass = `icon-btn-${size}`;
  
  return (
    <StyledIconButton 
      className={`icon-btn ${sizeClass} ${className}`} 
      onClick={onClick}
      {...props}
    >
      {icon}
    </StyledIconButton>
  );
};

// Floating Action Button with ripple effect
export const FloatingActionButton = ({ 
  icon, 
  onClick,
  className = '',
  position = 'bottom-right',
  ...props 
}) => {
  const positionClass = `fab-${position}`;
  
  return (
    <StyledFAB 
      className={`fab ${positionClass} ${className}`} 
      onClick={onClick}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      {icon}
      <span className="fab-ripple"></span>
    </StyledFAB>
  );
};

// Border Animation Button
export const BorderAnimationButton = ({ 
  children, 
  to, 
  onClick,
  className = '',
  ...props 
}) => {
  const Component = to ? StyledBorderButtonLink : StyledBorderButton;
  
  return (
    <Component 
      to={to} 
      className={`border-btn ${className}`} 
      onClick={onClick}
      {...props}
    >
      <BorderTop className="border-line border-top" />
      <BorderRight className="border-line border-right" />
      <BorderBottom className="border-line border-bottom" />
      <BorderLeft className="border-line border-left" />
      <span>{children}</span>
    </Component>
  );
};

// Glass Button with blur effect
export const GlassButton = ({ 
  children, 
  to, 
  onClick,
  className = '',
  ...props 
}) => {
  const Component = to ? StyledGlassButtonLink : StyledGlassButton;
  
  return (
    <Component 
      to={to} 
      className={`glass-btn ${className}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

// Text underline animation button
export const TextButton = ({ 
  children, 
  to, 
  onClick,
  className = '',
  ...props 
}) => {
  const Component = to ? StyledTextButtonLink : StyledTextButton;
  
  return (
    <Component 
      to={to} 
      className={`text-btn ${className}`} 
      onClick={onClick}
      {...props}
    >
      <span>{children}</span>
      <TextLine className="text-line" />
    </Component>
  );
};

// Styled Components
// Base Button Styles
const ButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  border-radius: 4px;
  font-family: var(--font-body);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-md);
  text-align: center;
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  z-index: 1;
  
  .btn-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .btn-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--accent) 0%, var(--primary) 100%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }
  
  .btn-glow {
    position: absolute;
    width: 50px;
    height: 100%;
    top: 0;
    left: -60px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.6),
      transparent
    );
    transform: skewX(-20deg);
    animation: btnGlow 5s infinite;
  }
  
  @keyframes btnGlow {
    0% {
      left: -60px;
    }
    20% {
      left: 120%;
    }
    100% {
      left: 120%;
    }
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(210, 205, 232, 0.3);
  }
  
  &:hover .btn-background {
    opacity: 1;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &.btn-primary {
    background: linear-gradient(135deg, var(--primary) 0%, var(--accent-dark) 100%);
    color: white;
  }
  
  &.btn-secondary {
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--text);
    
    &:hover {
      color: white;
    }
  }
  
  &.btn-ghost {
    background: transparent;
    color: var(--primary);
    
    &:hover {
      background: rgba(210, 205, 232, 0.1);
    }
  }
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

const StyledButtonLink = styled(Link)`
  ${ButtonStyles}
  text-decoration: none;
`;

// Gradient Button Styles
const gradientButtonStyles = css`
  position: relative;
  padding: 0.85rem 2rem;
  background: linear-gradient(90deg, var(--primary), var(--accent), var(--lavender-500));
  background-size: 200% auto;
  border-radius: 50px;
  border: none;
  color: white;
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s ease;
  box-shadow: 0 5px 15px rgba(210, 205, 232, 0.4);
  
  .gradient-btn-text {
    position: relative;
    z-index: 2;
  }
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, var(--lavender-500), var(--accent), var(--primary));
    background-size: 200% auto;
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: 1;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(210, 205, 232, 0.6);
  }
  
  &:hover:before {
    opacity: 1;
  }
  
  &:active {
    transform: translateY(-1px);
  }
`;

const StyledGradientButton = styled.button`
  ${gradientButtonStyles}
`;

const StyledGradientButtonLink = styled(Link)`
  ${gradientButtonStyles}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

// Icon Button Styles
const StyledIconButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg);
  border: 1px solid var(--border);
  color: var(--text);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &.icon-btn-small {
    width: 2rem;
    height: 2rem;
    font-size: 0.85rem;
  }
  
  &.icon-btn-large {
    width: 3.5rem;
    height: 3.5rem;
    font-size: 1.25rem;
  }
`;

// Floating Action Button Styles
const StyledFAB = styled(motion.button)`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--accent-dark));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  position: fixed;
  z-index: 100;
  overflow: hidden;
  
  &.fab-bottom-right {
    bottom: 2rem;
    right: 2rem;
  }
  
  &.fab-bottom-left {
    bottom: 2rem;
    left: 2rem;
  }
  
  &.fab-top-right {
    top: 2rem;
    right: 2rem;
  }
  
  &.fab-top-left {
    top: 2rem;
    left: 2rem;
  }
  
  .fab-ripple {
    position: absolute;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%);
    opacity: 0;
    transform: scale(0);
    transition: all 0.4s ease;
  }
  
  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  
  &:active .fab-ripple {
    opacity: 0.3;
    transform: scale(2);
    transition: all 0s;
  }
`;

// Border Animation Button Styles
const borderAnimation = keyframes`
  0% { transform: scale(0); }
  100% { transform: scale(1); }
`;

const borderButtonStyles = css`
  position: relative;
  padding: 0.85rem 2rem;
  background: transparent;
  color: var(--text);
  border: none;
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  overflow: hidden;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
  
  .border-line {
    position: absolute;
    background: var(--primary);
    transition: all 0.5s ease;
  }
  
  &:hover .border-line {
    animation: ${borderAnimation} 0.5s linear forwards;
  }
`;

const BorderTop = styled.span`
  top: 0;
  left: 0;
  width: 0;
  height: 2px;
  transform-origin: left;
`;

const BorderRight = styled.span`
  top: 0;
  right: 0;
  width: 2px;
  height: 0;
  transform-origin: top;
`;

const BorderBottom = styled.span`
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
  transform-origin: right;
`;

const BorderLeft = styled.span`
  bottom: 0;
  left: 0;
  width: 2px;
  height: 0;
  transform-origin: bottom;
`;

const StyledBorderButton = styled.button`
  ${borderButtonStyles}
  
  &:hover .border-top {
    animation-delay: 0s;
  }
  
  &:hover .border-right {
    animation-delay: 0.25s;
  }
  
  &:hover .border-bottom {
    animation-delay: 0.5s;
  }
  
  &:hover .border-left {
    animation-delay: 0.75s;
  }
`;

const StyledBorderButtonLink = styled(Link)`
  ${borderButtonStyles}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  
  &:hover .border-top {
    animation-delay: 0s;
  }
  
  &:hover .border-right {
    animation-delay: 0.25s;
  }
  
  &:hover .border-bottom {
    animation-delay: 0.5s;
  }
  
  &:hover .border-left {
    animation-delay: 0.75s;
  }
`;

// Glass Button Styles
const glassButtonStyles = css`
  padding: 0.85rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 4px;
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(210, 205, 232, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  }
`;

const StyledGlassButton = styled.button`
  ${glassButtonStyles}
`;

const StyledGlassButtonLink = styled(Link)`
  ${glassButtonStyles}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

// Text Button Styles
const underlineAnimation = keyframes`
  0% { width: 0; left: 50%; }
  100% { width: 100%; left: 0; }
`;

const textButtonStyles = css`
  background: none;
  border: none;
  color: var(--text);
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
  padding: 0.5rem 0;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;

const TextLine = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
`;

const StyledTextButton = styled.button`
  ${textButtonStyles}
  
  &:hover .text-line {
    animation: ${underlineAnimation} 0.4s forwards;
  }
`;

const StyledTextButtonLink = styled(Link)`
  ${textButtonStyles}
  text-decoration: none;
  display: inline-block;
  
  &:hover .text-line {
    animation: ${underlineAnimation} 0.4s forwards;
  }
`;

export default {
  CreativeButton,
  GradientButton,
  IconButton,
  FloatingActionButton,
  BorderAnimationButton,
  GlassButton,
  TextButton
};
