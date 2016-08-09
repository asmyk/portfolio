import React from "react";
import classNames from "classnames";
import style from "./Portfolio.css";
import photoeffectsImg from "./images/photoeffects.png"

export default class Portfolio extends React.Component {
    render() {
        let mainClass = classNames(style.portfolio),
            appContainerClass = classNames("col-xs-12 col-md-10 offset-md-1");
        return (
            <div className={mainClass}>
                <div className="row">
                    <div className="col-xs-12 text-center">
                        <h2 className={style.portfolio_header}>My Apps</h2>
                    </div>
                </div>
                <div className="row">
                    <div className={appContainerClass}>
                        <img src={photoeffectsImg}/>
                    </div>
                </div>
            </div>
        );
    }
}
