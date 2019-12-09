import React, {useEffect, useState} from 'react';
import { useUIcontextStateValue } from '../../Store/UiContext';
import { Header, Logo, LandingModule, Menu } from '../../Components';
import hellaBG from '../../Resources/Images/hellaBG.svg';
import hellaProductBG from '../../Resources/Images/hellaProductBG.svg';
import bicycleBG from '../../Resources/Images/bicycleBG.svg';
import bicycleProductBG from '../../Resources/Images/bicycleProductBG.svg';
import sligIcon from '../../Resources/Images/sligIcon.svg';
import bicicleIcon from '../../Resources/Images/bicicleIcon.svg';
import surfIcon from '../../Resources/Images/surfIcon.svg';


 
const Home = (props) => {
    const [{ submenu }, dispatch] = useUIcontextStateValue();
    const [showHeader, setShowHeader] = useState(false);

    useEffect(()=>{
        window.onscroll = function() {
            if(window.pageYOffset === 0) {
                setShowHeader(false);
            
            } else {
                setShowHeader(true);
            }
          }
    });

    return (
        <section className="home" >
            <Header show={showHeader}/>
            <Menu/>
            <section name="landing"  className="home__landing" >
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
                title="HELLA SLINGSHOTS" 
                subtitle="In this project I make over 35,000 slingshot each year in a variety of colors and designs."
                titleBg={hellaBG}
                iconImg={sligIcon}
                productBg={hellaProductBG}
                buttonBorderColor='#00c691'
                bgBtnColor="#FFF28B"
                buttonText="SEE PROJECT"
                color='#00c691'
                buttonText="text"
            />
            <LandingModule 
                title="BICYCLE BOLTS" 
                subtitle="Here i make and sell metric security bolts to help
                keep components on your bicycle safe from
                opportunistic thievery."
                titleBg={bicycleBG}
                productBg={bicycleProductBG}
                buttonBorderColor='#6140FF'
                bgBtnColor="#FFF28B"
                buttonText="SEE PROJECT"
                color='#6140FF'
                iconImg={bicicleIcon}
                buttonText="text"
                
            />
            <LandingModule 
                title="SURF BRAIN" 
                subtitle="In this project I make over 35,000 slingshot each year in a variety of colors and designs."
                titleBg={hellaBG}
                productBg={hellaProductBG}
                buttonText="SEE PROJECT"
                buttonBorderColor='#2AD9B1'
                bgBtnColor="#FFF28B"
                color='#2AD9B1'
                iconImg={surfIcon}
                buttonText="text"
            /> 
        </section>
    );
};

export default Home;