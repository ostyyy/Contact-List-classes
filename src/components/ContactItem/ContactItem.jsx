import './ContactItem.css';

function ContactItem({contact, onDelete, onSelect}) {
    const handleContactDelete = (event) => {
        event.stopPropagation();
        onDelete(contact.id);
    };

    const handleContactSelect = () => {
        onSelect(contact);
    };

    return (
        <li className="contact-item" onDoubleClick={handleContactSelect}>
            <p>
                {contact.firstName} {contact.lastName}
            </p>
            <span className="delete-btn" onClick={handleContactDelete}>
                X
            </span>
        </li>
    );
}

export default ContactItem;
