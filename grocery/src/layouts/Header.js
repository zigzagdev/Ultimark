import React, { Fragment } from "react";

const fontsize = {
  fontSize: "30px",
  color: "white",
  textDecoration: "none",
  float: "right",
  marginRight: "50px",
};

const fragment = {
  display: "float",
  margin: "40px 0 31px 0",
};

const home = {
  color: "lightblue",
  fontSize: "30px",
  textDecoration: "none",
  float: "left",
  marginLeft: "70px",
};

export default function Header() {
  return (
    <Fragment>
      <div style={fragment}>
        <a href="/" style={home}>
          Home
        </a>
        <a href="/Italian" style={fontsize}>
          Italian
        </a>
        <a href="/French" style={fontsize}>
          French
        </a>
        <a href="/Japanese" style={fontsize}>
          Japanese
        </a>
      </div>
    </Fragment>
  );
}
