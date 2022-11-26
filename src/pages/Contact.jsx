import React from "react";
import "../style/sections/Contact.scss";
import { RiFacebookFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="main-contact">
      <div className="map">
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=cairo+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="container">
        <div className="contact-info">
          <div className="contacts">
            <h1>Contacts</h1>
            <div className="information">
              Address:
              <span>11559 Ventura Boulevard, Studio City, CA 91604</span>
            </div>
            <div className="information">
              Phone:
              <span>01144704339</span>
            </div>
            <div className="information">
              Gmail:
              <span>abdallafoad5555@gamil.com</span>
            </div>
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
          <div className="touch">
            <h1>Let’s Get in Touch</h1>
            <form>
              <input type="text" name="name" placeholder="Your name"/>
              <input type="text" name="email" placeholder="Your e-mail" />
              <textarea name="message" id="" cols="30" rows="10" placeholder="Your message"></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
