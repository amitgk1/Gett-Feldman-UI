import React from "react";
import Dropdown from "../dropdown/Dropdown";
import './JoinRide.css';
import {Button} from "@mui/material";

function JoinRide(){

    const ToFromOptions = [{name:'To', value:'To'},{name:'From', value:'From'}]
    const ToFromTitle = 'To/From';

    const placesOptions = [{name:'Mifkada', value:'Mifkada'},{name:'Feldman', value:'Feldman'}]
    const placesTitle = '';

    const timeOptions = [{name:'14:00', value:'14:00'},{name:'15:00', value:'15:00'}]
    const timeTitle = 'Leaves/Arrives At';

    return (
        <div className="dropdown-container">
            <Dropdown
            options={ToFromOptions}
            title={ToFromTitle}/>

            <Dropdown
                options={placesOptions}
                title={placesTitle}/>

            <Dropdown
                options={timeOptions}
                title={timeTitle}/>

            <Button className="confirm">
                Gett
            </Button>
        </div>
    )
}

export default JoinRide;