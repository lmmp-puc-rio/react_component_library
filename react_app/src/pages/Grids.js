// #  Main Imports
import React, { useState } from 'react';

// #  Local SubComponents & utils
import { ExpandableGrid, FAB, GridForm } from '../components/common'

// # Import Component Style
import './pages.css'
import { darkColors,lightColors } from '../components/common';

const Grids = (props) => {

    const [ caseList,setCaseList ] = useState([]);

    //TODO: Bring all dynamic data from the API
    const conversionFactors = { lenght: {"km": 1000, "cm": 1/100, "mm": 1/1000, "um": 1/1000000, "m": 1},
    pressure: {"psi": 0.000145038, "mmHg": 0.00750062, "Pa": 1,}};

    const  formData = {gap: {label: "Gap:", defaultValue:"0", unitType:"lenght", selectecUnit:"mm"},
    size: {label: "Size:", defaultValue:"0", unitType:"lenght", selectecUnit:"cm"},
    p0: {label: "Inlet Pressure:", defaultValue:"0", unitType:"pressure", selectecUnit:"psi"}};

    // Route
    const route = '/grids'

    const metaData = { header: [{key: "action", label: "Actions", expandable: false},
                                {key: "id",label: "ID", expandable: false},
                                {key: "name",label: "Name", expandable: false},
                                {key: "desc",label: "Description", expandable: true},
                                {key: "created",label: "Created", expandable: true},
                                {key: "modified", label: "Modified", expandable: true},
                                {key: "lastrun", label: "Last Run", expandable: true}],
                                actions:[{tooltip: "Edit Case",icon: "fas fa-edit", callback: null,
                                            key: "edit_case_button_",route: "/",
                                            backgroundColor: darkColors.yellow ,color: darkColors.white },
                                        {tooltip: "Delete Case",icon: "fas fa-trash", callback: null,
                                            key: "delete_case_button_",route: "/",
                                            backgroundColor: darkColors.red ,color: darkColors.white },
                                        {tooltip: "Dupicate Case",icon: "fas fa-copy", callback: null,
                                            key: "duplicate_case_button_",route: "/",
                                            backgroundColor: darkColors.blue ,color: darkColors.white }
                                        ]
    };

    const data = [  {id:1, name:"Case 1",desc:"Demo Case 1", created:"01/01/2021 09:00:00", modified:"01/03/2021 09:00:00", lastrun:"01/03/2021 09:00:00"},
                    {id:2, name:"Case 2",desc:"Demo Case 2", created:"01/04/2021 09:00:00", modified:"05/03/2021 09:00:00", lastrun:"05/04/2021 09:00:00"}
    ];

    return (
        <div className="page" style={{color:"black"}}>
            <legend className="pages-title"> GridForm </legend>
            {/* AUTOMATIC CREATION FROM DATA: simply pass data prop */}
            <GridForm data={formData} conversionFactors={conversionFactors} />

            <legend className="pages-title"> ExpandableGrid </legend>
            {/* <Accordion key={"0"} data={accordionData} /> */}
            <ExpandableGrid metaData={metaData} data={data} />
        </div>
        
    );
};

export default Grids;
