import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Sun } from "components/core/layout/sun/sun";
import { detailedPost } from "backend/data";
import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";
import { DetailedPost } from "components/detailed-post/detailed-post";
import { CommentList } from "components/comment-list/comment-list";
import { LikeList } from "components/like-list/like-list";

import styles from "components/core/layout/index.module.scss";

const PostPage: NextPage = () => {
  const [postData, setPostData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (!router.isReady) return;

    const postQueryUrl = `https://dummyjson.com/posts/${id}`
    // TODO: prepare api query here
    // const postQueryUrl = `https://dummyjson.com/posts/${id}`

    fetch(postQueryUrl)
      .then((res) => res.json())
      .then((data) => {
        setPostData(data);

        // console.log(`postData received: ${JSON.stringify(data)}`)

        const userQueryUrl = `https://dummyjson.com/users/${data.userId}`
        // TODO: prepare api query here
        // const userQueryUrl = `https://dummyjson.com/users/${data.userId}`

        return fetch(userQueryUrl);
      })
      .then(res => res.json())
      .then((data) => {
        // console.log(`userData received: ${JSON.stringify(data)}`)
        setUserData(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('request failed', err)
      })
  }, [router]);

  if (isLoading) return <LoadingSpinner />;
  if (!postData || !userData) return <p>No post data</p>;

  return (
    <div className={styles.Container}>
      <Sun color={"sun-peach"} />
      <DetailedPost
        id={id}
        createdAt={userData.birthDate}
        author={`${userData.firstName} ${userData.lastName}`}
        title={postData.title}
        content={postData.body}
      />
      {/* TODO: provide fetched data */}
      <div className={styles.PostPageWrapper}>
        <LikeList likes={detailedPost.likes} />
        <CommentList comments={detailedPost.comments} />
      </div>
    </div>
  );
};

export default PostPage;
