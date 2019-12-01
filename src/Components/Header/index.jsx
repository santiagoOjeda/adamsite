import React from 'react';
import { Hamburguer, IconButton } from '../';
import logoImg from '../../Resources/Images/logo.svg';
import insLogo from '../../Resources/Images/instagram.svg';
import envLogo from '../../Resources/Images/black-envelope.svg';

const Header = ({show, handleClick}) => {
    

    return (
        <header className={show ? ("header header__show") : ("header header__hide")}  >
            <img className="header__logo" src={logoImg} alt="logo"></img>
            <div className="header__btn-container">
                <IconButton srcIcon={insLogo}/>
                <IconButton srcIcon={envLogo}/>
            </div>
            <Hamburguer />
        </header>
    );
};

export default Header;