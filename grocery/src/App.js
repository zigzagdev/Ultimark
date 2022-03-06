import React, { Components } from "react";
import Header from  './layouts/Header'
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Japanese from "./pages/Japanese";
import JapaneseDetail from "./pages/JapaneseDetail";
import French from "./pages/French";
import FrenchDetail from "./pages/FrenchDetail"
import Main from "./layouts/Main";
import Italian from "./pages/Italian";
import ItalianDetail from  "./pages/ItalianDetail"
import Footer from './layouts/Footer'
import Form from './pages/Form'
import './App.css'
import Pagination from './layouts/pagination'
import ContactForm from './pages/ContactForm'



function App() {
  return (
    <div className="Wrapper">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main}/>
          <Route exact path="/Japanese" component={Japanese}/>
          <Route exact path="/Japanese/:id" component={JapaneseDetail}/>
          <Route exact path="/French" component={French}/>
          <Route exact path="/French/:id" component={FrenchDetail}/>
          <Route exact path="/Italian" component={Italian}/>
          <Route exact path="/Italian/:id" component={ItalianDetail}/>
          <Route exact path="/Form" component={Form}/>
          <Route exact path="/ContactForm" component={ContactForm}/>
        </Switch>
      </BrowserRouter>
      {/*<Pagination/>*/}
      <Footer/>
    </div>
  );
}

export default App;
