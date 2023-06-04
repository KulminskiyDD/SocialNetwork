import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profilePage",
  initialState: {
    newPostText: "",
    posts: [
      { id: 1, message: "Hi", likeCounts: 21 },
      { id: 2, message: "How is your name", likeCounts: 11 },
      { id: 3, message: "Yoho", likeCounts: 1 },
    ],
  },
  reducers: {
    addPost(state, action) {
      const newPost = {
        id: 5,
        message: state.newPostText,
        likeCounts: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
    },
    updateNewPost(state, action) {
      state.newPostText = action.payload.newText;
    },
  },
});

export const { addPost, updateNewPost } = profileSlice.actions;

export default profileSlice.reducer;
