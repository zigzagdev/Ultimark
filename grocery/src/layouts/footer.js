import logo from '../logo.svg';
import React from "react";

const style = {
    backgroundColor:"white",
    width:"100%",
    height:80,
}

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='footer-inner'>
                    <div className='footer-logo'>
                        <p>Learn to code, learn to creative.</p>
                    </div>
                    <ul className='footer-list'>
                        <li>会社概要</li>
                        <li>採用</li>
                        <li>お問い合わせ</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Footer;