import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import type { AppProps } from "next/app"

//import "@/styles/styles.css"
import Code from "./partials/code"

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
    <Head>
      <link rel="icon" href="https://res.cloudinary.com/dyemytgtv/image/upload/v1689869843/propianist1124.png" type="image/<generated>" sizes="<generated>"/>
      <link href="https://propianist1124-ui.propianist1124.repl.co/style.css" rel="stylesheet" type="text/css"/>
      <meta property="og:title" content="proPianist1124 | aspiring developer" />
      <meta property="og:image" content="https://res.cloudinary.com/dyemytgtv/image/upload/v1689869843/propianist1124.png" />
      <meta property="og:description" content="proPianist1124 - Fullstack Nextjs and Nodejs developer who loves designing webpages and webapps!"/>
      <meta name="theme-color" content="#ffffff"/>
    </Head>
    <div className = "navbar">
      <Link className = "left" href = "/"><Code/> proPianist1124</Link>
      <span className = "right">
        <Link href = "/contact">Contact</Link>
        &nbsp;&nbsp;&nbsp;<Link href = "/blog">Blog</Link>
        &nbsp;&nbsp;&nbsp;<Link href = "/gallery">Gallery</Link>
        &nbsp;&nbsp;&nbsp;<Link href = "https://propianist1124-guestbook.vercel.app" target = "_blank">Guestbook</Link>
      </span>
    </div>
    <Component {...pageProps}/>
    <br></br><br></br>
    <footer>
			<p>View the source code <Link href = "https://github.com/proPianist1124/proPianist1124" target = "_blank">here</Link></p>
		</footer>
    </>
  )
}