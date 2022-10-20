// # Main Import
import React, { useState, useContext } from "react";

// # Import Component Style
import "./GridActionIcon.css";

import { SelectAllContext } from "../../../contexts/SelectAllContext";

// Navbar React Component Construction
function GridActionIcon(props) {
    /*    State that controls button selection */
    const [isCheked, setIsChecked] = useState(false);
    /* Checkbox Context */
    const { isSelectChecked } = useContext(SelectAllContext);

    /*  Function that controls the radio button (Selected/ Unselected) */
    const handleClickChecked = () => {
        setIsChecked(!isCheked);
    };

    return (
        <input
            type="radio"
            checked={isSelectChecked ? true : isCheked}
            onClick={handleClickChecked}
        />
    );
}

export default GridActionIcon;