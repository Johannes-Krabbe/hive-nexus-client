import { IPost } from "types/interfaces";
import { Post } from "./post";

// interface IPostList {
//   posts: IPost[];
// }

export const PostList = ({ posts }) => {
  return (
    <>
      {posts.map(p => {
        return (
          <Post
            key={p.id}
            id={p.id}
            createdAt={'01.01.2000'}
            author={`userId: ${p.userId}`}
            title={p.title}
            content={p.body}
            likesCount={p.reactions}
            commentsCount={88}
          />
        );
      })}
    </>
  );
};
