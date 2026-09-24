import { contactsState, createEmptyContact } from '../../model/initialContacts';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
    contacts: contactsState,
    selectedContact: createEmptyContact(),
};

export default function contactsReducer(
    state = initialState,
    { type, payload },
) {
    switch (type) {
        case ACTION_TYPES.GET_CONTACTS:
            return { ...state, contacts: payload };
        case ACTION_TYPES.ADD_CONTACT:
            return {
                ...state,
                contacts: [...state.contacts, payload],
                selectedContact: createEmptyContact(),
            };
        case ACTION_TYPES.DELETE_CONTACT:
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
        case ACTION_TYPES.UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map((contact) =>
                    contact.id === payload.id ? payload : contact,
                ),
                selectedContact: payload,
            };
        case ACTION_TYPES.SELECT_CONTACT:
            return {
                ...state,
                selectedContact: payload,
            };
        case ACTION_TYPES.DESELECT_CONTACT:
            return {
                ...state,
                selectedContact: createEmptyContact(),
            };
        default:
            return state;
    }
}
