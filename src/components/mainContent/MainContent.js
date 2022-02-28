import React from 'react';
import MainImage from '../../assets/images/campaign_1.jpg';
import LinkImageB from '../../assets/images/beanies.jpg';
import LinkImageS from '../../assets/images/scarves_2.jpg';
import LinkImageG from '../../assets/images/gloves_3.jpg';
import './style.scss';

const MainContent = (props) => {
  return (
    <div className="mainContent">
      <div className="wrap">
        <div
          className="main-image"
          style={{
            backgroundImage: `url(${MainImage})`,
          }}
        ></div>

        <div className="link-banner-container">
          <div
            className="link-image"
            style={{
              backgroundImage: `url(${LinkImageS})`,
              backgroundSize: 'cover',
            }}
          >
            <a className="link-products" href="/scarves">
              shop scarves
            </a>
          </div>
          <div
            className="link-image"
            style={{
              backgroundImage: `url(${LinkImageB})`,
            }}
          >
            <a className="link-products" href="/beanies">
              shop beanies
            </a>
          </div>
          <div
            className="link-image"
            style={{
              backgroundImage: `url(${LinkImageG})`,
            }}
          >
            <a className="link-products" href="/gloves">
              shop gloves
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
