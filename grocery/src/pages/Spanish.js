import React, {Fragment} from "react";
import {spanish} from "../assets/dishes/assets";


const outline = {
  margin: "38px 0 148px 78px"
}

const  title = {
  color: "white",
  textAlign: "left",
  fontSize: "30px",
}

console.log(spanish)
function Spanish () {
  return(
    <div style={outline}>
      <h1 style={title}>Here are Spanish dishes Page .</h1>
      
    </div>
  )
}

export default Spanish;