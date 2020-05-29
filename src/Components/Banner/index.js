import React from "react";

import { FooterLinks } from "../";

const Banner = ({
  title,
  bgImg,
  color1,
  color2,
  color3,
  color4,
  bgText,
  socialMediaUrl,
  footerColor,
}) => {
  return (
    <section className="banner">
      <header
        style={{
          backgroundColor: color2,
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "contain",
        }}
      >
        <div
          className="banner__title-container"
          style={{
            borderColor: color1,
            backgroundColor: bgText != undefined ? bgText : color2,
          }}
        >
          <h1 style={{ color: color3, textShadow: color4 }}>{title}</h1>
        </div>
      </header>
      <FooterLinks
        color1={footerColor != undefined ? footerColor : color1}
        color2={color2}
        color3={color3}
        socialMediaUrl={socialMediaUrl}
      />
    </section>
  );
};

export default Banner;
