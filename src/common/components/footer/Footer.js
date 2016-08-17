import React from "react";
import classNames from "classnames";
import style from "./Footer.css";

export default class Footer extends React.Component {
  render() {
      let mailClass = classNames("col-lg-6 col-md-8 offset-md-3 col-xs-12", style.footer_header)
    return (
      <div className={style.footer} id="contact">  <div className="row">
                    <div className="col-xs-12 text-center">
                        <h2 className={style.footer_header}>Contact</h2>
                    </div>
                </div>
                <div className="row">
        <div className={mailClass}>
          <h3><a href="mailto:hi@asmyk.com">hello@areksmyk.com</a></h3>
          <a href="https://www.linkedin.com/in/arek-smyk-09541371">linkedin</a></div>
        </div>
      </div>
    );
  }
}
