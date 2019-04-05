import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";

import logo from './img/logo.svg';
import Illustrations from './components/Illustrations';
import Main from './components/Main';
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Navbar">
            <Link to="/">
              <img
                src={logo}
                className="logo"
                alt="carrie" 
                onClick={() => {}}
              />
            </Link>
            <div className="navlinks">
              <NavLink to="/illustrations" activeClassName="selected" className="navlink">
                illustrations
              </NavLink>
              <a href="mailto:carrierong37@gmail.com" className="navlink">
                contact
              </a>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/illustrations" component={Illustrations} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
