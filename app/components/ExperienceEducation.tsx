'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, container } from './motionVariants'

const roles = [
  {
    title: 'Backend Engineer',
    type: 'Freelance · Remote',
    period: '2024 – Present',
    stack: 'NestJS · PostgreSQL · Redis',
  }
]

export default function ExperienceEducation() {
  const [years, setYears] = useState('')

  useEffect(() => {
    const start = new Date('2024-01-01').getTime()
    const diff = Date.now() - start
    const y = diff / (1000 * 60 * 60 * 24 * 365.25)
    setYears(y.toFixed(1))
  }, [])

  return (
    <motion.section
      className="py-16"
      id="experience"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container(0.15)}
    >
      <div className="max-w-[1080px] mx-auto px-8">
        <motion.div variants={fadeUp} className="flex items-baseline gap-4 mb-10">
          <h2 className="font-['DM_Mono',monospace] text-[11px] tracking-[0.14em] uppercase text-accent flex items-center gap-2 before:content-['//'] before:text-text-tertiary">
            Experience
          </h2>
          {years && (
            <span className="font-['DM_Mono',monospace] text-[11px] text-text-tertiary">
              {years} yrs
            </span>
          )}
        </motion.div>

        <div className="flex flex-col gap-8">
          {roles.map((r) => (
            <motion.div key={r.title + r.period} variants={fadeLeft} className="border-l-2 border-accent pl-8">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <p className="font-['Instrument_Serif',Georgia,serif] text-5xl font-bold text-text-primary mb-2">{r.title}</p>
                  <p className="font-['DM_Mono',monospace] text-base text-accent mb-2">{r.type}</p>
                  <p className="font-['DM_Mono',monospace] text-sm text-text-tertiary">{r.stack}</p>
                </div>
                <p className="font-['DM_Mono',monospace] text-sm text-text-tertiary shrink-0">{r.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
