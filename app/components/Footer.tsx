'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className="border-t border-border-primary py-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="max-w-[1080px] mx-auto px-8 flex justify-between items-center flex-wrap gap-2">
        <p className="text-xs text-text-tertiary">Calvin Iordye · Backend Engineer · 2026</p>
        <p className="font-['DM_Mono',monospace] text-[11px] text-text-tertiary">Next.js · TypeScript · Tailwind</p>
      </div>
    </motion.footer>
  )
}
