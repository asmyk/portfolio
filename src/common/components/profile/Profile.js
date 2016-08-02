import React from "react";
import classNames from "classnames";
import style from "./Profile.css";
import profileImage from "./images/profile.jpg"


export default class HomePage extends React.Component {
  render() {
    var mainClass = classNames("row", style.profile);
    return (
      <div className={mainClass}>
      <div className="col-sm-12 col-md-6">
        <h1 className={style.profile_text}>Hi! I'm a Javascript Enginner & Front-End developer from Poland living in Cracow.</h1>
      </div>
      <div className="col-sm-12 col-md-6">
        <div className={style.profile_container}>
          <img className={style.profile_img} src={profileImage}></img>
        </div>
      </div>
      </div>
    );
  }
}
