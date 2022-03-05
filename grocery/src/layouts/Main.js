import react, {Components, Fragment} from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Japanese from '../pages/Japanese';
import French from '../pages/French';
import { japanese } from "../assets/dishes/assets";
import Button from "@material-ui/core/Button";
import millefeuille from "../images/Mille-Feuille.jpeg";
import sushi from  "../images/sushi.jpeg";
import okonomiyaki from "../images/okonomiyaki.jpeg";
import croquemonsieur from "../images/croque monsieur.jpeg";
import gyoza from "../images/gyoza.jpeg";
import macaron from "../images/macaron.jpeg";
import quichelorraine from "../images/quichelorraine.jpeg";
import takoyaki from "../images/takoyaki.jpeg";
import pizza from "../images/pizza.jpeg";
import Squiid from "../images/SquidInk Spaghetti.jpeg";
import Tomato from "../images/Tomato Spaghetti.jpeg";
import Seafood from "../images/seafood.webp";


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
  marginTop: "51px",
  color: "blue",
}

const btn = {
  color: "lightblue",
  width: "120px",
  height: "50px",
  backgroundColor: "black",
}


const Main = () => {
  return (
    <Fragment>
      <h1 style={character}>About Us</h1>
      <div style={outline}>
        <i style={Italic}>
          At here, we serve the typical World Food list.<br/>
          In general, we display some type of dishes, so if you can't find what you want, I'm so sorry for it .
        </i>
      </div>
      <h1 style={introduce}> Sample Japanese Dish</h1>
      <div style={line1}>
        <div style={card}>
          <img src={sushi} width={221} height={140}/>
          <a href="/Japanese/1" style={word}>
            <Button style={btn}>Sushi</Button>
          </a>
        </div>
        <div style={card}>
          <img src={takoyaki} width={221} height={140}/>
          <a href="/Japanese/2" style={word}>
            <Button style={btn}>Takoyaki</Button>
          </a>
        </div>
        <div style={card}>
          <img src={gyoza} width={221} height={140}/>
          <a href="/Japanese/3" style={word}>
            <Button style={btn}>Gyoza</Button>
          </a>
        </div>
        <div style={card}>
          <img src={okonomiyaki} width={221} height={140}/>
          <a href="/Japanese/4" style={word}>
            <Button style={btn}>Okonomiyaki</Button>
          </a>
        </div>
      </div>
      <h1 style={introduce2}> Sample French Dish</h1>
      <div style={line2}>
        <div style={card}>
          <img src={macaron} width={221} height={140}/>
          <a href="/French/1" style={word}>
            <Button style={btn}>Macaron</Button>
          </a>
        </div>
        <div style={card}>
          <img src={quichelorraine} width={221} height={140}/>
         <a href="/French/2" style={word}>
           <Button style={btn}>Quiche Lorraine</Button>
         </a>
        </div>
        <div style={card}>
          <img src={croquemonsieur} width={221} height={140}/>
          <a href="/French/3" style={word}>
            <Button style={btn}>Croque-Monsieur</Button>
          </a>
        </div>
        <div style={card}>
          <img src={millefeuille} width={221} height={140}/>
          <a href="/French/4" style={word}>
            <Button style={btn}>Mille-Feuille</Button>
          </a>
        </div>
      </div>
      <h1 style={introduce3}> Sample Italian Dish</h1>
      <div style={line3}>
        <div style={card}>
          <img src={Seafood} width={221} height={140}/>
          <a href="/Italian/1" style={word}>
            <Button style={btn}>Seafood Spaghetti</Button>
          </a>
        </div>
        <div style={card}>
          <img src={Tomato} width={221} height={140}/>
          <a href="/Italian/2" style={word}>
            <Button style={btn}>Tomato Spaghetti</Button>
          </a>
        </div>
        <div style={card}>
          <img src={Squiid} width={221} height={140}/>
          <a href="/Italian/3" style={word}>
            <Button style={btn}>SquidInk Spaghetti</Button>
          </a>
        </div>
        <div style={card}>
          <img src={pizza} width={221} height={140}/>
          <a href="/Italian/4" style={word}>
            <Button style={btn}>Pizza Napoletane</Button>
          </a>
        </div>
      </div>
    </Fragment>
  );
}

export default Main ;
