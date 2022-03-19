import React, { useEffect, useState } from 'react';
import { japanese, italian, french, spanish } from '../assets/dishes/assets';


const input = {
  width:"500px",
  height: "35px",
  backgroundColor: "snow",
  margin: "46px 30px 0 0",
}

const outline = {
  margin: "58px 87px 71px 87px",
}

const search = {
  color: "white",
  textAlign: "center",
  fontSize: "30px",
  marginRight: "50px",
}

const example = {
   margin: "60px 50px 0 0",
   color: "white",
  fontSize: "40px",
}


function Search () {
  const [query, setQuery] = useState("");

  useEffect(() => {

    }
  )
  return(
    <div style={outline}>
      <h1 style={search}>Search Item here ...</h1>
      <input
        placeholder="Input some words"
        type="text"
        style={input}
      />
      <p style={example}>f.e japanese</p>
    </div>
  )
}

export default Search;