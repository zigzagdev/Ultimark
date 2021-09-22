import { Router as ReactRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Container } from "./Container";
import { Home } from "../../pages/Home";
import { Demo } from "../../pages/Demo";

const Router = () => {
  return (
    <ReactRouter history={createBrowserHistory()}>
      <Container>
        <Switch>
          <Route exact path={"/"} component={Demo} />
          <Route exact path={"/Home"} component={Home} />
        </Switch>
      </Container>
    </ReactRouter>
  );
};

export { Router };
