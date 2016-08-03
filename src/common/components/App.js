import React from 'react';

import classNames from "classnames";
import baseStyle from '../base.css';


export default ({children}) => {

  let togglerClass = classNames("navbar-toggler", baseStyle.navbar_toggler);
  return (
    <div>
        <nav className="navbar navbar-light">
  <button className={togglerClass} type="button" data-toggle="collapse" data-target="#exCollapsingNavbar" aria-controls="exCollapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
    &#9776;
  </button>
  <div className="collapse" id="exCollapsingNavbar">
    <div className="bg-inverse p-a-1">
      <h4>Collapsed content</h4>
      <span className="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
</nav>

    <div className="container-fluid" id="container">
      {children}
    </div>
    </div>
  );
}
