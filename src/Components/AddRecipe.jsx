import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Alert from '@mui/material/Alert';
import { useDispatch } from "react-redux";
import { useForm, Controller } from 'react-hook-form';
import { addRecipe } from "../Store/RecipesSlice";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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
    const [recipeName, setRecipeName] = React.useState('');
    const [inputImage, setInputImage] = React.useState('');
    const [alertVisible, setAlertVisible] = React.useState(false);
    const dispatch = useDispatch();

    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            inputName: '',
            inputPreparationTime: '',
            inputProduct: '',
            category: ''
        }
    });

    const handleChangeImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setInputImage(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setInputImage('');
        }
    };

    const onSubmit = (data) => {
        const arrayProduct = data.inputProduct.split(",").map(item => item.trim());
        dispatch(addRecipe({
            Name: data.inputName,
            PreparationTime: data.inputPreparationTime,
            Product: arrayProduct,
            Category: data.category,
            Img: inputImage
        }));
        setRecipeName(data.inputName);
        setAlertVisible(true);
        setTimeout(() => {
            setAlertVisible(false);
        }, 3000);
    };


    return (
        <>
            {alertVisible && (
                <Alert variant="filled" severity="success" style={{ margin: '20px' }}>
                    המתכון "{recipeName}" נוסף בהצלחה!
                </Alert>
            )}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    marginLeft:'10vw'
                }}
            >
                <Grid container justifyContent="center">
                    <Grid item xs={12} sm={8} md={6}>
                        <Paper elevation={3} sx={{ padding: 4, width: '400px' }}>
                            <Typography variant="h5" component="h2" gutterBottom>
                                Add Recipe
                            </Typography>

                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <Controller
                                    name="inputName"
                                    control={control}
                                    rules={{ required: "שדה זה חובה" }}
                                    render={({ field }) => (
                                        <TextField {...field} label="שם מתכון" variant="outlined" error={!!errors.inputName} helperText={errors.inputName?.message} fullWidth margin="normal" />
                                    )}
                                />
                                <Controller
                                    name="inputPreparationTime"
                                    control={control}
                                    rules={{
                                        required: "שדה זה חובה",
                                        min: { value: 5, message: "זמן ההכנה לא יכול להיות פחות מ-5 דקות" }
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} label="זמן הכנה" variant="outlined" error={!!errors.inputPreparationTime} helperText={errors.inputPreparationTime?.message} fullWidth margin="normal" />
                                    )}
                                />
                                <Controller
                                    name="inputProduct"
                                    control={control}
                                    rules={{
                                        required: "שדה זה חובה",
                                        validate: value => value.split(",").length >= 3 || "יש להזין לפחות 3 מוצרים"
                                    }}
                                    render={({ field }) => (
                                        <TextField {...field} label="מוצרים" variant="outlined" error={!!errors.inputProduct} helperText={errors.inputProduct?.message} fullWidth margin="normal" />
                                    )}
                                />
                                <Controller
                                    name="category"
                                    control={control}
                                    rules={{ required: "שדה זה חובה" }}
                                    render={({ field }) => (
                                        <FormControl fullWidth error={!!errors.category} margin="normal">
                                            <InputLabel id="category-label">קטגוריה</InputLabel>
                                            <Select
                                                labelId="category-label"
                                                {...field}
                                                value={field.value || ''} // ודא שהערך לא יהיה undefined
                                            >
                                                <MenuItem value={"חלבי"}>חלבי</MenuItem>
                                                <MenuItem value={"בשרי"}>בשרי</MenuItem>
                                                <MenuItem value={"פרווה"}>פרווה</MenuItem>
                                            </Select>
                                            {errors.category && <span>{errors.category.message}</span>}
                                        </FormControl>
                                    )}
                                />
                                <Button
                                    component="label"
                                    variant="contained"
                                    style={{ backgroundColor: '#D2B48C', color: 'white', margin: '10px 0' }}
                                    startIcon={<CloudUploadIcon />}
                                    fullWidth
                                >
                                    Upload image
                                    <VisuallyHiddenInput
                                        type="file"
                                        onChange={handleChangeImage}
                                        multiple
                                    />
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    style={{ backgroundColor: '#D2B48C', color: 'white', margin: '10px 0' }}
                                    fullWidth
                                >
                                    Send
                                </Button>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box></>
    );
};

export default AddRecipe;
