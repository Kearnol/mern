import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory, useParams, Link} from "react-router-dom";

export default () => {
    const {id} = useParams();
    const [loaded, setLoaded] = useState(false);
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            setTitle(res.data.title); 
            setPrice(res.data.price); 
            setDescription(res.data.description)
            setLoaded(true)})
        .catch(err => console.log("We hit an issue:", err))
    }, [id])

    const editHandler = (e) => {
        e.preventDefault();
        let obj = {title, price, description}
        axios.put(`http://localhost:8000/api/product/${id}`, obj)
        .then(res => console.log("It's here: ", res))
        .catch(err => console.log(err));
    }

    const deleteProduct = (id) =>{
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            console.log(res);
            history.push(`/`);
        })
        .catch(err=>console.log(err))
    }

    return(
        <>
        {loaded? 
        <form onSubmit={editHandler}>
            <label>Title:</label>
            <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)}/><br/>
            <label>Price:</label>
            <input type="number" value={price} onChange={(e)=> setPrice(e.target.value)}/><br/>
            <label>Description:</label>
            <input type="textarea" value={description} onChange={(e)=> setDescription(e.target.value)}/><br/>
            <input type="submit" value={"Update"} /> 
        </form>:
        ""}
        <button onClick={(e) => deleteProduct(id)}>Delete</button>
        <Link to={`/`}><button>Back</button></Link>
        </> 
    )
}