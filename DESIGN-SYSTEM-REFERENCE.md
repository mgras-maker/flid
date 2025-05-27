# FLID Design System Reference

This document provides a guide to the new creative design system created for FLID, based on the brand color #D2CDE8.

## Color Palette

### Light Mode
- Primary: #D2CDE8 (Brand lavender color)
- Secondary: #C2BBD9 (Slightly darker lavender)
- Accent: #B5AFF2 (Vibrant complementary lavender)
- Accent Light: #E9E5F5 (Very light lavender)
- Accent Dark: #9E97C3 (Deep lavender)

### Dark Mode
- Primary: #D2CDE8 (Brand lavender color)
- Secondary: #B8B2CF (Medium lavender)
- Accent: #C7C0F9 (Bright lavender)
- Accent Light: #E9E5F5 (Very light lavender)
- Accent Dark: #8B85B1 (Deep lavender)

### Gradient Colors
- Lavender 100: #F4F2FA (Very light lavender)
- Lavender 200: #E9E5F5 (Light lavender)
- Lavender 300: #D2CDE8 (Brand color)
- Lavender 400: #C2BBD9 (Medium lavender)
- Lavender 500: #9E97C3 (Rich lavender)
- Lavender 600: #7D75AF (Deep lavender)

## Typography

### Font Families
- Headings: Playfair Display (serif)
- Body: Plus Jakarta Sans (sans-serif)

### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- SemiBold: 600
- Bold: 700

### Font Sizes
- XS: 0.75rem (12px)
- SM: 0.875rem (14px)
- MD: 1rem (16px)
- LG: 1.125rem (18px)
- XL: 1.25rem (20px)
- 2XL: 1.5rem (24px)
- 3XL: 2rem (32px)
- 4XL: 2.5rem (40px)
- 5XL: 3rem (48px)
- 6XL: 3.75rem (60px)

## Creative Components

### Typography Components
- GradientHeading: Headings with gradient text
- AnimatedText: Text that animates letter by letter
- HighlightedText: Text with colorful background highlight
- SplitRevealText: Words that reveal with staggered animation
- ElegantQuote: Styled blockquote with decorative elements
- CreativeList: Lists with custom bullet styles
- TextDivider: Dividers with optional text
- GradientText: Inline text with gradient colors

### Button Components
- CreativeButton: Enhanced buttons with hover effects
- GradientButton: Buttons with gradient backgrounds
- IconButton: Circular buttons for icons
- FloatingActionButton: Fixed position buttons
- BorderAnimationButton: Buttons with animating borders
- GlassButton: Frosted glass effect buttons
- TextButton: Minimal buttons with underline animation

### Card Components
- CreativeCard: Enhanced cards with hover effects
- TiltCard: 3D perspective cards that tilt on hover
- GlassCard: Frosted glass effect cards
- FlipCard: Cards that flip to reveal content
- GradientBorderCard: Cards with animated gradient borders

### Creative Elements
- CreativeHeading: Enhanced headings with effects
- CreativeButton: Buttons with animations
- CreativeCard: Cards with animations
- CreativeDivider: Styled content dividers
- ParallaxSection: Sections with parallax backgrounds
- RevealText: Text that reveals on scroll
- CreativeBadge: Styled badges and tags
- GradientContainer: Containers with gradient backgrounds
- FloatingElement: Elements with floating animations

## CSS Animations

### Animation Classes
- lavender-entrance: Fade and scale entrance animation
- lavender-gradient-text: Text with gradient color animation
- lavender-pulse: Pulsating glow effect
- lavender-float: Floating animation with subtle rotation
- lavender-border: Element with gradient border animation
- lavender-fade: Smooth fade transition effect
- lavender-reveal: Text reveal animation
- lavender-overlay: Creative hover overlay effect
- lavender-shine: Shine effect animation
- lavender-blur-in: Content reveals from blur effect
- lavender-wave: Animated wave effect

### Page Transitions
- page-wrapper: Standard page transition
- page-fade-reveal: Fade reveal transition
- page-side-reveal: Side reveal transition
- page-zoom: Zoom transition
- page-color-reveal: Color wipe reveal transition
- page-split-reveal: Split reveal transition
- page-tilt: 3D perspective tilt transition

## Usage Examples

### Creative Typography
```jsx
import CreativeTypography from '../components/CreativeTypography';

// Gradient heading
<CreativeTypography.GradientHeading level={1}>
  Welcome to FLID
</CreativeTypography.GradientHeading>

// Animated text
<CreativeTypography.AnimatedText>
  Design for positive change
</CreativeTypography.AnimatedText>

// Highlighted text
<p>
  We focus on <CreativeTypography.HighlightedText>sustainable design</CreativeTypography.HighlightedText> solutions.
</p>
```

### Creative Buttons
```jsx
import CreativeButtons from '../components/CreativeButtons';

// Standard creative button
<CreativeButtons.CreativeButton variant="primary">
  Learn More
</CreativeButtons.CreativeButton>

// Gradient button
<CreativeButtons.GradientButton to="/contact">
  Contact Us
</CreativeButtons.GradientButton>

// Border animation button
<CreativeButtons.BorderAnimationButton>
  Discover Projects
</CreativeButtons.BorderAnimationButton>
```

### Creative Cards
```jsx
import CreativeCards from '../components/CreativeCards';

// Standard creative card
<CreativeCards.CreativeCard
  title="Project Title"
  subtitle="Design"
  image="/path/to/image.jpg"
  link="/projects/project-slug"
>
  <p>Project description goes here...</p>
</CreativeCards.CreativeCard>

// Tilt card with 3D effect
<CreativeCards.TiltCard
  title="Interactive Experience"
  image="/path/to/image.jpg"
>
  <p>Experience our innovative approach...</p>
</CreativeCards.TiltCard>
```

### Creative Elements
```jsx
import CreativeElements from '../components/CreativeElements';

// Parallax section
<CreativeElements.ParallaxSection bgImage="/path/to/background.jpg">
  <h2>Our Mission</h2>
  <p>Creating designs that matter...</p>
</CreativeElements.ParallaxSection>

// Floating element
<CreativeElements.FloatingElement speed="slow">
  <img src="/path/to/icon.svg" alt="Icon" />
</CreativeElements.FloatingElement>

// Reveal text
<CreativeElements.RevealText>
  Designing a better future together.
</CreativeElements.RevealText>
```

## Accessibility Considerations

All components have been designed with accessibility in mind:
- Proper contrast ratios in both light and dark mode
- Keyboard navigation support
- ARIA attributes where appropriate
- Focus states that are visible and consistent
- Animation respects reduced motion preferences

## Responsive Behavior

The design system includes special optimizations for:
- Mobile devices
- Tablets
- Desktop
- HD displays (1920px+)
- Ultra HD displays (2560px+)

## Best Practices

1. Maintain consistent spacing using the spacing variables
2. Use the brand color palette consistently
3. Don't mix too many animation types on one page
4. Ensure text remains legible against all backgrounds
5. Follow the typographic hierarchy for coherent information structure

---

This design system is built to provide a beautiful, creative, and accessible experience based on your brand color #D2CDE8. The system includes dark mode and light mode variations, responsive capabilities, and high-definition display optimizations.
