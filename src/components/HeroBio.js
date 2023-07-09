import React from 'react';
import './HeroBio';
import './HeroBio.css';
import TGwhite from '../assets/TGwhite.jpeg';

function HeroBio() {
  return (
    <div className="hero-bio-container">
      <p id="about-band">
        Tight Grip is a melodic hardcore band from Cincinnati, OH USA.
      </p>
      <div className="bio-container">
        <div className="profile-pic">
          <img src={TGwhite} alt="Breathe" className="profile-pic" />
          {/* </div> */}
        </div>
        <div className="info">
          <div id="name">Ryan Schomber</div>
          <div id="role">vocals</div>
          <p className="bio-about">
            Hi. My name is Ryan. I am from Indiana. I like American Nightmare
            and probably don't give a damn about you or your trends.
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
        <div className="profile-pic">
          <img src={TGwhite} alt="Breathe" className="profile-pic" />
          {/* </div> */}
        </div>
        <div className="info">
          <div id="name">Ryan Schomber</div>
          <div id="role">vocals</div>
          <p className="bio-about">
            Hi. My name is Ryan. I am from Indiana. I like American Nightmare
            and probably don't give a damn about you or your trends.
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
