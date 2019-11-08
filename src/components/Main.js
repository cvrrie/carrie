import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import './Main.scss';
import carrie from '../img/carrie.svg';
import mappProjectBox from '../img/mapp/Websitepreview.png';
import sensors from '../img/sensors.png';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.projectsRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.scroll) {
      this.scrollToProjects();
      this.props.unsetScroll();
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.scroll && this.props.scroll) {
      this.scrollToProjects();
      this.props.unsetScroll();
    }
  }

  scrollToProjects = () => {
    if(this.projectsRef.current){
      this.projectsRef.current.scrollIntoView({ 
          behavior: "smooth", 
          block: "start"
      })
    }
  }

  render() {
    return (
      <>
        <div className="Main">
          <div className="intro">
            <div className="left">
                <h1 className="name">Hey, I'm Carrie!</h1>
                <div className="words">
                  I'm currently a student at McGill University studying Physiology. I'm also interested in UX/UI design and love finding simple, powerful, and smart solutions to complex challenges. 
                </div>
                <a href="mailto:carrierong37@gmail.com" className="underlined-button">Drop me a hi!</a>
            </div>
            <img src={carrie} className="portrait" alt="carrie" />
          </div>
          <div className="projects">
            <div className="scrollanchor" ref={this.projectsRef} />
            <h2 className="heading">WORK</h2>
            <Link to="/drugsensor" className="nolink">
              <div className="projectCard">
                <div className="cardLeft">
                  <div className="title">Making roads safer after legalization with DrugSensor</div>
                  <div className="words">Crafting the first iterations of screen interfaces for a roadside THC sensor used by Canadian law enforcement</div>
                  <span className="underlined-button">See case study &rarr;</span>
                </div>
                <div className="cardRight">
                  <img className="sensorImage" src={sensors} alt="sensor image"/>
                </div>
              </div>
            </Link>

            <Link to="/mapp" className="nolink">
              <div className="projectCard">
                <div className="cardLeft">
                  <div className="title">Creating a map of every place you go</div>
                  <div className="words">Enriching people's daily experiences through visual location tracking</div>
                  <span className="underlined-button">See case study &rarr;</span>
                </div>
                <div className="cardRight">
                  <img className="mappImage" src={mappProjectBox} alt="mapp project image"/>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Main;