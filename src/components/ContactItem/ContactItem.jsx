import { useDispatch } from 'react-redux';

import {
    deleteContact,
    selectContact,
} from '../../store/actions/contactActions';
import api from '../../api/contact-service';

import './ContactItem.css';

function ContactItem({ contact }) {
    const dispatch = useDispatch();

    const handleContactDelete = (event) => {
        event.stopPropagation();

        api.delete(`/contacts/${contact.id}`).then(() => {
            dispatch(deleteContact(contact.id));
        });
    };

    const handleContactSelect = () => {
        dispatch(selectContact(contact));
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

export default ContactItem;
