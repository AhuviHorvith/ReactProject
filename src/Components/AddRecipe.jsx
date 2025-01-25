import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';

import { useDispatch } from "react-redux";
import { useState } from 'react';
import { addRecipe } from "../Store/RecipesSlice";
import { styled } from '@mui/material/styles';
;

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});
const AddRecipe = () => {
    const [category, setCategory] = useState('');
    const [inputName, setInputName] = useState('');
    const [inputPreparationTime, setInputPreparationTime] = useState('');
    const [inputCategory, setInputCategory] = useState('');
    const [inputImage, setInputImage] = useState('');
    const [inputProduct, setInputProduct] = useState('');

    const [alertVisible, setAlertVisible] = useState(false);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setCategory(event.target.value);
        console.log(event.target.value)
    };

    const handleInputChangeName = (event) => {
        setInputName(event.target.value);
    };

    const handleInputChangePreparationTime = (event) => {
        setInputPreparationTime(event.target.value);
    };

    const handleInputChangeCategory = (event) => {
        setInputCategory(event.target.value);
    };
    const handleInputChangeProduct = (event) => {
        setInputProduct(event.target.value);
    };
    const handleChangeImage = (event) => {
        const file = event.target.files[0];
        setInputImage(file ? file.name : '');
    };
    const handleAddRecipe = () => {
        const arrayProduct = inputProduct.split(",");
        dispatch(addRecipe({ Name: inputName, PreparationTime: inputPreparationTime,Product:arrayProduct, Category: category, Img: inputImage }));
        setAlertVisible(true);
        setTimeout(() => {
            setAlertVisible(false);
        }, 3000);
    };

    return (
        <>

            <h1 style={{color:'#a3663b'}}>הוספת מתכון</h1>
            {alertVisible && (
                <Alert variant="filled" severity="success">
                    המתכון "{inputName}" נוסף בהצלחה!
                </Alert>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '40%', margin:'auto' }}>
                <Box
                    component="form"
                    sx={{ '& > :not(style)': { m: 2, width: '40ch' ,backgroundColor:'white',color:'#a3663b'} }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="שם מתכון" variant="outlined" value={inputName} onChange={handleInputChangeName}/>
                    <TextField id="outlined-basic" label="זמן הכנה" variant="outlined" value={inputPreparationTime} onChange={handleInputChangePreparationTime} />
                    <TextField id="outlined-basic" label="מוצרים" variant="outlined" value={inputProduct} onChange={handleInputChangeProduct} />
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="קטגוריה"
                            onChange={handleChange}
                        >
                            <MenuItem value={"חלבי"}>חלבי</MenuItem>
                            <MenuItem value={"בשרי"}>בשרי</MenuItem>
                            <MenuItem value={"פרווה"}>פרווה</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload image
                        <VisuallyHiddenInput
                            type="file"
                            onChange={handleChangeImage}
                            multiple
                        />
                    </Button>
                    <Button onClick={handleAddRecipe} variant="contained" endIcon={<SendIcon />}>
                        Send
                    </Button>
                </Box>
            </div>
        </>
    );
};

export default AddRecipe;
