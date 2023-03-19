import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";
import { Post } from "./post";
import { request } from "utils/context";

// interface IPostList {
//   posts: IPost[];
// }

export const PostList = () => {
  const [postsData, setPostsData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();

  async function fetchPosts() {
    const res = await request.get(`/post/all`);
    setPostsData(res.data.data);
    setLoading(false);
  }

  useEffect(() => {
    if (!router.isReady) return;

    setLoading(true);

    fetchPosts()
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (!postsData) return <p>No posts data</p>;

  return (
    <>
      {postsData.map(p => {
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
