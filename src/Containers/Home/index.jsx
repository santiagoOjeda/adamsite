import React, {useEffect, useState} from 'react';
import { useUIcontextStateValue } from '../../Store/UiContext';
import { Header, Logo, LandingModule, Menu } from '../../Components';
import hellaBG from '../../Resources/Images/hellaBG.svg';
import hellaProductBG from '../../Resources/Images/hellaProductBG.svg';
import bicycleBG from '../../Resources/Images/bicycleBG.svg';
import bicycleProductBG from '../../Resources/Images/bicycleProductBG.svg';


 
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
                productBg={hellaProductBG}
                color='#00c691'
            />
            <LandingModule 
                title="BICYCLE BOLTS" 
                subtitle="Here i make and sell metric security bolts to help
                keep components on your bicycle safe from
                opportunistic thievery."
                titleBg={bicycleBG}
                productBg={bicycleProductBG}
                color='#6140FF'
            />
            <LandingModule 
                title="SURF BRAIN" 
                subtitle="In this project I make over 35,000 slingshot each year in a variety of colors and designs."
                titleBg={hellaBG}
                productBg={hellaProductBG}
                color='#2AD9B1'
            /> 
        </section>
    );
};

export default Home;