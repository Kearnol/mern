import React, {useState} from 'react';
import axios from 'axios'

export default () => {
    const [price, setPrice] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product/new', {title, price, description})
        .then(newproduct => console.log(newproduct))
        .catch(err=> console.log("We had a problem", err))
    }

    return(
        <form onSubmit={ submitHandler }>
            Title:
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/><br/>
            Price: 
            <input type="number" value={price} onChange={e=> setPrice(e.target.value)}/><br/>
            Description:
            <input type="text" value={description} onChange={e => setDescription(e.target.value)}/><br/>
            <input type="submit" value="Add Product"></input>
        </form>
    )
}
