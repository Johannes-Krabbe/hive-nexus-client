import type { NextPage } from 'next'

import { Sun } from '../components/xindex/sun/sun'
import { Hero } from '../components/core/hero/hero';

import styles from '../components/core/layout/index.module.scss'

const Home: NextPage = () => {

  const headline = 'YOUNGCASE'
	const subheadline = 'individuell autonom zielorientiert'

  return (
    <div className={styles.container}>
      <Sun
        color={'angular-pp'}
        />
      <Hero
        headline={headline}
        subheadline={subheadline}
        />
    </div>
  )
}

export default Home
