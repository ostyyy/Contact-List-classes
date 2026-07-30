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
        selectedContactId: null,
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

    handleSelectContact = (id) => {
        this.setState({ selectedContactId: id });
    };

    saveContactsToStorage = () => {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    };

    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState) {}

    render() {
        console.log(this.state.selectedContactId);
        return (
            <div className="main-container">
                <h1>Contact List</h1>

                <div className="content-container">
                    <div className="list-container">
                        <ContactList
                            contacts={this.state.contacts}
                            onDelete={this.deleteContact}
                            onSelect={this.handleSelectContact}
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
