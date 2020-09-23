import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameTag from './Components/NameTag';
import About from './Components/About';
import NavBar from './Components/NavBar';
import Education from './Components/Education';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <NavBar/>
            <NameTag/>
            <About/>
            <Education/>
        </div>
      </header>
    </div>
  );
}

export default App;
