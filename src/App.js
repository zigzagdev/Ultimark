import React,{Component} from "react";
import About from "./components/About";
import Home from "./components/Home";
import Path from "./components/Path";
import {Link, Route,BrowserRouter,Switch} from "react-router-dom";
import {Button, Grid} from "@mui/material";


class App extends Component{
    render() {
      return(
        <BrowserRouter>
          <div>
            <Grid item xs={1} md={3} lg={6}>
             <Grid>
              <Link to='/about'>About</Link>
             </Grid>
             <Grid>
                <Link to='/home'>Home</Link>
             </Grid>
            </Grid>
          </div>

            <Switch>
                <Route path='/about'>
                    <About />
                </Route>
                <Route>
                <Button color="primary"
                        component={Link}
                        to="/Home">
                    Test in Grid React
                </Button>
                </Route>
            </Switch>
        </BrowserRouter>
      )
    }
}

export default App;

