import react, {Components, Fragment} from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Japanese from '../pages/Japanese';
import French from '../pages/French';
import { japanese } from "../assets/dishes/assets";
import Button from "@material-ui/core/Button";

const character = {
  color: 'aliceblue',
  textAlign:'left',
  margin:'56px 0 0 68px',
}

const outline = {
  textAlign: 'center',
  margin: '26px 0 19px 0',
}

const Italic = {
  fontSize: '31px',
  color: 'aliceblue',
}

const line1 = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: '31px',
}

const line2 = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "51px 0 20px 0",
}

const card = {
  width: '221px',
  height: '256px',
  backgroundColor:'snow',
  marginLeft: '110px',
  
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

const word = {
  display: "block",
  fontSize: "20px",
  textDecoration: "none",
  marginTop: "171px",
  color: "blue",
}

const btn = {
  color: "lightblue",
  width: "120px",
  height: "40px",
  backgroundColor: "black",
}


const Main = () => {
  console.log(japanese)
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
          <a href="/Japanese/1" style={word}>
            <Button style={btn}>Sushi</Button>
          </a>
        </div>
        <div style={card}>
          <a href="/Japanese/2" style={word}>
            <Button style={btn}>Takoyaki</Button>
          </a>
        </div>
        <div style={card}>
          <a href="/Japanese/3" style={word}>
            <Button style={btn}>Okonomiyaki</Button>
          </a>
        </div>
        <div style={card}>
          <a href="/Japanese/4" style={word}>
            <Button style={btn}>Macaron</Button>
          </a>
        </div>
      </div>
      <h1 style={introduce2}> Sample French Dish</h1>
      <div style={line2}>
        <div style={card}>
          <a href="/French" style={word}>Sushi</a>
        </div>
        <div style={card}>
         <a href="/French" style={word}>
           <Button style={btn}>Macaron</Button>
         </a>
        </div>
        <div style={card}>
          <a href="/French" style={word}>Sushi</a>
        </div>
        <div style={card}>
          <a href="/French" style={word}>Sushi</a>
        </div>
      </div>
      <h1 style={introduce3}> Sample Italian Dish</h1>
      <div style={line3}>
        <div style={card}>
          <a href="/Italian" style={word}>Seafood Spaghetti</a>
        </div>
        <div style={card}>
          <a href="/Italian" style={word}>Tomato Spaghetti</a>
        </div>
        <div style={card}>
          <a href="/Italian" style={word}>SquidInk Spaghetti</a>
        </div>
        <div style={card}>
          <a href="/Italian" style={word}>Pizza Napoletana</a>
        </div>
      </div>
    </Fragment>
  );
}

export default Main ;
