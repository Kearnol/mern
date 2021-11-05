import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Box_gen from './components.js/Box_gen';
import Box_display from "./components.js/Box_display";
import Form from "./components.js/Form.jsx";
import Results from "./components.js/Results";
import Tabs from "./components.js/Tabs";


function App() {
  const [myChar, setMyChar] = useState([])
  const [colors, setColors] = useState([])

  //angying in regards to 'myChar' references the example done by Nicole where I coded along. 
  const addMyChar = (character) => {
    setMyChar([...myChar, character]);
  }
  
  const changeAliveStatus = idx => {
    console.log("Index is", idx);
    const charToUpdate = myChar[idx];
    charToUpdate.isAlive = !charToUpdate.isAlive;
    setMyChar([...myChar]);
  }
  
  //box_gen assignment
  const color_box = (color) => {
    setColors([...colors, color]);
    console.log(colors);
  }

  //tabs assignment

  const tabs = [
    {
      label: "Tab 1",
      content: "Tab 1 content here"
    },
    {
      label: "Tab 2",
      content: "Tab 2 content here"
    },
    {
      label: "Tab 3",
      content: "Tab 3 content here"
    }
  ]


  return (
    <div className="App">
      {/* This is Nicoles forms example */}
      <Form onSubmitChar={addMyChar}/>
      <Results allCharacters={myChar} updateIsAlive={changeAliveStatus}/>


      {/* box_gen assignment */}
      <Box_gen color_box = { color_box } />
      <Box_display colors={colors}/>


      {/* tabs assingment */}
      <Tabs tabs = {tabs}/>

    </div>
  );
}

export default App;
