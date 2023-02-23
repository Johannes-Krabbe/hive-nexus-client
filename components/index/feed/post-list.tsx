import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";
import { IPost } from "types/interfaces";
import { Post } from "./post";

// interface IPostList {
//   posts: IPost[];
// }

export const PostList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;

    setLoading(true);
    fetch(`https://dummyjson.com/posts?limit=10&skip=10`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [router]);

  if (isLoading) return <LoadingSpinner />;
  if (!data) return <p>No post data</p>;

  return (
    <>
      {data.posts.map(p => {
        return (
          <Post
            key={p.id}
            id={p.id}
            createdAt={'01.01.2000'}
            author={p.userId}
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
