import { useDispatch } from 'react-redux';

import { deleteContact, selectContact } from '../../store/slices/contactSlice';

import './ContactItem.css';

function ContactItem({ contact }) {
    const dispatch = useDispatch();

    const handleContactDelete = (event) => {
        event.stopPropagation();

        dispatch(deleteContact(contact.id));
    };

    const handleContactSelect = () => {
        dispatch(selectContact(contact));
    };

    const fullName = [contact.firstName, contact.lastName]
        .filter(Boolean)
        .join(' ');
    const displayName = fullName || contact.phone || contact.email || 'Unknown';

    return (
        <li className="contact-item" onDoubleClick={handleContactSelect}>
            <p>{displayName}</p>
            <span className="delete-btn" onClick={handleContactDelete}>
                X
            </span>
        </li>
    );
}

export default ContactItem;
