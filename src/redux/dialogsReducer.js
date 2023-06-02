import { UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE } from "./const";

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newMessage;
      return state;
    case SEND_MESSAGE:
      const newMessage = {
        id: 5,
        message: state.newMessageBody,
      };
      state.messages.push(newMessage);
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;

export const updateNewMessageBodyActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newMessage: text,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
