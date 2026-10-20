import HoursList from '../HoursList.jsx'
import { ArrowIcon, PinIcon } from '../Icons.jsx'
import { INSTAGRAM_URL, ROUTE_URL, hoursRange } from '../../data.js'

export default function Besuch({ accent }) {
  return (
    <section id="besuch" className="tt" style={{ padding: 'clamp(80px, 10vw, 140px) 0' }}>
      <div className="wrap">
        <h2 className="d rv" style={{ margin: 0, fontSize: 'clamp(60px, 8.5vw, 136px)', color: 'var(--hi)' }}>Zeiten &amp;<br />Anfahrt</h2>
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 20 }}>
          <div className="rv tt" style={{ background: 'var(--surface)', borderRadius: 4, padding: 'clamp(24px, 4vw, 44px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 12, flexWrap: 'wrap' }}>
              <div>
                <h3 className="k" style={{ margin: 0, fontSize: 24, color: 'var(--hi)' }}>Betreuungszeiten</h3>
                <div style={{ marginTop: 4, color: 'var(--muted)', fontSize: 15 }}>{hoursRange}</div>
              </div>
              <a href={INSTAGRAM_URL} style={{ color: 'var(--muted)', fontSize: 15 }}>Änderungen auf Instagram</a>
            </div>
            <div style={{ marginTop: 20 }}>
              <HoursList accent={accent} />
            </div>
          </div>
          <div className="rv" style={{ '--d': '.1s', display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="slot tt" style={{ flex: 1, minHeight: 300, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                <PinIcon fill={accent} />
                <span className="k" style={{ fontSize: 13, color: 'var(--faint)' }}>[ Google-Maps-Karte ]</span>
              </div>
            </div>
            <div style={{ background: 'var(--grad)', color: '#121212', borderRadius: 4, padding: 'clamp(24px, 3vw, 36px)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 20, flexWrap: 'wrap' }}>
              <div>
                <div className="k" style={{ fontSize: 15 }}>So findest du uns</div>
                <div className="d" style={{ fontSize: 44, marginTop: 10 }}>Mönchstraße 50<br />34431 Marsberg</div>
              </div>
              <a className="btn b-ink" href={ROUTE_URL}>Route planen <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
