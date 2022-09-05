import styles from './subheadline.module.scss'

interface Props {
	subheadline: string
};

export const Subheadline = ({subheadline}: Props) => {
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
};