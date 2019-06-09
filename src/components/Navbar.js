import React, { PureComponent } from 'react';
import { Link, NavLink } from "react-router-dom";

import logo from '../img/logo.svg';
import './Navbar.scss';


class Navbar extends PureComponent {
  render() {
    return (
      <div className="Navbar">
        <Link to="/">
          <img src={logo} className="logo" alt="carrie" />
        </Link>
        <div className="navlinks">
          <NavLink to="/" className="navlink" onClick={() => this.props.setScroll()}>
            Projects
          </NavLink>

          <NavLink to="/photos" activeClassName="selected" className="navlink">
            Photos
          </NavLink>

          <NavLink to="/illustrations" activeClassName="selected" className="navlink">
            Illustrations
          </NavLink>

          <a href="mailto:carrierong37@gmail.com" className="navlink">
            Resume
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
