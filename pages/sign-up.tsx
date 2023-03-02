import type { NextPage } from 'next'

import { Sun } from 'components/core/layout/sun/sun'
import { Hero } from 'components/core/hero/hero';
import { Register } from 'components/auth/register'

import styles from 'components/core/layout/index.module.scss'

const SignUp: NextPage = () => {
  const headline = 'Create Account'

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
