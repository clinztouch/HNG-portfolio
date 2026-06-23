'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import SplashCursor from '../components/splashCusor'

const ease = [0.16, 1, 0.3, 1] as const

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary p-6">
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#0c592c"
      />
      <div className="flex flex-col items-center gap-4 text-center">
        <motion.div
          className="w-[72px] h-[72px] rounded-full bg-accent-bg border border-accent-border flex items-center justify-center text-accent"
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease }}
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path style={{ strokeDasharray: 36, strokeDashoffset: 36, animation: 'draw 0.5s 0.5s ease forwards' }} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <motion.h1
          className="font-['Instrument_Serif',Georgia,serif] italic text-[40px] text-text-primary m-0"
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.7, ease, delay: 0.25 }}
        >
          Message sent.
        </motion.h1>
        <motion.p
          className="text-[15px] text-text-tertiary m-0"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.4 }}
        >
          Thanks for reaching out. I will get back to you soon.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.55 }}
        >
          <Link href="/" className="mt-2 font-['DM_Mono',monospace] text-xs text-accent no-underline border border-accent-border px-5 py-2 rounded-md hover:bg-accent-bg transition-colors">
            Back to portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
