import  React, {Fragment, useState, useEffect} from 'react';
import Japanese from './Japanese'
import { useParams } from "react-router-dom";



const character = {
  color: "white",
  textAlign: "left",
  fontSize: '20px'
}


function JapaneseDetail(props) {
  
  const [japanese,setJapanese]=useState({});
  useEffect(()=> {
    fetch("https://localhost:3000/Japanese/"+props.match.params.id)
      .then(res => res.json())
      .then(
        (result) => {
          setJapanese(result);
        }
      );
  });
  function eachdetail(e){
   console.log(japanese)
  }
return (
  <div>
    <h2 style={character}>Employee Details...</h2>
    <p style={character}>a{props.match.params.id}</p>
  </div>
);
}

export default JapaneseDetail ;