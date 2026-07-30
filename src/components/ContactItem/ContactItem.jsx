import { Component } from 'react';

import './ContactItem.css';
export class ContactItem extends Component {
    render() {
        const contact = this.props.contact;
        return (
            <li className="contact-item">
                <p>
                    {contact.firstName} {contact.lastName}
                </p>
                <span className="delete-btn">X</span>
            </li>
        );
    }
}

export default ContactItem;
