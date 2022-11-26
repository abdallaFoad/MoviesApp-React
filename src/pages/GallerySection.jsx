import React from 'react'
import Head from "../sections/Head";
import Album from "../sections/gallery/Album";
import { RiGalleryLine } from "react-icons/ri";
import '../style/sections/GallerySection.scss';
import img1 from "images/Depositphotos_11162141_original-370x270.jpg";
import img2 from "images/Depositphotos_139834922_original-370x270.jpg";
import img3 from "images/Depositphotos_143917421_original-370x270.jpg";
import img4 from "images/Depositphotos_23645569_original-370x270.jpg";
import img5 from "images/Depositphotos_46365137_original-370x270.jpg";
import img6 from "images/Depositphotos_55788597_original-370x270.jpg";
import img7 from "images/Depositphotos_5666588_original-370x270.jpg";
import img8 from "images/Depositphotos_9688167_original-370x270.jpg";

const GallerySection = () => {
  return (
    <div className="gallery" style={{ marginTop: "5rem" }}>
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
          <Album
            contentH3="Filming Short Film «Dover»"
            icon={<RiGalleryLine />}
            num="6"
            img={img2}
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;