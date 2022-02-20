import  React, {Fragment, useState, useEffect } from 'react';
import Japanese from './Japanese';
import { useParams } from 'react-router-dom'
import dishes from './Japanese'


console.log(dishes)
const character = {
  color: "white",
  textAlign: "left",
}


function JapaneseDetail () {
  const { id } = useParams()
return(
  <p style={character}>{id}</p>
)
}

export default JapaneseDetail;