import React, {Fragment} from 'react';
import { french } from '../assets/dishes/assets';

const character: { [key: string]: string } = {
    color: "white",
    textAlign: "left",
    fontSize: "30px",
}

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

const outline: { [key: string]: string } = {
    margin: "38px 0 108px 78px"
}


class French extends React.Component {
    render() {
        return (
          <div style={outline}>
            <div style={character}>
              FrenchPage
            </div>
          </div>
        );
    }
}

export default French;