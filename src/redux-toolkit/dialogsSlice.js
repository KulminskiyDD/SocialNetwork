import { createSlice } from "@reduxjs/toolkit";

const dialogsSlice = createSlice({
  name: "dialogsPage",
  initialState: {
    messages: [
      { id: 1, message: "Hello" },
      { id: 2, message: "How is your name" },
      { id: 3, message: "Cool" },
    ],
    dialogs: [
      { id: 1, nameD: "Dimych" },
      { id: 2, nameD: "Andrey" },
      { id: 3, nameD: "Sveta" },
      { id: 4, nameD: "Petr" },
    ],

    newMessageBody: "",
  },
  reducers: {
    sendMessage(state, action) {
      const newMessage = {
        id: 5,
        message: state.newMessageBody,
      };
      state.messages.push(newMessage);
      state.newMessageBody = "";
    },
    updateNewMessageBody(state, action) {
      state.newMessageBody = action.payload.newMessage;
    },
  },
});

export const { sendMessage, updateNewMessageBody } = dialogsSlice.actions;

export default dialogsSlice.reducer;
