import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const cardcomponent = {
  margin: "32px 0 18px 62px",
  flexWrap: "wrap",
  display: "flex"
};

const card = {
  width: "16rem",
  height: "332px",
  backgroundColor: "white",
  tableLayout: "fixed",
  display: "flex",
  flexDirection: "column",
};

const dishnameobj = {
  fontSize: "20px",
  marginTop: "31px",
  color: "darkblue",
};

const contentobj = {
  fontSize: "17px",
  wordBreak: "break-all",
  overflowWrap: "break-word",
  textAlign: "left",
  margin: "3px 13px 0 13px",
};

const btn = {
  marginTop: "auto",
  marginBottom: "13px",
  backgroundColor: "lightgray",
  textAlign: "center",
  width: "140px",
  marginLeft: "57px"
};

const  href = {
  textDecoration: "none",
  color: "black",
}


function DishItem(props) {
  return (
    <div style={cardcomponent}>
      <Card style={card}>
        <img src={props.dish.image} width={260} height={170} />
        <h1 style={dishnameobj}>{props.dish.itemname}</h1>
        <p style={contentobj}>{props.dish.content}</p>
        <Button style={btn}>
          <a href={`/Japanese/${props.dish.id}`} style={href}>Detail</a>
        </Button>
      </Card>
    </div>
  );
}

export { DishItem };
