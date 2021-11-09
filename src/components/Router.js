import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Nav";

const Approuter = ({isLoggedIn})=>{
    return(
        <Router>
            {isLoggedIn && <Navigation/>}
            <Switch>
                {isLoggedIn ? 
                (<>
                <Route exact path="/"><Home/>
                </Route>
                <Route path = "/profile"><Profile/></Route>
                </>)
                 : 
                (<><Route path="/"><Auth/>
                </Route></>)}
            </Switch>
        </Router>
    )
}
export default Approuter;