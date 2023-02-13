import type { NextPage } from 'next'

import Button from 'components/button/button'
import { Sun } from '../components/index/sun/sun'
import { Hero } from '../components/core/hero/hero';
import { PostList } from '../components/index/feed/post-list'

import styles from '../components/core/layout/index.module.scss'

import { postData } from '../lib/data/data'

const Home: NextPage = () => {
  const headline = 'hivenexus'

  return (
    <div className={styles.Container}>
      <Sun
        color={'sun-blue'}
        />
      <Hero
        headline={headline}
        />
      <Button
        action={'button'}
        variant={'primary'}
        text={'Create post'}
        />
      <PostList posts={postData} />
    </div>
  )
}

export default Home
