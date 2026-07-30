import { Component } from 'react';
import { ContactItem } from '../ContactItem/ContactItem';

import './ContactList.css';
export class ContactList extends Component {
    render() {
        const contacts = this.props.contacts;
        return (
            <ul className="contact-list">
                {contacts.map((contact) => {
                    return (
                        <ContactItem
                            key={contact.id}
                            contact={contact}
                            onDelete={this.props.onDelete}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default ContactList;
