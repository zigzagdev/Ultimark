import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


const Italian1:  {[key: string]: string} = {
    color: "white",
    fontSize:'25px',
    marginTop: "auto",
    textAlign:"left",
    marginLeft: "122px"
}
const style: { [key: string]: string } = {
    marginTop: "43px",
    width: "100%",
    backgroundColor: "black",
};

const outline: { [key: string]: string } = {
    margin: "38px 0 108px 78px"
}

const character: { [key: string]: string } = {
    color: "white",
    textAlign: "left",
    fontSize: "30px",
}

const mainobj: { [key: string]: string } = {
    fontSize: "27px",
    color: "lightblue",
    margin: "11px 0 0 66px",
    textAlign: "left",
}

const cardboss: { [key: string]: string } = {
    display: 'flex',
    flexWrap: 'wrap',
}

const card: { [key: string]: string } = {
width:"16rem",
    height:'302px',
    backgroundColor:'white',
    tableLayout:'fixed',
    display: 'flex',
    flexDirection: 'column',
}

const cardcomponent: { [key: string]: string } = {
margin:'32px 0 18px 62px',
    flexWrap: 'wrap',

}

const Spaghettis = [
    { "id": 0, "itemname": "Seafood Spaghetti", content:"This is typical Italian Seafood Spaghetti!!"},
    { "id": 1, "itemname": "Tomato Spaghetti" , content:"This is typical Italian Tomato Spaghetti!!"},
]

function Italian () {
    return (
      <Fragment>
        <div style={outline}>
          <div style={character}>Italian Page</div>
          <h1 style={mainobj}>Here are Italian dishes Page .</h1>
            <div style={cardboss}>
              {Spaghettis.map(Spaghetti => {
                return (
                  <div style={cardcomponent}>
                    <Card style={card}>
                              <div style={Italian1}>{Spaghetti.itemname}</div>
                    </Card>
                  </div>
                )
              }
            )}
          </div>
        </div>
        </Fragment>
    )
}
export default Italian ;
