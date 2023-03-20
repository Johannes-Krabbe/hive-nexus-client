import type { NextPage } from 'next'
import { useEffect } from 'react'
import Router from 'next/router'

import { Sun } from 'components/core/layout/sun/sun'
import { Hero } from 'components/core/hero/hero';
import { Register } from 'components/auth/register'
import { useToken } from 'lib/hooks';

import { useAuthContext, AuthProvider } from 'context/auth-context'
import styles from 'components/core/layout/index.module.scss'

const SignUp: NextPage = () => {
  const { authState, isUserAuthenticated, setAuthState } = useAuthContext();

  useEffect(() => {
    isUserAuthenticated
    && Router.push("/")
  }, []);
  const { token, setToken } = useToken();
  const headline = 'Create Account'

  // useEffect(() => {
  //   if (token) {
  //     Router.push('/')
  //     }
  // }, [token]);

  return (
    <div className={styles.Container}>
      <Sun
        color={'sun-blue'}
        />
      <Hero text={headline} />
      <Register />
    </div>
  )
}

export default SignUp
