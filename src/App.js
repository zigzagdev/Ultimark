import React, { Component } from 'react'
import './App.css'
import Home from "./components/Home";
import About from "./components/About";

class App extends Component{
  render() {
    return(
        <div className="App">
          <Home title="Test" message="Fuck you"/>
           <About/>
        </div>
    );
  }
}

export default App;