import React, {Fragment} from 'react';

const style: { [key: string]: string } = {
    position: "absolute",
    bottom: '0',
    width: "100%",
    backgroundColor: "black",
};

const rightchrt: { [key: string]: string } = {
    color: "white",
    textAlign: "right",
    paddingRight: "50px",
};

const  rightplace:  {[key: string]: string} = {
    display:"inline-block",
    padding:  "20px"
}




class Footer extends React.Component {
    render() {
      return (
          <Fragment>
            <div style={style}>
              <div style={rightplace}>
                <p style={rightchrt}>Matthew - Masa</p>
              </div>
              <div style={rightplace}>
                <p style={rightchrt}>Matthew - Masa</p>
              </div>
              <div style={rightplace}>
                <p style={rightchrt}>Matthew - Masa</p>
              </div>
            </div>
          </Fragment>
      );
    }
}

export default Footer;