import { useDispatch, useSelector } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import {
    addContact,
    updateContact,
    deleteContact,
    deselectContact,
} from '../../store/slices/contactSlice';
import { PHONE_REGEX } from '../../constants/constants';

import './ContactForm.css';

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

    const handleReset = () => {
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

    const renderForm = ({ isValid, setFieldValue }) => {
        const clearField = (fieldName) => () => {
            setFieldValue(fieldName, '');
        };

        return (
            <Form className="contact-form">
                <div className="input-block">
                    <Field
                        type="text"
                        placeholder="First name"
                        name="firstName"
                    />

                    <button type="button" onClick={clearField('firstName')}>
                        X
                    </button>
                </div>
                <ErrorMessage
                    name="firstName"
                    component="div"
                    className="error"
                />

                <div className="input-block">
                    <Field
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                    />

                    <button type="button" onClick={clearField('lastName')}>
                        X
                    </button>
                </div>
                <ErrorMessage
                    name="lastName"
                    component="div"
                    className="error"
                />

                <div className="input-block">
                    <Field
                        type="email"
                        placeholder="example@domain.com"
                        name="email"
                    />

                    <button type="button" onClick={clearField('email')}>
                        X
                    </button>
                </div>
                <ErrorMessage name="email" component="div" className="error" />

                <div className="input-block">
                    <Field type="tel" placeholder="Phone number" name="phone" />

                    <button type="button" onClick={clearField('phone')}>
                        X
                    </button>
                </div>
                <ErrorMessage name="phone" component="div" className="error" />

                <div className="button-block">
                    <button
                        className="new-btn"
                        type="button"
                        onClick={handleReset}
                    >
                        New
                    </button>
                    <button
                        className="save-btn"
                        type="submit"
                        disabled={!isValid}
                    >
                        Save
                    </button>
                    {selectedContact.id && (
                        <button
                            className="delete-form-btn"
                            type="button"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    )}
                </div>
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
