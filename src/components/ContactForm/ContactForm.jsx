import { useDispatch, useSelector } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import SaveIcon from '@mui/icons-material/Save';

import {
    addContact,
    updateContact,
    deleteContact,
    deselectContact,
} from '../../store/slices/contactSlice';
import { PHONE_REGEX } from '../../constants/constants';
import FormField from '../FormField/FormField';

function ContactForm() {
    const selectedContact = useSelector(
        (state) => state.contactList.selectedContact,
    );

    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        if (values.id) {
            dispatch(updateContact(values));
        } else {
            dispatch(addContact(values));
            dispatch(deselectContact());
            resetForm();
        }
    };

    const handleDelete = () => {
        dispatch(deleteContact(selectedContact.id));
        dispatch(deselectContact());
    };

    const schema = Yup.object({
        firstName: Yup.string().max(20, 'Too Long!'),
        lastName: Yup.string().max(20, 'Too Long!'),

        email: Yup.string().email('Oh-Oh! Invalid email address.'),
        phone: Yup.string().matches(
            PHONE_REGEX,
            'Oh-Oh! Invalid phone number.',
            {
                excludeEmptyString: true,
            },
        ),
    });

    const renderForm = ({ isValid, setFieldValue, resetForm }) => {
        const clearField = (fieldName) => () => {
            setFieldValue(fieldName, '');
        };

        const handleReset = () => {
            resetForm();
            dispatch(deselectContact());
        };

        return (
            <Form className="contact-form">
                <Stack spacing={2.5}>
                    <FormField
                        placeholder="First name"
                        name="firstName"
                        clearField={clearField}
                    />
                    <FormField
                        placeholder="Last name"
                        name="lastName"
                        clearField={clearField}
                    />
                    <FormField
                        placeholder="example@domain.com"
                        name="email"
                        clearField={clearField}
                    />
                    <FormField
                        placeholder="Phone number"
                        name="phone"
                        clearField={clearField}
                    />
                </Stack>

                <Stack
                    className="button-block"
                    spacing={2}
                    direction="row"
                    sx={{
                        mt: '40px',
                        pr: '40px',
                        width: '100%',
                        mx: 'auto',
                        '& .MuiButton-root': {
                            flex: 1,
                            minWidth: 0,
                        },
                    }}
                >
                    <Button
                        className="new-btn"
                        type="button"
                        onClick={handleReset}
                        sx={(theme) => ({
                            bgcolor: theme.custom.newBtn.bg,
                            color: theme.custom.newBtn.text,
                            borderColor: theme.custom.newBtn.border,
                        })}
                    >
                        New
                    </Button>
                    <Button
                        className="save-btn"
                        type="submit"
                        disabled={!isValid}
                        fullWidth
                        startIcon={<SaveIcon />}
                        sx={{
                            bgcolor: 'success.main',
                            color: 'success.contrastText',
                            borderColor: 'success.dark',
                        }}
                    >
                        Save
                    </Button>
                    {selectedContact.id && (
                        <Button
                            className="delete-form-btn"
                            type="button"
                            onClick={handleDelete}
                            fullWidth
                            sx={{
                                bgcolor: 'error.light',
                                color: 'error.contrastText',
                                borderColor: 'error.main',
                            }}
                        >
                            Delete
                        </Button>
                    )}
                </Stack>
            </Form>
        );
    };

    return (
        <Formik
            initialValues={selectedContact}
            onSubmit={handleSubmit}
            enableReinitialize={true}
            validationSchema={schema}
            validateOnChange={false}
            validateOnBlur={true}
        >
            {renderForm}
        </Formik>
    );
}

export default ContactForm;

// [ enableReinitialize?: boolean ] --> whether Formik should reset the form if initialValues changes
