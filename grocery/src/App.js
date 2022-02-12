import './App.css';
import  Footer from  './layouts/Footer.tsx'
import  Header from './layouts/Header'
import  DarkMode from  './layouts/DarkMode.tsx'
import React, {Component} from 'react';
import { BrowserRouter, Switch, Route, useHistory } from "react-router-dom";

import Japanese from './pages/Japanese';
import French from './pages/French';
import Italian from './pages/Italian'

const character = {
  color: "white",
}

class App extends Component{
  render() {
  return (
      <div className="Wrapper">
        <Header/>
        <BrowserRouter>
          <Switch>
            <Route exact path="/Japanese" component={Japanese}>
            </Route>
            <Route exact path="/French" component={French} />
            <Route exact path="/Italian" component={Italian} />
          </Switch>
        </BrowserRouter>
        <Footer/>
      </div>
     );
  }
}

export default App;
