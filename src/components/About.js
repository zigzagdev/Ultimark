import React from "react";
import Header from './Header';
import {Link} from 'react-router-dom';
import Footer from './Footer';

const style = {
    color: "skyblue",
    size: "30px",
    marginTop: "100px"
}

class About extends React.Component {

    render() {
        return (
            <div>
                <h1 style={style}>Temporary Success !! </h1>
            </div>
        );
    }
}
export default About;