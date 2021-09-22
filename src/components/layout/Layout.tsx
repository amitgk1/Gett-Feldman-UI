import React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import CreateNewRide from "../Routes/CreateNewRide";
import HomePage from "../Routes/HomePage";
import RidePage from "../Routes/RidePage";
import Navbar from "./Navbar/Navbar";

export default function Layout() {
    return (
        <div>
            <Navbar/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/addRide" component={CreateNewRide}/>
                    <Route path="/ride/:id" component={RidePage}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}