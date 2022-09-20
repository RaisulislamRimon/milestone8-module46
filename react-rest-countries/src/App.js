import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoadCountries></LoadCountries>
      </header>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([])
  useEffect(()=> {
    fetch(`https://restcountries.com/v3.1/all`)
    .then(response=>response.json())
    .then(data=>setCountries(data))
  }, [])
  return (
    <div>
      <h1>Visiting all the countries of the world!!! </h1>
      <h3>Total Counties : {countries.length}</h3>
    </div>
  )
}

export default App;
