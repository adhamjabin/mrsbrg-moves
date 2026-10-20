import DesktopSite from './components/desktop/DesktopSite.jsx'
import MobileSite from './components/mobile/MobileSite.jsx'
import { useMediaQuery } from './hooks/useMediaQuery.js'
import { useTheme } from './hooks/useTheme.js'
import { ACCENT } from './data.js'

export default function App() {
  const isMobile = useMediaQuery('(max-width: 640px)')
  const theme = useTheme()
  // small accent text needs more contrast on light backgrounds
  const accentText = theme.isLight ? '#C2410C' : ACCENT
  const props = { theme, accent: ACCENT, accentText }
  return isMobile ? <MobileSite {...props} /> : <DesktopSite {...props} />
}
