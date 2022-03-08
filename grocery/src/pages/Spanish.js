import React, {Fragment} from "react";
import {spanish} from "../assets/dishes/assets";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


const outline = {
  margin: "38px 0 148px 78px"
}

const title = {
  color: "white",
  textAlign: "left",
  fontSize: "30px",
}

const  titledetail = {
  fontSize: "27px",
  color: "snow",
  margin: "31px 0 0 66px",
  textAlign: "left"
}

function Spanish () {
  return(
    <div style={outline}>
      <div style={title}>
        Spanish Page
      </div>
      <h1 style={titledetail}>Here are Spanish dishes Page .</h1>
      
    </div>
  )
}

export default Spanish;