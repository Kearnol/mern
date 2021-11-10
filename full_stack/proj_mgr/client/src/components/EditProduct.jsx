import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory, useParams, Link} from "react-router-dom";
import PersonForm from './ProductForm'
import Delete from './Delete';

export default () => {
    const {id} = useParams();
    const [loaded, setLoaded] = useState(false);
    const [product, setProduct] = useState("");
    const history = useHistory();
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            setProduct(res.data)
            setLoaded(true)})
        .catch(err => console.log("We hit an issue:", err))
    }, [id])

    const updatePerson = (person) => {;
        axios.put(`http://localhost:8000/api/product/${id}`, person)
        .then(res => console.log("updatedPerson: ", res))
        .catch(err => console.log(err));
    }



    return(
        <>
        {loaded? 
        <PersonForm onSubmitProp={updatePerson} initPrice={product.price} initTitle={product.title} initDescription={product.description}/>:""
        }
        <Delete id={id} successCallBack={()=> history.push('/')}/>
        <Link to={`/`}><button>Back</button></Link>
        </> 
    )
}