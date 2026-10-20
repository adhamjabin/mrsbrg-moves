import { InstagramIcon } from '../Icons.jsx'
import { INSTAGRAM_URL, instagramPosts } from '../../data.js'

export default function Instagram({ accentText }) {
  return (
    <section className="tt" style={{ padding: '0 0 clamp(80px, 10vw, 140px)' }}>
      <div className="wrap">
        <div className="rv" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', borderTop: '1px solid var(--line)', paddingTop: 48 }}>
          <div>
            <div className="k" style={{ fontSize: 16, color: accentText }}>@mrsbrg_moves</div>
            <h2 className="d" style={{ margin: '14px 0 0', fontSize: 'clamp(44px, 5.5vw, 84px)', color: 'var(--hi)' }}>Neuigkeiten zuerst<br />auf Instagram</h2>
          </div>
          <a className="btn b-line" href={INSTAGRAM_URL} style={{ color: 'var(--fg)' }}>
            <InstagramIcon />
            Folgen
          </a>
        </div>
        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: 12 }}>
          {instagramPosts.map((p, i) => (
            <a key={p.img} className="ig rv" href={INSTAGRAM_URL} aria-label={'Instagram-Beitrag ' + (i + 1)} style={{ '--d': i * 0.08 + 's', aspectRatio: '1', borderRadius: 4, textDecoration: 'none' }}>
              <img decoding="async" src={p.img} alt={p.alt} loading="lazy" />
              <span className="ov k" style={{ fontSize: 14 }}>Auf Instagram ansehen</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
