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

    handleInputClear = (inputName) => {
        this.setState({
            [inputName]: '',
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.id) {
            this.props.onUpdate(this.state);
        } else {
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
        }
    };

    componentDidUpdate(prevProps) {
        if (prevProps.selectedContact !== this.props.selectedContact) {
            if (this.props.selectedContact) {
                this.setState({ ...this.props.selectedContact });
            } else {
                this.setState({
                    id: null,
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                });
            }
        }
    }

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
                    <span onClick={() => this.handleInputClear('firstName')}>
                        X
                    </span>
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
                    <span onClick={() => this.handleInputClear('lastName')}>
                        X
                    </span>
                </div>

                <div className="input-block">
                    <input
                        type="email"
                        placeholder="example@domain.com"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <span onClick={() => this.handleInputClear('email')}>
                        X
                    </span>
                </div>

                <div className="input-block">
                    <input
                        type="tel"
                        placeholder="Phone number"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                    />
                    <span onClick={() => this.handleInputClear('phone')}>
                        X
                    </span>
                </div>

                <div className="button-block">
                    <button type="button" onClick={() => this.props.onReset()}>
                        New
                    </button>
                    <button type="submit">Save</button>
                    {this.state.id && (
                        <button
                            type="button"
                            onClick={() => this.props.onDelete(this.state.id)}
                        >
                            Delete
                        </button>
                    )}
                </div>
            </form>
        );
    }
}

export default ContactForm;
