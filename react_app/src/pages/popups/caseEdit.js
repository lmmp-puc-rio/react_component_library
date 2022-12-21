// #  Main Imports
import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

// # Import Component Style
import "../../pages/pages.css";
import"./editCase.css"
//Import Specific Styling
import { darkColors } from "../../components/common/MaterialColors";

// # Contexts
import { ModalContext } from "../../contexts/ModalContext";
import { SearchContext } from "../../contexts/SearchContext";

function EditCase(props) {
  const history = useHistory();

  const { id } = useParams();
  const { setIsModalOpen } = useContext(ModalContext);
  const { casesData, setCasesData } = useContext(SearchContext);

  // Case Edit function
  function editCase() {
    const successURL = "/cases";
    const filterCase = casesData.filter((item) => item.id !== Number(id));
    setCasesData(filterCase);
    setIsModalOpen(false);
    history.push(successURL);
  }

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

    </div>
  );
}

export default EditCase;