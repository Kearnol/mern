import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";


const Search = () => {
    const [resource, setResource] = useState();
    const [id, setID] = useState();
    const history = useHistory();

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(resource)
        history.push(`/${resource}/${id}`) 
    }

    return(
        <>
        <form onSubmit={ handlesubmit }>
            <label> Search for:</label>
            <select name="resource" id="resource" onChange={(e) => {setResource(e.target.value);console.log(resource)}}>
                <option value="" selected disabled hidden>Select Resource</option>
                <option value="people">People</option>
                <option value="starships">Starships</option>
                <option value="planets">Planets</option>

            </select>
            <input type="number" name="id" placeholder="id" onChange={(e)=> setID(e.target.value)}/>
            <input type="submit" value="search"/>
        </form>
        </>
    )
}

export default Search