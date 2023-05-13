import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div class="footer_item">
          <a
            href="https://open.spotify.com/artist/5M88UnQWBgvXR3lMDd8ssi"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-spotify" id="interest_icon" />
          </a>
        </div>

        <div class="footer_item">
          <a
            href="https://music.apple.com/us/artist/tight-grip/1576619138"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-apple" id="interest_icon" />
          </a>
        </div>
        <div class="footer_item">
          <a
            href="https://www.instagram.com/tightgripband/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-instagram" id="interest_icon" />
          </a>
        </div>
        <div class="footer_item">
          <a
            href="https://twitter.com/TightGripBand"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-twitter" id="interest_icon" />
          </a>
        </div>
        <div class="footer_item">
          <a
            href="https://www.facebook.com/tightgripband/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-facebook" id="interest_icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
//
export default Footer;
