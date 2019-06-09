import React, { PureComponent } from 'react';

import './Main.scss';
import carrie from '../img/carrie.svg';

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
                <div className="words2"> hi.</div>
            </div>
            <img src={carrie} className="portrait" alt="carrie" />
          </div>
          <div className="projects">
            <h2 className="heading" ref={this.projectsRef}>Projects</h2>
            <div className="projectCard">
              MAPP
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
