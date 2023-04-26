import './App.css';
import React, { Component } from 'react';
import Main from './views/main.jsx';
import Indep from './views/principal/indexprincipal.jsx';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Sobre from './views/about/componets/about';
import Loginpage from './views/login/login';


function App() {
  return (
    <div className="App">
       <Main/>
      <Router>
        <Routes>
         <Route path='/' element={<Indep/>}></Route>
         <Route path='/sobre' element={<Sobre/>}></Route>
         <Route path='/login' element={<Loginpage/>}></Route>
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
