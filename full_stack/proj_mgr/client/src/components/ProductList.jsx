import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import Delete from './Delete';


export default (props) => {
    const {removeFromDom} = props

    return (
        <div>
            {
            props.products.map( (product, i) => 
                <div key={i}>
                    <h4> {product.title}</h4>
                    <Link to={`/api/product/${product._id}`}>Details</Link>
                    <Link to={`/api/product/${product._id}/edit`}><button>Edit</button></Link>
                    <Delete id={product._id} successCallBack={()=> removeFromDom(product._id)}/>
                </div>
                )
            }
        </div>
    )
}