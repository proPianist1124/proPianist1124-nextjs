export async function get_blog(){
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
	let content = [
		`writing this shit later :)`,
		`I&apos;ve been working on a few side projects during this summer, including <a href = "https://yofro.vercel.app">Yofro</a>, a minimalistic social media webapp. It was previously built with Node.js and Replit DB, but its performance was absolutely garbage. And after hosting it on <a href = "https://render.com">Render</a>, it experienced quite a few outages. The webapp itself was extremely unstable.<br></br>Therefore, I learned Next.js and remade Big Space (its previous name) to Yofro. Its performance is now great, has a great functionality, and doesn&apos;t experience any outages. Praise Vercel. I&apos;m very proud of this project, and I hope you enjoy it!<br></br>Another side project I&apos;ve been working on for one to two weeks is <a href = "https://next-audio.vercel.app">Next Audio</a>. It extracts the audio via the Google Images API from Youtube videos and allows you to &quot;layer&quot; other audios. It&apos;s a great way to listen to music, and I&apos;m very proud of this project as well.`,
		`next.js was a main component of this site because its default fast performance lightweight framework design. my <a href = "https://replit.com/@proPianist1124/proPianist1124-html?v=1">previous personal webpage</a> was too complicated and was made out of pure HTML & CSS, as well as iFrames (incredibly insufficient). i also wanted to create a minamalist personal webpage, like many others in the <a href = "https://discord.gg/friendsofreplit">Replit Discord</a>. However, my main inspiration was from <a href = "https://coder100.vercel.app">Coder100&#39;s webpage</a> because of its simplicity, as well as its extremely fast loading speed and website performance.`,
		`Hey! I&apos;m proPianist1124! I&apos;m a fullstack developer with experence in Nodejs, Nextjs, React, Kaboomjs, Upstash Redis, Bootstrap, jQuery, Express, and many more! I started coding in 2021 on Replit, but stopped recently because of stupid new changes - this includes the new storage update (per repl), more expensive plans with less functionality, and repls going inactive after a few weeks (this honestly pissed me off a lot). Happy reading on the rest of my blog!`
		
	]

    return [dates, descriptions, content]
}