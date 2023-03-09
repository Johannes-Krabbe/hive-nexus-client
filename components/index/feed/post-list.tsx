import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";
import { Post } from "./post";
import { fetchPosts } from 'utils/restClient'

// interface IPostList {
//   posts: IPost[];
// }

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    setLoading(true);

    fetchPosts()
    .then((res) => setPosts(res.data.data))
    .then(() => {
      setLoading(false)
    })

  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (!posts) return <p>No posts data</p>;

  return (
    <>
      {posts.map(p => {
        return (
          <Post
            key={p.postID}
            id={p.postID}
            createdAt={p.createdAt}
            author={p.username}
            title={p.title}
            content={p.content}
            likesCount={p.reactions}
            commentsCount={88}
          />
        );
      })}
    </>
  );
};
