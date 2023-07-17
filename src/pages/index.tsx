import Head from "next/head"
import Link from "next/link"
import Script from 'next/script'
import Navbar from "./partials/navbar"
import Footer from "./partials/footer"

export default function Home(){
  return (
    <>
			<Head>
				<link rel="shortcut icon" href="/code.svg" />
				<title>proPianist1124 - home</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			</Head>
			<Script src="https://kit.fontawesome.com/09556a902e.js" />
			<Navbar/>
			<center>
				<div className = "header">
					<span className = "head"><i className="fa-solid fa-code"></i>&nbsp;&nbsp;proPianist1124</span>
				</div>
        <br></br>
				<div>
					Started Programming in <span style = {{color:'var(--background-lightest)'}}>2021</span>
					<br></br>Current Location in <span style = {{color:'var(--background-lightest)'}}>the West Coast, US</span>
					<br></br>Hobbies include <span style = {{color:'var(--background-lightest)'}}>TV, Legos, Coding</span>
				</div>
				<br></br>
				<br></br>
				<div className = "aboutContainer">
					<div className = "top">
						Utensils: Figma, Replit, VSC
					</div>
					<div>
						Lang: Javascript, Typescript, Python
					</div>
					<div>
						Frameworks: Next.js, React.js
					</div>
					<div>
						Libraries: Express, Bootstrap, jQuery
					</div>
					<div>
						Email: invisible.horse1124@proton.me
					</div>
					<div className = "bottom">
						<span style = {{verticalAlign:"middle"}}>
							Socials:&nbsp;&nbsp;&nbsp;&nbsp;
							<Link href = "https://discord.gg/bzhtehRWgN" className="fa-brands fa-discord" style = {{fontSize:25, marginLeft:"2px"}}></Link>
							<Link href = "https://twitter.com/elonmusk" className="fa-brands fa-twitter" style = {{fontSize:25, marginLeft:"2px"}}></Link>
							<Link href = "https://www.youtube.com/channel/UCACuB_DHqEQ-SpXYMmWFmyw" className="fa-brands fa-youtube" style = {{fontSize:25, marginLeft:"2px"}}></Link>
							<Link href = "https://github.com/phantomForces09" className="fa-brands fa-github" style = {{fontSize:25, marginLeft:"2px"}}></Link>
						</span>
					</div>
				</div>
				<br></br><br></br>
				<br></br><br></br>
			</center>
			<Footer/>
		</>
  )
}