import React from 'react';
import './HeroBio';
import './HeroBio.css';
import TGwhite from '../assets/TGwhite.jpeg';

function HeroBio() {
  return (
    <div className="hero-bio-container">
      <p id="about">
        Tight Grip is a melodic hardcore band from Cincinnati, OH USA.
      </p>
      <div className="bio-container">
        <div className="artwork">
          <img src={TGwhite} alt="Breathe" className="artwork" />
          {/* </div> */}
        </div>
        <div className="info">
          <div id="title">Ryan Schomber</div>
          <div id="title-sub">vocals</div>
          <p className="description">
            Hi. My name is Ryan. I am from Indiana. I like American Night and
            probably don't give a damn about you or your trends.
          </p>
          <div className="dude-pics">
            <img src={TGwhite} alt="Ryan" className="dude-pics-detail" />
            <img src={TGwhite} alt="Ryan" className="dude-pics-detail" />
            <img src={TGwhite} alt="Ryan" className="dude-pics-detail" />
            <img src={TGwhite} alt="Ryan" className="dude-pics-detail" />
          </div>
        </div>
      </div>
      <div className="bio-container">
        <div className="artwork">
          <img src={TGwhite} alt="Breathe" className="artwork" />
          {/* </div> */}
        </div>
        <div className="info">
          <div id="title">Ryan Schomber</div>
          <div id="title-sub">vocals</div>
          <p className="description">
            Hi. My name is Ryan. I am from Indiana. I like American Night and
            probably don't give a damn about you or your trends.
          </p>
          <div className="dude-pics">
            <img src={TGwhite} alt="Ryan" className="dude-pics-detail" />
            <img src={TGwhite} alt="Ryan" className="dude-pics-detail" />
            <img src={TGwhite} alt="Ryan" className="dude-pics-detail" />
            <img src={TGwhite} alt="Ryan" className="dude-pics-detail" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBio;
