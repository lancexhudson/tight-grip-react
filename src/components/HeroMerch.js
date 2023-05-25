import React from 'react';
import './HeroMerch.css';
import TGwhite from '../assets/TGwhite.jpeg';
import TGblue from '../assets/TGblue.png';
import TGblack from '../assets/TGblack.jpeg';

const HeroMerch = () => {
  return (
    <div className="hero-merch-container">
      <div className="merch-container">
        <div id="title">"Breathe"</div>
        {/* <div id="title-sub">subtext</div> */}
        {/* <div className="artwork"> */}
        <img src={TGwhite} alt="Breathe" className="artwork" />
        {/* </div> */}
      </div>
      <div className="merch-container">
        <div id="title">"Panther"</div>
        {/* <div id="title-sub">subtext</div> */}
        {/* <div className="artwork"> */}
        <img src={TGblue} alt="Panther" className="artwork" />
        {/* </div> */}
      </div>
      <div className="merch-container">
        <div id="title">"Dangerous"</div>
        {/* <div id="title-sub">subtext</div> */}
        {/* <div className="artwork"> */}
        <img src={TGblack} alt="You Made Me Dangerous" className="artwork" />
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroMerch;
