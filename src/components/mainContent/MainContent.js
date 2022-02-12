import React from 'react';
import MainImage from '../../assets/images/main_page.png';
import LinkImage from '../../assets/images/banner.jpeg';
import './style.scss';

const Directory = (props) => {
  return (
    <div className="main_content">
      <div className="wrap">
        <div
          className="main_image"
          style={{
            backgroundImage: `url(${MainImage})`,
          }}
        ></div>
        <div
          className="link_image"
          style={{
            backgroundImage: `url(${LinkImage})`,
          }}
        >
          <a className="link_beanies" href="#">
            shop beanies
          </a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
