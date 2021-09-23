import React, { useRef, useState } from "react";
import { TextField, Paper, Button } from "@mui/material";
import { useHistory } from "react-router";
import { COURSES, ROLES, ROUTES } from "../../../common-constants";
import FormWrapper from "../../FormWrapper/FormWrapper";
import FormTextInput from "../../FormInput/FormTextInput/FormTextInput";
import Dropdown from "../../dropdown/Dropdown";
import axios from "axios";
import { getValue } from "../../../utils/event";

const Signup = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [id, setId] = useState<string>("");
    const [course, setCourse] = useState<string>("");
    const [userType, setUserType] = useState<string>("");

    const history = useHistory();

    const sendCreateReq = () => {
        axios.post("http://192.168.126.41:5000/CreateUser", {
            firstName,
            lastName,
            password,
            identityCard: id,
            userType,
            courseName: course
        });
        history.push(ROUTES.login);
    }

    return (
        <FormWrapper>
            <FormTextInput onChange={(e) => setFirstName(getValue(e))} label="First Name" />
            <FormTextInput onChange={(e) => setLastName(getValue(e))} label="Last Name" />
            <FormTextInput onChange={(e) => setPassword(getValue(e))} label="Password" />
            <FormTextInput onChange={(e) => setId(getValue(e))} label="id" />
            <Dropdown
                title="Course"
                options={COURSES.map(course => ({ name: course, value: course }))}
                onChange={(value) => setCourse(value as string)}
            />
            <Dropdown
                title="Role"
                options={ROLES.map(role => ({ name: role, value: role }))}
                onChange={(value) => setUserType(value as string)}
            />
            <Button onClick={sendCreateReq}>Gett Account</Button>
        </FormWrapper>
    )
}

export default Signup;