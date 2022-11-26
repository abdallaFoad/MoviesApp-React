import React from 'react';
import "../../style/sections/PresentationVideo.scss";
import Button from '../Button';
import imgBackground from '../../assets/video-bg.jpg'
import Movie from './Movie';
import { TbMovie } from "react-icons/tb";
import { BiMoviePlay } from "react-icons/bi";
import { BiCameraMovie } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";

const PresentationVideo = () => {
  return (
    <div className="main-presentation">
        <div className="btn">
          <Button content="View All Gallery" />
        </div>
      <div className="allContent">
        <div className="container">
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/BZsc23MQWEg?feature=oembed&amp;wmode=opaque"
              frameborder="0"
              title="video"
              width="100%"
              height="100%"
            ></iframe>
          </div>
          <div className="content">
            <h1>Check this video presentation</h1>
            <p className='choose'>to know why people choose us</p>
            <div className="movies">
              <Movie icon={<TbMovie />} num="5586" para="Satisfied Customers" />
              <Movie icon={<BiCameraMovie />} num="3864" para="Projects Done" />
              <Movie icon={<BiMoviePlay />} num="103" para="Consultants" />
              <Movie icon={<MdLocalMovies />} num="23" para="Awards Won" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresentationVideo;