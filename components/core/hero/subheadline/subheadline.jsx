import styles from './subheadline.module.scss'

const Subheadline = props => {
	const {
    subheadline = ''
  } = props

  return (
    <div className={styles.container}>
      <div className={styles.inner}>
        <h2 className={styles.Subheadline}>
          <span className={styles.anni}>{subheadline} &nbsp;</span>
          <span className={styles.anni}>{subheadline} &nbsp;</span>
          <span className={styles.anni}>{subheadline} &nbsp;</span>
          <span className={styles.anni}>{subheadline}</span>
        </h2>
      </div>
    </div>
  )
}

export default Subheadline	