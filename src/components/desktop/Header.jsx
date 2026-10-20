import Logo from '../Logo.jsx'

export default function Header({ accent }) {
  return (
    <header className="tt" style={{ position: 'sticky', top: 0, zIndex: 30, background: 'var(--nav)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--line2)' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, minHeight: 76, flexWrap: 'wrap' }}>
        <a href="#top" aria-label="MRSBRG moves – nach oben" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Logo accent={accent} />
        </a>
        <nav aria-label="Hauptnavigation" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a className="nl hs" href="#tarife">Tarife</a>
          <a className="nl hs" href="#angebot">Angebot</a>
          <a className="nl hs" href="#faq">Fragen</a>
          <a className="nl hs" href="#besuch">Zeiten &amp; Anfahrt</a>
          <a className="btn b-acc" href="#tarife" style={{ minHeight: 46, padding: '0 20px', fontSize: 16 }}>Mitglied werden</a>
        </nav>
      </div>
    </header>
  )
}
