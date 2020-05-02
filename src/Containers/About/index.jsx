import React, {useState} from 'react';
import { FooterLinks, Header} from '../../Components';
// images
import adamImg from '../../Resources/Images/adam-photo.jpg';
import uranusImg from '../../Resources/Images/uranus.svg';
import bgAbout from '../../Resources/Images/bgAbout.svg';
// texts
import TEXT from "../../Resources/texts";
const {ABOUT} = TEXT;

const About = () => {
    const [showHeader, setShowHeader] = useState(false);
    let socialMedia = { instagram: "", youtube: "", email: "" };

    return (
        <section className="about__desktop">
             <Header show={showHeader} showLogo={true}></Header>
            <div className="about__desktop__container">
                <div className="about__desktop__left" style={{ backgroundImage: `url(${bgAbout})` }}>
                    <div className="about__desktop__left__container"  >
                        <div className="about__desktop__left__container__title-container">
                            <h1>{ABOUT.title}</h1>
                            <h2>{ABOUT.subtitle}</h2>
                        </div>
                        <p className="about__desktop__left__container__p">{ABOUT.p}</p> 
                        <div className="about__desktop__left__container__detail-container">
                            <div className="">
                                <p>{ABOUT.detail_1}</p>
                            </div>
                            <div className="">
                                <p>{ABOUT.detail_2}</p>
                            </div>
                            <div className="">
                                <img src={uranusImg} alt="uranus"/>
                                <p>{ABOUT.detail_3}</p>
                            </div>
                        </div>
                        <div className="">
                            <h3>{ABOUT.mailTo}</h3>
                            <div className="">
                                <p>{ABOUT.mail}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about__desktop__right">
                    <img src={adamImg} alt="adam"/>
                </div>
            </div>
            <FooterLinks
                color1={"#6140FF"}
                color2={"#30F2D4"}
                socialMediaUrl={socialMedia}
            />
        </section>
    );
};

export default About;