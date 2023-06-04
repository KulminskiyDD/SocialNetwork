import React from "react";
import Post from "./Post";
import css from "./Profile.module.css";

const MyPosts = (props) => {
  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={(e) => props.updateNewPostTask(e.target.value)}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={props.addPostTask}>Add post</button>
        </div>
      </div>
      <div className={css.postItem}>
        {props.posts.map((el) => (
          <Post message={el.message} likesCounts={el.likeCounts} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
