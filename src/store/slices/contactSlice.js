import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api/contact-service';
import { contactsState, createEmptyContact } from '../../model/initialContacts';
import { CONTACT_SLICE_NAME } from '../../constants/constants';

const initialState = {
    contacts: contactsState,
    selectedContact: createEmptyContact(),

    isFetching: false,
    error: null,
};

export const getContacts = createAsyncThunk(
    `${CONTACT_SLICE_NAME}/getContacts`,
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get(`/${CONTACT_SLICE_NAME}`);

            if (response.status >= 400) {
                throw new Error(`Oh-oh! Error status is ${response.status}`);
            }

            const { data } = response;
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const deleteContact = createAsyncThunk(
    `${CONTACT_SLICE_NAME}/deleteContact`,
    async (id, { rejectWithValue, dispatch }) => {
        try {
            const response = await api.delete(`/${CONTACT_SLICE_NAME}/${id}`);

            if (response.status >= 400) {
                throw new Error(
                    `Oh-oh! Can't delete contact. Error status is ${response.status}`,
                );
            }

            dispatch(removeContact(id));
            dispatch(deselectContact());
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const updateContact = createAsyncThunk(
    `${CONTACT_SLICE_NAME}/updateContact`,
    async (updatedContact, { rejectWithValue, dispatch }) => {
        const { id } = updatedContact;

        try {
            const response = await api.patch(
                `/${CONTACT_SLICE_NAME}/${id}`,
                updatedContact,
            );

            if (response.status >= 400) {
                throw new Error(
                    `Oh-oh! Can't update contact. Error status is ${response.status}`,
                );
            }

            const { data } = response;
            dispatch(editContact(data));
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const addContact = createAsyncThunk(
    `${CONTACT_SLICE_NAME}/addContact`,
    async (contact, { rejectWithValue }) => {
        try {
            const response = await api.post(`/${CONTACT_SLICE_NAME}`, contact);

            if (response.status >= 400) {
                throw new Error(
                    `Oh-oh! Can't add contact. Error status is ${response.status}`,
                );
            }

            const { data } = response;
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const setError = (state, action) => {
    state.isFetching = false;
    state.error = action.payload;
};

const setFetching = (state) => {
    state.isFetching = true;
    state.error = null;
};

const contactSlice = createSlice({
    name: CONTACT_SLICE_NAME,
    initialState,
    reducers: {

        removeContact(state, { payload }) {
            state.contacts = [...state.contacts].filter(
                (contact) => contact.id !== payload,
            );
        },

        editContact(state, { payload }) {
            state.contacts = state.contacts.map((contact) =>
                contact.id === payload.id ? payload : contact,
            );
        },

        selectContact(state, { payload }) {
            state.selectedContact = payload;
        },

        deselectContact(state) {
            state.selectedContact = createEmptyContact();
        },
    },

    extraReducers: (builder) => {
        // ----> Get all
        builder.addCase(getContacts.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.error = null;
            state.contacts = payload;
        });
        builder.addCase(getContacts.pending, setFetching);
        builder.addCase(getContacts.rejected, setError);
        // ----> Create
        builder.addCase(addContact.fulfilled, (state, { payload }) => {
            state.isFetching = false;
            state.error = null;
            state.contacts.push(payload);
        });
        builder.addCase(addContact.pending, setFetching);
        builder.addCase(addContact.rejected, setError);
        // ----> Update
        builder.addCase(updateContact.fulfilled, (state) => {
            state.isFetching = false;
            state.error = null;
        });
        builder.addCase(updateContact.pending, setFetching);
        builder.addCase(updateContact.rejected, setError);
        // ----> Delete
        builder.addCase(deleteContact.fulfilled, (state) => {
            state.isFetching = false;
            state.error = null;
        });
        builder.addCase(deleteContact.pending, setFetching);
        builder.addCase(deleteContact.rejected, setError);
    },
});

const { actions, reducer } = contactSlice;

const { removeContact, editContact } = actions;
export const { selectContact, deselectContact } = actions;

export default reducer;
