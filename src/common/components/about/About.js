import React from "react";
import classNames from "classnames";
import style from "./About.css";

export default class About extends React.Component {
  render() {
    let mainClass = classNames("row", style.about);
    return (
      <div className={mainClass}>
        <div className="col-lg-6 col-md-8 offset-md-3 col-xs-12">
          <p className="h4">Hello I'm Arek Smyk. For the past 2 years I've worked at one of major European Bank as a Javascript Enginner.
           Before that, I worked for companies from Europe and US as a Front-End Developer.
            I'm crossfit enthusiast and I love to travel. When I'm not coding, you'll find me in the gym or I gain experience in the next trip.</p>
        </div>
      </div>
    );
  }
}
