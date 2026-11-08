import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

import './App.css';

function App() {
    return (
        <div className="main-container">
            <h1>Contact List</h1>

            <div className="content-container">
                <div className="list-container">
                    <ContactList />
                </div>

                <div className="form-container">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
export default App;
