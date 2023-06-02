import React from "react";
import MyPostsContainer from "./MyPostsContainer";
import css from "./Profile.module.css";

const Profile = (props) => {
  return (
    <div className={css.AppContent}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPX-G-Jlbz-UvCWhso03cK-IjRg57UJyTrIhNHQ5_i5g&s"
        alt="calibri"
      ></img>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
