import React from "react";
import {Switch, Route} from "react-router-dom";
import CreateNewRide from "../Routes/CreateNewRide";
import HomePage from "../Routes/HomePage";
import RidePage from "../Routes/RidePage";


function Layout() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/addRide" component={CreateNewRide}/>
                <Route path="/ride/:id" component={RidePage}/>
            </Switch>
        </div>
    );
}