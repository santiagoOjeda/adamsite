import React, {useState} from 'react';

const Hamburguer = ({ style}) => {

    const [open, setOpen] = useState(false);

    return (
        <div className={ open ? ("hamburguer hamburguer__active") : ("hamburguer ") } onClick={()=>setOpen(!open)} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

export default Hamburguer;