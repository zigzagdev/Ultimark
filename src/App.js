import React,{Component} from "react";
import About from "./components/About";
import {Link, Route,BrowserRouter,Switch} from "react-router-dom";
import {Button, Grid} from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";


class App extends Component{
    render() {
      return(
        <BrowserRouter>
          <div>
            <Header/>
             <Grid>
              <Link to='/about'>About</Link>
             </Grid>
             <Grid>
               <Button color="primary"
                       component={Link}
                       to="/Home">
                     Home
               </Button>
             </Grid>
               <Link to='/Card'>Card</Link>
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
                   <Card/>
                </Route>
            </Switch>
        </BrowserRouter>
      )
    }
}

export default App;

