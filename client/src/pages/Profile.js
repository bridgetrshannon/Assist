import React from "react";
import MyPosts from "../components/MyPosts";
import SavedOpportunities from "../components/SavedOpportunities";

const Profile = () => {
  return (
    <div>
      <SavedOpportunities />
      <MyPosts />
    </div>
  );
};


export default Profile;

