import React, {Component, Fragment} from "react";
import './Each.css';

const style = {
    color:"white"
}

const EachMenu = props => {
    return (
       <Fragment>
        <h1 style={style}> hey you ! {props.name}</h1>
       </Fragment>
    )
}
export default EachMenu;
