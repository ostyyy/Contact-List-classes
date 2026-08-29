import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

import './App.css';

function App() {
    const createEmptyContact = () => {
        return {
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        };
    };

    const [arrContacts, setArrContacts] = useState([]);

    const [selectedContact, setSelectedContact] =
        useState(createEmptyContact());

    useEffect(getFromStorage, []);

    function getFromStorage(){
         const contacts = JSON.parse(localStorage.getItem('contacts'));

        if (!contacts) {
            setArrContacts([]);
        } else {
            setArrContacts(contacts);
        }
    }

    const saveContactsToStorage = (contacts) => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    };

    const addContact = (contact) => {
        contact.id = nanoid();

        const contacts = [...arrContacts, contact];

        setArrContacts(contacts);
        setSelectedContact(createEmptyContact());

        saveContactsToStorage(contacts);
    };

    const updateContact = (updatedContact) => {
        const contacts = arrContacts.map((contact) =>
            contact.id === updatedContact.id ? updatedContact : contact,
        );

        setArrContacts(contacts);
        setSelectedContact(updatedContact);

        saveContactsToStorage(contacts);
    };

    const saveContact = (contact) => {
        if (contact.id) {
            updateContact(contact);
        } else {
            addContact(contact);
        }
    };

    const deleteContact = (id) => {
        const contacts = [
            ...arrContacts.filter((contact) => contact.id !== id),
        ];

        setArrContacts(contacts);
        setSelectedContact(createEmptyContact());

        saveContactsToStorage(contacts);
    };

    const selectContact = (contact) => {
        setSelectedContact(contact);
    };

    const deselectContact = () => {
        setSelectedContact(createEmptyContact());
    };

    return (
        <div className="main-container">
            <h1>Contact List</h1>

            <div className="content-container">
                <div className="list-container">
                    <ContactList
                        contacts={arrContacts}
                        onDelete={deleteContact}
                        onSelect={selectContact}
                    />
                </div>

                <div className="form-container">
                    <ContactForm
                        onSubmit={saveContact}
                        selectedContact={selectedContact}
                        onDelete={deleteContact}
                        onReset={deselectContact}
                    />
                </div>
            </div>
        </div>
    );
}
export default App;
