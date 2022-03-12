import React from 'react';
import { useParams } from 'react-router-dom'
import { spanish } from '../assets/dishes/assets'

const character = {
  color: "white",
  textAlign: "left"
};

const  main = {
  margin: "30px 0 0 180px"
}

const SpanishDetail  = () => {
  const { id } = useParams();
  console.log(id)
  const findById = spanish.find((dish) => dish.id === Number(id));
  return(
    <div style={main}>
    
    </div>
  )
}

export default SpanishDetail;