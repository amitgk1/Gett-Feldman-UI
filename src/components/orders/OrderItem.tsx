import React from "react";
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

interface OrderItemProps {
    text: string
}

export default function OrderItem({text}: OrderItemProps){
    return(
        <div>
            <span> {text} </span>
            <IconButton aria-label="delete" disabled color="primary">
                <DeleteIcon />
            </IconButton>
        </div>
    )
}