import { useState, useEffect} from 'react'
import { AppProps } from 'next/app'
import { SignIn } from "components/auth/login";
import { Sun } from "components/core/layout/sun/sun";
import { Hero } from "components/core/hero/hero";

import { Layout } from 'components/core/layout/layout'

import styles from "components/core/layout/index.module.scss";
import 'styles/app.scss'

import { useToken } from 'lib/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const { token, setToken } = useToken();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
		setHydrated(true);
	}, []);

	if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}

  // if(!token) {
  //   return <SignIn setToken={setToken} />
  // }

  return (
      <Layout setToken={setToken}>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
