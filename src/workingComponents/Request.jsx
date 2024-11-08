import axios from "axios";

export async function getRequest(url){
    axios.get(url)
    .then((res)=>res.data)
    .then((finalResult)=>{
        console.log(finalResult)
    })
}