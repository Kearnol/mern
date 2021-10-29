import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import Header from './components/Header';
import Advertisement from './components/Advertisement';
import Navigation from './components/Navigation';
import SubContent from './components/SubContent';


function App() {
  return (
    <div className="App">
      <Header/>
      <div className="mainFlex">
        <Navigation/>
        <Main>
          <SubContent/>
          <Advertisement/>
        </Main>
      </div>
    </div>
  );
}

export default App;
