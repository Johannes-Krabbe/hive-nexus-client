import { AppProps } from 'next/app'
import { useContext } from 'react'
import { User } from 'context/userContext';
import Router from 'next/router';

import { useState, useEffect } from "react";
import { AuthProvider } from 'context/auth-context';
import { Layout } from 'components/core/layout/layout';

import 'styles/app.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const [hasAccess, setHasAccess] = useState(false);

  // const authContext = useContext(AuthContext);


  // useEffect(() => {
  //   authContext.isUserAuthenticated()
  //   ? Router.push("/")
  //   : Router.push("/sign-in");
  // }, []);



//   useEffect(() => {
//     const user = localStorage.getItem('hn-user');

//     if (!user) {
//       Router.push('/sign-in');
//     } else {
//       setHasAccess(true);
//     }
// }, [])

  //   if (!hasAccess) {
  //     return <p style={{fontSize: '72px'}}>no access</p>;
  // }
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
		setHydrated(true);
	}, []);

	if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}

  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
