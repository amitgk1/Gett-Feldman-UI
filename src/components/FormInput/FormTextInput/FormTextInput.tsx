import React from 'react'
import { TextField, TextFieldProps } from '@mui/material';
import classnames from "classnames";
import "./FormTextInput.css"

interface FormTextInputProps {
    label: string;
    className?: string;
}

const FormTextInput = React.forwardRef<HTMLDivElement, FormTextInputProps>(({ className, label }, ref) => {
    return (
        <TextField
            ref={ref}
            className={classnames("input-field", className)}
            label={label}
            InputLabelProps={{
                shrink: true,
            }}
        />
    )
})

export default FormTextInput;