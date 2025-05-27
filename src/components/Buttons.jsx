import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Różne style przycisków
export const ButtonPrimary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  background-size: 200% 100%;
  background-position: 0% 0%;
  color: white !important;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.9rem 2rem;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  box-shadow: 0 4px 15px rgba(var(--primary-rgb), 0.35);
  position: relative;
  overflow: hidden;

  svg {
    transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  }

  &:hover {
    background-position: 100% 0%;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(var(--accent-rgb), 0.4);

    svg {
      transform: translateX(5px);
    }
  }
`;

export const ButtonSecondary = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: transparent;
  color: var(--accent) !important;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.85rem 1.8rem;
  border-radius: 3px;
  border: 2px solid var(--accent);
  outline: none;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  box-shadow: 0 4px 15px rgba(var(--accent-rgb), 0.1);
  position: relative;
  overflow: hidden;

  svg {
    transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  }

  &:hover {
    background-color: var(--accent);
    color: white !important;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(var(--accent-rgb), 0.25);

    svg {
      transform: translateX(5px);
    }
  }
`;

export const ButtonText = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: var(--accent) !important;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--accent);
    transition: width 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  }

  svg {
    transition: transform 0.5s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  }

  &:hover {
    color: var(--accent-dark) !important;

    &::after {
      width: 100%;
    }

    svg {
      transform: translateX(5px);
    }
  }
`;

export const ArrowIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Button = ({ to, children, variant = 'primary', onClick, withArrow = false, ...props }) => {
  const ButtonComponent = {
    primary: ButtonPrimary,
    secondary: ButtonSecondary,
    text: ButtonText
  }[variant] || ButtonPrimary;

  const content = (
    <>
      {children}
      {withArrow && <ArrowIcon />}
    </>
  );

  if (to) {
    return (
      <ButtonComponent to={to} {...props}>
        {content}
      </ButtonComponent>
    );
  }

  return (
    <ButtonComponent as="button" onClick={onClick} {...props}>
      {content}
    </ButtonComponent>
  );
};
