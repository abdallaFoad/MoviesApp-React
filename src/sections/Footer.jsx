import React from "react";
import "allStyleFile/sections/Footer.scss";
import imgLogo from "images/footer-logo.png";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="logo">
          <div className="img">
            <img src={imgLogo} alt="ImgLogo" />
          </div>
          <p>
            Starting out as a team of three young indie filmmakers from the
            state of Georgia, with an urge for FX and video production, now we
            are huge! With hundreds of works on display and autoplay, see it all
            for yourself!
          </p>
          <div className="social">
            <a
              href="https://www.facebook.com/abdalla.foad.50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiFacebookFill className="facebook" />
            </a>
            <a
              href="https://www.instagram.com/abdallafoad74/?fbclid=IwAR3cVpszml-H46u4m3b6Kmr51ag8abvsL1f9SFGVBqndZrlMraBAHrKSzM8"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillInstagram className="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/abdofoad1179674/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="linked" />
            </a>
            <a
              href="https://twitter.com/abdallafoad74?fbclid=IwAR3kCOmht_taY7AnJT7rgRTqX5pdG0PrDRQ5bBWcJlUipBvMrp_IwWRMFM0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineTwitter className="twitter" />
            </a>
          </div>
        </div>
        <div className="widget">
          <h1>BLOG WIDGET</h1>
          <h3>THE VIRTUAL REALITY VIDEOS?</h3>
          <div className="span">APRIL 10, 2017</div>
          <h3>HOW DO 360 DEGREE CAMERAS WORK?</h3>
          <p className="span">OCTOBER 19, 2016</p>
        </div>
        <div className="info">
          <h1>CONTACT INFORMATION</h1>
          <p>11559 Ventura Boulevard, Studio City, CA 91604</p>
          <div className="span">Email: visuaFX@demolink.org</div>
          <div className="span">Phone 01: 555-748.-6051</div>
          <div className="span">Phone 02: 555-748.-6052</div>
          <div className="span">Fax: 555-748.-6050</div>
        </div>
        <div className="join">
          <h1>JOIN OUR NEWSLETTER</h1>
          <p>Note*: Spectators are our passion. Creation is our core.</p>
          <div className="bottom">
            <p>Enter Your Email</p>
            {<FiSend />}
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2022 All rights reserved by VisualFX</p>
      </div>
    </div>
  );
};

export default Footer;
