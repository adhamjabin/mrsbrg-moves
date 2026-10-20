import Logo from '../Logo.jsx'
import ThemeSwitch from '../ThemeSwitch.jsx'
import { INSTAGRAM_URL } from '../../data.js'

const colHead = { fontSize: 15, color: 'var(--hi)' }
const linkCol = { marginTop: 6, display: 'flex', flexDirection: 'column' }

export default function Footer({ accent, theme }) {
  return (
    <footer className="tt" style={{ padding: '64px 0 32px' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Logo accent={accent} />
            </div>
            <p style={{ margin: '14px 0 0', color: 'var(--muted)', maxWidth: 280 }}>Dein Fitnessstudio in Marsberg.</p>
          </div>
          <div>
            <div className="k" style={colHead}>Adresse</div>
            <div style={{ marginTop: 12, color: 'var(--muted)' }}>Mönchstraße 50<br />34431 Marsberg</div>
          </div>
          <div>
            <div className="k" style={colHead}>Seite</div>
            <div style={linkCol}>
              <a className="fl" href="#tarife">Tarife</a>
              <a className="fl" href="#angebot">Angebot</a>
              <a className="fl" href="#besuch">Zeiten &amp; Anfahrt</a>
            </div>
          </div>
          <div>
            <div className="k" style={colHead}>Social &amp; Rechtliches</div>
            <div style={linkCol}>
              <a className="fl" href={INSTAGRAM_URL}>Instagram</a>
              <a className="fl" href="#top">Impressum</a>
              <a className="fl" href="#top">Datenschutz</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid var(--line2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
          <span style={{ color: 'var(--faint)', fontSize: 15 }}>© 2026 MRSBRG moves</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <span className="k" id="theme-label" style={{ fontSize: 14, color: 'var(--muted)' }}>Darstellung</span>
            <ThemeSwitch theme={theme} labelledBy="theme-label" />
          </div>
        </div>
      </div>
    </footer>
  )
}
