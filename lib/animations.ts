/**
 * Framer Motion animation variants for consistent animations throughout the site
 */

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
}

export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
}

export const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.7 },
}

export const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.7 },
}

export const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.98 },
  transition: { type: 'spring', stiffness: 400, damping: 10 },
}

export const hoverGrow = {
  whileHover: { scale: 1.1, transition: { duration: 0.3 } },
  whileTap: { scale: 0.95 },
}

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.3 },
}

export const buttonHover = {
  scale: 1.02,
  transition: { duration: 0.2 },
}

export const buttonTap = {
  scale: 0.98,
  transition: { duration: 0.1 },
}

// For intersection observer based animations
export const observerVariants = {
  initial: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
}

export const cardVariants = {
  initial: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    transition: { duration: 0.3 },
  },
}

export const counterAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
}

export const textReveal = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.6,
    },
  }),
}
