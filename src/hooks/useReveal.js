import { useLayoutEffect } from 'react'

// Blendet Elemente mit der Klasse .rv beim Scrollen ein. Funktioniert in allen
// Browsern (auch Safari auf iOS) und animiert nur opacity/transform.
// Der Zustand steht im Attribut data-in statt in einer Klasse, damit React ihn
// nicht überschreibt, wenn sich className eines Elements ändert.
export function useReveal(rootRef, deps = []) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || typeof IntersectionObserver === 'undefined') return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    const items = Array.from(root.querySelectorAll('.rv:not([data-in]), .rv-img:not([data-in])'))
    const vh = window.innerHeight
    // Was beim Laden schon sichtbar ist, bleibt sichtbar (kein Aufblitzen).
    items.forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < vh && r.bottom > 0) el.setAttribute('data-in', '')
    })
    root.classList.add('rv-on')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute('data-in', '')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )
    items.forEach((el) => {
      if (!el.hasAttribute('data-in')) io.observe(el)
    })
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
