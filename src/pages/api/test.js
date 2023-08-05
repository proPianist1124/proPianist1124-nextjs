export async function getData(){
    //https://jsonplaceholder.typicode.com/todos/1
    // http://localhost:3000/api/test
    let fetched_data = await fetch("http://localhost:3000/api/test");
	let data = fetched_data.json()

    return data;
}

export default async function handler(req, res) {
    //const jsonData = await getData()
    res.json(
        {
            "project1":{
                "name":"Project 1",
                "description":"This is project 1",
            }
        })
}