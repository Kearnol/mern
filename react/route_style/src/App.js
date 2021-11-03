import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import './App.css';
import StyleDisplay from "./components/StyleDisplay";

function App() {
  return (
    <BrowserRouter className="App">
        <header className="App-header">
          <h1>Welcome to the Home Page!</h1>
        </header>
    
    <div className="App">
    <Switch>
      <Route path="/:input/:bgcolor?/:color?"> 
        <StyleDisplay/>
      </Route>
    </Switch>  
    </div>
    
    </BrowserRouter>
  );
}

export default App;
