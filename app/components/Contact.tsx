'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GithubIcon } from './icons'
import { fadeUp, fadeLeft, fadeRight, container } from './motionVariants'

export default function Contact() {
  const [sending, setSending] = useState(false)
  const [fields, setFields] = useState({ name: '', email: '', message: '' })

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)
  const charCount = fields.message.length
  const messageValid = charCount >= 15
  const canSubmit = fields.name.trim().length > 0 && emailValid && messageValid && !sending

  function onChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFields(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!canSubmit) return
    setSending(true)
    await fetch('https://formspree.io/f/xzdwnaky', {
      method: 'POST',
      body: new FormData(e.currentTarget),
      headers: { Accept: 'application/json' },
    })
    window.location.href = '/success'
  }

  const inputCls = (err: boolean) =>
    `font-[Geist,system-ui,sans-serif] text-sm px-3.5 py-2.5 border rounded-lg bg-bg-secondary text-text-primary outline-none transition-all resize-y placeholder:text-text-tertiary focus:border-accent focus:shadow-[0_0_0_3px_var(--color-accent-bg)] ${err ? 'border-[#f87171] shadow-[0_0_0_3px_rgba(248,113,113,0.1)]' : 'border-border-secondary'}`

  return (
    <motion.section
      className="py-24"
      id="contact"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={container(0.12)}
    >
      <div className="max-w-[1080px] mx-auto px-8">
        <motion.p variants={fadeUp} className="font-['DM_Mono',monospace] text-[11px] tracking-[0.14em] uppercase text-accent mb-2 flex items-center gap-2 before:content-['//'] before:text-text-tertiary">Contact</motion.p>
        <motion.h2 variants={fadeUp} className="text-[clamp(26px,3.5vw,38px)] font-medium tracking-[-0.02em] text-text-primary mb-12">Get in Touch</motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Links */}
          <motion.div variants={fadeLeft} className="flex flex-col gap-2">
            {[
              {
                href: 'mailto:iordyecalvin@gmail.com',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>,
                type: 'Email',
                value: 'iordyecalvin@gmail.com',
              },
              {
                href: 'https://github.com/clinztouch',
                icon: <GithubIcon />,
                type: 'GitHub',
                value: 'github.com/clinztouch',
              },
              {
                href: 'https://linkedin.com/in/iordye-calvin',
                icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452H17V14.88c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a1.984 1.984 0 110-3.967 1.984 1.984 0 010 3.967zm1.707 13.019H3.63V9h3.414v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
                type: 'LinkedIn',
                value: 'linkedin.com/in/iordye-calvin',
              },
            ].map(({ href, icon, type, value }) => (
              <a key={type} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-[18px] py-3.5 bg-bg-secondary border border-border-primary rounded-lg hover:border-accent-border hover:bg-bg-tertiary transition-all duration-150">
                <div className="w-[38px] h-[38px] bg-bg-primary border border-border-secondary rounded-lg flex items-center justify-center text-text-secondary shrink-0">{icon}</div>
                <div>
                  <p className="font-['DM_Mono',monospace] text-[10px] uppercase tracking-[0.1em] text-text-tertiary mb-0.5">{type}</p>
                  <p className="text-[13px] font-medium text-text-primary">{value}</p>
                </div>
                <svg className="ml-auto text-text-tertiary shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form variants={fadeRight} className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New Portfolio Contact Message" />
            {[
              { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name', err: false },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com', err: !!(fields.email && !emailValid) },
            ].map(f => (
              <div key={f.id} className="flex flex-col gap-1.5 group">
                <label htmlFor={f.id} className="font-['DM_Mono',monospace] text-[10px] font-medium text-text-tertiary tracking-[0.1em] uppercase group-focus-within:text-accent transition-colors">{f.label}</label>
                <input type={f.type} id={f.id} name={f.id} placeholder={f.placeholder}
                  value={fields[f.id as 'name' | 'email']} onChange={onChange}
                  className={inputCls(f.err)} required />
                {f.err && <span className="text-[11px] text-[#f87171] font-['DM_Mono',monospace]">Enter a valid email address.</span>}
              </div>
            ))}
            <div className="flex flex-col gap-1.5 group">
              <label htmlFor="message" className="font-['DM_Mono',monospace] text-[10px] font-medium text-text-tertiary tracking-[0.1em] uppercase group-focus-within:text-accent transition-colors">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="What are you working on?"
                value={fields.message} onChange={onChange}
                className={inputCls(!!(fields.message && !messageValid))} required />
              <span className={`text-[11px] font-['DM_Mono',monospace] ${messageValid ? 'text-accent' : 'text-text-tertiary'}`}>
                {charCount} / 15 characters minimum
              </span>
            </div>
            <button type="submit"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-2.5 rounded-lg text-[13px] font-semibold font-['DM_Mono',monospace] bg-accent text-bg-primary hover:opacity-[0.88] transition-opacity cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              disabled={!canSubmit}>
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}
