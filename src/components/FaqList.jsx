import { useState } from 'react'
import { PlusIcon } from './Icons.jsx'

export default function FaqList({ items, mobile = false }) {
  const [open, setOpen] = useState(0)
  const pm = mobile ? 36 : 40
  return (
    <div style={{ marginTop: mobile ? 28 : 0, borderTop: '2px solid var(--alt-fg)' }}>
      {items.map((f, i) => {
        const isOpen = open === i
        return (
          <div key={f.q} className={isOpen ? 'op' : ''} style={{ borderBottom: '1px solid var(--alt-line)' }}>
            <button className="fq" type="button" onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen}>
              <span>{f.q}</span>
              <span className="pm" style={{ width: pm, height: pm, borderRadius: '50%', boxShadow: 'inset 0 0 0 2px #121212', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <PlusIcon size={mobile ? 16 : 18} strokeWidth={mobile ? 2.8 : 2.6} />
              </span>
            </button>
            {isOpen && (
              <p className="ans" style={mobile ? { margin: 0, padding: '0 44px 20px 0', color: 'var(--alt-muted)', fontSize: 16 } : { margin: 0, padding: '0 64px 28px 0', color: 'var(--alt-muted)' }}>
                {f.a}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}
