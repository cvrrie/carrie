import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import './Main.scss';
import carrie from '../img/carrie.svg';
import mappProjectBox from '../img/mapp/mapp-project-box.png';

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
            <h2 className="heading" ref={this.projectsRef}>PROJECTS</h2>
            <Link to="/mapp" className="nolink">
              <div className="projectCard">
                <div className="cardLeft">
                  <div className="title">MAPP</div>
                  <div className="words">A location based daily tracker app design.</div>
                  <Link to="/mapp" className="underlined-button">See UX case study &rarr;</Link>
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