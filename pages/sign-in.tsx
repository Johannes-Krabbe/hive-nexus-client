import type { NextPage } from 'next'
import { useEffect } from 'react'
import Router from 'next/router'

import { Sun } from 'components/core/layout/sun/sun'
import { Hero } from 'components/core/hero/hero';
import { Login } from 'components/auth/login'
import { useToken } from 'lib/hooks';
import { useAuthContext, AuthProvider } from 'context/auth-context'
import styles from 'components/core/layout/index.module.scss'

const SignIn: NextPage = () => {
  const { authState, isUserAuthenticated, setAuthState } = useAuthContext();

  useEffect(() => {
    console.log('authState')
    console.log(JSON.stringify(authState))
    isUserAuthenticated
    && Router.push("/")
  }, []);

  const { token, setToken } = useToken();
  const headline = 'Welcome to hivenexus'

  return (
    <div className={styles.Container}>
      <Sun
        color={'sun-blue'}
        />
      <Hero text={headline} />
      <Login />
    </div>
  )
}

export default SignIn
