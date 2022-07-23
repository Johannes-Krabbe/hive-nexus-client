import styles from './introduction-text-box.module.scss'

const IntroductionTextBox = props => {
  const {
    introductionText = ''
  } = props

  return (
    <div className={styles.Container}>
      <div className={styles.TextBox}>
        <p>
          {introductionText}
        </p>
      </div>
    </div>
  )
}

export default IntroductionTextBox
