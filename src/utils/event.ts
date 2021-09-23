import React from "react";

export const getValue = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    return event.target.value;
}