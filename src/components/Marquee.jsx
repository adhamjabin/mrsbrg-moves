import { Fragment } from 'react'

const WORDS = ['Krafttraining', 'Cardio', 'Betreuung', 'Faire Preise', 'Mönchstraße 50']

export default function Marquee({ accent, words = WORDS, fontSize = 46, gap = 36, padY = 18 }) {
  const strip = (key) => (
    <div key={key} className="d" style={{ display: 'flex', alignItems: 'center', gap, padding: `${padY}px ${gap}px ${padY}px 0`, fontSize, whiteSpace: 'nowrap' }}>
      {words.map((w) => (
        <Fragment key={w}>
          <span>{w}</span>
          <span style={{ color: accent }}>/</span>
        </Fragment>
      ))}
    </div>
  )
  return (
    <div className="tt" style={{ background: 'var(--alt-bg)', color: 'var(--alt-fg)', overflow: 'hidden', borderTop: '1px solid var(--alt-fg)', borderBottom: '1px solid var(--alt-fg)' }} aria-hidden="true">
      <div className="mq">{[strip('a'), strip('b')]}</div>
    </div>
  )
}
