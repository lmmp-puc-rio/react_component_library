// #  Main Imports
import React, { useContext, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import  ReactDOM  from "react";
// # Import Component Style
import "../../pages/pages.css";
import"./editCase.css"
//Import Specific Styling
import { darkColors } from "../../components/common/MaterialColors";
import { Toggle } from "../../components/common";
// # Contexts
import { ModalContext } from "../../contexts/ModalContext";
import { SearchContext } from "../../contexts/SearchContext";
import Plot from 'react-plotly.js';
import ActionFabGrid from "../../components/common/actionFabGrid";




function EditCase(props) {
  const history = useHistory();
  
  const [pageState, SetPageState] = useState(0)
  const { id } = useParams();
  const { isModalOpen,setIsModalOpen } = useContext(ModalContext);
  const { casesData, setCasesData } = useContext(SearchContext);

      
  // Case Edit function
  function editCase() {
    const successURL = "/cases";
    const filterCase = casesData.filter((item) => item.id !== Number(id));
    setCasesData(filterCase);
    setIsModalOpen(false);
    history.push(successURL);
  }
  
  const closeModal = () => {
    setIsModalOpen(!isModalOpen);

}

/*Toggle*/
const logState = state => {
    console.log("Toggled:", state)    
}

/*ActionGrid*/

const headersDisplacement = {
    header: [
      { id: "id",key: "Densidade", label: "Densidade(kg/m³)", expandable: false },
      { id: "id",key: "Temperatura", label: "Temperatura (ºC)", expandable: true },
      { id: "id",key: "Pressão", label: "Pressão(psi)", expandable: true },
    ],
    actions: [
      {
        tooltip: "Select Button",
        backgroundColor: darkColors.yellow,
        color: darkColors.white,
      },
    ],
  };

  const [isSelectAllCheckedDisplacement, setSelectAllCheckedDisplacement] =
  useState(false);
  const [countSelectRowsDisplacement, setCountSelectRowsDisplacement] =
    useState("");

    const rowsDataDisplacementFluids = [
        {
          id: 1,
          Densidade: "1000",
          Temperatura: "25",
          Pressão: "10000",
          selected: false,
        },
        {
          id: 2,
          Densidade: "1600",
          Temperatura: "0.2",
          Pressão: "10000",
          selected: false,
        },
        {
          id: 3,
          Densidade: "1300",
          Temperatura: "0.6",
          Pressão: "10000",
          selected: false,
        },
       
      ];
      const [rowsDisplacement, setRowsDisplacement] = useState([]);
  
    if (pageState == 0) {
        return (
            <div>
                <p>Criar um novo Fluido</p>
                <div className="back-modal">
                    <label className="label"> identificação </label>
                    <div>
                        <label className="label">nome:</label> 
                        <input className="input-fluid-nome" type="text" placeholder="nome"/>
                        <label>cor:</label>
                        <label className="label">Grupo:</label>
                        <select>
                            <option>Perfuração</option>
                        </select>
                    </div>   
                </div>
                <div className="back-modal">
                    <label className="label">Densidade:</label> 
                    <input type={"checkbox"}/> <label>Dependência(P/T)</label>
                    <button onClick={()=>SetPageState(1)}>click</button>
                    <input type="text" className="input-fluid" placeholder = "Densidade" />
                    <select>
                        <option>lb/gal</option>
                    </select>
                </div>
                <div className="back-modal">
                    <label className="label">Modelo Reológico</label>
                    <select>
                        <option>Herschel-Bulkley</option>
                    </select>
                    <button onClick={()=>SetPageState(2)}>clickPage2</button>
                    <label className="label">Tensao Limite de Escoamento</label>
                    <input type={"text"} className="input-fluid" />
                    <select>
                        <option>lbf/100ft²</option>
                    </select>
                    <label className="label">k</label>
                    <input type={"text"}  className="input-fluid"/>
                    <select>
                        <option>lbf.s^n/100ft²</option>
                    </select>

                    <label className="label">n</label>
                    <input type={"text"} className="input-fluid"/>
                </div>
                
                    {/* Cancel button */}
                    <a href={"/cases"}>
                    {/* //TODO: Check how to do without reload */}
                        <button className='modal_cancel-button'
                                onClick={closeModal}
                                //specific styling
                                style={{backgroundColor: darkColors.red}}>
                                <i className='fas fa-times'/> Cancel
                        </button>
                    </a>
            </div>

        );
    } else if (pageState == 1) {
        return(
        
            <div>
                
                <p>Densidade Varia Com</p>
                {/*toggle*/}                
                <Toggle
            label="Pressão"
            toggled={true}
            onClick={logState}
        />
            <Toggle
            label="Temperatura"
            toggled={false}
            onClick={logState}
        />

        <div>
            <Plot
                data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                },
                ]}
                layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
            />
        </div>
        <div>
            <ActionFabGrid
                  metaData={headersDisplacement}
                  isSelectAllChecked={isSelectAllCheckedDisplacement}
                  setSelectAllChecked={setSelectAllCheckedDisplacement}
                  countSelectRows={countSelectRowsDisplacement}
                  setCountSelectRows={setCountSelectRowsDisplacement}
                  rows={rowsDataDisplacementFluids}
                  setRows={setRowsDisplacement}
            />
        </div>
                    {/* Cancel button */}
                        <button className='modal_cancel-button'
                                onClick={()=>SetPageState(0)}
                                //specific styling
                                style={{backgroundColor: darkColors.red}}>
                                <i className='fas fa-times'/> Cancel
                        </button>
                    
                <button className="modal_confirm-button">salvar</button>
            </div>
        )
    } else if (pageState == 2) {
        return(
            <div>
                <div>
                    <select>
                        <option>Herschel-Bulkley</option>
                        <option>Binghan</option>
                        <option>Power-law</option>
                    </select>
                </div>
                <div>
                    <Plot
                    data={[
                     {
                        x: [1, 2, 3],
                        y: [2, 6, 3],
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: {color: 'red'},
                    },
                    ]}
                    layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
                />
                </div>

                <div>
                <ActionFabGrid
                  metaData={headersDisplacement}
                  isSelectAllChecked={isSelectAllCheckedDisplacement}
                  setSelectAllChecked={setSelectAllCheckedDisplacement}
                  countSelectRows={countSelectRowsDisplacement}
                  setCountSelectRows={setCountSelectRowsDisplacement}
                  rows={rowsDataDisplacementFluids}
                  setRows={setRowsDisplacement}
                />
            </div>

                {/* Cancel button */}
                <button className='modal_cancel-button'
                    onClick={()=>SetPageState(0)}
                    //specific styling
                    style={{backgroundColor: darkColors.red}}>
                    <i className='fas fa-times'/> Cancel
                </button>
                    
                <button className="modal_confirm-button">salvar</button>
            </div>
        )
    }

}



export default EditCase;