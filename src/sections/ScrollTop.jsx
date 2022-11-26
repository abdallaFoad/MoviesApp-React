import React from 'react'
import { useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';
import '../style/ScrollTop.scss';


const ScrollTop = () => {
  const [active, setActive] = useState(false);

  window.addEventListener('scroll', () => {
    document.documentElement.scrollTop >= 400 ? setActive(true) : setActive(false)
  });
  const toTop = () => {
    window.scrollTo({ top: 0 });
  }

  
  return (
    <>
      {active === true ? <div className="scrollTop" onClick={toTop}>{<BsArrowUp />}</div> : ""}
    </>
  );
}

export default ScrollTop