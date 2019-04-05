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
      <div className="Illustrations">

       <h1></h1>
        <h1 class="title"> I recently downloaded Illustrator and Procreate and am having a thrill of a time. Here are a few of the projects I&#39;ve made. </h1>
        
        <img src={birdy} className="image" alt="birdy" />
        <p>Each stroke on this adorable fluff was a pain to draw. In fact, this constituted a major motivation to switch from drawing on my iPad to Illustrator.</p>
        
        <img src={banana} className="image" alt="banana" />
        <p>The first thing I ever drew with Illustrator. A rather tasty fruit, albeit with too narrow an ideal-ripeness range.</p>

        <img src={worm} className="image" alt="worm" />
        <p>I initially wanted to create an entire mock Facebook sticker set with this worm. But if you really think about it, there are only so many emotions you can convey with a worm. Will definitely revisit this project later.</p>
       
        <img src={sunny} className="image spin" alt="sunny" />
        <p>A blazing 7:46pm Montreal August sun. Kind of a prelude to my solar system design below. If you watch it, the sun is actually rotating ;) </p>  
        
        <img src={planet} className="image" alt="planet" />
        <p>Glass planet, inspired by a post on Dribbble. The funnest thing was experimenting with blending modes - my favourite effect is Colour Dodge with that planet in the right corner. </p>
       
        <img src={teddy_sailing} className="image" alt="teddy_sailing" />
        <p>I was so enamoured by the glass planet that I made a variation on it - this time a lonely but optimistic teddy bear sails on turbulent waters. This is how it turned out.</p>
        
        <img src={fire} className="image" alt="fire" />
        <p>Gradients are fun.</p>
        
        <img src={dragonfruit} className="image" alt="dragonfruit" />
        <p>I wanted to do justice to the quirkiest of fruits with a beautiful colour scheme. Also, I learned how to make shadows on this one.</p>
        
        <img src={house} className="image" alt="house" />
        <p>I wanted to get in on the isometric design trend so I made a house using a 57.73% tilted grid and painstakingly following the lines. Quite satisfying to look at though. </p>
       
        <img src={bike} className="image" alt="bike" />
        <p>Drawing on Procreate is a lot of fun after you get to know the useful functions. For example, all the straight lines and perfect circles were made by holding down my pen (after erasing and trying again billions of times).</p>
       
        <img src={ocean} className="image" alt="ocean" />
        <p>I have a preoccupation with birds. </p>
      </div>
    );
  }
}

export default Illustrations;
