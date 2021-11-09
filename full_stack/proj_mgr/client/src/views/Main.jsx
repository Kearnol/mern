import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';

export default () => {
    const [message, setMessage] = useState("Loading...");
    const [product, setProduct] = useState("")
    useEffect( () =>
    {axios.get('http://localhost:8000/api')
        .then(res=>setMessage(res.data.message))}, []);        

        return (
            <div>
                <ProductForm/>
            </div>
        )
    }
