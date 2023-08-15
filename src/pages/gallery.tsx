import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function Gallery({titles, descriptions, links}:any){
	const router = useRouter();
    return (
    	<>
		<Head>
			<title>proPianist1124 - gallery</title>
		</Head>
		<center>
			<div className = "header">
				<h2>📖 Gallery</h2>
			</div>
			{titles.map((title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined) =>
				<>
				<div className = "card-hoverable" onClick = {() => router.push(links[titles.indexOf(title)])} key = {String(title)} style = {{textAlign:"left"}}>
						<h3>{title}</h3>
						<p>{descriptions[titles.indexOf(title)]}</p>
					</div>
				<br></br>
				</>
			)}
			<br></br><br></br>
		</center>
		</>
  )
}

export async function getServerSideProps(){
	let titles = [
		"proPianist1124",
		"Guestbook",
		"Next Audio",
		"South Korea",
		"Big Space",
		"ReplWeb",
		"ReplMail",
		"Cookie+"
	];
	let descriptions = [
		"A remake of my original site (which was built with pure HTML), but with Next.js! Please tip my project! I have been working hard on these for a year.",
		"A guestbook project I built with Supabase and Next.js. Really enjoyed this project because it made me learn lots of new things, including utilizing api routes and fetching data with queries. It also helped me further develop my knowledge of SQL.",
		"This website was for my own personal needs - anyone can create an account, sign in, and extract the audio of a youtube video to listen to! You can also add other audio files to the one you're listening to.",
		"A great website I made for a school History project about South Korea during the Middle Ages. Great CSS and lots of animations, as well as many stock photos of Korea.",
		"Minamalist social media webapp, where people can sign up within a matter of minutes. Complete with user profiles, custom tokens, and setting features!",
		"Replit, but with a beautiful user interface. Interact with your Repls, create community pages, and enjoy a minamalist design!",
		"This is the unofficial mailing system for Replit users! One can only mail a valid user who has signed up for this platform using their Repl account.",
		"A feature-packed Discord bot made for auto moderation and fun, with economy features! You can add Cookie+ into your server today! Bot currently being self-hosted, because I don't trust Replit."
	];
	let links = ["https://github.com/propianist1124/propianist1124", "/", "https://next-audio.vercel.app", "https://replit.com/@proPianist1124/south-korea?v=1", "https://big-space.pizone.dev", "https://replit.com/@proPianist1124/repl-web?v=1", "https://replit.com/@proPianist1124/replmail?v=1", "https://cookie.propianist1124.repl.co/"];
	
	return {
		props: {titles, descriptions, links}
	}
}