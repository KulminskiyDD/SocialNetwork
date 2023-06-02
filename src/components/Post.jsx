import React from "react";
import css from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={css.postItem}>
      <img src="./ava.jpg" alt="ava"></img>
      <span className={css.mess}>{props.message}</span>
      <div>Likes: {props.likesCounts}</div>
    </div>
  );
};

export default Post;
