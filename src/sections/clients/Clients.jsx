import React from "react";
import "allStyleFile/sections/Clients.scss";
import img1 from "images/brand-logo-1.png";
import img2 from "images/brand-logo-2.png";
import img3 from "images/brand-logo-3.png";
import img4 from "images/brand-logo-4.png";
import img5 from "images/brand-logo-5.png";
import img6 from "images/brand-logo-6.png";


const Clients = () => {
  return (
    <div className="main-clients">
      <div className="container">
        <div className="box">
          <img src={img1} alt="ClientImg" />
        </div>
        <div className="box">
          <img src={img2} alt="ClientImg" />
        </div>
        <div className="box">
          <img src={img3} alt="ClientImg" />
        </div>
        <div className="box">
          <img src={img4} alt="ClientImg" />
        </div>
        <div className="box">
          <img src={img5} alt="ClientImg" />
        </div>
        <div className="box">
          <img src={img6} alt="ClientImg" />
        </div>
      </div>
    </div>
  );
};

export default Clients;
