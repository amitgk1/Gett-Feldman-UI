import React from 'react'
import { TextField, TextFieldProps } from '@mui/material';
import classnames from "classnames";
import "./FormTextInput.css"

interface FormTextInputProps {
    label: string;
    className?: string;
    onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => any;
}

const FormTextInput = ({ className, label, onChange }: FormTextInputProps) => {
    return (
        <TextField
            onChange={(e) => { console.log(e.target.value); onChange(e) }}
            className={classnames("input-field", className)}
            label={label}
            InputLabelProps={{
                shrink: true,
            }}
        />
    )
}

export default FormTextInput;