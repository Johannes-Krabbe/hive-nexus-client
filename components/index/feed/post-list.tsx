import { IPost } from 'types/interfaces'
import { Post } from './post'

interface IPostList {
  posts: IPost[]
}

export const PostList = ({posts}: IPostList) => {
  return (
    <>
      {posts.map((p: IPost) => {
        return (
          <Post
            key={p.id}
            id={p.id}
            createdAt={p.createdAt}
            author={p.author}
            title={p.title}
            content={p.content}
            likesCount={p.likesCount}
            commentsCount={p.commentsCount}
            />
        )
      })}
    </>
  )
}
