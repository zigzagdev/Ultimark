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

const Italian2:  {[key: string]: string} = {
    color: "white",
    marginTop: "31px",
}


const ItalianDetail = ()  => {
    const {id} = useParams<RouterParams>();
    const intid = parseInt(id)
    const array = italian.find((dish) => dish.id == intid);

    return (
      <div style={outline}>
        <h1 style={Italian1}>{array?.itemname}</h1>
        <h2 style={Italian2}>{array?.content}</h2>
      </div>
    )
}


export default ItalianDetail;