import React from 'react';

const Menu = ({open}) => {
    return (
        <div className={open ? ("menu menu__open"):("menu")}>
            <div className="menu__container">
                <ul className="menu__container__ul">
                    <li className="menu__container__ul__li menu__container__ul__li__spaced">item one</li>
                    <li className="menu__container__ul__li">item one</li>
                    <li className="menu__container__ul__li menu__container__ul__li__spaced">item one</li>
                    <li className="menu__container__ul__li">item one</li>
                    <li className="menu__container__ul__li menu__container__ul__li__spaced">item one</li>
                    <li className="menu__container__ul__li">item one</li>
                    <li className="menu__container__ul__li menu__container__ul__li__spaced">item one</li>
                </ul>
            </div>
            <footer className="menu__footer">
                footer
            </footer>
        </div>
    );
};

export default Menu;