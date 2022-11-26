import React from 'react';
import "allStyleFile/Head.scss";

const Head = ({content}) => {
  return (
    <div className='head'>
      {content}
    </div>
  )
}

export default Head