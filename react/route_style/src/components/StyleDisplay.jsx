import React, {useState} from "react";
import {useParams} from "react-router-dom"

const StyleDisplay = () => {
    let {input, bgcolor, color} = useParams();
    input % 1 == 0? input = parseInt(input, 10): console.log(false)
    console.log(typeof(input));
    
    const style={
        backgroundColor: `${bgcolor}`,
        color: `${color}`
    }

    return(
        <>
        { typeof(input) === "string"? <div style={style}>The word is: {input} </div>: <div style={style}>The number is: {input} </div> }
        </>
    )
}

export default StyleDisplay