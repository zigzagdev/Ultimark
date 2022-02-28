import  React from 'react';
import { italian } from "../assets/dishes/assets"
import { useParams } from 'react-router-dom';

interface RouterParams {
    id: string
}

interface findid {
    id: number
    itemname: string
    content: string
}

const Italian1:  {[key: string]: string} = {
    color: "white",
}

const outline:  {[key: string]: string} = {
    margin: "62px 0 0 210px",
    textAlign: "left",
}

const ItalianDetail = ()  => {
    const {id} = useParams<RouterParams>();
    const intid = parseInt(id)
    const array = italian.find((dish) => dish.id == intid);
    
    return (
      <div style={outline}>
        <h1 style={Italian1}>{array?.content}</h1>
      </div>
    )
}


export default ItalianDetail;