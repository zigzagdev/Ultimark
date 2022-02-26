import  React from 'react';
import { italian } from "../assets/dishes/assets"
import { useParams } from 'react-router-dom';


interface findid {
    id: number;
    itemname: string;
    content: string;
}

const Italian1:  {[key: string]: string} = {
    color: "white"
}

function ItalianDetail() {

    const id: number = useParams();
    const findid = italian.find((key, value) => key.id == Number(id));
    console.log(id)
    return (
        <h1 style={Italian1}>{findid}</h1>
    )
}


export default ItalianDetail;