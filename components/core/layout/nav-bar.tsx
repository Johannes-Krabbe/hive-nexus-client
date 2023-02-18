import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from 'components/button/button'

import { navLinks } from 'lib/data/data'

import { debounce } from 'utils/helpers'
import { useScrollLock } from 'utils/hooks'

import { INavLink } from 'types/interfaces'

import styles from './nav-bar.module.scss'

import Burger from 'public/assets/images/core/burger-opened.svg'

interface OverlayNavProps {
  navLinks: INavLink[]
  overlayIsShowing: boolean
  toggleOverlay: () => void
}

interface NavLinkListProps {
  navLinks: INavLink[]
  toggleOverlay?: () => void
}

export const NavBar = () => {
  const [overlayIsShowing, setOverlayIsShowing] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const { lockScroll, unlockScroll } = useScrollLock()

  const toggleOverlay = () => {
    if (overlayIsShowing) {
      unlockScroll()
    } else {
      lockScroll()
    }
    setOverlayIsShowing(!overlayIsShowing)
  }

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 80) ||
        currentScrollPos < 10
    )
    setPrevScrollPos(currentScrollPos)
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, visible, handleScroll])

  const containerStyles = `${styles.Container} ${
    visible ? '' : styles.invisible
  }`

  return (
    <header className={containerStyles}>
      <div className={styles.Wrapper}>
        <div className={styles.Brand}>
          <Link legacyBehavior href="/">
            Logo
          </Link>
        </div>
        <nav id={'nav'} className={styles.Nav}>
          <div className={styles.Burger} onClick={toggleOverlay}>
            <Image src={Burger} alt="Menu Icon" />
          </div>
          <NavLinksList navLinks={navLinks} />
        </nav>
        <div className={styles.UserActions}>
          <Button
            action={'button'}
            variant={'dark'}
            text={'Log Out'}
            onClick={() => {console.log(`User Logged Out`)}}
          />
        </div>
      </div>
      {overlayIsShowing && <div className={styles.Shadow} />}
      <OverlayNav
        navLinks={navLinks}
        overlayIsShowing={overlayIsShowing}
        toggleOverlay={toggleOverlay}
      />
    </header>
  )
}

const OverlayNav = ({
  navLinks,
  overlayIsShowing,
  toggleOverlay,
}: OverlayNavProps) => {
  return (
    <div
      className={styles.Overlay}
      style={{ width: overlayIsShowing ? '85vw' : '0' }}
    >
      <nav id={'nav'} className={styles.Nav}>
        <div className={styles.TopBar}>
          <a
            href={'javascript:void(0)'}
            className={styles.CloseIcon}
            onClick={toggleOverlay}
          >
            &times;
          </a>
        </div>
        <NavLinksList navLinks={navLinks} toggleOverlay={toggleOverlay} />
        <div>
          <Button
            action={'button'}
            variant={'dark'}
            text={'Log Out'}
            onClick={() => {console.log(`User Logged Out`)}}
            />
        </div>
      </nav>
      <div
        className={styles.BottomBar}
        style={{ display: overlayIsShowing ? 'flex' : 'none' }}
      >
        <Link legacyBehavior href={'/privacypolicy'}>
          <a onClick={toggleOverlay} className={styles.Item}>
            Datenschutzerklärung
          </a>
        </Link>
        <span className={styles.Item}>•</span>
        <Link legacyBehavior href={'/imprint'}>
          <a onClick={toggleOverlay} className={styles.Item}>
            Impressum
          </a>
        </Link>
      </div>
    </div>
  )
}

const NavLinksList = ({ navLinks, toggleOverlay }: NavLinkListProps) => {
  return (
    <ul className={styles.List}>
      {navLinks.map((l, idx) => (
        <li key={idx} className={styles.Item}>
          <Link legacyBehavior href={l.path}>
            <a className={styles.Anchor} onClick={toggleOverlay}>
              {l.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
