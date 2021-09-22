import React, { useRef } from "react";
import { TextField, Paper, Button } from "@mui/material";
import "./LoginPage.css"

function LoginPage() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const onSignIn = () => {

    }

    return (
        <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Paper style={{ padding: 20, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                <TextField
                    ref={usernameRef}
                    className="input-field"
                    label="Username"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    ref={passwordRef}
                    className="input-field"
                    label="Password"
                    type="password"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button>Gett in</Button>
                <Button size="small">Gett new Account</Button>
            </Paper>
        </div>
    )
}

export default LoginPage;