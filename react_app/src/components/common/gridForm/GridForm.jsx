// # Main Import 
import React from 'react';

// # Import Component Style
import './GridForm.css'

// # GrifForm Row React Component Construction
function GridFormRow () {
    
    return (
        // Logo assembled by Icon and Name
            <form className="gridFormRow">
                <div className="rowLabel">
                    <label>
                        input 1
                    </label>
                </div>
                <div  className="rowInput">
                    <input 
                        type="text"
                        required
                    />
                </div>
            </form>
    )

}

// # GrifForm Row React Component Construction
function GridForm () {
    
    return (
        // Logo assembled by Icon and Name
        <div className="gridFormRow" >
            <GridFormRow />
        </div>
    )

}

export default GridForm;