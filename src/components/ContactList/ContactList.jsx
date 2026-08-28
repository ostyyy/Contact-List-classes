import { ContactItem } from '../ContactItem/ContactItem';

import './ContactList.css';

function ContactList(props) {

    const contacts = props.contacts;

        return (
            <ul className="contact-list">
                {contacts.map((contact) => {
                    return (
                        <ContactItem
                            key={contact.id}
                            contact={contact}
                            onDelete={props.onDelete}
                            onSelect={props.onSelect}
                        />
                    );
                })}
            </ul>
        );
    
}

export default ContactList;
