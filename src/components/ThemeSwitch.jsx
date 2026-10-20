import { MonitorIcon, MoonIcon, PhoneIcon, SunIcon } from './Icons.jsx'

const MODES = [
  { id: 'auto', label: 'System' },
  { id: 'light', label: 'Hell' },
  { id: 'dark', label: 'Dunkel' },
]

export default function ThemeSwitch({ theme, labelledBy, mobile = false, style }) {
  const iconSize = mobile ? 17 : 18
  return (
    <div className="seg" role="group" aria-labelledby={labelledBy} style={style}>
      {MODES.map((m) => {
        const on = theme.mode === m.id
        return (
          <button key={m.id} type="button" className={on ? 'sb on' : 'sb'} onClick={() => theme.setMode(m.id)} aria-pressed={on}>
            {m.id === 'auto' && (mobile ? <PhoneIcon size={iconSize} /> : <MonitorIcon size={iconSize} />)}
            {m.id === 'light' && <SunIcon size={iconSize} />}
            {m.id === 'dark' && <MoonIcon size={iconSize} />}
            <span>{m.label}</span>
          </button>
        )
      })}
    </div>
  )
}
