import React, { PureComponent } from 'react';
import './Drugsensor.scss';

import sensor1 from '../img/sensors/sensor1.png';
import sensor2 from '../img/sensors/sensor2.png';
import sensor3 from '../img/sensors/sensor3.png';

class Drugsensor extends PureComponent {
  render() {
    return (
      <div className="p1">
         
        <div className="toptitle">
          <h1 className="header">Designing a roadside drug sensor</h1>
          <h2 className="subtitle">Service Design, Interaction Design</h2>
        </div>

        <div className="sensorimg">
            <img src={sensor1} className="sensor1" alt="Sensor layer 1" />
            <img src={sensor2} className="sensor2" alt="Sensor layer 2" />
            <img src={sensor3} className="sensor3" alt="Sensor layer 3" />
        </div>

        <div className="right">
          <div className="category">Role</div>
          <div className="categorytext">
            Product Design Intern
          </div>

          <div className="category">Duration</div>
          <div className="categorytext">
            July — August 2019          
          </div>

          <div className="category">Team</div>
          <div className="categorytext">
            One product manager, two nanoengineers, one hardware manufacturer, one designer (myself)
          </div>  
        </div>
        <br/><br/><br/>
        <div className="category">Problem Space</div>
        <div className="bodytext">
          The legalization of marijuana in Canada has caused police officers to need to make fast and accurate assessments of a 
          driver’s THC impairment. During my internship this summer at <a href="https://voyagelabs.io"> Voyage Labs</a>, I developed 
          the initial prototype for the <b>interface of a saliva 
          THC tester</b>, which is soon to be implemented into law enforcement officers’ roadside drug testing procedures.
        </div>

        <br/><br/>

        <div className="category">Context Gathering</div>
        <div className="bodytext">
        To fully understand the product and its constraints, I started by speaking to the project manager and nano-engineers. 
        The team had previously conducted interviews with our primary users, police officers, and I reviewed the notes that the team 
        had acquired during these interviews. In addition, I researched current roadside alcohol and drug testing protocols.

    
        </div>
       
      </div>


      
    );
  }
}

export default Drugsensor;
