import React, {Fragment} from 'react';
import {french} from '../assets/dishes/assets';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';

const character: { [key: string]: string } = {
  color: "white",
  textAlign: "left",
  fontSize: "30px",
}

const outline: { [key: string]: string } = {
  margin: "38px 0 148px 78px"
}

const mainobj: { [key: string]: string } = {
  fontSize: "27px",
  color: "snow",
  margin: "31px 0 0 66px",
  textAlign: "left"
}

const cardboss: { [key: string]: string } = {
  display: 'flex',
  flexWrap: 'wrap',
}

const dishnameobj: { [key: string]: string } = {
  fontSize: '20px',
  marginTop: '21px',
  color: 'darkblue',
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

const contentobj: { [key: string]: string } = {
  fontSize: '17px',
  wordBreak: 'break-all',
  overflowWrap: 'break-word',
  textAlign: 'left',
  margin: '1px 7px 0 7px',
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

const image: { [key: string]: string } = {

}

function French()  {
  return (
          <div style={outline}>
            <div style={character}>
              FrenchPage
            </div>
            <h1 style={mainobj}>Here are French dishes Page .</h1>
            <div style={cardboss}>
              {french.map(food => {
                   return (
                     <div style={cardcomponent}>
                       <div style={cardboss}>
                         <Card style={card}>
                           <img src={food.image} width={260} height={170} style={image}/>
                           <h1 style={dishnameobj}>{food.itemname}</h1>
                           <p style={contentobj}>{food.content}</p>
                           <Button style={btn}>
                             <a href={`/French/${food.id}`} style={href}>Detail</a>
                           </Button>
                         </Card>
                       </div>
                     </div>
                   )
                  }
                )
              }
            </div>
          </div>
        );
    }

export default French;