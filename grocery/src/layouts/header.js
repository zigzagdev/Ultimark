import logo from '../logo.svg';
import React from "react";
import '../App.css';

const style = {
    backgroundColor:"black",
    position: "absolute",
    bottom: 0,
    width: "100%",
}

const chrct = {
    color: "white",
    textAlign: "right",
    paddingRight: "40px",
}



class Header extends React.Component {
    render() {
        return (
            <div className="App-header">
              世界遺産
            </div>
        );
    }
}

export default Header;
