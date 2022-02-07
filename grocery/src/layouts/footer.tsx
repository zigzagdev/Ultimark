import React from 'react';

const style: { [key: string]: string } = {
    position: "absolute",
    bottom: '0',
    width: "100%",
    backgroundColor: "black",
};

const chrct: { [key: string]: string } = {
    color: "white",
    textAlign: "right",
    paddingRight: "50px",
};

class Footer extends React.Component {
    render() {
      return (
        <div style={style}>
          <p style={chrct}>Matthew - Masa</p>
        </div>
      );
    }
}

export default Footer;