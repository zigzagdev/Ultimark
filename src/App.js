import React,{Component} from "react";
import About from "./components/About";
import {Link, Route,BrowserRouter,Switch} from "react-router-dom";
import {Button, Card, Grid} from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";


class App extends Component{
    render() {
      return(
        <BrowserRouter>
          <div>
            <Header/>
            <Grid item xs={1} md={3} lg={6}>
             <Card>
              <Link to='/about'>About</Link>
             </Card>
             <Grid>
                <Link to='/home'>Home</Link>
             </Grid>
            </Grid>
            <Footer/>
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
                <Route>
                   <Footer/>
                </Route>
            </Switch>
        </BrowserRouter>
      )
    }
}

export default App;

