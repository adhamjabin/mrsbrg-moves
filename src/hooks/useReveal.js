import { useLayoutEffect } from 'react'

// Blendet Elemente mit der Klasse .rv beim Scrollen ein. Funktioniert in allen
// Browsern (auch Safari auf iOS) und animiert nur opacity/transform.
export function useReveal(rootRef, deps = []) {
  useLayoutEffect(() => {
    const root = rootRef.current
    if (!root || typeof IntersectionObserver === 'undefined') return undefined
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined

    const items = Array.from(root.querySelectorAll('.rv:not(.in), .rv-img:not(.in)'))
    const vh = window.innerHeight
    // Was beim Laden schon sichtbar ist, bleibt sichtbar (kein Aufblitzen).
    items.forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.top < vh && r.bottom > 0) el.classList.add('in')
    })
    root.classList.add('rv-on')

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    )
    items.forEach((el) => {
      if (!el.classList.contains('in')) io.observe(el)
    })
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
