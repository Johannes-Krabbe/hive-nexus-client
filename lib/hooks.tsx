import { useState, useCallback } from 'react'
import { getCookie, getCookies, setCookie } from 'cookies-next';

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

export const useToken = () => {
  const cookieName = 'hn-token'

  const getToken = () => {
    const token = getCookie(cookieName)

    return token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (token: string) => {
    setCookie(cookieName, token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })

    setToken(token);
};

  return {
    setToken: saveToken,
    token
  }
}

// just for debugging
export const printCookies = () => {
  const cookies = getCookies();
}
