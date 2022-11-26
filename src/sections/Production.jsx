import React from "react";
import "allStyleFile/sections/Production.scss";
import ServicesProduction from "./ServicesProduction";
import Button from "./Button";
import img1 from "../assets/services-1.png";
import img2 from "../assets/services-2.png";
import img3 from "../assets/services-3.png";
import img4 from "../assets/services-4.png";

const Production = () => {
  return (
    <div className="main-production">
      <div className="container">
        <div className="builder">
          <h5>GET TO KNOW US</h5>
          <h1>
            <span>Enjoy the Best</span>
            <br />
            Film Video Production Studio
          </h1>
          <p>
            Founded by a ragtag group of independent filmmakers, we’ve never
            even dreamt to achieve such a high level of recognition we have now
            in the industry! Over the course of the last years, we were able to
            assemble a mighty team of FX experts, filmmaking pros, and
            passionate video editors! Every single one of our clients has told
            us at some point that considering just how high the quality of our
            works is, the cost of it is just incredibly affordable…
          </p>
          <Button content="Read More" />
        </div>
        <div className="main-services">
          <ServicesProduction
            img={img1}
            title="Music Videos"
            paragraph="Despite the decline in the viewership of music-themed TV channels, the music videos industry has successfully migrated to YouTube and Internet, by and large!"
          />
          <ServicesProduction
            img={img2}
            title="Films/Trailers"
            paragraph="With a lot of movies and TV shows (not even mentioning the video games industry) coming out in droves every single year, all of..."
          />
          <ServicesProduction
            img={img3}
            title="Live Events"
            paragraph="With the live streaming being an absolutely integral part of the world of today, if your live events are to be professional, you'll need..."
          />
          <ServicesProduction
            img={img4}
            title="Commercials"
            paragraph="While TV ads are no longer the darling of the Public Relations, advertising, and marketing - on par with all the ads produced for..."
          />
        </div>
      </div>
    </div>
  );
};

export default Production;
