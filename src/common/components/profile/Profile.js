import React from "react";
import classNames from "classnames";
import style from "./Profile.css";


var clientHeight = {height:0};

export default class Profile extends React.Component {
  render() {
    let mainClass = classNames("row", style.profile),
        colClass = classNames(["col-sm-12", "col-md-6", style.profile_col ]);
    return (
      <div className={mainClass} ref="profileContainer">
      <div className={colClass}>  
          <div className={style.profile_text}> 
        <h1 >Hi! I'm a Javascript Enginner & Front-End developer from Poland living in Cracow.</h1>
        </div>  
      </div>
      <div className={colClass}>
          <div className={style.profile_img} ></div>
      </div>
      </div>
    );
  }
}
