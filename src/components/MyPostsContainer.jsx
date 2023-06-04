import React from "react";
import MyPosts from "./MyPosts";
import { useDispatch } from "react-redux";
import { addPost, updateNewPost } from "../redux-toolkit/profileSlice";
import { useSelector } from "react-redux";

const MyPostsContainer = () => {
  const posts = useSelector((state) => state.profilePage.posts);
  const newPostText = useSelector((state) => state.profilePage.newPostText);

  const dispatch = useDispatch();
  const addPostTask = () => {
    dispatch(addPost());
  };
  const onPostChange = (newText) => {
    dispatch(updateNewPost({ newText }));
  };

  return (
    <MyPosts
      updateNewPostTask={onPostChange}
      addPostTask={addPostTask}
      posts={posts}
      newPostText={newPostText}
    />
  );
};

export default MyPostsContainer;
