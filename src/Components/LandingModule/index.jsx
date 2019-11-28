import React, {useState, useEffect} from 'react';
import Lottie from 'react-lottie';


import {ThreeElement} from '../';

const LandingModule = ({title, subtitle, titleBg, productBg, color}) => {


    const icon = require('../../Resources/Animations/hipster.json');
    
   const [defaultOptions, setSefaultOptions] = useState({
        loop: true,
        autoplay: true,
        animationData:icon,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
        },
    });


    var styles = {
        color: color
    };


    return (
        <section className="landing-module">
           
            <div className="landing-module__left-container">
                <div className="landing-module__left-container__bg">
                    <h1 style={styles}>{title}</h1>
                    <img src={titleBg} alt="titleBg"/>
                    <p style={styles}>{subtitle}</p>
                </div>
            </div>
            <div className="landing-module__right-container">
            <ThreeElement width={1000} height={window.innerHeight - 100}/>
            {/* <Lottie width="50px" height="50px" options={defaultOptions} ></Lottie> */}
                <img src={productBg} alt="productBg"/>
            </div>
        </section>
    );
};

export default LandingModule;