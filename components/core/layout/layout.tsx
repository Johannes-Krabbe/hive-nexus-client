import React, { ReactNode } from "react";
import { useRouter } from "next/router";


import { NavBar } from "./nav-bar";
import { CustomHead } from "./custom-head";
import { Footer } from "./footer";

import styles from "components/core/layout/index.module.scss";

interface LayoutProps {
  setToken: any
  children: ReactNode;
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const Layout = ({ setToken, children }: LayoutProps) => {
  const router = useRouter();

  let title = router.pathname;

  if (title === "/") {
    title = "Home";
  }

  title = title.replace("/", "");
  title = capitalizeFirstLetter(title);

  return (
    <div className={styles.Layout}>
      <NavBar setToken={setToken} />
      <CustomHead title={title} />
      <main className="container">
        {children}
      </main>
      <Footer />
    </div>
  );
};
