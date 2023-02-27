import { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import { Layout } from 'components/core/layout/layout'

import 'styles/app.scss'

function MyApp({ Component, pageProps: { session, ...pageProps} }: AppProps) {
  // console.log('session:')
  // console.log(session)
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
