import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";

import { ThreeElement, MainButton } from "../";

const LandingModule = ({
  title,
  subtitle,
  titleBg,
  productBg,
  color,
  textPosLeft,
  iconImg,
  btnText,
  buttonBorderColor,
  bgBtnColor,
  textPos,
  isThreeDimensional,
  iconLottie,
  id,
  idThreejs,
  titleColor,
  isMobile, // switch from mobile or desktop view
  model3dSelected,
}) => {
  const [defaultOptions, setSefaultOptions] = useState({
    loop: true,
    autoplay: true,
    animationData: iconLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  var styles = {
    color: color,
    top: textPos,
    left: textPosLeft,
    padding: " 0 5%",
    lineHeight: "27px",
    width: "74%",
    fontSize: "14px",
    fontFamily: "PoppinsBlack",
  };

  var stylesTitle = {
    color: titleColor,
    top: textPos,
    left: textPosLeft,
  };

  var stylesTitleMobile = {
    color: titleColor,
  };

  return (
    <>
      {isMobile ? (
        <div className="phone">
          <section className="landing-module" id={id}>
            <div className="landing-module__left-container-mobile">
              <div className="landing-module__left-container-mobile__bg">
                <div className="landing-module__left-container-mobile__bg__container">
                  <h1 style={stylesTitleMobile}>{title}</h1>
                  <img src={titleBg} alt="titleBg" />
                </div>
                <p style={styles}>{subtitle}</p>
              </div>
            </div>
            <div
              className="landing-module__right-container-mobile"
              style={{
                backgroundImage: "url(" + productBg + ")",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPositionX: "right",
              }}
            >
              {isThreeDimensional ? (
                <ThreeElement
                  id={idThreejs}
                  width={window.innerWidth}
                  height={"320"}
                  model3dSelected={model3dSelected}
                />
              ) : (
                <div
                  style={{
                    position: "absolute",
                    paddingTop: "0vh",
                    overflow: "hidden",
                    height: "100vh",
                    width: "100%",
                  }}
                >
                  <Lottie width="100%" options={defaultOptions}></Lottie>
                </div>
              )}

              <div className="landing-module__right-container-mobile__btn-container">
                <MainButton
                  buttonText={btnText}
                  borderColor={buttonBorderColor}
                  bgBtnColor={bgBtnColor}
                />
              </div>
            </div>
          </section>
        </div>
      ) : (
        <div className="desktop">
          <section className="landing-module" id={id}>
            {loading ? (
              <p>LOADING</p>
            ) : (
              <>
                <div className="landing-module__left-container">
                  <div className="landing-module__left-container__bg">
                    <h1 style={stylesTitle}>{title}</h1>
                    <img src={titleBg} alt="titleBg" />
                    <p style={styles}>{subtitle}</p>
                  </div>
                  <div className="landing-module__left-container__btn-container">
                    <img
                      src={iconImg}
                      alt="icon"
                      className="landing-module__left-container__btn-container__img"
                    />
                    <MainButton
                      buttonText={btnText}
                      borderColor={buttonBorderColor}
                      bgBtnColor={bgBtnColor}
                    />
                  </div>
                </div>
                <div
                  className="landing-module__right-container"
                  style={{
                    backgroundImage: "url(" + productBg + ")",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPositionX: "right",
                  }}
                >
                  {isThreeDimensional ? (
                    <ThreeElement
                      id={idThreejs}
                      width={window.innerWidth / 2}
                      height={window.innerHeight}
                    />
                  ) : (
                    <div
                      style={{
                        position: "absolute",
                        paddingTop: "0vh",
                        overflow: "hidden",
                        height: "100vh",
                        width: "50%",
                      }}
                    >
                      <Lottie width="100%" options={defaultOptions}></Lottie>
                    </div>
                  )}
                </div>
              </>
            )}
          </section>
        </div>
      )}
    </>
  );
};

export default LandingModule;
