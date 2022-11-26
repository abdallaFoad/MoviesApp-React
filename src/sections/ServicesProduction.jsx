import React from 'react'
import "allStyleFile/sections/ServicesProduction.scss";


const ServicesProduction = ({img, title, paragraph}) => {
  return (
    <div className='services-card'>
      <div className="img">
        <img src={img} alt="img-services" />
      </div>
      <div className="title">
        {title}
      </div>
      <div className="paragraph">
        {paragraph}
      </div>
    </div>
  )
}

export default ServicesProduction