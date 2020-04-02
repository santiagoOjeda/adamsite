import React from 'react';

const IconButton = ({srcIcon}) => {
    return (
        <button className="iconbutton">
            <img src={srcIcon} alt="icon"/>
        </button>
    );
};

export default IconButton;