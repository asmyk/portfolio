import React from "react";
import style from "./Profile.css";
import profileImage from "./images/profile.jpg"


export default class HomePage extends React.Component {
  render() {
    return (
      <div className={style.profile}>
        <h1 class={style.profile_text}>Home Page</h1>
        <div className={style.profile_container}>
          <img src={profileImage}></img>
        </div>
      </div>
    );
  }
}
