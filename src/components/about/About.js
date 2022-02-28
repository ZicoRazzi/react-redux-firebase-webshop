import React from 'react';
import CampaignImage from './../../assets/images/campaign_3.jpg';
import ProcessImage from './../../assets/images/knitting-machines.jpg';
import './styles.scss';

const About = () => {
  return (
    <div className="about">
      <div className="story-content">
        <div
          className="campaign-image"
          style={{
            backgroundImage: `url(${CampaignImage})`,
          }}
        ></div>
        <div className="story-text">
          <h1>OUR STORY</h1>
          <p>
            As a brand in current society we aim for sustainability and
            durability by using natural fibers only. All products we offer are a
            100% bio degradable.
          </p>

          <p>
            The ‘Made in Scotland’ label on our Bonnets stands for craftsmanship
            and quality. Our factory was founded over 170 years ago, being one
            of the oldest factories in the UK.
          </p>
        </div>
      </div>
      <div className="process-content">
        <div className="process-text">
          <h1>THE PROCESS</h1>

          <p>
            All products are knitted on traditional machineries. The technique
            used to make these products has been passed down through
            generations. After the knitting process, the beanies are washed,
            pressed and checked thoroughly.
          </p>

          <p>
            A selection of products feature a Caregora certificate. The Caregora
            criteria of keeping and caring is founded on all these carefully
            selected judged guidelines, as to assure the quality of these
            valuable fibres and the highest standards of husbandry and animal
            care. All fibres are sourced in Scotland or Italy. Our wool is
            derived from shearing and cutting only.{' '}
          </p>

          <p>
            We would like to welcome you into our colourful world, go and find
            your perfect beanie.
          </p>
        </div>
        <div
          className="process-image"
          style={{
            backgroundImage: `url(${ProcessImage})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
