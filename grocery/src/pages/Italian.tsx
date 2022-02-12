import React, {Fragment} from 'react';


const Italian1:  {[key: string]: string} = {
    color: "white",
    fontSize: "18px",
    marginTop: "auto",
    textAlign:"left",
    marginLeft: "122px"
}
const style: { [key: string]: string } = {
    marginTop: "20px",
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

class Italian extends React.Component {
    render(){
        return(
           <Fragment>
             <div style={style}>
               <h1 style={Italian1}>Here is Italian Menu Page .</h1>
               <div>

               </div>
             </div>
           </Fragment>
        );
    }
}

export default Italian ;