import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import './Main.css';
import carrie from '../img/carrie.svg';

class Main extends PureComponent {
  render() {
    return (
      <div className="Main">
        <div className="intro">
          <div className="left">
              <h1 className="name">Hey, I'm Carrie!</h1>
              <div className="words">
                I'm currently a student at McGill University studying Physiology. I'm also interested in UX/UI design and love finding simple, powerful, and smart solutions to complex challenges. 
              </div>
              <a href="mailto:carrierong37@gmail.com" className="underlined-button">Drop me a hi!</a>
              <div className="words2"> hi.</div>
          </div>
          <img src={carrie} className="portrait" alt="carrie" />
        </div>
        <div className="projects">
        hiihihihihi

        </div>
      </div>
    );
  }
}

export default Main;
