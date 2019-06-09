import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Navbar from './components/Navbar';

import Illustrations from './components/Illustrations';
import Mapp from './components/Mapp';
import Main from './components/Main';
import Photos from './components/Photos';
import './App.scss';


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
        <div className="App">
          <Navbar setScroll={this.setScroll} />
          <Switch>
            <Route exact path="/" render={() => <Main scroll={this.state.scroll} unsetScroll={this.unsetScroll} />} />
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
