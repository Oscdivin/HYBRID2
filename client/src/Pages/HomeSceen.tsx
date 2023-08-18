// import React from "react"
import styled from "styled-components"
import React, {useEffect,useState} from "react"
import { getTodo } from "../Utils/APIs"
const HomeSceen =()=>{
       const  [todo, setTodo] =useState([])
       useEffect(() => {
       // const todos = 
       getTodo().then((res:any)=>{
              setTodo(res)
       })
       }, [])
       return(
              <div>
<Box>
       <Main>
              <Text>Todo Entries</Text>
              <Card>
                     <Date>
                            <DateTime>mon</DateTime>
                            <DateTime>Tue</DateTime>
                            <DateTime>Wed</DateTime>
                            <DateTime>Thr</DateTime>
                            <DateTime>Fir</DateTime>
                            <DateTime>Sat</DateTime>
                            <DateTime>Sun</DateTime>
                     </Date>
                     <Sup>
                         {
                            todo?.map((props:any)=>(

                                      <Box2  key={props._id}bg={props.complete? "2": ""}/>    
                            ))
                         }
                            {/* <Box2/> */}
                     </Sup>
              </Card>
              <br /><br /><br />
              <INputoutline>

              <Input placeholder="Enter your name"/> <Button>Add To do</Button>
              </INputoutline>

              <br />
               <INputoutline>

              <Input placeholder="Enter your name"/> <Button>Add To do</Button>
              </INputoutline>
       </Main>
</Box>
              </div>
       )
}


export default HomeSceen;

const Button=styled.div`


`
const INputoutline=styled.div`
display: flex;
width: 60%;
justify-content: space-between;
`
const Input=styled.input``
const Sup=styled.div`
width: 500px;
height: 100%;
background-color: lightgray;

`
const Box2=styled.div<{bg: string}>`
display: flex;
justify-content: center;
align-items: center;
width: 12px;
height: 12px;
margin:  5px;
background-color: ${({bg}) => bg? "#40c463":"lightgray"} ;


`
const Date=styled.div` 
height: 100%;
flex-direction: column;
display: flex;
flex-wrap: wrap;

   `
const DateTime=styled.div`
font-family: 700;
font-size: 10px;
width: 25px;
height: 25px;
background-color: gray;
margin: 5px;
display: flex;
justify-content: center;
align-items: center;
`

const Box =styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Main=styled.div`

padding: 10px 20px;

`
const Text =styled.div`
font-weight: 900px;
font-size: 20px;
/* text-transform: uppercase; */
letter-spacing:  5px;
display: flex;
justify-content: center;

`
const Card =styled.div`
width: 500px;
height: 300px;
border:  1px solid silver;
border-radius: 3px;
display: flex;
`