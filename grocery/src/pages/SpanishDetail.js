import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import { spanish } from '../assets/dishes/assets'

const character = {
  color: "white",
  textAlign: "left"
};

const character2  = {
  margin: "62px 0 0 21px",
  textAlign: "left",
  color: "snow"
};

const  main = {
  margin: "30px 0 0 180px"
};

const imagestyle = {
  width: "420px",
  height: "310px",
  margin: "30px 0 50px 0",
  textAlign: "left"
}

const SpanishDetail  = () => {
  const { id } = useParams();
  const findById = spanish.find((dish) => dish.id === Number(id));
  return(
    <Fragment>
      <div style={main}>
        <h1 style={character}>{findById.itemname}</h1>
        <h2 style={character2}>{findById.content}</h2>
      </div>
      <div>
        <img
          src={findById.image}
          alt={findById.image}
          style={imagestyle}
        />
      </div>
    </Fragment>
  )
}

export default SpanishDetail;