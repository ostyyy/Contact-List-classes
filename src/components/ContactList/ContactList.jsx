import { Component } from 'react';
import { ContactItem } from '../ContactItem/ContactItem';
export class ContactList extends Component {
    render() {
        const contacts = this.props.contacts;
        return (
            <div>
                {contacts.map((contact) => {
                    return <ContactItem key={contact.id} contact={contact} />;
                })}
            </div>
        );
    }
}

export default ContactList;
