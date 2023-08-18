import axios from "axios"
const url:string ="http://localhost:2277/api/todo"

export const getTodo =async ()=>{
       try {
              return await  axios.get(url).then((res)=>{
                     return res.data.data
              })
       } catch (error) {
              console.log(error);
              
       }
}