import React, {useState} from 'react';
import axios from 'axios'

export default (props) => {
    
    const { initPrice, initTitle, initDescription, onSubmitProp } = props
    const [price, setPrice] = useState(initPrice);
    const [title, setTitle] = useState(initTitle);
    const [description, setDescription] = useState(initDescription);

    const submit = (e) => {
        e.preventDefault();
        onSubmitProp({title, price, description})
    }


    return(
        <form onSubmit={ submit }>
            Title:
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}/><br/>
            Price: 
            <input type="number" value={price} onChange={e=> setPrice(e.target.value)}/><br/>
            Description:
            <input type="text" value={description} onChange={e => setDescription(e.target.value)}/><br/>
            <input type="submit" value="Submit"></input>
        </form>
    )
}
