import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Gradient Heading with elegant animation
export const GradientHeading = ({ 
  children, 
  level = 1,
  animated = true,
  className = '',
  ...props 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const HeadingTag = `h${level}`;
  
  return (
    <StyledGradientHeading
      ref={ref}
      as={HeadingTag}
      className={`gradient-heading ${animated ? 'animated' : ''} ${className}`}
      style={{
        backgroundSize: inView && animated ? '200% auto' : '100% auto',
        backgroundPosition: inView && animated ? 'right center' : 'left center',
        opacity: inView ? 1 : 0,
      }}
      {...props}
    >
      {children}
    </StyledGradientHeading>
  );
};

// Animated Text that reveals letter by letter
export const AnimatedText = ({ 
  children, 
  className = '', 
  staggerDelay = 0.03,
  ...props 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const text = children.toString();
  const letters = text.split('');
  
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: staggerDelay * i,
        duration: 0.5,
        ease: [0.19, 1.0, 0.22, 1.0],
      },
    }),
  };
  
  return (
    <StyledAnimatedText ref={ref} className={`animated-text ${className}`} {...props}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{ display: 'inline-block', whiteSpace: letter === ' ' ? 'pre' : 'normal' }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </StyledAnimatedText>
  );
};

// Highlighted Text with accent background
export const HighlightedText = ({ 
  children, 
  color = 'primary',
  className = '', 
  ...props 
}) => {
  return (
    <StyledHighlight 
      className={`highlighted-text color-${color} ${className}`} 
      {...props}
    >
      {children}
    </StyledHighlight>
  );
};

// Split reveal text animation
export const SplitRevealText = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const words = children.toString().split(' ');
  
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };
  
  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.19, 1.0, 0.22, 1.0],
      },
    },
  };
  
  return (
    <StyledSplitText 
      ref={ref}
      className={`split-reveal-text ${className}`} 
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      {...props}
    >
      {words.map((word, i) => (
        <motion.span key={i} className="word-wrapper" variants={wordVariants}>
          {word}&nbsp;
        </motion.span>
      ))}
    </StyledSplitText>
  );
};

// Elegant quote with stylized design
export const ElegantQuote = ({ 
  children, 
  author, 
  className = '', 
  ...props 
}) => {
  return (
    <StyledQuoteContainer className={`elegant-quote ${className}`} {...props}>
      <QuoteSymbol>❝</QuoteSymbol>
      <QuoteText>{children}</QuoteText>
      {author && <QuoteAuthor>{author}</QuoteAuthor>}
    </StyledQuoteContainer>
  );
};

// Creative list with custom bullets
export const CreativeList = ({ 
  items, 
  type = 'check',
  className = '', 
  ...props 
}) => {
  const getBullet = () => {
    switch (type) {
      case 'check':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'arrow':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'star':
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'dot':
        return <span className="dot-bullet">●</span>;
      default:
        return <span className="dot-bullet">●</span>;
    }
  };
  
  return (
    <StyledList className={`creative-list type-${type} ${className}`} {...props}>
      {items.map((item, index) => (
        <ListItem key={index} className="list-item">
          <ListBullet className="list-bullet">{getBullet()}</ListBullet>
          <ListText className="list-text">{item}</ListText>
        </ListItem>
      ))}
    </StyledList>
  );
};

// Typographic divider with text
export const TextDivider = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <StyledTextDivider className={`text-divider ${className}`} {...props}>
      <DividerLine />
      {children && <DividerText>{children}</DividerText>}
      <DividerLine />
    </StyledTextDivider>
  );
};

// Gradient text with animation
export const GradientText = ({ 
  children, 
  className = '', 
  animated = true,
  ...props 
}) => {
  return (
    <StyledGradientText 
      className={`gradient-text ${animated ? 'animated' : ''} ${className}`}
      {...props}
    >
      {children}
    </StyledGradientText>
  );
};

// Styled Components
const StyledGradientHeading = styled.h1`
  background: linear-gradient(90deg, 
    var(--primary), 
    var(--lavender-500),
    var(--accent), 
    var(--primary)
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 1.2s cubic-bezier(0.19, 1.0, 0.22, 1.0);
  
  &.animated {
    animation: gradientFlow 8s ease infinite;
  }
  
  @keyframes gradientFlow {
    0% { background-position: 0% center; }
    50% { background-position: 100% center; }
    100% { background-position: 0% center; }
  }
`;

const StyledAnimatedText = styled.div`
  display: inline-block;
`;

const StyledHighlight = styled.span`
  position: relative;
  z-index: 1;
  white-space: nowrap;
  
  &:before {
    content: '';
    position: absolute;
    left: -0.25em;
    right: -0.25em;
    top: 0;
    bottom: 0;
    background-color: var(--accent-light);
    z-index: -1;
    border-radius: 0.2em;
    transform: skew(-3deg);
  }
  
  &.color-primary:before {
    background-color: var(--accent-light);
  }
  
  &.color-secondary:before {
    background-color: var(--lavender-200);
  }
  
  &.color-accent:before {
    background-color: var(--accent);
    color: white;
  }
`;

const StyledSplitText = styled(motion.div)`
  display: inline-flex;
  flex-wrap: wrap;
  
  .word-wrapper {
    display: inline-block;
    margin-right: 0.25em;
  }
`;

const StyledQuoteContainer = styled.blockquote`
  position: relative;
  font-family: var(--font-heading);
  padding: 2rem;
  margin: 2rem 0;
  border-left: none;
  background-color: var(--card-bg);
  border-radius: 8px;
`;

const QuoteSymbol = styled.span`
  position: absolute;
  top: -1.5rem;
  left: 1rem;
  font-size: 5rem;
  color: var(--primary);
  opacity: 0.2;
  font-family: var(--font-heading);
  line-height: 1;
`;

const QuoteText = styled.p`
  font-size: var(--font-size-lg);
  line-height: 1.6;
  font-style: italic;
  margin-bottom: 1rem;
  position: relative;
  z-index: 1;
`;

const QuoteAuthor = styled.footer`
  font-size: var(--font-size-md);
  text-align: right;
  color: var(--text-secondary);
  font-weight: var(--font-weight-medium);
  
  &:before {
    content: '— ';
    opacity: 0.7;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ListBullet = styled.span`
  color: var(--primary);
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListText = styled.span`
  flex: 1;
`;

const StyledTextDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

const DividerLine = styled.div`
  height: 1px;
  flex-grow: 1;
  background: linear-gradient(90deg, 
    transparent, 
    var(--border), 
    var(--border), 
    transparent
  );
`;

const DividerText = styled.div`
  padding: 0 1rem;
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-wider);
  color: var(--text-secondary);
`;

const StyledGradientText = styled.span`
  background: linear-gradient(90deg, 
    var(--primary), 
    var(--accent), 
    var(--lavender-500), 
    var(--primary)
  );
  background-size: 300% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  &.animated {
    animation: textGradient 8s linear infinite;
  }
  
  @keyframes textGradient {
    0% { background-position: 0% center; }
    50% { background-position: 100% center; }
    100% { background-position: 0% center; }
  }
`;

export default {
  GradientHeading,
  AnimatedText,
  HighlightedText,
  SplitRevealText,
  ElegantQuote,
  CreativeList,
  TextDivider,
  GradientText
};
