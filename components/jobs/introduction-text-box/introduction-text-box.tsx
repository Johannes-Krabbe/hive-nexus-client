import styles from './introduction-text-box.module.scss'

interface Props {
	introductionText: string
};

export const IntroductionTextBox = ({introductionText}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <p>
          {introductionText}
        </p>
      </div>
    </div>
  )
}
