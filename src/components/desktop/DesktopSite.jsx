import { useRef } from 'react'
import { useReveal } from '../../hooks/useReveal.js'
import Header from './Header.jsx'
import Hero from './Hero.jsx'
import Marquee from '../Marquee.jsx'
import Tarife from './Tarife.jsx'
import Angebot from './Angebot.jsx'
import Instagram from './Instagram.jsx'
import Faq from './Faq.jsx'
import Besuch from './Besuch.jsx'
import Cta from './Cta.jsx'
import Footer from './Footer.jsx'

export default function DesktopSite({ theme, accent, accentText }) {
  const rootRef = useRef(null)
  useReveal(rootRef)
  return (
    <div ref={rootRef} className={'root dsk tt ' + theme.mode} style={{ '--acc': accent }}>
      <a href="#tarife" style={{ display: 'block', background: 'var(--grad)', color: '#121212', textDecoration: 'none' }}>
        <div className="wrap k" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, minHeight: 44, fontSize: 15, textAlign: 'center' }}>
          <span className="live" aria-hidden="true" />
          <span>Neueröffnung in Marsberg · Gründer-Tarife nur für kurze Zeit</span>
        </div>
      </a>
      <Header accent={accent} />
      <main>
        <Hero accent={accent} accentText={accentText} />
        <Marquee accent={accent} />
        <Tarife accent={accent} />
        <Angebot accent={accent} accentText={accentText} />
        <Instagram accentText={accentText} />
        <Faq />
        <Besuch accent={accent} />
        <Cta accent={accent} />
      </main>
      <Footer accent={accent} theme={theme} />
    </div>
  )
}
