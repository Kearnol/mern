import React, { useEffect, useState } from 'react'
import axios from 'axios';
import VGameForm from '../components/VGameForm';
import {withRouter, useHistory, BrowserRouter, Link, Route} from 'react-router-dom';

export default () => {
    const [updated, setUpdated] = useState(false);
    const [vgames, setVGames] = useState("Loading...");
    const [loaded, setLoaded] = useState(false);
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/vgames`)
        .then(res=>{
            setVGames(res.data); 
            console.log(res); 
            setLoaded(true); 
        })
        .catch(err=> console.log(err))
    }, [updated])
    
    const deleteGame = (id, title) => {
        let response = window.confirm(`You are about to delete ${title}. Continue?`)
        console.log(response)
        if(response){
            axios.delete(`http://localhost:8000/api/vgames/${id}`)
            .then(()=>{
                setUpdated(!updated);
                console.log("updated:", updated)
            })
            .catch(err => console.log(err))
        }else{return}
    }

    return(
        <>
        <Link to={`/api/vgames/create/new`}><button>Add Game</button></Link>
        <div>
            <table>
                <tr>
                    <th key={22}>Title</th>
                    <th key={23}>Options</th>
                </tr>
            {loaded?
                vgames.map((vgame, i) => 
                    <>
                    <tr key={i}>
                        <td>{vgame.title}</td>
                        <td>
                            <Link to={`/api/vgames/${vgame._id}`}>
                                <button>Edit</button>
                            </Link>
                            <button onClick={ () => deleteGame(vgame._id, vgame.title) }>Delete</button>
                        </td>
                    </tr>
                    </>
                ):""
            }
            </table>
        </div>
        </>
    )
}