import React, { useState } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";

const Approuter = ({isLoggedIn})=>{
    return(
        <Router>
            <Switch>
                {isLoggedIn ? 
                (<>
                <Route path="/"><Home/>
                </Route></>)
                 : 
                (<><Route path="/"><Auth/>
                </Route></>)}
            </Switch>
        </Router>
    )
}
export default Approuter;