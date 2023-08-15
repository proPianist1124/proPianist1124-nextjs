import Head from "next/head"
import Link from "next/link"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";

import { get_blog } from "./api/blog_data"

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
		<div className = "card" style = {{border:"none", textAlign:"left", lineHeight:1.75}}>
			{dates.map((date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined) =>
				<>
				<Link href = {`/blog/${date}`} key = {String(date)}>
					{date}&nbsp;&nbsp;{descriptions[dates.indexOf(date)]}
				</Link>
				<br></br>
				</>
			)}
		</div>
	</center>
	<br></br><br></br>
	</>
  )
}

export async function getServerSideProps(){
	const blog_data = await get_blog()

	return {
		props: {
			dates:blog_data[0],
			descriptions:blog_data[1]
		}
	}
}