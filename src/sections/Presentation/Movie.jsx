import React from 'react';
import '../../style/sections/Movie.scss';

const Movie = ({icon, num, para}) => {
  return (
    <div className="main-movie">
      <div className="icon">
        {icon}
      </div>
      <div className="num">{num}</div>
      <p className='para'>{para}</p>
    </div>
  );
}

export default Movie