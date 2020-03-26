import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/navbar';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <div><NavBar /></div>   
      </div>    
      </BrowserRouter>
     
    );
  }
}

export default App;
