import React from 'react';
import '../style/sections/Services.scss';
import img1 from '../assets/Depositphotos_11162141_original-370x270.jpg';
import img2 from '../assets/Depositphotos_115127378_original-585x330.jpg';
import img3 from '../assets/Depositphotos_139834922_original-370x270.jpg';
import img4 from '../assets/Depositphotos_143917421_original-370x270.jpg';
import img5 from '../assets/Depositphotos_9688167_original-370x270.jpg';
import img6 from '../assets/Depositphotos_55788597_original-370x270.jpg';
import InfoServices from './InfoServices';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="main-services">
      <div className="ser-background">
        <div className="content">
          <h1>
            VIDEO <div>PRODUCTION</div>
          </h1>
          <p>
            Over the course of the last years, we were able to assemble a mighty
            team of FX <br /> experts, filmmaking pros, and passionate video
            editors!
          </p>
        </div>
      </div>
      <div className="container">
        <div className="box">
          <div className="img">
            <img src={img1} alt="img" />
          </div>
          <InfoServices
            padding={false}
            title="Music Videos"
            para="Despite the decline in the viewership of music-themed TV channels, the music videos industry has successfully migrated to YouTube and Internet, by and large!"
          />
        </div>
        <div className="box">
          <InfoServices
            padding={true}
            title="Films/Trailers"
            para="With a lot of movies and TV shows (not even mentioning the video games industry) coming out in droves every single year, all of those need trailers and teaser trailers!"
          />
          <div className="img">
            <img src={img2} alt="img" />
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={img3} alt="img" />
          </div>
          <InfoServices
            padding={false}
            title="Live Events"
            para="With the live streaming being an absolutely integral part of the world of today, if your live events are to be professional, you'll need a pro to circumnavigate it through all the possible technical issues you may embark on!"
          />
        </div>
        <div className="box">
          <InfoServices
            padding={true}
            title="Commercials"
            para="While TV ads are no longer the darling of the Public Relations, advertising, and marketing - on par with all the ads produced for the Internet - the market is still doing well."
          />
          <div className="img">
            <img src={img4} alt="img" />
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src={img5} alt="img" />
          </div>
          <InfoServices
            padding={false}
            title="VR and 360 Videos"
            para="With the VR market booming for the last few years and just so many virtual reality headsets released in that same time period, it seems like this kind of a visual is going to be mainstream, right?"
          />
        </div>
        <div className="box">
          <InfoServices
            padding={true}
            title="Makeup/FXs"
            para="Besides providing you with all the technical experience and aesthetic expertise that we have in both shooting and post-processing the videos, we are also eager to help you with makeup, special effects etc..."
          />
          <div className="img">
            <img src={img6} alt="img" />
          </div>
        </div>
      </div>
      <div className="since">
        <div className="sinceContainer">
          <div className="SinceInfo">
            <p className="tellUs">TELL US MORE ABOUT YOUR PROJECT</p>
            <h1 className="working">
              WORKING WITH <div>VIDEO PRODUCTION</div> <br /> SINCE 1991!
            </h1>
          </div>
          <button className="con" onClick={() => navigate('/contact')}>Contact Us</button>
        </div>
      </div>
    </div>
  );
}



export default Services