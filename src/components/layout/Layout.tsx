import React from "react";
import {Switch, Route} from "react-router-dom";
import CreateNewRide from "../Routes/CreateNewRide";
import LoginPage from "../Routes/LoginPage/LoginPage";
import RidePage from "../Routes/RidePage";
import Navbar from "./Navbar/Navbar";

export default function Layout() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
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

export default Layout;