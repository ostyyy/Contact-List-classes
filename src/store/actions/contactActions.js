export const getContacts = (contacts) => {
    return {
        type: 'getContacts',
        payload: contacts,
    };
};

export const addContact = (contact) => {
    return {
        type: 'addContact',
        payload: contact,
    };
};

export const updateContact = (updatedContact) => {
    return {
        type: 'updateContact',
        payload: updatedContact,
    };
};

export const saveContact = (contact) => {
    return {
        type: 'saveContact',
        payload: contact,
    };
};

export const deleteContact = (id) => {
    return {
        type: 'deleteContact',
        payload: id,
    };
};

export const selectContact = (contact) => {
    return {
        type: 'selectContact',
        payload: contact,
    };
};

export const deselectContact = () => {
    return {
        type: 'deselectContact',
    };
};
