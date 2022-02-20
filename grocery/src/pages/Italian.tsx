import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';


const Italian1:  {[key: string]: string} = {
    color: "black",
    fontSize:'25px',
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
const dishnameobj: { [key: string]: string } = {
fontSize: '20px',
    marginTop:'111px',
    color: 'darkblue',
}

const contentobj: { [key: string]: string } = {
    fontSize: '17px',
    wordBreak: 'break-all',
    overflowWrap: 'break-word',
    textAlign: 'left',
    margin: '3px 13px 0 13px',
}


const foods = [
    { "id": 0, "itemname": "Seafood Spaghetti", content:"This is typical Italian Seafood Spaghetti!!"},
    { "id": 1, "itemname": "Tomato Spaghetti" , content:"This is typical Italian Tomato Spaghetti!!"},
    { "id": 2, "itemname": "SquidInk Spaghetti" , content:"This is typical Italian SquidInk Spaghetti"},
    { "id": 3, "itemname": "Pizza Napoletana" , content:"This is typical Italian Pizza Napoletana"},
    { "id": 4, "itemname": "Pizza Tonda Romana" , content:"This is typical Italian Pizza Tonda Romana"}
]

function Italian () {
    console.log(foods[2])
    return (
      <Fragment>
        <div style={outline}>
          <div style={character}>Italian Page</div>
          <h1 style={mainobj}>Here are Italian dishes Page .</h1>
            <div style={cardboss}>
              {foods.map(food => {
                return (
                  <div style={cardcomponent}>
                    <Card style={card}>
                      <h1 style={dishnameobj}>{food.itemname}</h1>
                      <p style={contentobj}>{food.content}</p>
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
