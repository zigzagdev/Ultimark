import React, {Fragment, useState, useEffect} from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const character = {
  color: "white",
  textAlign: "left",
}

const outline  = {
  margin: "28px 0 108px 78px"
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
  width:"16rem",
  height:'302px',
  backgroundColor:'white',
  tableLayout:'fixed',
  display: 'flex',
  flexDirection: 'column',
}

const dishnameobj = {
  fontSize: '20px',
  marginTop:'111px',
  color: 'darkblue',
}

const contentobj = {
  fontSize: '17px',
  wordBreak: 'break-all',
  overflowWrap: 'break-word',
  textAlign: 'left',
  margin: '3px 13px 0 13px',
}

const btn = {
  marginTop: 'auto',
  marginBottom: '7px',
}


export default function Japanese() {
  const dishes = [
    { name: "sushi", content: "test1", image: "test.jpg" },
    { name: "takoyaki", content: "test2", image: "test2.jpg" },
    { name: "gyoza", content: "delicious!", image: "test3.jpg" },
    { name: "okonomiyaki", content: "delicious!delicious!delicious!delicious!delicious!delicious!delicious!delicious!", image: "test4.jpg" },
    { name: "kiritanpo", content: "This is AkitaPre. dish.", image: "test5.jpg" },
    { name: "nattou", content: "delicious!", image: "test6.jpg" },
    { name: "goyachnpuru", content: "delicious!", image: "test7.jpg" },
  ];
  
  return (
    <Fragment>
      <div style={outline}>
        <h1 style={character}>Japanese food page</h1>
        <div>
          <h1 style={mainobj}>Here are famous Japanese Dishes !</h1>
        </div>
        <div style={cardboss}>
          {dishes.map(dish => {
            console.log(dish)
            return (
              <div style={cardcomponent}>
                <Fragment>
                  <Card style={card}>
                    <h1 style={dishnameobj}>{dish.name}</h1>
                    <p style={contentobj}>{dish.content}</p>
                    <a href={`/Japanese/${dish.name}`}>
                      <Button style={btn}>Detail</Button>
                    </a>
                  </Card>
                </Fragment>
              </div>
            )
          })}
        </div>
      </div>
    </Fragment>
  );
}