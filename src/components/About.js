import React, { PureComponent } from 'react';
import './About.scss';
import pp from "../img/pp.png";

class About extends PureComponent {
  render() {
    return (
      <div className="about">
        <h1 className="header">carrie who?</h1>

        <div className="left">
          <img src={pp} className="image" alt="carrie at nyc botanical garden" title="carrie at nyc botanical garden" />
        </div>
        <div className="right">
          I'm Carrie, and I'm obsessed with examining how things work. At McGill University, I study how human brains and bodies are 
          wired — thinking about things like, "how do our brains decide what stimuli are important?". But I love designing products that enhance the human psyche because I get to ask, 
          "how do <i>I</i> decide what questions are important?" Design is a way for me to meaningfully connect to people and create impact both 
          immediately around me and around the world.
          <br/> <br/>
          I grew up in China and Calgary, Alberta, and now I’ve found my way to Montreal studying Physiology at McGill. My 
          undergrad science major has armed me with analytical skills and critical thinking, providing me with a unique 
          skillset as I explore my more creative side. I’m passionately interested in designing at a large scale and working 
          to build something with a real purpose.
          <br/> <br/>
          When I’m not fiddling with Illustrator or creating something new, I like to throw myself into challenging and 
          uncomfortable situations to see how much I can learn and grow. I spent a lot of time at the pool this year on 
          the <a href="https://www.youtube.com/watch?v=u_4wXlm86LQ" className="Link" target="_blank">varsity synchro 
          team,</a>even though I had never tried swimming before. Last year, I represented McGill at the 
          Inter-University <a href="https://reporter.mcgill.ca/umass-amherst-roasts-the-competition-at-inter-university-iron-chef-event/" 
          className="Link" target="_blank">Iron Chef competition,</a>putting all the MasterChef episodes I’d binge watched to good use. I also 
          enjoy <a href="https://vsco.co/cvrrie/images/1" 
          className="Link" target="_blank">pulling out my camera</a>and playing jazz piano from time to time.

        </div>
        
      </div>
      
    );
  }
}

export default About;
