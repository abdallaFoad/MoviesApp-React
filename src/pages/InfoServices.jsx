import React from 'react'
import '../style/sections/InfoServices.scss';

const InfoServices = ({ title, para, padding = true }) => {
  return (
    <div className={`info-ser ${padding === true ? 'paddingRight' : 'paddingLeft'}`} >
      <div className="info" >
        <div className="info-title">{title}</div>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default InfoServices