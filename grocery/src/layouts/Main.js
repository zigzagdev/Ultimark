import react, {Components, Fragment} from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Japanese from '../pages/Japanese';
import French from '../pages/French';

const character = {
  color: "white",
  textAlign:'left',
  marginLeft:'68px',
}

const outline = {

}


const Main = () => {
  return (
    <Fragment>
      
        <h1 style={character}>About Us</h1>

    </Fragment>
  );
}

export default Main ;
