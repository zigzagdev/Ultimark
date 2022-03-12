import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom'
import { spanish } from '../assets/dishes/assets'

const character = {
  color: "white",
  textAlign: "left",
  margin: "40px 0 10px 0",
};

const character2 = {
  color: "white",
  textAlign: "left",
};


const split = {
  display: 'flex',
}

const  main = {
  margin: "30px 0 70px 210px"
};

const imagestyle = {
  width: "420px",
  height: "auto",
  margin: "72px 70px 60px 50px",
}

const namecontent = {
  margin: "20px 0 0 210px",
}

const SpanishDetail  = () => {
  const { id } = useParams();
  const findById = spanish.find((dish) => dish.id === Number(id));
  return(
    <Fragment>
      <div style={main}>
        <div style={split}>
          <img
            src={findById.image}
            alt={findById.image}
            style={imagestyle}
          />
          <div style={namecontent}>
            <h1 style={character}>{findById.itemname}</h1>
            <h2 style={character2}><strong>Price is </strong>¥{findById.price}</h2>
            <h3 style={character2}>{findById.content}</h3>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default SpanishDetail;