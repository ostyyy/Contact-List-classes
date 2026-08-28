import { useState } from 'react';

import './ContactForm.css';

function ContactForm(props) {
    const [contactForEdit, setContactForEdit] = useState({
        ...props.selectedContact,
    });

    // static getDerivedcontactForEditFromProps(props, contactForEdit) {
    //     if (contactForEdit.id === props.selectedContact.id) {
    //         return {};
    //     }
    //     return {
    //         ...props.selectedContact,
    //     };
    // }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setContactForEdit((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleInputClear = (event) => {
        const field = event.target.previousSibling;

        setContactForEdit((prev) => ({
            ...prev,
            [field.name]: '',
        }));
    };

    const resetForm = () => {
        setContactForEdit({
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(contactForEdit);
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="input-block">
                <input
                    type="text"
                    placeholder="First name"
                    name="firstName"
                    value={contactForEdit.firstName}
                    onChange={handleInputChange}
                />
                <span onClick={handleInputClear}>X</span>
            </div>

            <div className="input-block">
                <input
                    type="text"
                    placeholder="Last name"
                    name="lastName"
                    value={contactForEdit.lastName}
                    onChange={handleInputChange}
                />
                <span onClick={handleInputClear}>X</span>
            </div>

            <div className="input-block">
                <input
                    type="email"
                    placeholder="example@domain.com"
                    name="email"
                    value={contactForEdit.email}
                    onChange={handleInputChange}
                />
                <span onClick={handleInputClear}>X</span>
            </div>

            <div className="input-block">
                <input
                    type="tel"
                    placeholder="Phone number"
                    name="phone"
                    value={contactForEdit.phone}
                    onChange={handleInputChange}
                />
                <span onClick={handleInputClear}>X</span>
            </div>

            <div className="button-block">
                <button
                    className="new-btn"
                    type="button"
                    onClick={() => {
                        props.onReset();
                        resetForm();
                    }}
                >
                    New
                </button>
                <button className="save-btn" type="submit">
                    Save
                </button>
                {contactForEdit.id && (
                    <button
                        className="delete-form-btn"
                        type="button"
                        onClick={() => props.onDelete(contactForEdit.id)}
                    >
                        Delete
                    </button>
                )}
            </div>
        </form>
    );
}

export default ContactForm;
