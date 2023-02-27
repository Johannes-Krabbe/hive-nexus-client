import React, { ReactNode } from "react";
import { useRouter } from "next/router";

import { NavBar } from "./nav-bar";
import { CustomHead } from "./custom-head";
import { Footer } from "./footer";
import { SignIn } from "components/auth/sign-in";
import { Sun } from "components/core/layout/sun/sun";
import { Hero } from "components/core/hero/hero";

import styles from "components/core/layout/index.module.scss";

interface LayoutProps {
  children: ReactNode;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  let title = router.pathname;

  if (title === "/") {
    title = "Home";
  }

  title = title.replace("/", "");
  title = capitalizeFirstLetter(title);

  return (
    <div className={styles.Layout}>
      <NavBar />
      <CustomHead title={title} />
      <main className="container">
      { status === 'authenticated' ? children : (
        <div className={styles.Container}>
        <Sun color={"sun-blue"} />
        <Hero text={'Welcome to Hivenexus'} />
        <SignIn />
        </div>
      )}
      </main>
      <Footer />
    </div>
  );
};
