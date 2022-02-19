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

const Spaghettis = [
    { "id": 0, "itemname": "Seafood Spaghetti", content:"This is typical Italian Seafood Spaghetti!!"},
    { "id": 1, "itemname": "Tomato Spaghetti" , content:"This is typical Italian Tomato Spaghetti!!"},
]

function Italian () {
    return (
      <Fragment>
        <div style={outline}>
          <div style={character}>Italian Page</div>
            <div>
              {Spaghettis.map(Spaghetti => {
                return (
                    <div style={Italian1}>{Spaghetti.itemname}</div>

                )
              }
            )}
          </div>
        </div>
        </Fragment>
    )
}
export default Italian ;
