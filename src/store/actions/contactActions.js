import ACTION_TYPES from './actionTypes';

export const getContacts = (contacts) => {
    return {
        type: ACTION_TYPES.GET_CONTACTS,
        payload: contacts,
    };
};

export const addContact = (contact) => {
    return {
        type: ACTION_TYPES.ADD_CONTACT,
        payload: contact,
    };
};

export const updateContact = (updatedContact) => {
    return {
        type: ACTION_TYPES.UPDATE_CONTACT,
        payload: updatedContact,
    };
};

export const deleteContact = (id) => {
    return {
        type: ACTION_TYPES.DELETE_CONTACT,
        payload: id,
    };
};

export const selectContact = (contact) => {
    return {
        type: ACTION_TYPES.SELECT_CONTACT,
        payload: contact,
    };
};

export const deselectContact = () => {
    return {
        type: ACTION_TYPES.DESELECT_CONTACT,
    };
};
