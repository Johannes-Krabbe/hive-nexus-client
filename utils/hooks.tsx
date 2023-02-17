import { useCallback } from 'react'

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    document.querySelector('html').style.overflow = 'hidden'
  }, [])

  const unlockScroll = useCallback(() => {
    document.querySelector('html').style.overflow = ''
  }, [])

  return {
    lockScroll,
    unlockScroll,
  }
}
