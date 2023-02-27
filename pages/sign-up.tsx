import { useState } from 'react'
import type { NextPage } from 'next'

import { Sun } from 'components/core/layout/sun/sun'
import { Hero } from 'components/core/hero/hero';
import { Register } from 'components/auth/register'
import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";

import styles from 'components/core/layout/index.module.scss'

const SignUp: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const headline = 'Create Account'

  return (
    <div className={styles.Container}>
      <Sun
        color={'sun-blue'}
        />
      <Hero text={headline} />
      {isLoading && <LoadingSpinner />}
      <Register />
    </div>
  )
}

export default SignUp
