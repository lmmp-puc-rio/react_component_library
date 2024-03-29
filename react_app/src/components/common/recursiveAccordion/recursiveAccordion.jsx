/* Accordion: must receive JS object as input with tabs labels and rescpective children inside.
- tabs must animate smoothly
- careful with double scrolling. */

// # Main Import 
import React, { useState } from 'react';

// # Import Component Style
import './recursiveAccordion.css';

// Accordion External Section
function AccordionSection(props) {
    return (
        <div key={"acc_section_"+props.id} className="accordion_section">
            {props.children}
        </div>
    )
}

// Container to multiple Accordion Items - mapped 
function AccordionContainer(props) {
    return (
        <div key={"acc_container_"+props.id} className="accordion_container">
            {props.children}
        </div>
    )
}

// Accordion Item Dropdown - Part that is hidden
function AccordionDropdown(props) {
    
    return (
        <div key={"acc_dropdown_"+props.id} className="accordion_dropdown">
            {/* <p>{props.body}</p> */}
            {props.children}
        </div>
    )
}

// Accordion Item Wrap - Part that is showing
function AccordionWrap(props) {
    const name = props.name
    // Only One can be opened at a time (comment below to change behavior)
    const isOpen = props.isOpen
    const handleToggle = props.handleToggle


    // All Accordion Tabs can be opened simultaneously (comment below to change behavior)
    // const [isOpen, setIsOpen] = useState(props.accKey === props.id)
    

    // const [isEditable, setIsEditable] = useState(true)
    let state = props.state
    let changeState = props.changeState

    return (
        <>
        {isOpen ?
        <div key={"OuterDiv_"+props.id} className={"accordion"}>
            <div    key={"acc_wrap_"+props.id} 
                    className={"accordion_wrap"}>
                {/* Title */}
                <h1>{props.title}</h1>
                { (props.actions.length > 0)
                    &&
                // ((!isEditable && 
                ((!state && 
                    // <button onClick={() => setIsEditable(!isEditable)}>  
                    <button onClick={(state) => changeState(!state)}>  
                        {props.actions[0].title}
                    </button>)
                ||
                // (isEditable && 
                (state && 
                    // <button onClick={() => setIsEditable(!isEditable)}>  
                    <button onClick={() => changeState(!state)}>  
                        {props.actions[1].title}
                    </button>))
                }
                
                {/* // All Accordion Tabs can be opened simultaneously */}
                <div onClick={() => handleToggle(name)}> {isOpen ? <i class="fas fa-times"></i>: <i class="fas fa-plus"></i>}</div>

                {/* // Only One can be opened at a time */}
                {/* <div onClick={() => setIsOpen(!isOpen)}> {isOpen ? "-" : "+"}</div> */}

            </div>
            {isOpen && 
                <AccordionDropdown id={props.id} body={props.body}>
                    {props.children}
                </AccordionDropdown>}
        </div> : <div key={"OuterDiv_"+props.id} className={"accordionClose"}>
            <div    key={"acc_wrap_"+props.id} 
                    className={"accordion_wrap"}>
                {/* Title */}
                <h1>{props.title}</h1>
                { (props.actions.length > 0)
                    &&
                // ((!isEditable && 
                ((!state && 
                    // <button onClick={() => setIsEditable(!isEditable)}>  
                    <button onClick={(state) => changeState(!state)}>  
                        {props.actions[0].title}
                    </button>)
                ||
                // (isEditable && 
                (state && 
                    // <button onClick={() => setIsEditable(!isEditable)}>  
                    <button onClick={() => changeState(!state)}>  
                        {props.actions[1].title}
                    </button>))
                }
                
                {/* // All Accordion Tabs can be opened simultaneously */}
                <div onClick={() => handleToggle(name)}> {isOpen ? <i class="fas fa-times"></i>: <i class="fas fa-plus"></i>}</div>

                {/* // Only One can be opened at a time */}
                {/* <div onClick={() => setIsOpen(!isOpen)}> {isOpen ? "-" : "+"}</div> */}

            </div>
            {isOpen && 
                <AccordionDropdown id={props.id} body={props.body}>
                    {props.children}
                </AccordionDropdown>}
        </div>
        }
        </>
    )
}

// # Accordion React Component Construction
function RecursiveAccordion (props) {
    
    const accordionData = props.accordionData;
    const conversionFactors = props.conversionFactors;
    const state =props.state;
    const changeState=props.changeState;

    // Only One can be opened at a time (comment below to change behavior)
    const [openKey, setOpenKey] = useState("accordionWrap_"+1)
    const handleToggle = key => {
        console.log(key)
        setOpenKey(key)
        }
        
        

    
    return (
        <AccordionSection className="accordion_section">
            <AccordionContainer  className="accordion_container">
                {accordionData.map((item) => {
                        return (
                            <>
                            {/* Base Case */}
                            { item.subitems.length === 0 ? (
                            <AccordionWrap  key={"accordionWrap_"+item.id}
                                            name={"accordionWrap_"+item.id}
                                            title={item.main} 
                                            actions={item.actions}
                                            state={state}
                                            changeState={changeState}
                                            // Only One can be opened at a time (comment below to change behavior)
                                            handleToggle={handleToggle}
                                            isOpen={openKey === "accordionWrap_"+item.id}>
                                {/* Map children components by key inside Accordion structure */}
                                {props.children.map((child) => {
                                    if (child.key === item.id) {
                                        return (
                                            child
                                        )                                        
                                        } 
                                    })
                                }
                            </AccordionWrap>
                            ) : 
                            (
                            <AccordionWrap  key={"accordionWrap_"+item.id}
                                            name={"accordionWrap_"+item.id}
                                            title={item.main} 
                                            actions={item.actions}
                                            state={state}
                                            changeState={changeState}
                                            // Only One can be opened at a time (comment below to change behavior)
                                            handleToggle={handleToggle}
                                            isOpen={openKey === "accordionWrap_"+item.id}>
                                <RecursiveAccordion key={"accordion_"+item.id} 
                                            state={state}
                                            changeState={changeState}
                                            accordionData={item.subitems}
                                            conversionFactors={conversionFactors}>
                                    {props.children}
                                </RecursiveAccordion>
                            </AccordionWrap>
                            )
                }
                            </>
                            );
                    })}
            </AccordionContainer> 
        </AccordionSection>
    )
}

export default RecursiveAccordion;