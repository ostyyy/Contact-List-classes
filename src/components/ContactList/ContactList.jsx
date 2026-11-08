import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ContactItem from '../ContactItem/ContactItem';
import { getContacts } from '../../store/slices/contactSlice';

import './ContactList.css';

function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contactList.contacts);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <ul className="contact-list">
            {contacts.map((contact) => {
                return <ContactItem key={contact.id} contact={contact} />;
            })}
        </ul>
    );
}

export default ContactList;
