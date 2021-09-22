import React, { useState } from "react";
import { TextField, Paper, Button } from "@mui/material";
import "./LoginPage.css"

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSignIn = () => {

    }
    return (
        <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Paper style={{ padding: 20, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                <TextField
                    onChange={(e) => setUsername(e.currentTarget.value)}
                    className="input-field"
                    label="Username"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    className="input-field"
                    label="Password"
                    type="password"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <div>
                    <Button>Sign in</Button>
                    sign up
                </div>
            </Paper>
        </div>
    )
}

export default LoginPage;