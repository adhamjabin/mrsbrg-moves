import { ArrowIcon } from '../Icons.jsx'
import { INSTAGRAM_URL } from '../../data.js'

function Rows({ rows, color, valueColor, lineColor }) {
  return (
    <div style={{ borderTop: `1px solid ${lineColor}`, paddingTop: 22, display: 'flex', flexDirection: 'column', gap: 10, color }}>
      {rows.map(([k, v]) => (
        <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16 }}>
          <span>{k}</span>
          <span style={{ color: valueColor, fontWeight: 600 }}>{v}</span>
        </div>
      ))}
    </div>
  )
}

const planStyle = { borderRadius: 4, padding: 'clamp(28px, 4vw, 48px)', display: 'flex', flexDirection: 'column', gap: 28 }
const headRow = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }
const priceRow = { display: 'flex', alignItems: 'flex-end', gap: 12, flexWrap: 'wrap' }
const bigPrice = { fontSize: 'clamp(96px, 10vw, 148px)' }

export default function Tarife({ accent }) {
  return (
    <section id="tarife" className="tt" style={{ background: 'var(--alt-bg)', color: 'var(--alt-fg)', padding: 'clamp(80px, 10vw, 140px) 0' }}>
      <div className="wrap">
        <div className="rv" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap' }}>
          <h2 className="d" style={{ margin: 0, fontSize: 'clamp(60px, 8.5vw, 136px)' }}>Gründer-<br />Tarife</h2>
          <p style={{ margin: 0, maxWidth: 400, fontSize: 19, color: 'var(--alt-muted)' }}>
            Wer zur Eröffnung einsteigt, sichert sich die besten Konditionen. <strong style={{ color: 'var(--alt-fg)' }}>Nur für kurze Zeit.</strong>
          </p>
        </div>

        <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 20 }}>
          <article className="plan rv" style={{ ...planStyle, background: '#121212', color: '#EFEDE8', position: 'relative', overflow: 'hidden' }}>
            <div style={headRow}>
              <span className="k" style={{ fontSize: 18 }}>12 Monate</span>
              <span className="k" style={{ fontSize: 14, background: accent, color: '#121212', padding: '6px 12px', borderRadius: 2 }}>Bester Preis</span>
            </div>
            <div style={priceRow}>
              <span className="d" style={{ ...bigPrice, color: accent }}>29,90</span>
              <span className="k" style={{ fontSize: 20, paddingBottom: 14 }}>€ / Monat</span>
            </div>
            <Rows
              rows={[['Gründer-Konditionen', 'gesichert'], ['Laufzeit', '12 Monate'], ['Erstes Jahr inkl. Startpaket', '407,80 €']]}
              color="#C9C6C0" valueColor="#ffffff" lineColor="#333333"
            />
            <a className="btn b-acc" href="#besuch" style={{ alignSelf: 'flex-start' }}>Jetzt sichern <ArrowIcon /></a>
          </article>

          <article className="plan rv tt" style={{ ...planStyle, background: 'var(--alt-bg)', color: 'var(--alt-fg)', boxShadow: 'inset 0 0 0 2px #121212' }}>
            <div style={headRow}>
              <span className="k" style={{ fontSize: 18 }}>3 Monate</span>
              <span className="k" style={{ fontSize: 14, boxShadow: 'inset 0 0 0 1.5px #121212', padding: '6px 12px', borderRadius: 2 }}>Zum Ausprobieren</span>
            </div>
            <div style={priceRow}>
              <span className="d" style={bigPrice}>34,90</span>
              <span className="k" style={{ fontSize: 20, paddingBottom: 14 }}>€ / Monat</span>
            </div>
            <Rows
              rows={[['Ideal für den Einstieg', 'kurz & flexibel'], ['Laufzeit', '3 Monate'], ['Gesamt inkl. Startpaket', '153,70 €']]}
              color="var(--alt-muted)" valueColor="var(--alt-fg)" lineColor="var(--alt-line)"
            />
            <a className="btn b-ink" href="#besuch" style={{ alignSelf: 'flex-start' }}>Ausprobieren <ArrowIcon /></a>
          </article>
        </div>

        <div className="rv tt" style={{ marginTop: 20, borderRadius: 4, background: 'var(--alt-surface)', padding: '26px clamp(24px, 4vw, 48px)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px 40px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 20, flexWrap: 'wrap' }}>
            <span className="d" style={{ fontSize: 48 }}>+ 49 €</span>
            <span style={{ fontSize: 19 }}><strong>Startpaket</strong> – einmalig bei Vertragsbeginn, gilt für beide Laufzeiten.</span>
          </div>
          <span style={{ color: 'var(--alt-muted)' }}>
            Fragen? Komm vorbei oder schreib uns auf <a href={INSTAGRAM_URL} style={{ color: 'var(--alt-fg)', fontWeight: 700 }}>Instagram</a>.
          </span>
        </div>
      </div>
    </section>
  )
}
