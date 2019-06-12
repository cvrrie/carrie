import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

import Navbar from './components/Navbar';

import Illustrations from './components/Illustrations';
import Mapp from './components/Mapp';
import Main from './components/Main';
import Photos from './components/Photos';
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
              <Route exact path="/photos" component={Photos} />
            </Switch>
          </div>
          <a href="https://github.com/cvrrie" className="credits">Designed and coded with love  </a>
          <p className="credits2">©  Carrie Rong 2019</p>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
