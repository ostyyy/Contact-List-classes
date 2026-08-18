import { Component } from 'react';

import './ContactForm.css';
export class ContactForm extends Component {
    state = { ...this.props.selectedContact };

    static getDerivedStateFromProps(props, state) {
        if (state.id === props.selectedContact.id) {
            return {};
        }
        return {
            ...props.selectedContact,
        };
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleInputClear = (event) => {
        const field = event.target.previousSibling;

        this.setState({
            [field.name]: '',
        });
    };

    resetForm = () => {
        this.setState({
            id: null,
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    };

    render() {
        return (
            <form className="contact-form" onSubmit={this.handleSubmit}>
                <div className="input-block">
                    <input
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                    />
                    <span onClick={this.handleInputClear}>X</span>
                </div>

                <div className="input-block">
                    <input
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                    />
                    <span onClick={this.handleInputClear}>X</span>
                </div>

                <div className="input-block">
                    <input
                        type="email"
                        placeholder="example@domain.com"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                    <span onClick={this.handleInputClear}>X</span>
                </div>

                <div className="input-block">
                    <input
                        type="tel"
                        placeholder="Phone number"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                    />
                    <span onClick={this.handleInputClear}>X</span>
                </div>

                <div className="button-block">
                    <button
                        className="new-btn"
                        type="button"
                        onClick={() => {
                            this.props.onReset();
                            this.resetForm();
                        }}
                    >
                        New
                    </button>
                    <button className="save-btn" type="submit">
                        Save
                    </button>
                    {this.state.id && (
                        <button
                            className="delete-form-btn"
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
