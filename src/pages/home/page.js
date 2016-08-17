import React from "react";
import styles from "./style.css";
import Profile from "../../common/components/profile/Profile.js"
import About from "../../common/components/about/About.js"
import Portfolio from "../../common/components/portfolio/Portfolio.js"
import Footer from "../../common/components/footer/Footer.js"


export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Profile />
        <About />
        <Portfolio />
        <Footer />
      </div>
    );
  }
}
