import React from "react";
import classNames from "classnames";
import style from "./Portfolio.css";

export default class Portfolio extends React.Component {
    render() {
        let mainClass = classNames(style.portfolio);

        return (
            <div className={mainClass} id="my-apps">
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h2 className={style.portfolio_header}>My Apps</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-10 offset-md-1">
                       <a target="_blank" href="https://www.microsoft.com/store/apps/9wzdncrfjcvj"> <div className={style.portfolio_img}>                        </div></a>
                    </div>
                </div>
      <div className="row">
        <div className="col-lg-6 col-md-8 offset-md-3 col-xs-12">
        <p className="h4"><a target="_blank" href="https://www.microsoft.com/store/apps/9wzdncrfjcvj"><strong>PhotoEffects</strong></a> is an a fun and free photo editor for Windows 10. It has been downloaded 500 000+ times. I created this app in Javascript and WebGL.  </p>
        </div>
        </div>
            </div>
        );
    }
}
