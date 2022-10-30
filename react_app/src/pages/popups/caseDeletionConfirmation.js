// #  Main Imports
import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

// # Import Component Style
import "../../pages/pages.css";

//Import Specific Styling
import { darkColors } from "../../components/common/MaterialColors";

// #  Local SubComponents & utils
/* import { expiredToken } from '../../components/utils' */

// # Contexts
/* import { AuthContext } from '../../components/contexts/AuthContext';
import { ToastContext } from '../../components/contexts/ToastContext'; */
import { ModalContext } from "../../contexts/ModalContext";
import { SearchContext } from "../../contexts/SearchContext";

function CaseDeletionConfirmation(props) {
 
  const history = useHistory();
  /*     const { toastList, setToastList, showToast } = useContext(ToastContext);
    const { handleLogout, token }  = useContext(AuthContext); */
  const { setIsModalOpen } = useContext(ModalContext);
  const { casesData, setCasesData } =
    useContext(SearchContext);
    const { id } = useParams();

  // Case Deletion function
  function deleteCase() {
      const successURL = "/cases";
      const filterCase = casesData.filter((item) => item.id !== Number(id));
      setCasesData(filterCase);
      history.push(successURL);
    setIsModalOpen(false);
  }

  return (
    <div>
      <p className="modal_text_message"> Confirm deletion of Case {id}? </p>
      {/* Confirm button */}
      <button
        className="modal_confirm-button"
        //specific styling
        style={{ backgroundColor: darkColors.green }}
        onClick={deleteCase}
      >
        <i className="fas fa-check" /> Confirm
      </button>
    </div>
  );
}

export default CaseDeletionConfirmation;
