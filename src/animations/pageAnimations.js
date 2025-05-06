/**
 * Page-level animation variants for consistent transitions between pages
 */

// Standard page transition - fade in/out
export const pageTransition = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, when: 'beforeChildren' }
  },
  exit: { opacity: 0, transition: { duration: 0.3 } }
};

// Content elements within a page - slide up while fading in
export const contentTransition = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  }
};

// Header elements - slightly different timing and easing
export const headerTransition = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};
