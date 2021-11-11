import React, { useState } from 'react';
import axios from 'axios';
import VGameForm from '../components/VGameForm';
import {useHistory} from 'react-router-dom';

export default () => {
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    const createVGame = (vgame)=>{
        axios.post(`http://localhost:8000/api/vgames`, vgame)
        .then(res => {
            console.log(res);
            history.push("/")
        })
        .catch(err=> {
            const errorResponse = err.response.data.errors;
            console.log("errorResult", errorResponse)
            const errorArr=[];
            for (const key in errorResponse) {
                errorArr.push(errorResponse[key].message)
                console.log("errorArr", errorArr)
            }
            setErrors(errorArr);
            console.log(err)
            console.log("errors Set to:", errors)
        })
    }

    return(
        <>
        {errors.map((err, i)=> <p style = {{color:"red"}} key={i}>{err}</p>  )}
        <VGameForm initTitle={""} onSubmitProp={ createVGame } />
        </>
    )
}