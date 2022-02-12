import React, {Fragment} from "react";
import '../App.css';
import Japanese from '../pages/Japanese';

const style = {
    textAlign: "left",
    margin: "40px 0 0 120px"
}

const fontsize = {
    fontSize: "30px",
    color:"white",
    textDecoration: "none",
}

export default function Header() {
    return (
        <div style={style}>
            <a href="/" style={fontsize}>Home</a>
        </div>
    );
}
