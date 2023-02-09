import type { NextPage } from 'next'

import { Sun } from '../components/index/sun/sun'
import { Hero } from '../components/core/hero/hero';

import styles from '../components/core/layout/index.module.scss'

const Home: NextPage = () => {

  const headline = 'hivenexus'
	const subheadline = 'individuell autonom zielorientiert'

  return (
    <div className={styles.container}>
      <Sun
        color={'sun-blue'}
        />
      <Hero
        headline={headline}
        subheadline={subheadline}
        />
        {/* TODO: PostList here */}
    </div>
  )
}

export default Home
