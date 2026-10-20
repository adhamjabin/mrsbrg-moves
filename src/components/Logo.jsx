export default function Logo({ accent, mobile = false }) {
  const dot = mobile ? 8 : 10
  return (
    <>
      <span className="d" style={{ fontSize: mobile ? 28 : 34, color: 'var(--hi)' }}>MRSBRG</span>
      <span style={{ width: dot, height: dot, background: 'var(--grad)' }} />
      <span className="k gt" style={{ fontSize: mobile ? 15 : 18, letterSpacing: '.2em' }}>moves</span>
    </>
  )
}
