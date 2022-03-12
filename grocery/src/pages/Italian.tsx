import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import {italian} from '../assets/dishes/assets'
import { limit } from "../components/common/commonfunction";


const Italian1: { [key: string]: string } = {
    color: "black",
    fontSize: '25px',
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
    width: "16rem",
    height: '332px',
    backgroundColor: 'white',
    tableLayout: 'fixed',
    display: 'flex',
    flexDirection: 'column',
}

const cardcomponent: { [key: string]: string } = {
    margin: '32px 0 18px 62px',
    flexWrap: 'wrap',

}
const dishnameobj: { [key: string]: string } = {
    fontSize: '20px',
    marginTop: '21px',
    color: 'darkblue',
}

const contentobj: { [key: string]: string } = {
    fontSize: "20px",
    color: "darkblue",
    margin: "auto",
    maxWidth: "200px",
    display: "block",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
}

const btn: { [key: string]: string } = {
    marginTop: "auto",
    marginBottom: "13px",
    backgroundColor: "lightgray",
    textAlign: "center",
    width: "140px",
    marginLeft: "57px"
};

const href: { [key: string]: string } = {
    textDecoration: "none",
    color: "black",
};


function Italian() {
    return (
      <div style={outline}>
          <div style={character}>Italian Page</div>
          <h1 style={mainobj}>Here are Italian dishes Page .</h1>
          <div style={cardboss}>
              {italian.map((food) => {
                    return (
                      <div style={cardcomponent}>
                          <div style={cardboss}>
                              <Card style={card}>
                                  <img
                                    src={food.image}
                                    alt={food.image}
                                    width={260}
                                    height={170}
                                  />
                                  <h1 style={dishnameobj}>
                                      {food.itemname}
                                  </h1>
                                  <p style={contentobj}>
                                      {limit}
                                      {food.content}
                                  </p>
                                  <Button style={btn}>
                                      <a href={`/Italian/${food.id}`} style={href}>Detail</a>
                                  </Button>
                              </Card>
                          </div>
                      </div>
                    )
                })};
          </div>
      </div>
    )
}

export default Italian;
