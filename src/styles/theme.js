// Theme configuration inspired by Brittany Chiang's portfolio
// Dark Navy + Bright Green color scheme

export const theme = {
  colors: {
    // Primary color palette
    primary: '#64ffda',        // Bright green (accents, links)
    secondary: '#0f172a',      // Slate 900 (main background)
    tertiary: '#1e293b',       // Slate 800 (cards)

    // Text colors
    text: {
      primary: '#94a3b8',      // Slate 400 (body)
      secondary: '#64748b',    // Slate 500 (muted)
      heading: '#e2e8f0',      // Slate 200 (headings)
      accent: '#64ffda'        // Bright green
    },

    // Background colors
    background: {
      primary: '#000000',      // Pure Black
      secondary: '#111111',    // Dark Gray (cards)
      tertiary: '#222222',     // Lighter Gray
      overlay: 'rgba(0, 0, 0, 0.9)'
    },

    // Utility colors
    border: '#1e293b',
    shadow: 'rgba(2, 12, 27, 0.7)',
    success: '#64ffda',
    error: '#ef4444'
  },

  // Typography
  fonts: {
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace"
  },

  // Font sizes (responsive)
  fontSizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem'     // 72px
  },

  // Font weights
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900
  },

  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2
  },

  // Spacing scale (based on 8px grid)
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
    '5xl': '8rem',    // 128px
    '6xl': '12rem'    // 192px
  },

  // Responsive breakpoints
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    laptop: '1000px',
    desktop: '1280px',
    wide: '1536px'
  },

  // Transitions
  transitions: {
    fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: '500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)'
  },

  // Border radius
  radii: {
    none: '0',
    sm: '0.125rem',    // 2px
    base: '0.25rem',   // 4px
    md: '0.375rem',    // 6px
    lg: '0.5rem',      // 8px
    xl: '0.75rem',     // 12px
    '2xl': '1rem',     // 16px
    full: '9999px'
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(2, 12, 27, 0.7)',
    base: '0 1px 3px 0 rgba(2, 12, 27, 0.7), 0 1px 2px 0 rgba(2, 12, 27, 0.6)',
    md: '0 4px 6px -1px rgba(2, 12, 27, 0.7), 0 2px 4px -1px rgba(2, 12, 27, 0.6)',
    lg: '0 10px 15px -3px rgba(2, 12, 27, 0.7), 0 4px 6px -2px rgba(2, 12, 27, 0.5)',
    xl: '0 20px 25px -5px rgba(2, 12, 27, 0.7), 0 10px 10px -5px rgba(2, 12, 27, 0.4)',
    '2xl': '0 25px 50px -12px rgba(2, 12, 27, 0.8)',
    inner: 'inset 0 2px 4px 0 rgba(2, 12, 27, 0.6)',
    none: 'none'
  },

  // Z-index scale
  zIndices: {
    hide: -1,
    base: 0,
    dropdown: 1000,
    sticky: 1100,
    fixed: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    toast: 1600,
    tooltip: 1700
  },

  // Container max-widths
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1400px'
  }
};

// Utility function to access theme values
export const getThemeValue = (path, theme) => {
  return path.split('.').reduce((obj, key) => obj?.[key], theme);
};

export default theme;
