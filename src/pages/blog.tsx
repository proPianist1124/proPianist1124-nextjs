import Head from "next/head"
import Link from "next/link"
import Navbar from "./partials/navbar"

export default function Blog(){
  return (
    <>
    <Head>
        <link rel="shortcut icon" href="/code.svg" />
		<title>proPianist1124 - blog</title>
		</Head>
		<Navbar/>
		<center>
			<div className = "header">
				<span className = "head">📝 Blog</span>
			</div>
			<br></br>
			<Link href = "/blog/5-10-2023" style = {{textShadow:"none"}}>
                <div className = "blogCard">
					<h3>5-10-2023</h3>
					<h5>my new personal website! i discuss the making of my new webpage and the resources i used for faster performance!</h5>
				</div>
			</Link>
			<br></br>
			<Link href = "/blog/4-22-2023">
                <div className = "blogCard" style = {{textShadow:"none"}}>
					<h3>4-22-2023</h3>
					<h5>some copyright information and open source software for this specific project. pls read thru this before forking my personal webpage (cus i can sue u 🥶 lol)</h5>
				</div>
			</Link>
		</center>
		</>
  )
}