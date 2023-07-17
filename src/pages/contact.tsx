import Head from "next/head"
import Link from "next/link"
import Navbar from "./partials/navbar"

export default function Contact(){
  return (
    <>
    <Head>
        <link rel="shortcut icon" href="/code.svg" />
		<title>proPianist1124 - contact</title>
	</Head>
	<Navbar/>
	<center>
		<div className = "header">
			<span className = "head">Contact & Socials</span>
		</div>
		<h2>Replit</h2>
		<Link href = "https://replit.com/@proPianist1124" className = "replit">proPianist1124</Link>
		<h2>Discord</h2>
		<Link href = "https://discord.com/users/844689790075011083" className = "discord">cycles.poop</Link>
		<br></br><br></br>
		<h2>Email</h2>
		<Link href = "mailto:invisible.horse1124@proton.me" className = "email">invisible.horse1124@proton.me</Link>
		<br></br><br></br>
		<h2>Twitter</h2>
		<Link href = "https://twitter.com/elonmusk">happypeng_1</Link>
		<br></br><br></br>
		<h2>Big Space</h2>
		<Link href = "https://big-space.lto.lol/@proPianist1124" className = "big-space">proPianist1124</Link>
		<br></br><br></br>
		<h2>Social Rumbles</h2>
		<Link href = "https://socialrumbles.com/@greenSmiley" className = "socialRumbles">greenSmiley</Link>
		<br></br><br></br>
		<h2>Youtube</h2>
		<Link href = "https://www.youtube.com/channel/UCACuB_DHqEQ-SpXYMmWFmyw" className = "youtube">Phantom Studios</Link>
		<br></br><br></br>
		<h2>Github</h2>
		<Link href = "https://github.com/propianist1124" className = "github">proPianist1124</Link>
		<br></br><br></br>
		<h2>Spotify</h2>
		<Link href = "https://open.spotify.com/user/31vq6ry37tfa2qntvk6yjcf32cry" className = "spotify">Doggo</Link>
		<br></br><br></br>
		<h2>Reddit</h2>
		<Link href = "https://www.reddit.com/user/simonsays1124" className = "reddit">simonSays1124</Link>
		<br></br><br></br>
		<br></br><br></br>
		<form action="/api/form" method="post">
			<p style = {{fontSize:20, textAlign:'center'}}>Got Questions? Leave a Message!</p>
			<br></br>
			<input type = "email" name="email" placeholder = "email" autoComplete = "off" required/>
			<br></br><br></br>
			<input type = "text" name="name" placeholder = "name" autoComplete = "off" required/>
			<br></br><br></br>
			<textarea placeholder = "message" name = "message" required></textarea>
			<br></br><br></br>
			<button type="submit">Submit</button>
			<br></br><br></br>
			<br></br><br></br>
		</form>
		<br></br><br></br>
    </center>
	</>
  )
}