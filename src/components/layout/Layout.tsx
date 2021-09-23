import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { ROUTES } from "../../common-constants";
import CreateNewRide from "../Routes/CreateNewRide";
import LoginPage from "../Routes/LoginPage/LoginPage";
import RidePage from "../Routes/RidePage";
import Signup from "../Routes/Signup/Signup";
import Navbar from "./Navbar/NavBar";

function Layout() {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100vw" }}>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path={ROUTES.login} component={LoginPage} />
                    <Route path="/addRide" component={CreateNewRide} />
                    <Route path={ROUTES.addRide} component={CreateNewRide} />
                    <Route path={ROUTES.rideById} component={RidePage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Layout;