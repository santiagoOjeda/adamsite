import React, { useState } from "react";
import {
  Header,
  Logo,
  Menu,
  Details,
  CarouselDetail,
  Briefly,
  Products
} from "../../Components";
import detailHellaslingshotImage from "../../Resources/Images/detail-hellaslingshot.svg";
import bgDetailsHSS from "../../Resources/Images/bgDetailsHSS.svg";
import bgTextDetailsHSS from "../../Resources/Images/bgTextDetailsHSS.svg";
import mockdetailimage from "../../Resources/Images/mockdetailimage.jpg";
import ReactPageScroller from "react-page-scroller";

import TEXT from "../../Resources/texts";

const DetailSection = props => {
  const [showHeader, setShowHeader] = useState(true);
  const imgArray = [
    mockdetailimage,
    mockdetailimage,
    mockdetailimage,
    mockdetailimage
  ];

  let colorPrimary = "#FFF28B";
  let colorScoundary = "#00C691";
  let colorComplementary = "#FFF28B";
  let colorScoundaryComplementary = "#fff";

  return (
    <>
      <Header show={showHeader}></Header>

      <ReactPageScroller animationTimer={1000}>
        <Details
          titleColor="#000"
          title={TEXT.DETAIL_SECTION.hellaslingshot.title}
          description={TEXT.DETAIL_SECTION.hellaslingshot.detail}
          detailImg={detailHellaslingshotImage}
          titleBg={bgTextDetailsHSS}
          bgImg={bgDetailsHSS}
        />

        <CarouselDetail imageArray={imgArray} />

        <Briefly
          title={TEXT.DETAIL_SECTION.hellaslingshot.briefly.title}
          srcYoutube={TEXT.DETAIL_SECTION.hellaslingshot.briefly.srcYoutube}
          marqueeText={TEXT.DETAIL_SECTION.hellaslingshot.briefly.marqueeText}
          color1={colorPrimary}
          color2={colorScoundary}
          color3={colorComplementary}
          color4={colorScoundaryComplementary}
        />

        <Products />

        <Briefly
          title={TEXT.DETAIL_SECTION.hellaslingshot.briefly.title}
          srcYoutube={TEXT.DETAIL_SECTION.hellaslingshot.briefly.srcYoutube}
          marqueeText={TEXT.DETAIL_SECTION.hellaslingshot.briefly.marqueeText}
          color1={colorPrimary}
          color2={colorScoundary}
          color3={colorComplementary}
          color4={colorScoundaryComplementary}
        />
      </ReactPageScroller>
    </>
  );
};

export default DetailSection;
