import React, {useState, useEffect} from "react";
import './App.css';

function App() {
  
  const [pokemon, setPokemon] = useState([]);

  const fetch_pokemon = () =>{
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=807")
    .then(res=>{return res.json()})
    .then(res=> {console.log(res.results); return res}) 
    .then(res=> setPokemon(res.results)) 
    .catch(err=>{console.log('err', err)});
    console.log(pokemon);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h3>Pokemon API</h3>
      </header>
      <button onClick={()=>fetch_pokemon()}>Get Pokemon!</button>
      <ul style={{listStyle:"none"}}>
        {pokemon.map((pokemon, i)=>{return<li>{pokemon.name}</li>})}
      </ul>
    </div>
  );
}

export default App;
