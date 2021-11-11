import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useParams, useHistory, BrowserRounter, Link} from "react-router-dom";
import VGameForm from '../components/VGameForm';

export default ()=>{
    const {id} = useParams();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([])
    const [vgame, setVGame] = useState("");
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/vgames/${id}`)
        .then(res => {
            console.log(res);
            setVGame(res.data); 
            setLoaded(!loaded)})
        .catch(err=> { console.log(err) });
    },[])

    const updateGame = (game ) => {
        axios.put(`http://localhost:8000/api/vgames/${id}`, game)
        .then(res => {console.log(res);
            history.push("/");
        })
        .catch(err => {
            console.log(err)
            const errorResponse = err.response.data.errors
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message)
                console.log("errorArr", errorArr)
            }
            setErrors(errorArr);
        });
    }

    return(
        <>
        {loaded?
        <>
        {errors.map((err, i) => <p key={i} style={{color:"red"}}>{err}</p>)}
        <VGameForm initTitle={vgame.title} onSubmitProp={updateGame}/>
        </>:
        "Loading"
        }
        </>
    )
}