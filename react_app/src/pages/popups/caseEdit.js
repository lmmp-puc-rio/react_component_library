// #  Main Imports
import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

// # Import Component Style
import "../../pages/pages.css";

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
       <div>
            <p className="modal_text_message"> identificação </p>
            <div>
                <p>nome</p>
                <input type="text" placeholder="nome"/>
                <p>Grupo</p>
                <select>
                    <option>Perfuração</option>
                </select>
            </div>   
       </div>
       <div>
            <p>Densidade</p>
            <input type="text" placeholder = "Densidade" />
            <select>
                <option>lb/gal</option>
            </select>
       </div>

    </div>
  );
}

export default EditCase;