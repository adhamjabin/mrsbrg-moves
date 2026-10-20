import { useRef, useState } from 'react'
import { useReveal } from '../../hooks/useReveal.js'
import heroImg from '../../assets/hero.webp'
import Logo from '../Logo.jsx'
import Marquee from '../Marquee.jsx'
import FaqList from '../FaqList.jsx'
import HoursList from '../HoursList.jsx'
import ThemeSwitch from '../ThemeSwitch.jsx'
import { ArrowIcon, CloseIcon, InstagramIcon, MenuIcon, PinOutlineIcon } from '../Icons.jsx'
import { INSTAGRAM_URL, ROUTE_URL, faqsMobile, hoursRange, instagramPosts, offers } from '../../data.js'

const MARQUEE_WORDS = ['Krafttraining', 'Cardio', 'Betreuung', 'Faire Preise']

const facts = [
  { value: '29,90 €', label: 'im Monat bei 12 Monaten' },
  { value: '3 oder 12', label: 'Monate – du entscheidest' },
  { value: 'Kraft + Cardio', label: 'plus Einweisung vor Ort' },
]

const h2 = { margin: 0, fontSize: 64 }
const imgFill = { width: '100%', height: '100%', objectFit: 'cover', display: 'block' }

export default function MobileSite({ theme, accent, accentText }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [plan, setPlan] = useState(12)
  const closeMenu = () => setMenuOpen(false)
  const rootRef = useRef(null)
  useReveal(rootRef)

  const menuLink = { fontSize: 56, color: 'var(--hi)', textDecoration: 'none', padding: '10px 0', borderBottom: '1px solid var(--line)' }

  return (
    <div ref={rootRef} className={'root mob tt ' + theme.mode} style={{ '--acc': accent }}>
      {/* Announcement */}
      <a href="#tarife" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, minHeight: 40, padding: '0 16px', background: accent, color: '#121212', textDecoration: 'none' }}>
        <span className="live" aria-hidden="true" />
        <span className="k" style={{ fontSize: 13 }}>Neueröffnung · Gründer-Tarife</span>
      </a>

      {/* Header */}
      <header className="tt" style={{ position: 'sticky', top: 0, zIndex: 40, background: 'var(--nav)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--line2)' }}>
        <div className="px" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', minHeight: 64, paddingRight: 10 }}>
          <a href="#top" onClick={closeMenu} aria-label="MRSBRG moves – nach oben" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <Logo accent={accent} mobile />
          </a>
          <button type="button" className="ib" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}>
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {menuOpen && (
          <nav className="menu tt" aria-label="Hauptnavigation" style={{ position: 'absolute', left: 0, right: 0, top: 64, height: 'calc(100dvh - 64px)', minHeight: 560, background: 'var(--bg)', padding: '28px 20px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderTop: '1px solid var(--line2)', overflowY: 'auto' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <a className="ml d" href="#tarife" onClick={closeMenu} style={menuLink}>Tarife</a>
              <a className="ml d" href="#angebot" onClick={closeMenu} style={menuLink}>Angebot</a>
              <a className="ml d" href="#faq" onClick={closeMenu} style={menuLink}>Fragen</a>
              <a className="ml d" href="#besuch" onClick={closeMenu} style={menuLink}>Zeiten</a>
              <a className="ml d" href={INSTAGRAM_URL} style={{ ...menuLink, color: accentText, borderBottom: 0 }}>Instagram</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a className="btn b-acc" href="#tarife" onClick={closeMenu}>Mitglied werden</a>
              <div style={{ color: 'var(--muted)', fontSize: 15, textAlign: 'center' }}>Mönchstraße 50 · 34431 Marsberg</div>
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* HERO */}
        <section id="top" className="tt" style={{ paddingTop: 36 }}>
          <div className="px">
            <div className="k in1" style={{ fontSize: 14, color: accentText }}>Fitnessstudio · Marsberg</div>
            <h1 className="d" style={{ margin: '14px 0 0', fontSize: 'min(76px, 19.5vw)', color: 'var(--hi)' }}>
              <span className="mask"><span>Neuer Start.</span></span>
              <span className="mask m2"><span style={{ color: accent }}>Neue Energie.</span></span>
            </h1>
            <p className="in2" style={{ margin: '20px 0 0', fontSize: 18, color: 'var(--muted2)' }}>
              Neues Konzept, faire Preise und persönliche Betreuung – mitten in Marsberg.
            </p>
          </div>

          <div className="in2" style={{ position: 'relative', margin: '28px 20px 0' }}>
            <div style={{ aspectRatio: '4 / 5', borderRadius: 4, overflow: 'hidden', background: '#1A1A1A' }}>
              <img decoding="async" className="zoom" src={heroImg} alt="Kurzhanteln im Studio" fetchpriority="high" style={imgFill} />
            </div>
            <div
              className="plate"
              style={{
                position: 'absolute', right: -6, bottom: -30, width: 150, height: 150, borderRadius: '50%', background: '#121212',
                boxShadow: `inset 0 0 0 8px ${accent}, inset 0 0 0 11px #121212, inset 0 0 0 13px #3A3A3A, 0 20px 40px -16px rgba(0,0,0,.6)`,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', transform: 'rotate(-8deg)',
              }}
            >
              <span className="k" style={{ fontSize: 11, color: '#A8A6A1' }}>Gründer-Tarif ab</span>
              <span className="d" style={{ fontSize: 44, color: '#ffffff', marginTop: 2 }}>29,90</span>
              <span className="k" style={{ fontSize: 12, color: accent, marginTop: 4 }}>€ / Monat</span>
            </div>
          </div>

          <div className="px" style={{ marginTop: 52, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a className="btn b-acc" href="#tarife">Gründer-Tarife ansehen <ArrowIcon /></a>
            <a className="btn b-line" href="#besuch" style={{ color: 'var(--fg)' }}>Zeiten &amp; Anfahrt</a>
          </div>

          <div className="snap" style={{ marginTop: 36, paddingBottom: 36 }}>
            {facts.map((f, i) => (
              <div key={f.value} className="rv" style={{ '--d': i * 0.08 + 's', width: 210, padding: 18, borderRadius: 4, background: 'var(--surface)' }}>
                <div className="d" style={{ fontSize: 40, color: 'var(--hi)' }}>{f.value}</div>
                <div style={{ color: 'var(--muted)', fontSize: 15, marginTop: 6 }}>{f.label}</div>
              </div>
            ))}
          </div>
        </section>

        <Marquee accent={accent} words={MARQUEE_WORDS} fontSize={34} gap={24} padY={14} />

        {/* TARIFE */}
        <section id="tarife" className="tt" style={{ background: 'var(--alt-bg)', color: 'var(--alt-fg)', padding: '64px 0' }}>
          <div className="px">
            <h2 className="d rv" style={h2}>Gründer-<br />Tarife</h2>
            <p className="rv" style={{ margin: '14px 0 0', color: 'var(--alt-muted)' }}>
              Zur Eröffnung die besten Konditionen sichern. <strong style={{ color: 'var(--alt-fg)' }}>Nur für kurze Zeit.</strong>
            </p>

            <div className="rv" role="group" aria-label="Laufzeit wählen" style={{ marginTop: 28, display: 'flex', gap: 4, padding: 4, borderRadius: 999, background: 'var(--alt-surface)' }}>
              <button type="button" className={plan === 12 ? 'pill on' : 'pill'} onClick={() => setPlan(12)} aria-pressed={plan === 12}>12 Monate</button>
              <button type="button" className={plan === 3 ? 'pill on' : 'pill'} onClick={() => setPlan(3)} aria-pressed={plan === 3}>3 Monate</button>
            </div>

            {plan === 12 ? (
              <PlanCard
                key="12"
                dark
                accent={accent}
                months="12 Monate"
                badge="Bester Preis"
                price="29,90"
                rows={[['Gründer-Konditionen', 'gesichert'], ['Erstes Jahr inkl. Start', '407,80 €']]}
                cta="Jetzt sichern"
              />
            ) : (
              <PlanCard
                key="3"
                accent={accent}
                months="3 Monate"
                badge="Zum Ausprobieren"
                price="34,90"
                rows={[['Laufzeit', '3 Monate'], ['Gesamt inkl. Start', '153,70 €']]}
                cta="Ausprobieren"
              />
            )}

            <div className="tt rv" style={{ marginTop: 12, borderRadius: 4, background: 'var(--alt-surface)', padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <span className="d" style={{ fontSize: 38, flex: 'none' }}>+ 49 €</span>
              <span style={{ fontSize: 15, lineHeight: 1.4 }}><strong>Startpaket</strong> einmalig bei Vertragsbeginn, gilt für beide Laufzeiten.</span>
            </div>
          </div>
        </section>

        {/* ANGEBOT */}
        <section id="angebot" className="tt" style={{ padding: '64px 0' }}>
          <div className="px">
            <h2 className="d rv" style={{ ...h2, color: 'var(--hi)' }}>Alles für<br />dein Training</h2>
          </div>
          <div className="k px" style={{ marginTop: 14, fontSize: 13, color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
            Wischen <ArrowIcon size={16} />
          </div>
          <div className="snap" style={{ marginTop: 18 }}>
            {offers.map((o, i) => (
              <article key={o.title} className="rv" style={{ '--d': i * 0.1 + 's', width: 'min(300px, 78vw)', marginRight: i === offers.length - 1 ? 20 : undefined }}>
                <div className="rv-img" style={{ '--d': i * 0.1 + 's', aspectRatio: '5 / 4', borderRadius: 4, overflow: 'hidden', background: '#1A1A1A' }}>
                  <img decoding="async" src={o.img} alt={o.alt} loading="lazy" style={imgFill} />
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 16 }}>
                  <span className="k" style={{ fontSize: 15, color: accentText }}>{'0' + (i + 1)}</span>
                  <h3 className="d" style={{ margin: 0, fontSize: 40, color: 'var(--hi)' }}>{o.title}</h3>
                </div>
                <p style={{ margin: '8px 0 0', color: 'var(--muted2)', fontSize: 16 }}>{o.short}</p>
              </article>
            ))}
          </div>
        </section>

        {/* INSTAGRAM */}
        <section className="tt" style={{ padding: '0 0 64px' }}>
          <div className="px">
            <div className="rv" style={{ borderTop: '1px solid var(--line)', paddingTop: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 12 }}>
              <div>
                <div className="k" style={{ fontSize: 14, color: accentText }}>@mrsbrg_moves</div>
                <h2 className="d" style={{ margin: '10px 0 0', fontSize: 44, color: 'var(--hi)' }}>News auf<br />Instagram</h2>
              </div>
              <a className="ib" href={INSTAGRAM_URL} aria-label="MRSBRG moves auf Instagram" style={{ boxShadow: 'inset 0 0 0 2px var(--line)', color: 'var(--fg)' }}>
                <InstagramIcon size={22} />
              </a>
            </div>
            <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 8 }}>
              {instagramPosts.map((p, i) => (
                <a key={p.img} className="rv rv-img" href={INSTAGRAM_URL} aria-label={'Instagram-Beitrag ' + (i + 1)} style={{ '--d': (i % 2) * 0.1 + 's', display: 'block', aspectRatio: '1', borderRadius: 4, overflow: 'hidden' }}>
                  <img decoding="async" src={p.img} alt={p.alt} loading="lazy" style={imgFill} />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="tt" style={{ background: 'var(--alt-bg)', color: 'var(--alt-fg)', padding: '64px 0' }}>
          <div className="px">
            <h2 className="d rv" style={h2}>Gut zu<br />wissen</h2>
            <FaqList items={faqsMobile} mobile />
          </div>
        </section>

        {/* BESUCH */}
        <section id="besuch" className="tt" style={{ padding: '64px 0' }}>
          <div className="px">
            <h2 className="d rv" style={{ ...h2, color: 'var(--hi)' }}>Zeiten &amp;<br />Anfahrt</h2>

            <div className="tt rv" style={{ marginTop: 28, background: 'var(--surface)', borderRadius: 4, padding: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10 }}>
                <h3 className="k" style={{ margin: 0, fontSize: 20, color: 'var(--hi)' }}>Betreuungszeiten</h3>
                <span style={{ color: 'var(--muted)', fontSize: 14 }}>{hoursRange}</span>
              </div>
              <div style={{ marginTop: 10 }}>
                <HoursList accent={accent} mobile />
              </div>
              <a href={INSTAGRAM_URL} style={{ display: 'inline-block', marginTop: 14, color: 'var(--muted)', fontSize: 14 }}>Änderungen auf Instagram</a>
            </div>

            <div className="rv" style={{ marginTop: 12, background: accent, color: '#121212', borderRadius: 4, padding: '22px 20px', display: 'flex', flexDirection: 'column', gap: 18 }}>
              <div>
                <div className="k" style={{ fontSize: 14 }}>So findest du uns</div>
                <div className="d" style={{ fontSize: 40, marginTop: 8 }}>Mönchstraße 50<br />34431 Marsberg</div>
              </div>
              <a className="btn b-ink" href={ROUTE_URL}>
                <PinOutlineIcon />
                Route planen
              </a>
            </div>
            <div className="slot tt rv" style={{ marginTop: 12, height: 200, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span className="k" style={{ fontSize: 12, color: 'var(--faint)' }}>[ Google-Maps-Karte ]</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: accent, color: '#121212', padding: '56px 20px' }}>
          <h2 className="d rv" style={h2}>Bereit für deinen Neustart?</h2>
          <a className="btn b-ink" href="#tarife" style={{ marginTop: 28 }}>Jetzt Mitglied werden</a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="tt" style={{ padding: '44px 20px 120px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className="d" style={{ fontSize: 30, color: 'var(--hi)' }}>MRSBRG</span>
          <span style={{ width: 8, height: 8, background: accent }} />
          <span className="k" style={{ fontSize: 15, letterSpacing: '.2em' }}>moves</span>
        </div>
        <p style={{ margin: '10px 0 0', color: 'var(--muted)', fontSize: 16 }}>Mönchstraße 50 · 34431 Marsberg</p>

        <div style={{ marginTop: 28 }}>
          <div className="k" id="m-theme-label" style={{ fontSize: 13, color: 'var(--muted)' }}>Darstellung</div>
          <ThemeSwitch theme={theme} labelledBy="m-theme-label" mobile style={{ marginTop: 10 }} />
        </div>

        <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: '4px 20px' }}>
          <a href={INSTAGRAM_URL} style={{ color: 'var(--muted)', textDecoration: 'none', padding: '10px 0' }}>Instagram</a>
          <a href="#top" style={{ color: 'var(--muted)', textDecoration: 'none', padding: '10px 0' }}>Impressum</a>
          <a href="#top" style={{ color: 'var(--muted)', textDecoration: 'none', padding: '10px 0' }}>Datenschutz</a>
        </div>
        <div style={{ marginTop: 16, color: 'var(--faint)', fontSize: 14 }}>© 2026 MRSBRG moves</div>
      </footer>

      {/* Sticky bottom bar */}
      <div className="bar tt" style={{ position: 'sticky', bottom: 0, zIndex: 35, marginTop: -88, background: 'var(--nav)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)', borderTop: '1px solid var(--line2)', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ lineHeight: 1.15 }}>
          <div className="k" style={{ fontSize: 12, color: 'var(--muted)' }}>Gründer-Tarif ab</div>
          <div className="d" style={{ fontSize: 30, color: 'var(--hi)' }}>
            29,90 €<span className="k" style={{ fontSize: 13, color: 'var(--muted)' }}> / Monat</span>
          </div>
        </div>
        <a className="btn b-acc" href="#tarife" style={{ minHeight: 52, padding: '0 18px', fontSize: 16 }}>Mitglied werden</a>
      </div>
    </div>
  )
}

function PlanCard({ dark = false, accent, months, badge, price, rows, cta }) {
  const style = dark
    ? { background: '#121212', color: '#EFEDE8' }
    : { background: 'var(--alt-bg)', color: 'var(--alt-fg)', boxShadow: 'inset 0 0 0 2px #121212' }
  const badgeStyle = dark
    ? { background: accent, color: '#121212' }
    : { boxShadow: 'inset 0 0 0 1.5px #121212' }
  return (
    <article className={dark ? 'swap' : 'swap tt'} style={{ ...style, marginTop: 14, borderRadius: 4, padding: '26px 22px', display: 'flex', flexDirection: 'column', gap: 22 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
        <span className="k" style={{ fontSize: 16 }}>{months}</span>
        <span className="k" style={{ ...badgeStyle, fontSize: 13, padding: '5px 10px', borderRadius: 2 }}>{badge}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10 }}>
        <span className="d" style={{ fontSize: 'min(104px, 26vw)', color: dark ? accent : undefined }}>{price}</span>
        <span className="k" style={{ fontSize: 17, paddingBottom: 10 }}>€ / Monat</span>
      </div>
      <div style={{ borderTop: `1px solid ${dark ? '#333333' : 'var(--alt-line)'}`, paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 8, color: dark ? '#C9C6C0' : 'var(--alt-muted)', fontSize: 16 }}>
        {rows.map(([k, v]) => (
          <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <span>{k}</span>
            <span style={{ color: dark ? '#ffffff' : 'var(--alt-fg)', fontWeight: 600 }}>{v}</span>
          </div>
        ))}
      </div>
      <a className={dark ? 'btn b-acc' : 'btn b-ink'} href="#besuch">{cta}</a>
    </article>
  )
}
