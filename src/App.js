import React,{Component} from "react";
import About from "./components/About";
import {Link, Route,BrowserRouter,Switch} from "react-router-dom";
import {Button, Grid} from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import styles from  './App.css';

class App extends Component{
    render() {
      return(
        <BrowserRouter>
          <div>
            <Header/>
            <Button component={Link} to="/About">
              About
            </Button>
            <Button component={Link} to="/Home">
              Home
            </Button>
            <Link to="/Card">
              Card    
            </Link>
            <Footer/>
          </div>
        </BrowserRouter>
      )
    }
}

export default App;

