import Head from "next/head"
import Link from "next/link"

export default function Gallery(){
    return (
    	<>
		<Head>
        	<link rel="shortcut icon" href="/code.svg" />
			<title>proPianist1124 - gallery</title>
		</Head>
		<center>
			<div className = "header">
				<h2>📖 Gallery</h2>
			</div>
			<br></br>
			<Link href = "https://github.com/propianist1124/propianist1124" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					<h3>proPianist1124</h3>
					<p>A remake of my original site (which was built with pure HTML), but with Next.js! Please tip my project! I have been working hard on these for a year.</p>
					<br></br>
				</div>
			</Link>
			<br></br>
			<Link href = "https://next-audio.vercel.app" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					<h3>Next Audio</h3>
					<p>This website was for my own personal needs - anyone can create an account, sign in, and extract the audio of a youtube video to listen to! You can also add other audio files to the one you&apos;re listening to.</p>
					<br></br>
				</div>
			</Link>
			<br></br>
			<Link href = "https://replit.com/@proPianist1124/south-korea?v=1" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					<h3>South Korea</h3>
					<p>A great website I made for a school History project about South Korea during the Middle Ages. Great CSS and lots of animations, as well as many stock photos of Korea.</p>
					<br></br>
				</div>
			</Link>
			<br></br>
            <Link href = "https://big-space.pizone.dev" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					<h3>Big Space</h3>
					<p>Minamalist social media webapp, where people can sign up within a matter of minutes. Complete with user profiles, custom tokens, and setting features!</p>
					<br></br>
				</div>
			</Link>
			<br></br>
			<Link href = "https://replit.com/@proPianist1124/repl-web?v=1" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					<h3>ReplWeb</h3>
					<p>Replit, but with a beautiful user interface. Interact with your Repls, create community pages, and enjoy a minamalist design!</p>
					<br></br>
				</div>
			</Link>
			<br></br>
			<Link href = "https://replit.com/@proPianist1124/replmail?v=1" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					<h3>ReplMail</h3>
					<p>This is the unofficial mailing system for Replit users! One can only mail a valid user who has signed up for this platform using their Repl account.</p>
					<br></br>
				</div>
			</Link>
			<br></br>
			<Link href = "https://cookie.propianist1124.repl.co/" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					<h3>Cookie+</h3>
					<p>A feature-packed Discord bot made for auto moderation and fun, with economy features! You can add Cookie+ into your server today! Bot currently being self-hosted, because I don&#39;t trust Replit.</p>
					<br></br>
				</div>
			</Link>
			<br></br><br></br>
		</center>
		</>
  )
}