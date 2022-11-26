import React from 'react'
import '../style/sections/Blog.scss';


const Blog = ({img, history,h2, para, icon2, icon1, admin, comments}) => {
  return (
    <div className="main-blog">
      <div className="img">
        <img src={img} alt="blog" />
      </div>
      <div className='history'>{history}</div>
      <h2>{h2}</h2>
      <p>
        {para}
      </p>
      <div className="contact">
        <div className="box">
          <div className="icon">
            {icon1}
          </div>
          <span>{admin}</span>
        </div>
        <div className="box">
          <div className="icon">
            {icon2}
          </div>
          <span>{comments}</span>
        </div>
      </div>
    </div>
  );
}

export default Blog