import  React from 'react';
import { italian } from "../assets/dishes/assets"
import { useParams } from 'react-router-dom';

interface RouterParams {
    id: string
}

const Italian1:  {[key: string]: string} = {
    color: "white"
}

const ItalianDetail = ()  => {
    const {id} = useParams<RouterParams>();
    const intid = parseInt(id)
    const findid = italian.find((key, value) => key.id == intid);
    
    return (
        <>
            <div style={Italian1}>{}</div>
        </>
    )
}


export default ItalianDetail;