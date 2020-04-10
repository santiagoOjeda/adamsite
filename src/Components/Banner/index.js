import React from "react";
import instagramIcon from "../../Resources/Images/instagram-icon.svg";
import youtubeIcon from "../../Resources/Images/youtube_icon.svg";
import emailIcon from "../../Resources/Images/email-icon.svg";

const Banner = ({ title, bgImg, color1, color2, color3, socialMediaUrl }) => {
  return (
    <section className="banner">
      <header style={{ backgroundColor: color2 }}>
        <div
          className="banner__title-container"
          style={{ borderColor: color1 }}
        >
          <h1 style={{ color: color1 }}>{title}</h1>
          <h1 style={{ color: color3 }}>{title}</h1>
        </div>
      </header>
      <footer style={{ backgroundColor: color1, color: color2 }}>
        <a src={socialMediaUrl.instagram}>
          <img src={instagramIcon} alt="#" />
          <p>Instagram</p>
        </a>
        <a src={socialMediaUrl.youtube}>
          <img src={youtubeIcon} alt="#" />
          <p>YouTube</p>
        </a>
        <a src={socialMediaUrl.email}>
          <img src={emailIcon} alt="#" />
          <p>Email</p>
        </a>
      </footer>
    </section>
  );
};

export default Banner;
