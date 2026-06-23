'use client'

import { motion } from 'framer-motion'
import { GithubIcon, ExternalLinkIcon } from './icons'
import { fadeUp, container } from './motionVariants'

const projects = [
  {
    idx: '01',
    name: 'Openprofile',
    tags: ['NestJS', 'PostgreSQL', 'TypeScript', 'TypeORM'],
    github: 'https://github.com/hngprojects/open-profile-be',
    demo: 'https://staging.open-profile.hng14.com',
    desc: 'A scalable backend system for user profile discovery and management. Supports authentication, intelligent search, and secure API access with caching and rate limiting.',
    what: (
      <>
        <strong className="text-text-secondary">Designed &amp; implemented:</strong> JWT + RBAC auth system, profile management with visibility controls,
        PostgreSQL trigram search with custom ranking, Redis cache-aside with TTL invalidation, API rate limiting and versioning.
      </>
    ),
  },

  {
    idx: '02',
    name: 'Append-Only Event Store',
    tags: ['NestJS', 'TypeScript', 'Node.js fs'],
    github: 'https://github.com/clinztouch/append-only-event-store',
    demo: 'https://github.com/clinztouch/append-only-event-store',
    desc: 'Crash-safe HTTP service storing events in an append-only log — direct byte-range seeks, no database. Built to understand Bitcask / WAL internals.',
    what: (
      <>
        <code className="font-['DM_Mono',monospace] text-[0.85em] text-accent bg-accent-bg px-1.5 py-0.5 rounded">POST /events</code> (append), <code className="font-['DM_Mono',monospace] text-[0.85em] text-accent bg-accent-bg px-1.5 py-0.5 rounded">GET /events/:id</code> (O(1) byte-range seek via in-memory index), crash recovery via <code className="font-['DM_Mono',monospace] text-[0.85em] text-accent bg-accent-bg px-1.5 py-0.5 rounded">onModuleInit</code> — replays log on startup, rebuilds byte-offset index, resumes writes from correct position.
      </>
    ),
    prs: [],
  },
]

export default function Projects() {
  return (
    <motion.section
      className="py-24"
      id="projects"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={container(0.2)}
    >
      <div className="max-w-[1080px] mx-auto px-8">
        <motion.p variants={fadeUp} className="font-['DM_Mono',monospace] text-[11px] tracking-[0.14em] uppercase text-accent mb-2 flex items-center gap-2 before:content-['//'] before:text-text-tertiary">Work</motion.p>
        <motion.h2 variants={fadeUp} className="text-[clamp(26px,3.5vw,38px)] font-medium tracking-[-0.02em] text-text-primary mb-12">Projects</motion.h2>
        <div className="flex flex-col gap-px bg-border-primary border border-border-primary rounded-[10px] overflow-hidden">
          {projects.map(p => (
            <motion.div key={p.idx} variants={fadeUp} className="bg-bg-secondary px-10 py-8 grid grid-cols-[48px_1fr] gap-6 items-start hover:bg-bg-tertiary transition-colors duration-150 max-sm:grid-cols-1">
              <div className="font-['DM_Mono',monospace] text-[11px] text-accent pt-0.5 tracking-[0.08em]">{p.idx}</div>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-3.5 flex-wrap">
                  <span className="text-lg font-medium text-text-primary">{p.name}</span>
                  <div className="flex gap-1.5 flex-wrap">
                    {p.tags.map(t => (
                      <span key={t} className="font-['DM_Mono',monospace] text-[10px] px-2 py-0.5 rounded-full bg-accent-bg text-accent border border-accent-border">{t}</span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-[1.7] max-w-[640px]">{p.desc}</p>
                <div className="border-l-2 border-border-secondary pl-3.5 text-[13px] text-text-tertiary leading-[1.65]">{p.what}</div>
                <div className="flex gap-3 justify-center mt-2">
                  <a href={p.github} className="flex items-center justify-center w-8 h-8 border border-border-secondary rounded-lg text-text-tertiary hover:text-accent hover:border-accent-border transition-all duration-150" title="GitHub" target="_blank" rel="noopener noreferrer"><GithubIcon /></a>
                  <a href={p.demo} className="flex items-center justify-center w-8 h-8 border border-border-secondary rounded-lg text-text-tertiary hover:text-accent hover:border-accent-border transition-all duration-150" title="Demo" target="_blank" rel="noopener noreferrer"><ExternalLinkIcon /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
