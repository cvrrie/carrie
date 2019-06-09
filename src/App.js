import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink} from "react-router-dom";

import logo from './img/logo.svg';
import Illustrations from './components/Illustrations';
import Mapp from './components/Mapp';
import Main from './components/Main';
import Photos from './components/Photos';
import './App.scss';


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
              <NavLink to="/projects" activeClassName="selected" className="navlink">
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
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/illustrations" component={Illustrations} />
            <Route path="/mapp" component={Mapp} />
            <Route exact path="/photos" component={Photos} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
