import React from "react";

const style = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "black",
}

const chrct = {
    color: "black",
    textAlign: "right",
    paddingRight: "40px",
}

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