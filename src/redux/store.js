import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

const store = {
  _state: {
    profilePage: {
      newPostText: "",
      posts: [
        { id: 1, message: "Hi", likeCounts: 21 },
        { id: 2, message: "How is your name", likeCounts: 11 },
        { id: 3, message: "Yoho", likeCounts: 1 },
      ],
    },

    dialogsPage: {
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
  },

  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
