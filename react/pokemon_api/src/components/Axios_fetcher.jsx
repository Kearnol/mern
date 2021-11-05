import React, {useState, useEffect} from "react";
import axios from "axios";

const AFetcher = () => {
    
    const [resultData, setResultData] = useState([]);

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
        .then(res=> {console.log("res", res); return res})
        .then(res=>setResultData(res.data.results));
    }, [])

    return(
        <div>
    <h2>Axios Fetch</h2>
    <ul style={{listStyle:"none"}}>
        {console.log(resultData)}
        {resultData.map( (pokemon, i)=>{return <li>{pokemon.name}</li>} )}
    </ul>
        </div>
    )
}

export default AFetcher