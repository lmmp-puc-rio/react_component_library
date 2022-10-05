// #  Main Imports
import React, { useState } from 'react';

// #  Local SubComponents & utils
import { RecursiveAccordion } from "../components/common"
import { ExpandableGrid, FAB, GridForm } from '../components/common'

// # Import Component Style
import './pages.css'
import { darkColors,lightColors } from '../components/common';

const Accordions = (props) => {

    const [isEditable, setIsEditable] = useState(true)

    // Optional Action Buttons in Wrapped
    // const wrap_actions = {edit:{title:'Edit Case'},
    //                         run:{title:'Run Case'}}

    // Accordion Structure
    const dataStructure = [
    {
        main: 'Inputs',
        id: '1',
        hidden: '',
        actions: [],
        subitems: [],
    },
    {
        main: 'Results',
        id: '2',
        hidden: '',
        actions: [],
        subitems:[]
    }];

    return (
        
        <div className="page" style={{color:"black"}}>
            
            <RecursiveAccordion  key={"accordion_0"}
                        accordionData={dataStructure}>

                {/* Multiple Children is needed! */}
                <div key={1} className="accordion_dropdown_item">
                    Teste1
                </div>
                <div key={2} className="accordion_dropdown_item">
                    Teste2
                </div>
                <div key={2} className="accordion_dropdown_item">
                    Teste3
                </div>
            </RecursiveAccordion>
        </div>
        
    );
};

export default Accordions;

