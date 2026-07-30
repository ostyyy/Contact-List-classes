import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './components/ContactForm/ContactForm';
import { ContactList } from './components/ContactList/ContactList';

import './App.css';

export class App extends Component {
    state = {
        contacts: [
            {
                id: '1',
                firstName: 'John',
                lastName: 'Doe',
                email: 'john.doe@example.com',
                phone: '+123456789',
            },
        ],
        // contact: {
        //     id: null,
        //     firstName: '',
        //     lastName: '',
        //     email: '',
        //     phone: '',
        // },
    };

    addContact = (contact) => {
        contact.id = nanoid();
        this.setState({
            contacts: [...this.state.contacts, contact],
        });
    };

    deleteContact = (id) => {
        this.setState({
            contacts: [
                ...this.state.contacts.filter((contact) => contact.id !== id),
            ],
        });
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
                        />
                    </div>

                    <div className="form-container">
                        <ContactForm onSubmit={this.addContact} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
