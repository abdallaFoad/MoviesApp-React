import React from 'react';
import "allStyleFile/sections/Album.scss";


const Album = ({img, contentH3, num, icon}) => {
  return (
    <div className="album">
      <div className="img">
        <img src={img} alt="gallery" />
      </div>
      <div className="content">
        <div className="btn">
          <button>Album</button>
        </div>
        <div className="icon">
          <h3>{contentH3}</h3>
          <div className="spans">
            <span className='svg'>{icon}</span>
            <span>{num}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Album