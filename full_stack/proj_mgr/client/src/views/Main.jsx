import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(res =>{setProducts(res.data); setLoaded(true)})
        .catch(err => console.log("error: ", err));
    }, [products]);        

        return (
            <div>
                <ProductForm/>
                <hr/>
                {console.log("jsx", products)}
                {loaded && <ProductList products={products}/>}
            </div>
        )
    }
