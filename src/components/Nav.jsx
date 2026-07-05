import { useState } from 'react'
import { Download, Moon, Sun, Menu, X } from 'lucide-react'
import ThemePicker, { THEMES } from './ThemePicker.jsx'
import { meta } from '../data/content.js'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const isDark = THEMES.find((t) => t.id === theme)?.dark ?? true

  const toggleDarkLight = () => setTheme(isDark ? 'light' : 'dark')

  return (
    <header className="sticky top-0 z-50 border-b border-base-content/10 bg-base-100/80 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6"
      >
        <a
          href="#top"
          className="focus-ring font-mono text-sm font-semibold text-base-content transition-colors hover:text-primary"
        >
          {meta.handle}
          <span className="text-primary">_</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring text-sm text-base-content/60 transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={meta.resume}
            download="Saumitra_Dubey_Resume.pdf"
            className="focus-ring inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-semibold text-primary-content transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/30"
          >
            <Download size={15} aria-hidden="true" /> Resume
          </a>
          <ThemePicker theme={theme} setTheme={setTheme} />
          <button
            type="button"
            onClick={toggleDarkLight}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="focus-ring icon-hover rounded-md p-1.5 text-base-content/60"
          >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={meta.resume}
            download="Saumitra_Dubey_Resume.pdf"
            className="focus-ring inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-primary-content"
          >
            <Download size={14} aria-hidden="true" /> Resume
          </a>
          <ThemePicker theme={theme} setTheme={setTheme} />
          <button
            type="button"
            onClick={toggleDarkLight}
            aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
            className="focus-ring rounded-md p-1.5 text-base-content/60"
          >
            {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="focus-ring rounded-md p-1.5 text-base-content/60"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-base-content/10 md:hidden">
          <div className="mx-auto flex max-w-content flex-col px-4 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="focus-ring py-2.5 text-sm text-base-content/70 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
