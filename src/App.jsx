import { useSelector } from 'react-redux';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

import './App.css';

function App() {
    const selectedContact = useSelector((state) => state.selectedContact);

    return (
        <div className="main-container">
            <h1>Contact List</h1>

            <div className="content-container">
                <div className="list-container">
                    <ContactList />
                </div>

                <div className="form-container">
                    <ContactForm selectedContact={selectedContact} />
                </div>
            </div>
        </div>
    );
}
export default App;
