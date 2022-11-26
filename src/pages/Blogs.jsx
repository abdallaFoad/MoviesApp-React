import React from "react";
import Button from "../sections/Button";
import "../style/sections/Blogs.scss";
import Blog from "./Blog";
import { BsFillPersonFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import img1 from "../assets/blog1.jpg";
import img2 from "../assets/blog2.jpg";
import img3 from "../assets/blog3.jpg";
import img4 from "../assets/blog4.jpg";
import img5 from "../assets/blog5.jpg";

const Blogs = () => {
  return (
    <div className="main-blogs">
      <div className="btn">
        <Button content="Blogs" />
      </div>
      <div className="container">
        <div className="allContent">
          <div className="allBlog">
            <Blog
              img={img1}
              para="With the VR market booming for the last few years and just so many
        virtual reality headsets released in that same time period, it seems
        like this kind of a visual is going to be mainstream, right?"
              history="APRIL 10, 2017"
              h2="The Virtual Reality Videos?"
              icon1={<BsFillPersonFill />}
              icon2={<FaComments />}
              admin="Admin"
              comments="No Comment(S)"
            />
            <Blog
              img={img2}
              para="I am sure that either if you’re a professional working in the industry, or simply are an avid reader fo Mashable or such webzines, then you’ve surely seen these funny, round cams that.Admin "
              history="OCTOBER 19, 2016"
              h2="How Do 360 Degree Cameras Work?"
              icon1={<BsFillPersonFill />}
              icon2={<FaComments />}
              admin="Admin"
              comments="No Comment(S)"
            />
            <Blog
              img={img3}
              para="With teasers and all kinds of official trailers being a vital part of the marketing campaign just for any major (or minor) movie or even a TV show (not mentioning the video games), the."
              history="OCTOBER 19, 2016"
              h2="The Film Trailers Industry is Booming!"
              icon1={<BsFillPersonFill />}
              icon2={<FaComments />}
              admin="Admin"
              comments="No Comment(S)"
            />
            <Blog
              img={img4}
              para="While the movie industry has become now such an integrated part of our life, the matter of the fact is that it just wasn’ t the case just mere 4 generations – or 100 years ago! Starting with the…"
              history="OCTOBER 19, 2016"
              h2="Short History of the Movie Industry"
              icon1={<BsFillPersonFill />}
              icon2={<FaComments />}
              admin="Admin"
              comments="No Comment(S)"
            />
            <Blog
              img={img5}
              para="In a recent surprise move, the local authorities in the state of Arizona started to sponsor teh local movie industry. This kind of an investment strategy, copied from the CA or NYC ones is…"
              history="OCTOBER 13, 2016"
              h2="Indie Filmmaking in Arizona?"
              icon1={<BsFillPersonFill />}
              icon2={<FaComments />}
              admin="Admin"
              comments="No Comment(S)"
            />
          </div>
          <div className="search">
            <div className="title">Search</div>
            <div className="category">
              <h1>Categories</h1>
              <ul>
                <li>
                  <p>Films/Trailers</p>
                  <div className="num">(4)</div>
                </li>
                <li>
                  <p>Films/Trailers</p>
                  <div className="num">(4)</div>
                </li>
                <li>
                  <p>Films/Trailers</p>
                  <div className="num">(4)</div>
                </li>
                <li>
                  <p>Films/Trailers</p>
                  <div className="num">(4)</div>
                </li>
              </ul>
            </div>
            <div className="recent">
              <div className="title">Recent Comments</div>
              <div className="box">
                <h5>
                  Theresa Buford <span>on</span>
                </h5>
                <p>How Profitable are Music Videos?</p>
              </div>
              <div className="box">
                <h5>
                  Barack Mockingbird <span>on</span>
                </h5>
                <p>How Profitable are Music Videos?</p>
              </div>
            </div>
            <div className="articles">
              <div className="aTitle">
                <h1>Articles</h1>
              </div>
              <select name="articles">
                <option value="OCTOBER 19, 2016">OCTOBER 19, 2022</option>
                <option value="APRIL 10, 2017">APRIL 10, 2023</option>
                <option value="January 19, 2012">January 19, 2021</option>
                <option value="OCTOBER 13, 2016">OCTOBER 13, 2022</option>
                <option value="November 10, 2015"> November 10, 2023</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
