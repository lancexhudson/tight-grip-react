import React from 'react';
import './HeroMerch.css';
import TGwhite from '../assets/TGwhite.jpeg';
import TGblue from '../assets/TGblue.png';
import TGblack from '../assets/TGblack.jpeg';
import test from '../assets/test.jpg';

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
        <div className="artwork">
          <img src={TGwhite} alt="Breathe" className="artwork" />
        </div>
        <p className="description">Sizes: S - XL</p>
      </div>

      <div className="merch-container">
        <div id="title">"Panther"</div>
        <div className="artwork">
          <img src={test} alt="Panther" className="artwork" />
        </div>
        <p className="description">Sizes: S - XL</p>
      </div>

      <div className="merch-container">
        <div id="title">"Dangerous"</div>
        <div className="artwork">
          <img src={test} alt="You Made Me Dangerous" className="artwork" />
        </div>
        <p className="description">Sizes: S - XL</p>
      </div>
    </div>
  );
};

export default HeroMerch;
