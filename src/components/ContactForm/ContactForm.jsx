// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
    addContact,
    updateContact,
    // deleteContact,
    deselectContact,
} from '../../store/slices/contactSlice';
import { PHONE_REGEX } from '../../constants/constants';

import './ContactForm.css';

function ContactForm() {
    const selectedContact = useSelector(
        (state) => state.contactList.selectedContact,
    );

    // const [contactForEdit, setContactForEdit] = useState({
    //     ...selectedContact,
    // });

    // const [prevSelectedContact, setPrevSelectedContact] =
    //     useState(selectedContact);

    // if (selectedContact !== prevSelectedContact) {
    //     setPrevSelectedContact(selectedContact);
    //     setContactForEdit({ ...selectedContact });
    // }

    const dispatch = useDispatch();

    // const handleInputChange = (event) => {
    //     const { name, value } = event.target;
    //     setContactForEdit((prev) => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };

    // const handleInputClear = (event) => {
    //     const field = event.target.previousSibling;

    //     setContactForEdit((prev) => ({
    //         ...prev,
    //         [field.name]: '',
    //     }));
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     if (contactForEdit.id) {
    //         dispatch(updateContact(contactForEdit));
    //     } else {
    //         dispatch(addContact(contactForEdit));
    //         dispatch(deselectContact());
    //     }
    // };

    const handleSubmit = (values) => {
        if (values.id) {
            dispatch(updateContact(values));
        } else {
            dispatch(addContact(values));
            dispatch(deselectContact());
        }
    };

    // const handleDelete = () => {
    //     dispatch(deleteContact(contactForEdit.id));
    // };

    // const handleReset = () => {
    //     dispatch(deselectContact());
    // };

    // return (
    //     <form className="contact-form" onSubmit={handleSubmit}>
    //         <div className="input-block">
    //             <input
    //                 type="text"
    //                 placeholder="First name"
    //                 name="firstName"
    //                 value={contactForEdit.firstName}
    //                 onChange={handleInputChange}
    //             />
    //             <span onClick={handleInputClear}>X</span>
    //         </div>

    //         <div className="input-block">
    //             <input
    //                 type="text"
    //                 placeholder="Last name"
    //                 name="lastName"
    //                 value={contactForEdit.lastName}
    //                 onChange={handleInputChange}
    //             />
    //             <span onClick={handleInputClear}>X</span>
    //         </div>

    //         <div className="input-block">
    //             <input
    //                 type="email"
    //                 placeholder="example@domain.com"
    //                 name="email"
    //                 value={contactForEdit.email}
    //                 onChange={handleInputChange}
    //             />
    //             <span onClick={handleInputClear}>X</span>
    //         </div>

    //         <div className="input-block">
    //             <input
    //                 type="tel"
    //                 placeholder="Phone number"
    //                 name="phone"
    //                 value={contactForEdit.phone}
    //                 onChange={handleInputChange}
    //             />
    //             <span onClick={handleInputClear}>X</span>
    //         </div>

    //         <div className="button-block">
    //             <button className="new-btn" type="button" onClick={handleReset}>
    //                 New
    //             </button>
    //             <button className="save-btn" type="submit">
    //                 Save
    //             </button>
    //             {contactForEdit.id && (
    //                 <button
    //                     className="delete-form-btn"
    //                     type="button"
    //                     onClick={handleDelete}
    //                 >
    //                     Delete
    //                 </button>
    //             )}
    //         </div>
    //     </form>
    // );
    <Formik
        initialValues={selectedContact}
        onSubmit={handleSubmit}
        enableReinitialize={true}
        validationSchema={Yup.object({
            firstName: Yup.string().max(60, 'Too Long!'),
            lastName: Yup.string().max(60, 'Too Long!'),

            email: Yup.string().email('Oh-Oh! Invalid email address.'),
            phone: Yup.string().matches(
                PHONE_REGEX,
                'Oh-Oh! Invalid phone number.',
                { excludeEmptyString: true },
            ),
        })}
    >
        {() => {}}
    </Formik>;
}

export default ContactForm;

// [ enableReinitialize?: boolean ] --> whether Formik should reset the form if initialValues changes
