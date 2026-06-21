'use client'

import { useState, useEffect } from 'react'
import { ReactNode } from 'react'

const flow = [
  'User -> Web Portal / CLI',
  'Redirect -> API /auth/github',
  'GitHub OAuth -> API callback',
  'API issues access + refresh tokens',
  'Web: tokens in HTTP-only cookies',
  'Browser -> Express proxy -> API',
  'API validates token -> returns data',
]

const endpoints = [
  { method: 'GET',  path: '/api/profiles',       desc: 'filter by gender, age, country, probability; paginated (max 50)' },
  { method: 'GET',  path: '/api/profiles/search', desc: 'natural language query -> regex parser -> same filters' },
  { method: 'GET',  path: '/api/profiles/export', desc: 'streams CSV with Content-Disposition header' },
  { method: 'GET',  path: '/auth/github',         desc: 'initiates OAuth; accepts client=web with redirect URI' },
  { method: 'POST', path: '/auth/refresh',        desc: 'rotates both tokens; portal retries on 401' },
  { method: 'GET',  path: '/api/me',              desc: 'returns authenticated user session data' },
]

const methodColors: Record<string, string> = {
  GET:    'bg-[rgba(74,222,128,0.12)] text-[#4ade80] border border-[rgba(74,222,128,0.2)]',
  POST:   'bg-[rgba(125,211,252,0.10)] text-[#7dd3fc] border border-[rgba(125,211,252,0.2)]',
  PATCH:  'bg-[rgba(253,186,116,0.10)] text-[#fdba74] border border-[rgba(253,186,116,0.2)]',
  DELETE: 'bg-[rgba(252,165,165,0.10)] text-[#fca5a5] border border-[rgba(252,165,165,0.2)]',
}

type Block = { num: string; title: string; preview: string; full: ReactNode }

const blocks: Block[] = [
  {
    num: '1',
    title: 'The Problem',
    preview: 'Build a demographic intelligence system queryable by gender, age, country, and probability',
    full: <p>Build a demographic intelligence system queryable by gender, age, country, and probability across REST API, browser portal, and CLI. Each interface must authenticate the same user without duplicating auth logic. Backend is the single source of truth for OAuth, tokens, rate limiting, and database.</p>,
  },
  {
    num: '2',
    title: 'Architecture',
    preview: 'NestJS API owns all data and auth. Express portal proxies browser requests server-side',
    full: (
      <>
        <p>NestJS API owns all data and auth. Express portal proxies browser requests server-side, stores tokens in HTTP-only cookies. CLI stores tokens locally and calls API directly. GitHub OAuth is handled entirely by the API.</p>
        <div className="flex flex-col gap-0.5 mt-4">
          {flow.map((s, i, a) => (
            <div key={s}>
              <div className="bg-[#080c09] border border-[#243028] rounded-lg px-3 py-1.5 font-['DM_Mono',monospace] text-xs text-[#7a9c82]">{s}</div>
              {i < a.length - 1 && <div className="text-xs text-[#4ade80] pl-4">v</div>}
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    num: '3',
    title: 'Key Endpoints',
    preview: 'REST endpoints for profiles, search, export, OAuth, token refresh, and session data',
    full: (
      <div className="flex flex-col gap-2">
        {endpoints.map(e => (
          <div key={e.path} className="flex items-center gap-2 flex-wrap">
            <span className={`font-['DM_Mono',monospace] text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${methodColors[e.method]}`}>{e.method}</span>
            <code className="font-['DM_Mono',monospace] text-xs text-[#e2ece3]">{e.path}</code>
            <span className="text-xs text-[#3d5442]">{e.desc}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    num: '4',
    title: 'The Hard Part',
    preview: 'Wiring GitHub OAuth across three apps without duplicating auth',
    full: (
      <>
        <p>Wiring GitHub OAuth across three apps without duplicating auth. The web portal passes web_redirect_uri when initiating OAuth. After the callback, the API redirects to /auth/callback?access_token=...&refresh_token=... on the portal. Express intercepts, sets HTTP-only cookies, sends user to dashboard.</p>
        <p className="mt-3">A 401 triggers silent refresh - portal POSTs the refresh token, rotates both cookies, retries the original request once. CSRF protection on all state-changing routes.</p>
      </>
    ),
  },
]

export default function DeepDive() {
  const [active, setActive] = useState<Block | null>(null)
  const [dotCount, setDotCount] = useState(3)

  useEffect(() => {
    const id = setInterval(() => setDotCount(d => d === 6 ? 3 : d + 1), 500)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="py-24" id="deep-dive">
      <div className="max-w-[1080px] mx-auto px-8">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.14em] uppercase text-[#4ade80] mb-2 flex items-center gap-2 before:content-['//'] before:text-[#3d5442]">Featured</p>
        <h2 className="text-[clamp(26px,3.5vw,38px)] font-medium tracking-[-0.02em] text-[#e2ece3] mb-12">Deep Dive</h2>

        <div className="border border-[#1c2620] rounded-[10px] overflow-hidden">
          {/* Header */}
          <div className="relative bg-[#0e1410] p-10 border-b border-[#1c2620] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_100%_0%,rgba(74,222,128,0.04)_0%,transparent_60%)] before:pointer-events-none">
            <div>
              <div className="font-['DM_Mono',monospace] text-[10px] tracking-[0.14em] uppercase text-[#4ade80] mb-2.5">Featured Project</div>
              <div className="font-['Instrument_Serif',Georgia,serif] italic text-[clamp(28px,4vw,42px)] font-normal text-[#e2ece3] mb-3.5">Insighta Labs+</div>
              <div className="flex flex-wrap gap-2">
                {['NestJS','Express','Prisma','PostgreSQL','TypeScript','Node.js CLI','Railway'].map(t => (
                  <span key={t} className="font-['DM_Mono',monospace] text-[10px] px-2 py-0.5 rounded-full bg-[rgba(74,222,128,0.12)] text-[#4ade80] border border-[rgba(74,222,128,0.15)]">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex md:flex-col items-start md:items-end gap-1.5 md:gap-2">
              {[['3','services'],['2026','profiles'],['1','auth source']].map(([num, label]) => (
                <div key={label} className="font-['DM_Mono',monospace] text-[11px] text-[#3d5442] text-right">
                  <strong className="block text-[22px] text-[#4ade80] font-medium">{num}</strong>{label}
                </div>
              ))}
            </div>
          </div>

          {/* Body grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {blocks.map((block, i) => (
              <div key={block.num} className={`p-10 border-b border-[#1c2620] bg-[#0e1410] ${i % 2 === 0 ? 'md:border-r' : ''}`}>
                <div className="font-['DM_Mono',monospace] text-[10px] tracking-[0.14em] uppercase text-[#4ade80] flex items-center gap-2 mb-3.5">
                  <span className="w-[18px] h-[18px] bg-[rgba(74,222,128,0.12)] border border-[rgba(74,222,128,0.2)] rounded-full flex items-center justify-center text-[10px] text-[#4ade80]">{block.num}</span>
                  {block.title}
                </div>
                <p className="text-sm text-[#7a9c82] leading-[1.75]">
                  {block.preview}
                  <button className="inline ml-1.5 text-sm font-black text-[#4ade80] bg-transparent border-none cursor-pointer p-0 leading-none tracking-widest hover:opacity-70" onClick={() => setActive(block)}>
                    {'.'.repeat(dotCount)}
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000] p-6" onClick={() => setActive(null)}>
          <div className="bg-[#0e1410] border border-[#1c2620] rounded-[10px] w-full max-w-[560px] max-h-[80vh] overflow-y-auto scrollbar-thin" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-[#1c2620]">
              <h3 className="font-['DM_Mono',monospace] text-[10px] tracking-[0.14em] uppercase text-[#4ade80] flex items-center gap-2">
                <span className="w-[18px] h-[18px] bg-[rgba(74,222,128,0.12)] border border-[rgba(74,222,128,0.2)] rounded-full inline-flex items-center justify-center text-[10px]">{active.num}</span>
                {active.title}
              </h3>
              <button className="bg-transparent border-none text-sm font-semibold text-[#3d5442] cursor-pointer px-2 py-0.5 rounded font-['DM_Mono',monospace] hover:bg-[#1c2620] hover:text-[#e2ece3] transition-colors" onClick={() => setActive(null)}>X</button>
            </div>
            <div className="px-6 pt-5 pb-6 text-sm text-[#7a9c82] leading-[1.75] [&>p+p]:mt-3">{active.full}</div>
          </div>
        </div>
      )}
    </section>
  )
}
