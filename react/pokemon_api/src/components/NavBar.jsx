import React, {useContext, useState} from "react";
import Mycontext from "./Mycontext";

const NavBar = () => {
    const context = useContext(Mycontext)
    return(
        <div style={{height:"10vh", width:"100vw", backgroundColor:"rebeccapurple"}}>
            <h2>Your Favorite Pokemon is {context.favPoke}</h2>
        </div>
    )
}

export default NavBar