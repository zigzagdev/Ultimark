import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

const cardcomponent = {
  margin: "32px 0 18px 62px",
  flexWrap: "wrap",
};

const card = {
  width: "16rem",
  height: "302px",
  backgroundColor: "white",
  tableLayout: "fixed",
  display: "flex",
  flexDirection: "column",
};

const dishnameobj = {
  fontSize: "20px",
  marginTop: "111px",
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
  marginBottom: "7px",
};

function DishItem(props) {
  return (
    <div style={cardcomponent}>
      <Card style={card}>
        <h1 style={dishnameobj}>{props.dish.name}</h1>
        <p style={contentobj}>{props.dish.content}</p>
        <a href={`/Japanese/${props.dish.id}`}>
          <Button style={btn}>Detail</Button>
        </a>
      </Card>
    </div>
  );
}

export { DishItem };
