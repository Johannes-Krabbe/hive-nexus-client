import styles from './headline.module.scss'

const Headline = props => {
  const {
    headline = ''
  } = props

  return (
      <h1 className={styles.Headline}>
        {headline}
      </h1>
  )
}

export default Headline
