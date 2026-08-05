import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';

import './App.css';

export class App extends Component {
    state = {
        contacts: [],
        selectedContactId: null,
    };

    componentDidMount() {
        const contacts = JSON.parse(localStorage.getItem('contacts'));
        if (!contacts) {
            this.setState({ contacts: [] });
        } else {
            this.setState({ contacts: [...contacts] });
        }
    }

    saveContactsToStorage = () => {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };

    addContact = (contact) => {
        contact.id = nanoid();

        this.setState(
            { contacts: [...this.state.contacts, contact] },
            this.saveContactsToStorage,
        );
    };

    deleteContact = (id) => {
        this.setState(
            {
                contacts: [
                    ...this.state.contacts.filter(
                        (contact) => contact.id !== id,
                    ),
                ],
                selectedContactId: null,
            },
            this.saveContactsToStorage,
        );
    };

    updateContact = (updatedContact) => {
        this.setState(
            {
                contacts: this.state.contacts.map((contact) =>
                    contact.id === updatedContact.id ? updatedContact : contact,
                ),
            },
            this.saveContactsToStorage,
        );
    };

    selectContact = (id) => {
        this.setState({ selectedContactId: id });
    };

    deselectContact = () => {
        this.setState({ selectedContactId: null });
    };

    getSelectedContact = () => {
        return this.state.contacts.find(
            (contact) => contact.id === this.state.selectedContactId,
        );
    };
    render() {
        const selectedContact = this.getSelectedContact();
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
                            onSubmit={this.addContact}
                            selectedContact={selectedContact}
                            onUpdate={this.updateContact}
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
