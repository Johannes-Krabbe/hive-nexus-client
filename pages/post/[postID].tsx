import { useState, useContext, useEffect } from "react";
import { IPost } from "types/interfaces";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { getPost } from 'utils/restClient'
import { Sun } from "components/core/layout/sun/sun";
import { useAuthContext, AuthProvider } from 'context/auth-context'
import {  dummyLikes, dummyComments } from "dummyData/data";
import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";
import Router from 'next/router'
import { DetailedPost } from "components/detailed-post/detailed-post";
import { CommentList } from "components/comment-list/comment-list";
import { LikeList } from "components/like-list/like-list";

import styles from "components/core/layout/index.module.scss";
import { useToken } from 'lib/hooks';

const PostPage: NextPage = () => {
  const { authState, isUserAuthenticated, setAuthState } = useAuthContext();

  useEffect(() => {
    // authContext.isUserAuthenticated()
    // ? Router.push("/")
    // : Router.push("/sign-in");
  }, []);

  // const { token, setToken } = useToken();

  const [postData, setPostData] = useState<IPost | null>(null);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { asPath } = router;
  const postID = asPath.substring(asPath.lastIndexOf("/") + 1);

  // useEffect(() => {
  //   if (!token) {
  //     Router.push('/sign-in')
  //     }
  // }, [token]);

  useEffect(() => {
    if (!router.isReady) return;

    setLoading(true)

    getPost(postID)
      .then((res) => setPostData(res))
      .then(() => {
        setLoading(false)
      })
  }, [router, postID]);

  if (isLoading) return <LoadingSpinner />;

  if (!postData) {
    return <p>No post data</p>;
  } else {
    return (
      <div className={styles.Container}>
        <Sun color={"sun-peach"} />
        <DetailedPost
          postID={postData.postID}
          createdAt={postData.createdAt}
          username={postData.username}
          title={postData.title}
          content={postData.content}
        />
        <div className={styles.PostPageWrapper}>
          <LikeList likes={dummyLikes} />
          <CommentList comments={dummyComments} />
        </div>
      </div>
    );
  };
}

export default PostPage;
