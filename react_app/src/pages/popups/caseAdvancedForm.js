// #  Main Imports
import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

// # Import Component Style
import "../../pages/pages.css";

//Import Specific Styling
import { darkColors } from "../../components/common/MaterialColors";

// # Contexts
import { ModalContext } from "../../contexts/ModalContext";

function CaseAdvancedForm(props) {
  const history = useHistory();

  const { setIsModalOpen } = useContext(ModalContext);

  // Case Deletion function
  function redirectToAdvancedForm() {
    const successURL = "/BasicAndAdvancedForm/FormulárioAvançado";
    setIsModalOpen(false);
    history.push(successURL);
  }

  return (
    <div>
      <p className="modal_text_message"> Você tem certeza de que gostaria de preencher as Configurações Avançadas? </p>
      {/* Confirm button */}
      <button
        className="modal_confirm-button"
        //specific styling
        style={{ backgroundColor: darkColors.green }}
        onClick={redirectToAdvancedForm}
      >
        <i className="fas fa-check" /> Confirm
      </button>
    </div>
  );
}

export default CaseAdvancedForm;
