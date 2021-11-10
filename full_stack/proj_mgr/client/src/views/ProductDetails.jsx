import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useHistory } from 'react-router-dom'

export default () => {
    const [product, setProduct] = useState("");
    const [dataReturned, setDataReturned] = useState(false)
    const {id} = useParams();
    const history = useHistory();

    useEffect (()=> {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then((res)=>{return res})
        .then((res)=> {setProduct(res.data); setDataReturned(true)})
        .catch((err)=> console.log("err",err));
    }, []);

        const goBack = (e) => {
            e.preventDefault();
            history.push("/");
        }
    
    return (
        <>
        <div>
            <h3>Product Title: </h3><p>{product.title}</p>
            <h3>Product Price:</h3><p>${product.price}</p>
            <h3>Product Description:</h3> <p>{product.description}</p>
        </div>
        <button onClick={ goBack }> Back </button>
        </>
    )
}
