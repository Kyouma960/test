import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Font Import */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  /* CSS Reset */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Root variables */
  :root {
    --scroll-behavior: smooth;
    --mouse-x: 0px;
    --mouse-y: 0px;
    background-color: #000 !important;
  }

  /* HTML & Body */
  html {
    scroll-behavior: var(--scroll-behavior);
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000 !important;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: #000 !important;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow-x: hidden;
    min-height: 100vh;
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.text.heading};
    line-height: ${({ theme }) => theme.lineHeights.tight};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, ${({ theme }) => theme.fontSizes['7xl']});
    letter-spacing: -0.025em;
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, ${({ theme }) => theme.fontSizes['3xl']});
    letter-spacing: -0.025em;
  }

  /* Paragraphs */
  p {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }

  /* Links */
  a {
    color: ${({ theme }) => theme.colors.text.heading};
    text-decoration: none;
    transition: color ${({ theme }) => theme.transitions.fast};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  /* Lists */
  ul, ol {
    list-style: none;
  }

  /* Images */
  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: ${({ theme }) => theme.radii.base};
  }

  /* Buttons */
  button {
    font-family: ${({ theme }) => theme.fonts.body};
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    transition: all ${({ theme }) => theme.transitions.fast};
  }

  /* Selection */
  ::selection {
    background-color: rgba(94, 234, 212, 0.2);
    color: ${({ theme }) => theme.colors.primary};
  }

  /* Scrollbar styling (webkit browsers) */
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.tertiary};
    border-radius: ${({ theme }) => theme.radii.base};
    
    &:hover {
      background: ${({ theme }) => theme.colors.border};
    }
  }

  /* Focus visible (accessibility) */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }

  /* Reduced motion support (accessibility) */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Root container */
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyles;
