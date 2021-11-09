import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails'
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/api/product"> 
        <Main/>
      </Route>
      <Route exact path="/api/product/:id">
        <ProductDetails/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
