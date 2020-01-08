import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';

import { ThreeElement, MainButton } from '../';

const LandingModule = ({ title, subtitle, titleBg, productBg, color, iconImg, btnText, buttonBorderColor, bgBtnColor, textPos, isThreeDimensional, iconLottie, id }) => {

    const [defaultOptions, setSefaultOptions] = useState({
        loop: true,
        autoplay: true,
        animationData: iconLottie,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    });

    var styles = {
        color: color,
        top: textPos
    };

    return (
        <section className="landing-module" id={id} >
            <div className="landing-module__left-container">
                <div className="landing-module__left-container__bg">
                    <h1 style={styles}>{title}</h1>
                    <img src={titleBg} alt="titleBg" />
                    <p style={styles}>{subtitle}</p>
                </div>
                <div className="landing-module__left-container__btn-container">
                    <img src={iconImg} alt="icon" />
                    <MainButton buttonText={btnText} borderColor={buttonBorderColor} bgBtnColor={bgBtnColor} />
                </div>
            </div>
            <div className="landing-module__right-container" style={{
                backgroundImage: "url(" + productBg + ")", backgroundSize: "contain",
                backgroundRepeat: "no-repeat", backgroundPositionX: "right"
            }}>
                {isThreeDimensional ? (
                    <ThreeElement width={1000} height={window.innerHeight - 100} />
                ) :
                    (
                        <div style={{ position: "absolute", paddingTop: "0vh", overflow: "hidden", height: "calc(100vh - 120px)" }}>
                            <Lottie width="100%" options={defaultOptions} ></Lottie>
                        </div>
                    )}
            </div>
        </section >
    );
};

export default LandingModule;