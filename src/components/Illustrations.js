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
import whale from '../img/illustrations/whale.png';
import pill from '../img/illustrations/pill.png';


import './Illustrations.scss';

class Illustrations extends PureComponent {
  render() {
    return (
       // eslint-disable-next-line
      <div className="Illustrations">
        <h1 className="title">illustrations</h1>
        <p>In my free time, I like to explore Procreate, Illustrator, and different art styles. <br/> <br/>Try hovering</p>
        <img src={birdy} className="image" alt="birdy" title="Each stroke on this adorable fluff was a pain to draw" />
        <br/>
        
        {/*<img src={banana} className="image" alt="banana" />*/}
        <p></p>

        <img src={worm} className="image" alt="worm" title="I initially wanted to create an entire mock Facebook sticker set
        with this worm. But if you really think about it, there are only so many emotions you can convey with a worm. Might revisit later." />
        <p></p>
        <br/><br/>
       
        <img src={sunny} className="image spin" alt="sunny" title="this sun is actually rotating" />
        <p></p>  
        
       
        <img src={teddy_sailing} className="image" alt="teddy_sailing" title="a lonely but optimistic teddy bear sails on turbulent waters" />
        <p></p>
        
        <img src={pill} className="image" alt="pill" title="you'll see this sticker on the laptops of all pharm kids @mcgill" />
        <p> </p>
        
        <img src={fire} className="image" alt="fire" title="gradients are fun" />
        <p></p>

        <img src={house} className="image" alt="house" title="I wanted to get in on the isometric design trend" />
        <p> </p>
      

        <img src={dragonfruit} className="expandimage" alt="dragonfruit" title="the quirkiest of fruits" />
        <p></p>

        <img src={planet} className="expandimage" alt="planet" title="my favourite blending mode is colour dodge with that planet in the right corner" />
        <p></p>
       
        <img src={bike} className="expandimage" alt="bike" title="drawing with Procreate" />
        <p></p>
       
        <img src={ocean} className="expandimage" alt="ocean" title="I have a preoccupation with birds." />
        <p></p>

        <img src={whale} className="expandimage" alt="whale" title="Whale.....there you go!" />
      </div>
    );
  }
}

export default Illustrations;

