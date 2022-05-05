import React from "react";
import Pp from "../assets/pp.jpg";

const ProfilePhoto = () => {
  return (
    <div>
      <h1 className="main-title"> Profile Card</h1>
      <img src={Pp} alt="profile" className="profile-photo" />
    </div>
  );
};

export default ProfilePhoto;
