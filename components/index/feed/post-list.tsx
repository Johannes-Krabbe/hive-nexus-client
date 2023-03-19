import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IPost } from "types/interfaces";
import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";
import { Post } from "./post";
import { getPosts } from 'utils/restClient'

export const PostList = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    setLoading(true);

    getPosts()
      .then((res) => setPosts(res))
      .then(() => {
        setLoading(false)
      })
  }, [router]);

  if (isLoading) return <LoadingSpinner />;
  if (!posts) return <p>No posts data</p>;

  return (
    <>
      {posts.map(p => {
        return (
          <Post
            key={p.postID}
            postID={p.postID}
            createdAt={p.createdAt}
            username={p.username}
            title={p.title}
            content={p.content}
          />
        );
      })}
    </>
  );
};
