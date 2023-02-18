import { useState } from 'react'
import type { NextPage } from 'next'

import Button from 'components/button/button'
import { Sun } from 'components/core/layout/sun/sun'
import { Hero } from 'components/core/hero/hero';
import { PostList } from 'components/index/feed/post-list'
import { CreatePost } from 'components/index/feed/create-post/create-post'
import { SignIn } from 'components/auth/sign-in'

import { useScrollLock } from 'utils/hooks'

import styles from 'components/core/layout/index.module.scss'

import { postData } from 'lib/data/data'

const Home: NextPage = () => {
  const [authSucceeded, setAuthSucceeded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [overlayIsShowing, setOverlayIsShowing] = useState(false)
  const { lockScroll, unlockScroll } = useScrollLock()

  const toggleAuth = () => {
    setAuthSucceeded(!authSucceeded)
  }

  const toggleOverlay = () => {
    if (overlayIsShowing) {
      unlockScroll()
    } else {
      lockScroll()
    }
    setOverlayIsShowing(!overlayIsShowing)
  }

  const headline = authSucceeded ? 'hivenexus' : 'Welcome to hivenexus'

  return (
    <div className={styles.Container}>
      <Sun
        color={'sun-blue'}
        />
      <div onClick={toggleAuth} className={styles.AuthSimulator}>
        Toggle Auth
      </div>
      <div onClick={() => setIsLoading(!isLoading)} className={styles.LoadingSimulator}>
        Toggle isLoading
      </div>
      <Hero
        headline={headline}
        />
      {isLoading && <div>Loading Spinner Coming Here</div>}
      {authSucceeded ?
        (
          <>
            <Button
              action={'button'}
              variant={'primary'}
              text={'Create post'}
              onClick={toggleOverlay}
              />
            <PostList posts={postData} />
            {overlayIsShowing && (
                <div className={styles.Overlay}>
                  <div
                    className={styles.OverlayBackground}
                    onClick={toggleOverlay}
                  >
                    <div
                      className={styles.OverlayContent}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className={styles.CloseButton}>
                        <a
                          href={'javascript:void(0)'}
                          className={styles.CloseIcon}
                          onClick={toggleOverlay}
                          >
                          &times;
                        </a>
                      </div>
                      <CreatePost />
                    </div>
                  </div>
                </div>
              )}
          </>
        ) : (
          <SignIn />
        )
      }
    </div>
  )
}

export default Home
