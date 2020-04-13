import React, { useState } from "react";
import {
  Header,
  Logo,
  Menu,
  Details,
  CarouselDetail,
  Briefly,
  Products,
  Banner,
} from "../../Components";

import detailBicycleBoltsImage from "../../Resources/Images/detailBicycleBoltsImage.svg";
import bgDetailsBB from "../../Resources/Images/bgDetailsBB.svg";
import bgTextDetailsHSS from "../../Resources/Images/bgTextDetailsHSS.svg";
import bgTextDetailsBB from "../../Resources/Images/bgTextDetailsBB.svg";
import bgHellaBanner from "../../Resources/Images/bgHellaBanner.svg";
import mockdetailimage from "../../Resources/Images/mockdetailimage.jpg";
import woodenSlingshot from "../../Resources/Images/wooden-slingshot.jpg";

import TEXT from "../../Resources/texts";

const BicycleBolts = (props) => {
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

  let titleColor = "#000";
  let colorPrimary = "#6140FF";
  let colorSecoundary = "#69DEBC";
  let colorComplementary = "#69DEBC";
  let colorSecoundaryComplementary = "#fff";
  let socialMedia = { instagram: "", youtube: "", email: "" };

  return (
    <>
      <Header show={showHeader} showLogo={false}></Header>

      <Details
        titleColor={colorPrimary}
        btnBgColor={colorComplementary}
        title={TEXT.DETAIL_SECTION.bicyclebolts.title}
        description={TEXT.DETAIL_SECTION.bicyclebolts.detail}
        detailImg={detailBicycleBoltsImage}
        titleBg={bgTextDetailsBB}
        bgImg={bgDetailsBB}
      />

      <CarouselDetail imageArray={imgArray} />

      <Briefly
        title={TEXT.DETAIL_SECTION.hellaslingshot.briefly.title}
        srcYoutube={TEXT.DETAIL_SECTION.hellaslingshot.briefly.srcYoutube}
        marqueeText={TEXT.DETAIL_SECTION.hellaslingshot.briefly.marqueeText}
        color1={colorPrimary}
        color2={colorSecoundary}
        color3={colorComplementary}
        color4={colorSecoundaryComplementary}
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
        color1={colorPrimary}
        color2={colorSecoundary}
        color3="#fff"
        bgImg={bgHellaBanner}
        socialMediaUrl={socialMedia}
      />
    </>
  );
};

export default BicycleBolts;
