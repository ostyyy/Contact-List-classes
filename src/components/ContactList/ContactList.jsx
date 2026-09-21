import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import ContactItem from '../ContactItem/ContactItem';
import { getContacts } from '../../store/actions/contactActions';
import api from '../../api/contact-service';

import './ContactList.css';

function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts);

    useEffect(() => {
        api.get('/contacts').then(({ data }) => dispatch(getContacts(data)));
    }, [dispatch]);

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

// const mapStateToProps = ({ contacts }) => ({ contacts });

// const mapDispatchToProps = {
//     getContacts,
// };

// function mapDispatchToProps(dispatch) {
//     return {
//         getContacts: (contacts) => dispatch(getContacts(contacts)),
//     };
// }

export default ContactList;
