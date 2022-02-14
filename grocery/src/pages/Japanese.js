import React, {Fragment} from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const character = {
  color: "white",
  textAlign: "left",
}

const outline  = {
  margin: "28px 0 108px 78px"
}

const main = {
  
}

const mainobj  = {
  fontSize: "27px",
  color: "lightpink",
  margin: "11px 0 0 66px",
  textAlign: "left",
}

const  cardboss = {
  display: 'flex',
  flexWrap: 'wrap',
}

const cardcomponent = {
  margin:'32px 0 18px 62px',
  flexWrap: 'wrap',
}

const card = {
  width:"15rem",
  height:'260px',
  backgroundColor:'white',
  
}

const dishnameobj = {
  fontSize: '20px',
  marginLeft:'10px',
}



export default function Japanese() {
  const dishes =  [
    { "name": "sushi", "content": "test1", "image": "test.jpg" },
    { "name": "takoyaki", "content": "test2", "image": "test2.jpg" },
    { "name": "gyoza", "content": "delicious!", "image": "test3.jpg" },
    { "name": "okonomiyaki", "content": "delicious!", "image": "test4.jpg" },
    { "name": "kiritanpo", "content": "delicious!", "image": "test5.jpg" },
    { "name": "nattou", "content": "delicious!", "image": "test6.jpg" },
    { "name": "goyachnpuru", "content": "delicious!", "image": "test7.jpg" },
  ]
  const dishname = dishes.map(dish => dish.name)
  const dishcontent = dishes.map(dish => dish.content)
  const dishimage = dishes.map(dish => dish.image)
return (
  <Fragment>
    <div style={outline}>
      <h1 style={character}>Japanese food page</h1>
      <div style={main}>
        <h1 style={mainobj}>Here are famous Japanese Dishes !</h1>
      </div>
      <div style={cardboss}>
        <div style={cardcomponent}>
          <Card style={card}>
            <img src="../../../../Desktop/sushi.jpeg"/>
            <h1 style={dishnameobj}>{dishname[0]}</h1>
          </Card>
        </div>
      </div>
    </div>
  </Fragment>
  );
}
