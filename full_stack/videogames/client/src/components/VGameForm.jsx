import React, {useState, useEffect} from 'react';
import axios from 'axios'; 

export default (props)=>{
    const {onSubmitProp} = props;
    const {initTitle} = props;
    const [title, setTitle] = useState(initTitle)
    console.log("props", props)
    const submit = (e)=> {
        e.preventDefault();
        onSubmitProp({title});
        setTitle("");
    }

    return(
        <form onSubmit={ submit }>
            <label>Title:</label>
            <input 
                type="text" 
                onChange={(e)=> setTitle(e.target.value)} value={title}/>
            <input type="submit" value={"submit"}/>
        </form>
    )
}