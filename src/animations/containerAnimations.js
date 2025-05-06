/**
 * Animations for container elements with staggered children
 */

// Standard container with staggered children (customizable stagger time)
export const staggerContainer = (staggerChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren: 0.1
    }
  }
});

// Container with staggered fade in (no container opacity animation)
export const staggerFadeContainer = (staggerChildren = 0.1) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren: 0.1
    }
  }
});

// Grid container animation
export const gridContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.4
    }
  }
};

// Project grid animation with optimized settings for smoother transitions
export const projectGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03, // Faster stagger for smoother appearance
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2 }
  }
};
