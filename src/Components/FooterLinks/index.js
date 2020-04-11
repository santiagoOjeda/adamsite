import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const FooterLinks = ({ socialMediaUrl, color1, color2, color3 }) => {
  return (
    <footer
      className="footerlink"
      style={{ backgroundColor: color1, color: color2 }}
    >
      <a src={socialMediaUrl.instagram}>
        <div
          className="footerlink__icon-container"
          style={{ backgroundColor: color2 }}
        >
          <FontAwesomeIcon color={color1} size="2x" icon={faInstagram} />
        </div>
        <p>Instagram</p>
      </a>
      <a src={socialMediaUrl.youtube}>
        <div
          className="footerlink__icon-container"
          style={{ backgroundColor: color2 }}
        >
          <FontAwesomeIcon color={color1} size="2x" icon={faYoutube} />
        </div>
        <p>YouTube</p>
      </a>
      <a src={socialMediaUrl.email}>
        <div
          className="footerlink__icon-container"
          style={{ backgroundColor: color2 }}
        >
          <FontAwesomeIcon color={color1} size="2x" icon={faEnvelope} />
        </div>

        <p>Email</p>
      </a>
    </footer>
  );
};

export default FooterLinks;
