import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'


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
            <form onSubmit={ handlesubmit } className="d-flex mt-2 align-items-center justify-content-sm-between">
                <label> Search for: </label>
                <select className="btn-sm btn-outline-warning dropdown-toggle mx-2" style={{color:"black"}} type="button" data-bs-toggle="dropdown" aria-expanded="false" name="resource" id="resource" onChange={(e) => {setResource(e.target.value);console.log(resource)}}>
                    <option value="" selected disabled hidden>Select Resource</option>
                    <option value="people">People</option>
                    <option value="starships">Starships</option>
                    <option value="planets">Planets</option>
                </select>
                <div class="input-group input-group-sm" style={{width:"auto"}}>
                    <span class="input-group-text" id="inputGroup-sizing-sm">ID</span>
                    <input type="number" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" style={{width:"60px", fontSize:"small"}} onChange={(e)=> setID(e.target.value)}/>
                </div>
                <input className={"btn btn-success btn-sm ms-2"} type="submit" value="search"/>
            </form>
    )
}

export default Search