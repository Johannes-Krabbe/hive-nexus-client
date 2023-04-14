import { useEffect, useState } from "react";
import Router from 'next/router'

import type { NextPage } from "next";

import { useThemeContext } from "context/themeContext";

import { Button } from "components/button/button";
import { Sun } from "components/core/layout/sun/sun";
import { Hero } from "components/core/hero/hero";
import { PostList } from "components/index/feed/post-list";
import { CreatePost } from "components/index/feed/create-post/create-post";

import { useScrollLock } from "lib/hooks";

import styles from "components/core/layout/index.module.scss";

import { useToken } from 'lib/hooks';

export const Home: NextPage = () => {
  const { token, setToken } = useToken();
  // const { theme, setTheme } = useThemeContext();

  const [overlayIsShowing, setOverlayIsShowing] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();

  const toggleOverlay = () => {
    if (overlayIsShowing) {
      unlockScroll();
    } else {
      lockScroll();
    }
    setOverlayIsShowing(!overlayIsShowing);
  };

  const headline = "hivenexus";

  useEffect(() => {
    if (!token) {
      Router.push('/sign-in')
      }
  }, [token]);

  return (
    <div className={styles.Container}>
      {/* <button
        onClick={() => {
          theme == "light" ? setTheme("dark") : setTheme("light");
          console.log(`theme now: ${theme}`)
        }}
      >
        SetTheme
      </button> */}
      <Sun color={"sun-blue"} />
      <Hero text={headline} />
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
    </div>
  );
};

export default Home;
