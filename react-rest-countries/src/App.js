import React from "react";
import "./App.css";
import Country from "./components/Country/Country";
import Header from "./components/Header/Header";
import Person from "./components/Person/Person";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <h1>This is app</h1>
        <p>App from other file</p>
        <Country />
        <Country></Country>
        <Person />
      </div>
    </div>
  );
};

export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { useState, useEffect } from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <LoadCountries></LoadCountries>
//       </header>
//     </div>
//   );
// }

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch(`https://restcountries.com/v3.1/all`)
//       .then((response) => response.json())
//       .then((data) => setCountries(data));
//   }, []);
//   return (
//     <div>
//       <h1>Visiting all the countries of the world!!! </h1>
//       <h3>Total Counties : {countries.length}</h3>
//       {countries.map((country) => (
//         <Country
//           name={country.name.common}
//           population={country.population}
//         ></Country>
//       ))}
//     </div>
//   );
// }

// function Country(props) {
//   // console.log(props);
//   return (
//     <div>
//       <h3>Country Name : {props.name}</h3>
//       <p>Population: {props.population}</p>
//     </div>
//   );
// }

// export default App;
