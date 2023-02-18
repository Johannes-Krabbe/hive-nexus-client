import { IComment } from 'types/interfaces'
import { Comment } from './comment'
import styles from './comment-list.module.scss'

interface CommentList {
  comments: IComment[]
}

export const CommentList = ({comments}: CommentList) => {
  const count = comments.length

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Title}>{count} Commments</h2>
      <div className={styles.List}>
        {comments.map((c: IComment) => {
          return (
            <Comment
              key={c.id}
              id={c.id}
              createdAt={c.createdAt}
              author={c.author}
              content={c.content}
              />
          )
        })}
      </div>
    </div>
  )
}
