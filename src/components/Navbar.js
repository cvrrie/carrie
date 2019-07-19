import React, { PureComponent } from 'react';
import { Link, NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

import logo from '../img/logo.svg';
import './Navbar.scss';

let menuStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '20px',
    right: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#dcdcdc'
  },
  bmBurgerBarsHover: {
    background: '#fcfcfc'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#dcdcdc'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0',
    right: '0'
  },
  bmMenu: {
    background: '#ffffff'
  },
  bmItemList: {
    color: '#1e272e',
    padding: '50px 20px',
    boxShadow: '5px 0 15px 3px rgba(200, 200, 200, 0.4)'
  },
  bmItem: {
    display: 'block',
    margin: '30px auto',
    outline: 'none'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.0)'
  }
}


class Navbar extends PureComponent {
  render() {
    return (
      <div className="Navbar">
        <Link to="/">
          <img src={logo} className="logo" alt="carrie" />
        </Link>
        <div className="navlinks">
          <NavLink to="/about" activeClassName="selected" className="navlink">
            About
          </NavLink>
          
          <NavLink to="/" className="navlink" onClick={() => this.props.setScroll()}>
            Projects
          </NavLink>
          <NavLink to="/illustrations" activeClassName="selected" className="navlink">
            Illustrations
          </NavLink>
          <a href="/Resume.pdf" className="navlink" target="_blank">
            Resume
          </a>
        </div>
        <Menu right styles={menuStyles}>
          <NavLink to="/about" activeClassName="selected" className="navlink">
            About
          </NavLink>
          
          <NavLink to="/" className="navlink" onClick={() => this.props.setScroll()}>
            Projects
          </NavLink>
          <NavLink to="/illustrations" activeClassName="selected" className="navlink">
            Illustrations
          </NavLink>
          <a href="/Resume.pdf" className="navlink" target="_blank">
            Resume
          </a>
        </Menu>
      </div>
    );
  }
}

export default Navbar;
