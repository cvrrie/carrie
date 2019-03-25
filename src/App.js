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
            <NavLink to="/illustrations" className="illustrations" activeClassName="selected">
              illustrations
            </NavLink>
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
