import { useParams } from "react-router-dom";
import { japanese } from "../assets/dishes/assets";
import React, { Fragment } from 'react'


const character = {
  color: "white",
  textAlign: "left"
};

const character2  = {
  margin: "62px 0 0 21px",
  textAlign: "left",
  color: "snow"
}

const  main = {
  margin: "30px 0 0 180px"
}

const imagestyle = {
  width: "420px",
  height: "310px",
  margin: "10px 0 50px 30px"
}


function JapaneseDetail() {
  const { id } = useParams();
  const findById = japanese.find((dish) => dish.id === Number(id));
  return (
    <Fragment>
      <div style={main}>
        <h1 style={character}>{findById.itemname}</h1>
        <h2 style={character2}>{findById.content}</h2>
      </div>
      <div>
        <img
          style={imagestyle}
          src={findById.image}
          alt={findById.image}
        />
      </div>
    </Fragment>
  )
}

export default JapaneseDetail;