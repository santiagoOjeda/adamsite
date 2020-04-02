import React, { useState } from 'react';
import arrowUp from '../../Resources/Images/up-arrow-icon.svg'
import arrowDown from '../../Resources/Images/down-arrow-icon.svg'



const UpDown = () => {

    const [index, setIndex] = useState(1);

    const pageUp = () => {
        setIndex(index - 1);
    }

    const pageDown = () => {
        setIndex(index + 1);
    }

    return (
        <div className="up-down">
            <img src="../../Resources/Images/logo.svg" alt="" />
            <a href={"#" + index} onClick={pageUp} >
                <img src={arrowUp} alt="arrow up" />
            </a>
            <a href={"#" + index} onClick={pageDown} >
                <img src={arrowDown} alt="arrow down" />
            </a>
        </div>
    );
};

export default UpDown;