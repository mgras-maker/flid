import { createGlobalStyle } from 'styled-components';

// Define global styles for the entire application
const GlobalStyles = createGlobalStyle`
  :root {
    /* Nowa wyrafinowana paleta kolorów w odcieniach fioletu i neutralnych */
    --background: #FFFFFF;
    --background-alt: #F9F8FC;
    --background-translucent: rgba(255, 255, 255, 0.92);
    --text: #242435;
    --text-secondary: #4A4A5A;
    --text-light: #76768A;
    
    /* Nowa wyrafinowana paleta kolorów fioletowych */
    --primary: #9B8DCC; /* Bardziej stonowany, elegancki fiolet */
    --primary-rgb: 155, 141, 204;
    --secondary: #B2A6DE; /* Jaśniejszy fiolet */
    --accent: #7C6FBB; /* Bardziej nasycony fiolet */
    --accent-rgb: 124, 111, 187;
    --accent-light: #E9E5F8; /* Bardzo jasny fiolet */
    --accent-dark: #5E5294; /* Głęboki fiolet */
      /* Eleganckie odcienie fioletu dla gradientów */
    --lavender-100: #F6F4FC; /* Bardzo jasny fiolet */
    --lavender-200: #E9E5F8; /* Jasny fiolet */
    --lavender-300: #D1CBEB; /* Średni jasny fiolet */
    --lavender-400: #B2A6DE; /* Średni fiolet */
    --lavender-500: #9B8DCC; /* Bazowy fiolet */
    --lavender-600: #7C6FBB; /* Głęboki fiolet */
    --lavender-700: #5E5294; /* Bardzo głęboki fiolet */
    --lavender-rgb: 155, 141, 204; /* RGB values for lavender */
    --lavender-glow: rgba(155, 141, 204, 0.25); /* Dla delikatnych efektów glow */
    
    /* Neutralne kolory dla eleganckich kontrastów */
    --neutral-100: #FFFFFF;
    --neutral-200: #F9F8FC;
    --neutral-300: #F0EFF5;
    --neutral-400: #E2E1EA;
    --neutral-500: #C9C8D6;
    --neutral-600: #A2A1B4;
    --neutral-700: #76768A;
    
    --border: #E8E7F0;
    --card-bg: #FAFAFA;
    
    /* Nowoczesne czcionki */
    --font-heading: 'Playfair Display', serif; /* Elegancka czcionka dla nagłówków */
    --font-serif: 'Cormorant Garamond', serif; /* Wyrafinowana czcionka dla akcentów */
    --font-body: 'Montserrat', sans-serif; /* Czytelna czcionka dla treści */
    
    /* Przestrzenie i wielkości z poprawioną obsługą wyświetlaczy HD */
    --content-width: 85%;
    --max-content-width: 2200px;
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 2rem;
    --space-xl: 3rem;
    --space-xxl: 4rem;
    
    /* Premium transitions with sophisticated easing */
    --transition-fast: 0.2s cubic-bezier(0.19, 1.0, 0.22, 1.0);
    --transition-normal: 0.4s cubic-bezier(0.19, 1.0, 0.22, 1.0);
    --transition-slow: 0.7s cubic-bezier(0.19, 1.0, 0.22, 1.0);
    --transition-multiplier: 1;
    --blur-quality: 3px;
    
    /* Breakpoints */
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
  }
    /* Globalne style */
  html {
    transition: background-color 0.3s ease, color 0.3s ease;
  }
  body {
    background-color: var(--background);
    color: var(--text);
    font-family: var(--font-body);
    line-height: 1.6;
    font-weight: 400;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Scrollbar positioning fix for fixed navbar */
  /*
  html {
    // Adjust scrollbar to start below the fixed navbar
    scrollbar-gutter: stable;
    scroll-padding-top: 80px; // Height of fixed navbar
  }

  // Additional scrollbar positioning for webkit browsers
  ::-webkit-scrollbar {
    width: 17px; // Standard scrollbar width
  }

  ::-webkit-scrollbar-track {
    background: var(--neutral-200);
    // margin-top: 80px; // Start scrollbar track below navbar // Commented out
  }

  ::-webkit-scrollbar-thumb {
    background: var(--neutral-400);
    border-radius: 0;
    border: 3px solid var(--neutral-200);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--neutral-500);
  }

  // Firefox scrollbar positioning
  html {
    scrollbar-width: auto;
    scrollbar-color: var(--neutral-400) var(--neutral-200);
  }
  */
  
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 500;
    line-height: 1.3;
    margin-top: 0;
    margin-bottom: 1rem;
    color: var(--text);
    letter-spacing: -0.01em;
  }
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    
    @media (max-width: 768px) {
      font-size: 2.25rem;
    }
  }
  
  h2 {
    font-size: 2.5rem;
    
    @media (max-width: 768px) {
      font-size: 1.875rem;
    }
  }
  
  h3 {
    font-size: 2rem;
    
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    margin-top: 0;
    margin-bottom: 1rem;
    font-family: var(--font-body);
  }
  
  a {
    color: var(--accent);
    text-decoration: none;
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--accent-dark);
    }
  }
  
  .container {
    width: var(--content-width);
    max-width: var(--max-content-width);
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .section {
    padding: 5rem 0;
    
    @media (max-width: 768px) {
      padding: 4rem 0;
    }
  }
  
  /* Eleganckie przyciski */
  button, .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1.5rem;
    font-family: var(--font-body);
    font-weight: 500;
    font-size: 1rem;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid transparent;
    transition: all var(--transition-normal);
    cursor: pointer;
    
    &.primary {
      background-color: var(--primary);
      color: white;
      
      &:hover {
        background-color: var(--accent);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(var(--accent-rgb), 0.3);
      }
    }
    
    &.secondary {
      background-color: transparent;
      color: var(--accent);
      border: 1px solid var(--accent);
      
      &:hover {
        background-color: var(--accent-light);
        transform: translateY(-2px);
      }
    }
    
    &.text {
      background-color: transparent;
      color: var(--accent);
      padding: 0.5rem 0;
      
      &:hover {
        color: var(--accent-dark);
      }
    }
  }
  
  /* Styl dla kart */
  .card {
    background-color: var(--neutral-100);
    border-radius: 4px;
    overflow: hidden;
    transition: transform var(--transition-normal), box-shadow var(--transition-normal);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
  }
  
  /* Styl dla sekcji */
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
    
    h2 {
      margin-bottom: 1rem;
    }
    
    p {
      font-size: 1.125rem;
      color: var(--text-light);
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  /* Efekty cienia i eleganckiego hover */
  .shadow-effect {
    transition: box-shadow var(--transition-normal), transform var(--transition-normal);
    
    &:hover {
      box-shadow: 0 10px 30px rgba(var(--primary-rgb), 0.15);
      transform: translateY(-5px);
    }
  }
  
  /* Płynne przejścia stron */
  /*
  .page-transition-container {
    opacity: 0;
    animation: fadeIn 0.7s cubic-bezier(0.19, 1.0, 0.22, 1.0) forwards;
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  */
    /* Animowane tła - elegancki gradient */
  .gradient-bg {
    background: linear-gradient(135deg, var(--lavender-300), var(--lavender-500));
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
    
    @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }
  
  /* Stylowe ramki */
  .border-accent {
    border: 1px solid var(--neutral-400);
    transition: border-color var(--transition-fast);
    
    &:hover {
      border-color: var(--accent);
    }
  }    /* Dark mode styles */
  html.dark {
    --background: #1A1A2E;
    --background-rgb: 26, 26, 46;
    --background-alt: #222236;
    --background-translucent: rgba(26, 26, 46, 0.92);
    --text: #F0F0F8;
    --text-secondary: #C8C8D8;
    --text-light: #A0A0B0;
    
    --border: #2D2D45;
    --card-bg: #222236;
    --card-bg-rgb: 34, 34, 54;
    
    --primary: #9B8DCC;
    --primary-rgb: 155, 141, 204;
    --secondary: #7C6FBB;
    --accent: #B2A6DE;
    --accent-rgb: 178, 166, 222;
    --accent-light: #454460;
    --accent-dark: #C5BBEB;
    
    --lavender-100: #2D2D45;
    --lavender-200: #38384F;
    --lavender-300: #454460;
    --lavender-400: #565475;    --lavender-500: #6D6A94;
    --lavender-600: #8D89B8;
    --lavender-700: #B2A6DE;
    --lavender-rgb: 109, 106, 148;
    
    --neutral-100: #1A1A2E;
    --neutral-200: #222236;
    --neutral-300: #2D2D45;
    --neutral-400: #38384F;
    --neutral-500: #4D4D65;
    --neutral-600: #7A7A95;
    --neutral-700: #A0A0B0;

    /* Dark mode scrollbar colors */
    scrollbar-color: var(--neutral-500) var(--neutral-300);
  }

  /* Dark mode webkit scrollbar styling */
  /*
  html.dark ::-webkit-scrollbar-track {
    background: var(--neutral-300);
    // margin-top: 80px; // Start scrollbar track below navbar // Commented out
  }

  html.dark ::-webkit-scrollbar-thumb {
    background: var(--neutral-500);
    border: 3px solid var(--neutral-300);
  }

  html.dark ::-webkit-scrollbar-thumb:hover {
    background: var(--neutral-600);
  }
  */
`;

export default GlobalStyles;
