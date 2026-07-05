import { useEffect, useRef, useState } from 'react'
import { Check, Palette } from 'lucide-react'

// daisyUI built-in themes enabled in tailwind.config.js
export const THEMES = [
  { id: 'dark', label: 'Dark', dark: true },
  { id: 'night', label: 'Night', dark: true },
  { id: 'synthwave', label: 'Synthwave', dark: true },
  { id: 'dracula', label: 'Dracula', dark: true },
  { id: 'sunset', label: 'Sunset', dark: true },
  { id: 'dim', label: 'Dim', dark: true },
  { id: 'light', label: 'Light', dark: false },
  { id: 'corporate', label: 'Corporate', dark: false },
  { id: 'retro', label: 'Retro', dark: false },
  { id: 'nord', label: 'Nord', dark: false },
]

export default function ThemePicker({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return
    const onClick = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-label="Choose theme"
        aria-haspopup="true"
        aria-expanded={open}
        className="focus-ring icon-hover rounded-md p-1.5 text-base-content/60"
      >
        <Palette size={18} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="menu"
          aria-label="Themes"
          className="absolute right-0 top-full z-50 mt-2 max-h-96 w-48 overflow-y-auto rounded-xl border border-base-content/10 bg-base-200 p-1.5 shadow-xl"
        >
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="menuitemradio"
              aria-checked={theme === t.id}
              onClick={() => {
                setTheme(t.id)
                setOpen(false)
              }}
              className="focus-ring flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm text-base-content/80 transition-colors hover:bg-base-content/10"
            >
              {/* Live swatch: renders this theme's actual colors via nested data-theme */}
              <span
                data-theme={t.id}
                className="flex shrink-0 items-center gap-0.5 rounded-full border border-base-content/20 bg-base-100 px-1 py-0.5"
                aria-hidden="true"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="h-2 w-2 rounded-full bg-secondary" />
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="flex-1 font-mono text-xs">{t.label}</span>
              {theme === t.id && <Check size={14} className="text-primary" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
