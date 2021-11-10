import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"


export default (props) => {
    const {removeFromDom} = props
    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            removeFromDom(id)
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            {
            props.products.map( (product, i) => 
                <div key={i}>
                    <h4> {product.title}</h4>
                    <Link to={`/api/product/${product._id}`}>Details</Link>
                    <Link to={`/api/product/${product._id}/edit`}><button>Edit</button></Link>
                    <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                </div>
                )
            }
        </div>
    )
}