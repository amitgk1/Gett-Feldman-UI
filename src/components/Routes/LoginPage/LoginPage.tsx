import React, { useRef, useState } from "react";
import { TextField, Paper, Button } from "@mui/material";
import "./LoginPage.css"
import { useHistory } from "react-router";
import { ROUTES } from "../../../common-constants";
import FormWrapper from "../../FormWrapper/FormWrapper";
import FormTextInput from "../../FormInput/FormTextInput/FormTextInput";
import { getValue } from "../../../utils/event";

function LoginPage() {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const history = useHistory();

    const onSignIn = () => {
        // TODO: send to server
    }

    const onSignUp = () => {
        history.push(ROUTES.signup);
    }

    return (
        <FormWrapper>
            <FormTextInput onChange={(e) => setUsername(getValue(e))} label="Username" />
            <FormTextInput onChange={(e) => setPassword(getValue(e))} label="Password" />
            <Button>Gett in</Button>
            <Button size="small" onClick={onSignUp}>Gett new Account</Button>
        </FormWrapper>
    )
}

export default LoginPage;