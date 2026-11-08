import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import contactReducer from './slices/contactSlice';

const logger = createLogger({
    collapsed: true,
});

export default configureStore({
    reducer: {
        contactList: contactReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
