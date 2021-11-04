
import './App.css';
import Search from './components/Search';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import People from './components/People';
import Spaceships from './components/Spaceships';
import Planets from './components/Planets';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter> 
      <header className={"App-header"}><h2>Starwars Intel</h2></header>
      <Search/>

      <Switch> 
        <Route path="/people/:id">
          <People></People>
        </Route>
        <Route path="/starships/:id">
          <Spaceships></Spaceships>
        </Route>
        <Route path="/planets/:id">
          <Planets></Planets>
        </Route>
      </Switch>

      </BrowserRouter>
    </div>
  );
}



export default App;
