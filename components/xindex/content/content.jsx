import styles from './content.module.scss'
import ContentItem from './content-item/content-item'

const Content = (props) => {
  const {
    content
  } = props

  return (
    <section className={styles.Container}>
      {content.map(contentItem => {
        return <ContentItem key={contentItem._key} content={contentItem} />
      })}
    </section>
  )
}

export default Content
