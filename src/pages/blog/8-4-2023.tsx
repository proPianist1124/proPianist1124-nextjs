import Head from "next/head"
import Link from "next/link"

export default function april222023(){
  return (
    <>
    <Head>
        <link rel="shortcut icon" href="/code.svg" />
		<title>proPianist1124 - blog | 8-4-2023</title>
	</Head>
	<center>
		<div className = "header">
			<h2>8-4-2023</h2>
		</div>
		<br></br>
		<div style = {{textAlign:"left", margin:"100px"}}>
			<p>
				I&apos;ve been working on a few side projects during this summer, including <Link href = "https://yofro.vercel.app">Yofro</Link>, a minimalistic social media webapp. It was previously built with Node.js and Replit DB, but its performance was absolutely garbage. And after hosting it on <Link href = "https://render.com">Render</Link>, it experienced quite a few outages. The webapp itself was extremely unstable.
				<br></br>Therefore, I learned Next.js and remade Big Space (its previous name) to Yofro. Its performance is now great, has a great functionality, and doesn&apos;t experience any outages. Praise Vercel. I&apos;m very proud of this project, and I hope you enjoy it!
				<br></br><br></br>
				Another side project I&apos;ve been working on for one to two weeks is <Link href = "https://next-audio.vercel.app">Next Audio</Link>. It extracts the audio via the Google Images API from Youtube videos and allows you to &quot;layer&quot; other audios. It&apos;s a great way to listen to music, and I&apos;m very proud of this project as well.
			</p>
		</div>
	</center>
	</>
  )
}