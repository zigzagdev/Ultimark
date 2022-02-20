import "./App.css";
import Footer from "./layouts/Footer.tsx";
import Header from "./layouts/Header";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Japanese from "./pages/Japanese";
import JapaneseDetail from "./pages/JapaneseDetail";
import French from "./pages/French";
import Main from "./layouts/Main";
import Italian from "./pages/Italian";

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Japanese" component={Japanese} />
          <Route exact path="/Japanese/:id" component={JapaneseDetail} />
          <Route exact path="/French" component={French} />
          <Route exact path="/Italian" component={Italian} />
          {/*<Route component={NoMatch}/>*/}
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
