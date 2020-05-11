import React, { useEffect, useState } from "react";
// context
import { useUIcontextStateValue } from "../../Store/UiContext";
// components
import { Header, Logo, LandingModule, Menu, UpDown } from "../../Components";
// images
import hellaBG from "../../Resources/Images/hellaBG.svg";
import hellaProductBG from "../../Resources/Images/hellaProductBG.svg";
import bicycleBG from "../../Resources/Images/bicycleBG.svg";
import bicycleProductBG from "../../Resources/Images/bicycleProductBG.svg";
import sligIcon from "../../Resources/Images/sligIcon.svg";
import bicicleIcon from "../../Resources/Images/bicicleIcon.svg";
import surfIcon from "../../Resources/Images/surfIcon.svg";
import surfBG from "../../Resources/Images/surfProductBG.svg";
import hellaMoreBG from "../../Resources/Images/hella-bg-product.svg";
import surfBGProd from "../../Resources/Images/surfRealPRoductBG.svg";
import intermodProductBG from "../../Resources/Images/intermodProductBG.svg";
import intmdBg from "../../Resources/Images/intmdBg.svg";
import intermoicon from "../../Resources/Images/intermoicon.svg";
import intIcon from "../../Resources/Images/intIcon.svg";
import hellaMoreBgProduct from "../../Resources/Images/hella-more-bg-product.svg";
// library
import ReactPageScroller from "react-page-scroller";
// texts
import TEXT from "../../Resources/texts";
const { HOME } = TEXT;

const Home = (props) => {
  const [{ submenu }, dispatch] = useUIcontextStateValue();
  const [showHeader, setShowHeader] = useState(false);
  const [VerticalIndex, setVerticalIndex] = useState(0);
  const [sizeIsMobile, setSizeIsMobile] = useState(false);
  const [customPageNumber, setCustomPageNumber] = useState(0);
  const [pageIndex, setPageIndex] = useState(0);

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
    };

    if (window.innerWidth <= "720") {
      setSizeIsMobile(true);
    } else {
      setSizeIsMobile(false);
    }
  });

  const showOrHideHeader = (number) => {
    if (number !== 0) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  };

  const changeIndex = (direction) => {
    if (direction == "up") {
      if (customPageNumber != 0) {
        setCustomPageNumber(customPageNumber - 1);
      }
    } else {
      setCustomPageNumber(customPageNumber + 1);
    }
  };

  const icon = require("../../Resources/Animations/adam.json");

  const lottieLaptop = require("../../Resources/Animations/laptop.json");

  return (
    <section className="home">
      <Header show={showHeader} showLogo={true}></Header>
      <UpDown click={changeIndex} />
      <ReactPageScroller
        pageOnChange={(number) => {
          showOrHideHeader(number);
          setPageIndex(number);
        }}
        customPageNumber={customPageNumber}
        animationTimer={1000}
      >
        <section name="landing" className="home__landing" id="1">
          <Logo />
          <h6 className="home__landing__mobile-text-scroll">SCROLL TO START</h6>
          <div className="home__landing__container-text">
            <h1>{HOME.text1}</h1>
            <div>
              <h5>
                <span>{HOME.text2}</span>
                <br></br>
                {HOME.text3}
              </h5>
            </div>
          </div>
        </section>

        <LandingModule
          id="2"
          idThreejs="hella"
          title="HELLA SLINGSHOTS"
          titleColor="#00c691"
          subtitle="In this project I make over 35,000 slingshot each year in a variety of colors and designs."
          titleBg={hellaBG}
          iconImg={sligIcon}
          iconLottie={icon}
          productBg={hellaProductBG}
          buttonBorderColor="#00c691"
          bgBtnColor="#FFF28B"
          btnText="SEE PROJECT"
          color="#00c691"
          buttonText="text"
          textPos="150px"
          width="1000px"
          height="1000px"
          isThreeDimensional={true}
          isMobile={sizeIsMobile}
          model3dSelected="sligshot"
        />

        <LandingModule
          id="3"
          idThreejs="bycicle"
          title="BICYCLE BOLTS"
          titleColor="#6140FF"
          subtitle="Here i make and sell metric security bolts to help
                keep components on your bicycle safe from
                opportunistic thievery."
          titleBg={bicycleBG}
          productBg={bicycleProductBG}
          buttonBorderColor="#6140FF"
          bgBtnColor="#FFF28B"
          iconLottie={icon}
          btnText="SEE PROJECT"
          color="#6140FF"
          iconImg={bicicleIcon}
          buttonText="text"
          textPos="185px"
          isThreeDimensional={true}
          isMobile={sizeIsMobile}
          model3dSelected="sligshot"
        />

        <LandingModule
          id="4"
          idThreejs="surf"
          title="SURF BRAIN"
          titleColor="#2AD9B1"
          subtitle="In this project I make over 35,000 slingshot each year in a variety of colors and designs."
          titleBg={surfBG}
          productBg={surfBGProd}
          btnText="SEE PROJECT"
          buttonBorderColor="#2AD9B1"
          bgBtnColor="#FFF28B"
          color="#2AD9B1"
          textPos="125px"
          iconImg={surfIcon}
          buttonText="text"
          isThreeDimensional={true}
          isMobile={sizeIsMobile}
          model3dSelected="sligshot"
        />

        <LandingModule
          id="5"
          idThreejs="more"
          title="HELLA MORE
                    FUNNER"
          titleColor="#6140FF"
          subtitle="In this art project i make ridiculously
                    complex and ADD addled collages from
                    images found online."
          titleBg={hellaMoreBG}
          btnText="SEE PROJECT"
          productBg={hellaMoreBgProduct}
          buttonBorderColor="#F26941"
          bgBtnColor="#FFE848"
          color="#F26941"
          iconLottie={icon}
          textPos="195px"
          textPosLeft="50px"
          iconImg={intermoicon}
          buttonText="text"
          isThreeDimensional={false}
          isMobile={sizeIsMobile}
          model3dSelected=""
        />

        <LandingModule
          id="5"
          idThreejs="intrmodl"
          title="INTRMODL"
          titleColor="#196FBC"
          subtitle="This is a logistics project in which we delivered
                    a fleet management solution for intermodal yards."
          titleBg={intmdBg}
          btnText="SEE PROJECT"
          buttonBorderColor="#196FBC"
          bgBtnColor="#196FBC"
          productBg={intermodProductBG}
          color="#196FBC"
          textPos="105px"
          textPosLeft="50px"
          iconLottie={lottieLaptop}
          iconImg={intIcon}
          buttonText="text"
          isThreeDimensional={false}
          isMobile={sizeIsMobile}
          model3dSelected=""
        />
      </ReactPageScroller>
    </section>
  );
};

export default Home;
