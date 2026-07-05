import { useEffect } from 'react'

/**
 * Scroll-reveal via IntersectionObserver — no animation library.
 * Any element with the `.reveal` class gets `.is-visible` when it
 * enters the viewport (once).
 *
 * A MutationObserver watches for `.reveal` elements added AFTER mount
 * (e.g. project cards re-mounted by the filter buttons), so dynamic
 * content is revealed too instead of staying at opacity 0.
 */
export default function useReveal() {
  useEffect(() => {
    // No IntersectionObserver (old browser / test env): show everything,
    // including nodes added later.
    if (!('IntersectionObserver' in window)) {
      const showAll = () =>
        document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => {
          el.classList.add('is-visible')
        })
      showAll()
      const mo = new MutationObserver(showAll)
      mo.observe(document.body, { childList: true, subtree: true })
      return () => mo.disconnect()
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    const observe = (root) => {
      if (root.nodeType !== 1) return
      if (root.matches?.('.reveal:not(.is-visible)')) io.observe(root)
      root.querySelectorAll?.('.reveal:not(.is-visible)').forEach((el) => io.observe(el))
    }

    observe(document.body)

    // Watch for reveal elements mounted after initial render
    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => m.addedNodes.forEach(observe))
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
