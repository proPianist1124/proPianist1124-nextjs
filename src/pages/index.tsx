import Head from "next/head"
import Wave from "./partials/wave"

export default function Home(){
	return (
    	<>
		<Head>
			<title>proPianist1124 - home</title>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
		</Head>
		<center>
			<div style = {{display:"flex", alignItems:"center", justifyContent:"center", height:"500px"}}>
				<Wave/>
				<h1>I&apos;m proPianist1124!</h1>
			</div>
		</center>
		</>
	)
}