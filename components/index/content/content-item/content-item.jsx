import styles from './content-item.module.scss'

const ContentItem = (props) => {
  const {
    content
  } = props

  return (
    <div className={styles.Container}>
      <h1>{content.title}</h1>
      <p>{content.text}</p>
    </div>
  )
}

export default ContentItem
