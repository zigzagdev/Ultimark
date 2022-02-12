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
    padding:  "20px 130px 20px ",
    verticalAlign: "top",
}

const innerleft:  {[key: string]: string} = {
    display: "block",
}

const right1:  {[key: string]: string} = {
    color: "white",
    fontSize: "24px",
}
const right2:  {[key: string]: string} = {
    color: "white",
    paddingTop:"10px",
    fontSize: "18px",
}

const right3:  {[key: string]: string} = {
    color: "white",
    fontSize: "18px",
}




class Footer extends React.Component {
    render() {
      return (
          <Fragment>
            <div style={style}>
              <div style={place}>
                <h1 style={right1}>Test</h1>
                <h2 style={right2}>xxxxxxxx</h2>
                <h3 style={right3}>xxxxxxxxxx</h3>
              </div>
              <div style={place}>
                <h1 style={right1}>お問い合わせ(ヘルプ&ガイド)</h1>
                <h2 style={right2}>お問い合わせ</h2>
              </div>
              <div style={place}>
                <h1 style={right1}>SNS</h1>
                <h2 style={right2}>Instagram</h2>
                <h2 style={right3}>Twitter</h2>
              </div>
            </div>
          </Fragment>
      );
    }
}

export default Footer;