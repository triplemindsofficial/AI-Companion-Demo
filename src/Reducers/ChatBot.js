import { createSlice } from '@reduxjs/toolkit';

export const ChatBotSlice = createSlice({
  name: 'chatBot',
    initialState: {
        loading: false,
        chat: [],
        error:''
    },
    reducers: {
        request: (state) => {
            state.loading = true;
            state.error = null;
        },
        success: (state, action) => {
            state.loading = false;
            state.chat = true;
        }, 
        failure: (state, action) => {
            state.loading = false;
            state.error = action.payload.error;
        },

    }
});

export const {
    request,
    success,
    failure,
} = ChatBotSlice.actions;

export default ChatBotSlice.reducer;