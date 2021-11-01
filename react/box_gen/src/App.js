import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Box_gen from './components.js/Box_gen';
import Box_display from "./components.js/Box_display";
import Form from "./components.js/Form.jsx";
import Results from "./components.js/Results";


function App() {
  const [myChar, setMyChar] = useState([])
  const [colors, setColors] = useState([])

  const addMyChar = (character) => {
    setMyChar([...myChar, character]);
  }
  
  const changeAliveStatus = idx => {
    console.log("Index is", idx);
    const charToUpdate = myChar[idx];
    charToUpdate.isAlive = !charToUpdate.isAlive;
    setMyChar([...myChar]);
    // how does this change it, does this just copy it how it is? how does charToUpdate actually change MyChar??
  }
  
  
  const color_box = (color) => {
    setColors([...colors, color]);
    console.log(colors);
  }


  return (
    <div className="App">
      <Form onSubmitChar={addMyChar}/>
      <Results allCharacters={myChar} updateIsAlive={changeAliveStatus}/>

      <Box_gen color_box = { color_box } />
      <Box_display colors={colors}/>
    </div>
  );
}

export default App;
