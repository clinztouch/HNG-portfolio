'use client'

import Link from 'next/link'
import SplashCursor from '../components/splashCusor'

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#080c09] p-6">
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
      <div className="flex flex-col items-center gap-4 text-center animate-success-in">
        <div className="w-[72px] h-[72px] rounded-full bg-[rgba(74,222,128,0.12)] border border-[rgba(74,222,128,0.25)] flex items-center justify-center text-[#4ade80]">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path style={{ strokeDasharray: 36, strokeDashoffset: 36, animation: 'draw 0.5s 0.3s ease forwards' }} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-['Instrument_Serif',Georgia,serif] italic text-[40px] text-[#e2ece3] m-0">Message sent.</h1>
        <p className="text-[15px] text-[#3d5442] m-0">Thanks for reaching out. I will get back to you soon.</p>
        <Link href="/" className="mt-2 font-['DM_Mono',monospace] text-xs text-[#4ade80] no-underline border border-[rgba(74,222,128,0.3)] px-5 py-2 rounded-md hover:bg-[rgba(74,222,128,0.12)] transition-colors">
          Back to portfolio
        </Link>
      </div>
    </div>
  )
}
