import ContactItem from '../ContactItem/ContactItem';
import { useEffect } from 'react';
import { connect } from 'react-redux';

import { getContacts } from '../../store/actions/contactActions';
import api from '../../api/contact-service';

import './ContactList.css';

/* eslint-disable react-refresh/only-export-components */
function ContactList({ contacts, getContacts }) {
    useEffect(() => {
        api.get('/contacts').then((data) => getContacts(data));
    }, [getContacts]);

    return (
        <ul className="contact-list">
            {contacts.map((contact) => {
                return (
                    <ContactItem
                        key={contact.id}
                        contact={contact}
                        // onDelete={onDelete}
                        // onSelect={onSelect}
                    />
                );
            })}
        </ul>
    );
}

const mapStateToProps = ({ contacts }) => ({ contacts });

const mapDispatchToProps = {
    getContacts,
};

// function mapDispatchToProps(dispatch) {
//     return {
//         getContacts: (contacts) => dispatch(getContacts(contacts)),
//     };
// }

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
