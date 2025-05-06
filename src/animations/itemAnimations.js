/**
 * Animations for individual items like cards, list items, or grid elements
 */

// Standard item fade in/slide up with optional delay based on index
export const itemFadeIn = (index = 0, delayFactor = 0.05) => ({
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      delay: index * delayFactor,
      duration: 0.35,
      ease: "easeOut"
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    transition: { duration: 0.2 } 
  }
});

// For cards with hover state changes
export const cardHoverTransition = {
  whileHover: {
    y: -5,
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

// Scale animation for buttons, icons, etc.
export const scaleOnHover = {
  whileHover: { 
    scale: 1.05,
    transition: { duration: 0.2 } 
  },
  whileTap: { 
    scale: 0.98 
  }
};

// Item slide in from side
export const slideInFromLeft = (index = 0, delayFactor = 0.05) => ({
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: index * delayFactor,
      duration: 0.4,
      ease: "easeOut"
    }
  }
});

export const slideInFromRight = (index = 0, delayFactor = 0.05) => ({
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: index * delayFactor,
      duration: 0.4,
      ease: "easeOut"
    }
  }
});
