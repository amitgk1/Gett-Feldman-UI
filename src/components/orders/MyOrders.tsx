import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import OrderItem from "./OrderItem";
import JoinRide from "../Routes/JoinRide";

export default function MyOrders(props: any) {

    const oo = 'From Feldman At 10:35 To Bahad 15 At 11:00'
    const [myOrders, setMyOrders] = useState(oo);

    return (
        <React.Fragment>
            <CssBaseline/>
            <div> my orders</div>

            <Container fixed>
                <Box component="div" sx={{p: 2, border: '1px dashed grey'}}>
                    <JoinRide/>
                    <OrderItem text={myOrders}/>
                </Box>
            </Container>
        </React.Fragment>
    );
}