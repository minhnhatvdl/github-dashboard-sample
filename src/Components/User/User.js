import React from "react";
// css
import { user, avatarImage, infosUser } from "./User.module.css";

const User = ({ name, avatar, url }) => (
  <div className={user}>
    <img src={avatar} className={avatarImage} alt={name} />
    <div className={infosUser}>
      <b>{name}</b>
      {url && <span>{url}</span>}
    </div>
  </div>
);

export default User;
