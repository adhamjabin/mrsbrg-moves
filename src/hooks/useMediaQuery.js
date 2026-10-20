import { useEffect, useState } from 'react'

function matches(query) {
  try {
    return window.matchMedia(query).matches
  } catch {
    return false
  }
}

export function useMediaQuery(query) {
  const [value, setValue] = useState(() => matches(query))

  useEffect(() => {
    let mq
    try {
      mq = window.matchMedia(query)
    } catch {
      return undefined
    }
    const onChange = () => setValue(mq.matches)
    onChange()
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [query])

  return value
}
