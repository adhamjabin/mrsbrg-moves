export default function Logo({ accent, mobile = false, color = 'var(--fg)' }) {
  const dot = mobile ? 8 : 10
  return (
    <>
      <span className="d" style={{ fontSize: mobile ? 28 : 34, color: 'var(--hi)' }}>MRSBRG</span>
      <span style={{ width: dot, height: dot, background: accent }} />
      <span className="k" style={{ fontSize: mobile ? 15 : 18, color, letterSpacing: '.2em' }}>moves</span>
    </>
  )
}
