import React from "react";
import axios from "axios";

export default (props) => {
    const {id, successCallBack} = props

    const deleteProduct = () =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then( ()=> successCallBack )
        .catch(err=>console.log(err))
    }

    return(
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}