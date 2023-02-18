import { useState } from 'react'
import type { NextPage } from 'next'

import { Sun } from 'components/core/layout/sun/sun'
import { Hero } from 'components/core/hero/hero';
import { Register } from 'components/auth/register'

import styles from 'components/core/layout/index.module.scss'

const SignUp: NextPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const headline = 'Create Account'

  return (
    <div className={styles.Container}>
      <Sun
        color={'sun-blue'}
        />
      <div onClick={() => setIsLoading(!isLoading)} className={styles.LoadingSimulator}>
        Toggle isLoading
      </div>
      <Hero text={headline} />
      {isLoading && <div>Loading Spinner Coming Here</div>}
      <Register />
    </div>
  )
}

export default SignUp
