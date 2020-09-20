import React from 'react';
import logo from './logo.svg';
import './App.css';
import NameTag from './Components/NameTag';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
            <NameTag/>
            <About/>
        </div>
      </header>
    </div>
  );
}

export default App;
