import React from "react";
import "allStyleFile/sections/Gallery.scss";
import Head from "../Head";
import Album from "./Album";
import { RiGalleryLine } from "react-icons/ri";
import img1 from "images/Depositphotos_143917421_original-370x270.jpg";
import img2 from "images/Depositphotos_139834922_original-370x270.jpg";
import img3 from "images/Depositphotos_143917421_original-370x270.jpg";
import img4 from "images/Depositphotos_23645569_original-370x270.jpg";
import img5 from "images/Depositphotos_46365137_original-370x270.jpg";
import img6 from "images/Depositphotos_55788597_original-370x270.jpg";
import img7 from "images/Depositphotos_5666588_original-370x270.jpg";
import img8 from "images/Depositphotos_9688167_original-370x270.jpg";

const Gallery = () => {
  return (
    <div className="main-gallery">
      <div className="container">
        <Head content="Our Gallery" />
        <div className="albums">
          <Album
            contentH3="Filming Short Film «Dover»"
            icon={<RiGalleryLine />}
            num="6"
            img={img1}
          />
          <Album
            contentH3="Filming Short Film «Dover»"
            icon={<RiGalleryLine />}
            num="6"
            img={img2}
          />
          <Album
            contentH3="Filming Short Film «Dover»"
            icon={<RiGalleryLine />}
            num="6"
            img={img3}
          />
          <Album
            contentH3="Filming Short Film «Dover»"
            icon={<RiGalleryLine />}
            num="6"
            img={img4}
          />
          <Album
            contentH3="Filming Short Film «Dover»"
            icon={<RiGalleryLine />}
            num="6"
            img={img5}
          />
          <Album
            contentH3="Filming Short Film «Dover»"
            icon={<RiGalleryLine />}
            num="6"
            img={img6}
          />
          <Album
            contentH3="Filming Short Film «Dover»"
            icon={<RiGalleryLine />}
            num="6"
            img={img7}
          />
          <Album
            contentH3="Filming Short Film «Dover»"
            icon={<RiGalleryLine />}
            num="6"
            img={img8}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
