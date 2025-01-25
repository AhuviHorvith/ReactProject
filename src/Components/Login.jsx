import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux"
import { useState } from 'react';
import { createUser } from "../Store/UserSlice"
const Login = () => {
   
    const dispatch = useDispatch()
    const userObj = useSelector(x=>x.UserSlice)
    const [inputName, setInputName] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);

    const handleInputChangeName = (event) => {
        setInputName(event.target.value);
    };
    const handleInputChangePhone = (event) => {
        setInputPhone(event.target.value);
    };
    const handleInputChangeEmail = (event) => {
        setInputEmail(event.target.value);
    };
    const AddUser=(email,phone,name)=>{
        dispatch(createUser({Name:name,Phone:phone ,Email:email,}))
        setAlertVisible(true);
        setTimeout(() => {
            setAlertVisible(false); 
        }, 3000);
    }
    return (
        <>
            Login
              {alertVisible && (
                        <Alert variant="filled" severity="success">
                             "{inputName}" נוסף/ה בהצלחה!
                        </Alert>
                    )}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', marginLeft: '25%' }}>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 2, width: '65ch' } }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label=" שם" variant="outlined" value={inputName} onChange={handleInputChangeName} />
                    <TextField id="outlined-basic" label="טלפון" variant="outlined" value={inputPhone} onChange={handleInputChangePhone} />
                    <TextField id="outlined-basic" label="מייל" variant="outlined" value={inputEmail} onChange={handleInputChangeEmail} />
                    <Button onClick={() => AddUser(inputEmail, inputPhone, inputName)}variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Box>
            </div>
            </>
            
    );
};

export default Login;
