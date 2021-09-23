import React, { useState } from "react";
import { Button } from "@mui/material";
import { useHistory } from "react-router";
import { ROUTES } from "../../../common-constants";
import FormWrapper from "../../FormWrapper/FormWrapper";
import FormTextInput from "../../FormInput/FormTextInput/FormTextInput";
import { getValue } from "../../../utils/event";
import axios from "axios";
import "./LoginPage.css"

function LoginPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const history = useHistory();

    const onSignIn = () => {
        axios.post("http://192.168.126.41:5000/Login", {
            username,
            password
        }).then(res => {
            if (res.data) {
                history.push(ROUTES.myRides);
            }
        })
    }

    const onSignUp = () => {
        history.push(ROUTES.signup);
    }

    return (
        <FormWrapper>
            <FormTextInput onChange={(e) => setUsername(getValue(e))} label="Username" />
            <FormTextInput onChange={(e) => setPassword(getValue(e))} label="Password" />
            <Button onClick={onSignIn}>Gett in</Button>
            <Button size="small" onClick={onSignUp}>Gett new Account</Button>
        </FormWrapper>
    )
}

export default LoginPage;