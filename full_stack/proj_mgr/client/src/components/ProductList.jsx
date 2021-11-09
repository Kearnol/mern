import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import {useHistory} from 'react-router'

export default (props) => {
    console.log(props)
    console.log(props.products[1]._id)
    const history = useHistory();

    return (
        <div>
            {
            props.products.map( (product, i) => 
                <div key={i}>
                <p> {product.title} | {product.price} | {product.description}</p>
                <Link to={`/api/product/${product._id}`}>Edit</Link>
                </div>
                )
            }
        </div>
    )
}