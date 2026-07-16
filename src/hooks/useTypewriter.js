import { useEffect, useState } from 'react'

/**
 * Typewriter loop over a list of phrases: type → hold → delete → next.
 *
 * Starts fully typed on the first phrase so there is no flash of an empty
 * heading on load (and test/SSR snapshots read real text). Honors
 * prefers-reduced-motion by freezing on the first phrase.
 */
export default function useTypewriter(
  phrases,
  { typeMs = 65, deleteMs = 30, holdMs = 2200, gapMs = 400 } = {},
) {
  const [state, setState] = useState({ index: 0, text: phrases[0] ?? '', phase: 'type' })

  useEffect(() => {
    if (phrases.length < 2) return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    const phrase = phrases[state.index]
    let delay
    let next

    if (state.phase === 'delete') {
      if (state.text) {
        delay = deleteMs
        next = { ...state, text: state.text.slice(0, -1) }
      } else {
        delay = gapMs
        next = { index: (state.index + 1) % phrases.length, text: '', phase: 'type' }
      }
    } else if (state.text.length < phrase.length) {
      delay = typeMs
      next = { ...state, text: phrase.slice(0, state.text.length + 1) }
    } else {
      // Phrase fully typed: hold it on screen, then start deleting.
      delay = holdMs
      next = { ...state, phase: 'delete' }
    }

    const timer = setTimeout(() => setState(next), delay)
    return () => clearTimeout(timer)
  }, [state, phrases, typeMs, deleteMs, holdMs, gapMs])

  return state.text
}
