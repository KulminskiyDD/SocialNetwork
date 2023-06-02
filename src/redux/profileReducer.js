import { ADD_POST, UPDATE_NEW_POST_TEXT } from "./const";

const initialState = {
  newPostText: "",
  posts: [
    { id: 1, message: "Hi", likeCounts: 21 },
    { id: 2, message: "How is your name", likeCounts: 11 },
    { id: 3, message: "Yoho", likeCounts: 1 },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const newPost = {
        id: 5,
        message: state.newPostText,
        likeCounts: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
