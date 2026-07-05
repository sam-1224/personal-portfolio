/**
 * UI smoke & interaction tests — run with `npm test`.
 * Covers rendering, daisyUI theme switching, dark/light toggle,
 * project filtering, and resume download affordances.
 */
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { render, screen, within, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App.jsx'

beforeEach(() => {
  document.documentElement.setAttribute('data-theme', 'dark')
  localStorage.clear()
})

afterEach(() => {
  cleanup()
})

describe('rendering', () => {
  it('renders the hero headline as the single h1', () => {
    render(<App />)
    const h1s = screen.getAllByRole('heading', { level: 1 })
    expect(h1s).toHaveLength(1)
    expect(h1s[0].textContent).toContain('I test AI in production.')
  })

  it('renders all main sections', () => {
    render(<App />)
    for (const id of ['about', 'experience', 'projects', 'skills', 'achievements', 'contact']) {
      expect(document.getElementById(id)).toBeTruthy()
    }
  })

  it('renders the decorative background blobs (hidden from a11y tree)', () => {
    const { container } = render(<App />)
    const bg = container.querySelector('[aria-hidden="true"].fixed.-z-10')
    expect(bg).toBeTruthy()
    expect(bg.querySelectorAll('.blur-3xl').length).toBeGreaterThanOrEqual(3)
  })

  it('exposes resume downloads in nav, hero, and footer', () => {
    render(<App />)
    const downloads = document.querySelectorAll('a[download]')
    expect(downloads.length).toBeGreaterThanOrEqual(3)
    downloads.forEach((a) => expect(a.getAttribute('href')).toContain('resume.pdf'))
  })
})

describe('daisyUI theme switching', () => {
  it('opens the theme picker and applies a chosen theme', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getAllByRole('button', { name: /choose theme/i })[0])
    const menu = screen.getByRole('menu', { name: /themes/i })
    await user.click(within(menu).getByRole('menuitemradio', { name: /synthwave/i }))
    expect(document.documentElement.getAttribute('data-theme')).toBe('synthwave')
    expect(localStorage.getItem('theme')).toBe('synthwave')
  })

  it('toggles between dark and light via the sun/moon button', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getAllByRole('button', { name: /switch to light theme/i })[0])
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
    await user.click(screen.getAllByRole('button', { name: /switch to dark theme/i })[0])
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })
})

describe('project filters', () => {
  it('filters projects by tag and restores with All', async () => {
    const user = userEvent.setup()
    render(<App />)
    const group = screen.getByRole('group', { name: /filter projects/i })

    await user.click(within(group).getByRole('button', { name: 'AI' }))
    expect(screen.queryByText('SpeakEasy')).toBeNull()
    expect(screen.getByText('Recall')).toBeTruthy()

    await user.click(within(group).getByRole('button', { name: 'Full-Stack' }))
    expect(screen.getByText('SpeakEasy')).toBeTruthy()
    expect(screen.queryByText('Recall')).toBeNull()

    await user.click(within(group).getByRole('button', { name: 'All' }))
    expect(screen.getByText('Recall')).toBeTruthy()
    expect(screen.getByText('SpeakEasy')).toBeTruthy()
    expect(screen.getByText('TL;DW')).toBeTruthy()
  })

  it('marks the active filter with aria-pressed', async () => {
    const user = userEvent.setup()
    render(<App />)
    const group = screen.getByRole('group', { name: /filter projects/i })
    const aiBtn = within(group).getByRole('button', { name: 'AI' })
    await user.click(aiBtn)
    expect(aiBtn.getAttribute('aria-pressed')).toBe('true')
  })
})

describe('regressions', () => {
  it('keeps project cards visible after switching filters multiple times', async () => {
    // Bug: .reveal cards re-mounted by a filter change were never observed,
    // so they stayed at opacity 0 (blank grid) from the second click onward.
    const user = userEvent.setup()
    render(<App />)
    const group = screen.getByRole('group', { name: /filter projects/i })

    await user.click(within(group).getByRole('button', { name: 'Full-Stack' }))
    await user.click(within(group).getByRole('button', { name: 'All' }))
    await user.click(within(group).getByRole('button', { name: 'Automation' }))
    await user.click(within(group).getByRole('button', { name: 'All' }))

    const cards = document.querySelectorAll('#projects .reveal')
    expect(cards.length).toBeGreaterThanOrEqual(4)
    const hidden = document.querySelectorAll('#projects .reveal:not(.is-visible)')
    expect(hidden.length).toBe(0)
  })

  it('shows the copyright line', () => {
    render(<App />)
    expect(screen.getByText(/© 2026 Saumitra Dubey\. All rights reserved\./)).toBeTruthy()
  })
})
