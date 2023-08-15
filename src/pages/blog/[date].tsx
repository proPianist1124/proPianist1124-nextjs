import Head from "next/head"
import { useRouter } from "next/router"

import Error404 from "../404"
import { get_blog } from "../api/blog_data"

export default function Blog_Template({dates, content}:any){
    const router = useRouter();

    if(dates.includes(router.query.date) != true){
        return <Error404 />
    }

    content = content[dates.indexOf(router.query.date)]
    return(
        <>
        <h3 style = {{textAlign:"center"}}>{router.query.date}</h3>
        <div className = "card" style = {{maxWidth:800, lineHeight:1.7}} dangerouslySetInnerHTML={{__html: content}}>
            
        </div>
        </>
    )
}

export async function getServerSideProps(){
    const data = await get_blog();
    return { props: {
        dates:data[0],
        content:data[2],
    } }
}