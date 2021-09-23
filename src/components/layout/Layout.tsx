import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../Routes/LoginPage/LoginPage";
import RidePage from "../Routes/RidePage";
import Navbar from "./Navbar/Navbar";
import MyOrders from "../orders/MyOrders";

function Layout() {
    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <Navbar />
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginPage} />
                    <Route path="/myRides" component={MyOrders} />
                    <Route path="/ride/:id" component={RidePage} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Layout;