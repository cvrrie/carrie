import React, { PureComponent } from 'react';

import sunny from '../img/sunny.svg';
import planet from '../img/planet.svg';
import banana from '../img/banana.svg';
import dragonfruit from '../img/dragonfruit.svg';

import './Illustrations.css';

class Illustrations extends PureComponent {
  render() {
    return (
      <div className="Illustrations">
        <h1>illustrations</h1>

        <img src={sunny} className="image spin" alt="sunny" />
        <p>the sun.</p>

        <img src={planet} className="image" alt="planet" />
        <p>a planet.</p>

        <img src={banana} className="image" alt="banana" />
        <p>a banana.</p>

        <img src={dragonfruit} className="image" alt="dragonfruit" />
        <p>a dragonfruit.</p>
      </div>
    );
  }
}

export default Illustrations;
