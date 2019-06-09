import React, { PureComponent } from 'react';

import sunny from '../img/sunny.svg';
import planet from '../img/planet.png';
import banana from '../img/banana.svg';
import dragonfruit from '../img/dragonfruit.png';
import house from '../img/house.png';
import teddy_sailing from '../img/teddy_sailing.png';
import worm from '../img/worm.png';
import fire from '../img/fire.png';
import birdy from '../img/birdy.png';
import bike from '../img/bike.png';
import ocean from '../img/ocean.png';
import './Illustrations.css';

class Illustrations extends PureComponent {
  render() {
    return (
       // eslint-disable-next-line
   <div className="Illustrations">



        <h1 class="title">  </h1>
    
        <img src={birdy} className="image" alt="birdy" />
        <p></p>
        
        <img src={banana} className="image" alt="banana" />
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

