import styles from './content-block.module.scss'

interface Props {
  title: string
  paragraphs: Array<string>
}

export const ContentBlock = ({title, paragraphs}: Props) => {

  return (
    <div className={styles.container}>
      <h3 className={styles.h2}>
        {title}
      </h3>
      {paragraphs.map((p, index) => (
        <p key={index} className={styles.p2}>
          {p}
        </p>
      ))}
    </div>
  )
}
