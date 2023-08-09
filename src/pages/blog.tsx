import Head from "next/head"
import Link from "next/link"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

export default function Blog({dates, descriptions}:any){
  return (
    <>
    <Head>
		<title>proPianist1124 - blog</title>
	</Head>
	<center>
		<div className = "header">
			<h2>📝 Blog</h2>
		</div>
		<br></br>
		{dates.map((date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined) =>
			<>
			<Link href = {`/blog/${date}`} key = {String(date)}>
				<div className = "card">
					<h3>{date}</h3>
					<p>{descriptions[dates.indexOf(date)]}</p>
				</div>
			</Link>
			<br></br>
			</>
		)}
	</center>
	<br></br><br></br>
	</>
  )
}

export function getServerSideProps(){
	let dates = [
		"8-8-2023",
		"8-4-2023",
		"5-10-2023", 
		"4-22-2023"
	];
	let descriptions = [
		"sharing something new ive been working on this week",
		"update to my summer thus far and why ive been on hiatus",
		"my new personal website! i used nextjs for its fast performance",
		"an about me for yall to know and why i quit replit"
	];

	return {
		props: {dates, descriptions}
	}
}