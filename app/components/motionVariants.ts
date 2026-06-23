// Shared framer-motion variants for scroll-triggered sections
export const ease = [0.16, 1, 0.3, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.75, ease },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease } },
}

export const container = (stagger = 0.12) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
})
