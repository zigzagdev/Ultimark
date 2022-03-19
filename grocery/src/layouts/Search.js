import React, { useEffect, useState } from 'react';
import { japanese, italian, french, spanish } from '../assets/dishes/assets';


const input = {
  width:"500px",
  height: "35px",
  backgroundColor: "snow",
  marginTop: "46px",
}

const outline = {
  margin: "58px 87px 71px 87px",
}

const search = {
  color: "white",
  textAlign: "left",
  fontSize: "30px",
}

function Search () {
  const [query, setQuery] = useState("");

  useEffect(() => {

    }
  )
  return(
    <div style={outline}>
      <h1 style={search}>Search</h1>
      <input
        placeholder="Input some words"
        type="text"
        style={input}
      />
    </div>
  )
}

export default Search;