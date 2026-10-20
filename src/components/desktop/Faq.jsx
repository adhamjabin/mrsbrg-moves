import FaqList from '../FaqList.jsx'
import { faqsDesktop } from '../../data.js'

export default function Faq() {
  return (
    <section id="faq" className="tt" style={{ background: 'var(--alt-bg)', color: 'var(--alt-fg)', padding: 'clamp(80px, 10vw, 140px) 0' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))', gap: 48, alignItems: 'start' }}>
        <div className="rv">
          <h2 className="d" style={{ margin: 0, fontSize: 'clamp(60px, 8.5vw, 136px)' }}>Gut zu<br />wissen</h2>
          <p style={{ margin: '24px 0 0', color: 'var(--alt-muted)', maxWidth: 380, fontSize: 19 }}>
            Deine Frage ist nicht dabei? Schreib uns auf Instagram oder komm einfach vorbei.
          </p>
        </div>
        <FaqList items={faqsDesktop} />
      </div>
    </section>
  )
}
