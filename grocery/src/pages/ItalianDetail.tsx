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

const ItalianDetail = ()  => {
    const {id} = useParams<RouterParams>();
    const intid = parseInt(id)
    const findid = italian.find((dish) => dish.id == intid);
    // console.log(findid.id)
    return (
        <>
            <div style={Italian1}>{findid!.content}</div>
        </>
    )
}


export default ItalianDetail;