import React from "react";
import Post from "./Post";
import css from "./Profile.module.css";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  const addPost = () => {
    props.addPost();
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPost(text);
  };

  return (
    <div className={css.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
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
