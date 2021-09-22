import React from "react";
import {Switch, Route} from "react-router-dom";
import HomePage from "../HomePage";
import CreateNewRide from "../CreateNewRide";
import RidePage from "../RidePage";


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