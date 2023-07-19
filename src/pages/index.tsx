import Head from "next/head"
import Link from "next/link"
import Navbar from "./partials/navbar"

export default function Home(){
  return (
    <>
	<Head>
		<link rel="shortcut icon" href="/code.svg" />
		<title>proPianist1124 - home</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	</Head>
	<Navbar/>
	<center>
		<div>
			<h2>👋 I&apos;m proPianist1124!</h2>
		</div>
		<br></br>
		<br></br>
		<div className = "container">
			Utensils: Figma, Replit, VSC<br></br>
			Lang: Javascript, Typescript, Python<br></br>
			Frameworks: Next.js, React.js<br></br>
			Libraries: Express, Bootstrap, jQuery<br></br>
			Email: invisible.horse1124@proton.me<br></br>
		</div>
		<br></br>
		<div className = "footer">
			<span style = {{verticalAlign:"middle"}}>
				Socials:&nbsp;&nbsp;&nbsp;&nbsp;
				<Link href = "https://discord.gg/bzhtehRWgN" className="fa-brands fa-discord" style = {{fontSize:25, marginLeft:"2px"}}></Link>
				<Link href = "https://twitter.com/elonmusk" className="fa-brands fa-twitter" style = {{fontSize:25, marginLeft:"2px"}}></Link>
				<Link href = "https://www.youtube.com/channel/UCACuB_DHqEQ-SpXYMmWFmyw" className="fa-brands fa-youtube" style = {{fontSize:25, marginLeft:"2px"}}></Link>
				<Link href = "https://github.com/phantomForces09" className="fa-brands fa-github" style = {{fontSize:25, marginLeft:"2px"}}></Link>
			</span>
			<br></br><br></br>
		</div>
	</center>
	</>
  )
}