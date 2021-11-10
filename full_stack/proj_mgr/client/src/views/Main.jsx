import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        console.log("useEffect Ran")
        axios.get('http://localhost:8000/api/product')
        .then(res =>{console.log(res); setProducts(res.data); setLoaded(true)})
        .catch(err => console.log("error: ", err));
    }, [updated]);        

    const removeFromDom = () =>{
        // setProducts(products.filter(product => product._id != id))
        // if useEffect didn't already setProducts() - this is how^^. 
        setUpdated(!updated);
    }

    const update = () => {
        setUpdated(!updated);
    }

    const createProduct = (product) => {
        axios.post('http://localhost:8000/api/product/new', product)
        .then(newproduct => {console.log(newproduct);
            update();
        })
        .catch(err=> console.log("We had a problem", err))
    }
        return (
            <div>
                <ProductForm onSubmitProp={ createProduct } initTitle={""} initPrice={""} initDescription={""} />
                <hr/>
                {loaded && <ProductList products={products} removeFromDom={ removeFromDom }/>}
            </div>
        )
    }
