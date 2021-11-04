import React, {useState, useEffect} from "react";
import {useParams} from "react-router";
import axios from 'axios';

const Spaceships = () => {
    const {id} = useParams();
    const [resultData, setResultData] = useState("notSet");


    useEffect(()=>{
        axios.get(`https://swapi.dev/api/starships/${id}/`)
        .then(result => {console.log("result", result); return result})
        .then(result => {setResultData(result.data)})
        .then(console.log("resultData:", resultData))
        .catch(err =>{setResultData(null); console.log("err: ", err)})
    }, [id])

    return(
        <div>
            
                {
                resultData == "notSet"? <img src="https://i.stack.imgur.com/X8C9v.gif"/> : 
                resultData? <h2> {resultData.name} </h2>: 
                (<div>
                    <h4>These aren't the droids you're looking for.</h4>
                <img src="https://ichef.bbci.co.uk/news/400/cpsprodpb/15A4D/production/_114835688_84cf3a21-e47e-4537-bb61-da53f615fe1f.jpg" alt="Obi-Wan Kenobi" />
                </div> )
                
                }
        
        </div>
    )
}
export default Spaceships