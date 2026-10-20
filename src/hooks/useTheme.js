import { useState } from 'react'
import { useMediaQuery } from './useMediaQuery.js'

const STORAGE_KEY = 'mrsbrg-theme'
const MODES = ['auto', 'light', 'dark']

function readSaved() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return MODES.includes(saved) ? saved : 'auto'
  } catch {
    return 'auto'
  }
}

export function useTheme() {
  const [mode, setModeState] = useState(readSaved)
  const sysLight = useMediaQuery('(prefers-color-scheme: light)')

  const setMode = (m) => {
    setModeState(m)
    try {
      window.localStorage.setItem(STORAGE_KEY, m)
    } catch {
      /* storage unavailable */
    }
  }

  const isLight = mode === 'light' || (mode === 'auto' && sysLight)
  return { mode, setMode, isLight }
}
