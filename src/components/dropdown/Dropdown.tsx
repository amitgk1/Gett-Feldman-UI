import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

interface dropdownInformation {
    title: string,
    options: DropdownOption[]
}

interface DropdownOption {
    name: string,
    value: string
}

export default function Dropdown(props: dropdownInformation) {
    const [option, setOption] = useState<string | number>('');
    const [options, setOptions] = useState<DropdownOption[]>(props.options);
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState<string>(props.title);

    const handleChange = (event: SelectChangeEvent<typeof option>) => {
        setOption(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 300 }}>
                <InputLabel id="demo-controlled-open-select-label">{title}</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={option}
                    label={title}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {options.map((o: any) =>
                        <MenuItem value={o.value}> {o.name} </MenuItem>
                    )}
                </Select>
            </FormControl>
        </div>
    );
}