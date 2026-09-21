import { contactsState, createEmptyContact } from '../../model/initialContacts';

const initialState = {
    contacts: contactsState,
    selectedContact: createEmptyContact(),
};

export default function contactsReducer(
    state = initialState,
    { type, payload },
) {
    switch (type) {
        case 'getContacts':
            return { ...state, contacts: payload };
        case 'addContact':
            return {
                ...state,
                contacts: [...state.contacts, payload],
                selectedContact: createEmptyContact(),
            };
        case 'deleteContact':
            return {
                ...state,
                contacts: state.contacts.filter(
                    (contact) => contact.id !== payload,
                ),

                selectedContact:
                    state.selectedContact.id === payload
                        ? createEmptyContact()
                        : state.selectedContact,
            };
        case 'updateContact':
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id === payload.id ? payload : contact,
                ),
                selectedContact: payload,
            };
        case 'selectContact':
            return {
                ...state,
                selectedContact: payload,
            };
        case 'deselectContact':
            return {
                ...state,
                selectedContact: createEmptyContact(),
            };
        default:
            return state;
    }
}
