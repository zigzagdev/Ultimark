import React, {Component} from "react";
import './Each.css';

const style = {
    color:"white"
}

const EachMenu = props => {
    console.log(props)
    return (
        <h1 style={style}> hey you ! {props.name}</h1>
    )
}

export default EachMenu;
