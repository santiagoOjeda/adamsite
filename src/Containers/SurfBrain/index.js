import React, { useState } from "react";
import {
  Header,
  Details,
  CarouselDetail,
  Briefly,
  Products,
  Banner,
} from "../../Components";

import surfbrainslogo from "../../Resources/Images/surfbrainslogo.svg";
import bgsurfbrains from "../../Resources/Images/bgsurfbrains.svg";
import bgTextDetailsBB from "../../Resources/Images/bgTextDetailsBB.svg";
import bgEndsurfbrains from "../../Resources/Images/bgEndsurfbrains.svg";
import mockdetailimage from "../../Resources/Images/mockdetailimage.jpg";
import woodenSlingshot from "../../Resources/Images/wooden-slingshot.jpg";

import TEXT from "../../Resources/texts";

const SurfBrain = (props) => {
  const [showHeader, setShowHeader] = useState(true);
  const imgArray = [
    mockdetailimage,
    mockdetailimage,
    mockdetailimage,
    mockdetailimage,
  ];

  let newProductsImgArray = [
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
    woodenSlingshot,
  ];

  let colorPrimary = "#6140FF";
  let colorSecoundary = "#69DEBC";
  let socialMedia = { instagram: "", youtube: "", email: "" };

  return (
    <>
      <Header show={showHeader} showLogo={false}></Header>

      <Details
        titleColor={colorPrimary}
        btnBgColor={colorSecoundary}
        pColor={colorSecoundary}
        btnBorderColor={colorSecoundary}
        title={TEXT.DETAIL_SECTION.surfbrains.title}
        description={TEXT.DETAIL_SECTION.surfbrains.detail}
        btnText={TEXT.DETAIL_SECTION.surfbrains.button}
        detailImg={surfbrainslogo}
        titleBg={bgTextDetailsBB}
        bgImg={bgsurfbrains}
      />

      <CarouselDetail imageArray={imgArray} />

      <Briefly
        title={TEXT.DETAIL_SECTION.hellaslingshot.briefly.title}
        srcYoutube={TEXT.DETAIL_SECTION.hellaslingshot.briefly.srcYoutube}
        marqueeText={TEXT.DETAIL_SECTION.hellaslingshot.briefly.marqueeText}
        color1={colorSecoundary}
        color2={colorPrimary}
        color3={colorSecoundary}
        color4={"#fff"}
      />

      <Products
        title={"Products"}
        showTitle={true}
        titleBgColor={colorPrimary}
        titleColor={colorSecoundary}
        productsImgArray={newProductsImgArray}
      />

      <Banner
        title="SEE STORE NOW!!!"
        color1={colorSecoundary}
        color2={"#2AD9B1"}
        color3={colorSecoundary}
        bgText={colorPrimary}
        footerColor={colorPrimary}
        color4="rgb(255, 255, 255) 2px 5px 0px"
        bgImg={bgEndsurfbrains}
        socialMediaUrl={socialMedia}
      />
    </>
  );
};

export default SurfBrain;
