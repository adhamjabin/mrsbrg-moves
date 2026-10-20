import { ArrowIcon } from '../Icons.jsx'

export default function Cta({ accent }) {
  return (
    <section style={{ background: accent, color: '#121212', padding: 'clamp(72px, 9vw, 130px) 0' }}>
      <div className="wrap rv" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 40, flexWrap: 'wrap' }}>
        <h2 className="d" style={{ margin: 0, fontSize: 'clamp(64px, 10vw, 168px)' }}>Bereit für<br />deinen Neustart?</h2>
        <a className="btn b-ink" href="#tarife" style={{ minHeight: 64, padding: '0 30px', fontSize: 19 }}>Jetzt Mitglied werden <ArrowIcon size={22} /></a>
      </div>
    </section>
  )
}
