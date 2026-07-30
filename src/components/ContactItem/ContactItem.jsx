import { Component } from 'react';

import './ContactItem.css';
export class ContactItem extends Component {
    handleContactDelete = (event) => {
        event.stopPropagation();
        this.props.onDelete(this.props.contact.id);
    };

    render() {
        const contact = this.props.contact;
        return (
            <li className="contact-item">
                <p>
                    {contact.firstName} {contact.lastName}
                </p>
                <span className="delete-btn" onClick={this.handleContactDelete}>
                    X
                </span>
            </li>
        );
    }
}

export default ContactItem;
