import React, { Fragment } from "react";
import { japanese } from "../assets/dishes/assets";
import { DishItem } from "../components/dishitem/Index";


const character = {
  color: "white",
  textAlign: "left",
 
};

const outline = {
  margin: "28px 0 108px 78px",
};

const mainobj = {
  fontSize: "27px",
  color: "lightpink",
  margin: "11px 0 0 66px",
  textAlign: "left",
};

const cardboss = {
  display: "flex",
  flexWrap: "wrap",
};

function Japanese() {
  return (
    <Fragment>
      <div style={outline}>
        <h1 style={character}>Japanese food page</h1>
        <div>
          <h1 style={mainobj}>Here are famous Japanese Dishes !</h1>
        </div>
        <div style={cardboss}>
          {japanese.map((dish, i) => (
            <DishItem key={i} dish={dish} />
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Japanese;
