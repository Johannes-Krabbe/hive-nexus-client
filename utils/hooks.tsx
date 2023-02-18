import { useCallback } from 'react'

export const useScrollLock = () => {
  const lockScroll = useCallback(() => {
    // @ts-ignore
    document.querySelector('html').style.overflow = 'hidden'
  }, [])

  const unlockScroll = useCallback(() => {
    // @ts-ignore
    document.querySelector('html').style.overflow = ''
  }, [])

  return {
    lockScroll,
    unlockScroll,
  }
}
