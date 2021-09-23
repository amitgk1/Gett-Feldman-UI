import React, { useRef } from "react";
import { TextField, Paper, Button } from "@mui/material";
import "./LoginPage.css"
import { useHistory } from "react-router";
import { ROUTES } from "../../../common-constants";
import FormWrapper from "../../FormWrapper/FormWrapper";
import FormTextInput from "../../FormInput/FormTextInput/FormTextInput";

function LoginPage() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const history = useHistory();

    const onSignIn = () => {
        // TODO: send to server
    }

    const onSignUp = () => {
        history.push(ROUTES.signup);
    }

    return (
        <FormWrapper>
            <FormTextInput ref={usernameRef} label="Username" />
            <FormTextInput ref={passwordRef} label="Password" />
            <Button>Gett in</Button>
            <Button size="small" onClick={onSignUp}>Gett new Account</Button>
        </FormWrapper>
    )
}

export default LoginPage;