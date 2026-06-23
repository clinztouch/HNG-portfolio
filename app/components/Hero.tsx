'use client'

import { motion } from "framer-motion";
import StarBorder from "./StarBorder";
import SplashCursor from "./splashCusor";

const ease = [0.16, 1, 0.3, 1] as const

// Reveal from bottom with clip-path
const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 60, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.9, ease, delay },
})

// Slide in from right
const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: 80 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.85, ease, delay },
})

export default function Hero() {
  return (
    <>
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
      <div className="w-full text-center pt-[116px] pb-10 px-8 overflow-hidden">
        <motion.h1
          {...reveal(0.1)}
          className="font-['Instrument_Serif',Georgia,serif] text-[clamp(60px,9vw,108px)] font-normal tracking-[-0.03em] leading-[0.92] text-text-primary transition-colors"
        >
          Calvin <em className="italic text-accent transition-colors">Iordye</em>
        </motion.h1>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-[1fr_380px] items-center gap-16 max-w-[1080px] mx-auto px-8 pb-20">
        <div className="flex flex-col overflow-hidden">
          <motion.div {...reveal(0.25)} className="flex items-center gap-2 font-['DM_Mono',monospace] text-xs text-accent transition-colors mb-6 before:content-['▶'] before:text-[9px] before:text-accent">
            Backend Engineer
          </motion.div>
          <motion.p {...reveal(0.35)} className="text-base text-text-secondary transition-colors max-w-[480px] leading-[1.75] mb-9">
            Backend developer with hands-on production experience building
            secure, scalable APIs in NestJS, TypeScript, and PostgreSQL.
            Practical expertise in authentication systems, transactional
            database operations, draft/publish content workflows, and REST API
            design. Comfortable shipping features under tight deadlines with
            thorough testing and documentation.
          </motion.p>
          <motion.div {...reveal(0.45)} className="flex gap-2 flex-wrap mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold font-['DM_Mono',monospace] bg-accent text-bg-primary hover:opacity-[0.88] transition-all"
            >
              View Projects
            </a>
            <StarBorder as="a" href="#contact" color="var(--color-accent)" speed="5s">
              Contact Me
            </StarBorder>
          </motion.div>
          <motion.div {...reveal(0.55)} className="flex items-center gap-2 flex-wrap">
            {[
              "Abuja, Nigeria · UTC+1",
              "Available for work",
              "NestJS · PostgreSQL · Redis",
            ].map((b, i) => (
              <motion.span
                key={b}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease, delay: 0.6 + i * 0.08 }}
                className="font-['DM_Mono',monospace] text-[11px] text-text-tertiary border border-border-secondary px-2.5 py-1 rounded-full transition-colors"
              >
                {b}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div {...slideLeft(0.4)} className="hidden md:block relative">
          <div className="bg-bg-secondary border border-border-secondary rounded-[10px] overflow-hidden font-['DM_Mono',monospace] text-[13px]">
            <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-border-primary bg-bg-tertiary">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] block" />
              <span className="ml-2 font-['DM_Mono',monospace] text-[11px] text-text-tertiary">
                ~/calvin — zsh
              </span>
            </div>
            <div className="p-4 leading-loose">
              <div>
                <span className="text-accent">❯ </span>
                <span className="text-text-primary">cat profile.json</span>
              </div>
              <div>
                <span className="text-text-tertiary">{"{"}</span>
              </div>
              <div>
                &nbsp;&nbsp;
                <span className="text-[#7dd3fc]">&quot;name&quot;</span>
                <span className="text-text-tertiary">: </span>
                <span className="text-[#86efac]">
                  &quot;Calvin Iordye&quot;
                </span>
                <span className="text-text-tertiary">,</span>
              </div>
              <div>
                &nbsp;&nbsp;
                <span className="text-[#7dd3fc]">&quot;role&quot;</span>
                <span className="text-text-tertiary">: </span>
                <span className="text-[#86efac]">
                  &quot;Backend Engineer&quot;
                </span>
                <span className="text-text-tertiary">,</span>
              </div>
              <div>
                &nbsp;&nbsp;
                <span className="text-[#7dd3fc]">&quot;stack&quot;</span>
                <span className="text-text-tertiary">: [</span>
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#86efac]">&quot;NestJS&quot;</span>
                <span className="text-text-tertiary">, </span>
                <span className="text-[#86efac]">&quot;PostgreSQL&quot;</span>
                <span className="text-text-tertiary">,</span>
              </div>
              <div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-[#86efac]">&quot;Redis&quot;</span>
                <span className="text-text-tertiary">, </span>
                <span className="text-[#86efac]">&quot;TypeScript&quot;</span>
              </div>
              <div>
                &nbsp;&nbsp;<span className="text-text-tertiary">],</span>
              </div>
              <div>
                &nbsp;&nbsp;
                <span className="text-[#7dd3fc]">&quot;available&quot;</span>
                <span className="text-text-tertiary">: </span>
                <span className="text-[#fca5a5]">true</span>
                <span className="text-text-tertiary">,</span>
              </div>
              <div>
                &nbsp;&nbsp;
                <span className="text-[#7dd3fc]">&quot;location&quot;</span>
                <span className="text-text-tertiary">: </span>
                <span className="text-[#86efac]">&quot;Abuja, NG&quot;</span>
              </div>
              <div>
                <span className="text-text-tertiary">{"}"}</span>
              </div>
              <div>
                <span className="text-accent">❯ </span>
                <span className="inline-block w-2 h-3.5 bg-accent align-middle animate-blink" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
