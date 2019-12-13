import React, {useEffect, useState} from 'react';
import { useUIcontextStateValue } from '../../Store/UiContext';
import { Header, Logo, LandingModule, Menu, UpDown } from '../../Components';
import hellaBG from '../../Resources/Images/hellaBG.svg';
import hellaProductBG from '../../Resources/Images/hellaProductBG.svg';
import bicycleBG from '../../Resources/Images/bicycleBG.svg';
import bicycleProductBG from '../../Resources/Images/bicycleProductBG.svg';
import sligIcon from '../../Resources/Images/sligIcon.svg';
import bicicleIcon from '../../Resources/Images/bicicleIcon.svg';
import surfIcon from '../../Resources/Images/surfIcon.svg';
import surfBG from '../../Resources/Images/surfProductBG.svg';
import surfBGProd from '../../Resources/Images/surfRealPRoductBG.svg';


 
const Home = (props) => {
    const [{ submenu }, dispatch] = useUIcontextStateValue();
    const [showHeader, setShowHeader] = useState(false);
    const [VerticalIndex, setVerticalIndex] = useState(0);

    useEffect(()=>{
        window.onscroll = function() {
            if(window.pageYOffset === 0) {
                setShowHeader(false);
            
            } else {
                setShowHeader(true);
            }
          }
    });



    const icon = require('../../Resources/Animations/hipster.json');

    return (
        <section className="home" >
            <UpDown state={1} show={true} index={VerticalIndex}  />
            <Header show={showHeader}/>
            <Menu/>
            <section name="landing"  className="home__landing" id="1" >
                <Logo/>
                <div className="home__landing__container-text">
                <h1>Welcome</h1>
                <div>
                <h5><span>TO ADAM'S GRAY</span><br></br> WEBSITE</h5>
                <div></div>
                </div>
                </div>
            </section> 
            <LandingModule 
                id="2"
                title="HELLA SLINGSHOTS" 
                subtitle="In this project I make over 35,000 slingshot each year in a variety of colors and designs."
                titleBg={hellaBG}
                iconImg={sligIcon}
                iconLottie={icon}
                productBg={hellaProductBG}
                buttonBorderColor='#00c691'
                bgBtnColor="#FFF28B"
                btnText="SEE PROJECT"
                color='#00c691'
                buttonText="text"
                textPos="150px"
                isThreeDimensional={true}
            />
            <LandingModule 
                id="3"
                title="BICYCLE BOLTS" 
                subtitle="Here i make and sell metric security bolts to help
                keep components on your bicycle safe from
                opportunistic thievery."
                titleBg={bicycleBG}
                productBg={bicycleProductBG}
                buttonBorderColor='#6140FF'
                bgBtnColor="#FFF28B"
                iconLottie={icon}
                btnText="SEE PROJECT"
                color='#6140FF'
                iconImg={bicicleIcon}
                buttonText="text"
                textPos="185px"
                isThreeDimensional={true}
                
            />
           
            <LandingModule 
                id="4"
                title="SURF BRAIN" 
                subtitle="In this project I make over 35,000 slingshot each year in a variety of colors and designs."
                titleBg={surfBG}
                productBg={surfBGProd}
                btnText="SEE PROJECT"
                buttonBorderColor='#2AD9B1'
                bgBtnColor="#FFF28B"
                color='#2AD9B1'
                iconLottie={icon}
                textPos="125px"
                iconImg={surfIcon}
                buttonText="text"
                isThreeDimensional={false}
            /> 
        </section>
    );
};

export default Home;