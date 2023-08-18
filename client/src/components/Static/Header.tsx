import React from "react"
import {NavLink} from "react-router-dom"
import pic from "../../assets/Screenshot_2023-05-30_115013-removebg-preview.png"
import styled from "styled-components"
const Header =()=>{
       return(
              <div>
<COntainer >
       <Mian>
              <Logo src={pic}/>

              <Nav>
                     <NavLinked to="/">
                            Auth
                     </NavLinked>
                     <NavLinked to="/todo">
                            todo
                     </NavLinked>
              </Nav>
       </Mian>
</COntainer>
              </div>
       )
}


export default Header;
const Mian=styled.div`

width: 90%;
height: 100%;
display: flex;
align-items: center;
/* background-color: red; */

`
const COntainer=styled.div`
width: 100%;
height: 70px;
background-color: #000;
display: flex;
justify-content: center;

`
const Logo=styled.img`
/* height: 40px; */
font-weight: 400;
/* min-height: 50px; */
display: flex;
align-items: center;
justify-content: center;
`
const NavLinked=styled(NavLink)`
text-transform:uppercase;
font-weight: 700;
margin: 0 10px;
padding: 10px 20px;
border-radius: 3px;
transition:all 300ms;
text-decoration: none;
:hover{
       cursor: pointer;
       background-color: purple;
       transform:translate(0,5px);
}
&.active{

}

`
const Nav=styled.div`
display: flex;
`
