import Head from "next/head"
import Link from "next/link"
import Navbar from "./partials/navbar"

export default function Gallery(){
    return (
    <>
	<Head>
        <link rel="shortcut icon" href="/code.svg" />
		<title>proPianist1124 - gallery</title>
		</Head>
		<Navbar/>
		<center>
			<div className = "header">
				<span className = "head">Gallery</span>
			</div>
			<br></br>
			<Link href = "https://replit.com/@proPianist1124/proPianist1124?v=1" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					proPianist1124
					<br></br>
					<p>A remake of my original site (which was built with pure HTML), but with Next.js! Please tip my project! I have been working hard on these for a year.</p>
					<mark style = {{backgroundColor:"black", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>Next.js</mark>
					&nbsp;<mark style = {{backgroundColor:"yellow", color:"black", fontSize:15, padding:"2px 10px", borderRadius:5}}>Express</mark>
					&nbsp;<mark style = {{backgroundColor:"#0279f2", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>CSS3</mark>
				</div>
			</Link>
			<br></br>
			<Link href = "https://replit.com/@proPianist1124/south-korea?v=1" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					South Korea
					<br></br>
					<p>A great website I made for a school History project about South Korea during the Middle Ages. Great CSS and lots of animations, as well as many stock photos of Korea.</p>
					<mark style = {{backgroundColor:"black", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>Next.js</mark>
					&nbsp;<mark style = {{backgroundColor:"#0279f2", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>CSS3</mark>
				</div>
			</Link>
			<br></br>
            <Link href = "https://big-space.lto.lol/" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					Big Space
					<br></br>
					<p>Minamalist social media webapp, where people can sign up within a matter of minutes. Complete with user profiles, custom tokens, and setting features!</p>
					<mark style = {{backgroundColor:"green", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>Node.js</mark>
					&nbsp;<mark style = {{backgroundColor:"yellow", color:"black", fontSize:15, padding:"2px 10px", borderRadius:5}}>Express</mark>
					&nbsp;<mark style = {{backgroundColor:"#b5ca65", color:"#a91e50", fontSize:15, padding:"2px 10px", borderRadius:5}}>Ejs</mark>
					&nbsp;<mark style = {{backgroundColor:"#0279f2", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>CSS3</mark>
				</div>
			</Link>
			<br></br>
			<Link href = "https://replit.com/@proPianist1124/repl-web?v=1" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					ReplWeb
					<br></br>
					<p>Replit, but with a beautiful user interface. Interact with your Repls, create community pages, and enjoy a minamalist design!</p>
					<mark style = {{backgroundColor:"green", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>Node.js</mark>
					&nbsp;<mark style = {{backgroundColor:"yellow", color:"black", fontSize:15, padding:"2px 10px", borderRadius:5}}>Express</mark>
					&nbsp;<mark style = {{backgroundColor:"#0279f2", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>CSS3</mark>
					&nbsp;<mark style = {{backgroundColor:"#0d1525", color:"#FFD580", fontSize:15, padding:"2px 10px", borderRadius:5}}>Replit API</mark>
				</div>
			</Link>
			<br></br>
			<Link href = "https://replit.com/@proPianist1124/replmail?v=1" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					ReplMail
					<br></br>
					<p>This is the unofficial mailing system for Replit users! One can only mail a valid user who has signed up for this platform using their Repl account.</p>
					<mark style = {{backgroundColor:"green", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>Node.js</mark>
					&nbsp;<mark style = {{backgroundColor:"yellow", color:"black", fontSize:15, padding:"2px 10px", borderRadius:5}}>Express</mark>
					&nbsp;<mark style = {{backgroundColor:"red", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>HTML5</mark>
					&nbsp;<mark style = {{backgroundColor:"#0279f2", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>CSS3</mark>
					&nbsp;<mark style = {{backgroundColor:"#0d1525", color:"#FFD580", fontSize:15, padding:"2px 10px", borderRadius:5}}>Replit API</mark>
				</div>
			</Link>
			<br></br>
			<Link href = "https://cookie.propianist1124.repl.co/" style = {{color:"var(--primary)", textShadow:"none"}}>
				<div className = "galleryCard">
					Cookie+
					<br></br>
					<p>A feature-packed Discord bot made for auto moderation and fun, with economy features! You can add Cookie+ into your server today! Bot currently being self-hosted, because I don&#39;t trust Replit.</p>
					<mark style = {{backgroundColor:"green", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>Node.js</mark>
					&nbsp;<mark style = {{backgroundColor:"#5865F2", color:"white", fontSize:15, padding:"2px 10px", borderRadius:5}}>Discord API</mark>
				</div>
			</Link>
			<br></br><br></br>
		</center>
		</>
  )
}