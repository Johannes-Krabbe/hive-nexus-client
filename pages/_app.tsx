import { AppProps } from 'next/app'

import Layout from '../components/core/layout/layout'

import '../styles/app.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
