import React, {Component, Fragment} from "react";
import '../App.css';
import EachMenu from '../components/EachMenu'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Japanese from '../pages/Japanese';


const character = {
    color: "white",
}


export default function Main() {
    return (
         <BrowserRouter>
           <Switch>
             <Route exact path="/Japanese" component={Japanese} aaartartrtr/>
           </Switch>
           <a href="/Japanese" style={character}>japanese</a>
         </BrowserRouter>
    );
}