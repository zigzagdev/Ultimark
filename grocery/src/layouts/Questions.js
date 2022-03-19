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
  margin: "29px 10px 29px 10px",
  flexDirection: 'column',
}

const cardstyle = {
  margin: "29px 8px 34px 8px"
}

const strong = {
  fontSize:"22px"
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

const content = {
  margin: "40px 8px 0 8px"
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
            <p style={content}>
              Click the SearchHeader and  input some words what you want to know .
            </p>
          </div>
        </Card>
        <Card style={card}>
          <div style={cardstyle}>
            <strong style={strong}>
              What types of foods can find here ?
            </strong>
            <p style={content}>
              For example, Italian, French, Japanese and Spanish food can find here .
            </p>
          </div>
        </Card>
        <Card style={card}>
          <div style={cardstyle}>
            <strong style={strong}>
              How can we find the meal which we want to order?
            </strong>
            <i style={content}>
              To use the Search form if u don't mind .
            </i>
          </div>
        </Card>
        <Card style={card}>
          <div style={cardstyle}>
            <strong style={strong}>
              Can we order this food at here ?
            </strong>
            <p style={content}>
              Sorry can't order here. Maybe later.....
            </p>
          </div>
        </Card>
        <Card style={after}>
          Not write here anything.
        </Card>
        <Card style={after}>
          Not write here anything.
        </Card>
      </div>
    </div>
  )
}

export default Questions;