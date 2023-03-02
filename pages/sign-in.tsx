import type { NextPage } from 'next'
import { useEffect } from 'react'
import Router from 'next/router'


import { Sun } from 'components/core/layout/sun/sun'
import { Hero } from 'components/core/hero/hero';
import { Login } from 'components/auth/login'
import { useToken } from 'lib/hooks';


import styles from 'components/core/layout/index.module.scss'

const SignIn: NextPage = () => {
  const { token, setToken } = useToken();
  const headline = 'Welcome to hivenexus'

  useEffect(() => {
    if (token) {
      Router.push('/')
      }
  }, [token]);

  return (
    <div className={styles.Container}>
      <Sun
        color={'sun-blue'}
        />
      <Hero text={headline} />
      <Login setToken={setToken} />
    </div>
  )
}

export default SignIn
