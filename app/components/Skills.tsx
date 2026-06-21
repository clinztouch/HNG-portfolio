const skills = [
  { name: 'API Design', proof: '→ Openprofile: versioned REST endpoints for profile discovery, onboarding, search, auth, and management.' },
  { name: 'Authentication & Authorization', proof: '→ Insighta Labs+: GitHub OAuth + PKCE, JWT, RBAC (Admin/Analyst), token refresh, protected routes.' },
  { name: 'Database Design', proof: '→ Insighta Labs+: schema design, migrations, indexing, PostgreSQL models via Prisma.' },
  { name: 'Documentation', proof: '→ OpenProfile: Swagger decorators, clear request/response contracts across all endpoints.' },
  { name: 'Caching Strategy', proof: '→ OpenProfile: Redis cache-aside, TTL expiration, cache invalidation on profile updates.' },
  { name: 'Input Validation & Security', proof: '→ OpenProfile: DTO validation, rate limiting, pagination limits.\n→ Insighta Labs+: PKCE, CSRF protection, HTTP-only cookies, throttling.' },
  { name: 'Testing', proof: '→ OpenProfile: unit + e2e tests for controllers, services, search, and validation.' },
  { name: 'Deployment & CI/CD', proof: '→ Insighta Labs+: Railway deploys + GitHub Actions pipelines.' },
]

export default function Skills() {
  return (
    <section className="py-24 bg-[#0e1410]" id="skills">
      <div className="max-w-[1080px] mx-auto px-8">
        <p className="font-['DM_Mono',monospace] text-[11px] tracking-[0.14em] uppercase text-[#4ade80] mb-2 flex items-center gap-2 before:content-['//'] before:text-[#3d5442]">Capabilities</p>
        <h2 className="text-[clamp(26px,3.5vw,38px)] font-medium tracking-[-0.02em] text-[#e2ece3] mb-12">Backend Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1c2620] border border-[#1c2620] rounded-[10px] overflow-hidden">
          {skills.map(s => (
            <div key={s.name} className="bg-[#0e1410] px-8 py-6 flex flex-col gap-1.5 hover:bg-[#141a15] transition-colors duration-150">
              <div className="text-sm font-medium text-[#e2ece3] flex items-center gap-2 before:content-[''] before:w-[5px] before:h-[5px] before:bg-[#4ade80] before:rounded-full before:shadow-[0_0_6px_#4ade80] before:shrink-0">
                {s.name}
              </div>
              <div className="text-xs text-[#3d5442] font-['DM_Mono',monospace] leading-relaxed whitespace-pre-line">{s.proof}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
