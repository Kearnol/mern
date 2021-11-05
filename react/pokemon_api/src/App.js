import React, {createContext, useState} from "react";
import './App.css';
import AFetcher from "./components/Axios_fetcher";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
import PokeFetch from "./components/PokeFetch";
import Wrapper from "./components/Wrapper";
import Mycontext from "./components/Mycontext";

function App() {
  const [favPoke, setFavPoke] = useState('')

  return (
    <div className="App">
        {/* <Mycontext.Provider value={favPoke, setFavPoke}>
          <Wrapper>
            <NavBar/>
            <FormWrapper>
                <Form/>
            </FormWrapper>
          </Wrapper>
        </Mycontext.Provider> */}
      <div style={{display:"flex"}}>
        <PokeFetch/>
        <AFetcher/>
      </div>
    </div>
  );
}

export default App;
