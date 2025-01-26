// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import SendIcon from '@mui/icons-material/Send';
// import Alert from '@mui/material/Alert';
// import { useDispatch, useSelector } from "react-redux"
// import { useState } from 'react';
// import { createUser } from "../Store/UserSlice"
// const Login = () => {
   
//     const dispatch = useDispatch()
//     const userObj = useSelector(x=>x.UserSlice)
//     const [inputName, setInputName] = useState('');
//     const [inputPhone, setInputPhone] = useState('');
//     const [inputEmail, setInputEmail] = useState('');
//     const [alertVisible, setAlertVisible] = useState(false);

//     const handleInputChangeName = (event) => {
//         setInputName(event.target.value);
//     };
//     const handleInputChangePhone = (event) => {
//         setInputPhone(event.target.value);
//     };
//     const handleInputChangeEmail = (event) => {
//         setInputEmail(event.target.value);
//     };
//     const AddUser=(email,phone,name)=>{
//         dispatch(createUser({Name:name,Phone:phone ,Email:email,}))
//         setAlertVisible(true);
//         setTimeout(() => {
//             setAlertVisible(false); 
//         }, 3000);
//     }
//     return (
//         <>
//             Login
//               {alertVisible && (
//                         <Alert variant="filled" severity="success">
//                              "{inputName}" נוסף/ה בהצלחה!
//                         </Alert>
//                     )}
//             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '50%', marginLeft: '25%' }}>
//                 <Box
//                     component="form"
//                     sx={{ '& > :not(style)': { m: 2, width: '65ch' } }}
//                     noValidate
//                     autoComplete="off"
//                 >
//                     <TextField id="outlined-basic" label=" שם" variant="outlined" value={inputName} onChange={handleInputChangeName} />
//                     <TextField id="outlined-basic" label="טלפון" variant="outlined" value={inputPhone} onChange={handleInputChangePhone} />
//                     <TextField id="outlined-basic" label="מייל" variant="outlined" value={inputEmail} onChange={handleInputChangeEmail} />
//                     <Button onClick={() => AddUser(inputEmail, inputPhone, inputName)}variant="contained" endIcon={<SendIcon />}>
//                         Send
//                     </Button>
//                 </Box>
//             </div>
//             </>
            
//     );
// };

// export default Login;
import { createUser } from "../Store/UserSlice";
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from "react-redux";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function App() {
  const dispatch = useDispatch();
  
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      password: '',
    },
  });

  const AddUser = (data) => {
    dispatch(createUser({
      firstName: data.firstName,
      lastName: data.lastName,
      Password: data.password,
    }));
    console.log(data);
  };

  const onSubmit = (data) => {
    AddUser(data);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%', 
        padding: 4 
      }}
    >
      <Paper elevation={3} sx={{ padding: 4, width: '400px' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Register User
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  error={!!errors.firstName}
                  helperText={errors.firstName ? "This is required." : ""}
                />
              )}
              name="firstName"
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              rules={{ maxLength: 100 }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                />
              )}
              name="lastName"
            />
          </Grid>

          <Grid item xs={12}>
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 8,
                validate: (value) =>
                  /[A-Z]/.test(value) || "Password must contain at least one uppercase letter" &&
                  /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Password must contain at least one special character"
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  error={!!errors.password}
                  helperText={errors.password ? errors.password.message || "Password must be at least 8 characters long." : ""}
                />
              )}
              name="password"
            />
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" onClick={handleSubmit(onSubmit)} fullWidth
            style={{ backgroundColor: '#D2B48C', color: 'white', margin: '10px 0' }}>
              login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
