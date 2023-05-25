import React from 'react';
import './HeroMerch.css';
import TGwhite from '../assets/TGwhite.jpeg';
import TGblue from '../assets/TGblue.png';
import TGblack from '../assets/TGblack.jpeg';

const HeroMerch = () => {
  return (
    <div className="hero-merch-container">
      {/* <div className="TEST-container">
        <div class="TEST-image">
          <img src={TGwhite} alt="Breathe" className="artwork" />
        </div>
        <div class="TEST-info">
          "Breathe"
          <p class="description">Sizes: S - XL</p>
        </div>
      </div> */}

      <div className="merch-container">
        <div id="title">"Breathe"</div>
        {/* <div id="title-sub">subtext</div> */}
        <div className="artwork">
          <img src={TGwhite} alt="Breathe" className="artwork" />
          {/* </div> */}
        </div>
        <p className="description">Sizes: S - XL</p>
      </div>
      <div className="merch-container">
        <div id="title">"Panther"</div>
        {/* <div id="title-sub">subtext</div> */}
        <div className="artwork">
          <img src={TGblue} alt="Panther" className="artwork" />
        </div>
        <p className="description">Sizes: S - XL</p>
      </div>
      <div className="merch-container">
        <div id="title">"Dangerous"</div>
        {/* <div id="title-sub">subtext</div> */}
        <div className="artwork">
          <img src={TGblack} alt="You Made Me Dangerous" className="artwork" />
        </div>
        <p className="description">Sizes: S - XL</p>
      </div>
    </div>
  );
};

export default HeroMerch;
