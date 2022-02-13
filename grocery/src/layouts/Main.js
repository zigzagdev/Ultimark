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
  margin: '26px 0 19px 0',
}

const Italic = {
  fontSize: '31px',
  color: "azure",
}

const line1 = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: "31px",
}

const line2 = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "51px 0 20px 0",
}

const card = {
  width: '100px',
  height: '100px',
  backgroundColor:'white',
  marginLeft: "210px",
  justifyContent: 'spacebetween'
}

const introduce = {
  fontSize: '18px',
  margin: '29px 0 0 114px',
  textAlign: 'left',
  color: 'Azure',
}

const introduce2 = {
  fontSize: '18px',
  margin: '49px 0 0 114px',
  textAlign: 'left',
  color: 'Azure',
}

const introduce3 = {
  fontSize: '18px',
  margin: '49px 0 0 114px',
  textAlign: 'left',
  color: 'Azure',
}

const line3 = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "51px 0 110px 0",
}


const Main = () => {
  return (
    <Fragment>
      <h1 style={character}>About Us</h1>
      <div style={outline}>
        <i style={Italic}>
          At here, we serve the typical World Food list.<br/>
          In general, we display some type dish, so if you can't find what you want, I'm so sorry for it .
        </i>
      </div>
      <h1 style={introduce}> Sample Japanese Dish</h1>
      <div style={line1}>
        <div style={card}>
          aaaaaaaaa
        </div>
        <div style={card}>
          aaaaaaaaa
        </div>
        <div style={card}>
          aaaaaaaaa
        </div>
        <div style={card}>
          aaaaaaaaa
        </div>
      </div>
      <h1 style={introduce2}> Sample French Dish</h1>
      <div style={line2}>
        <div style={card}>
          aaaaaaaaa
        </div>
        <div style={card}>
          aaaaaaaaa
        </div>
        <div style={card}>
          aaaaaaaaa
        </div>
        <div style={card}>
          aaaaaaaaa
        </div>
      </div>
      <h1 style={introduce3}> Sample French Dish</h1>
      <div style={line3}>
        <div style={card}>
          aaaaaaaaa
        </div>
        <div style={card}>
          aaaaaaaaa
        </div>
        <div style={card}>
          aaaaaaaaa
        </div>
        <div style={card}>
          aaaaaaaaa
        </div>
      </div>
    </Fragment>
  );
}

export default Main ;
