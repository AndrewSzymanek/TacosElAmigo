import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar.js';
import Home from './Components/home.js';
import Menu from './Components/menu.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div><NavBar /></div>   
        <div><Home /></div>  
        <div><Menu/></div>  
      </div>     
    );
  }
}

export default App;
