import React, { PureComponent } from 'react';

import sunny from '../img/illustrations/sunny.png';
import planet from '../img/illustrations/planet.png';
import banana from '../img/illustrations/banana.png';
import dragonfruit from '../img/illustrations/dragonfruit.png';
import house from '../img/illustrations/house.png';
import teddy_sailing from '../img/illustrations/teddy_sailing.png';
import worm from '../img/illustrations/worm.png';
import fire from '../img/illustrations/fire.png';
import birdy from '../img/illustrations/birdy.png';
import bike from '../img/illustrations/bike.png';
import ocean from '../img/illustrations/ocean.png';
import './Illustrations.scss';

class Illustrations extends PureComponent {
  render() {
    return (
       // eslint-disable-next-line
      <div className="Illustrations">
        <h1 className="title">Illustrations</h1>
    
        <img src={birdy} className="image" alt="birdy" />
        <br/>
        
        {/*<img src={banana} className="image" alt="banana" />*/}
        <p></p>

        <img src={worm} className="image" alt="worm" />
        <p></p>
       
        <img src={sunny} className="image spin" alt="sunny" />
        <p></p>  
        
        <img src={planet} className="image" alt="planet" />
        <p></p>
       
        <img src={teddy_sailing} className="image" alt="teddy_sailing" />
        <p></p>
        
        <img src={fire} className="image" alt="fire" />
        <p></p>
        
        <img src={dragonfruit} className="image" alt="dragonfruit" />
        <p>.</p>
        
        <img src={house} className="image" alt="house" />
        <p> </p>
       
        <img src={bike} className="image" alt="bike" />
        <p></p>
       
        <img src={ocean} className="image" alt="ocean" />
        <p></p>
      </div>
    );
  }
}

export default Illustrations;

