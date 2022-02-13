import react, {Components, Fragment} from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Japanese from '../pages/Japanese';
import French from '../pages/French';

const character = {
  color: "white",
  textAlign:'left',
  margin:'56px 0 0 68px',
}

const outline = {
  textAlign: 'center',
  marginTop: '26px'
}

const Italic = {
  fontsize: '27px',
  color: "azure",
}


const Main = () => {
  return (
    <Fragment>
      <h1 style={character}>About Us</h1>
      <div style={outline}>
        <i style={Italic}>
          At here, we serve the typical World Food list. In general, we display
          some type dish, so if you can't find what you want, I'm so sorry for it .
        </i>
      </div>
    </Fragment>
  );
}

export default Main ;
