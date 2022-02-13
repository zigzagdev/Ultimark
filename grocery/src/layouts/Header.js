import React, {Fragment} from "react";
import Japanese from '../pages/Japanese';

const style = {
    textAlign: "left",
    margin: "40px 0 0 120px"
}

const fontsize = {
    fontSize: "30px",
    color:"white",
    textDecoration: "none",
    float:'right',
    marginRight:'50px'
}

const fragment = {　　　　　　
    display:"float",
    marginTop:'30px',
}
const home = {
    color: 'lightblue',
    fontSize:'30px',
    textDecoration: "none",
    float: 'left',
    marginLeft:'70px',
    
}

export default function Header() {
    return (
      <Fragment>
        <div style={fragment}>
          <a href="/" style={home}>Home</a>
          <a href="/Italian" style={fontsize}>Italian</a>
          <a href="/French" style={fontsize}>French</a>
          <a href="/Japanese" style={fontsize} >Japanese</a>
        </div>
      </Fragment>
    );
}
