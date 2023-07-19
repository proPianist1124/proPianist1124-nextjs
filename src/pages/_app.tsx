import Script from "next/script"
import '@/styles/styles.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Script src="https://kit.fontawesome.com/09556a902e.js" />
    <Component {...pageProps} />
    </>
  )
}
