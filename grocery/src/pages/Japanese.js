import React, {Fragment} from "react";


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


export default function Japanese() {
  const dishes =  [
    { "name": "sushi", "content": "test1", "image": "test.jpg" },
    { "name": "takoyaki", "content": "test2", "image": "test2.jpg" },
    { "name": "gyoza", "content": "delicious!", "image": "test3.jpg" },
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
    </div>
  </Fragment>
  );
}
