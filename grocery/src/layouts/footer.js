import logo from '../logo.svg';
import React from "react";

const style = {
    backgroundColor:"black",
    position: "absolute",
    bottom: 0,
    width: "100%",
}

const color = {
    color: "white",
}



class Footer extends React.Component {
    render() {
        return (
            <div style={style}>
                <div className='footer-inner'>
                    <div className='footer-logo'>
                        <p>Learn to code, learn to creative.</p>
                    </div>
                    <ul className='footer-list'>
                        <li style={color}>会社概要</li>
                        <li style={color}>採用</li>
                        <li style={color}>お問い合わせ</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;