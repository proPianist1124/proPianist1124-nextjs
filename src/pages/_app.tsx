import Head from "next/head"
import Link from "next/link"

import "@/styles/styles.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <link rel="icon" href="https://res.cloudinary.com/dyemytgtv/image/upload/v1689869843/propianist1124.png" type="image/<generated>" sizes="<generated>"/>
      <meta property="og:title" content="proPianist1124 | aspiring developer" />
      <meta property="og:image" content="https://res.cloudinary.com/dyemytgtv/image/upload/v1689869843/propianist1124.png" />
      <meta property="og:description" content="proPianist1124 - Fullstack Nextjs and Nodejs developer who loves designing webpages and webapps!"/>
      <meta name="theme-color" content="#ffffff"/>
    </Head>
    <ul>
      <li><Link href = "/contact">Contact</Link></li>
      <li><Link href = "https://propianist1124-guestbook.vercel.app/">Guestbook</Link></li>
      <li><Link href = "/blog">Blog</Link></li>
      <li><Link href = "/gallery">Gallery</Link></li>
      <li><Link href = "/">Home</Link></li>
    </ul>
    <Component {...pageProps} />
    <br></br><br></br>
    <div className = "footer">
			<p>View the source code <Link href = "https://github.com/proPianist1124/proPianist1124" target = "_blank">here</Link></p>
		</div>
    </>
  )
}