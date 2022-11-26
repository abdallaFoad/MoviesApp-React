import React from 'react'
import '../style/sections/Button.scss';

const Button = ({content}) => {
  return (
    <>
      <button className='button'>{content}</button>
    </>
  );
}

export default Button