import { connect } from 'react-redux';

import {
    deleteContact,
    selectContact,
} from '../../store/actions/contactActions';

import './ContactItem.css';

/* eslint-disable react-refresh/only-export-components */
function ContactItem({ contact, deleteContact, selectContact }) {
    const handleContactDelete = (event) => {
        event.stopPropagation();
        deleteContact(contact.id);
    };

    const handleContactSelect = () => {
        selectContact(contact);
    };

    return (
        <li className="contact-item" onDoubleClick={handleContactSelect}>
            <p>
                {contact.firstName} {contact.lastName}
            </p>
            <span className="delete-btn" onClick={handleContactDelete}>
                X
            </span>
        </li>
    );
}

const mapDispatchToProps = {
    deleteContact,
    selectContact,
};

export default connect(null, mapDispatchToProps)(ContactItem);
