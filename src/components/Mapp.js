import React, { PureComponent } from 'react';
import './Mapp.scss';


class Mapp extends PureComponent {
  render() {
    return (
      <div className="mapp">
        <div className="introduction">
          <h1 className="title">M A P P</h1>
          <p className="subtitle"><b>iOS APP USER INTERFACE & USER EXPERIENCE DESIGN CASE STUDY</b></p>
          <p className="description">MAPP is a location-based tracking app that automatically creates a route record of 
          where you go every day. In addition to allowing the user to look at where they’ve been, the app also presents statistics of how much time 
          they’ve spent at each location over each week, day, or month and analyzes the effect of locations on their productivity. </p>
        </div>
        <div className="body">
          <div className="section">
            <h2 className="heading">Problem</h2>
            <p>
              Everyone’s busy nowadays - people to see, places to be, right? But then somebody asks 
              you what you did last week and you suddenly can’t recall a single thing that happened or 
              when you were where.
              <br/> <br/>
              There are 365 days in a year, and it’s impossible for most of our brains to remember all
              of them. So are the days in the past essentially wasted if we don’t remember them?
              <br/> <br/>
              Diaries or habit tracker programs have never worked for me: I dutifully record my activities
              for a few days until I forget or it becomes too much of a hassle. As someone who
              really enjoys looking back at what I’ve done in the past as well as seeing statistics 
              accumulated over a period of time, I wanted to create something to mitigate this challenge 
              and solve this question:
            </p>
            <p className="question">
              How can I help people value and treasure the experiences they make in both the past and the future?
            </p>
            {/* BIG IMAGE*/}
          </div>
          <div className="section">
            <h2 className="heading">Concept</h2>
            <p>
              My approach to this question is to design an app that tracks where users go 
              throughout the day, creating a geographical diary that requires no input from the user. 
              <br/> <br/>
              Traditional daily habit tracker apps suffer too much friction, requiring a user to manually input 
              every activity they want to track. This is not only time consuming but presents a challenge to the 
              user who must remember exactly what they did and makes it a difficult practice to sustain in the long term.
              <br/> <br/>
              Using GPS technology, MAPP will mark every location the user visits, track their walking and commute 
              patterns, and generate a visual map of the route that they took over the course of the day. Since a 
              location is strongly associated with an activity (working out at the gym, studying at Amelia’s house, 
              eating at a restaurant), seeing a map of the route they visit is an accurate and convenient way to make a 
              record of their day. 
            </p>
            {/* BIG IMAGE*/}
          </div>
          <div className="section">
            <h2 className="heading">Product Strategy</h2>
            <p>
              From a business standpoint, I think of UX design as a way to problem solve. My role as a designer is to 
              develop an experience that maximizes both the quality of the user’s experience and the return on investment 
              for the business that the product is serving. 
            </p>
            
          </div>
        </div>
      </div>
    )
  }
}

export default Mapp;

