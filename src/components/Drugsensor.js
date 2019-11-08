import React, { PureComponent } from 'react';
import './Drugsensor.scss';

import sensor1 from '../img/sensors/sensor1.png';
import sensor2 from '../img/sensors/sensor2.png';
import sensor3 from '../img/sensors/sensor3.png';
import userflow from '../img/drugsensor/userflow.png';
import iteration1 from '../img/drugsensor/iteration1.png';
import iteration2 from '../img/drugsensor/iteration2.png';

class Drugsensor extends PureComponent {
  render() {
    return (
      <div className="p1">
         
        <div className="toptitle">
          <h1 className="header">Designing a roadside drug sensor</h1>
          <h2 className="subtitle">Service Design, Interaction Design</h2>
        </div>

        <div className="sensorimg">
            <img src={sensor1} className="sensor1" alt="Sensor layer 1" title="This is my illustration of the sensor technology that Voyage Labs was working on. 
            The top layer is the physical exterior, the middle layer is the internal circuitry, and the bottom layer represents the neural networks involved in the sensor."/>
            <img src={sensor2} className="sensor2" alt="Sensor layer 2" title="This is my illustration of the sensor technology that Voyage Labs was working on. 
            The top layer is the physical exterior, the middle layer is the internal circuitry, and the bottom layer represents the neural networks involved in the sensor."/>
            <img src={sensor3} className="sensor3" alt="Sensor layer 3" title="This is my illustration of the sensor technology that Voyage Labs was working on. 
            The top layer is the physical exterior, the middle layer is the internal circuitry, and the bottom layer represents the neural networks involved in the sensor."/>
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
          The team had previously conducted interviews with our <b>primary users</b>, police officers, and I reviewed the notes that the team 
          had acquired during these interviews. In addition, I researched current roadside alcohol and drug testing protocols.
        </div>
       
        <br/><br/>

        <div className="category">Project Constraints</div>
        <div className="bodytext">
          The sensor device had to satisfy several constraints. First, it needed to adapt to <b>Canada’s extreme weather conditions</b> (if you know, you know), and support the police’s needs in all environments. The design also needed to be usable with both <b>touch screens</b> and <b>button-based interfaces</b>. Since police encounters can be high-stress situations, I also wanted to focus on minimizing the cognitive load required to operate the device by creating clean, minimalistic user interfaces.  
        </div>

        <br/><br/><br/><br/>

        <div className="categorytitle">Process</div><br/>
        <div className="bodytext">
          Although I was the only internal designer, I worked in tandem with industrial designers from a hardware agency. They used my mockups to conceive and construct how the practical components of the sensor would work together, and I met with them several times to explain design choices and discuss requirements.
          <br/><br/><br/>
          Compiling the information from <b>user interviews</b> and <b>background research</b> guided my creation of a task flow, which went through several iterative cycles following feedback related to things like financial constraints and feature requirements. I explored the entire timeline of a police confrontation with a driver from before they left their station to after using the sensor, and generated a <b>journey map</b> that would be referenced in my mockups.
          <br/><br/><br/>

          <img src={userflow} class="drugimgs"/>
          <p className="imgcaption">Complete task flow for drug testing procedure using DrugSensor</p>
          
        </div>
        <br/><br/><br/>

        <div className="category">Wireframes</div>
        <div className="bodytext">
          I started with <b>low-fi wireframes</b> of the minimal skeleton of the user flow, then built on these through five more iterations in a time span of three weeks, each time refining a specific step of the sensor process and taking edge cases into mind. I studied aspects from devices with touch screen interfaces, including ticket machines and <b>human-machine interfaces</b> for industrial systems.
 
        </div>
        <br/><br/><br/>

        <div className="greybg">
          <div className="categoryindigo">Iteration #2</div>
          <div className="bodytext">
            Some example screens. Here, I added details like “time remaining” and error messages as well as a police sign-in, and considered how the flows would change for each option selected. 
            <br/><br/>

            <img src={iteration1} class="drugimgs"/>

          </div>
        </div>

        <br/><br/>

        <div className="greybg">
          <div className="categoryindigo">Iteration #4</div>
          <div className="bodytext">
            For this iteration, I was mainly considering how the settings flow would be accessed from the main operation of the device. I didn’t want focus to be redirected and lost when the user changed settings, so I opted for a card 1/4 the size of the screen. It turned out that this layout wasn’t optimal for non-touch screens, however, so it was back to the drawing board for iteration #5.
            <br/><br/>

            <img src={iteration2} class="drugimgs"/>

          </div>
        </div>
        <br/><br/><br/>

        <div className="categorytitle">Solution</div><br/>
        <div className="bodytext">
          To break down the broad directions that this product could head, I took the time to distill down the main functionalities of the device: 
          <br/>
          → a <b>calibration process</b>, to ensure sensor accuracy; <br/>
          → a <b>standby mode</b>, for energy efficiency; and <br/>
          → actual <b>drug testing</b>. <br/>
          Below are some of the more important points of my thought process.



          <br/><br/><br/>
          Compiling the information from <b>user interviews</b> and <b>background research</b> guided my creation of a task flow, which went through several iterative cycles following feedback related to things like financial constraints and feature requirements. I explored the entire timeline of a police confrontation with a driver from before they left their station to after using the sensor, and generated a <b>journey map</b> that would be referenced in my mockups.
          <br/><br/><br/>

          <img src={userflow} class="drugimgs"/>
          <p className="imgcaption">Complete task flow for drug testing procedure using DrugSensor</p>
          
        </div>
      </div>


      
    );
  }
}

export default Drugsensor;
