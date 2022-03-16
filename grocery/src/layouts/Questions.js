import react from  'react'
import Card from "@material-ui/core/Card";

const outline = {
  margin: "58px 87px 71px 87px",
}

const middleline = {
  margin: "21px, 32px 38px 32px",
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap"
}

const card = {
  width: "19rem",
  height: "342px",
  backgroundColor: "white",
  tableLayout: "fixed",
  margin: "10px 10px 10px 10px",
  flexWrap: "wrap",
  flexDirection: 'column',
}

const cardstyle = {
  margin: "29px 8px 19px 8px"
}

const strong = {
  fontSize:"12px"
}

const after = {
  width: "19rem",
  height: "342px",
  backgroundColor: "black",
  tableLayout: "fixed",
  margin: "10px 10px 10px 10px",
  flexWrap: "wrap",
  flexDirection: 'column',
}



function Questions () {
  return(
    <div style={outline}>
      <div style={middleline}>
        <Card style={card}>
          <div style={cardstyle}>
            <strong style={strong}>
              How can we find the meal which we want to order?
            </strong>
          </div>
        </Card>
        <Card style={card}>
          <div style={cardstyle}>
            <strong style={strong}>
              How can we find the meal which we want to order?
            </strong>
          </div>
        </Card>
        <Card style={card}>
          <div style={cardstyle}>
            <strong style={strong}>
              How can we find the meal which we want to order?
            </strong>
          </div>
        </Card>
        <Card style={card}>
          <div style={cardstyle}>
            <strong style={strong}>
            How can we find the meal which we want to order?
          </strong>
        </div>
      </Card>
        <Card style={card}>
          <div style={cardstyle}>
            <strong style={strong}>
              How can we find the meal which we want to order?
            </strong>
          </div>
        </Card>
        <Card style={after}>
        
        </Card>
      </div>
    </div>
  )
}

export default Questions;