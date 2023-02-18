import { IComment } from 'types/interfaces'
import styles from './comment.module.scss'

export const Comment = ({
    id,
    createdAt,
    author,
    content
  }: IComment) => {
  return (
    <div className={styles.Comment}>
      <p>id: {id} createdAt: {createdAt}</p>
      <p className={styles.Author}>{author}</p>
      <p className={styles.Content}>{content}</p>
    </div>
  )
}
