// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Reducers/Auth';
import chatBotReducer from '../Reducers/ChatBot';

const store = configureStore({
  reducer: {
    auth: authReducer,
    chatBot: chatBotReducer
  },
});

export default store;

