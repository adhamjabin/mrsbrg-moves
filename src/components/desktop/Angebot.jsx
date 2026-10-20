import { useState } from 'react'
import { ArrowIcon } from '../Icons.jsx'
import { offers } from '../../data.js'

export default function Angebot({ accent, accentText }) {
  const [active, setActive] = useState(0)
  const current = offers[active]

  return (
    <section id="angebot" className="tt" style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
      <div className="wrap">
        <h2 className="d rv" style={{ margin: 0, fontSize: 'clamp(60px, 8.5vw, 136px)', color: 'var(--hi)' }}>Alles für<br />dein Training</h2>
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: 'clamp(32px, 5vw, 72px)', alignItems: 'start' }}>
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {offers.map((o, i) => {
              const on = active === i
              const pick = () => setActive(i)
              return (
                <button key={o.title} type="button" className={on ? 'row on' : 'row'} onClick={pick} onMouseEnter={pick} onFocus={pick} aria-pressed={on}>
                  <span className="k" style={{ fontSize: 18, color: accentText }}>{'0' + (i + 1)}</span>
                  <span className="d" style={{ fontSize: 'clamp(44px, 5.5vw, 84px)' }}>{o.title}</span>
                  <ArrowIcon className="arw" size={34} strokeWidth={2.2} />
                </button>
              )
            })}
          </div>
          <div style={{ position: 'sticky', top: 110 }}>
            <div style={{ position: 'relative', aspectRatio: '5 / 4', width: '100%', borderRadius: 4, overflow: 'hidden', background: '#1A1A1A' }}>
              {offers.map((o, i) => (
                <img key={o.title} className={active === i ? 'offer-img on' : 'offer-img'} src={o.img} alt={o.alt} aria-hidden={active !== i} />
              ))}
              <span className="k" style={{ position: 'absolute', left: 20, bottom: 18, fontSize: 15, color: '#EFEDE8', background: '#121212', padding: '6px 12px', borderRadius: 2 }}>{current.title}</span>
            </div>
            <div style={{ marginTop: 24, display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <span style={{ flex: 'none', width: 48, height: 3, background: accent, marginTop: 14 }} />
              <p key={active} className="ans" style={{ margin: 0, fontSize: 21, color: 'var(--muted2)', maxWidth: 520 }}>{current.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
