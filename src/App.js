import React,{Component} from "react";
import About from "./components/About";
import {Link, Route,BrowserRouter,Switch} from "react-router-dom";
import {Button, Grid} from "@mui/material";
import Footer from "./components/Footer";
import Header from "./components/Header";


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
            <Footer/>
          </div>

            <Switch>
                <Route path='/about'>
                    <About />
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

