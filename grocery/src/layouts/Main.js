import react, {Components, Fragment} from 'react';
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import Japanese from '../pages/Japanese';
import French from '../pages/French';


const character = {
  color: "white",
}

const Main = () => {
  const history = useHistory();
  return (
    <Fragment>
      <a href="/Japanese" style={character}>Japanese</a>
      <p><a href="/French" style={character}>French</a></p>
      <a href="/Italian" style={character}>Italian</a>
    </Fragment>
  );
}

export default Main ;
