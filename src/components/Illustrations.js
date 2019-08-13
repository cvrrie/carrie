import React, { PureComponent } from 'react';

import sunny from '../img/illustrations/sunny.png';
import planet from '../img/illustrations/planet.png';
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
        <p>Try hovering</p>
        <img src={birdy} className="image" alt="birdy" title="Each stroke on this adorable fluff was a pain to draw" />
        <br/>
        
        {/*<img src={banana} className="image" alt="banana" />*/}
        <p></p>

        <img src={worm} className="image" alt="worm" title="I initially wanted to create an entire mock Facebook sticker set 
        with this worm. But if you really think about it, there are only so many emotions you can convey with a worm. Might revisit later." />
        <p></p>
       
        <img src={sunny} className="image spin" alt="sunny" title="this sun is actually rotating" />
        <p></p>  
        
        <img src={planet} className="image" alt="planet" title="my favourite blending is Colour Dodge with that planet in the right corner" />
        <p></p>
       
        <img src={teddy_sailing} className="image" alt="teddy_sailing" title="a lonely but optimistic teddy bear sails on turbulent waters" />
        <p></p>
        
        <img src={fire} className="image" alt="fire" title="gradients are fun" />
        <p></p>
        
        <img src={dragonfruit} className="image" alt="dragonfruit" title="the quirkiest of fruits" />
        <p>.</p>
        
        <img src={house} className="image" alt="house" title="I wanted to get in on the isometric design trend" />
        <p> </p>
       
        <img src={bike} className="image" alt="bike" title="drawing with Procreate" />
        <p></p>
       
        <img src={ocean} className="image" alt="ocean" title="I have a preoccupation with birds." />
        <p></p>
      </div>
    );
  }
}

export default Illustrations;

