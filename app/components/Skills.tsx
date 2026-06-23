'use client'

import { motion } from 'framer-motion'
import { fadeUp, container } from './motionVariants'

export default function Skills() {
  const skills = [
    { name: 'Backend', items: 'NestJS, Node.js, Express.js' },
    { name: 'Languages', items: 'TypeScript, JavaScript, SQL' },
    { name: 'Databases', items: 'PostgreSQL, MongoDB, Redis' },
    { name: 'ORMs', items: 'Prisma, TypeORM' },
    { name: 'Authentication & Security', items: 'JWT, OAuth 2.0, RBAC, Refresh Token Rotation, Argon2, CSRF Protection' },
    { name: 'API Development', items: 'REST APIs, Swagger/OpenAPI, Postman, API Versioning, Rate Limiting, Server-Sent Events' },
    { name: 'DevOps & Deployment', items: 'Git, GitHub Actions (CI/CD), Nginx, PM2, Linux (Ubuntu), Railway, Render' },
    { name: 'Testing', items: 'Jest, Unit Testing, Integration Testing' },
  ]

  return (
    <motion.section
      className="py-24 bg-bg-secondary"
      id="skills"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={container(0.07)}
    >
      <div className="max-w-[1080px] mx-auto px-8">
        <motion.p variants={fadeUp} className="font-['DM_Mono',monospace] text-[11px] tracking-[0.14em] uppercase text-accent mb-2 flex items-center gap-2 before:content-['//'] before:text-text-tertiary">Capabilities</motion.p>
        <motion.h2 variants={fadeUp} className="text-[clamp(26px,3.5vw,38px)] font-medium tracking-[-0.02em] text-text-primary mb-12">Backend Skills</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border-primary border border-border-primary rounded-[10px] overflow-hidden">
          {skills.map(s => (
            <motion.div key={s.name} variants={fadeUp} className="bg-bg-secondary px-8 py-6 flex flex-col gap-1.5 hover:bg-bg-tertiary transition-colors duration-150">
              <div className="text-sm font-medium text-text-primary flex items-center gap-2 before:content-[''] before:w-[5px] before:h-[5px] before:bg-accent before:rounded-full before:shadow-[0_0_6px_var(--color-accent)] before:shrink-0">
                {s.name}
              </div>
              <div className="text-xs text-text-tertiary font-['DM_Mono',monospace] leading-relaxed">{s.items}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
