import { hours, todayString } from '../data.js'

export default function HoursList({ accent, mobile = false }) {
  const todayStr = todayString()
  return hours.map((d) => {
    const today = d.date === todayStr
    const rowStyle = {
      display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
      gap: mobile ? 12 : '8px 16px', flexWrap: mobile ? undefined : 'wrap',
      padding: mobile ? `13px ${today ? '10px' : '0'}` : `15px ${today ? '12px' : '0'}`,
      borderBottom: '1px solid var(--line)',
      ...(today ? { boxShadow: `inset 3px 0 0 ${accent}`, background: 'var(--bg)' } : null),
    }
    const timeStyle = d.closed
      ? { color: 'var(--muted)', fontStyle: 'italic', fontSize: mobile ? 15 : undefined }
      : { color: 'var(--hi)', fontWeight: 600, fontVariantNumeric: 'tabular-nums', fontSize: mobile ? 15 : undefined }
    return (
      <div key={d.date} style={rowStyle}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: mobile ? 8 : 10, flexWrap: mobile ? undefined : 'wrap' }}>
          <span style={{ fontWeight: 700, color: 'var(--fg)', fontSize: mobile ? 16 : undefined }}>{mobile ? d.short : d.day}</span>
          <span style={{ color: 'var(--muted)', fontSize: mobile ? 14 : 15, fontVariantNumeric: 'tabular-nums' }}>{d.date}</span>
          {today && (
            <span className="k" style={{ fontSize: mobile ? 11 : 12, background: accent, color: '#121212', padding: mobile ? '2px 6px' : '2px 8px', borderRadius: 2 }}>Heute</span>
          )}
        </div>
        <span style={timeStyle}>{mobile ? d.timeShort : d.time}</span>
      </div>
    )
  })
}
