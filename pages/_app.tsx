import { useState, useEffect} from 'react'
import { AppProps } from 'next/app'

import { useToken } from 'lib/hooks';
import { ThemeProvider } from "context/themeContext";

import { Layout } from 'components/core/layout/layout'

import 'styles/app.scss'

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

  return (
    <ThemeProvider>
      <Layout setToken={setToken}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
