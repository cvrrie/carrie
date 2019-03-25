import React, { PureComponent } from 'react';

import './Main.css';
import carrie from '../img/carrie.svg';

class Main extends PureComponent {
  render() {
    return (
      <div className="Main">
        <div className="left">
            <h1 className="name">hello,</h1>
            <h1 className="name">i'm carrie.</h1>
            <div className="words">
                aspiring artist and product designer
            </div>
            <a href="mailto:carrierong37@gmail.com" className="contact">
                CONTACT
            </a>
        </div>
        <img src={carrie} className="portrait" alt="carrie" />
      </div>
    );
  }
}

export default Main;
