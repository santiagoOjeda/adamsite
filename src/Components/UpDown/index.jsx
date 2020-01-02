import React, { useState } from 'react';



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
            {/* <h1>{index}</h1> */}
            <img src="../../Resources/Images/logo.svg" alt="" />
            <a href={"#" + index} onClick={pageUp} >
                <img src="../../Resources/Images/down-arrow-icon.svg" alt="arrow up" />
            </a>
            <a href={"#" + index} onClick={pageDown} >
                <img src="../../Resources/Images/bicicleIcon.svg" alt="arrow up" />
            </a>
        </div>
    );
};

export default UpDown;