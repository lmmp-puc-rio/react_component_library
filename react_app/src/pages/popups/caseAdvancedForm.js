// #  Main Imports
import React, { useContext } from "react";

// # Import Component Style
import "../../pages/pages.css";

//Import Specific Styling
import { darkColors } from "../../components/common/MaterialColors";

// # Contexts
import { ModalContext } from "../../contexts/ModalContext";
import { ActiveTabContext } from "../../contexts/ActiveTabContext";

function CaseAdvancedForm(props) {

  const { setIsModalOpen } = useContext(ModalContext);
  const { setActiveTab } = useContext(ActiveTabContext);

  // Case Deletion function
  function redirectToAdvancedForm() {
    setIsModalOpen(false);
    setActiveTab("tab2")
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
