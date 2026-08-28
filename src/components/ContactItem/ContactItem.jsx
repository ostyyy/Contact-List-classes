import './ContactItem.css';

function ContactItem(props) {
    const handleContactDelete = (event) => {
        event.stopPropagation();
        props.onDelete(props.contact.id);
    };

    const handleContactSelect = () => {
        props.onSelect(props.contact);
    };

    const contact = props.contact;
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
