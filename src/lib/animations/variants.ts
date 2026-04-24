import type { Variants } from 'framer-motion';

// Fade up animation
export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Fade in from left
export const fadeLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Fade in from right
export const fadeRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Stagger container with faster timing
export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05
    }
  }
};

// Hero text line animation
export const heroLine: Variants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.3 + i * 0.2,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

// Phone slide in animation
export const phoneSlide: Variants = {
  hidden: { 
    opacity: 0, 
    x: 60 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Bar grow animation for hero
export const barGrow = (delay: number): Variants => ({
  hidden: { 
    scaleY: 0 
  },
  visible: { 
    scaleY: 1,
    transition: {
      duration: 1.2,
      delay,
      ease: 'easeOut'
    }
  }
});

// Card reveal animation
export const cardReveal: Variants = {
  hidden: { 
    opacity: 0, 
    y: 24, 
    scale: 0.97 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Process step animation
export const processStep: Variants = {
  inactive: { 
    scale: 1 
  },
  active: { 
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Mobile menu item animation
export const menuItem: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.1 + i * 0.05,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

// Toast animation
export const toastIn: Variants = {
  hidden: { 
    opacity: 0, 
    x: '100%' 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: { 
    opacity: 0, 
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Hover scale effect
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2 }
};

// Tap scale effect
export const tapScale = {
  scale: 0.98
};
