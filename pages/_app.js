import '../styles/globals.css'
import Head from 'next/head'
import WhatsAppButton from '../components/WhatsAppButton'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#111827" />
      </Head>
      <Component {...pageProps} />
      <WhatsAppButton />
    </>
  )
}

export default MyApp
