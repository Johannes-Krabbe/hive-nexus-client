import { IPost } from '../../types/interfaces'
import styles from './post.module.scss'

export const Post = ({id, createdAt, author, title, content}: IPost) => {
  return (
    <div className={styles.Post}>
      <h3 className={styles.Title}>
        {title}
      </h3>
      <p className={styles.Content}>
        {content}
      </p>
      <div className={styles.Details}>
        <p className={styles.Creation}>
          {createdAt}
        </p>
        <p className={styles.Author}>{author.username}</p>
        <p className={styles.Id}>{id}</p>
      </div>
    </div>
  )
}
