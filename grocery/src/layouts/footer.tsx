import React, {Fragment} from 'react';

const style: { [key: string]: string } = {
    marginTop: "auto",
    width: "100%",
    backgroundColor: "black",
};

const rightchrt: { [key: string]: string } = {
    color: "white",
    textAlign: "center",
    paddingLeft: "60px",
};

const place:  {[key: string]: string} = {
    display:"inline-block",
    padding:  "20px 90px 20px ",
    verticalAlign: "top",
}

const innerleft:  {[key: string]: string} = {
    display: "block",
}

const right1:  {[key: string]: string} = {
    color: "white",
}




class Footer extends React.Component {
    render() {
      return (
          <Fragment>
            <div style={style}>
              <div style={place}>
                  <p style={right1}>change1</p>
                  <p style={right1}>change2</p>
                  <p style={right1}>change3</p>
              </div>
              <div style={place}>
                <div style={style}>
                <div style={rightchrt}>©Matthew - Masa</div>
                </div>
              </div>
              <div style={place}>
                <div style={rightchrt}>©Matthew - Masa</div>
              </div>
            </div>
          </Fragment>
      );
    }
}

export default Footer;