import PropTypes from 'prop-types'
import styles from './preview-banner.module.scss'
import { useEffect, useState } from 'react'

export const PreviewBanner = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShow(true)
    }
  }, [])

  return (
      <div className={styles['Preview']}>
        <h3>Sie befinden sich im Previewmodus</h3>
        {show &&
        <a className={styles['Preview-button']} href={`/api/exit-preview?slug=${document.location.pathname}`}>
          Preview beenden
        </a>
        }
      </div>
  )
}

PreviewBanner.propTypes = {
  preview: PropTypes.bool
}
