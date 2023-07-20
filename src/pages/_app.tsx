import Head from "next/head"
import Script from "next/script"
import '@/styles/styles.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link
      rel="icon"
      href="https://res.cloudinary.com/dyemytgtv/image/upload/v1689869843/propianist1124.png"
      type="image/<generated>"
      sizes="<generated>"
      />
    </Head>
    <Script src="https://kit.fontawesome.com/09556a902e.js" />
    <Component {...pageProps} />
    </>
  )
}
