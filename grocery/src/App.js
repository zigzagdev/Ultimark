import "./App.css";
import Footer from "./layouts/Footer.tsx";
import Header from "./layouts/Header";
import DarkMode from "./layouts/DarkMode.tsx";
import React, { Components, Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Japanese from "./pages/Japanese";
import { JapaneseDetail } from "./pages/JapaneseDetail";
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
          <Route exact path="/Japanese/:id" element={<JapaneseDetail />} />
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