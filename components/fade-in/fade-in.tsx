import styles from './fade-in.module.scss'
import {useEffect, useRef, useState} from 'react'

function getOsVersion () {
  let agent = window.navigator.userAgent
  let start = agent.indexOf('OS ')

  if (/iphone|ipod|ipad/i.test(agent) && start > -1) {
    const resArray = /OS \d{1,3}_\d{1,3}/i.exec(agent)
    return Number(resArray[0].slice(3).replace('_', '.'))
  } else {
    return 0
  }
}

interface Props {
	// TODO: check if we can remove children with this react FC thing
	children: any
	className: string
	isSection: boolean
}

export const FadeIn: React.FC<Props> = ({
	children,
	className,
	isSection
}) => {
  const [isVisible, setVisible] = useState(false)
  const [osVersion, setOsVersion] = useState(0)
  const domRef = useRef()

  useEffect(() => {
    setOsVersion(getOsVersion())
  }, [osVersion])

  useEffect(() => {
    const nodeReference = domRef.current
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting)
        }
      })
    })
    observer.observe(nodeReference)
    return () => observer.unobserve(nodeReference)
  }, [])

  const classNames = `${className} ${styles.effect} ${isVisible ? styles['visible'] : ''}${(osVersion !== 0 && osVersion <= 15.4) ? ` ${styles['compat-mode']}` : ''}`

  if (isSection) {
    return (
      <section
        className={classNames}
        ref={domRef}
      >
        {children}
      </section>
    )
  } else {
    return (
      <div
        className={classNames}
        ref={domRef}
      >
        {children}
      </div>
    )
  }
}
