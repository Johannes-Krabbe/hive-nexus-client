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

const SinglePostView: NextPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const router = useRouter();
  const { asPath } = router;
  const id = asPath.substring(asPath.lastIndexOf("/") + 1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <LoadingSpinner />;
  if (!data) return <p>No post data</p>;

  return (
    <div className={styles.Container}>
      <Sun color={"sun-peach"} />
      <DetailedPost
        id={id}
        createdAt={data.birthDate}
        author={data.username}
        title={data.eyeColor}
        content={
          "SDFG DSFG DSFGOINM WERGUN SADIOVN WEIOUN 4523IO6TN 345KLJN 345OI6HUBN OP8Y34B56 OHUWBNR TOIHJN25 6OPIUYN WERTIN P2IO3HN6 POI43HP6I JDSFGOINM WERGUN SADIOVN WEIOUN 4523IO6TN 345KLJN 345OI6HUBN OP8Y34B56 OHUWBNR TOIHJN25 6OPIUYN WERTIN P2IO3HN6 POI43HP6I JDSFGOINM WERGUN SADIOVN WEIOUN 4523IO6TN 345KLJN 345OI6HUBN OP8Y34B56 OHUWBNR TOIHJN25 6OPIUYN WERTIN P2IO3HN6 POI43HP6I JDSFGOINM WERGUN SADIOVN WEIOUN 4523IO6TN 345KLJN 345OI6HUBN OP8Y34B56 OHUWBNR TOIHJN25 6OPIUYN WERTIN P2IO3HN6 POI43HP6I JDSFGOINM WERGUN SADIOVN WEIOUN 4523IO6TN 345KLJN 345OI6HUBN OP8Y34B56 OHUWBNR TOIHJN25 6OPIUYN WERTIN P2IO3HN6 POI43HP6I JDSFGOINM WERGUN SADIOVN WEIOUN 4523IO6TN 345KLJN 345OI6HUBN OP8Y34B56 OHUWBNR TOIHJN25 6OPIUYN WERTIN P2IO3HN6 POI43HP6I J"
        }
      />
      <div className={styles.SinglePostWrapper}>
        <LikeList likes={detailedPost.likes} />
        <CommentList comments={detailedPost.comments} />
      </div>
    </div>
  );
};

export default SinglePostView;
