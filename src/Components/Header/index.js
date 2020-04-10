import React from "react";
import { Hamburguer, IconButton, Menu } from "../";
import logoImg from "../../Resources/Images/logo.svg";
import downArrowImg from "../../Resources/Images/down-arrow.svg";
import insLogo from "../../Resources/Images/instagram.svg";
import envLogo from "../../Resources/Images/black-envelope.svg";
import { Link } from "react-router-dom";

const Header = ({ show, handleClick, showLogo }) => {
  return (
    <header className={show ? "header header__show" : "header header__hide"}>
      <Link to="/">
        {showLogo ? (
          <img className="header__logo" src={logoImg} alt="logo"></img>
        ) : (
          <div className="header__replace-logo">
            <img src={downArrowImg} alt="logo"></img>
            <h2>GO BACK</h2>
          </div>
        )}
      </Link>

      <div className="header__btn-container">
        <IconButton srcIcon={insLogo} />
        <IconButton srcIcon={envLogo} />
      </div>

      <Hamburguer />

      <Menu />
    </header>
  );
};

export default Header;
