'use client'
import StaggeredMenu from './StaggeredMenu'
import { ThemeToggle } from './ThemeToggle'

const menuItems = [
  { label: 'Projects', ariaLabel: 'View projects', link: '#projects' },
  { label: 'Skills', ariaLabel: 'View skills', link: '#skills' },
  { label: 'Deep Dive', ariaLabel: 'View deep dive', link: '#deep-dive' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' },
]

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 h-14 bg-bg-primary/85 backdrop-blur-xl border-b border-border-primary z-50 transition-colors duration-300">
        <div className="w-full max-w-[1080px] mx-auto px-8 h-full flex items-center justify-between">
          <span className="font-['DM_Mono',monospace] text-xs text-accent flex items-center gap-2 before:content-[''] before:inline-block before:w-[7px] before:h-[7px] before:bg-accent before:rounded-full before:shadow-[0_0_8px_var(--color-accent)]">CI</span>
          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <ul className="flex items-center gap-1 list-none m-0 p-0">
              {menuItems.map(({ label, link }) => (
                <li key={label}>
                  <a
                    href={link}
                    className={`font-['DM_Mono',monospace] text-xs px-3 py-1.5 rounded-lg transition-all duration-150 ${label === 'Contact' ? 'bg-accent text-bg-primary font-bold hover:opacity-90' : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <ThemeToggle />
          </div>
          {/* Mobile: only ThemeToggle inside nav */}
          <div className="md:hidden flex items-center gap-4 md:pr-0 pr-6">
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* StaggeredMenu outside nav so its z-index isn't trapped in nav's stacking context */}
      <div className="md:hidden">
        <StaggeredMenu
          isFixed
          items={menuItems}
          position="right"
          colors={['#141a15', '#0e1410']}
          accentColor="#4ade80"
          menuButtonColor="#e2ece3"
          openMenuButtonColor="#e2ece3"
          changeMenuColorOnOpen={false}
          displayItemNumbering={false}
        />
      </div>
    </>
  )
}
