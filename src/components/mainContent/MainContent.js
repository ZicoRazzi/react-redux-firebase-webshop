import React from 'react';
import MainImage from '../../assets/images/main_page.png';
import LinkImageB from '../../assets/images/banner.jpeg';
import LinkImageS from '../../assets/images/le_bonnet_scarves.jpg';
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

        <div className="link-banner-container">
          <div
            className="link_image"
            style={{
              backgroundImage: `url(${LinkImageS})`,
            }}
          >
            <a className="link_products" href="/scarves">
              shop scarves
            </a>
          </div>
          <div
            className="link_image"
            style={{
              backgroundImage: `url(${LinkImageB})`,
            }}
          >
            <a className="link_products" href="/beanies">
              shop beanies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Directory;
