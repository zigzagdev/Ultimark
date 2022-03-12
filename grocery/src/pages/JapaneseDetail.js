import { useParams } from "react-router-dom";
import { japanese } from "../assets/dishes/assets";


const character = {
  color: "white",
  textAlign: "left",
  
};

const  main = {
  margin: "30px 0 0 180px"
}

function JapaneseDetail() {
  const { id } = useParams();
  const findById = japanese.find((dish) => dish.id === Number(id));
  return (
    <div style={main}>
      <h1 style={character}>{findById.itemname}</h1>
    </div>
  )
}

export default JapaneseDetail;