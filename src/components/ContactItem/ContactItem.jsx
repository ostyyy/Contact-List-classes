import { Component } from 'react';

export class ContactItem extends Component {
    render() {
        const contact = this.props.contact;
        return (
            <div>
                <p>
                    {contact.firstName} {contact.lastName}
                </p>
                <span className="delete-btn">X</span>
            </div>
        );
    }
}

export default ContactItem;
