// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
// import api from './api/contact-service';
// import { createEmptyContact } from './model/initialContacts';

import './App.css';

function App() {
    // const [arrContacts, setArrContacts] = useState([]);

    // const [selectedContact, setSelectedContact] =
    //     useState(createEmptyContact());

    // useEffect(() => {
    //     api.get('/')
    //         .then(({ data }) => {
    //             if (!data) {
    //                 setArrContacts([]);
    //             } else {
    //                 setArrContacts(data);
    //             }
    //         })
    //         .catch((error) => {
    //             // eslint-disable-next-line no-console
    //             console.error('Error: ', error);
    //         });
    // }, []);

    // const addContact = (contact) => {
    //     api.post('/', contact)
    //         .then(({ data }) => {
    //             setArrContacts((contacts) => [...contacts, data]);
    //             setSelectedContact(createEmptyContact());
    //         })
    //         .catch((error) => {
    //             // eslint-disable-next-line no-console
    //             console.error('Error adding contact: ', error);
    //         });
    // };

    // const updateContact = (updatedContact) => {
    //     api.put(`/${updatedContact.id}`, updatedContact)
    //         .then(({ data }) => {
    //             const contacts = arrContacts.map((contact) =>
    //                 contact.id === data.id ? data : contact,
    //             );

    //             setArrContacts(contacts);
    //             setSelectedContact(data);
    //         })
    //         .catch((error) => {
    //             // eslint-disable-next-line no-console
    //             console.error('Error updating contact: ', error);
    //         });
    // };

    // const saveContact = (contact) => {
    //     if (contact.id) {
    //         updateContact(contact);
    //     } else {
    //         addContact(contact);
    //     }
    // };

    // const deleteContact = (id) => {
    //     api.delete(`/${id}`)
    //         .then(() => {
    //             const contacts = arrContacts.filter(
    //                 (contact) => contact.id !== id,
    //             );

    //             setArrContacts(contacts);
    //             if (selectedContact.id === id) {
    //                 setSelectedContact(createEmptyContact());
    //             }
    //         })
    //         .catch((error) => {
    //             // eslint-disable-next-line no-console
    //             console.error('Error deleting contact: ', error);
    //         });
    // };

    // const selectContact = (contact) => {
    //     setSelectedContact(contact);
    // };

    // const deselectContact = () => {
    //     setSelectedContact(createEmptyContact());
    // };

    const selectedContact = useSelector((state) => state.selectedContact);

    return (
        <div className="main-container">
            <h1>Contact List</h1>

            <div className="content-container">
                <div className="list-container">
                    <ContactList />
                </div>

                <div className="form-container">
                    <ContactForm
                        key={selectedContact.id ?? 'new'}
                        selectedContact={selectedContact}
                    />
                </div>
            </div>
        </div>
    );
}
export default App;
