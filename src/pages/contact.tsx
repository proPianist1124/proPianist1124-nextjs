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
			<span className = "head">📱 Contact</span>
		</div>
		<div className = "contact">
			<p>Replit</p>
			<Link href = "https://replit.com/@proPianist1124" className = "replit">proPianist1124</Link>
			<br></br><br></br>
			<p>Discord</p>
			<Link href = "https://discord.com/users/844689790075011083" className = "discord">chicken.poop</Link>
			<br></br><br></br>
			<p>Email</p>
			<Link href = "mailto:invisible.horse1124@proton.me" className = "email">invisible.horse1124@proton.me</Link>
			<br></br><br></br>
			<p>Twitter</p>
			<Link href = "https://twitter.com/elonmusk" className = "twitter">happypeng_1</Link>
			<br></br><br></br>
			<p>Yofro</p>
			<Link href = "https://yofro.vercel.app/@proPianist1124" className = "yofro">proPianist1124</Link>
			<br></br><br></br>
			<p>Social Rumbles</p>
			<Link href = "https://socialrumbles.com/@greenSmiley" className = "socialRumbles">greenSmiley</Link>
			<br></br><br></br>
			<p>Youtube</p>
			<Link href = "https://www.youtube.com/channel/UCACuB_DHqEQ-SpXYMmWFmyw" className = "youtube">Phantom Studios</Link>
			<br></br><br></br>
			<p>Github</p>
			<Link href = "https://github.com/propianist1124" className = "github">proPianist1124</Link>
			<br></br><br></br>
			<p>Spotify</p>
			<Link href = "https://open.spotify.com/user/31vq6ry37tfa2qntvk6yjcf32cry" className = "spotify">Doggo</Link>
			<br></br><br></br>
			<p>Reddit</p>
			<Link href = "https://www.reddit.com/user/simonsays1124" className = "reddit">simonSays1124</Link>
		</div>
		<br></br><br></br>
		<br></br><br></br>
		<br></br><br></br>
		<form action="/api/form" method="post">
			<p style = {{fontSize:20, textAlign:'center'}}>Leave a Message for me!</p>
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