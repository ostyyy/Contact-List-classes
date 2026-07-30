import { Component } from 'react';

import './ContactForm.css';
export class ContactForm extends Component {
    state = {
        id: null,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone: this.state.phone,
        });
        this.setState({
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        });
    };

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <div className="input-block">
                    {' '}
                    <input
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    <span>X</span>
                </div>

                <div className="input-block">
                    {' '}
                    <input
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                    <span>X</span>
                </div>

                <div className="input-block">
                    <input
                        type="email"
                        placeholder="example@domain.com"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <span>X</span>
                </div>

                <div className="input-block">
                    <input
                        type="tel"
                        placeholder="Phone number"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                    />
                    <span>X</span>
                </div>

                <div className="button-block">
                    <button type="submit">Save</button>
                    <button type="button">Delete</button>
                    <button type="button">New</button>
                </div>
            </form>
        );
    }
}

export default ContactForm;
