import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './Navbar.css';
import logo from '../../../images/GettFeldman.png';

export default function Navbar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">

                <Toolbar>
                    <img src={logo} alt="Logo" className="logo"/>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Button color="inherit" size="large">Order</Button>
                        <Button color="inherit" size="large">Time Table</Button>
                        <Button color="inherit" size="large">Print</Button>
                        <Button color="inherit" size="large">Manage</Button>
                    </Typography>

                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>

        </Box>
    );
}