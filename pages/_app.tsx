import { useState, useEffect} from 'react'
import { AppProps } from 'next/app'

import { Layout } from 'components/core/layout/layout'

import 'styles/app.scss'

import { useToken } from 'lib/hooks';
import { ThemeProvider } from "context/themeContext";
import { UserProvider } from "context/userContext";


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
    <UserProvider>
      <ThemeProvider>
        <Layout setToken={setToken}>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </UserProvider>
  )
}

export default MyApp
