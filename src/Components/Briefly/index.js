import React from "react";

const Briefly = ({
  title,
  srcYoutube,
  marqueeText,
  color1,
  color2,
  color3,
  color4,
}) => {
  let mainTextstyles = {
    color: color1,
  };

  let secoundaryTextstyles = {
    color: color2,
  };

  let secoundaryTitleTextstyles = {
    color: color3,
    textShadow: "2px 5px 0px " + color4,
  };

  let secoundaryTitleBGTextstyles = {
    color: color4,
  };

  let borderStyles = {
    borderColor: color1,
  };
  let mainBGStyles = {
    backgroundColor: color1,
  };
  let secoundaryBGStyles = {
    backgroundColor: color2,
  };

  return (
    <section className="briefly">
      <div className="briefly__main-container" style={mainBGStyles}>
        <h1 style={secoundaryTextstyles}>{title}</h1>
        <iframe
          src={srcYoutube}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="briefly__marquee" style={secoundaryBGStyles}>
        <div className="briefly__marquee__container-title" style={borderStyles}>
          <h2 style={secoundaryTitleTextstyles}>{marqueeText}</h2>
        </div>
      </div>
    </section>
  );
};

export default Briefly;
