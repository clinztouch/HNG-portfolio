import StarBorder from './StarBorder'
import SplashCursor from './splashCusor'

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
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-[1fr_380px] items-center gap-16 max-w-[1080px] mx-auto px-8 pt-[116px] pb-20">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 font-['DM_Mono',monospace] text-xs text-[#4ade80] mb-6 before:content-['▶'] before:text-[9px] before:text-[#4ade80]">
            Backend Engineer
          </div>
          <h1 className="font-['Instrument_Serif',Georgia,serif] text-[clamp(60px,9vw,108px)] font-normal tracking-[-0.03em] leading-[0.92] mb-7 text-[#e2ece3]">
            Calvin<br />
            <em className="italic text-[#4ade80]">Iordye</em>
          </h1>
        <p className="text-base text-[#7a9c82] max-w-[480px] leading-[1.75] mb-9">
          I build reliable APIs, scalable data pipelines, and clean system architecture.
          Code that&apos;s maintainable, performant, and honest.
        </p>
        <div className="flex gap-2 flex-wrap mb-12">
          <a href="#projects" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-[13px] font-semibold font-['DM_Mono',monospace] bg-[#4ade80] text-[#080c09] hover:opacity-[0.88] transition-opacity">
            View Projects
          </a>
          <StarBorder as="a" href="#contact" color="cyan" speed="5s">
            Contact Me
          </StarBorder>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {['Abuja, Nigeria · UTC+1', 'Available for work', 'NestJS · PostgreSQL · Redis'].map(b => (
            <span key={b} className="font-['DM_Mono',monospace] text-[11px] text-[#3d5442] border border-[#243028] px-2.5 py-1 rounded-full">{b}</span>
          ))}
        </div>
      </div>

      <div className="hidden md:block relative">
        <div className="bg-[#0e1410] border border-[#243028] rounded-[10px] overflow-hidden font-['DM_Mono',monospace] text-[13px]">
          <div className="flex items-center gap-1.5 px-3.5 py-2.5 border-b border-[#1c2620] bg-[#141a15]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] block" />
            <span className="ml-2 font-['DM_Mono',monospace] text-[11px] text-[#3d5442]">~/calvin — zsh</span>
          </div>
          <div className="p-4 leading-loose">
            <div><span className="text-[#4ade80]">❯ </span><span className="text-[#e2ece3]">cat profile.json</span></div>
            <div><span className="text-[#3d5442]">{'{'}</span></div>
            <div>&nbsp;&nbsp;<span className="text-[#7dd3fc]">&quot;name&quot;</span><span className="text-[#3d5442]">: </span><span className="text-[#86efac]">&quot;Calvin Iordye&quot;</span><span className="text-[#3d5442]">,</span></div>
            <div>&nbsp;&nbsp;<span className="text-[#7dd3fc]">&quot;role&quot;</span><span className="text-[#3d5442]">: </span><span className="text-[#86efac]">&quot;Backend Engineer&quot;</span><span className="text-[#3d5442]">,</span></div>
            <div>&nbsp;&nbsp;<span className="text-[#7dd3fc]">&quot;stack&quot;</span><span className="text-[#3d5442]">: [</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#86efac]">&quot;NestJS&quot;</span><span className="text-[#3d5442]">, </span><span className="text-[#86efac]">&quot;PostgreSQL&quot;</span><span className="text-[#3d5442]">,</span></div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#86efac]">&quot;Redis&quot;</span><span className="text-[#3d5442]">, </span><span className="text-[#86efac]">&quot;TypeScript&quot;</span></div>
            <div>&nbsp;&nbsp;<span className="text-[#3d5442]">],</span></div>
            <div>&nbsp;&nbsp;<span className="text-[#7dd3fc]">&quot;available&quot;</span><span className="text-[#3d5442]">: </span><span className="text-[#fca5a5]">true</span><span className="text-[#3d5442]">,</span></div>
            <div>&nbsp;&nbsp;<span className="text-[#7dd3fc]">&quot;location&quot;</span><span className="text-[#3d5442]">: </span><span className="text-[#86efac]">&quot;Abuja, NG&quot;</span></div>
            <div><span className="text-[#3d5442]">{'}'}</span></div>
            <div><span className="text-[#4ade80]">❯ </span><span className="inline-block w-2 h-3.5 bg-[#4ade80] align-middle animate-blink" /></div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
