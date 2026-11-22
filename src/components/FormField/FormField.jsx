import { ErrorMessage, Field } from 'formik';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

function FormField({ type = 'text', placeholder, name, clearField }) {
    return (
        <>
            <Stack
                className="input-block"
                direction="row"
                width="100%"
                spacing={1}
            >
                <Field
                    as={TextField}
                    fullWidth
                    type={type}
                    placeholder={placeholder}
                    name={name}
                />

                <IconButton
                    aria-label="delete"
                    onClick={clearField(name)}
                    sx={{ color: 'error.main' }}
                >
                    <DeleteTwoToneIcon sx={{ fontSize: '35px' }} />
                </IconButton>
            </Stack>
            <ErrorMessage name={name}>
                {(msg) => (
                    <Box
                        component="div"
                        sx={{
                            color: 'error.main',
                            fontSize: '23px',
                            mt: 0,
                            mb: '10px',
                            pl: '4px',
                        }}
                    >
                        {msg}
                    </Box>
                )}
            </ErrorMessage>
        </>
    );
}
export default FormField;
