import Head from "next/head"
import Link from "next/link"
import Navbar from "../partials/navbar"

export default function may102023(){
  return (
    <>
	<Head>
        <link rel="shortcut icon" href="/code.svg" />
		<title>proPianist1124 - blog | 5-10-2023</title>
	</Head>
	<Navbar/>
	<center>
		<div className = "header">
			<span className = "head">5-10-2023</span>
		</div>
		<br></br>
		<div style = {{textAlign:"left", margin:"40px", lineHeight:"35px",}}>
			<h4>
				next.js was a main component of this site because its default fast performance lightweight framework design. my <Link href = "https://replit.com/@proPianist1124/proPianist1124-html?v=1">previous personal webpage</Link> was too complicated and was made out of pure HTML & CSS, as well as iFrames (incredibly insufficient). i also wanted to create a minamalist personal webpage, like many others in the <Link href = "https://discord.gg/friendsofreplit">Replit Discord</Link>. However, my main inspiration was from <Link href = "https://coder100.vercel.app">Coder100&#39;s webpage</Link> because of its simplicity, as well as its extremely fast loading speed and website performance.
			</h4>
			</div>
	</center>
	</>
  )
}