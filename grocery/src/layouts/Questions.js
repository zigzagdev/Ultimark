import react from  'react'
import Card from "@material-ui/core/Card";

const outline = {
  margin: "58px 0 71px 127px",
}

const middleline = {
  margin: "21px, 0 38px 32px"
}

const card = {
  width: "16rem",
  height: "332px",
  backgroundColor: "white",
  tableLayout: "fixed",
  display: "flex",
  flexDirection: "column",
}

const cardstyle = {
  margin: "29px 8px 19px 8px"
}

function Questions () {
  return(
    <div style={outline}>
      <div style={middleline}>
        <Card style={card}>
          <div style={cardstyle}>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Questions;