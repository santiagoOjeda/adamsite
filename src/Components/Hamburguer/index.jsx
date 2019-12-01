import React, {useState} from 'react';
import { useUIcontextStateValue } from '../../Store/UiContext';

const Hamburguer = ({ style}) => {
    const [{ submenu }, dispatch] = useUIcontextStateValue();
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        dispatch({
            type : "toogleSubmenu",
            payload: {
                submenu: !submenu
            }
        });
    }

    return (
        <div className={ submenu ? ("hamburguer hamburguer__active") : ("hamburguer ") } onClick={handleClick} >
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
};

export default Hamburguer;