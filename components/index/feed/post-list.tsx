import { IPost } from '../../../types/interfaces'
import { Post } from './post'
import styles from './post-list.module.scss'

interface IPostList {
  posts: IPost[]
}

export const PostList = ({posts}: IPostList) => {
  return (
    <div className={styles.Container}>
      {posts.map((p: IPost) => {
        return <Post key={p.id} id={p.id} createdAt={p.createdAt} author={p.author} title={p.title} content={p.content} likesCount={p.likesCount} commentsCount={p.commentsCount}/>
      })}
    </div>
  )
}
