import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter, NavLink } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';

import Navbar from './components/Navbar';

import Illustrations from './components/Illustrations';
import Mapp from './components/Mapp';
import Main from './components/Main';
import About from './components/About';
import './App.scss';

class ScrollToTop extends PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location && !this.props.scroll) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children
  }
}

ScrollToTop = withRouter(ScrollToTop)

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scroll: false
    };
    this.setScroll = this.setScroll.bind(this);
    this.unsetScroll = this.unsetScroll.bind(this);
  }

  setScroll = () => {
    this.setState({scroll: true});
  }

  unsetScroll = () => {
    this.setState({scroll: false});
  }

  render() {
    return (
      <Router>
        <ScrollToTop scroll={this.state.scroll}>
          <div className="App">
            <Navbar setScroll={this.setScroll} />
            <Switch>
              <Route exact path="/" render={() => <Main scroll={this.state.scroll} unsetScroll={this.unsetScroll} />} />
              <Route path="/illustrations" component={Illustrations} />
              <Route path="/mapp" component={Mapp} />
              <Route exact path="/about" component={About} />
            </Switch>
            <div className="credits">
              <a href="https://github.com/cvrrie" className="creditLink">Designed and developed with love</a>
              © Carrie Rong 2019
            </div>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;