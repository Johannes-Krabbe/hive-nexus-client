import { useEffect, useState } from "react";
import type { NextPage } from "next";

import { Button } from "components/button/button";
import { Sun } from "components/core/layout/sun/sun";
import { Hero } from "components/core/hero/hero";
import { useUser } from 'lib/useUser'
import { PostList } from "components/index/feed/post-list";
import { CreatePost } from "components/index/feed/create-post/create-post";
import { SignIn } from "components/auth/sign-in";

import { useScrollLock } from "utils/hooks";

import { LoadingSpinner } from "components/core/layout/loading/loading-spinner";

import styles from "components/core/layout/index.module.scss";

const Home: NextPage = () => {
  const [authSucceeded, setAuthSucceeded] = useState(false);
  const [overlayIsShowing, setOverlayIsShowing] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

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

  const { user } = useUser()

  useEffect(() => {
    if (!user || user.isLoggedIn === false) {
      setAuthSucceeded(false)
    } else {
      setAuthSucceeded(true)
    }
  }, [user]);

  return (
    <div className={styles.Container}>
      <Sun color={"sun-blue"} />
      <div onClick={toggleAuth} className={styles.AuthSimulator}>
        Toggle Auth
      </div>
      <Hero text={headline} />
      {authSucceeded ? (
        <>
          <Button
            action={"button"}
            variant={"primary"}
            text={"Create post"}
            onClick={toggleOverlay}
          />
          <PostList />
          {overlayIsShowing && (
            <div className={styles.Overlay}>
              <div className={styles.OverlayBackground} onClick={toggleOverlay}>
                <div
                  className={styles.OverlayContent}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={styles.CloseButton}>
                    <a
                      role="button"
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
