// Reusable Framer Motion animation variants
// Professional, subtle animations for portfolio

// Fade in from bottom (most common)
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Fade in with no movement
export const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

// Stagger children animations (for lists, grids)
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Scale on hover (for cards, buttons)
export const scaleOnHover = {
  rest: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

// Slide in from left (for sidebar)
export const slideInLeft = {
  hidden: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Slide in from right
export const slideInRight = {
  hidden: {
    x: 100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Draw line animation (for underlines)
export const drawLine = {
  hidden: {
    width: 0
  },
  visible: {
    width: '100%',
    transition: {
      duration: 0.8,
      ease: 'easeInOut'
    }
  }
};

// Typewriter effect (character by character)
export const typewriter = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03
    }
  }
};

// Individual letter animation
export const letterAnimation = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Navbar link hover effect
export const navLinkHover = {
  rest: {
    x: 0,
    color: '#8892b0'
  },
  hover: {
    x: 5,
    color: '#64ffda',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

// Button hover with glow effect
export const buttonHover = {
  rest: {
    scale: 1,
    boxShadow: '0 0 0 0 rgba(100, 255, 218, 0)'
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 0 20px 0 rgba(100, 255, 218, 0.5)',
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  tap: {
    scale: 0.95
  }
};

// Card entrance animation
export const cardEntrance = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
};

// Rotate on hover (for icons)
export const rotateOnHover = {
  rest: {
    rotate: 0
  },
  hover: {
    rotate: 360,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
};

// Page transition
export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

// Pulse animation (for attention)
export const pulse = {
  rest: {
    scale: 1
  },
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

export default {
  fadeInUp,
  fadeIn,
  staggerContainer,
  scaleOnHover,
  slideInLeft,
  slideInRight,
  drawLine,
  typewriter,
  letterAnimation,
  navLinkHover,
  buttonHover,
  cardEntrance,
  rotateOnHover,
  pageTransition,
  pulse
};
