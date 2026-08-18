import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';

import './App.css';

export class App extends Component {
    state = {
        contacts: [],
        selectedContact: this.createEmptyContact(),
    };

    componentDidMount() {
        const contacts = JSON.parse(localStorage.getItem('contacts'));
        if (!contacts) {
            this.setState({ contacts: [] });
        } else {
            this.setState({ contacts: [...contacts] });
        }
    }

    createEmptyContact() {
        return {
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        };
    }

    saveContactsToStorage = (contacts) => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    };

    addContact = (contact) => {
        contact.id = nanoid();
        const contacts = [...this.state.contacts, contact];
        this.setState({
            contacts,
            selectedContact: this.createEmptyContact(),
        });

        this.saveContactsToStorage(contacts);
    };

    updateContact = (updatedContact) => {
        const contacts = this.state.contacts.map((contact) =>
            contact.id === updatedContact.id ? updatedContact : contact,
        );
        this.setState({
            contacts,
            selectedContact: updatedContact,
        });

        this.saveContactsToStorage(contacts);
    };

    saveContact = (contact) => {
        if (contact.id) {
            this.updateContact(contact);
        } else {
            this.addContact(contact);
        }
    };

    deleteContact = (id) => {
        const contacts = [
            ...this.state.contacts.filter((contact) => contact.id !== id),
        ];

        this.setState({
            contacts,
            selectedContact: this.createEmptyContact(),
        });

        this.saveContactsToStorage(contacts);
    };

    selectContact = (contact) => {
        this.setState({ selectedContact: contact });
    };

    deselectContact = () => {
        this.setState({ selectedContact: this.createEmptyContact() });
    };

    render() {
        return (
            <div className="main-container">
                <h1>Contact List</h1>

                <div className="content-container">
                    <div className="list-container">
                        <ContactList
                            contacts={this.state.contacts}
                            onDelete={this.deleteContact}
                            onSelect={this.selectContact}
                        />
                    </div>

                    <div className="form-container">
                        <ContactForm
                            onSubmit={this.saveContact}
                            selectedContact={this.state.selectedContact}
                            onDelete={this.deleteContact}
                            onReset={this.deselectContact}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
