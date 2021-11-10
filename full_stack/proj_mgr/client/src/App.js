import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails'
import EditProduct from './components/EditProduct';
import {BrowserRouter, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/"> 
        <Main/>
      </Route>
      <Route exact path="/api/product/:id">
        <ProductDetails/>
      </Route>
      <Route exact path="/api/product/:id/edit">
        <EditProduct/>
      </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
