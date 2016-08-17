import React from 'react';

import classNames from "classnames";
import baseStyle from '../base.css';


export default ({children}) => {

  let navbarClass = classNames(["navbar", "navbar-light", "navbar-full", baseStyle.navbar]),
  togglerClass = classNames("navbar-toggler", baseStyle.navbar_toggler);
  return (
    <div>
      <nav className={navbarClass}>
        <button className={togglerClass} type="button" data-toggle="collapse" data-target="#exCollapsingNavbar" aria-controls="exCollapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
          &#9776;
        </button>
        <div className="collapse" id="exCollapsingNavbar">
         <a className="navbar-brand" href="#">Menu:</a>
    <ul className="nav navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#my-apps">My Apps</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
    </ul>
        </div>
      </nav>

      <div className="container-fluid" id="container">
        {children}
      </div>
    </div>
  );
}
