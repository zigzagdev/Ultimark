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
    textDecoration: "none",
}
const right2:  {[key: string]: string} = {
    color: "white",
    paddingTop:"10px",
    fontSize: "18px",
    textDecoration: "none"
}

const right3:  {[key: string]: string} = {
    color: "white",
    fontSize: "18px",
}

const li1:  {[key: string]: string} = {
    color: "azure",
    fontSize: "24px",
    marginTop: "10px",
    textDecoration: "none",
}

const margin:  {[key: string]: string} = {
    paddingTop: "7px",

}


class Footer extends React.Component {
  render() {
    return (
      <div style={style}>
        <div style={place}>
          <h1 style={right1}>Index</h1>
          <h2 style={margin}><a href="/Italian" style={right1}>Italian</a></h2>
          <h3 style={margin}><a href="/French" style={li1}>French</a></h3>
          <h4 style={margin}><a href="/Japanese" style={li1}>Japanese</a></h4>
          <h4 style={margin}><a href="/Spanish" style={li1}>Spanish</a></h4>
        </div>
        <div style={place}>
          <h1 style={right1}>SNS</h1>
          <h2 style={right2}>Instagram</h2>
          <h3 style={right3}>Twitter</h3>
        </div>
        <div style={place}>
          <h1 style={right1}>Others</h1>
          <h2 style={right2}>
            <a href="/Form" style={right2}>
              Contact Form
            </a>
          </h2>
        </div>
      </div>
    );
  }
}
export default Footer;