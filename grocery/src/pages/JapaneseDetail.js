import React from "react";

const character = {
  color: "white",
  textAlign: "left",
};

const JapaneseDetail = (props) => {
  console.log(props.dish);
  return <p style={character}>Japanese</p>;
};

export { JapaneseDetail };