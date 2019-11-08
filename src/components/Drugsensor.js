import React, { PureComponent } from 'react';
import './Drugsensor.scss';

import sensor1 from '../img/sensors/sensor1.png';
import sensor2 from '../img/sensors/sensor2.png';
import sensor3 from '../img/sensors/sensor3.png';
import userflow from '../img/drugsensor/userflow.png';
import iteration1 from '../img/drugsensor/iteration1.png';
import iteration2 from '../img/drugsensor/iteration2.png';
import homescreen from '../img/drugsensor/HomeScreen.png';
import standby from '../img/drugsensor/Standby.png';
import hardbuttons from '../img/drugsensor/hardbuttons.png';
import starttest from '../img/drugsensor/starttest.png';
import settings from '../img/drugsensor/settings.png';



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
          <br/>
          Here are some of the iterations I went through:
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
        <br/><br/><br/>            <br/><br/><br/>


        <div className="categorytitle">Solution</div><br/>
        <div className="bodytext">
          To break down the broad directions that this product could head, I took the time to distill down the main functionalities of the device: 
          <br/>
          → a <b>calibration process</b>, to ensure sensor accuracy; <br/>
          → a <b>standby mode</b>, for energy efficiency; and <br/>
          → actual <b>drug testing</b>. <br/><br/>
          Below are some of the screens, accompanied by some points of my thought process.
        </div>

        <br/><br/><br/><br/>

        <div className="categoryscreen">Home and Standby Screens</div><br/>

        <div className="twocolumn">
          <div className="left1">
            <img src={homescreen} class="drugimgs"/>
          </div>
          <div className="right1 bodytext">
            After boot-up, the user would be prompted to calibrate the sensor system immediately (for optimal accuracy of the sensor), or return to the <b>home page</b> to choose another option.
          </div>
        </div>
        
        <div className="twocolumn">
          <div className="left2 bodytext">
            This is the system’s <b>energy-saving mode</b> for when police are not actively engaging with drivers. When ready, the Start Test CTA takes the user directly to testing; otherwise, pressing anywhere else leads to the <b>home page</b>.            
          </div>
          <div className="right2">
            <img src={standby} class="drugimgs"/>
          </div>
        </div>
        <br/><br/><br/><br/>

        <div className="greybg">
          <div className="categoryscreen">Button-Based Interfaces</div>
          <br/><br/><br/>
          <img src={hardbuttons} class="drugimgs"/>
          <p className="imgcaption">Screen with 4 hard buttons on each side</p>
          <br/><br/>
          <div className="bodytext">
            A main requirement of our interface was configuring functionality for both <b>touch screens</b> and <b>non-touch screens with hard buttons</b>. This was for cases in which the hardware could not support touch, or the police officer was wearing gloves in cold weather. My final solution operated seamlessly for both touch and non-touch, ensuring that every pressable option and CTA was <b>associated with one of the 8 hard buttons</b>. 
            <br/><br/><br/>
            In situations where the screen displayed additional information such as the help screen, I opted for a <b>modal layout</b> aligned to the right side of the screen so that the user recognized the right-side buttons were for navigation. If the “Help” button was pressed by mistake, the cancel button would appear in the same location.
          </div>
        </div>

        <br/><br/><br/><br/>


        <div className="categoryscreen">Drug Test Screens</div><br/>            
        <br/><br/>

        <div className="bodytext"> 
          <img src={starttest} class="drugimgs"/>
          <br/><br/><br/>
          Process for testing a driver’s saliva for THC levels. On the first screen are <b>specifications</b> requested by the project lead (estimated time required, time of last test, etc). The second screen, a progress screen, serves several purposes: <b>a visual indication of how long the test takes</b>, as well as instructions on operating the device properly. <b>Results of the completed test</b> are displayed next, along with jurisdiction-specific drug threshold laws for reference. Other CTAs allow printing or viewing of test details.
          <br/><br/><br/><br/><br/>

        </div>

        <div className="indigobg">
          <div className="categoryscreen">Settings Screens</div><br/>            
          <br/>

          <div className="bodytext"> 
            <img src={settings} class="drugimgs"/>
            <p className="imgcaption">Layout of options on the settings screens</p>
            <br/><br/>
            Given the context of the user, where officers would be talking while trying to use the device under bright sun glares or freezing rain, I tried to <b>slim down cognitive load wherever possible</b>. I made use of both colour and iconography, paying attention to the possibility of <b>low visibility and accessibility needs</b>, to make information simple and quickly recognizable. On settings screens, the most used options are displayed first, some with simple toggle options for fast access. 
          </div>
        </div>
        <br/><br/><br/><br/><br/>

        <div className="categorytitle">Looking Back</div><br/>
        <div className="bodytext">
          This was the first client project that I had complete ownership over, and I <b>started from scratch</b> with absolutely no specifications - not even the screen size! Before presenting any design work to my project manager or  stakeholders, I had to make sure that <b>I had a solid argument for every single design decision I made</b>, and could communicate it effectively. I soon learned that if I couldn’t back myself up, it would be scrutinized by others and I’d be forced to change it against my judgement. 
          <br/><br/>
          Designing without first-hand input directly from our users required me to <b>make a lot of assumptions</b>. For example, I wasn’t sure if they’d watch the device as it analyzed a saliva sample, and thus had to guess on the correct amount of detail to display on the progress screens. If I could keep working on the project, I would insist on thorough <b>user testing and acquiring more concrete feedback from police officers</b> before proceeding any further.  As well, I would’ve loved to collaborate with developers to learn  about making my designs more feasible and realistic as I was unfamiliar with that point of view, but unfortunately the project was in its early stages and no developers had yet been hired.
          <br/><br/>
          As the first product/design focused employee in the company, I had to work independently to <b>define my own workflow</b> and do a huge amount of self-learning. I learned that I don’t have to have all the answers at the start, but would learn during the process by <b>consciously challenging myself</b> in every task I was thrown into. Although I enjoyed the autonomy, I found myself craving other designers or even developers to bounce ideas off of, which is why I want to work in a setting where <b>design systems as well as mentorship</b> are established and valued for my next internship.

        </div>
        <br/><br/><br/><br/><br/>

        <a className="underlined-button" href="/mapp">→ Previous case study</a>

      </div>


      
    );
  }
}

export default Drugsensor;
