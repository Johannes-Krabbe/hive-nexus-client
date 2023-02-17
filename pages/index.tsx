import { useState } from 'react'
import type { NextPage } from 'next'

import Button from 'components/button/button'
import { Sun } from 'components/index/sun/sun'
import { Hero } from 'components/core/hero/hero';
import { PostList } from 'components/index/feed/post-list'
import { CreatePost } from 'components/index/feed/create-post/create-post'
import { SignUp } from 'components/index/sign-up/sign-up'

import { useScrollLock } from 'utils/hooks'

import styles from 'components/core/layout/index.module.scss'

import { postData } from 'lib/data/data'

const Home: NextPage = () => {
  const [authSucceeded, setAuthSucceeded] = useState(false)
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
      <Hero
        headline={headline}
        />
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
          <SignUp
            authSucceeded={authSucceeded}
            toggleAuth={toggleAuth}
          />
        )
      }
    </div>
  )
}

export default Home
