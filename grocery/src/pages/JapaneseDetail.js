import { useParams } from "react-router-dom";
import { dishes } from "../assets/dishes";


const character = {
  color: "white",
  textAlign: "left",
};

function JapaneseDetail() {
  const { id } = useParams();
  
  const findById = dishes.find((dish) => dish.id === Number(id));
  console.log(findById);

  return (
    <p style={character}>{findById.content}</p>
  )
}

export default JapaneseDetail;

