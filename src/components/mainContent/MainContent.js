import React from 'react';
import { Link } from 'react-router-dom';

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
            <Link className="link-products" to="/scarves">
              shop scarves
            </Link>
          </div>
          <div
            className="link-image"
            style={{
              backgroundImage: `url(${LinkImageB})`,
            }}
          >
            <Link className="link-products" to="/beanies">
              shop beanies
            </Link>
          </div>
          <div
            className="link-image"
            style={{
              backgroundImage: `url(${LinkImageG})`,
            }}
          >
            <Link className="link-products" to="/gloves">
              shop gloves
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
