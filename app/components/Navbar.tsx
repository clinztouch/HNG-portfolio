'use client'

import { useRef, useEffect } from 'react'

export default function Navbar() {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const burger = document.getElementById('hamburger')
    const close = document.getElementById('menuClose')
    const links = document.querySelectorAll('.mobile-link')
    const menu = menuRef.current

    const open = () => menu?.classList.add('translate-x-0')
    const shut = () => menu?.classList.remove('translate-x-0')

    burger?.addEventListener('click', open)
    close?.addEventListener('click', shut)
    links.forEach(l => l.addEventListener('click', shut))
    return () => { burger?.removeEventListener('click', open); close?.removeEventListener('click', shut) }
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-14 bg-[rgba(8,12,9,0.85)] backdrop-blur-xl border-b border-[#1c2620] z-100 flex items-center">
        <div className="w-full max-w-[1080px] mx-auto px-8 flex items-center justify-between">
          <span className="font-['DM_Mono',monospace] text-xs text-[#4ade80] flex items-center gap-2 before:content-[''] before:inline-block before:w-[7px] before:h-[7px] before:bg-[#4ade80] before:rounded-full before:shadow-[0_0_8px_#4ade80]">CI</span>
          <ul className="hidden md:flex items-center gap-1 list-none">
            {['projects','skills','deep-dive','contact'].map(id => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`font-['DM_Mono',monospace] text-xs px-3 py-1.5 rounded-lg transition-all duration-150 ${id === 'contact' ? 'bg-[#4ade80] text-[#080c09] font-bold hover:opacity-90' : 'text-[#7a9c82] hover:text-[#e2ece3] hover:bg-[#0e1410]'}`}
                >
                  {id.replace('-', ' ')}
                </a>
              </li>
            ))}
          </ul>
          <button className="md:hidden flex flex-col gap-1 bg-transparent border-none cursor-pointer p-1" id="hamburger" aria-label="Open menu">
            <span className="block w-5 h-[1.5px] bg-[#e2ece3] rounded" />
            <span className="block w-5 h-[1.5px] bg-[#e2ece3] rounded" />
            <span className="block w-5 h-[1.5px] bg-[#e2ece3] rounded" />
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        className="fixed inset-0 bg-[#080c09] z-200 flex flex-col items-center justify-center gap-7 translate-x-full transition-transform duration-300 ease-in-out"
      >
        <button className="absolute top-[18px] right-[22px] bg-transparent border-none text-lg cursor-pointer text-[#7a9c82]" id="menuClose" aria-label="Close menu">✕</button>
        <ul className="list-none text-center">
          {['Projects','Skills','Deep Dive','Reflection','Contact'].map(label => (
            <li key={label} className="mb-5">
              <a href={`#${label.toLowerCase().replace(' ', '-')}`} className="mobile-link text-[26px] font-medium text-[#e2ece3]">{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
