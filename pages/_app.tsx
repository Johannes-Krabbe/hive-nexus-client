import { AppProps } from 'next/app'
import { SignIn } from "components/auth/sign-in";
import { Sun } from "components/core/layout/sun/sun";
import { Hero } from "components/core/hero/hero";

import { Layout } from 'components/core/layout/layout'

import styles from "components/core/layout/index.module.scss";
import 'styles/app.scss'

import { useToken } from 'lib/hooks';

function MyApp({ Component, pageProps }: AppProps) {
  const { token, setToken } = useToken();

  if(!token) {
    return (
      <div className={styles.Container}>
        <Sun color={"sun-blue"} />
        <Hero text={'Welcome to Hivenexus'} />
        <SignIn setToken={setToken} />
      </div>
      )
  }

  return (
      <Layout setToken={setToken}>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
