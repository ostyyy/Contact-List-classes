import ContactItem from '../ContactItem/ContactItem';

import './ContactList.css';

function ContactList({ contacts, onDelete, onSelect }) {
    return (
        <ul className="contact-list">
            {contacts.map((contact) => {
                return (
                    <ContactItem
                        key={contact.id}
                        contact={contact}
                        onDelete={onDelete}
                        onSelect={onSelect}
                    />
                );
            })}
        </ul>
    );
}

export default ContactList;
