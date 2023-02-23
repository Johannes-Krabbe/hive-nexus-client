import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { Button } from "components/button/button";
import { Sun } from "components/core/layout/sun/sun";
import { Hero } from "components/core/hero/hero";
import { PostList } from "components/index/feed/post-list";
import { CreatePost } from "components/index/feed/create-post/create-post";
import { SignIn } from "components/auth/sign-in";

import { useScrollLock } from "utils/hooks";

import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";

import styles from "components/core/layout/index.module.scss";

import { postData } from "backend/data";

const Home: NextPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [authSucceeded, setAuthSucceeded] = useState(true);
  const [overlayIsShowing, setOverlayIsShowing] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const router = useRouter();
  const { asPath } = router;
  const id = asPath.substring(asPath.lastIndexOf("/") + 1);

  useEffect(() => {
    if (!router.isReady) return;
    setLoading(true);
    fetch(`https://dummyjson.com/posts?limit=10&skip=10`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });

      console.log(data)
  }, [router]);

  if (isLoading) return <LoadingSpinner />;
  if (!data) return <p>No post data</p>;


  const toggleAuth = () => {
    setAuthSucceeded(!authSucceeded);
  };

  const toggleOverlay = () => {
    if (overlayIsShowing) {
      unlockScroll();
    } else {
      lockScroll();
    }
    setOverlayIsShowing(!overlayIsShowing);
  };

  const headline = authSucceeded ? "hivenexus" : "Welcome to hivenexus";

  return (
    <div className={styles.Container}>
      <Sun color={"sun-blue"} />
      <div onClick={toggleAuth} className={styles.AuthSimulator}>
        Toggle Auth
      </div>
      <Hero text={headline} />
      {isLoading && <div>Loading Spinner Coming Here</div>}
      {authSucceeded ? (
        <>
          <Button
            action={"button"}
            variant={"primary"}
            text={"Create post"}
            onClick={toggleOverlay}
          />
          <PostList posts={data.posts} />
          {overlayIsShowing && (
            <div className={styles.Overlay}>
              <div className={styles.OverlayBackground} onClick={toggleOverlay}>
                <div
                  className={styles.OverlayContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.CloseButton}>
                    <a
                      href={"javascript:void(0)"}
                      className={styles.CloseIcon}
                      onClick={toggleOverlay}
                    >
                      &times;
                    </a>
                  </div>
                  <CreatePost />
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default Home;
