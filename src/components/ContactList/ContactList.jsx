import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import List from '@mui/material/List';

import ContactItem from '../ContactItem/ContactItem';
import { getContacts } from '../../store/slices/contactSlice';

const contactListStyle = {
    width: '100%',
    maxHeight: '550px',
    overflow: 'auto',
    p: '10px',

    '&::-webkit-scrollbar': {
        width: '15px',
    },
    '&::-webkit-scrollbar-track': {
        border: 1,
        borderColor: '#92cdd186',
        bgcolor: '#94dbe086',
        borderRadius: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        border: 1,
        borderColor: '#dac7e0e7',
        bgcolor: '#f4d7fde7',
        borderRadius: '10px',
    },
};

function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contactList.contacts);

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    return (
        <List className="contact-list" sx={contactListStyle}>
            {contacts.map((contact) => {
                return <ContactItem key={contact.id} contact={contact} />;
            })}
        </List>
    );
}

export default ContactList;
