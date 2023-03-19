import { IComment } from 'types/interfaces'
import { Comment } from './comment'
import styles from './comment-list.module.scss'

interface CommentListProps {
  comments: IComment[]
}

export const CommentList = ({comments}: CommentListProps) => {
  const count = comments.length

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Title}>{count} Commments</h2>
      <div className={styles.List}>
        {comments.map(c => {
          return (
            <Comment
              key={c.commentID}
              commentID={c.commentID}
              createdAt={c.createdAt}
              username={c.username}
              content={c.content}
              />
          )
        })}
      </div>
    </div>
  )
}
