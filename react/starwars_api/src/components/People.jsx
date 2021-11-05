import React, {useState, useEffect} from "react";
import {useParams} from "react-router";
import axios from 'axios';
import {useHistory} from "react-router-dom"

const People = () => {
    const {id} = useParams();
    const [resultData, setResultData] = useState("notSet");
    const history = useHistory();
    const [homeworld, setHomeWorld] = useState("")


    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}/`)
        .then(result => {console.log("result", result); return result})
        .then(result => {setResultData(result.data)})
        .then(console.log("resultData:", resultData))
        .catch(err =>{setResultData(null); console.log("err: ", err)})
    }, [id])

    function transfer(e){
        e.preventDefault();
        console.log("homeworld", resultData.homeworld)
        let planetIDArr = resultData.homeworld.slice(-4);
        console.log("planetIDArr", planetIDArr)
        var planetID = []
        console.log(planetID)
        for (let x of planetIDArr){
            console.log(x);
            console.log("planetID", planetID)
            if (!isNaN(x)){
                planetID.push(x);
            }
        }
        if (planetID.length > 1){
            planetID = planetID.join("")
        }else{planetID= planetID[0]}
        console.log(planetID)
        history.push(`/planets/${planetID}`)
    }

    useEffect(()=> {
        if(resultData != null){
            axios.get(`${resultData.homeworld}`)
            .then(res => {console.log("res", res); return res})
            .then(res => {setHomeWorld(res.data.name)})
            .catch(err => console.log(err))
        }else{ return "n/a"
        }}, [resultData])
        
        

    return(
        <div>
                {
                resultData == "notSet"? <img src="https://i.stack.imgur.com/X8C9v.gif"/> : resultData? (<>
                <table className={"table"}>
                    <tr>
                        <th>Name</th>
                        <th>Eye Color</th>
                        <th>Gender</th>
                        <th>Hair Color</th>
                        <th>Homeworld</th>
                        <th>Mass</th>
                        <th>Skin_Color</th>
                        <th>More</th>
                    </tr>
                    <tr>
                        <td>{resultData.name}</td>
                        <td>{resultData.eye_color}</td>
                        <td>{resultData.gender}</td>
                        <td>{resultData.hair_color}</td>
                        <td><button onClick={ transfer } className={"btn-primary btn-sm"} style={{backgroundColor:"#0d6efd"}}>{homeworld}</button></td>
                        <td>{resultData.mass}</td>
                        <td>{resultData.skin_color}</td>
                        <td><a href={`https://www.google.com/search?q=${resultData.name}+star+wars`}>Learn More</a></td>
                    </tr>
                </table>
                </>):
                (<div>
                    <h4>These aren't the droids you're looking for.</h4>
                <img src="https://ichef.bbci.co.uk/news/400/cpsprodpb/15A4D/production/_114835688_84cf3a21-e47e-4537-bb61-da53f615fe1f.jpg" alt="Obi-Wan Kenobi" />
                </div> )
                }
        
        </div>
    )
}
export default People