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
            <h1>{index}</h1>
            <a href={"#" + index} onClick={pageUp} >up</a>
            <a href={"#" + index} onClick={pageDown} >down</a>
        </div>
    );
};

export default UpDown;