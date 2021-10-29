import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';
import FunkyCard from './components/FunkyPersonCard';
import Form from './components/Form';



function App() {
  var person = [
    {"firstName": "Jane", "lastName": "Doe", "age": 45, "hairColor": "Black"},
    {"firstName": "John", "lastName": "Smith", "age": 88, "hairColor": "Brown"},
    {"firstName": "Millard", "lastName": "Fillmore", "age": 50, "hairColor": "Brown"},
    {"firstName": "Maria", "lastName": "Smith", "age": 62, "hairColor": "Brown"}
  ]
  return (
    // <div className="App">
    //   {person.map(person => {return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>})}
    // </div>
    <div className="App">
      {person.map(person => {return <FunkyCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>})}
      <Form/>
    </div>

  );
}

export default App;
