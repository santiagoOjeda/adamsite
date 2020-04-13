import React from "react";

import { FooterLinks } from "../";

const Banner = ({ title, bgImg, color1, color2, color3, socialMediaUrl }) => {
  return (
    <section className="banner">
      <header
        style={{ backgroundColor: color2, backgroundImage: `url(${bgImg})` }}
      >
        <div
          className="banner__title-container"
          style={{ borderColor: color1, backgroundColor: color2 }}
        >
          <h1 style={{ color: color1 }}>{title}</h1>
        </div>
      </header>
      <FooterLinks
        color1={color1}
        color2={color2}
        color3={color3}
        socialMediaUrl={socialMediaUrl}
      />
    </section>
  );
};

export default Banner;
