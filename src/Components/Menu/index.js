import React from "react";
import { useUIcontextStateValue } from "../../Store/UiContext";
import TEXT from "../../Resources/texts";
import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  const [{ submenu }, dispatch] = useUIcontextStateValue();
  return (
    <div className={submenu ? "menu menu__open" : "menu"}>
      <div className="menu__container">
        <ul className="menu__container__ul">
          <li className="menu__container__ul__li menu__container__ul__li__spaced">
            <Link to={TEXT.HOME.menu[0].path}>
              <div className="menu__container__ul__li menu__container__ul__li__dot"></div>
              {TEXT.HOME.menu[0].name}
            </Link>
          </li>
          <li className="menu__container__ul__li">
            <Link to={TEXT.HOME.menu[1].path}>
              <div className="menu__container__ul__li menu__container__ul__li__dot"></div>
              {TEXT.HOME.menu[1].name}
            </Link>
          </li>
          <li className="menu__container__ul__li menu__container__ul__li__spaced">
            <Link to={TEXT.HOME.menu[2].path}>
              <div className="menu__container__ul__li menu__container__ul__li__dot"></div>
              {TEXT.HOME.menu[2].name}
            </Link>
          </li>
          <li className="menu__container__ul__li">
            <Link to={TEXT.HOME.menu[3].path}>
              <div className="menu__container__ul__li menu__container__ul__li__dot"></div>
              {TEXT.HOME.menu[3].name}
            </Link>
          </li>
          <li className="menu__container__ul__li menu__container__ul__li__spaced">
            <Link to={TEXT.HOME.menu[4].path}>
              <div className="menu__container__ul__li menu__container__ul__li__dot"></div>
              {TEXT.HOME.menu[4].name}
            </Link>
          </li>
          <li className="menu__container__ul__li">
            <Link to={TEXT.HOME.menu[5].path}>
              <div className="menu__container__ul__li menu__container__ul__li__dot"></div>
              {TEXT.HOME.menu[5].name}
            </Link>
          </li>
        </ul>
      </div>
      <footer className="menu__footer">footer</footer>
    </div>
  );
};

export default Menu;
