import React, { useRef } from "react";
import { TextField, Paper, Button } from "@mui/material";
import { useHistory } from "react-router";
import { ROUTES } from "../../../common-constants";
import FormWrapper from "../../FormWrapper/FormWrapper";
import FormTextInput from "../../FormInput/FormTextInput/FormTextInput";

const Signup = () => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);
    const nameRef = useRef(null);
    const history = useHistory();

    return (
        <FormWrapper>
            <FormTextInput ref={usernameRef} label="Username" />
            <FormTextInput ref={passwordRef} label="Password" />
            <FormTextInput ref={nameRef} label="Name" />
            <Button>Gett in</Button>
            {/* <Button size="small" onClick={onSignUp}>Gett new Account</Button> */}
        </FormWrapper>
    )
}

export default Signup;