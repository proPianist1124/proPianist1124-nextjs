import Head from "next/head"
import Link from "next/link"
import Navbar from "../partials/navbar"

export default function april222023(){
  return (
    <>
    <Head>
        <link rel="shortcut icon" href="/code.svg" />
		<title>proPianist1124 - blog | 4-22-2023</title>
	</Head>
	<Navbar/>
	<center>
		<div className = "header">
			<span className = "head">4-22-2023</span>
		</div>
		<br></br>
		<div style = {{textAlign:"left", margin:"40px", lineHeight:"35px",}}>
			<p>
				Welcome to my online portfolio! My project is <span style = {{color:"#D9544D"}}>not</span> an open source project, for your information. This website is my second take of remaking my portfolio, built with the powerful <Link href = "https://react.dev/">React.js</Link> framework, <Link href = "https://nextjs.org/">Next.js</Link>! It provides 60% faster loading speed and better webpage performance overall. It also lets me create pages faster and more efficiently.<br></br>You can view copyrighted information for this website (https://propianist1124.repl.co), as well as further information <Link href = "https://replit.com/@proPianist1124/proPianist1124?v=1#README.md">here</Link>.
			</p>
		</div>
	</center>
	</>
  )
}