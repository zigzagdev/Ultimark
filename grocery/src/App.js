import "./App.css";
import Footer from "./layouts/Footer.tsx";
import Header from "./layouts/Header";
import DarkMode from "./layouts/DarkMode.tsx";
import react, { Components, Fragment } from "react";
import EachMenu from "./components/EachMenu";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Japanese from "./pages/Japanese";
import French from "./pages/French";
import Main from "./layouts/Main";

function App() {
  return (
    <div className="Wrapper">
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Japanese" component={Japanese} />
          <Route exact path="/French" component={French} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
