import React, { PureComponent } from 'react';
/*
import photo1 from '../img/photo1.png';
import photo2 from '../img/photo2.png';
import photo3 from '../img/photo3.png';
import photo4 from '../img/photo4.png';
import photo5 from '../img/photo5.png';
*/
import './Photos.css';

class Photos extends PureComponent {
  render() {
    return (
      <div className="photos">
        <h1 className="title">Photos</h1>
        <div className="row">
          {/*
          <div className="col">
            <img src={photo1} className="photo" />
            <img src={photo2} className="photo" />
            <img src={photo3} className="photo" />
          </div>
          <div className="col">
            <img src={photo4} className="photo" />
            <img src={photo5} className="photo" />
          </div>
          */}
        </div>

      </div>
    )
  }
}

export default Photos;

