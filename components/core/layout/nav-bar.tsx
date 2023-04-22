import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "components/button/button";
import { getFormattedDate } from "utils/dateHelpers";
import { debounce } from "utils/documentHelpers";
import { useRouter } from "next/router";

import { useScrollLock } from "lib/hooks";

import { INavLink } from "types/interfaces";
import { useToken, useUser } from "lib/hooks";

import styles from "./nav-bar.module.scss";

import Burger from "public/assets/images/core/burger-opened.svg";

const navLinks: INavLink[] = [
  {
    name: "Feed",
    path: "/",
  },
];

interface OverlayNavProps {
  navLinks: INavLink[];
  overlayIsShowing: boolean;
  toggleOverlay: () => void;
  token: any;
  user: any;
  signOut: () => void;
}

interface NavLinkListProps {
  navLinks: INavLink[];
  toggleOverlay?: () => void;
}

export const NavBar = () => {
  const { token, setToken } = useToken();
  const { user, setUser } = useUser();

  const [overlayIsShowing, setOverlayIsShowing] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const { lockScroll, unlockScroll } = useScrollLock();

  const toggleOverlay = () => {
    if (overlayIsShowing) {
      unlockScroll();
    } else {
      lockScroll();
    }
    setOverlayIsShowing(!overlayIsShowing);
  };

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 80) ||
        currentScrollPos < 10
    );
    setPrevScrollPos(currentScrollPos);
  }, 100);

  const router = useRouter();

  const signOut = () => {
    setToken("");
    setUser(undefined);
    router.reload();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  const containerStyles = `${styles.Container} ${
    visible ? "" : styles.invisible
  }`;

  return (
    <header className={containerStyles}>
      <div className={styles.Wrapper}>
        <div className={styles.Brand}>
          <Link legacyBehavior href="/">
            HN
          </Link>
        </div>
        <nav id={"nav"} className={styles.Nav}>
          <div className={styles.Burger} onClick={toggleOverlay}>
            <Image src={Burger} alt="Menu Icon" />
          </div>
          {token && <NavLinksList navLinks={navLinks} />}
        </nav>
        <div className={styles.UserActions}>
          {token && (
            <Button
              action={"button"}
              variant={"dark"}
              text={"Log Out"}
              onClick={() => {
                signOut();
              }}
            />
          )}
        </div>
      </div>
      {overlayIsShowing && <div className={styles.Shadow} />}
      <OverlayNav
        navLinks={navLinks}
        overlayIsShowing={overlayIsShowing}
        toggleOverlay={toggleOverlay}
        user={user}
        token={token}
        signOut={signOut}
      />
    </header>
  );
};

const OverlayNav = ({
  navLinks,
  overlayIsShowing,
  toggleOverlay,
  user,
  token,
  signOut,
}: OverlayNavProps) => {
  return (
    <div
      className={styles.Overlay}
      style={{ width: overlayIsShowing ? "85vw" : "0" }}
    >
      <nav id={"nav"} className={styles.Nav}>
        <div className={styles.TopBar}>
          <a role="button" className={styles.CloseIcon} onClick={toggleOverlay}>
            &times;
          </a>
        </div>
        {token && (
          <NavLinksList navLinks={navLinks} toggleOverlay={toggleOverlay} />
        )}
        <div>
          {token && (
            <Button
              action={"button"}
              variant={"dark"}
              text={"Log Out"}
              onClick={() => {
                signOut();
              }}
            />
          )}
        </div>
        {!user && <p>not logged in</p>}
        {user && (
          <>
            <p>Logged In:</p>
            <p>{user.username}</p>
            <p>{user.userID}</p>
            <p>{getFormattedDate(user.createdAt)}</p>
          </>
        )}
      </nav>
      <div
        className={styles.BottomBar}
        style={{ display: overlayIsShowing ? "flex" : "none" }}
      >
        <Link legacyBehavior href={"/privacypolicy"}>
          <a onClick={toggleOverlay} className={styles.Item}>
            Datenschutzerklärung
          </a>
        </Link>
        <span className={styles.Item}>•</span>
        <Link legacyBehavior href={"/imprint"}>
          <a onClick={toggleOverlay} className={styles.Item}>
            Impressum
          </a>
        </Link>
      </div>
    </div>
  );
};

const NavLinksList = ({ navLinks, toggleOverlay }: NavLinkListProps) => {
  return (
    <ul className={styles.List}>
      {navLinks.map((l, idx) => (
        <li key={idx} className={styles.Item}>
          <Link legacyBehavior href={l.path}>
            <a className={styles.Anchor} onClick={toggleOverlay}>
              {l.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
