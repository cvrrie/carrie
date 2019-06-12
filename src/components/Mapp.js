import React, { PureComponent } from 'react';
import './Mapp.scss';
import signIn from '../img/mapp/1-sign-in.png';
import welcome from '../img/mapp/2-welcome.png';
import overview from '../img/mapp/13-overview.png';
import bryton from '../img/mapp/3-bryton.png';
import melinda from '../img/mapp/4-melinda.png';
import competitors from '../img/mapp/5-competitors.png';
import wireframe from '../img/mapp/6-wireframe.png';
import welcomeScreen from '../img/mapp/7-welcome-screen.png';
import dailyRoute from '../img/mapp/8-daily-route.png';
import location from '../img/mapp/9-location.png';
import statistics from '../img/mapp/10-statistics.png';
import forYou from '../img/mapp/11-for-you.png';
import hotspots from '../img/mapp/12-hotspots.png';

import mappIcon from '../img/mapp/icon-1-mapp.png';
import welcomeIcon from '../img/mapp/icon-2-welcome.png';
import personasIcon from '../img/mapp/icon-3-personas.png';
import compIcon from '../img/mapp/icon-4-competitors.png';
import wireframeIcon from '../img/mapp/icon-5-wireframe.png';
import screensIcon from '../img/mapp/icon-6-screens.png';
import finalIcon from '../img/mapp/icon-7-final.png';
import productIcon from '../img/mapp/icon-8-product.png';

class Mapp extends PureComponent {
  render() {
    return (
      <div className="mapp">
        <div className="introduction">
          <div className="left">
            <img src={mappIcon} className="icon" alt="mapp"/>
            <h1 className="title">M A P P</h1>
            <p className="subtitle"><b>iOS APP USER INTERFACE & USER EXPERIENCE DESIGN CASE STUDY</b></p>
            <p className="description">MAPP is a location-based tracking app that automatically creates a route record of 
            where you go every day. In addition to allowing the user to look at where they’ve been, the app also presents statistics of how much time 
            they’ve spent at each location over each week, day, or month and analyzes the effect of locations on their productivity. </p>
          </div>
          <div className="right">
            <img src={signIn} className="image" alt="sign-in" />
          </div>
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
            <img src={welcome} className="image" alt="welcome" />
          </div>

          <div className="section">
            <img src={welcomeIcon} className="icon" alt="welcome"/>
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
            <img src={overview} className="image" alt="overview"/>
          </div>

          <div className="section">
            <img src={productIcon} className="icon" alt="product"/>

            <h2 className="heading">Product Strategy</h2>
            <p>
              From a business standpoint, I think of UX design as a way to problem solve. My role as a designer is to 
              develop an experience that maximizes both the quality of the user’s experience and the return on investment 
              for the business that the product is serving. 
              <br/> <br/>
              The initial focus of the app would be <b>acquisition of a user base</b> as well as their engagement. Key business 
              Performance Indicators (KPIs) that would quantify success of the app include <b>Daily Active Users (DAU)</b>, <b>time spent 
              (per DAU)</b>, <b>number of sessions</b> per day, <b>Retention</b> and <b>Churn Rates</b>, and <b>number of app downloads</b>.
              <br/> <br/>
              Revenue growth can later be measured after <b>monetization of user data</b>, with revenue streams such as 
              advertisement for businesses, data monetization, and commission (after every redirect etc).
              <br/> <br/> <br/>
               Before and during the designing process, I kept these questions in mind:
              <br/>
            </p>
            <div className="list">
              <div className="number">1</div>
              <div className="item">
                What is the problem that I’m trying to solve and who are the target users?
              </div>
            </div>
            <div className="list">
              <div className="number">2</div>
              <div className="item">
                What are the similar competitive products in the market?
              </div>
            </div>
            <div className="list">
              <div className="number">3</div>
              <div className="item">
                What is the main value that my product can provide to the target users?
              </div>
            </div>
            <div className="list">
              <div className="number">4</div>
              <div className="item">
                How should the success of the product be measured?
              </div>
            </div>
            <div className="list">
              <div className="number">5</div>
              <div className="item">
                What should the features of the Minimum Viable Product be?
              </div>
            </div>
          </div>

          <div className="section">
            <h2 className="heading">Research</h2>
            <p>To answer these questions, I conducted market research in the following ways:</p>
            <div className="list">
              <div className="number">1</div>
              <div className="item">
                <b>Surveys</b>, to better comprehend users and what they need
              </div>
            </div>
            <div className="list">
              <div className="number">2</div>
              <div className="item">
                Based on these surveys, <b>one on one interviews</b> to further understand 
                the habits of users, specifically why they go where they go and the emotions behind wanting to track their days (curiosity, 
                boredom, displeasure at not knowing how their day is spent)
              </div>
            </div>
            <p>From this research, I concluded that users are interested in the <b>ease and simplicity</b> of daily 
              tracking - they don’t want to have to think about what time they started an activity or how long they 
              spent. They also spend their day in an <b>average of 5-6 total locations</b>. I developed a few key questions 
              that would help me target problem areas for users by turning them into opportunities for design:</p>

            <p className="question">How might I reduce the level of effort it takes a user to make an accurate, 
            detailed representation of their day?
            <br/> <br/>
            How might I use the data from a user’s day to create informational analytics that are engaging and inspirational?
            <br/> <br/>
            How might I help the user discover new experiences based on their daily habits? </p>
          </div> 

          <div className="section">
            <img src={personasIcon} className="icon" alt="personas"/>

            <h2 className="heading">User Personas</h2>
            <p>
              The surveys also provided me with information to form two user personas that would help me achieve these goals.
            </p>
            <div className="persona">
              <img src={bryton} className="image" alt="bryton" />
              <div>
                <h3 className="subtitles">Profile</h3>
                <p>
                  Bryton is a busy student and aspires to be a software engineer after he graduates. He has a part time job, frequents 
                  the gym, and goes to his friends' house to play video games. He wants to be more efficient with his time, and feels 
                  like he would like a way to track how he spends his hours in a convenient way. 
                </p>
                <h3 className="subtitles">Pain Points</h3>
                <ul>
                  <li className="pp">Often too lazy to journal or track his daily activities at the end of the day</li>
                  <li className="pp">Goes to the same places every day and doesn’t have a way to track how many hours he spends (at the gym, for example)</li> 
                  <li className="pp">Is forgetful and feels like he is wasting his days if he can’t remember what he did</li>
                </ul>
              </div>
            </div>
            <div className="persona">
              <img src={melinda} className="image" alt="melinda" />
              <div>
                <h3 className="subtitles">Profile</h3>
                <p>
                  A retired schoolteacher and widow, Melinda spends her weekends visiting places around her city with her 
                  granddaughter. They enjoy going to parks, museums, and taking long walks together. Often finding that she 
                  has trouble remembering which day she went where, she'd like a way to  document her explorations combined 
                  with the ease of locating them so she can visit again.</p>
        
                <h3 className="subtitles">Pain Points</h3>
                <ul>
                  <li className="pp">Visits many new places every week and wants to look back on memories but doesn't have a convenient 
                  way of jotting them down</li>
                  <li className="pp">Wants to be able to bookmark the places that she particularly enjoyed, and have its location and 
                  details easy to access if she wants to return</li>
                </ul>
              </div>
            </div>
          </div>
        
          <div className="section">
             <img src={compIcon} className="icon" alt="competitors"/>

            <h2 className="heading">Competitive Analysis</h2>
            <p>Usually, I check out competitors after I have worked on the core features so that I'm not prematurely influenced by 
              existing designs. This time, I could not find any apps that were terribly similar to what I was trying to create - some 
              used location tracking for safety purposes and others created a ‘pie chart’ view of the user’s day without marking the 
              location. This was both helpful and unhelpful, as I could easily make MAPP different from existing apps but I was 
              limited in where I could draw inspiration from. </p>
            {/* big competitor pdf */}
            <img src={competitors} className="image" alt="competitors" />
            
          </div>

          <div className="section">            
            <img src={wireframeIcon} className="icon" alt="wireframes"/>
            <h2 className="heading">Wireframes</h2>
            <p>
            After the research process, I sketched out low fidelity wireframes and mapped out user and task flows. 
            </p>
{/* wireframe pdf */}
            <img src={wireframe} className="wireframes" alt="wireframe" />
            <p>After making the wireframes, I wanted to refine the layout and flow of my design so I sought 
              feedback from 5 of my users. From the feedback I received, I simplified my ideas and decided to incorporate 
              a note-taking function on each saved location in addition to displaying photos taken during that time. 
              I wanted the user to strengthen their personal connection with that location and thus increase their sense 
              of positive value and meaningfulness associated with that location and the product experience overall. As 
              well, I decided to implement a feedback system following the user’s visit  to one of MAPP’s suggested 
              locations - a cafe or a hiking trail, for instance. A simple pop-up notification consisting of rating out 
              of 5 stars would let the app know what to better recommend in the future and could potentially play into 
              the real-world ratings for businesses.</p>
          </div>

          <div className="screens">
             <img src={screensIcon} className="icon" alt="screens"/>

            <h2 className="heading">Welcome Screens</h2>
            {/* welcome pdf */}
            <img src={welcomeScreen} className="image" alt="welcome" />

            <p>
              Upon starting the app, the user is greeted with a Sign In page with options to create an account or sign in via 
              Google or Facebook accounts. The next page gives a brief overview of the app’s features so a new user is familiarized 
              with the pages they can navigate to.
            </p>
          </div>

          <div className="section">
            <h2 className="heading">Daily Route Screens</h2>
            {/* daily route pdf */}
            <img src={dailyRoute} className="image" alt="dailyroute" />

            <p>
              This is the crown jewel feature of MAPP: the user’s Daily Route is laid out on a map so that they can visualize 
              everywhere they’ve been that day. I used a two-card layout: the top green one to swipe between dates, and the bottom 
              white one to display location information; swiping them both downwards would allow a complete expanded view of the map 
              underneath. 
              <br/> <br/>
              There was so much information to present on this screen that I struggled with finding the right balance of 
              simplicity and comprehensiveness. For example, I considered including the exact time range that the user was present 
              at a place (ie 9-10am) but ultimately decided that it was redundant given that the duration and implied time of arrival 
              was already there. The finer details would be accessed by tapping on any of the locations, either on the white box or 
              on the map itself, which would bring you to the Location Card (below).
            </p>
          </div>

          <div className="section">
            <h2 className="heading">Location Card</h2>
            {/* location pdf */}
            <img src={location} className="image" alt="location" />

            <p>
              I wanted the Location Card to have a distinctly different look than the others, since it was intended to be a exitable 
              pop-up view (in which you can swipe between cards to view the previous or next location). Here was where I chose to
              present the details specific to the location: address, time of arrival and departure, and the people that were present 
              (if that person was using the app and at the particular location at the same time, the app would show them together). 
              <br/> <br/>
              I tried to give this card a personalized touch by adding photos that the user might’ve taken at the location (this would 
              be cool especially if they had visited a scenic or picturesque location so that they could remember that moment from 
              the photos) as well as an easily accessible note-taking function to record exactly what they did that day (helpful for 
              places they visit regularly and might forget what they did day-to-day).
            </p>
          </div>

          <div className="section">
            <h2 className="heading">Statistics Screens</h2>
            {/* statistics pdf */}
            <img src={statistics} className="image" alt="statistics" />

            <p>
              This was another screen where a large amount of information had to be shown. I didn’t want to crowd the screen, so I 
              opted for a swipable display (like a rotating carousel) allowing the user to view either a circle graph breakdown of 
              their day (“TOTAL”) or a bar graph of how much time they spent at specific locations (“Library”, “Gym”, etc). This is also 
              the primary screen where Goals can be added or edited, and a smaller circle graph shows progress of the specific goal. 
              <br/> <br/>
              One analytic I tried really hard to implement was “Activities affecting time spent in [location]”. This made a lot of 
              sense for things like “time spent sleeping”: if you spent more time in the gym, for example, there would be a clear effect 
              on your sleep quality/duration, or maybe more time in the library would result in less time spent at home. This idea isn’t 
              entirely fleshed out and would be a target for further user research in the future.
            </p>
          </div>

          <div className="section">
            <h2 className="heading">Suggestions and Rating Screens</h2>
            {/* for you pdf */}
            <img src={forYou} className="image" alt="foryou" />

            <p>
              I wanted the users of MAPP to be inspired to visit new places while recording their old ones, and this page gives them 
              suggestions in different categories (places to eat, study, or visit). This aligned with MAPP’s goal of helping people 
              discover new experiences and value the places that they choose to visit. 
              <br/> <br/>
              For the visual layout, I tried to make 
              experiences immediately tangible and alluring, so I opted for a card layout with a photo of the activity foremost. 
              In order for the user to decide if it was worth embarking on, I also included a map so they could see where the 
              location was, in addition to a short description and rating for more information. People are always more likely to 
              trust a source if friends they know can vouch for it, so the number of friends who have previously been to the 
              location is displayed. Finally, for someone like Melinda who wants to be able to save the locations she’d like to 
              visit, I added an option to bookmark individual places on this screen. 
              <br/> <br/>
              In order for the app to ensure that the 
              recommendations it gives are helpful and well-received, I implemented a way to obtain feedback from the user by 
              having them rate their experiences after visiting the suggested locations. This would not be a rating on the business 
              itself, however, and to emphasize the rating as a personal one I chose to use 3 emojis instead of stars or numbers 
              (also to keep it simple). If the user wanted to rate the business itself, I made a link to Yelp easily accessible. 
            </p>
          </div>

          <div className="section">
            <h2 className="heading">Hotspot Screen</h2>
            <img src={hotspots} className="image" alt="hotspots" />

            {/* hotspot pdf */}
            <p>
            The hotspot screen is how I imagined a person like Bryton would see where his friends liked to go and then be able to 
            ask them how the place was or visit it himself.  Popular places are denoted by a coloured circle on the map, and 
            tapping on any one of their names would bring you to a Location Card with more details. The user can see both the 
            places they go to the most - their personal hotspots - or the places most popular with others (friends’ hotspots).
            </p>
          </div>

          <div className="section">
            <img src={finalIcon} className="icon" alt="final"/>

            <h2 className="heading">Final Thoughts</h2>
            <p>
            I’ve had the idea for this app for years now, and it felt great to narrow my vision into a tangible design. My biggest challenge 
            with this project was considering how to present a large collection of information - dates, durations, modes of transport, 
            addresses - in a noncluttered and hierarchical way. Many of my original concepts had to be changed after thinking about and 
            observing the behavior of users; I had to remember that I wanted MAPP to serve one primary purpose as a route diary and not be 
            distracted by insignificant peripheral functions. 
            <br/> <br/>
            In the future, I would love to keep working on a social sharing page for MAPP, allowing users to see 
            where their friends have recently gone and comment. Most users, in addition to the “For you” and “Hotspots” 
            page, will get their inspiration from seeing people who they know, and will use it themselves as a way to 
            socially connect and broadcast their locations, goals, and photos. 
            <br/> <br/>
            I also considered how to incentivize the user to open the app regularly, since the concept of MAPP 
            is to work silently in the background and it would be easy to forget or ignore. This is also where the social activity page could come 
            into play, as the user would be engaged in checking the locations their friends visit and periodic notifications could be sent to give 
            a summary of activity highlights. In addition, using the statistics it generates, MAPP could deliver a Daily, Weekly, or Monthly Report 
            that would be like a story containing insights on the user’s day/week/month. 
            <br/> <br/>
            As I went further in my design process, I found that my 
            workflow was progressively streamlined, my intuition became stronger, and even little things like using shortcuts on Sketch got faster. 
            Sometimes the less time I spent on something the better it ended up looking - I got the hang of thinking like a user and a UX designer 
            at the same time. Of course I have so much to learn about branding, copywriting, and product design - aspects I’m excited to explore more 
            with my next project.
            </p>

            {/* mapp icon*/}
            <img src={mappIcon} className="icon" alt="mapp"/>
            <p>Thanks for reading my case study!
              <br/> <br/>
              Carrie Rong 2019
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Mapp;

