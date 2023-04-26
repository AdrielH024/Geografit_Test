import './App.css';
import React, { Component } from 'react';
import Main from './views/main.js';
import Indep from './views/principal/indexprincipal.js';


function App() {
  return (
    <div className="App">
      <Main/>
      <Indep/>
    </div>
  );
}

export default App;
