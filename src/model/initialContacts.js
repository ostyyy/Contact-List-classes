export const createEmptyContact = () => ({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
});

export const contactsState = [
    {
        id: 'kcJ4aECat9Q',
        firstName: 'Bob',
        lastName: 'Tomato',
        email: 'bob@gmail.com',
        phone: '+380773267250',
    },
    {
        id: 'Wn-n25xWDxU',
        firstName: 'Mario',
        lastName: 'Luganosee',
        email: 'mahdo@gmail.com',
        phone: '+3802773927499',
    },
    {
        id: 'H5NSX8zBLtI',
        firstName: 'Amy',
        lastName: 'River',
        email: 'aaa@gmail.com',
        phone: '+380723728172',
    },
    {
        id: 'M9WaXle4xxQ',
        firstName: 'іі',
        lastName: 'іі',
        email: 'aaa@gmail.com',
        phone: '222',
    },
    {
        id: '8i2Ax5IE5Tw',
        firstName: 'іі',
        lastName: 'іі',
        email: '',
        phone: '',
    },
];

// export const initialState = {
//     contacts: contactsState,
//     selectedContact: createEmptyContact(),
// };