import './App.css';
import Main from './views/Main';
import {BrowserRouter, Switch, Link, Route} from "react-router-dom";
import EditGame from './views/EditGame';
import AddNew from './views/AddNew';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Video Games
      </header>
      <BrowserRouter> 
      <Route exact path="/">
        <Main/>
      </Route>
      <Route exact path="/api/vgames/create/new">
        <AddNew/>
      </Route>
      <Route exact path="/api/vgames/:id">
        <EditGame/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
