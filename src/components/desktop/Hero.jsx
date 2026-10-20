import heroImg from '../../assets/hero.jpg'
import { ArrowIcon } from '../Icons.jsx'

const facts = [
  { value: '29,90 €', label: 'im Monat bei 12 Monaten Laufzeit' },
  { value: '3 oder 12', label: 'Monate – du entscheidest' },
  { value: 'Kraft + Cardio', label: 'plus Einweisung, wenn jemand vor Ort ist' },
]

export default function Hero({ accent, accentText }) {
  return (
    <section id="top" className="tt" style={{ paddingTop: 'clamp(48px, 7vw, 96px)' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 520px), 1fr))', gap: 'clamp(40px, 5vw, 72px)', alignItems: 'end' }}>
        <div>
          <div className="k in1" style={{ fontSize: 16, color: accentText }}>Fitnessstudio · Mönchstraße 50 · Marsberg</div>
          <h1 className="d" style={{ margin: '22px 0 0', fontSize: 'clamp(76px, 11.5vw, 188px)', color: 'var(--hi)' }}>
            <span className="mask"><span>Neuer Start.</span></span>
            <span className="mask m2"><span style={{ color: accent }}>Neue Energie.</span></span>
          </h1>
          <p className="in2" style={{ margin: '32px 0 0', maxWidth: 520, fontSize: 21, color: 'var(--muted2)' }}>
            Neues Konzept, faire Preise und persönliche Betreuung – dein Studio mitten in Marsberg.
          </p>
          <div className="in2" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
            <a className="btn b-acc" href="#tarife">Gründer-Tarife ansehen <ArrowIcon /></a>
            <a className="btn b-line" href="#besuch" style={{ color: 'var(--fg)' }}>Zeiten &amp; Anfahrt</a>
          </div>
        </div>

        <div className="in3" style={{ position: 'relative' }}>
          <div style={{ aspectRatio: '4 / 5', maxHeight: 640, width: '100%', borderRadius: 4, overflow: 'hidden', background: '#1A1A1A' }}>
            <img className="zoom" src={heroImg} alt="Langhantel mit orangen und schwarzen Hantelscheiben auf dem Studioboden" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div
            className="plate"
            style={{
              position: 'absolute', left: 'clamp(-8px, -2vw, -36px)', bottom: -44, width: 210, height: 210, borderRadius: '50%', background: '#121212',
              boxShadow: `inset 0 0 0 10px ${accent}, inset 0 0 0 14px #121212, inset 0 0 0 16px #3A3A3A, 0 30px 50px -20px rgba(0,0,0,.6)`,
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', transform: 'rotate(-8deg)',
            }}
          >
            <span className="k" style={{ fontSize: 13, color: '#A8A6A1' }}>Gründer-Tarif ab</span>
            <span className="d" style={{ fontSize: 62, color: '#ffffff', marginTop: 4 }}>29,90</span>
            <span className="k" style={{ fontSize: 14, color: accent, marginTop: 6 }}>€ / Monat</span>
          </div>
        </div>
      </div>

      <div className="wrap" style={{ marginTop: 96 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', borderTop: '1px solid var(--line)' }}>
          {facts.map((f, i) => (
            <div key={f.value} style={{ padding: i === 0 ? '28px 24px 32px 0' : '28px 24px 32px', borderLeft: i === 0 ? undefined : '1px solid var(--line)' }}>
              <div className="d" style={{ fontSize: 52, color: 'var(--hi)' }}>{f.value}</div>
              <div style={{ color: 'var(--muted)', marginTop: 8 }}>{f.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
