import React, { PureComponent, Fragment } from 'react';
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
    width: '24px',
    top: '20px',
    left: '20px'
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
    background: '#ffffff',
    overflow: 'visible'
  },
  bmItemList: {
    color: '#1e272e',
    padding: '80px 20px',
    boxShadow: '5px 0 10px 2px rgba(200, 200, 200, 0.3)',
  },
  bmItem: {
    display: 'block',
    margin: '30px auto',
    outline: 'none'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.0)'
  },
  
}

const NavLinks = ({setScroll, block = false}) => {
  const navClass = block ? "navlink menuLink" : "navlink";

  return (
    <Fragment>
      <NavLink to="/about" activeClassName="selected" className={navClass}>
        About
      </NavLink>
      <NavLink to="/" className={navClass} onClick={() => setScroll()}>
        Work
      </NavLink>
      <NavLink to="/illustrations" activeClassName="selected" className={navClass}>
        Illustrations
      </NavLink>
      <a href="/Resume.pdf" className={navClass} target="_blank">
        Resume
      </a>
    </Fragment>
  )
}


class Navbar extends PureComponent {
  render() {
    return (
      <div className="Navbar">
        <Link to="/">
          <img src={logo} className="logo" alt="carrie" />
        </Link>
        <div className="navlinks">
          {<NavLinks setScroll={this.props.setScroll} />}
        </div>
        <Menu right styles={menuStyles} className="hamburger">
          {<NavLinks block={true} setScroll={this.props.setScroll} />}
        </Menu>
      </div>
    );
  }
}

export default Navbar;
