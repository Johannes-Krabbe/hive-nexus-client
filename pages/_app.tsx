import { useState, useEffect } from "react";
import { AppProps } from "next/app";

import { ThemeProvider } from "context/themeContext";

import { Layout } from "components/core/layout/layout";

import "styles/app.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
  }

  return (
    <ThemeProvider>
      <Layout>
        <h1>ENV: {process.env.NODE_ENV}</h1>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
