import React, {useState, useEffect} from 'react';
import { FooterLinks, Header} from '../../Components';
// images
import adamImg from '../../Resources/Images/adam-photo.jpg';
import uranusImg from '../../Resources/Images/uranus.svg';
import bgAbout from '../../Resources/Images/bgAbout.svg';
import aboutEnvelopeImg from '../../Resources/Images/about-envelope.svg';

// texts
import TEXT from "../../Resources/texts";
const {ABOUT} = TEXT;

const About = () => {

    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        window.onscroll = function () {
          if (window.pageYOffset === 0) {
            setShowHeader(true);
          } else {
            setShowHeader(true);
          }
        };
      });


    let socialMedia = { instagram: "", youtube: "", email: "" };

    return (
        <>
            <Header show={showHeader} showLogo={false}></Header> 
            <section className="about__desktop">
                <div className="about__desktop__container">
                    <div className="about__desktop__left" style={{ backgroundImage: `url(${bgAbout})` }}>
                        <div className="about__desktop__left__container"  >
                            <div className="about__desktop__left__container__title-container">
                                <h1>{ABOUT.title}</h1>
                                <h2>{ABOUT.subtitle}</h2>
                            </div>
                            <p className="about__desktop__left__container__p">{ABOUT.p}</p> 
                            <div className="about__desktop__left__container__detail-container">
                                <div className="about__desktop__left__container__detail-container__box">
                                    <p>{ABOUT.detail_1}</p>
                                </div>
                                <div className="about__desktop__left__container__detail-container__box">
                                    <p>{ABOUT.detail_2}</p>
                                </div>
                                <div className="about__desktop__left__container__detail-container__box__living">
                                    <img src={uranusImg} alt="uranus"/>
                                    <p>{ABOUT.detail_3}</p>
                                </div>
                            </div>
                            <div className="about__desktop__left__container__mail-section">
                                <h3>{ABOUT.mailTo}</h3>
                                <div className="about__desktop__left__container__mail-section__mail">
                                    <p>{ABOUT.mail}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about__desktop__right"  style={{ backgroundImage: `url(${adamImg})`, backgroundPositionY: "center", backgroundSize: "cover" }}></div>
                </div>
                 <div className="about__mobile">
                    <div className="about__mobile__p-container">
                        <p className="">{ABOUT.p}</p> 
                    </div>
                    <div className="about__mobile__detail-container">
                        <div className="about__mobile__detail-container__box">
                            <p>{ABOUT.detail_1}</p>
                        </div>
                        <div className="about__mobile__detail-container__box">
                            <p>{ABOUT.detail_2}</p>
                        </div>
                    </div>
                    <div className="about__mobile__detail-container__box__living">
                        <img src={uranusImg} alt="uranus"/>
                        <p>{ABOUT.detail_3}</p>
                    </div>
                    <div className="about__mobile__detail-container__mail-section">
                        <img src={aboutEnvelopeImg} alt="aboutEnvelopeImg"/>
                        <p>{ABOUT.mail}</p>
                    </div>
                </div>
                <FooterLinks
                    color1={"#6140FF"}
                    color2={"#30F2D4"}
                    socialMediaUrl={socialMedia}
                /> 
            </section>
        </>
    );
};

export default About;