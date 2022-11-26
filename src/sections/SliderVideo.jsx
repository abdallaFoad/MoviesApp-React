import React from "react";
import "../style/sections/SliderVideo.scss";
import video from "../assets/First-Flight-Aerial-Drone-video-around-Hudson-River-New-York-2016-4K.mp4";

const SliderVideo = () => {
  return (
    <div className="main-sliderVideo">
      <div className="all-content">
        <div className="video">
          <video
            src={video}
            controls
            autoPlay="true"
            loop="true"
            typeof="mp4"
          />
        </div>
          <div className="content">
          <h5>FILM VIDEO PRODUCTION STUDIO</h5>
          <h1>360 DEGREE VIDEOS</h1>
            <p>
              This year we’re offering you to catch up with the trends and shoot
              awesome, 360 videos!
            </p>
          </div>

      </div>
    </div>
  );
};

export default SliderVideo;
