import { IPost } from '../../types/interfaces'
import styles from './post-list.module.scss'

interface IPostList {
  posts: IPost[]
}

export const PostList = ({posts}: IPostList) => {
  return (
    <div className={styles.Container}>
      {posts.map((p: IPost) => {
        return <p>{p.author}r</p>
      })}
    </div>
  )
}
