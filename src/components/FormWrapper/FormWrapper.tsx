import React, { PropsWithChildren, ReactChildren } from 'react'
import { Paper } from '@mui/material';

function FormWrapper({ children }: PropsWithChildren<any>) {
    return (
        <div style={{ height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Paper style={{ padding: 20, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                {children}
            </Paper>
        </div>
    )
}

export default FormWrapper;