import { useState } from 'react'
import type { NextPage } from 'next'

import Button from 'components/button/button'
import { Sun } from '../components/index/sun/sun'
import { Hero } from '../components/core/hero/hero';
import { PostList } from '../components/index/feed/post-list'
import { CreatePost } from '../components/index/feed/create-post'

import styles from '../components/core/layout/index.module.scss'

import { postData } from '../lib/data/data'

const Home: NextPage = () => {
  const headline = 'hivenexus'

  const [overlayIsShowing, setOverlayIsShowing] = useState(false)

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
        onClick={() => setOverlayIsShowing(!overlayIsShowing)}
        />
      <PostList posts={postData} />
      {overlayIsShowing && (
          <div className={styles.OverlaySection}>
            <div
              className={styles.OverlayBackground}
              onClick={() => setOverlayIsShowing(!overlayIsShowing)}
            >
              <div className={styles.Close}>
                <a href="#" className={styles.CloseButton}></a>
              </div>
              <div
                className={styles.OverlayContent}
                onClick={(e) => e.stopPropagation()}
              >
                <CreatePost id={'1234'} createdAt={"12.12.1991"} author={'spacjalex'} title={'title title'} content={'hello helllo content sdf sdf sdf '} />
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Home
