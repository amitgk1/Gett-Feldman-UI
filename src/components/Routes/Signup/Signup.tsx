import React, { useRef } from "react";
import { TextField, Paper, Button } from "@mui/material";
import { useHistory } from "react-router";
import { COURSES, ROLES, ROUTES } from "../../../common-constants";
import FormWrapper from "../../FormWrapper/FormWrapper";
import FormTextInput from "../../FormInput/FormTextInput/FormTextInput";
import Dropdown from "../../dropdown/Dropdown";

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
            <Dropdown title="Course" options={COURSES.map(course => ({ name: course, value: course }))} />
            <Dropdown title="Role" options={ROLES.map(role => ({ name: role, value: role }))} />
            <Button>Gett Account</Button>
        </FormWrapper>
    )
}

export default Signup;